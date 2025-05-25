"use client";
import React, { useState, useEffect } from "react";

interface AphorismProps {
    className?: string;
    cycleTime?: number;
}

const Aphorism: React.FC<AphorismProps> = ({
    className = "",
    cycleTime = 3500, // Default to 3.5 seconds
}) => {
    const aphorisms = [
        "The dawn of job extinction, powered by AI.",
        "Generalists will inherit the future.",
        "End-to-end solutions, not piecemeal production.",
        "The renaissance of human potential awaits.",
        "Automation is not the enemy, specialization is.",
        "The future belongs to those who create systems, not those who serve them.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Start fade out
            setIsVisible(false);

            // After fade out completes, change the aphorism and fade in
            const timeoutId = setTimeout(() => {
                setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % aphorisms.length
                );
                setIsVisible(true);
            }, 500); // Wait for fade out to complete

            return () => clearTimeout(timeoutId);
        }, cycleTime);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [aphorisms.length, cycleTime]);

    return (
        <div className={`my-6 ${className}`}>
            <p
                className={`quote-text text-lg md:text-xl text-zinc-300 italic transition-opacity duration-500 font-outfit ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                {aphorisms[currentIndex]}
            </p>
        </div>
    );
};

export default Aphorism;
