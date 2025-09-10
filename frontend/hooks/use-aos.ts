"use client";

import { useEffect, useState } from 'react';

export function useAOS() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only initialize on client side after hydration is complete
    if (typeof window !== 'undefined') {
      // Wait for hydration to complete and DOM to be ready
      const timer = setTimeout(async () => {
        try {
          // Dynamically import AOS only on client side
          const AOS = (await import('aos')).default;
          
          // Initialize AOS with optimized performance settings
          AOS.init({
            once: true,
            duration: 600, // Reduced duration
            disable: 'mobile',
            startEvent: 'load',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: true,
            disableMutationObserver: true, // Disable for better performance
            debounceDelay: 100, // Increased debounce
            throttleDelay: 150, // Increased throttle
            offset: 100, // Reduced offset
            delay: 0,
            easing: 'ease-out', // Faster easing
            anchorPlacement: 'top-bottom',
          });
          
          // Refresh AOS after a short delay to ensure all elements are processed
          setTimeout(() => {
            AOS.refresh();
          }, 100);
          
          setIsInitialized(true);
        } catch (error) {
          console.warn('AOS initialization failed:', error);
        }
      }, 500); // Increased delay to ensure complete hydration

      return () => clearTimeout(timer);
    }
  }, []);

  return { isInitialized };
} 