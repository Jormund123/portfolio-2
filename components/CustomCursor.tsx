// components/CustomCursor.tsx
"use client";

import React, {useState, useEffect} from 'react';
import {motion, useSpring} from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    // Use framer-motion's useSpring for smooth tracking
    const smoothOptions = {damping: 60, stiffness: 40, mass: 1.2};
    const smoothMouse = {
        x: useSpring(mousePosition.x, smoothOptions),
        y: useSpring(mousePosition.y, smoothOptions),
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference"
            style={{
                translateX: smoothMouse.x,
                translateY: smoothMouse.y,
            }}
            // Adjust the dot's position to be centered on the cursor
            initial={{x: -10, y: -10}}
            animate={{x: mousePosition.x - 8, y: mousePosition.y - 8}}
            transition={{type: 'spring', stiffness: 300, damping: 60}}
        />
    );
};

export default CustomCursor;