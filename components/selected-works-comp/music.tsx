import React from 'react';
import Image from "next/image";

const Music = (props) => {
    return (
        <>
            <div className="group relative overflow-hidden pb-10">
                <div className="flex flex-col lg:flex-row h-[400px] lg:h-[350px]">
                    {/* Image Section */}
                    <div className="basis-full lg:basis-2/3 relative overflow-hidden">
                        <Image
                            width={600}
                            height={600}
                            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                            priority
                            src="/images/selected-works/select_guitar.png"
                            alt="I'll try to be your moon - guitar composition"
                        />
                    </div>

                    {/* Content Section */}
                    <div
                        className="basis-full lg:basis-1/3 bg-background border-l border-foreground/10 flex flex-col justify-center px-6 py-8 lg:px-8">
                        <div className="space-y-6">
                            {/* Main Title */}
                            <div className="space-y-3">
                                <h2 className="text-2xl lg:text-3xl font-medium text-foreground tracking-tighter">
                                    I'll Try To Be Your Moon
                                </h2>
                            </div>

                            {/* Details */}
                            <div className="flex items-baseline gap-6">
                                <div className="flex shrink-0 items-baseline gap-4">
                                <span
                                    className="hidden sm:inline text-xs tracking-widest uppercase text-muted-foreground">
                                    Music
                                </span>
                                    <span className="text-xs text-muted-foreground font-mono">2025</span>
                                    <span className="text-xs text-muted-foreground tracking-tighter">
                                    Synthpop, Hiphop, R&B/Soul
                                </span>
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="flex items-center gap-4">
                                <button
                                    className="group/btn text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5"
                                         fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.539 0-.299.24-.659.6-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02v-.12h.001zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                                    </svg>
                                </button>

                                <button
                                    className="group/btn text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5"
                                         fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-1/2 mx-auto"/>
        </>
    );
}

export default Music;