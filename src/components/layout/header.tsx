"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        {
            name: "Blog",
            href: "/the-mindset-revolution",
            external: false,
        },
    ];
    return (
        <motion.header
            className="py-6 px-6 md:px-12 backdrop-blur-sm bg-black/30 z-30 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                    className="flex items-center z-50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link
                        href="/"
                        className="flex items-center text-xl md:text-2xl font-semibold tracking-wider font-crimson group"
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <Image
                                src="/logo.webp"
                                alt="Neil Lunavat Logo"
                                width={60}
                                height={60}
                                className="mr-2"
                                priority
                            />
                        </motion.div>{" "}
                        <motion.span
                            className="hidden md:block text-gradient"
                            animate={{
                                backgroundPosition: [
                                    "0% 50%",
                                    "100% 50%",
                                    "0% 50%",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            NEIL LUNAVAT
                        </motion.span>
                    </Link>
                </motion.div>{" "}
                {/* Desktop Nav */}
                <motion.nav
                    className="hidden md:flex space-x-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="https://linkedin.com/in/neil-lunavat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200 font-outfit relative group"
                        >
                            LinkedIn
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="https://instagram.com/uhh_neil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200 font-outfit relative group"
                        >
                            {" "}
                            Instagram
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="https://github.com/neil-lunavat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200 font-outfit relative group"
                        >
                            GitHub
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </motion.div>
                </motion.nav>
                {/* Hamburger Button */}
                <button
                    className="md:hidden z-50 flex flex-col justify-center items-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-50 hover:bg-white/10 transition-colors duration-200"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
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
                            id="mobile-menu"
                            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden"
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
                                            className="text-2xl uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200 font-outfit"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}{" "}
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
