// components/CustomCursor.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const smoothOptions = { damping: 25, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mousePosition.x, smoothOptions),
        y: useSpring(mousePosition.y, smoothOptions),
    };

    // The iconic 6-color stripe for the background
    const appleRetroGradient = `linear-gradient(
        to bottom, 
        #6ECB63 0%, #6ECB63 16.6%,   /* Green */
        #FCD144 16.6%, #FCD144 33.3%, /* Yellow */
        #F28F3B 33.3%, #F28F3B 50%,   /* Orange */
        #E64234 50%, #E64234 66.6%,   /* Red */
        #A04A9D 66.6%, #A04A9D 83.3%, /* Purple */
        #3452A5 83.3%, #3452A5 100%  /* Blue */
    )`;

    return (
        <motion.div
            // --- CHANGES START HERE ---
            // Removed `bg-white` and `mix-blend-difference`.
            // Added a subtle shadow for visibility.
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none shadow-md"
            style={{
                translateX: smoothMouse.x,
                translateY: smoothMouse.y,
                // Applied our new gradient background
                background: appleRetroGradient,
            }}
            // Adjust the dot's position to be centered on the cursor
            // (w-5/2 = 2.5, so 10px / 2 = 5px offset)
            initial={{x: -10, y: -10}}
            animate={{x: mousePosition.x - 8, y: mousePosition.y - 8}}
            transition={{type: 'spring', stiffness: 300, damping: 60}}
        />
    );
};

export default CustomCursor;