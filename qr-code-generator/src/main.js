import QRCodeStyling from "qr-code-styling";

// Create QR code instance with defaults
const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "https://example.com",
  image: "",
  dotsOptions: { color: "#000", type: "square" },
  backgroundOptions: { color: "#fff" },
  margin: 5,
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5,
    imageSize: 0.3,
  },
});

// Append QR to result container
const container = document.getElementById("qr-result");
qrCode.append(container);

// Helper to update QR code
function updateQRCode() {
  const qr_data =
    document.getElementById("qr-data").value || "https://google.com";
  const qr_icon = document.getElementById("qr-icon");
  // const qr_width = document.getElementById("qr-width").value || 300;
  // const qr_height = document.getElementById("qr-height").value || 300;
  const qr_color = document.getElementById("qr-color").value || "#000000";
  const qr_bg_color = document.getElementById("qr-bg-color").value || "#ffffff";
  const qr_type = document.getElementById("qr-type").value || "square";

  let icon = "";
  if (qr_icon.files.length > 0) {
    icon = URL.createObjectURL(qr_icon.files[0]);
  }

  qrCode.update({
    data: qr_data,
    image: icon,
    // width: Number(qr_width),
    // height: Number(qr_height),
    dotsOptions: {
      color: qr_color,
      type: qr_type,
    },
    backgroundOptions: {
      color: qr_bg_color,
    },
  });
}

// Listen for input changes for live preview
[
  "qr-data",
  // "qr-width",
  // "qr-height",
  "qr-color",
  "qr-bg-color",
  "qr-type",
].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateQRCode);
});
document.getElementById("qr-icon").addEventListener("change", updateQRCode);

// Generate new QR code (optional, can just call updateQRCode)
document.getElementById("generate-btn").addEventListener("click", (e) => {
  e.preventDefault();
  updateQRCode();
});

// Download QR code
document.getElementById("download-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const qr_download = document.getElementById("qr-download").value || "png";

  qrCode.download({
    name: "qr-code",
    extension: qr_download,
  });
});
