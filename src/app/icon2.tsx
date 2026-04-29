import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

/** Android splash / large home-screen icon (512x512) for the PWA manifest. */
export default function Icon512() {
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
          fontSize: 400,
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
