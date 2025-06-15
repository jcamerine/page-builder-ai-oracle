import React from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
  heightClass?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt = "",
  heightClass = "h-[40vh] md:h-[45vh]",
}) => (
  <section
    className={`relative w-full flex items-center justify-center overflow-hidden mb-12 rounded-none shadow-xl ${heightClass} animate-fade-in`}
    style={{ minHeight: 220 }}
  >
    <img
      src={imageUrl}
      alt={imageAlt}
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
      style={{ pointerEvents: "none", userSelect: "none" }}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[1]" aria-hidden="true" />
    <div className="z-10 text-center px-6 relative mx-auto max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white drop-shadow-lg mb-2 uppercase tracking-wider">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-white font-playfair font-semibold drop-shadow-md mb-1 uppercase tracking-wide">
          {subtitle}
        </h2>
      )}
    </div>
  </section>
);

export default PageBanner;
