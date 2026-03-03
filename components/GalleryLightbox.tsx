"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

interface GalleryLightboxProps {
    images: string[];
    gridClassName?: string;
    imageClassName?: string;
}

export default function GalleryLightbox({ images, gridClassName, imageClassName }: GalleryLightboxProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState(0);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (currentIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [currentIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (currentIndex === null) return;
            if (e.key === 'Escape') setCurrentIndex(null);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const openLightbox = (index: number) => {
        setDirection(0);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const nextImage = () => {
        if (currentIndex === null) return;
        setDirection(1);
        setCurrentIndex((prev) => (prev! + 1) % images.length);
    };

    const prevImage = () => {
        if (currentIndex === null) return;
        setDirection(-1);
        setCurrentIndex((prev) => (prev! - 1 + images.length) % images.length);
    };

    // Animation variants for the sliding images
    const slideVariants: Variants = {
        hidden: (dir: number) => ({
            x: dir > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
            }
        }),
    };

    return (
        <>
            <div className={gridClassName || "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"}>
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className={`overflow-hidden group cursor-pointer border border-white/[0.06] hover:border-industry-orange/50 transition-colors duration-300 relative ${imageClassName || "aspect-square rounded-xl"}`}
                        onClick={() => openLightbox(idx)}
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <Image
                            src={img}
                            alt={`Galeria ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                            className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        {/* Hover expand icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <div className="bg-black/40 backdrop-blur-md rounded-full p-3 text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence initial={false} custom={direction}>
                {currentIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl px-4"
                    >
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 z-[60] text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-3 backdrop-blur-md transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Counter */}
                        <div className="absolute top-6 left-6 z-[60] text-sm font-semibold tracking-widest text-white/70 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                            {currentIndex + 1} / {images.length}
                        </div>

                        {/* Prev button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 md:left-10 z-[60] text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-4 backdrop-blur-md transition-all duration-300 hover:scale-110 hidden md:block"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 md:right-10 z-[60] text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-4 backdrop-blur-md transition-all duration-300 hover:scale-110 hidden md:block"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Click to close area (background) */}
                        <div className="absolute inset-0 z-40" onClick={closeLightbox} />

                        {/* Main Image Container */}
                        <div className="relative z-50 w-full max-w-6xl aspect-[4/3] md:aspect-video flex items-center justify-center">
                            <AnimatePresence custom={direction} mode="popLayout">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = offset.x;

                                        if (swipe < -50 || velocity.x < -500) {
                                            nextImage();
                                        } else if (swipe > 50 || velocity.x > 500) {
                                            prevImage();
                                        }
                                    }}
                                    className="absolute w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={images[currentIndex]}
                                            alt={`Biastal gallery item ${currentIndex + 1}`}
                                            fill
                                            sizes="100vw"
                                            className="object-contain rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5 pointer-events-none"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Mobile swipe hint */}
                        <div className="absolute bottom-10 left-0 right-0 text-center md:hidden z-50 pointer-events-none">
                            <p className="text-white/40 text-xs tracking-widest uppercase">Przesuń aby zmienić</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
