import banner from "@/assets/temp/temp-banner.jpeg";
import image2 from "@/assets/temp/temp-image.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ImageCarosel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { url: banner, alt: "Image 1" },
    { url: image2, alt: "Image 2" },
    { url: banner, alt: "Image 3" },
    // Add more images here...
  ];

  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="relative h-[600px]">
      {images.map((image, index) => {
        return (
          <div
            className={`fade-in-out absolute left-0 top-0 h-full w-full transition-opacity duration-500 ${currentIndex === index ? "opcaity-100" : "opacity-0"}`}
          >
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className="h-full object-cover"
            />
          </div>
        );
      })}
      <div className="absolute top-0 h-full w-full">
        <button
          className="h-full w-[50%] text-left"
          onClick={() => prevImage()}
        >
          <ChevronLeft />
        </button>
        <button
          className="h-full w-[50%] transform pl-[44%] text-right"
          onClick={() => nextImage()}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-center">
        {images.map((_, index) => {
          return (
            <p
              key={index}
              className={`text-5xl ${currentIndex === index ? "text-zinc-800" : "text-white/55"}`}
            >
              .
            </p>
          );
        })}
      </div>
    </div>
  );
}
