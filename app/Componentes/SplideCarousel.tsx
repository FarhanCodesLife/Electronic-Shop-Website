"use client"

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import imag1 from "@/public/1.jpg"
import imag2 from "@/public/2.jpg"
import Image from 'next/image';

const SplideCarousel: React.FC = () => {
  return (
    <div>
      <Splide
        options={{
          type: 'loop', // Enable loop mode
          perPage: 2,   // Show 3 slides per page
          autoplay: true, // Auto-slide
          
        }}
        aria-label="My Favorite Images"
      >
        {/* Add your slides here */}
        <SplideSlide>
            <Image width={100} height={100} src={imag1} alt='jsvcvj' />
        </SplideSlide>
        <SplideSlide>
        <Image width={100} height={100} src={imag2} alt='jsvcvj' />
        </SplideSlide>
        <SplideSlide>
        <Image width={100} height={100} src={imag1} alt='jsvcvj' />
        </SplideSlide>
        <SplideSlide>
        <Image width={100} height={100} src={imag2} alt='jsvcvj' />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default SplideCarousel;
