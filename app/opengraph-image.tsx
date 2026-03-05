import { ImageResponse } from "next/og";

export const alt = "Hitech Aircool Engineers - AC Repair & Service in Vadodara";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #042f2e, #0f766e, #0d9488)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #14b8a6, #22d3d1)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
            }}
          >
            H
          </div>
          <div
            style={{
              fontSize: "42px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            Hitech Aircool Engineers
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            color: "#99f6e4",
            fontWeight: 600,
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          AC Repair, Service & Installation in Vadodara
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {["20+ Years Experience", "5000+ Customers", "Same Day Service", "90-Day Warranty"].map(
            (feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#e2e8f0",
                  fontSize: "18px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#fbbf24",
                  }}
                />
                {feature}
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div
          style={{
            background: "#eab308",
            padding: "16px 48px",
            borderRadius: "50px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#0f172a",
          }}
        >
          Call +91 93289 53665
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
