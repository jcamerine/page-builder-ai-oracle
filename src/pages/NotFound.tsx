
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-primary font-semibold underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-700 rounded transition-shadow flex items-center justify-center gap-2 mx-auto"
          style={{
            backgroundColor: "white",
            color: "#222",
            border: "1px solid #ddd",
            padding: "0.7em 2em",
            borderRadius: "0.45em",
            maxWidth: 260,
            fontWeight: 700
          }}
        >
          Return to Home
          <ExternalLink size={17} color="#222" className="ml-1" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;


