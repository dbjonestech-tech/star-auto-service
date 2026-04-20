import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180">
          <rect width="180" height="180" rx="34" fill="#1B3A5C" />
          <path
            d="M90 20l23 46.6 50.6 6.6-36.6 35.7 8.6 51.7L90 134.4 44.4 160.6l8.6-51.7L16.4 73.2 67 66.6Z"
            fill="#E8792B"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
