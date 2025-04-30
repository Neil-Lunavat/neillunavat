"use client";
import React, { useState, useRef, useEffect } from "react";
import ShinyText from "./shinytext";
import Image from "next/image";

interface TooltipProps {
    children: React.ReactNode;
    definition: string;
    link?: string;
    pronunciation?: string;
    imageUrl?: string;
    imageAlt?: string;
}

export default function Tooltip({
    children,
    definition,
    link,
    pronunciation,
    imageUrl,
    imageAlt,
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLSpanElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Calculate and set the tooltip position
    const updatePosition = () => {
        if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        // Add extra spacing for tooltips with images (20px)
        const extraSpacing = imageUrl ? 20 : 8;

        // For fixed positioning, we use viewport coordinates
        const top = triggerRect.top - tooltipRect.height - extraSpacing;

        // If top is negative, position below the element instead
        const finalTop = top < 10 ? triggerRect.bottom + extraSpacing : top;

        const left = Math.max(
            8,
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
        );

        // Ensure tooltip doesn't go off right edge of screen
        const rightEdgePosition = left + tooltipRect.width;
        const finalLeft =
            rightEdgePosition > window.innerWidth - 8
                ? window.innerWidth - tooltipRect.width - 8
                : left;

        setPosition({ top: finalTop, left: finalLeft });
    };

    // Initial positioning when tooltip becomes visible
    useEffect(() => {
        if (isVisible) {
            // Small delay to ensure the DOM is ready
            setTimeout(updatePosition, 10);
        }
    }, [isVisible, isImageLoaded]);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Reposition the tooltip on scroll and resize
    useEffect(() => {
        if (!isVisible) return;

        const handleScrollOrResize = () => {
            updatePosition();
        };

        window.addEventListener("scroll", handleScrollOrResize, {
            passive: true,
        });
        window.addEventListener("resize", handleScrollOrResize, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScrollOrResize);
            window.removeEventListener("resize", handleScrollOrResize);
        };
    }, [isVisible, isImageLoaded]);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsLeaving(false);
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsLeaving(true);
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setIsLeaving(false);
        }, 300); // Small delay to allow moving mouse to tooltip
    };

    const handleTooltipMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsLeaving(false);
    };

    const handleTooltipMouseLeave = () => {
        setIsLeaving(true);
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setIsLeaving(false);
        }, 300);
    };

    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    };

    const handleImageLoad = () => {
        setIsImageLoaded(true);
        updatePosition();
    };

    return (
        <span className="relative inline-block">
            <span
                ref={triggerRef}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer border-b border-dotted border-zinc-500"
            >
                {typeof children === "string" ? (
                    <ShinyText text={children} />
                ) : (
                    children
                )}
            </span>

            {isVisible && (
                <div
                    ref={tooltipRef}
                    onMouseEnter={handleTooltipMouseEnter}
                    onMouseLeave={handleTooltipMouseLeave}
                    className="fixed z-50 w-64 md:w-80 bg-black/80 backdrop-blur-sm text-zinc-200 rounded-xl shadow-lg p-4 border border-zinc-800"
                    style={{
                        maxWidth: "calc(100vw - 16px)",
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        animation: isLeaving
                            ? "tooltipFadeOutDown 0.2s forwards"
                            : "tooltipFadeInUp 0.2s forwards",
                    }}
                >
                    <div className="mb-2">
                        <h4 className="font-semibold text-white text-lg font-garamond">
                            {children}
                        </h4>
                        {pronunciation && (
                            <div className="text-zinc-400 text-xs italic">
                                /{pronunciation}/
                            </div>
                        )}
                    </div>

                    {imageUrl && (
                        <div className="my-2 rounded-md overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={imageAlt || `Image of ${children}`}
                                width={320}
                                height={180}
                                className="w-full object-cover"
                                onLoad={handleImageLoad}
                                priority={true}
                            />
                        </div>
                    )}

                    <div className="text-sm text-zinc-300 font-garamond">
                        {definition}
                    </div>
                </div>
            )}
        </span>
    );
}
