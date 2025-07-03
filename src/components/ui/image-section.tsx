import Image from "next/image";
import TiltedCard from "./tilted-card";

interface ImageSectionProps {
    src: string;
    alt: string;
    className?: string;
    useTiltedCard?: boolean;
    tiltedCardProps?: {
        scaleOnHover?: number;
        rotateAmplitude?: number;
        showMobileWarning?: boolean;
        showTooltip?: boolean;
    };
    customScale?: number;
}

export default function ImageSection({
    src,
    alt,
    className = "",
    useTiltedCard = false,
    tiltedCardProps,
    customScale = 1,
}: ImageSectionProps) {
    if (useTiltedCard) {
        return (
            <div className={`flex-1 max-w-xl ${className}`}>
                <div
                    className="w-full aspect-[4/3] max-h-[300px] sm:max-h-[400px] md:max-h-[450px]"
                    style={{ transform: `scale(${customScale})` }}
                >
                    <TiltedCard
                        imageSrc={src}
                        altText={alt}
                        containerWidth="100%"
                        containerHeight="100%"
                        imageWidth="100%"
                        imageHeight="100%"
                        scaleOnHover={tiltedCardProps?.scaleOnHover || 1.05}
                        rotateAmplitude={tiltedCardProps?.rotateAmplitude || 12}
                        showMobileWarning={
                            tiltedCardProps?.showMobileWarning || false
                        }
                        showTooltip={tiltedCardProps?.showTooltip || false}
                    />
                </div>
            </div>
        );
    }

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
}
