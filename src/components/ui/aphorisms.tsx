import React from "react";

interface AphorismProps {
    className?: string;
}

const Aphorism: React.FC<AphorismProps> = ({ className = "" }) => {
    const aphorisms = [
        "The dawn of job extinction, powered by AI.",
        "Generalists will inherit the future.",
        "End-to-end solutions, not piecemeal production.",
        "The renaissance of human potential awaits.",
        "Automation is not the enemy, specialization is.",
        "The future belongs to those who create systems, not those who serve them.",
    ];

    // Get random aphorism
    const randomIndex = Math.floor(Math.random() * aphorisms.length);

    return (
        <div className={`my-6 ${className}`}>
            <p className="quote-text text-lg md:text-xl text-zinc-300 italic">
                {aphorisms[randomIndex]}
            </p>
        </div>
    );
};

export default Aphorism;
