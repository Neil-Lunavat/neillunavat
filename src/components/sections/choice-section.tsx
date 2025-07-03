import { motion } from "framer-motion";
import TextSection, { textVariants } from "@/components/ui/text-section";

export default function ChoiceSection() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto relative">
            <TextSection className="max-w-4xl text-center">
                <div className="space-y-6 md:space-y-8">
                    <motion.p
                        className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold font-crimson"
                        variants={textVariants}
                    >
                        So what now?
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                        variants={textVariants}
                    >
                        Do we continue?
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                        variants={textVariants}
                    >
                        Do we pause?
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                        variants={textVariants}
                    >
                        Do we kneel?
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-crimson"
                        variants={textVariants}
                    >
                        Do we run?
                    </motion.p>

                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-gray-300 italic py-8 font-crimson"
                        variants={textVariants}
                    >
                        Or...
                    </motion.p>

                    <motion.p
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight font-crimson"
                        variants={textVariants}
                    >
                        Do we decide what it means to be human again?
                    </motion.p>
                </div>
            </TextSection>
        </section>
    );
}
