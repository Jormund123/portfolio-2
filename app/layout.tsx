import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Anand Karna - Everything about me",
    description: "Portfolio Website of Anand Karna",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="antialiased">

        <Navbar/>
        <main>
            {children}
        </main>

        </body>
        </html>
    );
}