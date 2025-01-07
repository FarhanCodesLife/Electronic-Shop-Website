"use client";

import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";

const LoopSplideCarousel: React.FC = () => {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      autoScroll: { speed: 1 },
      pagination: false,
      arrows: false,
    });

    splide.mount({ AutoScroll });

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <Image src="/1.jpg" alt="Slide 1" width={500} height={300} className="w-full h-auto" />
          </li>
          <li className="splide__slide">
            <Image src="/2.jpg" alt="Slide 2" width={500} height={300} className="w-full h-auto" />
          </li>
          <li className="splide__slide">
            <Image src="/3.jpg" alt="Slide 3" width={500} height={300} className="w-full h-auto" />
          </li>
          <li className="splide__slide">
            <Image src="/4.jpg" alt="Slide 4" width={500} height={300} className="w-full h-auto" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoopSplideCarousel;
