import React from 'react';
import {ArrowRight, Video, ExternalLink, Play, ArrowDown} from "lucide-react";
import {FloatingElement} from "@/components/FloatingElement";
import Image from "next/image";
import Link from "next/link";

const Film = () => {
    return (
        <>
            {/* Header Section */}
            <div
                className="grid grid-cols-1 lg:grid-cols-[theme(spacing.80)_1fr_theme(spacing.80)] mb-4 sm:mb-6 lg:mb-8 sm:mt-24 lg:mt-20 px-4 sm:px-8">
                <div className="relative z-10 flex flex-col justify-between lg:col-start-2">
                    <div className="space-y-2 sm:space-y-4">
                        <FloatingElement delay={200}>
                            <div className="flex items-center gap-3 sm:gap-4 group">
                                <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-foreground tracking-tighter transition-all duration-500 group-hover:text-muted-foreground">
                                    Finest Works.
                                </p>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Video
                                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-muted-foreground animate-pulse"/>
                                </div>
                            </div>
                        </FloatingElement>
                    </div>

                    <FloatingElement delay={500}>
                        <p className="hidden lg:flex items-center gap-2 text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors group mt-6 leading-relaxed">
                            Step into a gallery of my favorite creations: a mix of code turned poetry, beats spun into
                            stories, and visuals that dance with ideas. Each project is a piece of curiosity made real,
                            a playful dive into what happens when art, logic, and a little mischief collide.
                            <ArrowDown
                                className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0"/>
                        </p>
                    </FloatingElement>
                <hr className=" border-border mt-4 "/>
                </div>
            </div>

            {/* Divider */}

            {/* Film Section */}
            <div className="mb-8 sm:mb-12 lg:mb-8">
                {/* Image Container - Full Width */}
                <FloatingElement delay={550}>
                    <div className="relative overflow-hidden group cursor-pointer">
                        <Link href="https://www.youtube.com/watch?v=hwdStAc_9cI"
                              target="_blank" className="block">
                            <div className="relative overflow-hidden">
                                <Image
                                    src="/images/selected-works/select_film_spiti.png"
                                    alt="Echoes I Mistook For Answers"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    priority
                                />
                                {/* Overlay */}
                                <div
                                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white"/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </FloatingElement>

                {/* Metadata Section - Full Width */}
                <FloatingElement delay={600}>
                    <div
                        className="flex items-baseline gap-6 px-4 py-3">
                        {/* Title (takes up remaining space) */}
                        <h2 className="flex-1 min-w-0 group truncate text-sm font-medium tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
                            Echoes I Mistook For Answers
                        </h2>
                        {/* Meta + Links (fixed size) */}
                        <div className="flex shrink-0 items-baseline gap-4">
                            <span className="hidden sm:inline text-xs tracking-widest uppercase text-muted-foreground">
                              Short Film
                            </span>
                            <span className="text-xs text-muted-foreground font-mono">2025</span>
                            <Link
                                href="https://www.youtube.com/watch?v=hwdStAc_9cI"
                                target="_blank"
                                className="group flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <span>Watch</span>
                                <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5"/>
                            </Link>
                            <Link
                                href="/selected-works/echoes-i-mistook-for-answers"
                                className="group flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <span>Details</span>
                                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5"/>
                            </Link>
                        </div>
                    </div>
                </FloatingElement>
                <hr className="w-1/2 mx-auto" />
            </div>
        </>
    );
}

export default Film;