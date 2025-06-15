
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Books", path: "/books" },
  { label: "Aeonaros", path: "/aeonaros" },
  { label: "Store", path: "/store" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const SiteHeader = () => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-30 bg-background/95 border-b border-border backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4 md:px-0">
        <Link
          to="/"
          className="font-radley font-bold text-5xl md:text-7xl tracking-tight text-primary"
          style={{ letterSpacing: "0.04em" }}
        >
          J.C. Amerine
        </Link>
        <nav aria-label="Site">
          <ul className="flex flex-wrap gap-4 md:gap-6 font-medium">
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
