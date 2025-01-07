declare module '@splidejs/react-splide' {
    import React from 'react';
  
    // Replace 'any' with a more specific type if possible
    export interface SplideProps {
      options?: Record<string, unknown>; // Use 'unknown' instead of 'any' for better type safety
      [key: string]: unknown;  // More specific than 'any'
    }
  
    // For SplideSlide, you can use React.PropsWithChildren for a more accurate typing
    export const Splide: React.FC<SplideProps>;
    export const SplideSlide: React.FC<React.PropsWithChildren<Record<string, unknown>>>;
  }
  