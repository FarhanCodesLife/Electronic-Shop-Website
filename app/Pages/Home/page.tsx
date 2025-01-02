"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import image1 from "@/public/1.jpg"
import image2 from "@/public/2.jpg"
import image3 from "@/public/3.jpg"
import image4 from "@/public/4.jpg"

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 3; // Number of carousel items
  const [intervalId, setIntervalId] = useState(null);

  // Function to go to the next carousel item
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Function to go to the previous carousel item
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  // Start the auto-scroll interval
  const startAutoScroll = () => {
    const id = setInterval(goToNext, 5000); // Change slide every 3 seconds
    setIntervalId(id); // Store the interval ID to clear it later
  };

  // Stop the auto-scroll interval
  const stopAutoScroll = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  // Auto-scroll effect using useEffect
  useEffect(() => {
    startAutoScroll(); // Start the auto-scroll when the component mounts

    return () => {
      stopAutoScroll(); // Clean up interval when the component unmounts
    };
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Carousel */}
        <div
          className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          onMouseEnter={stopAutoScroll} // Stop auto-scroll on hover
          onMouseLeave={startAutoScroll} // Resume auto-scroll when hover is removed
        >
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalItems * 100}%`,
            }}
          >
            {/* Carousel Items */}
            <div className="flex-none w-full h-96 bg-blue-200 justify-center items-center text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Carousel Item 1</h3>
              <Image width={100} height={100} src={image1} alt="image1"  className="w-96 h-full"/>
            </div>
            <div className="flex-none w-full h-96 bg-green-200 justify-center items-center text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Carousel Item 2</h3>
              <Image width={100} height={100} src={image2} alt="image1" className="w-96 h-full"/>

            </div>
            <div className="flex-none w-full h-96 bg-purple-200 justify-center items-center text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Carousel Item 3</h3>
              <Image width={1000} height={1000} src={image3} alt="image1"  className="w-96 h-full object-cover"/>

            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100  hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Additional Content */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Page Content</h2>
          <p className="mt-4 text-lg text-gray-600">
            This is a section for additional content on the page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
