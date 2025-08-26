# QR Code Generator Web App

A simple, modern, and responsive web application for generating customizable QR codes. Built with JavaScript and [qr-code-styling](https://github.com/kozakdenys/qr-code-styling).

## Features

- Live preview of QR code as you type or change options
- Customize QR code data, color, background, dot style, and add a logo/image
- Download QR code as PNG, JPEG, or SVG
- Responsive design for desktop and mobile

## Folder Structure

```
regal-web-apps/
└── qr-code-generator/
    ├── src/
    │   ├── main.js        # Main JavaScript logic
    │   ├── style.css      # App styling (responsive)
    │   └── index.html     # Main HTML file
    └── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm (for local development, optional)
- Modern web browser

### Running Locally

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd regal-web-apps/qr-code-generator
   ```

2. **Install dependencies (if using a bundler):**

   ```sh
   npm install
   ```

3. **Open `src/index.html` in your browser**  
   Or use a local server (recommended for file uploads):
   ```sh
   npx serve src
   # or
   npm install -g live-server
   live-server src
   ```

## Usage

1. Enter the data (URL, text, etc.) you want to encode.
2. Customize the QR code's color, background, dot style, and optionally upload a logo.
3. The QR code preview updates live as you make changes.
4. Click "Download" to save your QR code in your preferred format.

## Technologies Used

- JavaScript (ES6)
- [qr-code-styling](https://github.com/kozakdenys/qr-code-styling)
- HTML5 & CSS3

## Customization

You can further customize the UI and QR code options by editing:

- `src/main.js` for logic and options
- `src/style.css` for styling and responsiveness

## License

This project is open source and available under the [MIT License](LICENSE).

---

\*\*Made with ❤️ for learning and
