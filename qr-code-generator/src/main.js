import QRCodeStyling from "qr-code-styling";

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

const qrResult = document.getElementById("qr-result");
const downloadBtn = document.getElementById("download-btn");
const qrDataInput = document.getElementById("qr-data");
const qrIconInput = document.getElementById("qr-icon");
const qrColorInput = document.getElementById("qr-color");
const qrBGColorInput = document.getElementById("qr-bg-color");
const qrTypeInput = document.getElementById("qr-type");
const qrDownloadInput = document.getElementById("qr-download");
const warningMsg = document.getElementById("warning"); // <p id="warning"></p> in your HTML

// Append QR to the page
qrCode.append(qrResult);

/* ------------------------
   HELPER FUNCTIONS
-------------------------*/

// Convert HEX color to luminance (brightness value)
function getLuminance(hex) {
  const c = hex.substring(1); // remove '#'
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  // Standard relative luminance formula (per ITU-R BT.601)
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

// Compare foreground (dots) and background luminance
function checkContrast(fg, bg) {
  const fgLum = getLuminance(fg);
  const bgLum = getLuminance(bg);
  return Math.abs(fgLum - bgLum);
}

// Show or clear a warning if contrast is too low
function validateContrast() {
  const contrast = checkContrast(qrColorInput.value, qrBGColorInput.value);
  if (contrast < 100) {
    warningMsg.textContent =
      "⚠️ Low contrast detected — use dark dots on a light background for best scan results.";
  } else {
    warningMsg.textContent = "";
  }
}

/* ------------------------
   EVENT LISTENERS
-------------------------*/

// Update QR code when typing data
qrDataInput.addEventListener("input", () => {
  qrCode.update({
    data: qrDataInput.value || "https://google.com",
  });
});

// Handle file upload for logo
qrIconInput.addEventListener("change", () => {
  const file = qrIconInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    qrCode.update({
      image: e.target.result,
    });
  };
  reader.readAsDataURL(file);
});

// Dot color
qrColorInput.addEventListener("input", () => {
  qrCode.update({
    dotsOptions: { color: qrColorInput.value },
  });
  validateContrast(); // check color contrast after update
});

// Background color
qrBGColorInput.addEventListener("input", () => {
  qrCode.update({
    backgroundOptions: { color: qrBGColorInput.value },
  });
  validateContrast(); // check color contrast after update
});

// Dot type (square, rounded, dots)
qrTypeInput.addEventListener("change", () => {
  qrCode.update({
    dotsOptions: { type: qrTypeInput.value },
  });
});

// Download QR
function downloadQrCode() {
  qrCode.download({
    name: "qr-code",
    extension: qrDownloadInput.value || "png",
  });
}
downloadBtn.addEventListener("click", downloadQrCode);

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker registered"));
}
