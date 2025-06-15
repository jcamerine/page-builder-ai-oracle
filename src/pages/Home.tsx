import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import NewsletterDialog from "@/components/NewsletterDialog";
import NewsletterSection from "@/components/NewsletterSection";

// You can edit these banner configs to change their titles or backgrounds in the future
const BANNERS = [
  {
    key: "welcome",
    title: "Welcome Readers!",
    subtitle: "Enter the world of J.C. Amerine",
    gradient: "bg-gradient-to-tr from-blue-800 via-purple-900 to-cyan-600",
    gif: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    minHeight: 300,
    heightClass: "h-[55vh] md:h-[60vh]",
    editable: true,
  },
  {
    key: "epic-fantasy",
    title: "Step Into Epic Fantasy",
    subtitle: "Magic, Romance & Adventure Await",
    gradient: "bg-gradient-to-br from-indigo-900 via-pink-700/80 to-yellow-700",
    gif: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80",
    minHeight: 300,
    heightClass: "h-[55vh] md:h-[60vh]",
    editable: true,
    children: (
      <div className="flex justify-center mt-4 space-x-4">
        <Link
          to="/newsletter"
          className="bg-primary text-primary-foreground font-semibold text-lg px-7 py-3 rounded-xl shadow-lg transition hover:bg-primary/90 animate-pulse"
        >
          Get Free Chapters &amp; Updates
        </Link>
      </div>
    ),
  },
  {
    key: "future",
    title: "[Future Banner Placeholder]",
    subtitle: "You can edit this banner later to add more highlights or info.",
    gradient: "bg-gradient-to-br from-gray-800 via-gray-900/80 to-blue-900",
    gif: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
    minHeight: 300,
    heightClass: "h-[55vh] md:h-[60vh]",
    editable: true,
  },
];

// Banner component refactored to support GIF/image backgrounds and editable text
const Banner = ({
  title,
  subtitle,
  gradient,
  gif,
  minHeight,
  heightClass,
  children,
  editable,
}: {
  title: string;
  subtitle?: string;
  gradient: string;
  gif: string;
  minHeight: number;
  heightClass?: string;
  children?: React.ReactNode;
  editable?: boolean;
}) => (
  <section
    className={`relative w-full flex flex-col items-center justify-center mb-10 rounded-xl shadow-xl overflow-hidden animate-fade-in ${gradient} ${heightClass ?? ""}`}
    style={{ minHeight }}
  >
    <img
      src={gif}
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
      style={{ pointerEvents: "none", userSelect: "none" }}
      loading="lazy"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" aria-hidden="true" />
    <div className="z-10 text-center px-6 relative">
      <h1 className="text-5xl md:text-7xl font-playfair font-bold drop-shadow-lg text-white mb-4 whitespace-pre-line uppercase tracking-wider">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-2xl md:text-3xl text-white font-playfair font-semibold drop-shadow-md mb-2 animate-fade-in uppercase tracking-wide">
          {subtitle}
        </h2>
      )}
      {children}
      {editable && (
        <div className="mt-2 text-xs text-white/80 italic">[Edit this banner text or image to personalize]</div>
      )}
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <NewsletterDialog />
      <SiteHeader />
      {/* Animated banners directly below the heading */}
      <div className="w-full flex flex-col gap-8 my-8">
        {BANNERS.map((banner) => (
          <Banner
            key={banner.key}
            title={banner.title}
            subtitle={banner.subtitle}
            gradient={banner.gradient}
            gif={banner.gif}
            minHeight={banner.minHeight}
            heightClass={banner.heightClass}
            editable={banner.editable}
          >
            {banner.children}
          </Banner>
        ))}
      </div>
      {/* Add big newsletter section here */}
      <NewsletterSection />
      {/* Footer stays at the bottom */}
      <footer className="bg-background mt-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} J.C. Amerine. All Rights Reserved.
      </footer>
    </main>
  );
};

export default Home;
