import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS / iPadOS home-screen icon (180x180). SVG-rendered star, no font glyphs. */
export default function AppleIcon() {
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
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="130"
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
