"use client";

import { useState } from "react";
import SettingsHeader from "@/components/dashboard/settings/SettingsHeader";
import SettingsFooter from "@/components/dashboard/settings/SettingsFooter";
import ProfileSection from "@/components/dashboard/settings/ProfileSection";
import SecuritySection from "@/components/dashboard/settings/SecuritySection";
import PreferencesSection from "@/components/dashboard/settings/PreferencesSection";
import DataManagementSection from "@/components/dashboard/settings/DataManagementSection";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isDirty, setIsDirty] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "security", label: "Security" },
    { id: "preferences", label: "Preferences" },
    { id: "data", label: "Data Management" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSection />;
      case "security":
        return <SecuritySection />;
      case "preferences":
        return <PreferencesSection />;
      case "data":
        return <DataManagementSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] relative">
      <SettingsHeader
        title="Account Settings"
        description="Manage your personal identity, security parameters, and AI writing preferences for the ColdReply engine."
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="flex-1 p-8 pb-32 max-w-5xl mx-auto w-full">
        {renderContent()}
      </main>

      <SettingsFooter
        onSave={() => setIsDirty(false)}
        onDiscard={() => setIsDirty(false)}
        isDirty={isDirty || activeTab !== "data"} // Force showing for demo purposes as requested in design "Preferences"
      />
    </div>
  );
}
