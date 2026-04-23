import { ImageResponse } from "next/og";
import { displayName, headline } from "@/lib/site-content";

/** Required for `output: "export"` so the OG image route is generated at build time. */
export const dynamic = "force-static";

export const alt = `${displayName} — portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const subline = headline.length > 120 ? `${headline.slice(0, 117)}…` : headline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(145deg, #070a12 0%, #12182a 48%, #070a12 100%)",
          color: "#f2f4f8",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#5eead4",
            marginBottom: 20,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          {displayName}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            lineHeight: 1.35,
            color: "#b8b3a8",
            maxWidth: 920,
          }}
        >
          {subline}
        </div>
      </div>
    ),
    { ...size },
  );
}
