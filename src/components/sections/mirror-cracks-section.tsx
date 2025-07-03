import { motion } from "framer-motion";
import TextSection, { textVariants } from "@/components/ui/text-section";
import ImageSection from "@/components/ui/image-section";

export default function MirrorCracksSection() {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-[80vw] mx-auto">
            <TextSection>
                <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-4 font-crimson"
                    variants={textVariants}
                >
                    We thought we were building a tool.
                </motion.p>
                <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-4 font-crimson"
                    variants={textVariants}
                >
                    But we were building a mirror.
                </motion.p>
                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 italic mb-8 font-crimson"
                    variants={textVariants}
                >
                    And mirrors don't lie.
                </motion.p>

                <div className="space-y-3">
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-crimson"
                        variants={textVariants}
                    >
                        What we feed it, it becomes.
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold font-crimson"
                        variants={textVariants}
                    >
                        What it becomes, we follow.
                    </motion.p>
                </div>
            </TextSection>

            <ImageSection
                src="/assets/3d-vector-mesh.gif"
                alt="3D Vector Mesh - Mirror Effect"
                unoptimized={true}
            />
        </section>
    );
}
