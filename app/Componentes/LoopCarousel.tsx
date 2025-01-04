"use client";

import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css"; // Default Splide CSS

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// import "splide/dist/css/splide.min.css"; // Import Splide's CSS

const LoopSplideCarousel: React.FC = () => {
  useEffect(() => {
    // Initialize Splide
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
      pagination: false, // Optional: remove pagination dots
      arrows: true,      // Optional: display navigation arrows
    });

    // Mount Splide with the AutoScroll extension
    splide.mount({ AutoScroll });

    // Clean up on unmount
    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {/* Add your slides here */}
          <li className="splide__slide">
            <img src="/1.jpg" alt="Slide 1" className="w-full h-auto" />
          </li>
          <li className="splide__slide">
            <img src="/2.jpg" alt="Slide 2" className="w-full h-auto" />
          </li>
          <li className="splide__slide">
            <img src="/3.jpg" alt="Slide 3" className="w-full h-auto" />
          </li>
          <li className="splide__slide">
            <img src="/4.jpg" alt="Slide 4" className="w-full h-auto" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoopSplideCarousel;
