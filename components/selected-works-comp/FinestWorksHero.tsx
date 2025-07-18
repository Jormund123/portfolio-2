import React from 'react'
import {FloatingElement} from "@/components/FloatingElement";
import {ArrowDown, Camera, Music2, Video} from "lucide-react";

const FinestWorksHero = () => {
    return (
        <>
            {/* Header Section */}
            <div
                className="grid grid-cols-1 lg:grid-cols-[theme(spacing.80)_1fr_theme(spacing.80)] mb-4 sm:mb-6 lg:mb-8 sm:mt-24 lg:mt-20 px-4 sm:px-8">
                <div className="relative z-10 flex flex-col justify-between lg:col-start-2">
                    <div className="space-y-2 sm:space-y-4">
                        <FloatingElement delay={200}>
                            <div className="flex items-baseline gap-3 sm:gap-4 group">
                                <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-foreground tracking-tighter transition-all duration-500 group-hover:text-muted-foreground">
                                    Finest Works.
                                </p>
                                <div
                                    className="flex flex-row gap-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Video
                                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-muted-foreground animate-pulse"/>
                                    <Music2
                                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-muted-foreground animate-pulse"/>
                                    <Camera
                                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-muted-foreground animate-pulse"/>
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
        </>
    )
}

export default FinestWorksHero;