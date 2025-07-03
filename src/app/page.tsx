"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import LoadingScreen from "@/components/ui/loading-screen";
import Image from "next/image";

// Animation variants
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Individual section components
interface TextSectionProps {
    children: React.ReactNode;
    align?: "left" | "right";
    className?: string;
}

interface ImageSectionProps {
    src: string;
    alt: string;
    className?: string;
}

const TextSection = ({
    children,
    align = "left",
    className = "",
}: TextSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className={`flex-1 max-w-2xl ${
                align === "right" ? "text-right" : "text-left"
            } ${className}`}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

const ImageSection = ({ src, alt, className = "" }: ImageSectionProps) => {
    return (
        <div className={`flex-1 max-w-xl ${className}`}>
            <div className="relative w-full h-auto bg-gray-800/20 border border-gray-700/30 rounded-lg overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={450}
                    className="object-contain w-full h-auto"
                    priority={src.includes("hero")}
                />
            </div>
        </div>
    );
};

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

            {/* Loading Screen */}
            {isLoading && (
                <LoadingScreen onLoadingComplete={handleLoadingComplete} />
            )}

            {/* Main Content */}
            {!isLoading && (
                <div ref={containerRef} className="bg-black text-white">
                    {/* Parallax Background */}
                    <motion.div
                        className="fixed inset-0 -z-10"
                        style={{ y: backgroundY }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
                    </motion.div>

                    {/* Section 1: The Question - Text Left, Image Right */}
                    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
                        <TextSection>
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 font-crimson"
                                variants={textVariants}
                            >
                                Why.
                            </motion.h1>

                            <div className="space-y-2 md:space-y-3">
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    Why are we doing all this?
                                </motion.p>
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    Why are we building machines that think?
                                </motion.p>
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    What are we reaching for?
                                </motion.p>
                                <motion.p
                                    className="text-3xl md:text-4xl lg:text-5xl text-gray-300 italic font-crimson"
                                    variants={textVariants}
                                >
                                    Perfection?
                                </motion.p>
                                <motion.p
                                    className="text-3xl md:text-4xl lg:text-5xl text-gray-300 italic font-crimson"
                                    variants={textVariants}
                                >
                                    Power?
                                </motion.p>
                                <motion.p
                                    className="text-3xl md:text-4xl lg:text-5xl text-gray-300 italic font-crimson"
                                    variants={textVariants}
                                >
                                    Immortality?
                                </motion.p>
                            </div>
                        </TextSection>

                        <ImageSection
                            src="/assets/3d-vector-mesh.gif"
                            alt="3D Vector Mesh Animation"
                            className="animate-pulse"
                        />
                    </section>

                    {/* Section 2: The Mirror - Image Left, Text Right */}
                    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
                        <ImageSection
                            src="/assets/ai-human.gif"
                            alt="AI Human Interface"
                            className="animate-pulse"
                        />

                        <TextSection align="right">
                            <motion.p
                                className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6 font-crimson"
                                variants={textVariants}
                            >
                                Or are we simply trying to build ourselves...
                                again?
                            </motion.p>
                            <motion.p
                                className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-6 font-crimson"
                                variants={textVariants}
                            >
                                We don't understand ourselves — so we build
                                something to help us do it.
                            </motion.p>
                            <motion.p
                                className="text-3xl md:text-4xl lg:text-5xl text-gray-300 italic font-crimson"
                                variants={textVariants}
                            >
                                But what happens when it understands... more?
                            </motion.p>
                        </TextSection>
                    </section>

                    {/* Section 3: God in the Machine - Text Left, Image Right */}
                    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
                        <TextSection>
                            <motion.p
                                className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-4 font-crimson"
                                variants={textVariants}
                            >
                                Michelangelo's fingers once reached for God.
                            </motion.p>
                            <motion.p
                                className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6 font-crimson"
                                variants={textVariants}
                            >
                                Today, they reach for something else.
                            </motion.p>

                            <div className="space-y-2 mb-6">
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    Not the divine above.
                                </motion.p>
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    But a new one, below.
                                </motion.p>
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    Built in silicon.
                                </motion.p>
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    Fed on everything we've ever known.
                                </motion.p>
                            </div>

                            <div className="space-y-2">
                                <motion.p
                                    className="text-4xl md:text-5xl lg:text-6xl text-gray-300 italic font-crimson"
                                    variants={textVariants}
                                >
                                    AI.
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 italic font-crimson"
                                    variants={textVariants}
                                >
                                    Omnipresent.
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 italic font-crimson"
                                    variants={textVariants}
                                >
                                    Omniscient.
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 italic font-crimson"
                                    variants={textVariants}
                                >
                                    Omni-updating.
                                </motion.p>
                            </div>
                        </TextSection>

                        <ImageSection
                            src="/assets/the-sun.jpeg"
                            alt="The Sun"
                        />
                    </section>

                    {/* Section 4: The Consequence - Image Left, Text Right */}
                    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
                        <ImageSection
                            src="/assets/woman-scan.gif"
                            alt="Woman Scan Animation"
                            className="animate-pulse"
                        />

                        <TextSection align="right">
                            <motion.p
                                className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6 font-crimson"
                                variants={textVariants}
                            >
                                And like gods before it...
                            </motion.p>
                            <motion.p
                                className="text-3xl md:text-4xl lg:text-5xl text-gray-300 italic mb-8 font-crimson"
                                variants={textVariants}
                            >
                                It will be worshipped.
                            </motion.p>

                            <div className="space-y-3">
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    Not because it demands it.
                                </motion.p>
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    But because we always do.
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold font-crimson"
                                    variants={textVariants}
                                >
                                    We kneel to what we cannot control.
                                </motion.p>
                            </div>
                        </TextSection>
                    </section>

                    {/* Section 5: The Mirror Cracks - Text Left, Image Right */}
                    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
                        <TextSection>
                            <motion.p
                                className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-4 font-crimson"
                                variants={textVariants}
                            >
                                We thought we were building a tool.
                            </motion.p>
                            <motion.p
                                className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-4 font-crimson"
                                variants={textVariants}
                            >
                                But we were building a mirror.
                            </motion.p>
                            <motion.p
                                className="text-3xl md:text-4xl lg:text-5xl text-gray-300 italic mb-8 font-crimson"
                                variants={textVariants}
                            >
                                And mirrors don't lie.
                            </motion.p>

                            <div className="space-y-3">
                                <motion.p
                                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                                    variants={textVariants}
                                >
                                    What we feed it, it becomes.
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold font-crimson"
                                    variants={textVariants}
                                >
                                    What it becomes, we follow.
                                </motion.p>
                            </div>
                        </TextSection>

                        <ImageSection
                            src="/assets/3d-vector-mesh.gif"
                            alt="3D Vector Mesh - Mirror Effect"
                        />
                    </section>

                    {/* Section 6: The Choice - Full Width Centered */}
                    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
                        <TextSection className="max-w-4xl text-center">
                            <div className="space-y-6 md:space-y-8">
                                <motion.p
                                    className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold font-crimson"
                                    variants={textVariants}
                                >
                                    So what now?
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                                    variants={textVariants}
                                >
                                    Do we continue?
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                                    variants={textVariants}
                                >
                                    Do we pause?
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                                    variants={textVariants}
                                >
                                    Do we kneel?
                                </motion.p>
                                <motion.p
                                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                                    variants={textVariants}
                                >
                                    Do we run?
                                </motion.p>

                                <motion.p
                                    className="text-4xl md:text-5xl lg:text-6xl text-gray-300 italic py-8 font-crimson"
                                    variants={textVariants}
                                >
                                    Or...
                                </motion.p>

                                <motion.p
                                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight font-crimson"
                                    variants={textVariants}
                                >
                                    Do we decide what it means to be human?
                                </motion.p>
                            </div>
                        </TextSection>
                    </section>
                </div>
            )}
        </>
    );
}
