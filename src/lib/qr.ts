import QRCode from "qrcode";

/**
 * Render a QR code to an inline SVG string (server-only). Dark modules use the
 * brand's AA-safe deep green so it sits cleanly on a light card; the background
 * is transparent so the card colour shows through.
 */
export async function qrSvg(text: string): Promise<string> {
  return QRCode.toString(text, {
    type: "svg",
    margin: 1,
    width: 240,
    color: { dark: "#0B7A3A", light: "#00000000" },
    errorCorrectionLevel: "M",
  });
}
