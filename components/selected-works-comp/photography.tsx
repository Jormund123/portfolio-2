"use client"

import React, { useState, useEffect, useMemo } from 'react';

// Define your image paths here
const imagePaths = [
    '/images/selected-works/select-1.jpg', // landscape
    '/images/selected-works/select-2.jpg', // portrait
    '/images/selected-works/select-3.jpg', // portrait
    '/images/selected-works/select-4.jpg', // landscape
];

const DynamicPhotoGrid = () => {
    const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImageDimensions = async () => {
            const imagePromises = imagePaths.map((src, index) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        resolve({
                            src,
                            aspectRatio: img.width / img.height,
                            id: index
                        });
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image: ${src}`);
                        resolve({ src, aspectRatio: 1, id: index });
                    };
                    img.src = src;
                });
            });
            const loadedImages = await Promise.all(imagePromises);
            setImageData(loadedImages);
            setLoading(false);
        };
        loadImageDimensions();
    }, []);

    // --- MODIFIED LAYOUT LOGIC ---
    const layout = useMemo(() => {
        if (imageData.length === 0) return [];

        const rows = [];
        // The target height for each row. Adjust this value to make images larger or smaller.
        const targetHeight = 350;

        // Group images into chunks of 2 (or 1 for the last row)
        for (let i = 0; i < imageData.length; i += 2) {
            const chunk = imageData.slice(i, i + 2);
            rows.push({
                images: chunk,
                // Every row will be justified, so it gets a fixed height
                height: targetHeight,
            });
        }

        return rows;
    }, [imageData]);

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center p-14">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
    }

    return (
        <div className="w-full px-1">
            {/* The gap between rows */}
            <div className="flex flex-col gap-1 sm:gap-2">
                {layout.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex w-full gap-1 sm:gap-2"
                        // Every row gets a fixed height to force justification
                        style={{ height: `${row.height}px` }}
                    >
                        {row.images.map((image) => (
                            <div
                                key={image.id}
                                className="relative overflow-hidden group bg-muted"
                                // This style is now applied to ALL images.
                                // It uses the aspect ratio to determine how much horizontal
                                // space each image should take. A wider image (higher aspect ratio)
                                // will get more space.
                                style={{
                                    flexGrow: image.aspectRatio,
                                    flexBasis: 0,
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Selection ${image.id + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicPhotoGrid;