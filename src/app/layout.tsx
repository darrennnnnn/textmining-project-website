import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "TextMiningProject",
    description: "Final Project for Text Mining Course",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body
                className={`antialiased flex flex-col justify-center items-center`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
