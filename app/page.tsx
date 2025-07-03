"use client";

import {motion} from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import PlayfulHeroSection from "@/components/HeroSection";
import {Variants} from "motion";
import {ThemeManager} from "@/components/ThemeManager";

const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Home() {
    return (
        <>
            <ThemeManager theme="dark"/>
            <motion.div
                className=" flex flex-col min-h-screen pt-12 sm:pt-16 lg:pt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <PlayfulHeroSection/>
                </motion.div>

                {/* Video Music Software 1 Row Grid*/}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-4 flex-grow gap-0 group/container"
                >
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
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Footer/>
                </motion.div>
            </motion.div>
        </>
    );
}