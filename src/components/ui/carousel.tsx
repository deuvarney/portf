"use client";
import React, { useState, useRef, useId, useEffect, useImperativeHandle, forwardRef, ReactNode } from "react";
import { cn } from "@/utils/tailwindUtils";
import { FlipWords } from "./flip-words";

export interface CarouselButtonProps {
    content: string;
    disabled?: boolean;
    className?: string;
    clickHandler: () => void;
}

export function CarouselButton({ content, disabled, className, clickHandler}: CarouselButtonProps) {
    return (
        <button disabled={disabled} onClick={clickHandler} className={cn("w-[12rem] mt-6 px-4 py-2 mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-md hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] cursor-pointer", className)}>
            {content}
        </button>
    );
}

export interface SlideData {
    title: string;
    buttons?: React.ReactElement<CarouselButtonProps, typeof CarouselButton>[];
    messages: string[];
    value: string;
    src: string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    // ... your existing Slide component code (this part is correct)
    const slideRef = useRef<HTMLLIElement>(null);
    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number>();

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;
            const x = xRef.current;
            const y = yRef.current;
            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);
            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1";
    };

    const { src, buttons, title } = slide;

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]" aria-hidden={index !== current}>
            <li
                ref={slideRef}
                className="flex flex-1 flex-col relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[90vw] min-w-sm max-w-4xl h-[75vh] min-h-sm max-h-4xl mx-[4vmin] z-10"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? "scale(0.98) rotateX(8deg)"
                            : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
                    style={{
                        transform:
                            current === index
                                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                                : "none",
                    }}
                >
                    <img
                        className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                        style={{
                            opacity: current === index ? 1 : 0.5,
                        }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="eager"
                        decoding="sync"
                    />
                    {current === index && (
                        <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
                    )}
                </div>

                <article
                    style={{ height: "100%", width: "100%"}}
                    className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <div style={{height: "20%", padding: '10%'}}>
                         <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative " style={{textAlign: 'left'}}>
                            {title}
                        </h2>
                    </div>
                    <div style={{
                        height: "30%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        paddingLeft: "12%",
                        alignItems: "flex-start"
                    }}>
                        <FlipWords words={slide.messages} duration={10000} />
                        <p style={{alignSelf: "flex-end", fontWeight: "bold", paddingRight: "20%"}}>{slide.value}</p>
                    </div>
                   
                    <div
                        style={{
                            height: "30%",
                            justifyContent: "space-evenly",
                            width: "80%",
                            margin: "auto",
                        }}
                        className="flex flex-wrap gap-4 justify-center space-between items-center"
                    >
                        {buttons}
                    </div>
                </article>
            </li>
        </div>
    );
};

interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
                }`}
            title={title}
            onClick={handleClick}
        >
            &gt;
        </button>
    );
};

export interface CarouselHandle {
    previous: () => void;
    next: () => void;
    goTo: (index: number) => void;
}

interface CarouselProps {
    slides: SlideData[];
    children?: React.ReactNode;
}

export const Carousel = forwardRef<CarouselHandle, CarouselProps>(
    ({ slides, children}, ref) => {
        const [current, setCurrent] = useState(0);

        const handlePreviousClick = () => {
            const previous = current - 1;
            setCurrent(previous < 0 ? slides.length - 1 : previous);
        };

        const handleNextClick = () => {
            const next = current + 1;
            setCurrent(next === slides.length ? 0 : next);
        };

        const handleSlideClick = (index: number) => {
            if (current !== index) {
                setCurrent(index);
            }
        };

        useImperativeHandle(ref, () => ({
            previous: handlePreviousClick,
            next: handleNextClick,
            goTo: handleSlideClick,
        }), [handlePreviousClick, handleNextClick, handleSlideClick]);

        const id = useId();

        return (
            <div
                className="relative w-[90vw] min-w-sm max-w-4xl h-[75vh] min-h-sm max-h-4xl mx-auto"
                aria-labelledby={`carousel-heading-${id}`}
            >
                <ul
                    className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${current * (100 / slides.length)}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <Slide
                            key={slide.title}
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={handleSlideClick}
                        />
                    ))}
                </ul>

                { children ||  (
                    <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
                        <CarouselControl
                            type="previous"
                            title="Go to previous slide"
                            handleClick={handlePreviousClick}
                        />

                       
                        <CarouselControl
                            type="next"
                            title="Go to next slide"
                            handleClick={handleNextClick}
                        />
                    </div>
                )}

            </div>
        );
    }
);

// Add display name for better debugging
Carousel.displayName = 'Carousel';