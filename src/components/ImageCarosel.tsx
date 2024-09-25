import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ImageCarosel(props: {
  images: Array<Record<string, string>>;
}) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="relative h-[600px]">
      <div id="caroselImages">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`fade-in-out absolute h-full transition-opacity duration-500 ${currentIndex === index ? "opcaity-100" : "opacity-0"}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 w-full">
        <button
          className="h-full w-[50%] text-left"
          onClick={() => prevImage()}
        >
          <ChevronLeft />
        </button>
        <button className="h-full w-[50%] pl-[44%]" onClick={() => nextImage()}>
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-2 flex w-full items-center justify-center">
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
