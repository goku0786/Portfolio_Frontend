import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeService() {
  const [text, setText] = useState("");
  const [qrColor, setQRColor] = useState("#000000"); // Default QR code color
  const [bgColor, setBGColor] = useState("#ffffff"); // Default background color

  const downloadQRCode = () => {
    const svg = document.getElementById("qrcode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="flex flex-col items-center pt-[60px] h-auto justify-center">
      <h1 className="text-3xl font-bold mb-4 text-white border-b-2">
        QR Code Generator
      </h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-64 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mb-4 text-white">
        <div className="mb-4">
          <span>QR Color: </span>
          <input
            type="color"
            id="qrColor"
            value={qrColor}
            onChange={(e) => setQRColor(e.target.value)}
            className="mr-2 outline-none"
          />
        </div>
        <div>
          <span>Background QR Color: </span>
          <input
            type="color"
            id="bgColor"
            value={bgColor}
            onChange={(e) => setBGColor(e.target.value)}
          />
        </div>
      </div>
      <div className="p-[20px] bg-slate-900 flex flex-col justify-center items-center border-2 border-white">
        {text && (
          <QRCode
            id="qrcode"
            value={text}
            fgColor={qrColor}
            bgColor={bgColor}
            className="h-[150px]"
          />
        )}
        <button
          onClick={downloadQRCode}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Download QR
        </button>
      </div>
    </div>
  );
}

export default QRCodeService;
