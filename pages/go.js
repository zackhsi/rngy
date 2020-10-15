import React, { useEffect, useState } from "react";

import GOLINKS from "../constants/golinks";
import Layout from "../components/layout";
import Link from "next/link";

const QRCode = require("qrcode");
const { createCanvas, loadImage } = require("canvas");

const Golink = () => {
  const [qrCodes, setQrCodes] = useState({});
  useEffect(() => {
    for (const [shortLink, _longLink] of Object.entries(GOLINKS)) {
      if (!(shortLink in qrCodes)) {
        create_qrcode(
          // Append source=qr for better analytics.
          `https://rngy.dev/go/${shortLink}?source=qr`,
          "./ronggy.png",
          800,
          150
        ).then((url) => {
          setQrCodes((qrCodes) => ({ ...qrCodes, [shortLink]: url }));
        });
      }
    }
  }, []);
  return (
    <Layout title="Golinks">
      <table>
        <thead>
          <tr>
            <th>Short Link</th>
            <th>Long Link</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(GOLINKS).map(function ([shortLink, longLink], _i) {
            return (
              <tr key={shortLink}>
                <td>
                  <Link href={`/go/${shortLink}`}>
                    <a>{shortLink}</a>
                  </Link>
                </td>
                <td>
                  <a href={longLink}>{longLink}</a>
                </td>
                <td>
                  <img src={qrCodes[shortLink]} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

async function create_qrcode(
  qrCodeText,
  centerImageSrc,
  qrCodeWidth,
  centerImageWidth
) {
  // Create canvas.
  const canvas = createCanvas(qrCodeWidth, qrCodeWidth);
  const ctx = canvas.getContext("2d");

  // Draw QR code.
  ctx.imageSmoothingEnabled = false;
  const qrCodeImage = await QRCode.toCanvas(createCanvas(1, 1), qrCodeText, {
    errorCorrectionLevel: "H", // LMQH, "H" is highest.
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });
  ctx.drawImage(qrCodeImage, 0, 0, qrCodeWidth, qrCodeWidth);

  // Draw circle.
  ctx.imageSmoothingEnabled = true;
  ctx.beginPath();
  const paddingFactor = 2; // Fancy restaurants use big plates for small food.
  ctx.arc(
    qrCodeWidth / 2,
    qrCodeWidth / 2,
    (centerImageWidth / 2) * paddingFactor,
    0,
    2 * Math.PI
  );
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  // Draw image.
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(
    await loadImage(centerImageSrc),
    (qrCodeWidth - centerImageWidth) / 2,
    (qrCodeWidth - centerImageWidth) / 2,
    centerImageWidth,
    centerImageWidth
  );

  // Return.
  return canvas.toDataURL("image/png");
}

export default Golink;
