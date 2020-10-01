import React, { useEffect, useState } from "react";

import Link from "next/link";

import GOLINKS from "../constants/golinks";
import Layout from "../components/layout";

const QRCode = require("qrcode");

const Golink = () => {
  const [qrCodes, setQrCodes] = useState({});
  useEffect(() => {
    for (const [shortLink, _longLink] of Object.entries(GOLINKS)) {
      if (!(shortLink in qrCodes)) {
        QRCode.toDataURL(`https://rngy.dev/go/${shortLink}`, function (
          err,
          url
        ) {
          if (err) throw err;

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

export default Golink;
