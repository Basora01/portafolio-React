import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    const endX = useRef(0);
    const endY = useRef(0);
    const cursorX = useRef(0);
    const cursorY = useRef(0);
    const requestRef = useRef<number>();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            endX.current = e.clientX;
            endY.current = e.clientY;

            // Dot follows immediately
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
        };

        // Smooth animation for outline using requestAnimationFrame
        const animateOutline = () => {
            // Lerp (linear interpolation) for smooth following
            cursorX.current += (endX.current - cursorX.current) * 0.15;
            cursorY.current += (endY.current - cursorY.current) * 0.15;

            if (outlineRef.current) {
                outlineRef.current.style.left = `${cursorX.current}px`;
                outlineRef.current.style.top = `${cursorY.current}px`;
            }

            requestRef.current = requestAnimationFrame(animateOutline);
        };

        // Handle hover states
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, .hoverable, input, textarea');

            if (outlineRef.current) {
                if (isInteractive) {
                    outlineRef.current.classList.add('hovering');
                } else {
                    outlineRef.current.classList.remove('hovering');
                }
            }
        };

        const handleMouseLeave = () => {
            if (dotRef.current) dotRef.current.style.opacity = '0';
            if (outlineRef.current) outlineRef.current.style.opacity = '0';
        };

        const handleMouseEnter = () => {
            if (dotRef.current) dotRef.current.style.opacity = '1';
            if (outlineRef.current) outlineRef.current.style.opacity = '1';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Start animation loop
        requestRef.current = requestAnimationFrame(animateOutline);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={outlineRef} className="cursor-outline" />
        </>
    );
};

export default CustomCursor;
