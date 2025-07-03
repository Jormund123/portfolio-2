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
                className="h-screen relative overflow-hidden grid grid-cols-1 lg:grid-cols-[theme(spacing.80)_1fr_theme(spacing.80)] pt-20 lg:pt-24 px-4 sm:px-8">

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

                {/* Left Column: Skills Section */}
                <div className="hidden lg:flex py-6 relative z-10 lg:col-start-1 overflow-y-auto"> {/* Added overflow-y-auto for safety on smaller screens */}
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
                        <p className="text-7xl font-semibold text-muted-foreground mb-4 tracking-tighter">
                            Hello, I'm Anand.
                        </p>
                    </FloatingElement>
                    <FloatingElement delay={200}>
                        <p className="text-7xl font-semibold tracking-tighter leading-tight mb-4">
                            A musically-inclined software developer and a video editor.
                        </p>
                    </FloatingElement>
                    <FloatingElement delay={300}>
                        <p className="text-sm tracking-tight leading-tight mb-12 italic">
                            "Divine lights don't dim under human sanctions"
                        </p>
                    </FloatingElement>
                    <hr/>

                    <div className="flex-1 flex flex-col pt-12 lg:items-start space-y-8">
                        <FloatingElement delay={400}>
                            <div className="text-center lg:text-left">
                                <p className="text-lg font-bold tracking-tighter text-foreground mb-3">Creative &
                                    Technical Journey</p>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                                    Writing code for over 5 years, producing music for 6+, and editing videos for 3,
                                    shaping
                                    ideas through both logic and art.
                                </p>
                            </div>
                        </FloatingElement>

                        <div className="grid grid-cols-3 gap-6 text-center lg:text-left relative">
                            <FloatingElement delay={500}>
                                <div className="relative group">
                                    <div
                                        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PulsatingDot size="w-1 h-1" color="bg-blue-500"/>
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">5+</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Years
                                        Coding</p>
                                </div>
                            </FloatingElement>
                            <FloatingElement delay={600}>
                                <div className="relative group">
                                    <div
                                        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PulsatingDot size="w-1 h-1" color="bg-green-500" delay={500}/>
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">6+</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Years Music
                                        Production</p>
                                </div>
                            </FloatingElement>
                            <FloatingElement delay={700}>
                                <div className="relative group">
                                    <div
                                        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PulsatingDot size="w-1 h-1" color="bg-purple-500" delay={1000}/>
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">3+</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Years Video
                                        Editing</p>
                                </div>
                            </FloatingElement>

                            <div className="absolute -right-16 top-0 flex flex-col space-y-4">
                                <InteractiveSkillIcon icon={Code} label="Coding" delay={800}/>
                                <InteractiveSkillIcon icon={Music} label="Music" delay={900}/>
                                <InteractiveSkillIcon icon={Video} label="Video" delay={1000}/>
                            </div>
                        </div>

                        <FloatingElement delay={1100}>
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <Link href="https://www.linkedin.com/in/anand-karna-769007202/" target="_blank">
                                    <button
                                        className="group px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
                                        <div className="flex flex-row items-center space-x-1">
                                            <span>LinkedIn</span>
                                            <ArrowUpRight size={18}
                                                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                        </div>
                                    </button>
                                </Link>
                                <Link href="https://thenowfactor.vercel.app/" target="_blank">
                                    <button
                                        className="group px-6 py-2 border border-foreground/20 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-all duration-300 hover:scale-105">
                                        <div className="flex flex-row items-center space-x-1">
                                            <span>The Now Factor</span>
                                            <ArrowUpRight size={18}
                                                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                        </div>
                                    </button>
                                </Link>
                                <Link href="https://yuorloph.blanxer.io/" target="_blank">
                                    <button
                                        className="group px-6 py-2 border border-foreground/20 text-foreground rounded-full text-sm font-medium hover:bg-foreground/5 transition-all duration-300 hover:scale-105">
                                        <div className="flex flex-row items-center space-x-1">
                                            <span>Yuorloph</span>
                                            <ArrowUpRight size={18}
                                                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </FloatingElement>
                    </div>
                </div>

                {/* Right Column: About me text */}
                <div className="hidden lg:flex items-start justify-end relative z-10 lg:col-start-3">
                    <FloatingElement delay={1200}>
                        <div className="text-right px-6 pt-8 flex flex-col h-full">
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                I grew up in Butwal, Nepal, where I discovered my passion for technology at the age
                                of
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
                                At Cosmo First, I built AI-powered systems that combined data extraction, app and
                                web
                                development, and ABAP APIs.
                                Today, I continue to work on diverse projects — from AI-driven platforms to short
                                films,
                                informative videos, and music.
                            </p>

                            <div className="flex-1 relative group min-h-0">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src="/images/about/Profile1.jpg"
                                    alt="Anand Karna"
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Sparkles size={20} className="text-foreground/60"/>
                                </div>
                            </div>
                        </div>
                    </FloatingElement>
                </div>
            </div>
        </>
    );
};

export default About;