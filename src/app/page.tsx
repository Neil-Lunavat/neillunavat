"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";
import Aphorism from "@/components/ui/aphorisms";
import ShinyText from "@/components/ui/shinytext";
import GradientText from "@/components/ui/gradienttext";
import DecryptedText from "@/components/ui/decrypted-text";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 md:py-0">
            <div className="max-w-5xl mx-auto text-center">
                <div className="inline-block mb-10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-zinc-800 text-zinc-300 text-s tracking-widest uppercase">
                    <ShinyText
                        text="Under Construction"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                    />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 gradient-text">
                    <DecryptedText
                        text="Helping People Build"
                        speed={80}
                        maxIterations={15}
                        sequential={true}
                        animateOn="view"
                        useOriginalCharsOnly={true}
                    />
                    <br></br>
                    <DecryptedText
                        text="Extraordinary Things"
                        className="mt-2"
                        speed={90}
                        maxIterations={50}
                        sequential={true}
                        animateOn="view"
                        useOriginalCharsOnly={true}
                    />
                </h1>
                <Aphorism className="mt-8 mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        <SpotlightCard className="text-left p-8">
                            <h2 className="text-2xl font-medium mb-3">
                                The Vision
                            </h2>
                            <p className="text-zinc-300 leading-relaxed">
                                In a world racing toward AI integration, the
                                divide grows between those who adapt and those
                                left behind. Follow along as I build an agency
                                from scratch that creates systems of
                                liberation—automation that frees human potential
                                rather than diminishing it.
                            </p>
                        </SpotlightCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        <SpotlightCard className="text-left p-8">
                            <h2 className="text-2xl font-medium mb-4">
                                What&apos;s Coming
                            </h2>
                            <ul className="space-y-3 text-zinc-300">
                                <li className="flex items-start">
                                    <span className="opacity-50 mr-2">→</span>
                                    <span>
                                        Frameworks for AI integration that
                                        preserve human ingenuity
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="opacity-50 mr-2">→</span>
                                    <span>
                                        A manifesto for the generalist in an age
                                        of dying specialization
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="opacity-50 mr-2">→</span>
                                    <span>
                                        Tools that transform how we think about
                                        productivity
                                    </span>
                                </li>
                            </ul>
                        </SpotlightCard>
                    </motion.div>
                </div>

                <div className="mt-12">
                    <Link
                        href="https://linkedin.com/in/neil-lunavat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 border border-zinc-700 rounded-md text-base uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm hover:bg-black/60 hover:scale-[1.05] transition-all duration-200"
                    >
                        <GradientText
                            colors={[
                                "#8DE5FF",
                                "#A0B8FF",
                                "#BFA0FF",
                                "#8DE5FF",
                            ]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class"
                        >
                            Connect on LinkedIn
                        </GradientText>
                    </Link>
                </div>
            </div>
        </div>
    );
}
