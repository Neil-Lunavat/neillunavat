import { motion } from "framer-motion";
import TextSection, { textVariants } from "@/components/ui/text-section";
import ImageSection from "@/components/ui/image-section";

export default function QuestionSection() {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
            <TextSection>
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 font-crimson"
                    variants={textVariants}
                >
                    Why.
                </motion.h1>

                <div className="space-y-2 md:space-y-3">
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        Why are we doing all this?
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        Why are we building machines that think?
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        What are we reaching for?
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                        variants={textVariants}
                    >
                        Perfection?
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                        variants={textVariants}
                    >
                        Power?
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                        variants={textVariants}
                    >
                        Immortality?
                    </motion.p>
                </div>
            </TextSection>

            <ImageSection
                src="/assets/start.jpeg"
                alt="Start - Hero Image"
                useTiltedCard={true}
                customScale={1.7}
                tiltedCardProps={{
                    scaleOnHover: 1.05,
                    rotateAmplitude: 12,
                    showMobileWarning: false,
                    showTooltip: false,
                }}
            />
        </section>
    );
}
