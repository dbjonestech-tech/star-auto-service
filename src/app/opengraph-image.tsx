import { ImageResponse } from "next/og";

export const alt =
  "The Star Auto Service, family-owned auto repair in Richardson, TX since 1998";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Brand-aligned Open Graph card.
 * Cream/ink ground, royal headline, gold accent + star, ASE / NAPA / Bilingual /
 * Family-Owned trust pills. Used by Facebook, LinkedIn, Slack, iMessage previews,
 * and Twitter when the page-level twitter:image is not set.
 */
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #F7F4ED 0%, #FAF9F6 100%)",
          color: "#0F0F12",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#0B3D91",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 0,
            right: 0,
            height: 4,
            background: "#F4B400",
          }}
        />

        {/* Eyebrow with star */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            fontWeight: 800,
            color: "#0B3D91",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              display: "flex",
              fontSize: 30,
              color: "#F4B400",
              lineHeight: 1,
            }}
          >
            ★
          </span>
          <span style={{ display: "flex" }}>
            Richardson, TX · Family-Owned Since 1998
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 36,
            fontSize: 96,
            fontWeight: 900,
            color: "#0F0F12",
            lineHeight: 1,
            letterSpacing: -2.5,
          }}
        >
          <div style={{ display: "flex" }}>The Star</div>
          <div style={{ display: "flex", color: "#0B3D91" }}>
            Auto Service.
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#5C5550",
            lineHeight: 1.3,
            maxWidth: 900,
            fontWeight: 500,
          }}
        >
          Expert auto repair, done right. ASE-Certified · NAPA Auto Care
          Center · Bilingual.
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Trust pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#0F0F12",
            }}
          >
            {[
              "4.8 ★ · 136 Reviews",
              "ASE-Certified",
              "NAPA Auto Care",
              "28 Years",
            ].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  background: "#FEF6DD",
                  border: "2px solid #F4B400",
                  padding: "10px 18px",
                }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Phone */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#5C5550",
              }}
            >
              Call the shop
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 6,
                fontSize: 40,
                fontWeight: 900,
                color: "#0F0F12",
                letterSpacing: -1,
              }}
            >
              (972) 231-2886
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
