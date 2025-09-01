"use client";

import { useState } from "react";
import { items } from "../components/utils/bentoItems";

function getServiceContent(title = "") {
  const t = title.toLowerCase();
  if (t.includes("consultation"))
    return {
      blurb:
        "Collaborative discovery that turns ideas into a pragmatic, outcome‑driven plan. We align scope, tech, and timelines to what actually moves the needle.",
      bullets: [
        "Discovery workshops and stakeholder alignment",
        "Prioritized roadmap with milestones and risks",
        "Platform and architecture recommendations",
        "T‑shirt sizing for effort, cost, and impact",
      ],
      bestFor: "Founders validating scope or planning a new release",
      timeline: "1–2 weeks",
      deliverables: "Actionable roadmap, architecture notes, next steps",
    };

  if (t.includes("ux/ui") || t.includes("branding"))
    return {
      blurb:
        "From user flows to design systems, we ship interfaces that are fast, accessible, and unmistakably on‑brand—ready for production.",
      bullets: [
        "Research, flows, and wireframes",
        "High‑fidelity UI and interactive prototypes",
        "Design tokens and component library",
        "Brand identity, logos, and usage guidelines",
      ],
      bestFor: "Products needing a crisp V1 or a design refresh",
      timeline: "2–4 weeks",
      deliverables: "Figma files, assets, tokens, and handoff docs",
    };

  if (t.includes("e-commerce") || t.includes("commerce"))
    return {
      blurb:
        "Production‑ready storefronts and back‑office flows—checkout, subscriptions, inventory, and analytics—built for growth.",
      bullets: [
        "Headless Shopify/Medusa or full‑stack builds",
        "Payments, subscriptions, tax, and shipping",
        "Catalog, inventory, and fulfillment integrations",
        "Analytics, A/B testing, and SEO foundations",
      ],
      bestFor: "Brands launching or scaling online sales",
      timeline: "3–6 weeks (MVP)",
      deliverables: "Storefront, admin flows, docs, and training",
    };

  if (t.includes("ai-enhanced") || t.includes("existing"))
    return {
      blurb:
        "Add AI where it compounds value—assistive workflows, retrieval, and smart automation that slot into your current product.",
      bullets: [
        "RAG search over your docs and data",
        "Chat assistants and task copilots with guardrails",
        "Content generation and smart suggestions",
        "Evaluation, telemetry, and safety checks",
      ],
      bestFor: "Teams upgrading a shipped product with AI",
      timeline: "1–3 weeks per feature",
      deliverables: "Working feature, evals, and integration notes",
    };

  if (t.includes("guideline") || t.includes("ai consulting"))
    return {
      blurb:
        "A practical AI adoption plan—use‑case discovery, feasibility, data readiness, and governance tailored to your org.",
      bullets: [
        "Use‑case discovery and prioritization",
        "Model and tooling evaluation (build vs. buy)",
        "Data strategy, privacy, and governance",
        "ROI, risk, and phased rollout plan",
      ],
      bestFor: "Leaders seeking clarity before investing in AI",
      timeline: "1–2 weeks",
      deliverables: "Strategy brief, architecture options, next steps",
    };

  if (t.includes("maintenance") || t.includes("server"))
    return {
      blurb:
        "SRE and platform ops that keep your stack fast, secure, and predictable—weekday or weekend.",
      bullets: [
        "Monitoring, alerting, and on‑call playbooks",
        "Backups, disaster recovery, and incident drills",
        "Patching, hardening, and compliance hygiene",
        "Cost, performance, and autoscaling tuning",
      ],
      bestFor: "Teams needing reliable uptime and support",
      timeline: "Ongoing (monthly)",
      deliverables: "Runbooks, dashboards, and quarterly reviews",
    };

  if (t.includes("custom ai"))
    return {
      blurb:
        "Bespoke AI integrations—from API orchestration to fine‑tuning and embeddings—built with safety and observability.",
      bullets: [
        "API integrations (OpenAI, Claude, Gemini, Vertex)",
        "Fine‑tuning, embeddings, and vector pipelines",
        "Function calling and workflow automation",
        "Privacy, compliance, and auditability",
      ],
      bestFor: "Products needing tailored AI in critical paths",
      timeline: "2–6 weeks",
      deliverables: "Integrated service, evals, and ops docs",
    };

  return {
    blurb:
      "We scope, design, and ship this capability with production in mind—clear handoff, measurable outcomes, and ongoing support.",
    bullets: [
      "Clear scope and milestones",
      "Design and implementation",
      "Quality checks and documentation",
      "Launch support and follow‑ups",
    ],
    bestFor: "Teams shipping fast without sacrificing quality",
    timeline: "2–4 weeks",
    deliverables: "Working feature and handoff docs",
  };
}

