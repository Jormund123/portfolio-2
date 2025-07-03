"use client";

import React, {useState, useEffect, ReactNode, FC} from 'react';
import {ArrowUpRight, Code, Music, Video, Sparkles, LucideProps} from "lucide-react";
import {ThemeManager} from "@/components/ThemeManager";
import Link from "next/link";

// Data types for the skills section
interface Skill {
    title: string;
    items: string[];
}

// Data for the skills section for easier management
const skillsData: Skill[] = [
    {
        title: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "ABAP", "HTML/CSS", "C/C++"],
    },
    {
        title: "Technologies",
        items: ["React.js", "React Native", "Next.js", "Tailwind", "Material UI", "ShadCN", "Node.js", "Express.js", "Supabase", "Mongo DB", "Firebase", "Redis", "Docker"],
    },
    {
        title: "Other Skills",
        items: ["Ableton Live", "Premiere Pro", "After Effects", "Photoshop", "Davinci Resolve", "Film Making", "Photography", "Digital Marketing", "LaTex", "Canva"],
    },
    {
        title: "Coursework",
        items: ["AI/ML", "Web Development", "Data Structures & Algorithms", "Engineering Economics", "Distributed Systems", "Compiler Design", "Computer Architecture"]
    },
];

// Props for the FloatingElement component
export interface FloatingElementProps {
    delay?: number;
    children: ReactNode;
    className?: string;
}

export const FloatingElement: FC<FloatingElementProps> = ({delay = 0, children, className}) => {
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

// Props for the PulsatingDot component
interface PulsatingDotProps {
    size?: string;
    delay?: number;
    color?: string;
}

const PulsatingDot: FC<PulsatingDotProps> = ({size = "w-2 h-2", delay = 0, color = "bg-blue-500"}) => {
    return (
        <div
            className={`${size} ${color} rounded-full animate-pulse`}
            style={{animationDelay: `${delay}ms`, animationDuration: '2s'}}
        />
    );
};

// Props for the InteractiveSkillIcon component
interface InteractiveSkillIconProps {
    icon: React.ComponentType<LucideProps>;
    label: string;
    delay?: number;
}

const InteractiveSkillIcon: FC<InteractiveSkillIconProps> = ({icon: Icon, label, delay = 0}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FloatingElement delay={delay}>
                <div
                    className={`p-3 rounded-full bg-background/10 backdrop-blur-sm border border-foreground/10 transition-all duration-300 hover:scale-110 hover:bg-background/20 ${isHovered ? 'shadow-lg' : ''}`}>
                    <Icon size={20} className="text-foreground/70"/>
                </div>
            </FloatingElement>
            {isHovered && (
                <div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                    {label}
                </div>
            )}
        </div>
    );
};

