import { ImageResponse } from "next/og";

export const alt = "The Star Auto Service – Auto Repair in Richardson, TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B3A5C 0%, #132B44 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          The Star Auto Service
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#E8792B",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Expert Auto Repair with Integrity
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            marginTop: 48,
            textAlign: "center",
          }}
        >
          Richardson, TX &nbsp;&bull;&nbsp; (972) 231-2886 &nbsp;&bull;&nbsp; ASE
          Certified &nbsp;&bull;&nbsp; Since 1998
        </div>
      </div>
    ),
    { ...size }
  );
}
