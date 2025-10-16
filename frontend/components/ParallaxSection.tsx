"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  disabled?: boolean;
}

export function ParallaxSection({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '',
  disabled = false 
}: ParallaxSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        let transform = '';
        
        switch (direction) {
          case 'up':
            transform = `translateY(${rate}px)`;
            break;
          case 'down':
            transform = `translateY(${-rate}px)`;
            break;
          case 'left':
            transform = `translateX(${rate}px)`;
            break;
          case 'right':
            transform = `translateX(${-rate}px)`;
            break;
        }
        
        setOffset(rate);
        elementRef.current.style.transform = transform;
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [speed, direction, disabled]);

  return (
    <div 
      ref={elementRef}
      className={`parallax-section ${className}`}
      style={{ 
        willChange: disabled ? 'auto' : 'transform',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  disabled?: boolean;
}

export function ParallaxBackground({ 
  children, 
  speed = 0.3, 
  className = '',
  disabled = false 
}: ParallaxBackgroundProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        elementRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [speed, disabled]);

  return (
    <div 
      ref={elementRef}
      className={`parallax-background ${className}`}
      style={{ 
        willChange: disabled ? 'auto' : 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxTextProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  disabled?: boolean;
}

export function ParallaxText({ 
  children, 
  speed = 0.2, 
  className = '',
  disabled = false 
}: ParallaxTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        elementRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [speed, disabled]);

  return (
    <div 
      ref={elementRef}
      className={`parallax-text ${className}`}
      style={{ 
        willChange: disabled ? 'auto' : 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
}
