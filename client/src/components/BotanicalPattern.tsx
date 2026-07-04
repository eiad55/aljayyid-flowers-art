import { BRAND_COLORS } from "@/constants/data";

interface BotanicalPatternProps {
  opacity?: number;
  color?:   string;
  size?:    number;
}

/**
 * BotanicalPattern — the brand's signature decorative SVG element.
 * Renders a delicate botanical illustration (stem + leaves + flower)
 * used as watermark/accent across sections.
 */
export function BotanicalPattern({
  opacity = 0.07,
  color   = BRAND_COLORS.primary,
  size    = 220,
}: BotanicalPatternProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ pointerEvents: "none", userSelect: "none" }}
    >
      {/* Main stem */}
      <path
        d="M110 200 C110 180, 108 160, 112 140 C116 120, 110 100, 110 80"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity={opacity * 14}
      />

      {/* Left large leaf */}
      <path
        d="M110 150 C90 140, 70 125, 65 105 C75 108, 95 118, 110 130"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill={color}
        fillOpacity={opacity}
        opacity={opacity * 14}
      />
      <path d="M110 150 C90 140, 70 125, 65 105" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity={opacity * 10} />

      {/* Right medium leaf */}
      <path
        d="M110 130 C128 118, 148 108, 155 88 C144 93, 126 104, 110 118"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill={color}
        fillOpacity={opacity}
        opacity={opacity * 14}
      />
      <path d="M110 130 C128 118, 148 108, 155 88" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity={opacity * 10} />

      {/* Small left sprig */}
      <path
        d="M110 108 C96 100, 80 92, 76 78"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity={opacity * 12}
      />
      <path
        d="M110 108 C96 100, 80 92, 76 78 C80 75, 95 83, 110 94"
        fill={color}
        fillOpacity={opacity * 0.8}
        opacity={opacity * 12}
      />

      {/* Flower petals */}
      <g opacity={opacity * 14}>
        <ellipse cx="110" cy="70" rx="9" ry="14" fill={color} />
        <ellipse cx="110" cy="70" rx="9" ry="14" fill={color} transform="rotate(60 110 70)" />
        <ellipse cx="110" cy="70" rx="9" ry="14" fill={color} transform="rotate(120 110 70)" />
        <ellipse cx="110" cy="70" rx="9" ry="14" fill={color} transform="rotate(180 110 70)" />
        <ellipse cx="110" cy="70" rx="9" ry="14" fill={color} transform="rotate(240 110 70)" />
        <ellipse cx="110" cy="70" rx="9" ry="14" fill={color} transform="rotate(300 110 70)" />
        <circle cx="110" cy="70" r="7" fill={BRAND_COLORS.dustyRose} fillOpacity={opacity * 5} />
      </g>

      {/* Small dots accent */}
      <circle cx="68"  cy="103" r="2.5" fill={color} opacity={opacity * 10} />
      <circle cx="152" cy="87"  r="2"   fill={color} opacity={opacity * 8} />
      <circle cx="78"  cy="77"  r="1.5" fill={color} opacity={opacity * 7} />
    </svg>
  );
}

/** Arch frame — the brand's signature framing device */
export function ArchFrame({
  children,
  width  = 320,
  height = 420,
  borderColor = BRAND_COLORS.champagne,
  borderWidth = 8,
}: {
  children:     React.ReactNode;
  width?:       number;
  height?:      number;
  borderColor?: string;
  borderWidth?: number;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width:        `${width}px`,
        height:       `${height}px`,
        borderRadius: `${width / 2}px ${width / 2}px ${width * 0.15}px ${width * 0.15}px`,
        boxShadow:    `0 0 0 ${borderWidth}px ${borderColor}, 0 30px 80px rgba(24,51,37,0.2)`,
      }}
    >
      {children}
    </div>
  );
}
