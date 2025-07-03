import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

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
            <CustomCursor/>
            {children}
        </main>

        </body>
        </html>
    );
}