"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Variant = "light-nav" | "dark-nav";

export default function ThemeToggle({ variant = "light-nav" }: { variant?: Variant }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
          variant === "dark-nav"
            ? "border border-slate-600/50 bg-slate-800/40"
            : "border border-gray-200 bg-gray-100"
        }`}
        aria-hidden="true"
      />
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  const base =
    variant === "dark-nav"
      ? "border border-slate-600/50 bg-slate-800/40 text-slate-300 hover:text-white hover:border-slate-400"
      : "border border-gray-200 bg-gray-100 text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-400";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${base}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
