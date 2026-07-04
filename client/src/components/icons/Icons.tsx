/**
 * Icons — Elegant SVG line icons to replace emoji throughout the site.
 * All icons are 24×24 viewBox, stroke-based, no fill by default.
 */

interface IconProps {
  size?:        number;
  color?:       string;
  strokeWidth?: number;
  className?:   string;
}

const base = (size: number, color: string, sw: number, children: React.ReactNode) => (
  <svg
    width={size} height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const IconFlower = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="2.5"/>
    <path d="M12 2 C10 5, 10 9, 12 9.5 C14 9, 14 5, 12 2Z"/>
    <path d="M12 22 C10 19, 10 15, 12 14.5 C14 15, 14 19, 12 22Z"/>
    <path d="M2 12 C5 10, 9 10, 9.5 12 C9 14, 5 14, 2 12Z"/>
    <path d="M22 12 C19 10, 15 10, 14.5 12 C15 14, 19 14, 22 12Z"/>
    <path d="M4.9 4.9 C6.4 8, 9 10, 9.5 12" opacity="0.4"/>
    <path d="M19.1 4.9 C17.6 8, 15 10, 14.5 12" opacity="0.4"/>
  </svg>
);

export const IconRocket = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

export const IconBrush = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/>
    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 6.23 1 7-.02.42-.28.83-.61.95-1.17.4-1.8-.25-3.85-2.95-3.85z"/>
  </svg>
);

export const IconChat = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export const IconShield = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export const IconPin = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const IconClock = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const IconPhone = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.85 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export const IconInstagram = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const IconSnapchat = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2C8 2 5 5 5 9c0 2.5.3 4 .8 5.5-.3.2-.8.3-1.3.5-.5.2-1 .4-1 .9 0 .4.4.8 1 1 .2.1.3.1.4.2.1.8.5 1.4 1.1 1.6-.4.6-1 1-1.5 1.3C4 20.3 3.8 21 4 21.5c.2.4.6.5 1 .5.8 0 2-.4 3.5-.8.7 1 1.5 1.8 3.5 1.8s2.8-.8 3.5-1.8c1.5.4 2.7.8 3.5.8.4 0 .8-.1 1-.5.2-.5 0-1.2-.5-1.5-.5-.3-1.1-.7-1.5-1.3.6-.2 1-.8 1.1-1.6.1-.1.2-.1.4-.2.6-.2 1-.6 1-1 0-.5-.5-.7-1-.9-.5-.2-1-.3-1.3-.5.5-1.5.8-3 .8-5.5 0-4-3-7-7-7z"/>
  </svg>
);

export const IconWhatsapp = ({ size=24, color="currentColor", className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2.003c-5.523 0-9.998 4.476-9.998 9.998 0 1.76.463 3.463 1.34 4.958L2 22l5.188-1.362A9.956 9.956 0 0 0 12.05 22c5.523 0 9.998-4.476 9.998-9.999 0-5.522-4.475-9.998-9.998-9.998z"/>
  </svg>
);

export const IconArrow = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

export const IconDelivery = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="m16 8 4 2v5h-4V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

export const IconLeaf = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export const IconStar = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const IconMap = ({ size=24, color="currentColor", strokeWidth=1.5, className="" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);
