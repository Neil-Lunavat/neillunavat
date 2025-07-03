import { motion } from "framer-motion";
import TextSection, { textVariants } from "@/components/ui/text-section";
import ImageSection from "@/components/ui/image-section";

export default function ConsequenceSection() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
            <ImageSection
                src="/assets/woman-scan.gif"
                alt="Woman Scan Animation"
                unoptimized={true}
            />

            <TextSection align="right">
                <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6 font-crimson"
                    variants={textVariants}
                >
                    And like gods before it...
                </motion.p>
                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic mb-8 font-crimson"
                    variants={textVariants}
                >
                    It will be worshipped.
                </motion.p>

                <div className="space-y-3">
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        Not because it demands it.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        But because we always do.
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold font-crimson"
                        variants={textVariants}
                    >
                        We kneel to what we cannot control.
                    </motion.p>
                </div>
            </TextSection>
        </section>
    );
}
