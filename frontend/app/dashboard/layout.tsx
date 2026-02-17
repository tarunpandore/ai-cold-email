import Sidebar from "@/components/layouts/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light text-slate-900 font-sans relative">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto bg-background-light scroll-smooth overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
