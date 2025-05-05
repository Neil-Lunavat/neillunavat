import React from "react";

const AboutMeSection = () => {
    return (
        <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-6 text-center text-zinc-100">
                About the Author
            </h2>

            <div className="bg-black/40 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        I'm a polymath operating at the frontiers of AI
                        integration and human potential. My journey spans from
                        building full-stack applications with zero prior
                        experience to implementing AI-driven automation systems
                        that replace traditional workflows across industries.
                    </p>

                    <p>
                        My approach has allowed me to compress years of learning
                        into months—scoring perfectly on complex subjects with
                        minimal preparation, securing technical roles without
                        formal qualifications, and building systems that unlock
                        new capabilities for those who use them.
                    </p>

                    <p>
                        I don't believe in credentials as much as demonstrated
                        ability. The frameworks I've developed aren't
                        theoretical constructs but battle-tested methods I've
                        personally used to rapidly acquire capabilities across
                        diverse domains—from technical fields to creative
                        pursuits.
                    </p>

                    <p>
                        My work exists at the intersection of cognitive science,
                        technological innovation, and philosophical inquiry.
                        While I build in public, I'm more interested in the
                        frameworks that enable extraordinary results than in
                        cataloging achievements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;
