
import { Link, useLocation } from "react-router-dom";

// To use your own image, upload it to the project and point src to "/yourimage.jpg" or "/yourimage.png".
// Griffin - majestic eagle-as-griffin
const AUTHOR_IMAGE_SRC = "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=320&h=100&q=80"; // Bald eagle closeup, invoking griffin feels
const AUTHOR_IMAGE_ALT = "J.C. Amerine griffin/author logo";

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
          <div className="bg-primary/10 border-2 border-primary shadow w-[160px] h-[64px] md:w-[220px] md:h-[82px] flex items-center justify-center rounded-xl overflow-hidden">
            <img
              src={AUTHOR_IMAGE_SRC}
              alt={AUTHOR_IMAGE_ALT}
              className="object-cover w-full h-full"
            />
          </div>
        </Link>
        <nav aria-label="Site">
          <ul className="flex flex-wrap gap-3 md:gap-6 font-montserrat uppercase tracking-wider">
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
