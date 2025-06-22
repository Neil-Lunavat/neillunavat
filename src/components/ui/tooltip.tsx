"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import ShinyText from "./shinytext";
import Image from "next/image";

interface TooltipProps {
    children: React.ReactNode;
    definition: string;
    link?: string;
    pronunciation?: string;
    imageUrl?: string;
    imageAlt?: string;
    preloadedImage?: HTMLImageElement; // New prop for preloaded image
}

export default function Tooltip({
    children,
    definition,
    link,
    pronunciation,
    imageUrl,
    imageAlt,
    preloadedImage,
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(
        preloadedImage ? true : false
    );
    const tooltipRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLSpanElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []); // Calculate and set the tooltip position
    const updatePosition = useCallback(() => {
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
    }, [isVisible, imageUrl]);

    // Initial positioning when tooltip becomes visible
    useEffect(() => {
        if (isVisible) {
            // Small delay to ensure the DOM is ready
            setTimeout(updatePosition, 10);
        }
    }, [isVisible, isImageLoaded, updatePosition]);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []); // Reposition the tooltip on scroll and resize
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
    }, [isVisible, isImageLoaded, updatePosition]);

    const handleMouseEnter = () => {
        if (isMobile) return; // Skip for mobile devices

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsLeaving(false);
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        if (isMobile) return; // Skip for mobile devices

        setIsLeaving(true);
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setIsLeaving(false);
        }, 300); // Small delay to allow moving mouse to tooltip
    };

    const handleTooltipMouseEnter = () => {
        if (isMobile) return; // Skip for mobile devices

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsLeaving(false);
    };

    const handleTooltipMouseLeave = () => {
        if (isMobile) return; // Skip for mobile devices

        setIsLeaving(true);
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setIsLeaving(false);
        }, 300);
    };

    const handleClick = () => {
        if (isMobile) {
            // For mobile, toggle the tooltip visibility
            setIsVisible(!isVisible);
            if (isVisible) {
                setIsLeaving(true);
                timeoutRef.current = setTimeout(() => {
                    setIsVisible(false);
                    setIsLeaving(false);
                }, 300);
            } else {
                setIsLeaving(false);
            }
        } else if (link) {
            // For desktop, navigate to link
            window.open(link, "_blank");
        }
    };

    const handleLearnMoreClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent tooltip from closing
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
            {" "}
            <span
                ref={triggerRef}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleClick();
                    }
                    if (e.key === "Escape" && isVisible) {
                        setIsVisible(false);
                        setIsLeaving(false);
                    }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isVisible}
                aria-describedby={isVisible ? "tooltip-content" : undefined}
                className={`cursor-pointer border-b border-dotted border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-50 rounded-sm ${
                    isMobile ? "active:text-zinc-400" : "hover:text-zinc-300"
                } transition-colors duration-200`}
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
                    onClick={isMobile ? (e) => e.stopPropagation() : undefined}
                    id="tooltip-content"
                    role="tooltip"
                    className="fixed z-50 w-64 md:w-80 bg-black/90 backdrop-blur-md text-zinc-200 rounded-xl shadow-2xl p-4 border border-zinc-700"
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
                        <h4 className="font-semibold text-white text-lg font-crimson">
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

                    <div className="text-sm text-zinc-300 font-crimson">
                        {definition}
                    </div>

                    {isMobile && link && (
                        <div
                            className="mt-3 text-sm text-center text-blue-400 border border-blue-900/50 rounded-md py-2 active:bg-blue-950/50"
                            onClick={handleLearnMoreClick}
                        >
                            Click here to learn more
                        </div>
                    )}
                </div>
            )}
        </span>
    );
}
