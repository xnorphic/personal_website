import SiteHeader from "@/components/SiteHeader";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-slate-950 dark:text-gray-100">
      <SiteHeader />
      {children}
    </div>
  );
}
