"use client";

import { useEffect, useState, ReactNode } from 'react';

interface AOSWrapperProps {
  children: ReactNode;
  className?: string;
  'data-aos'?: string;
  'data-aos-delay'?: string;
  'data-aos-duration'?: string;
  'data-aos-easing'?: string;
  'data-aos-offset'?: string;
  'data-aos-once'?: string;
  'data-aos-anchor-placement'?: string;
}

export function AOSWrapper({ 
  children, 
  className = "",
  ...aosProps 
}: AOSWrapperProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // During SSR and before hydration, render without AOS attributes
  if (!isHydrated) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  // After hydration, render with AOS attributes
  return (
    <div 
      className={className}
      {...aosProps}
    >
      {children}
    </div>
  );
} 