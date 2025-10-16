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
            once: false, // Allow animations on both scroll up and down
            mirror: true, // Enable mirror effect for scroll up animations
            duration: 1000, // Increased duration for smoother animations
            disable: false, // Enable on all devices
            startEvent: 'load',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: true,
            disableMutationObserver: false, // Enable for better scroll detection
            debounceDelay: 50, // Reduced debounce for more responsive animations
            throttleDelay: 50, // Reduced throttle for more responsive animations
            offset: 50, // Reduced offset for earlier trigger
            delay: 0,
            easing: 'ease-out-cubic', // Smoother easing
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