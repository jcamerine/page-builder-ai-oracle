
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

import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Books", path: "/books" },
  { label: "Aeonaros", path: "/aeonaros" },
  { label: "Store", path: "/store" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex flex-col">
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

      {/* Updated Navbar */}
      <nav className="sticky top-0 z-30 bg-background/90 border-b border-border backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-3">
          <span
            className="font-radley font-bold text-5xl md:text-7xl tracking-tight text-primary"
            style={{ letterSpacing: "0.04em" }}
          >
            J.C. Amerine
          </span>
          <ul className="flex space-x-6 font-medium">
            {NAV_LINKS.map((nav) => (
              <li key={nav.path}>
                <Link
                  to={nav.path}
                  className="hover:text-primary hover:underline"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <footer className="bg-background mt-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} J.C. Amerine. All Rights Reserved. | jcamerine.com | jcamerine.com.au
      </footer>
    </main>
  );
};
export default Home;
