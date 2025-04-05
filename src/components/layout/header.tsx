import Link from "next/link";

export default function Header() {
    return (
        <header className="py-6 px-6 md:px-12 backdrop-blur-sm bg-black/30 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-xl md:text-2xl font-semibold tracking-wider"
                    >
                        NEIL LUNAVAT
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link
                        href="https://linkedin.com/in/neil-lunavat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors duration-200"
                    >
                        LinkedIn
                    </Link>
                </nav>
            </div>
        </header>
    );
}
