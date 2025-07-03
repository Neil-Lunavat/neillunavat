import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextSectionProps {
    children: React.ReactNode;
    align?: "left" | "right";
    className?: string;
}

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

export default function TextSection({
    children,
    align = "left",
    className = "",
}: TextSectionProps) {
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
}

export { textVariants };
