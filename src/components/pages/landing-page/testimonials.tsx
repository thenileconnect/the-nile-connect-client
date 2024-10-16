'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Testimonials() {
    const testimonials = [
        { id: 1, name: "John Doe", role: "CEO, Tech Co", text: "NileConnect has been instrumental in our success. Their expertise and dedication are unmatched.", image: "/images/john-doe.jpg", companyName: "Tech Co" },
        { id: 2, name: "Jane Smith", role: "CTO, StartUp Inc", text: "Working with NileConnect has been a game-changer for our business. Highly recommended!", image: "/images/jane-smith.jpg", companyName: "StartUp Inc" },
        { id: 3, name: "Alex Johnson", role: "Founder, InnovateCorp", text: "The team at NileConnect consistently delivers high-quality solutions. They're true professionals.", image: "/images/alex-johnson.jpg", companyName: "InnovateCorp" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 8000);

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl bg-[#0a0a0a] mt-32 py-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-white">What Our Clients Say</h2>
            <div className="relative overflow-hidden h-[400px] sm:h-[350px] max-w-5xl mx-auto">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute w-full h-full"
                    >
                        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 rounded-lg shadow-2xl h-full flex flex-col justify-between">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                <div className="mb-4 sm:mb-0 sm:mr-6 relative">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        width={100}
                                        height={100}
                                        className="rounded-full border-4 border-white shadow-lg"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-[#B9FD50] text-black px-2 py-1 rounded-full text-xs font-bold">
                                        {testimonials[currentIndex].role.split(',')[0]}
                                    </div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-gray-100 mb-4 text-lg sm:text-xl italic leading-relaxed">&quot;{testimonials[currentIndex].text}&quot;</p>
                                    <p className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</p>
                                    <p className="text-[#B9FD50]">{testimonials[currentIndex].role}</p>
                                    <p className="text-white text-sm mt-1">{testimonials[currentIndex].companyName}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex justify-between mt-6 sm:mt-8">
                <button onClick={handlePrev} className="bg-[#B9FD50] text-black p-2 rounded-full hover:bg-opacity-80 transition-all">
                    <FiChevronLeft size={24} />
                </button>
                <div className="flex items-center">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full mx-1 transition-all ${index === currentIndex ? 'bg-[#B9FD50] w-6' : 'bg-gray-500'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                <button onClick={handleNext} className="bg-[#B9FD50] text-black p-2 rounded-full hover:bg-opacity-80 transition-all">
                    <FiChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}