const About: FC = () => {
    return (
        <>
            <ThemeManager theme="root"/>
            <div
                className="h-screen overflow-x-hidden relative grid grid-cols-1 lg:grid-cols-[theme(spacing.80)_1fr_theme(spacing.80)] pt-14 lg:pt-18 px-4 sm:px-8">

                {/* Enhanced Background decorative shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 dark:bg-blue-900/30 animate-pulse"
                        style={{animationDuration: '4s'}}></div>
                    <div
                        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-300 rounded-full opacity-20 dark:bg-gray-800/30 animate-pulse"
                        style={{animationDuration: '6s'}}></div>
                    <div
                        className="absolute top-3/4 left-1/4 w-48 h-48 bg-green-100 rounded-full opacity-15 dark:bg-green-900/20 animate-pulse"
                        style={{animationDuration: '5s'}}></div>
                    <div
                        className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-10 dark:bg-purple-900/20 animate-bounce"
                        style={{animationDuration: '3s'}}></div>
                    <div
                        className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-orange-200 rounded-full opacity-15 dark:bg-orange-900/20 animate-bounce"
                        style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                </div>

                {/* Desktop: Left Column: Skills Section */}
                <div className="hidden lg:flex py-6 relative z-10 lg:col-start-1 overflow-y-auto">
                    <div className="text-left w-full px-6">
                        {skillsData.map((category, categoryIndex) => (
                            <FloatingElement key={category.title} delay={categoryIndex * 200}>
                                <div className="mb-6">
                                    <p className="text-lg text-foreground/90 mb-3 tracking-tighter font-bold">
                                        {category.title}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill, index) => (
                                            <FloatingElement key={skill} delay={categoryIndex * 200 + index * 50}>
                                                <span
                                                    className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                                                    {skill}
                                                </span>
                                            </FloatingElement>
                                        ))}
                                    </div>
                                </div>
                            </FloatingElement>
                        ))}
                    </div>
                </div>

                {/* Center Column: Main content */}
                <div className="relative z-10 lg:col-start-2 flex flex-col pt-6 text-center lg:text-left">
                    <FloatingElement delay={100}>
                        <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-muted-foreground mb-4 tracking-tighter">
                            Hello, I'm Anand.
                        </p>
                    </FloatingElement>
                    <FloatingElement delay={200}>
                        <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter leading-tight mb-4">
                            A musically-inclined software developer and a video editor.
                        </p>
                    </FloatingElement>
                    <FloatingElement delay={300}>
                        <p className="text-sm tracking-tight leading-tight mb-12 italic">
                            "Divine lights don't dim under human sanctions"
                        </p>
                    </FloatingElement>
                    <hr/>
                    <div className="text-foreground mt-12">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex flex-col lg:items-start space-y-8">
                                <FloatingElement delay={400}>
                                    <div className="text-center lg:text-left">
                                        <p className="text-lg font-bold tracking-tighter text-foreground mb-3">
                                            Creative & Technical Journey
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                                            From coding and music production to video editing, my journey blends technical problem-solving with artistic expression.
                                        </p>
                                    </div>
                                </FloatingElement>

                                <div className="flex flex-1 flex-col">
                                    {/* 3 Column Grid - Fixed alignment */}
                                    <div className="grid grid-cols-3 gap-6 text-center lg:text-left relative">
                                        {/*1st Col*/}
                                        <FloatingElement delay={500}>
                                            <div className="relative group">
                                                <div
                                                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <PulsatingDot size="w-1 h-1" color="bg-blue-500"/>
                                                </div>
                                                <p className="text-2xl font-bold text-foreground">5+</p>
                                                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                                                    Years Coding
                                                </p>
                                            </div>
                                        </FloatingElement>

                                        {/*2nd Col*/}
                                        <FloatingElement delay={600}>
                                            <div className="relative group">
                                                <div
                                                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <PulsatingDot size="w-1 h-1" color="bg-green-500" delay={500}/>
                                                </div>
                                                <p className="text-2xl font-bold text-foreground">6+</p>
                                                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                                                    Years Music Production
                                                </p>
                                            </div>
                                        </FloatingElement>

                                        {/*3rd Col*/}
                                        <FloatingElement delay={700}>
                                            <div className="relative group">
                                                <div
                                                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <PulsatingDot size="w-1 h-1" color="bg-purple-500" delay={1000}/>
                                                </div>
                                                <p className="text-2xl font-bold text-foreground">3+</p>
                                                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                                                    Years Video Editing
                                                </p>
                                            </div>
                                        </FloatingElement>
                                    </div>

                                    <div
                                        className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                        <Link href="https://www.linkedin.com/in/anand-karna-769007202/" target="_blank">
                                            <button
                                                className="md:w-full lg:w-full sm:w-auto mt-8 group px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
                                                <div className="flex flex-row items-center justify-center space-x-1">
                                                    <span>LinkedIn</span>
                                                    <ArrowUpRight
                                                        size={18}
                                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                                    />
                                                </div>
                                            </button>
                                        </Link>
                                        <Link href="https://thenowfactor.vercel.app/" target="_blank">
                                            <button
                                                className="md:w-full lg:w-full sm:w-auto mt-8 group px-6 py-2 border border-foreground/20 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-all duration-300 hover:scale-105">
                                                <div className="flex flex-row items-center justify-center space-x-1">
                                                    <span>The Now Factor</span>
                                                    <ArrowUpRight
                                                        size={18}
                                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                                    />
                                                </div>
                                            </button>
                                        </Link>
                                        <Link href="https://yuorloph.blanxer.io/" target="_blank">
                                            <button
                                                className="md:w-full lg:w-full sm:w-auto mt-8 group px-6 py-2 border border-foreground/20 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-all duration-300 hover:scale-105">
                                                <div className="flex flex-row items-center justify-center space-x-1">
                                                    <span>Yuorloph</span>
                                                    <ArrowUpRight
                                                        size={18}
                                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                                    />
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Interactive Skills Icons */}
                            <FloatingElement delay={700}>
                                <div
                                    className="hidden lg:flex flex-row justify-center lg:flex-col lg:flex-1 space-x-5 lg:space-x-0 lg:space-y-10 mt-8 lg:mt-0">
                                    <InteractiveSkillIcon icon={Code} label="Coding" delay={800}/>
                                    <InteractiveSkillIcon icon={Music} label="Music" delay={900}/>
                                    <InteractiveSkillIcon icon={Video} label="Video" delay={1000}/>
                                </div>
                            </FloatingElement>
                        </div>
                    </div>
                </div>

                {/* Desktop: Right Column: About me text */}
                <div className="hidden lg:flex lg:col-start-3 relative z-10">
                    <FloatingElement delay={1200}>
                        <div className="text-right px-6 py-8 flex flex-col h-full">
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                I grew up in Butwal, Nepal, where I discovered my passion for technology at the age of
                                eight.
                                I earned my B.Tech in Computer Science at{" "}
                                <a href="https://dtu.ac.in/" target="_blank" rel="noopener noreferrer"
                                   className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                    Delhi Technological University
                                </a>, where I conducted research on{" "}
                                <a href="https://arxiv.org/abs/2412.21156" target="_blank" rel="noopener noreferrer"
                                   className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                    CLD Detection
                                </a> and Parkinson's disease detection under the guidance of{" "}
                                <a href="https://scholar.google.co.in/citations?user=Ej57SugAAAAJ&hl=en"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                    Dr. Prashant Shambharkar
                                </a>.
                                Before joining{" "}
                                <a href="https://www.cosmofirst.com/" target="_blank" rel="noopener noreferrer"
                                   className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                    Cosmo First
                                </a> as an ABAP and full-stack developer, I co-founded a small clothing business.
                                At Cosmo First, I built AI-powered systems that combined data extraction, app and web
                                development, and ABAP APIs.
                                Today, I continue to work on diverse projects — from AI-driven platforms to short films,
                                informative videos, and music.
                            </p>

                            <div className="flex-1 relative min-h-0">
                                <img
                                    src="/images/about/Profile1.jpg"
                                    alt="Anand Karna"
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </FloatingElement>
                </div>

                {/* Mobile: Skills Section (Top) */}
                <div className="lg:hidden relative z-10 py-6 ">
                    <div className="text-center">
                        <FloatingElement delay={50}>
                            <p className="text-3xl font-bold text-foreground mb-8 tracking-tighter">Skills &
                                Expertise</p>
                        </FloatingElement>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skillsData.map((category, categoryIndex) => (
                                <FloatingElement key={category.title} delay={categoryIndex * 150}>
                                    <div
                                        className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 shadow-lg hover:shadow-xl transition-shadow">
                                        <p className="text-lg text-foreground/90 mb-4 tracking-tighter font-bold text-center">
                                            {category.title}
                                        </p>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {category.items.map((skill, index) => (
                                                <FloatingElement key={skill} delay={categoryIndex * 150 + index * 30}>
                                                    <span
                                                        className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-default">
                                                        {skill}
                                                    </span>
                                                </FloatingElement>
                                            ))}
                                        </div>
                                    </div>
                                </FloatingElement>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile: About me section (Bottom) */}
                <div className="lg:hidden relative z-10 mt-12 mb-8">
                    <FloatingElement delay={1200}>

                        <div className="text-center mb-6">
                            <div className="w-48 h-48 mx-auto mb-6 relative">
                                <img
                                    src="/images/about/Profile1.jpg"
                                    alt="Anand Karna"
                                    className="w-full h-full object-cover rounded-full shadow-lg border-4 border-foreground/10"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tighter">About Me</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            I grew up in Butwal, Nepal, where I discovered my passion for technology at the age of
                            eight.
                            I earned my B.Tech in Computer Science at{" "}
                            <a href="https://dtu.ac.in/" target="_blank" rel="noopener noreferrer"
                               className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                Delhi Technological University
                            </a>, where I conducted research on{" "}
                            <a href="https://arxiv.org/abs/2412.21156" target="_blank" rel="noopener noreferrer"
                               className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                CLD Detection
                            </a> and Parkinson's disease detection under the guidance of{" "}
                            <a href="https://scholar.google.co.in/citations?user=Ej57SugAAAAJ&hl=en"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                Dr. Prashant Shambharkar
                            </a>.
                            Before joining{" "}
                            <a href="https://www.cosmofirst.com/" target="_blank" rel="noopener noreferrer"
                               className="font-medium text-foreground hover:text-foreground/80 transition-colors underline decoration-dotted">
                                Cosmo First
                            </a> as an ABAP and full-stack developer, I co-founded a small clothing business.
                            At Cosmo First, I built AI-powered systems that combined data extraction, app and web
                            development, and ABAP APIs.
                            Today, I continue to work on diverse projects — from AI-driven platforms to short films,
                            informative videos, and music.
                        </p>

                    </FloatingElement>
                </div>


            </div>
        </>
    );
};

// @ts-ignore
export default About;