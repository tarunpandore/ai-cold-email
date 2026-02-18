"use client";

import { useEffect, useRef } from "react";
import { Bell, CheckCircle2, Info, AlertTriangle, XCircle, X } from "lucide-react";
import { Notification, NotificationType } from "@/types/types";
import { MOCK_NOTIFICATIONS } from "@/lib/mock";
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

interface NotificationPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
        case "success":
            return <CheckCircle2 size={18} className="text-emerald-500" />;
        case "warning":
            return <AlertTriangle size={18} className="text-amber-500" />;
        case "error":
            return <XCircle size={18} className="text-rose-500" />;
        default:
            return <Info size={18} className="text-blue-500" />;
    }
};

const getNotificationBg = (type: NotificationType) => {
    switch (type) {
        case "success":
            return "bg-emerald-50 border-emerald-100";
        case "warning":
            return "bg-amber-50 border-amber-100";
        case "error":
            return "bg-rose-50 border-rose-100";
        default:
            return "bg-blue-50 border-blue-100";
    }
};

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={panelRef}
            className="absolute top-16 right-0 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in zoom-in duration-200 origin-top-right"
        >
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                    <Bell size={18} className="text-primary" />
                    <h3 className="font-bold text-slate-800">Notifications</h3>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                        {MOCK_NOTIFICATIONS.filter(n => !n.isRead).length} New
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
                >
                    <X size={18} />
                </button>
            </div>

            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {MOCK_NOTIFICATIONS.length > 0 ? (
                    <div className="divide-y divide-slate-50">
                        {MOCK_NOTIFICATIONS.map((notification) => (
                            <div
                                key={notification.id}
                                className={cn(
                                    "p-4 hover:bg-slate-50 transition-colors cursor-pointer group relative",
                                    !notification.isRead && "bg-primary/[0.02]"
                                )}
                            >
                                {!notification.isRead && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                                )}
                                <div className="flex gap-3">
                                    <div className={cn(
                                        "size-9 rounded-xl flex items-center justify-center shrink-0 border",
                                        getNotificationBg(notification.type)
                                    )}>
                                        {getNotificationIcon(notification.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className={cn(
                                                "text-sm font-semibold truncate pr-2",
                                                notification.isRead ? "text-slate-600" : "text-slate-900"
                                            )}>
                                                {notification.title}
                                            </h4>
                                            <span className="text-[10px] text-slate-400 whitespace-nowrap pt-0.5">
                                                {notification.time}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                            {notification.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 px-4 text-center">
                        <div className="size-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Bell size={24} className="text-slate-300" />
                        </div>
                        <p className="text-slate-500 font-medium">No notifications yet</p>
                        <p className="text-slate-400 text-xs mt-1">We'll let you know when something happens.</p>
                    </div>
                )}
            </div>

            {MOCK_NOTIFICATIONS.length > 0 && (
                <div className="p-3 border-t border-slate-100 bg-slate-50/50">
                    <button className="w-full py-2 text-xs font-bold text-primary hover:bg-white rounded-lg border border-transparent hover:border-primary/20 transition-all text-center">
                        Mark all as read
                    </button>
                </div>
            )}
        </div>
    );
}
