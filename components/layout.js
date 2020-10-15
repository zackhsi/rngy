import React, { ReactNode } from "react";
import styles from "./Layout.module.css";
import layoutStyles from "../styles/layout.js";

import Head from "next/head";

const Layout = ({ children, title = "RNGY" }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
    </Head>
    {children}
    <style jsx global>
      {layoutStyles}
    </style>
  </div>
);

export default Layout;
