import Image from "next/image";

interface ImageSectionProps {
    src: string;
    alt: string;
    className?: string;
    /**
     * Deprecated: TiltedCard effect has been removed for performance.
     */
    useTiltedCard?: boolean;
    /**
     * Deprecated: props for TiltedCard, now unused.
     */
    tiltedCardProps?: Record<string, unknown>;
    customScale?: number;
    unoptimized?: boolean;
}

export default function ImageSection({
    src,
    alt,
    className = "",
    customScale = 1,
    unoptimized = false,
}: ImageSectionProps) {
    return (
        <div
            className={`flex-1 max-w-xl ${className}`}
            style={{ transform: `scale(${customScale})` }}
        >
            <div className="relative w-full h-auto bg-gray-800/20 border border-gray-700/30 rounded-lg overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={450}
                    className="object-contain w-full h-auto"
                    priority={src.includes("hero")}
                    unoptimized={unoptimized}
                />
            </div>
        </div>
    );
}
