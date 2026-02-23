import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
    (config) => {
        const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for handling token expiration
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Call the refresh token endpoint
                const refreshResponse = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/auth/refresh`,
                    {},
                    { withCredentials: true }
                );

                // The new access token is returned in the response
                const newAccessToken = refreshResponse.data.accessToken;

                // Update local storage so future requests use the new token
                if (typeof window !== "undefined" && newAccessToken) {
                    localStorage.setItem("accessToken", newAccessToken);

                    // Update the authorization header for the original failed request
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    // Retry the original request
                    return api(originalRequest);
                }
            } catch (refreshError) {
                // Redirect to login if refresh fails (e.g., refresh token is expired/invalid)
                if (typeof window !== "undefined") {
                    localStorage.removeItem("accessToken");
                    window.location.href = "/login";
                }
            }
        }
        return Promise.reject(error);
    }
);

export default api;
