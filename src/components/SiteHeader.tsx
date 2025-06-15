
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Books", path: "/books" },
  // Removed Aeonaros and Store links
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const SiteHeader = () => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-30 bg-background/95 border-b border-border backdrop-blur-md shadow-sm">
      {/* layout: smaller author name, nav close to name */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-3 gap-1 sm:gap-0">
        <Link
          to="/"
          className="font-playfair font-bold text-2xl md:text-3xl tracking-tight text-primary"
          style={{ letterSpacing: "0.04em" }}
        >
          J.C. Amerine
        </Link>
        <nav aria-label="Site" className="mt-1 sm:mt-0 sm:ml-6">
          <ul className="flex flex-wrap gap-3 md:gap-4 font-medium">
            {NAV_LINKS.map((nav) => (
              <li key={nav.path}>
                <Link
                  to={nav.path}
                  className={`hover:text-primary hover:underline transition-colors ${
                    location.pathname === nav.path ? "text-primary font-semibold underline" : ""
                  }`}
                  aria-current={location.pathname === nav.path ? "page" : undefined}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;