export default function Services() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="relative min-h-[90vh] pt-28 overflow-hidden bg-gradient-to-tr from-black via-emerald-900/30 to-black">
      <section className="relative overflow-hidden bg-gradient-to-tr from-black via-emerald-900/30 to-black border-b border-[color:var(--border)]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-sm border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs tracking-wide uppercase">
              Pioneering, practical, production‑ready
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[color:var(--foreground)] max-w-4xl">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Full‑stack services to launch and scale your product
            </span>
          </h2>

          <p className="mt-4 text-lg md:text-2xl text-[color:var(--muted-foreground)] max-w-3xl">
            Clear for non‑technical teams. Deep enough for engineers. We blend
            strategy, design, commerce, AI, and SRE so your ideas become
            reliable, scalable products—fast.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="/#appointment"
              className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:shadow-emerald-500/30 text-center"
            >
              Talk to an expert
            </a>
            <a
              href="#capabilities"
              className="rounded-lg border px-6 py-3 transition-colors border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]/80 hover:opacity-100 hover:bg-[color:var(--hover-surface)] text-center"
            >
              Explore capabilities
            </a>
          </div>
        </div>
      </section>
      {/* Capabilities (Modern, minimal, progressive disclosure) */}
      <section
        id="capabilities"
        className="relative overflow-hidden border-b border-[color:var(--border)]"
      >
        {/* softly‑lit background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Section intro */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 shadow-sm border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]/80">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-[11px] tracking-wide uppercase">
                  Pioneer‑grade capabilities
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-[color:var(--foreground)]">
                What we do—built for production
              </h3>
              <p className="mt-2 text-lg text-[color:var(--muted-foreground)] max-w-2xl">
                Clear for non‑technical teams. Deep enough for engineers. Tap or
                hover a card to see how we approach delivery, what you get, and
                when.
              </p>
            </div>
            <div className="hidden md:flex -space-x-2">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-sky-500/30 text-sky-300 bg-sky-500/10">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l2.39 7.34H22l-6.19 4.5L18.2 22 12 17.77 5.8 22l2.39-8.16L2 9.34h7.61L12 2z" />
                </svg>
                Pioneer mindset
              </span>
            </div>
          </div>

          {/* Layout: sticky approach + accordion list */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sticky side card */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/60 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/50 p-6">
                <h4 className="text-lg font-semibold text-[color:var(--foreground)]">
                  Our approach
                </h4>
                <ul className="mt-3 space-y-2 text-base text-[color:var(--muted-foreground)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    Outcome‑first discovery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Design systems and guardrails
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    Small slices, fast iteration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Observability and docs by default
                  </li>
                </ul>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { label: "Plan", color: "from-sky-500 to-blue-600" },
                    { label: "Build", color: "from-blue-600 to-cyan-500" },
                    { label: "Grow", color: "from-amber-400 to-amber-500" },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className={`rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-2`}
                    >
                      <div
                        className={`mx-auto h-1 w-8 rounded-full bg-gradient-to-r ${b.color}`}
                      />
                      <p className="mt-2 text-[color:var(--foreground)]/80">
                        {b.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Capabilities list */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => {
                const c = getServiceContent(item.title || "");
                const id = `svc-${(item.title || "")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`;
                const contentId = `${id}-content`;
                const isOpen = openId === id;
                return (
                  <div
                    key={item.title}
                    className="relative group rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/60 transition-all duration-300 md:group-hover:border-transparent hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    {/* Overlay for emerald gradient on hover or when checked */}
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 bg-gradient-to-tr from-emerald-700 to-emerald-900 ${
                        isOpen
                          ? "opacity-100"
                          : "opacity-0 md:group-hover:opacity-100"
                      }`}
                    />

                    {/* Header (click target on mobile, hover still works on desktop) */}
                    <button
                      type="button"
                      onClick={() => toggle(id)}
                      className="relative z-10 flex w-full items-start justify-between gap-4 p-5 text-left"
                      aria-controls={contentId}
                      aria-expanded={isOpen}
                    >
                      <div className="min-w-0">
                        <h4
                          className={`text-lg md:text-xl font-semibold ${
                            isOpen
                              ? "text-white"
                              : "text-[color:var(--foreground)] md:group-hover:text-white"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`mt-1 text-base ${
                            isOpen
                              ? "text-white/90"
                              : "text-[color:var(--muted-foreground)] md:group-hover:text-white/90"
                          }`}
                        >
                          {c.blurb}
                        </p>
                      </div>
                      <div
                        className={`shrink-0 h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-700 grid place-items-center text-slate-900 transition-transform duration-300 md:group-hover:rotate-180 ${
                          isOpen
                            ? "rotate-180 bg-white/20 text-white"
                            : "md:group-hover:bg-white/20 md:group-hover:text-white"
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 15.5l-7-7 1.4-1.4L12 12.7l5.6-5.6L19 8.5z" />
                        </svg>
                      </div>
                    </button>

                    {/* Smooth expand on hover or when checked using CSS grid rows */}
                    <div
                      id={contentId}
                      className={`relative z-10 grid transition-[grid-template-rows] duration-300 ${
                        isOpen
                          ? "[grid-template-rows:1fr]"
                          : "[grid-template-rows:0fr] md:group-hover:[grid-template-rows:1fr]"
                      }`}
                    >
                      <div className="overflow-hidden px-5">
                        <ul className="mt-2  grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {c.bullets.map((b) => (
                            <li
                              key={b}
                              className={`flex items-start gap-2 text-base ${
                                isOpen
                                  ? "text-white"
                                  : "text-[color:var(--foreground)]/90 md:group-hover:text-white"
                              }`}
                            >
                              <span className="mt-1 grid h-4 w-4 place-items-center rounded-full p-0.5 bg-black text-white group-hover:bg-white/20 group-hover:text-white peer-checked:bg-white/20 peer-checked:text-white">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                                </svg>
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2 pb-5 text-sm">
                          <span
                            className={`rounded-md border px-2.5 py-1 border-[color:var(--border)] bg-[color:var(--surface)] ${
                              isOpen
                                ? "text-white border-white/20 bg-white/10"
                                : "text-[color:var(--muted-foreground)] md:group-hover:border-white/20 md:group-hover:bg-white/10 md:group-hover:text-white"
                            }`}
                          >
                            Best for: {c.bestFor}
                          </span>
                          <span
                            className={`rounded-md border px-2.5 py-1 border-[color:var(--border)] bg-[color:var(--surface)] ${
                              isOpen
                                ? "text-white border-white/20 bg-white/10"
                                : "text-[color:var(--muted-foreground)] md:group-hover:border-white/20 md:group-hover:bg-white/10 md:group-hover:text-white"
                            }`}
                          >
                            Timeline: {c.timeline}
                          </span>
                          <span
                            className={`rounded-md border px-2.5 py-1 border-[color:var(--border)] bg-[color:var(--surface)] ${
                              isOpen
                                ? "text-white border-white/20 bg-white/10"
                                : "text-[color:var(--muted-foreground)] md:group-hover:border-white/20 md:group-hover:bg-white/10 md:group-hover:text-white"
                            }`}
                          >
                            Delivery: {c.deliverables}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
