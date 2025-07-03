"use client";

import React from "react";
import Link from "next/link";
import {FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaSpotify, FaApple} from "react-icons/fa";

const cn = (...classes: (string | undefined | boolean)[]) =>
    classes.filter(Boolean).join(" ");

export default function Footer() {
    const socialLinks = [
        {
            href: "https://www.instagram.com/anand.krn/",
            icon: FaInstagram,
            label: "Instagram",
            color: "hover:text-pink-500"
        },
        {
            href: "https://linkedin.com/in/anandkarna",
            icon: FaLinkedin,
            label: "LinkedIn",
            color: "hover:text-blue-500"
        },
        {
            href: "https://github.com/anandkarna",
            icon: FaGithub,
            label: "GitHub",
            color: "hover:text-gray-400"
        }
    ];

    const musicLinks = [
        {
            href: "https://youtube.com/@anandkarna",
            icon: FaYoutube,
            label: "YouTube",
            color: "hover:text-red-500"
        },
        {
            href: "https://open.spotify.com/artist/anandkarna",
            icon: FaSpotify,
            label: "Spotify",
            color: "hover:text-green-500"
        },
        {
            href: "https://music.apple.com/artist/anandkarna",
            icon: FaApple,
            label: "Apple Music",
            color: "hover:text-gray-300"
        }
    ];

    return (
        <footer className="border-t border-gray-800 bg-background">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    {/* Left side - Social Links */}
                    <div className="flex items-center space-x-6">
                        <span className="text-sm text-muted-foreground font-medium">Connect</span>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "text-muted-foreground transition-all duration-300 hover:scale-110",
                                        link.color
                                    )}
                                    aria-label={link.label}
                                >
                                    <link.icon size={20}/>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Center - Brand/Copyright */}
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            © 2025 Anand Karna. All rights reserved.
                        </p>
                    </div>

                    {/* Right side - Music Links */}
                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-4">
                            {musicLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "text-muted-foreground transition-all duration-300 hover:scale-110",
                                        link.color
                                    )}
                                    aria-label={link.label}
                                >
                                    <link.icon size={20}/>
                                </Link>
                            ))}
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">Listen</span>
                    </div>
                </div>


            </div>
        </footer>
    );
}