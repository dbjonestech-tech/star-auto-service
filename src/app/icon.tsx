import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Browser favicon (32x32). Royal blue rounded ground, gold star.
 * Replaces the legacy create-next-app vercel-style placeholder so Google
 * SERPs show the brand mark instead of a generic geometric placeholder.
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
          color: "#F4B400",
          fontSize: 28,
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        ★
      </div>
    ),
    { ...size },
  );
}
