import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";

// List of nav routes; remains the same as before
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Books", path: "/books" },
  { label: "Aeonaros", path: "/aeonaros" },
  { label: "Store", path: "/store" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

// Banner component (unchanged)
const Banner = ({
  title,
  subtitle,
  gradient,
  children,
}: {
  title: string;
  subtitle?: string;
  gradient: string;
  children?: React.ReactNode;
}) => (
  <section
    className={`relative w-full h-[55vh] md:h-[60vh] flex flex-col items-center justify-center mb-10 ${gradient} animate-fade-in rounded-xl shadow-xl overflow-hidden`}
    style={{ minHeight: 300 }}
  >
    <div className="z-10 text-center px-6">
      <h1 className="text-5xl md:text-7xl font-radley font-bold drop-shadow-lg text-white mb-4 whitespace-pre-line">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-2xl md:text-3xl text-white font-serif font-medium drop-shadow-md mb-2 animate-fade-in">
          {subtitle}
        </h2>
      )}
      {children}
    </div>
    <div className="absolute inset-0" aria-hidden="true" />
  </section>
);

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <SiteHeader />
      {/* Animated banners directly below the heading */}
      <div className="w-full flex flex-col gap-8 my-8">
        {/* First Banner: Welcome */}
        <Banner
          title="Welcome Readers!"
          subtitle="Enter the world of J.C. Amerine"
          gradient="bg-gradient-to-tr from-blue-800 via-purple-900 to-cyan-600"
        />

        {/* Second Banner: Epic Fantasy Theme */}
        <Banner
          title="Step Into Epic Fantasy"
          subtitle="Magic, Romance & Adventure Await"
          gradient="bg-gradient-to-br from-indigo-900 via-pink-700/80 to-yellow-700"
        >
          <div className="flex justify-center mt-4 space-x-4">
            <Link
              to="/newsletter"
              className="bg-primary text-primary-foreground font-semibold text-lg px-7 py-3 rounded-xl shadow-lg transition hover:bg-primary/90 animate-pulse"
            >
              Get Free Chapters &amp; Updates
            </Link>
          </div>
        </Banner>

        {/* Third Banner: Placeholder for future edits */}
        <section
          className="relative w-full h-[32vh] md:h-[28vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900/80 to-blue-900 rounded-xl shadow-xl overflow-hidden animate-fade-in border-2 border-dashed border-primary"
          style={{ minHeight: 150 }}
        >
          <div className="z-10 text-center px-6">
            <h2 className="text-3xl md:text-4xl text-primary font-bold drop-shadow mb-2">[Future Banner Placeholder]</h2>
            <p className="text-muted-foreground">You can edit this banner later to add more highlights or info.</p>
          </div>
          <div className="absolute inset-0" aria-hidden="true" />
        </section>
      </div>

      {/* Footer stays at the bottom */}
      <footer className="bg-background mt-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} J.C. Amerine. All Rights Reserved. | jcamerine.com | jcamerine.com.au
      </footer>
    </main>
  );
};

export default Home;
