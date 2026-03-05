import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: "linear-gradient(135deg, #0f766e, #0d9488, #0891b2)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "36px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontWeight: 800,
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          H
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "1px",
            marginTop: "2px",
            color: "#99f6e4",
          }}
        >
          HITECH
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
