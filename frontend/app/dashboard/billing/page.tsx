"use client";

import TopBar from "@/components/layouts/TopBar";
import BillingHeader from "@/components/dashboard/billing/BillingHeader";
import PlanHero from "@/components/dashboard/billing/PlanHero";
import PlanOptions from "@/components/dashboard/billing/PlanOptions";
import BillingDetails from "@/components/dashboard/billing/BillingDetails";
import InvoiceHistory from "@/components/dashboard/billing/InvoiceHistory";

export default function BillingPage() {
  return (
    <>
      <TopBar />

      <main className="p-4 md:p-8 space-y-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <BillingHeader />

          <PlanHero />

          <PlanOptions />

          <BillingDetails />

          <InvoiceHistory />
        </div>
      </main>
    </>
  );
}
