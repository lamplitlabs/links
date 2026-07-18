import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaultProps = (size?: number): Partial<IconProps> => ({
    width: size || 24,
    height: size || 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
});

export const SunIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

export const MoonIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export const ExternalLinkIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

export const ChevronDownIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

export const GlobeIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

export const PenToolIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
    </svg>
);

export const WrenchIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

// Social media icons (filled style)
export const GitHubIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

export const LinkedInIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export const InstagramIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

export const BlogIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

export const YouTubeIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

export const TwitterIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const FacebookIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

export const SnapchatIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M12.017.001c2.41.02 4.278.978 5.546 2.608.94 1.21 1.397 2.71 1.437 4.565v.002c.011.258.015.53.011.814.004.282.062.493.162.624.11.145.309.243.614.283.18.024.37.06.544.175.2.132.33.322.33.583a.742.742 0 0 1-.405.653c-.2.104-.438.166-.673.235-.312.091-.636.186-.867.349a.655.655 0 0 0-.26.35.736.736 0 0 0 .016.435 8.11 8.11 0 0 0 1.088 1.94 6.046 6.046 0 0 0 2.116 1.861c.175.094.244.18.244.272 0 .253-.418.443-.744.538a8.076 8.076 0 0 1-1.234.302c-.055.01-.12.082-.16.211-.053.172-.113.428-.292.626-.192.213-.468.307-.784.307a3.2 3.2 0 0 1-.653-.074 5.206 5.206 0 0 0-1.106-.145c-.35 0-.71.062-1.068.234a5.11 5.11 0 0 0-1.393 1.067c-.62.59-1.374 1.023-2.47 1.018-1.094.005-1.849-.428-2.47-1.018a5.11 5.11 0 0 0-1.393-1.067 3.353 3.353 0 0 0-1.068-.234 5.206 5.206 0 0 0-1.106.145 3.2 3.2 0 0 1-.653.074c-.316 0-.592-.094-.784-.307-.179-.198-.24-.454-.292-.626-.04-.13-.105-.2-.16-.21a8.076 8.076 0 0 1-1.234-.303c-.326-.095-.744-.285-.744-.538 0-.092.069-.178.244-.272a6.046 6.046 0 0 0 2.116-1.861 8.11 8.11 0 0 0 1.088-1.94.736.736 0 0 0 .016-.435.655.655 0 0 0-.26-.35c-.231-.163-.555-.258-.867-.349a4.397 4.397 0 0 1-.673-.235.742.742 0 0 1-.405-.653c0-.26.129-.451.33-.583.174-.115.363-.151.544-.175.305-.04.504-.138.614-.283.1-.131.158-.342.162-.624a11.346 11.346 0 0 1 .011-.814c.04-1.855.497-3.355 1.437-4.565C7.722.978 9.59.02 12 .001h.017z" />
    </svg>
);

export const TikTokIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
);

export const MediumIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size || 24} height={size || 24} fill="currentColor" aria-hidden {...props}>
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

export const PackageIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

export const FileTextIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

export const CodeIcon = ({ size, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" {...defaultProps(size)} {...props}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

// Category icons mapping
export function getCategoryIcon(category: string) {
    switch (category.toLowerCase()) {
        case "blog": return PenToolIcon;
        case "tools": return WrenchIcon;
        case "products": return PackageIcon;
        case "instagram": return InstagramIcon;
        default: return GlobeIcon;
    }
}

// Per-link icon based on domain
export function getLinkIcon(url: string) {
    try {
        const hostname = new URL(url).hostname;
        if (hostname.includes("medium")) return MediumIcon;
        if (hostname.includes("resume")) return FileTextIcon;
        if (hostname.includes("edmx")) return CodeIcon;
        if (hostname.includes("kenntnistrainer")) return PackageIcon;
        if (hostname.includes("lebenindeutschland")) return GlobeIcon;
        if (hostname.includes("blog")) return PenToolIcon;
    } catch {
        // fall through
    }
    return null;
}

// Social icon mapping
export function getSocialIcon(brand: string) {
    switch (brand.toLowerCase()) {
        case "github": return GitHubIcon;
        case "linkedin": return LinkedInIcon;
        case "instagram": return InstagramIcon;
        case "blog": return BlogIcon;
        case "web": return GlobeIcon;
        case "youtube": return YouTubeIcon;
        case "twitter": return TwitterIcon;
        case "facebook": return FacebookIcon;
        case "snapchat": return SnapchatIcon;
        case "tiktok": return TikTokIcon;
        default: return GlobeIcon;
    }
}