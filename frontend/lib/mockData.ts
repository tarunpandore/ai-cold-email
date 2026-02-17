import { Send, Zap, CheckCircle, Star, FileText } from "lucide-react";

export const MOCK_USER = {
    name: "Tarun",
    email: "tarunpandore8@gmail.com",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVSemate3aUZQEJspoQhXiHOIGiYMCOPw92HZWgjBb73Da_ZIUae0-kAFnofICf-QKpTtv0QeS56bRpfaecChQsIRkQ9f4VGEN_P6dpqEbT17bB8GWViuNriCTHA7R6fTepGJ-DVLOctEqytVqtnPV9b9VJxWA6WJTqJpH7xN9nN6aiLEXbNLnvtedjGGfNkY8UQhcuBNSAS_7zY2ZtIKt5DkRmkdaYIeJgqrEm7qJDqQtxlCnTqZMOF73F5MIMoNB58qr0XEVHZ0",
    plan: "Pro",
    creditsRemaining: 650,
    totalCredits: 1000,
};

export const MOCK_STATS = [
    {
        label: "Leads Processed",
        value: "12,840",
        change: "+12.5%",
        trend: "up",
        icon: "send",
        iconBg: "bg-blue-50 text-blue-600",
    },
    {
        label: "Remaining Credits",
        value: "650",
        change: "PRO PLAN",
        trend: "neutral",
        icon: "zap",
        iconBg: "bg-emerald-50 text-emerald-600",
        isDynamicCredit: true,
    },
    {
        label: "Avg Personalization",
        value: "92%",
        change: "+4.2%",
        trend: "up",
        icon: "check-circle",
        iconBg: "bg-amber-50 text-amber-600",
    },
    {
        label: "Email Quality",
        value: "88%",
        change: "+2.1%",
        trend: "up",
        icon: "star",
        iconBg: "bg-purple-50 text-purple-600",
    },
];

export const MOCK_ACTIVITY = [
    {
        id: 1,
        batch: "SaaS_Founders_Series_A.csv",
        date: "May 24, 2024",
        personalization: 96,
        status: "Completed",
        statusColor: "bg-green-100 text-green-700",
        dotColor: "bg-green-500",
    },
    {
        id: 2,
        batch: "Ecom_D2C_Q2_Leads.csv",
        date: "May 23, 2024",
        personalization: 82,
        status: "Processing",
        statusColor: "bg-amber-100 text-amber-700",
        dotColor: "bg-amber-500",
        pulse: true,
    },
    {
        id: 3,
        batch: "LinkedIn_Outbound_V3.csv",
        date: "May 21, 2024",
        personalization: 89,
        status: "Completed",
        statusColor: "bg-green-100 text-green-700",
        dotColor: "bg-green-500",
    },
];

export const MOCK_CHART_DATA = {
    leadsProcessed: [
        { day: "May 01", value: 30 },
        { day: "May 10", value: 20 },
        { day: "May 20", value: 25 },
        { day: "May 30", value: 40 },
    ],
    scoreTrend: [
        { label: "Wk 1", value: 40 },
        { label: "Wk 2", value: 55 },
        { label: "Wk 3", value: 70 },
        { label: "Wk 4", value: 90, active: true },
    ],
};
