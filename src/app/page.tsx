"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import LoadingScreen from "@/components/ui/loading-screen";
import GradientText from "@/components/ui/gradienttext";
import Aurora from "@/components/ui/aurora";
import QuestionSection from "@/components/sections/question-section";
import MirrorSection from "@/components/sections/mirror-section";
import GodMachineSection from "@/components/sections/god-machine-section";
import ConsequenceSection from "@/components/sections/consequence-section";
import MirrorCracksSection from "@/components/sections/mirror-cracks-section";
import ChoiceSection from "@/components/sections/choice-section";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {/* Custom styles to override background image for home page only */}
            <style jsx global>{`
                .dotted-bg {
                    background-image: none !important;
                    background-color: #000000 !important;
                }
                .dotted-bg::before {
                    display: none !important;
                }
            `}</style>

            {/* Loading Screen - Always rendered with high z-index */}
            <LoadingScreen
                onLoadingComplete={handleLoadingComplete}
                isVisible={isLoading}
            />

            {/* Main Content - Always rendered */}
            <motion.div
                ref={containerRef}
                className="bg-black text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: isLoading ? 0 : 0.2 }}
            >
                {/* Parallax Background */}
                {/* <motion.div
                    className="fixed inset-0 -z-10"
                    style={{ y: backgroundY }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
                </motion.div> */}

                {/* Section 1: The Question */}
                <QuestionSection />

                {/* Section 2: The Mirror */}
                <MirrorSection />

                {/* Section 3: God in the Machine */}
                <GodMachineSection />

                {/* Section 4: The Consequence */}
                <ConsequenceSection />

                {/* Section 5: The Mirror Cracks */}
                <MirrorCracksSection />

                {/* Section 6: The Choice */}
                <ChoiceSection />

                {/* Mindset Revolution Button */}
                <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
                    {/* Aurora Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <Aurora
                            colorStops={[
                                "#4C1D95",
                                "#7C3AED",
                                "#A855F7",
                                "#C084FC",
                            ]}
                            blend={0.3}
                            amplitude={0.8}
                            speed={0.4}
                        />
                    </div>

                    <motion.div
                        className="text-center relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/the-mindset-revolution"
                            className="inline-block"
                        >
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-black/40 backdrop-blur-sm px-12 py-6 transition-all duration-300 hover:border-zinc-500 hover:bg-black/60 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="relative z-10">
                                    <GradientText
                                        colors={[
                                            "#4C1D95",
                                            "#7C3AED",
                                            "#A855F7",
                                            "#C084FC",
                                        ]}
                                        animationSpeed={6}
                                        className="text-xl md:text-2xl font-bold"
                                    >
                                        Enter the Mindset Revolution
                                    </GradientText>
                                    <p className="mt-3 text-zinc-400 text-sm md:text-base font-outfit">
                                        Discover the truth about learning and
                                        growth
                                    </p>
                                </div>

                                {/* Mysterious glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </section>
            </motion.div>
        </>
    );
}
