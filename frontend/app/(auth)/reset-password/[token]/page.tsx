import { Metadata } from "next";
import ResetPasswordHeader from "@/components/auth/reset-password/ResetPasswordHeader";
import ResetPasswordCard from "@/components/auth/reset-password/ResetPasswordCard";
import ResetPasswordFooter from "@/components/auth/reset-password/ResetPasswordFooter";

export const metadata: Metadata = {
    title: "Reset Password | ColdReply",
    description: "Create a new password to secure your account.",
};

interface PageProps {
    params: Promise<{ token: string }>;
}

export default async function ResetPasswordPage({ params }: PageProps) {
    const { token } = await params;

    return (
        <div className="bg-background-light min-h-screen flex flex-col items-center justify-center p-6 font-manrope relative overflow-hidden">
            {/* Background Decorations */}
            <div className="fixed top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/5 rounded-bl-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="fixed bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-primary/5 rounded-tr-full blur-3xl opacity-50 animate-pulse"></div>

            <div className="w-full flex flex-col items-center">
                <ResetPasswordHeader />
                <ResetPasswordCard token={token} />
                <ResetPasswordFooter />
            </div>

            {/* Subtle Texture Overlay */}
            <div
                className="fixed inset-0 pointer-events-none -z-50 opacity-[0.02]"
                style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-QY83y5iXMCkdGp8RZyns2bE3fllpGCL7Vd6A0Aw-lrjD5_3SlMLEbwggxiNjWiOLvDGu6BxseIWwOuxiHFkcHIFYLyxViJ_2YHnX94Bbfp_4IyjwSf4jjX41FlvMZbu5B7mnkuAV8hCyqLCoYUHhRvpmMDb7ay8RxjLg8wDItTQqyUkuNnW7TdmdQU8hZw2l6Kk36KQSWddGizSZI0Alf4VZ9cNTE8d7dY4CkEtiaLE_02pL8JVAHkrrEoinaVcAEDWUdkTKlPY')`
                }}
            ></div>
        </div>
    );
}
