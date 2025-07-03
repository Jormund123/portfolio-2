import React, {useState, useEffect, ReactNode, FC} from 'react';
import {Play, Music, Code2, Video, Headphones, Terminal, Film, Speaker, ArrowUpRight, ArrowRight} from "lucide-react";
import Link from "next/link";

// Props for the FloatingElement component (from About page)
interface FloatingElementProps {
    delay?: number;
    children: ReactNode;
    className?: string;
}

const FloatingElement: FC<FloatingElementProps> = ({delay = 0, children, className}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
            style={{animationDelay: `${delay}ms`}}
        >
            {children}
        </div>
    );
};

export default function PlayfulHeroSection() {
    return (
        <>
            {/* Floating Icons - This section is completely unchanged. */}
            <div className="absolute inset-0 pointer-events-none">
                {/* ... all your floating icons go here, no changes ... */}
                <div className="absolute top-1/4 left-8 animate-bounce"
                     style={{animationDelay: '0s', animationDuration: '3s'}}>
                    <Video className="w-4 h-4 text-amber-300/40 rotate-12"/>
                </div>
                <div className="absolute top-1/5 right-12 animate-pulse" style={{animationDelay: '1s'}}>
                    <Film className="w-5 h-5 text-orange-400/30 -rotate-6"/>
                </div>
                <div className="absolute top-1/5 left-4 animate-bounce"
                     style={{animationDelay: '2s', animationDuration: '4s'}}>
                    <Play className="w-3 h-3 text-amber-200/50 rotate-45"/>
                </div>
                <div className="absolute top-1/5 left-16 animate-spin"
                     style={{animationDelay: '0.5s', animationDuration: '8s'}}>
                    <Music className="w-4 h-4 text-emerald-400/40 rotate-12"/>
                </div>
                <div className="absolute top-1/3 right-24 animate-bounce"
                     style={{animationDelay: '1.5s', animationDuration: '3.5s'}}>
                    <Headphones className="w-4 h-4 text-green-300/35 -rotate-12"/>
                </div>
                <div className="absolute top-1/4 right-8 animate-pulse" style={{animationDelay: '2.5s'}}>
                    <Speaker className="w-3 h-3 text-emerald-300/45 rotate-24"/>
                </div>
                <div className="absolute top-1/6 right-4 animate-bounce"
                     style={{animationDelay: '1s', animationDuration: '3.8s'}}>
                    <Code2 className="w-4 h-4 text-blue-300/40 rotate-6"/>
                </div>
                <div className="absolute top-1/7 left-12 animate-spin"
                     style={{animationDelay: '0.8s', animationDuration: '12s'}}>
                    <Terminal className="w-3 h-3 text-cyan-400/35 -rotate-15"/>
                </div>
                <div
                    className="absolute top-1/3 left-32 w-2 h-2 bg-gradient-to-br from-amber-300/30 to-orange-400/20 rounded-full animate-pulse"
                    style={{animationDelay: '3s'}}></div>
                <div
                    className="absolute top-1/3 right-16 w-1.5 h-1.5 bg-gradient-to-br from-emerald-300/40 to-green-400/25 rounded-full animate-bounce"
                    style={{animationDelay: '2.2s', animationDuration: '2.8s'}}></div>
            </div>

            {/* Main Content Grid Container */}
            <div
                className="grid grid-cols-1 lg:grid-cols-[theme(spacing.80)_1fr_theme(spacing.80)] mt-10 sm:mt-12 lg:mt-16 px-4 sm:px-8"
            >
                <div className="hidden lg:flex items-end justify-start lg:col-start-1">
                    <FloatingElement delay={100}>
                        <Link
                            href="https://thenowfactor.vercel.app/social"
                            target="_blank"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
                        >
                            Read Article
                            <ArrowUpRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                        </Link>
                    </FloatingElement>
                </div>

                <div className="relative z-10 flex flex-col justify-between lg:col-start-2">
                    {/* This div now only contains the headlines */}
                    <div className="space-y-1 sm:space-y-2">
                        <FloatingElement delay={200}>
                            <div className="flex items-center gap-4 group">
                                <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-50 drop-shadow-lg tracking-tighter transition-all duration-500 group-hover:text-amber-100">
                                    Video Editor.
                                </p>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Video className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 animate-pulse"/>
                                </div>
                            </div>
                        </FloatingElement>
                        <FloatingElement delay={300}>
                            <div className="flex items-center gap-4 group">
                                <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-50 drop-shadow-lg tracking-tighter transition-all duration-500 group-hover:text-emerald-100">
                                    Music Producer.
                                </p>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Music className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 animate-bounce"/>
                                </div>
                            </div>
                        </FloatingElement>
                        <FloatingElement delay={400}>
                            <div className="flex items-center gap-4 group">
                                <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-50 drop-shadow-lg tracking-tighter transition-all duration-500 group-hover:text-blue-100">
                                    Software Developer.
                                </p>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 animate-pulse"/>
                                </div>
                            </div>
                        </FloatingElement>
                    </div>

                    <FloatingElement delay={500}>
                        <Link
                            href="/photography"
                            className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group mt-8"
                        >
                            Through My Lens
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                        </Link>
                    </FloatingElement>
                </div>

                <div className="hidden lg:flex items-end justify-start lg:col-start-3">
                    <FloatingElement delay={600}>
                        <Link
                            href="https://music.apple.com/in/playlist/60s-2000s-rock/pl.u-JPAZbdZFL2gPard"
                            target="_blank"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
                        >
                            Playlist
                            <ArrowUpRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                        </Link>
                    </FloatingElement>
                </div>
            </div>
        </>
    );
}