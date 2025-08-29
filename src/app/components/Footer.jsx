"use client";

import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Company */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs tracking-wide uppercase border-[color:var(--border)] bg-[color:var(--surface)]/60 text-[color:var(--muted-foreground)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Vardhanya</span>
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Vardhanya Solution Ltd.
              </span>
            </h3>
            <p className="mt-3 max-w-md text-sm md:text-base text-[color:var(--muted-foreground)]">
              Your one‑stop digital partner for design, development, and growth.
            </p>
          </div>

          {/* Middle: Regions */}
          <div className="md:text-center">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-[color:var(--muted-foreground)]">
              Regions
            </h4>
            <div className="mt-4 flex flex-wrap md:justify-center gap-2">
              {[{ label: "India" }, { label: "Canada" }, { label: "USA" }].map(
                (r) => (
                  <span
                    key={r.label}
                    className="rounded-full border px-3 py-1 text-sm border-[color:var(--border)] bg-[color:var(--surface)]/60 text-[color:var(--foreground)]/80 hover:opacity-100 hover:bg-[color:var(--hover-surface)] transition-colors"
                  >
                    {r.label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-[color:var(--muted-foreground)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <IconMapPin size={18} className="mt-0.5 text-emerald-400" />
                <span className="text-[color:var(--foreground)]/85">
                  Ahmedabad, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <IconPhone size={18} className="text-emerald-400" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-emerald-400 transition-colors"
                  title="Call us"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconMail size={18} className="text-emerald-400" />
                <a
                  href="mailto:hello@vardhanya.ca"
                  className="hover:text-emerald-400 transition-colors"
                  title="Email us"
                >
                  hello@vardhanya.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub‑footer */}
      <div className="border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-xs md:text-sm text-[color:var(--muted-foreground)]">
            All rights reserved from 2020.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
