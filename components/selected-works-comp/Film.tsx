import React from 'react';
import {ArrowRight, Video, ExternalLink, Play, ArrowDown, Music2, Camera} from "lucide-react";
import {FloatingElement} from "@/components/FloatingElement";
import Image from "next/image";
import Link from "next/link";

const Film = () => {
    return (
        <>
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
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="flex justify-between items-baseline gap-6 py-3">
                            {/* Title (takes up remaining space) */}
                            <h2 className="truncate font-medium tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
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
                    </div>
                </FloatingElement>
                <hr className="w-1/2 mx-auto" />
            </div>
        </>
    );
}

export default Film;