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
        <motion.nav
            className="fixed top-0 left-0 right-0 pt-4 pb-2 pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-16 lg:pr-24 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex justify-between items-center w-full">
                <motion.div
                    className="flex items-center z-50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link
                        href="/"
                        className="flex items-center text-xl md:text-2xl font-semibold tracking-wider font-crimson group"
                    >
                        <Image
                            src="/logo.webp"
                            alt="Neil Lunavat Logo"
                            width={50}
                            height={50}
                            className="mr-3"
                            priority
                        />
                        <motion.span
                            className="hidden md:block text-white"
                            initial={{ opacity: 0.8 }}
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            NEIL LUNAVAT
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <motion.nav
                    className="hidden md:flex space-x-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="https://linkedin.com/in/neil-lunavat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-crimson tracking-wide text-zinc-300 hover:text-white transition-colors duration-300"
                        >
                            LinkedIn
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="https://instagram.com/uhh_neil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-crimson tracking-wide text-zinc-300 hover:text-white transition-colors duration-300"
                        >
                            Instagram
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="https://github.com/neil-lunavat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-crimson tracking-wide text-zinc-300 hover:text-white transition-colors duration-300"
                        >
                            GitHub
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
                                            className="text-2xl font-crimson tracking-wide text-zinc-300 hover:text-white transition-colors duration-300"
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
        </motion.nav>
    );
}
