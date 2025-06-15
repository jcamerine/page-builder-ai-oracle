
import { Link, useLocation } from "react-router-dom";

// For demo, use a placeholder image from Unsplash CDN, but swap the src as needed.
// To use your own image, upload it to the project and point src to "/yourimage.jpg" or "/yourimage.png".
const AUTHOR_IMAGE_SRC = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=128&h=128&facepad=4&q=80";
const AUTHOR_IMAGE_ALT = "J.C. Amerine author logo";

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
      <div className="container mx-auto flex flex-row items-center py-2 px-3 gap-8 md:gap-12">
        <Link to="/" className="block">
          <img
            src={AUTHOR_IMAGE_SRC}
            alt={AUTHOR_IMAGE_ALT}
            className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-2 border-primary shadow"
          />
        </Link>
        <nav aria-label="Site">
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
