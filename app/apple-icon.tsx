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
          fontSize: 100,
          background: "linear-gradient(135deg, #1e3a8a, #2563eb, #3b82f6)",
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
          A
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "2px",
            marginTop: "-4px",
            color: "#93c5fd",
          }}
        >
          ATLAS
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
