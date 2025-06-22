"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";
import Aphorism from "@/components/ui/aphorisms";
import GradientText from "@/components/ui/gradienttext";
import DecryptedText from "@/components/ui/decrypted-text";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16 sm:py-24 md:py-0">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6 gradient-text font-crimson leading-tight">
                    <DecryptedText
                        text="Helping People Build"
                        speed={80}
                        maxIterations={15}
                        sequential={true}
                        animateOn="view"
                        useOriginalCharsOnly={true}
                    />
                    <br />
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
                <Aphorism className="mt-6 sm:mt-8 mb-8 sm:mb-12" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16 mb-8 sm:mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        {" "}
                        <SpotlightCard className="text-left p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-medium mb-3 font-crimson">
                                The Vision
                            </h2>
                            <p className="text-zinc-300 leading-relaxed font-crimson text-sm sm:text-base">
                                In a world where information grows
                                exponentially, the divide widens between those
                                who can harness it and those overwhelmed by it.
                                I explore the intersection of human cognition
                                and artificial intelligence—creating frameworks
                                that amplify our innate capabilities rather than
                                replacing them. This isn't about technology
                                alone, but about the renaissance of human
                                potential through transformative cognitive
                                acceleration.
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
                        {" "}
                        <SpotlightCard className="text-left p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-medium mb-4 font-crimson">
                                Current Explorations
                            </h2>
                            <ul className="space-y-3 text-zinc-300 font-crimson text-sm sm:text-base">
                                <li className="flex items-start">
                                    <span className="opacity-50 mr-2 text-lg">
                                        →
                                    </span>
                                    <span>
                                        Cognitive frameworks that transform
                                        unfamiliarity into capability
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="opacity-50 mr-2 text-lg">
                                        →
                                    </span>
                                    <span>
                                        The polymath advantage in an age of
                                        hyper-specialization
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="opacity-50 mr-2 text-lg">
                                        →
                                    </span>
                                    <span>
                                        Mental models for accelerated learning
                                        across any domain
                                    </span>
                                </li>
                            </ul>
                        </SpotlightCard>
                    </motion.div>
                </div>{" "}
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                    <Link
                        href="https://linkedin.com/in/neil-lunavat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-zinc-700 rounded-md text-sm sm:text-base uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm hover:bg-black/60 hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-50 transition-all duration-200 font-outfit w-full sm:w-auto"
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
                    <Link
                        href="/the-mindset-revolution"
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-zinc-700 rounded-md text-sm sm:text-base uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm hover:bg-black/60 hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-50 transition-all duration-200 font-outfit w-full sm:w-auto"
                    >
                        <GradientText
                            colors={["#FF5E62", "#FF9966", "#FF5E62"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class"
                        >
                            Read Latest Blog{" "}
                            <span className="inline-block ml-1">↗</span>
                        </GradientText>
                    </Link>
                </div>
            </div>
        </div>
    );
}
