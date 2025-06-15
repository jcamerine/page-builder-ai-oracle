
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SCROLL_SHOW_THRESHOLD = 120; // px from bottom to show button

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Show button when near-bottom (threshold) or scrolled well below the top
      const nearBottom = scrollTop + windowHeight >= docHeight - SCROLL_SHOW_THRESHOLD;
      setShow(nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-lg p-3 hover:bg-primary/90 transition-colors animate-fade-in"
    >
      <ArrowUp size={28} />
    </button>
  );
};

export default ScrollToTopButton;

