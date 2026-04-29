import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Browser favicon (32x32). Royal blue rounded ground, gold 5-point star
 * rendered as an SVG path so Satori has no font glyph to look up.
 * Replaces the create-next-app placeholder so Google SERPs and browser
 * tabs show the brand mark instead of a generic icon.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B3D91",
          borderRadius: 6,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="#F4B400"
        >
          <path d="M12 2 L14.85 8.63 L22 9.27 L16.5 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7.5 14.14 L2 9.27 L9.15 8.63 Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
