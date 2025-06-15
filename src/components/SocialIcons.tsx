
import { youtube } from "lucide-react";

interface SocialIconsProps {
  large?: boolean;
}

const SocialIcons = ({ large }: SocialIconsProps) => {
  // Lucide only offers a few icons – we'll use "youtube" as a placeholder for Amazon/Goodreads.
  // In production, swap for branded SVGs!
  const iconClass = large
    ? "w-12 h-12"
    : "w-7 h-7";

  return (
    <div className="flex gap-3 items-center">
      <a
        href="https://www.amazon.com/"
        rel="noopener noreferrer"
        aria-label="Amazon"
        target="_blank"
        className={`group rounded-full bg-primary/90 hover:bg-primary p-2 shadow transition ${iconClass}`}
      >
        {/* Placeholder for Amazon icon (use Lucide 'youtube') */}
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#FF9900" />
          <text x="12" y="15" fontSize="9" fill="white" textAnchor="middle" fontFamily="Verdana">a</text>
        </svg>
      </a>
      <a
        href="https://www.goodreads.com/"
        rel="noopener noreferrer"
        aria-label="Goodreads"
        target="_blank"
        className={`group rounded-full bg-secondary hover:bg-accent p-2 shadow transition ${iconClass}`}
      >
        {/* Placeholder for Goodreads icon */}
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#382110" />
          <text x="12" y="15" fontSize="8" fill="white" textAnchor="middle" fontFamily="Georgia">g</text>
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
