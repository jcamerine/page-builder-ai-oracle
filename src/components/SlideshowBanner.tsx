
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Slide {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
}

interface SlideshowBannerProps {
  slides: Slide[];
  heightClass?: string;
  className?: string;
}

const SlideshowBanner: React.FC<SlideshowBannerProps> = ({
  slides,
  heightClass = "h-[40vh] md:h-[45vh]",
  className = "",
}) => {
  return (
    <section
      className={`relative w-full flex items-center justify-center overflow-hidden mb-12 rounded-none shadow-xl ${heightClass} animate-fade-in ${className}`}
      style={{ minHeight: 220 }}
    >
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="h-full w-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={slide.imageUrl}
                  alt={slide.imageAlt ?? ""}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[1]" aria-hidden="true" />
                <div className="z-10 text-center px-6 relative mx-auto max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white drop-shadow-lg mb-2">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <h2 className="text-xl md:text-2xl text-white font-serif font-medium drop-shadow-md mb-1">
                      {slide.subtitle}
                    </h2>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation arrows */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default SlideshowBanner;
