"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight || 1;
      setProgress(Math.min(100, Math.max(0, (y / total) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // // Avoid hydration mismatch for theme-based icons
  // useEffect(() => setMounted(true), []);

  // const cycleTheme = () => {
  //   // Cycle through light -> dark -> system -> light
  //   if (theme === 'light') setTheme('dark');
  //   else if (theme === 'dark') setTheme('system');
  //   else setTheme('light');
  // };

  // const ThemeIcon = () => {
  //   const current = theme === 'system' ? systemTheme : resolvedTheme;
  //   if (!mounted) return null;
  //   if (theme === 'system') return <IconDeviceDesktop size={18} />;
  //   return current === 'dark' ? <IconMoon size={18} /> : <IconSun size={18} />;
  // };

  return (
    <nav
      className={`fixed top-0 py-4 w-full z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "backdrop-blur-xl shadow-lg bg-[color:var(--surface)] border-[color:var(--border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Scroll progress bar */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold transition-colors text-[color:var(--foreground)] hover:text-emerald-500"
            >
              <Image
                src="/Logo.png" /* replace with '/logo.png' if you add a lowercase, transparent asset */
                alt="Vardhanya.ca"
                width={2500}
                height={80}
                className="bg-transparent h-28 w-auto select-none"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="relative px-2 py-2 text-sm font-medium transition-colors group text-[color:var(--foreground)] opacity-80 hover:opacity-100"
              >
                <span>Home</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/#services"
                className="relative px-2 py-2 text-sm font-medium transition-colors group text-[color:var(--foreground)] opacity-80 hover:opacity-100"
              >
                <span>Services</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/#appointment"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-emerald-500/20 hover:scale-[1.02]"
              >
                Book Appointment
              </Link>
              {/* Theme toggle */}
              {/* <button
                type="button"
                onClick={cycleTheme}
                aria-label="Toggle color theme"
                className="inline-flex items-center justify-center rounded-md border p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[color:var(--hover-surface)]"
                title={`Theme: ${theme ?? 'system'}`}
              >
                <ThemeIcon />
              </button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[color:var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[color:var(--hover-surface)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-xl shadow-2xl border-t bg-[color:var(--surface)] border-[color:var(--border)]">
          <Link
            href="/"
            className="block px-3 py-2 text-base font-medium text-[color:var(--foreground)] opacity-80 hover:opacity-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="block px-3 py-2 text-base font-medium text-[color:var(--foreground)] opacity-80 hover:opacity-100"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/#appointment"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-900 block px-3 py-2 rounded-md text-base font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>

          {/* Mobile theme toggle */}
          {/* <button
            type="button"
            onClick={() => { cycleTheme(); setIsOpen(false); }}
            aria-label="Toggle color theme"
            className="mt-2 inline-flex items-center gap-2 rounded-md border px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[color:var(--hover-surface)]"
            title={`Theme: ${theme ?? 'system'}`}
          >
            <ThemeIcon />
            <span className="text-sm">Theme: {theme ?? 'system'}</span>
          </button> */}
        </div>
      </div>
      <div
        className="h-[2px] absolute bottom-0 left-0 transition-[width] duration-200"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #34d399, #2dd4bf, #22d3ee)",
        }}
      />
    </nav>
  );
}
