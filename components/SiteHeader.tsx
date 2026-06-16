import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-gray-200 dark:bg-slate-950/85 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-bold text-gray-900 dark:text-white text-lg tracking-tight shrink-0"
        >
          Aditya Sinha
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden sm:inline text-sm text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
