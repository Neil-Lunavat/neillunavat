"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SpotlightCard from "@/components/ui/spotlight-card";
import Aphorism from "@/components/ui/aphorisms";
import GradientText from "@/components/ui/gradienttext";
import DecryptedText from "@/components/ui/decrypted-text";
import LoadingScreen from "@/components/ui/loading-screen";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!isMounted) {
        return null;
    }

    // Container variants for the "unfold" effect
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            rotateY: -15,
        },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const cardVariantsRight = {
        hidden: {
            opacity: 0,
            x: 50,
            rotateY: 15,
        },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <>
            {/* Loading Screen */}
            {isLoading && (
                <LoadingScreen onLoadingComplete={handleLoadingComplete} />
            )}

            {/* Main Content with Unfold Animation */}
            <AnimatePresence>
                {!isLoading && (
                    <motion.div
                        className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16 sm:py-24 md:py-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ perspective: "1000px" }}
                    >
                        {" "}
                        <motion.div
                            className="max-w-5xl mx-auto text-center"
                            variants={itemVariants}
                        >
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6 gradient-text font-crimson leading-tight"
                                variants={itemVariants}
                            >
                                <DecryptedText
                                    text="Helping People Build"
                                    speed={60}
                                    maxIterations={15}
                                    sequential={true}
                                    animateOn="view"
                                    useOriginalCharsOnly={true}
                                />
                                <br />
                                <DecryptedText
                                    text="Extraordinary Things"
                                    className="mt-2"
                                    speed={70}
                                    maxIterations={50}
                                    sequential={true}
                                    animateOn="view"
                                    useOriginalCharsOnly={true}
                                />
                            </motion.h1>

                            <motion.div variants={itemVariants}>
                                <Aphorism className="mt-6 sm:mt-8 mb-8 sm:mb-12" />
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16 mb-8 sm:mb-12"
                                variants={itemVariants}
                            >
                                <motion.div variants={cardVariants}>
                                    <SpotlightCard className="text-left p-6 sm:p-8 h-full">
                                        <h2 className="text-xl sm:text-2xl font-medium mb-3 font-crimson">
                                            The Vision
                                        </h2>
                                        <p className="text-zinc-300 leading-relaxed font-crimson text-sm sm:text-base">
                                            In a world where information grows
                                            exponentially, the divide widens
                                            between those who can harness it and
                                            those overwhelmed by it. I explore
                                            the intersection of human cognition
                                            and artificial intelligence—creating
                                            frameworks that amplify our innate
                                            capabilities rather than replacing
                                            them. This isn't about technology
                                            alone, but about the renaissance of
                                            human potential through
                                            transformative cognitive
                                            acceleration.
                                        </p>
                                    </SpotlightCard>
                                </motion.div>

                                <motion.div variants={cardVariantsRight}>
                                    <SpotlightCard className="text-left p-6 sm:p-8 h-full">
                                        <h2 className="text-xl sm:text-2xl font-medium mb-4 font-crimson">
                                            Current Explorations
                                        </h2>
                                        <ul className="space-y-3 text-zinc-300 font-crimson text-sm sm:text-base">
                                            <motion.li
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 1.5,
                                                    duration: 0.6,
                                                }}
                                            >
                                                <span className="opacity-50 mr-2 text-lg">
                                                    →
                                                </span>
                                                <span>
                                                    Cognitive frameworks that
                                                    transform unfamiliarity into
                                                    capability
                                                </span>
                                            </motion.li>
                                            <motion.li
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 1.7,
                                                    duration: 0.6,
                                                }}
                                            >
                                                <span className="opacity-50 mr-2 text-lg">
                                                    →
                                                </span>
                                                <span>
                                                    The polymath advantage in an
                                                    age of hyper-specialization
                                                </span>
                                            </motion.li>
                                            <motion.li
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 1.9,
                                                    duration: 0.6,
                                                }}
                                            >
                                                <span className="opacity-50 mr-2 text-lg">
                                                    →
                                                </span>
                                                <span>
                                                    Mental models for
                                                    accelerated learning across
                                                    any domain
                                                </span>
                                            </motion.li>
                                        </ul>
                                    </SpotlightCard>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        href="https://linkedin.com/in/neil-lunavat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-zinc-700 rounded-md text-sm sm:text-base uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-50 transition-all duration-200 font-outfit w-full sm:w-auto"
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
                                </motion.div>

                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        href="/the-mindset-revolution"
                                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-zinc-700 rounded-md text-sm sm:text-base uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-50 transition-all duration-200 font-outfit w-full sm:w-auto"
                                    >
                                        <GradientText
                                            colors={[
                                                "#FF5E62",
                                                "#FF9966",
                                                "#FF5E62",
                                            ]}
                                            animationSpeed={3}
                                            showBorder={false}
                                            className="custom-class"
                                        >
                                            Read Latest Blog{" "}
                                            <span className="inline-block ml-1">
                                                ↗
                                            </span>
                                        </GradientText>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
