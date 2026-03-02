"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
    end: number;
    suffix?: string;
    duration?: number;
}

export default function AnimatedNumber({ end, suffix = "", duration = 2000 }: AnimatedNumberProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let startTimestamp: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        // easeOutQuad for smooth deceleration
                        const easeProgress = progress * (2 - progress);
                        setCount(Math.floor(easeProgress * end));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}
