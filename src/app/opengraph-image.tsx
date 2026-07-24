import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Quiick Chat — one platform, every way to communicate.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#090C10",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(51,206,124,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(100,255,218,0.18), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#33CE7C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              color: "#04160B",
            }}
          >
            QC
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#E9EEF0", display: "flex" }}>
            Quiick Chat
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 72,
            fontWeight: 800,
            color: "#E9EEF0",
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.1,
          }}
        >
          <span>Communication.</span>
          <span style={{ color: "#33CE7C" }}>Understood.</span>
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: "#8B95A0", display: "flex", maxWidth: 900 }}>
          One platform. Every way to communicate — chat, call, Memories, Communities, and Quiick AI.
        </div>
      </div>
    ),
    { ...size }
  );
}
