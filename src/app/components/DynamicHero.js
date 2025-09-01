"use client";

import TextSwitcher from "./TextSwitcher";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { LampDemo } from "./ui/lamp";
import { items } from "./utils/bentoItems";
import AppointmentBooking from "./AppointmentBooking";
import Link from "next/link";

const DynamicHero = () => {
  // Provided pairs: Headline + Subheadline
  const heroPairs = [
    {
      h: "Your One-Stop Digital Partner for Building, Designing, and Growing Your Online Presence",
      s: "From custom web apps and e-commerce to stunning design and ongoing support — I deliver end-to-end solutions tailored for small businesses and entrepreneurs worldwide.",
    },
    {
      h: "Harness the Power of AI to Elevate Your Digital Solutions",
      s: "Integrate intelligent automation, personalized experiences, and advanced analytics seamlessly into your website or app.",
    },
  ];

  // No manual intervals here; TextSwitcher handles swapping

  return (
    <>
      <div className="relative min-h-[90vh] pt-36 overflow-hidden bg-gradient-to-tr from-black via-emerald-900/30 to-black">
        <section className="flex items-center border-b border-[color:var(--border)] pb-20">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start min-h-[58vh] md:min-h-[60vh] lg:min-h-[62vh]">
              {/* Left content */}
              <div className="lg:col-span-6 relative z-20">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-sm border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs tracking-wide uppercase">
                    Trusted by founders worldwide
                  </span>
                </div>

                {/* Combined Headline + Subheadline as one switching component */}
                <TextSwitcher
                  items={heroPairs.map((pair) => (
                    <div key={pair.h} className="flex flex-col">
                      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[color:var(--foreground)] max-w-3xl">
                        {pair.h}
                      </h1>
                      <p className="mt-4 text-base md:text-xl text-[color:var(--muted-foreground)] max-w-2xl">
                        {pair.s}
                      </p>
                    </div>
                  ))}
                  intervalMs={3200}
                  transitionMs={450}
                  className="min-h-0 md:min-h-[10.5rem] lg:min-h-[12.5rem]"
                />

                <div className="mt-5 md:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/#appointment">
                    <button className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:shadow-emerald-500/30">
                      Start a Project
                    </button>
                  </Link>
                  <button className="rounded-lg border px-6 py-3 transition-colors border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]/80 hover:opacity-100 hover:bg-[color:var(--hover-surface)]">
                    Services
                  </button>
                </div>
              </div>

              {/* Right visual: constrained lamp, 50% width on large screens */}
              <div className="lg:col-span-6 relative h-[58vh] md:h-[60vh] lg:h-[62vh] overflow-hidden">
                <LampDemo
                  className="min-h-0 h-full bg-transparent rounded-xl pointer-events-none z-10"
                  centered={false}
                  fullHeight={false}
                  headlineOffsetY={-250}
                  loop
                  loopMs={800}
                  repeatDelaySec={8}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="pt-20 border-b border-[color:var(--border)] pb-20 scroll-mt-24"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-0 mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-[color:var(--foreground)]">
              Full‑stack services to launch and scale your product
            </h2>
            <p className="mt-3 text-base md:text-lg text-[color:var(--muted-foreground)]">
              From design and development to AI automation, e‑commerce, and
              ongoing support — all in one place.
            </p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto px-6 md:px-0">
            {items.map((item, i) => (
              <BentoGridItem
                key={item.title}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </section>
        <section id="appointment" className="py-20 scroll-mt-24">
          <AppointmentBooking />
        </section>
      </div>
    </>
  );
};

export default DynamicHero;
