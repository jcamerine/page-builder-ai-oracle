
import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";

// To use your own image, upload it to the project and point src to "/yourimage.jpg" or "/yourimage.png".
const AUTHOR_IMAGE_SRC = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=320&h=100&facepad=4&q=80";
const AUTHOR_IMAGE_ALT = "J.C. Amerine author logo";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Books", path: "/books" },
  // Removed Aeonaros and Store links
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

// TikTok SVG icon as Lucide does not provide a branded one
const TikTokIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.473 7.077c-.576-1.382-1.03-2.855-1.08-4.39h-4.19v18.906c0 2.054-1.667 3.725-3.726 3.725-2.053 0-3.724-1.67-3.724-3.725 0-2.054 1.668-3.726 3.724-3.726.258 0 .506.025.748.073v-4.23a8.025 8.025 0 0 0-.748-.037c-4.432 0-8.03 3.595-8.03 7.92 0 4.325 3.597 7.92 8.03 7.92 4.433 0 8.03-3.595 8.03-7.92V12.612a12.27 12.27 0 0 0 5.068 1.09V9.638c-1.567-.066-3.616-.647-4.872-2.561z"
      fill="#000"
    />
    <path
      d="M24.18 6.396c1.008 1.595 2.88 2.089 4.002 2.153v4.012c-1.803-.045-3.615-.624-5.078-1.606v8.023c0 5.182-4.012 9.393-8.951 9.393-4.94 0-8.95-4.21-8.95-9.393 0-5.182 4.01-9.393 8.95-9.393.258 0 .515.012.77.035v4.226a4.041 4.041 0 0 0-.77-.074c-2.07 0-3.753 1.686-3.753 3.752s1.683 3.754 3.753 3.754 3.754-1.687 3.754-3.754V2.688h6.35c.037 1.62.532 3.092 1.36 4.158z"
      fill="#25F4EE"
    />
    <path
      d="M24.179 6.395c.929 1.454 2.663 1.978 3.999 2.15v3.988c-1.792-.045-3.597-.628-5.06-1.608v8.03c0 5.169-4.026 9.37-8.952 9.37-4.927 0-8.953-4.201-8.953-9.37 0-5.17 4.026-9.37 8.953-9.37.257 0 .513.012.766.035v4.222a4.047 4.047 0 0 0-.766-.074c-2.066 0-3.748 1.684-3.748 3.75 0 2.065 1.682 3.747 3.748 3.747 2.067 0 3.75-1.682 3.75-3.747v-14.65h6.347c.036 1.617.527 3.084 1.36 4.152z"
      fill="#FE2C55"
      fillOpacity="0.6"
    />
  </svg>
);

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
        <nav aria-label="Site" className="flex-1">
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
        {/* Social icons row at the end */}
        <div className="flex items-center gap-2 ml-auto">
          {/* TikTok */}
          <a
            href="#"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black/90 hover:bg-black p-1 shadow transition"
          >
            <TikTokIcon className="w-7 h-7 md:w-8 md:h-8" />
          </a>
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 hover:brightness-110 p-1 shadow transition"
          >
            <Instagram className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;

