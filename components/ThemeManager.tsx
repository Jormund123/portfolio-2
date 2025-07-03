"use client";

import { useEffect } from 'react';

// This component's only job is to manage the `dark` class on the body tag.
export const ThemeManager = ({ theme }: { theme: 'dark' | 'root' }) => {
    useEffect(() => {
        const body = document.body;

        if (theme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }

        // Optional: Cleanup function to remove the class when the component unmounts.
        // This is good practice if you navigate between light and dark pages.
        return () => {
            // When leaving the page, you might want to remove the class
            // to revert to a default state, or handle it based on the next page.
            // For simplicity, we'll just handle adding/removing on mount.
            // If you navigate from a light page to a dark page, the dark page's
            // ThemeManager will correctly add the `dark` class.
        };
    }, [theme]); // Re-run the effect if the theme prop changes

    // This component renders nothing to the DOM.
    return null;
};