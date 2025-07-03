"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    triggerOnce?: boolean;
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 30,
    className = "",
    triggerOnce = true,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: triggerOnce,
        margin: "-10% 0px -10% 0px",
    });

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance, opacity: 0 };
            case "down":
                return { y: -distance, opacity: 0 };
            case "left":
                return { x: distance, opacity: 0 };
            case "right":
                return { x: -distance, opacity: 0 };
            default:
                return { y: distance, opacity: 0 };
        }
    };

    const getAnimatePosition = () => {
        switch (direction) {
            case "up":
            case "down":
                return { y: 0, opacity: 1 };
            case "left":
            case "right":
                return { x: 0, opacity: 1 };
            default:
                return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={getInitialPosition()}
            animate={isInView ? getAnimatePosition() : getInitialPosition()}
            transition={{
                duration,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}

// Text reveal that animates character by character
interface ScrollTextRevealProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    triggerOnce?: boolean;
    splitByWords?: boolean;
}

export function ScrollTextReveal({
    text,
    delay = 0,
    speed = 0.03,
    className = "",
    triggerOnce = true,
    splitByWords = false,
}: ScrollTextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: triggerOnce,
        margin: "-10% 0px -10% 0px",
    });

    const elements = splitByWords ? text.split(" ") : text.split("");

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: speed,
                delayChildren: delay,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
        },
    };

    return (
        <motion.span
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            style={{ perspective: "1000px" }}
        >
            {elements.map((element, index) => (
                <motion.span
                    key={index}
                    variants={itemVariants}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className={
                        splitByWords ? "inline-block mr-2" : "inline-block"
                    }
                    style={{
                        transformOrigin: "50% 100%",
                        display: splitByWords ? "inline-block" : "inline-block",
                    }}
                >
                    {element === " " && !splitByWords ? "\u00A0" : element}
                </motion.span>
            ))}
        </motion.span>
    );
}
