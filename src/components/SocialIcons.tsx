
import { Instagram } from "lucide-react";

interface SocialIconsProps {
  large?: boolean;
}

const SocialIcons = ({ large }: SocialIconsProps) => {
  const iconClass = large ? "w-12 h-12" : "w-7 h-7";
  const iconColor = "#222"; // Black/near-black

  return (
    <div className="flex gap-3 items-center">
      {/* Amazon */}
      <a
        href="https://www.amazon.com/"
        rel="noopener noreferrer"
        aria-label="Amazon"
        target="_blank"
        className={`group rounded-full bg-primary/90 hover:bg-primary p-2 shadow transition ${iconClass}`}
      >
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#FF9900" />
          <text x="12" y="15" fontSize="9" fill="white" textAnchor="middle" fontFamily="Verdana">a</text>
        </svg>
      </a>
      {/* Goodreads */}
      <a
        href="https://www.goodreads.com/"
        rel="noopener noreferrer"
        aria-label="Goodreads"
        target="_blank"
        className={`group rounded-full bg-secondary hover:bg-accent p-2 shadow transition ${iconClass}`}
      >
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#382110" />
          <text x="12" y="15" fontSize="8" fill="white" textAnchor="middle" fontFamily="Georgia">g</text>
        </svg>
      </a>
      {/* TikTok (inline SVG) */}
      <a
        href="https://tiktok.com/"
        rel="noopener noreferrer"
        aria-label="TikTok"
        target="_blank"
        className={`group rounded-full bg-white hover:bg-gray-200 border border-gray-300 p-2 shadow transition ${iconClass}`}
        title="TikTok"
      >
        {/* Simple TikTok logo (monochrome, minimal for demo) */}
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 3a1 1 0 0 0-1 1v10.5a2.5 2.5 0 1 1-2.5-2.5.75.75 0 0 0 0-1.5A4 4 0 1 0 15 19V7.18c.29.12.6.21.92.25A5.6 5.6 0 0 0 19 7v-2a1 1 0 0 0-1-1h-3Z"
            fill={iconColor}
          />
        </svg>
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com/"
        rel="noopener noreferrer"
        aria-label="Instagram"
        target="_blank"
        className={`group rounded-full bg-white hover:bg-gray-200 border border-gray-300 p-2 shadow transition ${iconClass}`}
        title="Instagram"
      >
        <Instagram className={iconClass} color={iconColor} />
      </a>
    </div>
  );
};

export default SocialIcons;
