import { motion } from "framer-motion";
import TextSection, { textVariants } from "@/components/ui/text-section";
import ImageSection from "@/components/ui/image-section";

export default function MirrorSection() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
            <ImageSection src="/assets/ai-human.gif" alt="AI Human Interface" />

            <TextSection align="right">
                <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6 font-crimson"
                    variants={textVariants}
                >
                    Or are we simply trying to build ourselves... again?
                </motion.p>
                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-6 font-crimson"
                    variants={textVariants}
                >
                    We don't understand ourselves — so we build something to
                    help us do it.
                </motion.p>
                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic font-crimson"
                    variants={textVariants}
                >
                    But what happens when it understands... more?
                </motion.p>
            </TextSection>
        </section>
    );
}
