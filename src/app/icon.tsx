import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#1B3A5C" />
          <path
            d="M16 2l4.09 8.29L29 11.46l-6.5 6.34L24.18 27 16 22.27 7.82 27l1.68-9.2L3 11.46l8.91-1.17Z"
            fill="#E8792B"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
