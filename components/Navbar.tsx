"use client"

import React, {useState, useEffect} from "react"
import Link from "next/link"
import {ArrowUpRight, Menu, X} from "lucide-react"
import {Button} from "@/components/ui/stateful-button";

const cn = (...classes: (string | undefined | boolean)[]) =>
    classes.filter(Boolean).join(" ")

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                hasScrolled ? "shadow-md" : ""
            )}
        >
            <div className="max-w-8xl my-4 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between h-20">
                    {/* Brand + desktop nav */}
                    <div className="flex items-baseline">
                        <Link href="/" className="text-2xl font-bold">
                            <h3>Anand Karna</h3>
                        </Link>
                        <div className="hidden md:flex items-baseline ml-36 space-x-8">
                            <Link href="/about"
                                  className="transition-colors text-muted-foreground hover:text-white relative inline-block before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-[#DEDEDE] before:transition-all before:duration-300 before:top-full before:left-0 hover:before:w-full">
                                About Me
                            </Link>
                            <Link href="/works"
                                  className="transition-colors text-muted-foreground hover:text-white relative inline-block before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-[#DEDEDE] before:transition-all before:duration-300 before:top-full before:left-0 hover:before:w-full">
                                Selected Works
                            </Link>
                        </div>
                    </div>

                    {/* Desktop buttons */}
                    <div className="hidden md:flex items-baseline space-x-4">
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-white relative inline-block before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-[#DEDEDE] before:transition-all before:duration-300 before:top-full before:left-0 hover:before:w-full"
                        >
                            <div className="flex flex-row">
                                My Resume
                                <ArrowUpRight className="ml-2" size={18}/>
                            </div>

                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
                        >
                            <Button className="bg-white text-black">
                                <div className="flex flex-row">
                                    Work With Me
                                    <ArrowUpRight className="ml-2" size={18}/>
                                </div>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile toggle button */}
                    <div className="md:hidden flex items-baseline">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-baseline justify-center p-2 rounded-md focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
                    isMenuOpen ? "max-h-screen" : "max-h-0"
                )}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href="/about"
                        onClick={toggleMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/works"
                        onClick={toggleMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Selected Works
                    </Link>
                    <div className="border-t my-2"></div>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        onClick={toggleMenu}
                        className="block px-3 py-2 rounded-md text-base font-medium"
                    >
                        My Resume
                    </Link>
                    <Link
                        href="/contact"
                        onClick={toggleMenu}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                    >
                        <Button>
                            Work With Me
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
