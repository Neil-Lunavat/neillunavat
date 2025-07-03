import "./global.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Neil Lunavat | Renaissance of AI Automation",
    description:
        "Ushering in the dawn of a new era where AI transforms the landscape of human productivity and redefines the boundaries of possibility.",
    keywords:
        "AI automation, productivity, cognitive frameworks, polymath, learning acceleration",
    authors: [{ name: "Neil Lunavat" }],
    creator: "Neil Lunavat",
    publisher: "Neil Lunavat",
    robots: "index, follow",
    openGraph: {
        title: "Neil Lunavat | Renaissance of AI Automation",
        description:
            "Ushering in the dawn of a new era where AI transforms the landscape of human productivity and redefines the boundaries of possibility.",
        type: "website",
        locale: "en_US",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#0a0a0a" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/background.webp"
                    as="image"
                    type="image/webp"
                />
                <link
                    rel="preload"
                    href="/logo.webp"
                    as="image"
                    type="image/webp"
                />
            </head>
            <body className="min-h-screen flex flex-col dotted-bg antialiased">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <ScrollToTop />
                <Analytics />
            </body>
        </html>
    );
}
