"use client";

import { motion } from "framer-motion";

const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
});

export const WhyLamplitLabs = () => {
    return (
        <motion.div
            className="w-full glass-card gradient-border rounded-2xl p-6 md:p-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.p
                className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent-1)] font-semibold mb-3"
                {...fadeIn(0.1)}
            >
                Our story
            </motion.p>
            <motion.h2
                className="text-lg md:text-xl font-bold mb-5"
                {...fadeIn(0.15)}
            >
                Why &ldquo;Lamplit Labs&rdquo;?
            </motion.h2>

            <motion.div
                className="rounded-xl bg-[var(--bg-secondary)] p-5 mb-6"
                {...fadeIn(0.2)}
            >
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="font-mono font-bold gradient-text">lamplit</span>
                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                        /&#712;lamp&middot;l&#618;t/
                    </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    <em>adjective</em> &mdash; illuminated by the light of a lamp.
                    A warm, focused glow that brings clarity to what matters.
                </p>
            </motion.div>

            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <motion.p {...fadeIn(0.4)}>
                    We chose{" "}
                    <span className="text-[var(--text-primary)] font-semibold">
                        &ldquo;Lamplit Labs&rdquo;
                    </span>{" "}
                    because it captures how we work: shining a focused light on real
                    problems, then building practical tools to solve them.
                </motion.p>

                <motion.p {...fadeIn(0.6)}>
                    No hype, no complexity for its own sake &mdash; just clear,
                    purposeful software that illuminates the path forward.
                </motion.p>

                <motion.p {...fadeIn(0.8)}>
                    Formerly known as{" "}
                    <span className="font-mono text-[var(--text-primary)] font-semibold">
                        bitesinbyte
                    </span>, we have grown from a side project into a lab that ships products
                    used by thousands.
                </motion.p>
            </div>

            <motion.div
                className="flex flex-wrap gap-2 mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.4 }}
            >
                {["focused", "practical", "purposeful"].map((tag, i) => (
                    <motion.span
                        key={tag}
                        className="text-[0.65rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-1)]/10 text-[var(--accent-1)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.05 + i * 0.08, type: "spring", stiffness: 300 }}
                    >
                        {tag}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};
