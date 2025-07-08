"use client"

import React, {useState, useEffect, useMemo, useRef} from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import {ArrowRight, ExternalLink} from "lucide-react";
import {FloatingElement} from "@/components/FloatingElement";

interface ImageDetails {
    src: string;
    aspectRatio: number;
    id: number;
}

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
};

const imagePaths = [
    '/images/selected-works/select-1.jpg',
    '/images/selected-works/select-2.jpg',
    '/images/selected-works/select-3.jpg',
    '/images/selected-works/select-4.jpg',
];

const DynamicPhotoGrid = () => {
    const [imageData, setImageData] = useState<ImageDetails[]>([]);
    const [loading, setLoading] = useState(true);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const loadImageDimensions = async () => {
            const imagePromises = imagePaths.map((src, index) => {
                return new Promise<ImageDetails>((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        const aspectRatio = img.width / img.height;
                        const validAspectRatio = isNaN(aspectRatio) || aspectRatio <= 0 ? 1 : aspectRatio;
                        resolve({
                            src,
                            aspectRatio: validAspectRatio,
                            id: index
                        });
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image: ${src}`);
                        resolve({src, aspectRatio: 1, id: index});
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

    const desktopLayout = useMemo(() => {
        if (imageData.length === 0) return [];
        const rows = [];
        const targetHeight = 400; // Increased height for better proportions

        for (let i = 0; i < imageData.length; i += 2) {
            const chunk = imageData.slice(i, i + 2);
            const validChunk = chunk.map(img => ({
                ...img,
                aspectRatio: isNaN(img.aspectRatio) || img.aspectRatio <= 0 ? 1 : img.aspectRatio
            }));
            rows.push({images: validChunk, height: targetHeight});
        }
        return rows;
    }, [imageData]);

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center py-20">
                <div className="flex flex-col items-center gap-3">
                    <div
                        className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>
                    <p className="text-muted-foreground text-sm">Loading gallery...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Gallery Section */}
            {isMobile ? (
                <div className="px-4 pb-8">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnInteraction: true,
                            }),
                        ]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {imageData.map((image) => (
                                <CarouselItem key={image.id}>
                                    <div
                                        className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted shadow-lg">
                                        <img
                                            src={image.src}
                                            alt={`Photography ${image.id + 1}`}
                                            className="absolute h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className="ml-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"/>
                        <CarouselNext
                            className="mr-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"/>
                    </Carousel>
                </div>
            ) : (
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="space-y-1 lg:space-y-1">
                        {desktopLayout.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="flex w-full gap-1 lg:gap-1"
                                style={{height: `${row.height}px`}}
                            >
                                {row.images.map((image) => {
                                    const aspectRatio = isNaN(image.aspectRatio) || image.aspectRatio <= 0 ? 1 : image.aspectRatio;
                                    return (
                                        <div
                                            key={image.id}
                                            className="relative overflow-hidden group bg-muted shadow-md hover:shadow-xl transition-all duration-500 ease-out"
                                            style={{
                                                flexGrow: aspectRatio,
                                                flexBasis: 0,
                                            }}
                                        >
                                            <img
                                                src={image.src}
                                                alt={`Photography ${image.id + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            {/* Subtle overlay for depth */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Optional: Add a subtle border highlight on hover */}
                                            <div
                                                className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <FloatingElement delay={600}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-4 mb-12 lg:mb-16">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
                            Photography
                        </h2>
                        <div className="w-16 h-px bg-foreground/20 mx-auto"></div>
                        <p className="lg:flex items-center text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors group leading-relaxed">
                            Photography is more than just clicking a button — it’s the art of seeing ancient stories carved in stone at Ajantha and Ellora, the grandeur of the Kailasha Temple, or the everyday charm of Shimla’s bustling Mall Road. Through your own lens, fleeting moments become frames worth remembering, turning travels into timeless memories.
                        </p>
                    </div>
                </div>
            </FloatingElement>
        </div>
    );
};

export default DynamicPhotoGrid;