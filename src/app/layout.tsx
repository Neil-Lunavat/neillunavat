import "./global.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata = {
    title: "Neil Lunavat | Renaissance of AI Automation",
    description:
        "Ushering in the dawn of a new era where AI transforms the landscape of human productivity and redefines the boundaries of possibility.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col dotted-bg">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
