"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export default function LoadingScreen({
    onLoadingComplete,
}: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    // Add a small delay before starting exit animation
                    setTimeout(() => {
                        setIsVisible(false);
                        // Complete loading after exit animation
                        setTimeout(onLoadingComplete, 800);
                    }, 500);
                    return 100;
                }
                // Accelerate towards the end for a more natural feel
                const increment =
                    prev < 60 ? Math.random() * 8 + 2 : Math.random() * 15 + 5;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(progressInterval);
    }, [onLoadingComplete, isMounted]);

    if (!isMounted) {
        return null;
    }

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        filter: "blur(8px)",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"
                            animate={{
                                background: [
                                    "linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)",
                                    "linear-gradient(45deg, #16213e, #0f3460, #1a1a2e)",
                                    "linear-gradient(45deg, #0f3460, #1a1a2e, #16213e)",
                                ],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </div>

                    {/* Main loading content */}
                    <div className="relative z-10 text-center">
                        {/* Logo/Brand */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.h1
                                className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-outfit"
                                animate={{
                                    backgroundPosition: [
                                        "0% 50%",
                                        "100% 50%",
                                        "0% 50%",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    backgroundSize: "200% 200%",
                                }}
                            >
                                NEIL
                            </motion.h1>
                            <motion.div
                                className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                        </motion.div>

                        {/* Progress indicator */}
                        <motion.div
                            className="w-64 mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            {/* Progress bar container */}
                            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                                {/* Progress bar fill */}
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                />

                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{
                                        x: ["-100%", "200%"],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        width: "50%",
                                    }}
                                />
                            </div>

                            {/* Progress percentage */}
                            <motion.div
                                className="text-gray-300 text-sm mt-3 font-mono"
                                key={Math.floor(progress)}
                                initial={{ opacity: 0.6 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                {Math.floor(progress)}%
                            </motion.div>
                        </motion.div>

                        {/* Loading text */}
                        <motion.div
                            className="mt-6 text-gray-400 text-sm tracking-wider font-outfit"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <motion.span
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                LOADING EXPERIENCE
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Particle effects */}
                    <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/20 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
