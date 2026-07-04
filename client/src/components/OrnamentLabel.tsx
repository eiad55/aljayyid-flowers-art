import { BRAND_COLORS } from "@/constants/data";

interface OrnamentLabelProps {

  text: string;

  light?: boolean;

}

/**

 * Decorative label component with ornamental lines

 * Used for section headers throughout the site

 */

export function OrnamentLabel({ text, light = false }: OrnamentLabelProps) {

  const textColor = light ? BRAND_COLORS.champagne : BRAND_COLORS.olive;

  const lineColor = BRAND_COLORS.dustyRose;

  return (

    <div

      className="inline-flex items-center gap-3.5 mb-5"

      style={{

        color: textColor,

        fontSize: "12px",

        letterSpacing: "3.5px",

        textTransform: "uppercase",

        fontFamily: "'IBM Plex Sans Arabic', sans-serif",

      }}

    >

      <span

        className="block w-8 h-px"

        style={{ backgroundColor: lineColor }}

      />

      {text}

      <span

        className="block w-8 h-px"

        style={{ backgroundColor: lineColor }}

      />

    </div>

  );

}
