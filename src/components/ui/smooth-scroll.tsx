"use client";
import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Expose Lenis globally for other components
        (window as any).lenis = lenis;

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Cleanup
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            (window as any).lenis = null;
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
