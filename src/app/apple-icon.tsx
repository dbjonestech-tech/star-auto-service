import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * iOS / iPadOS home-screen icon (180x180). Royal blue ground, gold star,
 * matched corner radius to the favicon for brand consistency.
 */
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
          color: "#F4B400",
          fontSize: 140,
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
