import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ImageCarosel(props: Readonly<{
  images: Array<Object>;
}>) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };
  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(images.length-1);
  };

  return (
    <div className="relative h-[600px] bg-zinc-600">
      <div id="caroselImages" className="flex justify-center">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`fade-in-out absolute h-full transition-opacity duration-1000 ${currentIndex === index ? "opcaity-100" : "opacity-0"}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute w-full h-full">
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
      <div className="absolute top-5 right-5">
        <p className="font-semibold">{`${currentIndex+1} / ${images.length}`}</p>
      </div>
    </div>
  );
}
