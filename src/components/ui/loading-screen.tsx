"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onLoadingComplete: () => void;
    isVisible: boolean;
}

export default function LoadingScreen({
    onLoadingComplete,
    isVisible,
}: LoadingScreenProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        // Start exit animation after 2.3 seconds
        const exitDelay = setTimeout(() => {
            onLoadingComplete();
        }, 2300); // 2.3 seconds total loading time

        return () => clearTimeout(exitDelay);
    }, [isMounted, onLoadingComplete]);

    if (!isMounted) {
        return null;
    }

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    {/* Rounded rectangle with loading.gif */}
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-2 border border-white/20">
                        <img
                            src="/loading3.gif"
                            alt="Loading..."
                            className="w-64 h-64 object-contain"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
