import { Notification } from "@/types/types";

export const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: "1",
        title: "Credits Low",
        message: "Your credits are running low. Upgrade to Pro for more!",
        time: "2 hours ago",
        type: "warning",
        isRead: false,
    },
    {
        id: "2",
        title: "Campaign Complete",
        message: "Your 'Tech Founders' campaign has successfully completed.",
        time: "5 hours ago",
        type: "success",
        isRead: false,
    },
    {
        id: "3",
        title: "New Feature",
        message: "Try our new AI-powered personalization engine now!",
        time: "1 day ago",
        type: "info",
        isRead: true,
    },
    {
        id: "4",
        title: "Payment Successful",
        message: "Your monthly subscription has been renewed.",
        time: "2 days ago",
        type: "success",
        isRead: true,
    },
    {
        id: "5",
        title: "Failed Leads",
        message: "3 leads in your last batch could not be processed.",
        time: "3 days ago",
        type: "error",
        isRead: true,
    }
];
