import { useState, useEffect } from 'react';

export default function useScreenSize() {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            setIsDesktop(screenWidth >= 1024); // Set your breakpoint here (e.g., 1024px)
        };

        checkScreenSize(); // Initial check on load
        window.addEventListener('resize', checkScreenSize); // Listen to resize events

        return () => window.removeEventListener('resize', checkScreenSize); // Clean up on unmount
    }, []);

    return isDesktop;
}