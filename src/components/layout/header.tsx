"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Menu items to display in mobile menu
    const menuItems = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/neil-lunavat",
            external: true,
        },
        {
            name: "Instagram",
            href: "https://instagram.com/uhh_neil",
            external: true,
        },
        {
            name: "GitHub",
            href: "https://github.com/neil-lunavat",
            external: true,
        },
    ];

    return (
        <header className="py-6 px-6 md:px-12 backdrop-blur-sm bg-black/30 z-30 relative">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center z-50">
                    <Link
                        href="/"
                        className="flex items-center text-xl md:text-2xl font-semibold tracking-wider"
                    >
                        <img
                            src="/logo.webp"
                            alt="Neil Lunavat Logo"
                            width="60"
                            height="60"
                            className="mr-2"
                        />
                        <span className="hidden md:block">NEIL LUNAVAT</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    <Link
                        href="https://linkedin.com/in/neil-lunavat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href="https://instagram.com/uhh_neil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200"
                    >
                        Instagram
                    </Link>
                    <Link
                        href="https://github.com/neil-lunavat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200"
                    >
                        GitHub
                    </Link>
                </nav>

                {/* Hamburger Button */}
                <button
                    className="md:hidden z-50 flex flex-col justify-center items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="w-7 h-7 flex flex-col justify-center items-center">
                        <motion.span
                            animate={{
                                rotate: isMenuOpen ? 45 : 0,
                                y: isMenuOpen ? 8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-white block mb-1.5"
                        ></motion.span>
                        <motion.span
                            animate={{
                                opacity: isMenuOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-white block mb-1.5"
                        ></motion.span>
                        <motion.span
                            animate={{
                                rotate: isMenuOpen ? -45 : 0,
                                y: isMenuOpen ? -8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-white block"
                        ></motion.span>
                    </div>
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "100vh" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
                        >
                            <motion.nav
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex flex-col items-center space-y-8"
                            >
                                {menuItems.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={item.href}
                                            target={
                                                item.external ? "_blank" : ""
                                            }
                                            rel={
                                                item.external
                                                    ? "noopener noreferrer"
                                                    : ""
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-2xl uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
