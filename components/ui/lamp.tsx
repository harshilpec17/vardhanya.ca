"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type LampDemoProps = {
    className?: string;
    centered?: boolean; // vertically center content and effects
    fullHeight?: boolean; // use min-h-screen when true, else h-full
    children?: React.ReactNode;
    headlineOffsetY?: number; // final Y offset for the headline after animation
    loop?: boolean; // loop the headline animation
    loopMs?: number; // duration of one loop cycle
    repeatDelaySec?: number; // pause between loops in seconds
};

export function LampDemo({
    className,
    centered = true,
    fullHeight = true,
    children,
    headlineOffsetY = 0,
    loop = false,
    loopMs = 3000,
    repeatDelaySec = 5,
}: LampDemoProps) {
    return (
        <LampContainer className={className} centered={centered} fullHeight={fullHeight}>
            {children ?? (
                <motion.h1
                    initial={loop ? { opacity: 0.5, y: headlineOffsetY + 100 } : { opacity: 0.5, y: 100 }}
                    animate={loop ? { opacity: [0.5, 1], y: [headlineOffsetY + 100, headlineOffsetY] } : undefined}
                    whileInView={loop ? undefined : { opacity: 1, y: headlineOffsetY }}
                    transition={
                        loop
                            ? {
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: repeatDelaySec ?? 8,
                            }
                            : { delay: 0.3, duration: 0.8, ease: "easeInOut" }
                    }
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Vardhanya <br /> Solution
                </motion.h1>
            )}
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
    centered = true,
    fullHeight = true,
}: {
    children: React.ReactNode;
    className?: string;
    centered?: boolean;
    fullHeight?: boolean;
}) => {
    return (
        <div
            className={cn(
                "relative flex flex-col items-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
                // Make mobile height smaller; keep full height only from md+
                fullHeight ? "md:min-h-screen min-h-[40vh]" : "min-h-0 h-full",
                centered ? "justify-center" : "justify-start",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-40 md:h-56 overflow-visible w-[24rem] md:w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-40 md:h-56 w-[24rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-32 md:h-48 w-full translate-y-6 md:translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-32 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-24 md:h-36 w-[22rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-24 md:h-36 w-48 md:w-64 -translate-y-[4rem] md:-translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[24rem] md:w-[30rem] -translate-y-[5rem] md:-translate-y-[7rem] bg-cyan-400 "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-32 md:h-44 w-full -translate-y-[9rem] md:-translate-y-[12.5rem] bg-slate-950 "></div>
            </div>

            <div className={cn("relative z-50 flex flex-col items-center px-5", centered ? "-translate-y-52 md:-translate-y-80" : "translate-y-0")}
            >
                {children}
            </div>
        </div>
    );
};
