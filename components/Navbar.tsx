"use client"

import React, {useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ArrowUpRight, Menu, X} from "lucide-react";
import {Button} from "@/components/ui/stateful-button";
import {ThemeManager} from "@/components/ThemeManager";

const cn = (...classes: (string | undefined | boolean)[]) =>
    classes.filter(Boolean).join(" ");

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        {href: "/about", label: "About Me"},
        {href: "/works", label: "Selected Works"},
        {href: "/films", label: "Short Films"},
        {href: "/research", label: "Research"},
    ];

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                    hasScrolled
                        ? "bg-background/80 shadow-md backdrop-blur-sm border-b border-border"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-8xl my-4 mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex items-baseline justify-between h-10 lg:grid lg:grid-cols-[theme(spacing.80)_1fr_auto]">
                        {/* Column 1: Logo */}
                        <div className="lg:col-start-1">
                            <Link href="/"
                                  className={cn(
                                      "text-2xl font-bold cursor-pointer relative inline-block before:absolute before:content-[''] before:h-[2px] before:bg-foreground before:transition-all before:duration-300 before:top-full before:left-0",
                                      isActive("/")
                                          ? "text-foreground before:w-full"
                                          : "text-muted-foreground hover:text-foreground before:w-0 hover:before:w-full"
                                  )}>
                                <h3>Anand Karna</h3>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-baseline space-x-8 lg:col-start-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "transition-colors text-sm relative inline-block before:absolute before:content-[''] before:h-[2px] before:bg-foreground before:transition-all before:duration-300 before:top-full before:left-0",
                                        isActive(link.href)
                                            ? "text-foreground before:w-full"
                                            : "text-muted-foreground hover:text-foreground before:w-0 hover:before:w-full"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-baseline space-x-4 lg:col-start-3 justify-self-end">
                            <Link
                                href="https://drive.google.com/file/d/1GruW888KRvqtxT6lYj_1DMfIfrRFofv-/view"
                                target="_blank"
                                className="px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground relative inline-block before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 before:top-full before:left-0 hover:before:w-full"
                            >
                                <div className="flex flex-row items-center">
                                    My Resume
                                    <ArrowUpRight className="ml-2" size={18}/>
                                </div>
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm font-medium rounded-md transition-colors"
                            >
                                <Button className={cn(
                                    "transition-colors",
                                    isActive("/contact")
                                        ? "bg-foreground text-primary-foreground"
                                        : "bg-foreground text-primary-foreground hover:bg-primary/90"
                                )}>
                                    <div className="flex flex-row items-center">
                                        Work With Me
                                        <ArrowUpRight className="ml-2" size={18}/>
                                    </div>
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-baseline">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-baseline justify-center p-2 rounded-md focus:outline-none text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-background/95 backdrop-blur-sm border-b border-border",
                        isMenuOpen ? "max-h-screen" : "max-h-0"
                    )}
                >
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                                    isActive(link.href)
                                        ? "text-foreground bg-muted/50"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 pb-3 border-t border-border">
                            <Link
                                href="https://drive.google.com/file/d/1GruW888KRvqtxT6lYj_1DMfIfrRFofv-/view"
                                target="_blank"
                                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="flex flex-row items-center">
                                    My Resume
                                    <ArrowUpRight className="ml-2" size={18}/>
                                </div>
                            </Link>
                            <div className="px-3 py-2">
                                <Link
                                    href="/contact"
                                    className="inline-block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Button className={cn(
                                        "w-full transition-colors",
                                        isActive("/contact")
                                            ? "bg-foreground text-primary-foreground"
                                            : "bg-foreground text-primary-foreground hover:bg-primary/90"
                                    )}>
                                        <div className="flex flex-row items-center justify-center">
                                            Work With Me
                                            <ArrowUpRight className="ml-2" size={18}/>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}