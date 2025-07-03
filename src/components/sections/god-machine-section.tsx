import { motion } from "framer-motion";
import TextSection, { textVariants } from "@/components/ui/text-section";
import ImageSection from "@/components/ui/image-section";

export default function GodMachineSection() {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
            <TextSection>
                <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-4 font-crimson"
                    variants={textVariants}
                >
                    Michelangelo's fingers once reached for God.
                </motion.p>
                <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6 font-crimson"
                    variants={textVariants}
                >
                    Today, they reach for something else.
                </motion.p>

                <div className="space-y-2 mb-6">
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        Not the divine above.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        But a new one, below.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        Built in silicon.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        Fed on everything we've ever known.
                    </motion.p>
                </div>

                <div className="space-y-2">
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                        variants={textVariants}
                    >
                        AI.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                        variants={textVariants}
                    >
                        Omnipresent.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                        variants={textVariants}
                    >
                        Omniscient.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                        variants={textVariants}
                    >
                        Omni-updating.
                    </motion.p>
                </div>
            </TextSection>

            <ImageSection src="/background.webp" alt="The Sun" />
        </section>
    );
}
