
import { Instagram, ExternalLink } from "lucide-react";

interface SocialIconsProps {
  large?: boolean;
}

const SocialIcons = ({ large }: SocialIconsProps) => {
  const iconClass = large ? "w-12 h-12" : "w-7 h-7";
  const iconColor = "#222"; // Black/near-black

  const baseLinkClass =
    `group rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background transition-colors
     border p-2 shadow hover:scale-105 active:scale-95
     `;

  return (
    <div className="flex gap-3 items-center">
      {/* Amazon */}
      <a
        href="https://www.amazon.com/"
        rel="noopener noreferrer"
        aria-label="Amazon (opens in new tab)"
        target="_blank"
        className={`${baseLinkClass} bg-primary/90 border-primary text-white hover:bg-primary`}
      >
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#FF9900" />
          <text x="12" y="15" fontSize="9" fill="white" textAnchor="middle" fontFamily="Verdana">a</text>
        </svg>
        <ExternalLink size={large ? 20 : 14} className="ml-1" aria-hidden="true" />
      </a>
      {/* Goodreads */}
      <a
        href="https://www.goodreads.com/"
        rel="noopener noreferrer"
        aria-label="Goodreads (opens in new tab)"
        target="_blank"
        className={`${baseLinkClass} bg-secondary border-accent text-accent hover:bg-accent`}
      >
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="10" fill="#382110" />
          <text x="12" y="15" fontSize="8" fill="white" textAnchor="middle" fontFamily="Georgia">g</text>
        </svg>
        {/* Always show external icon */}
        <ExternalLink size={large ? 20 : 14} className="ml-1" aria-hidden="true" />
      </a>
      {/* TikTok */}
      <a
        href="https://tiktok.com/"
        rel="noopener noreferrer"
        aria-label="TikTok (opens in new tab)"
        target="_blank"
        className={`${baseLinkClass} bg-white border-gray-300 text-black hover:bg-gray-200`}
        title="TikTok"
      >
        {/* Realistic TikTok icon */}
        <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <g>
            <rect width="48" height="48" rx="24" fill="#fff"/>
            <path d="M33.25 14.5a5.25 5.25 0 0 1-5.25-5.25h-4.5v20A3.75 3.75 0 1 1 20 25.5" stroke="#111" strokeWidth={2.5} strokeLinejoin="round"/>
            <path d="M34 19.5c1.937 0 3.786-.7 5.11-1.95A8.5 8.5 0 0 1 33.25 8.5V14.5H34v5z" fill="#25F4EE" />
            <path d="M30.5 8.5v6h2.75A8.46 8.46 0 0 0 34 14.5v-6h-3.5z" fill="#FE2C55" />
            <circle cx="20" cy="30.25" r="3.75" fill="#111" />
            <circle cx="20" cy="30.25" r="2" fill="#FE2C55"/>
            <circle cx="20" cy="30.25" r="1" fill="#25F4EE"/>
          </g>
        </svg>
        <ExternalLink size={large ? 20 : 14} className="ml-1 invisible group-hover:visible" aria-hidden="true" />
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com/"
        rel="noopener noreferrer"
        aria-label="Instagram (opens in new tab)"
        target="_blank"
        className={`${baseLinkClass} bg-white border-gray-300 text-black hover:bg-gray-200`}
        title="Instagram"
      >
        <Instagram className={iconClass} color={iconColor} />
        <ExternalLink size={large ? 20 : 14} className="ml-1 invisible group-hover:visible" aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialIcons;

