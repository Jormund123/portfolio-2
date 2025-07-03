"use client";

import React, {useState, useEffect, ReactNode, FC} from 'react';
import Footer from "@/components/Footer";
import Image from "next/image";
import PlayfulHeroSection from "@/components/HeroSection";
import {ThemeManager} from "@/components/ThemeManager";

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

export default function Home() {
    return (
        <>
            <ThemeManager theme="dark"/>
            <div className=" flex flex-col min-h-screen relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
                <FloatingElement delay={100}>
                    <PlayfulHeroSection/>
                </FloatingElement>

                {/* Video Music Software 1 Row Grid*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-4 flex-grow gap-0 group/container">
                    <FloatingElement delay={200}>
                        <div
                            className="relative w-full h-64 sm:h-80 lg:h-full group overflow-hidden border-1 border-amber-50 cursor-pointer transition-all duration-500 ease-out group-hover/container:opacity-40 hover:!opacity-100">
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-amber-900/20 z-10"></div>
                            <Image
                                src="/images/home/Video.png"
                                alt="Video"
                                fill
                                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 filter sepia-[0.3] saturate-[0.8] contrast-[1.1] brightness-[0.9]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <p className="text-xs sm:text-sm text-amber-50 drop-shadow-2xl tracking-widest transform group-hover:scale-110 transition-transform duration-500 ease-out">
                                    Video
                                </p>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-orange-300/10 mix-blend-overlay z-5"></div>
                        </div>
                    </FloatingElement>

                    <FloatingElement delay={300}>
                        <div
                            className="relative w-full h-64 sm:h-80 lg:h-full group overflow-hidden border-1 border-amber-50 cursor-pointer transition-all duration-500 ease-out group-hover/container:opacity-40 hover:!opacity-100">
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-amber-900/20 z-10"></div>
                            <Image
                                src="/images/home/Music.png"
                                alt="Music"
                                fill
                                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 filter sepia-[0.3] saturate-[0.8] contrast-[1.1] brightness-[0.9]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <p className="text-xs sm:text-sm text-amber-50 drop-shadow-2xl tracking-widest transform group-hover:scale-110 transition-transform duration-500 ease-out">
                                    Music
                                </p>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-orange-300/10 mix-blend-overlay z-5"></div>
                        </div>
                    </FloatingElement>

                    <FloatingElement delay={400}>
                        <div
                            className="relative w-full h-64 sm:h-80 lg:h-full group overflow-hidden border-1 border-amber-50 sm:col-span-2 lg:col-span-1 cursor-pointer transition-all duration-500 ease-out group-hover/container:opacity-40 hover:!opacity-100">
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-amber-900/20 z-10"></div>
                            <Image
                                src="/images/home/Software.png"
                                alt="Software"
                                fill
                                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 filter sepia-[0.3] saturate-[0.8] contrast-[1.1] brightness-[0.9]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <p className="text-xs sm:text-sm text-amber-50 drop-shadow-2xl tracking-widest transform group-hover:scale-110 transition-transform duration-500 ease-out">
                                    Software
                                </p>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-orange-300/10 mix-blend-overlay z-5"></div>
                        </div>
                    </FloatingElement>
                </div>

                <FloatingElement delay={500}>
                    <Footer/>
                </FloatingElement>
            </div>
        </>
    );
}