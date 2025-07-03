import React from 'react';
import {ThemeManager} from "@/components/ThemeManager";

// Data for the skills section for easier management
const skillsData = [
    {
        title: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "ABAP", "HTML/CSS", "C/C++"],
    },
    {
        title: "Technologies",
        items: ["React.js", "Next.js", "Node.js", "Tailwind", "MongoDB", "Firebase", "Supabase", "Django", "Material-UI", "Express.js"],
    },
    {
        title: "Other Skills",
        items: ["Ableton Live", "Premiere Pro", "After Effects", "Photoshop", "Davinci Resolve", "Digital Marketing"],
    },
    {
        title: "Coursework",
        items: ["AI/ML", "Web Dev", "Data Structures", "Distributed Systems", "Compiler Design"],
    },
];


const About = () => {
    return (
        <>
            <ThemeManager theme="root"/>
            <div
                className="min-h-[80vh] relative overflow-hidden grid grid-cols-1 lg:grid-cols-[theme(spacing.80)_1fr_theme(spacing.80)] mt-10 sm:mt-12 lg:mt-16 px-4 sm:px-8">
                {/* Background decorative shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 dark:bg-blue-900/30"></div>
                    <div
                        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-300 rounded-full opacity-20 dark:bg-gray-800/30"></div>
                    <div
                        className="absolute top-3/4 left-1/4 w-48 h-48 bg-green-100 rounded-full opacity-15 dark:bg-green-900/20"></div>
                </div>

                {/* Left Column: Skills Section */}
                <div className="hidden lg:flex py-6 relative z-10 lg:col-start-1">
                    <div className="text-left w-full px-6">
                        {skillsData.map((category) => (
                            <div key={category.title} className="mb-6">
                                <p className="text-lg text-foreground/90 mb-3 tracking-tighter font-bold">
                                    {category.title}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <span key={skill}
                                              className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center Column: Remains horizontally centered */}
                <div
                    className="relative z-10 lg:col-start-2 flex flex-col py-6 text-center lg:text-left">
                    <p className="text-7xl font-semibold text-muted-foreground mb-4 tracking-tighter">
                        Hello, I'm Anand.
                    </p>
                    <p className="text-7xl font-semibold tracking-tighter leading-tight mb-8">
                        A musically-inclined software developer and a video editor.
                    </p>
                    <p className="text-sm tracking-tight leading-tight">
                        "Divine lights don't dim under human sanctions"
                    </p>
                </div>

                {/* Right Column: About me text */}
                <div className="hidden lg:flex items-start justify-end relative z-10 lg:col-start-3">
                    <div className="text-right px-6 pt-8">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            I grew up in Butwal, Nepal, where I discovered my passion for technology at the age of
                            eight.
                            I earned my B.Tech in Computer Science at{" "}
                            <a href="https://dtu.ac.in/" target="_blank" rel="noopener noreferrer"
                               className="font-medium text-foreground animated-underline">
                                Delhi Technological University
                            </a>, where I conducted research on{" "}
                            <a href="https://arxiv.org/abs/2412.21156" target="_blank" rel="noopener noreferrer"
                               className="font-medium text-foreground animated-underline">
                                CLD Detection
                            </a> and Parkinson's disease detection under the guidance of{" "}
                            <a href="https://scholar.google.co.in/citations?user=Ej57SugAAAAJ&hl=en" target="_blank"
                               rel="noopener noreferrer"
                               className="font-medium text-foreground animated-underline">
                                Dr. Prashant Shambharkar
                            </a>.
                            Before joining{" "}
                            <a href="https://www.cosmofirst.com/" target="_blank" rel="noopener noreferrer"
                               className="font-medium text-foreground animated-underline">
                                Cosmo First
                            </a> as an ABAP and full-stack developer, I co-founded a small clothing business.
                            At Cosmo First, I built AI-powered systems that combined data extraction, app and web
                            development, and ABAP APIs.
                            Today, I continue to work on diverse projects — from AI-driven platforms to short films,
                            informative videos, and music.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;