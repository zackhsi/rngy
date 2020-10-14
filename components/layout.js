import React, { ReactNode } from "react";

import Head from "next/head";

const Layout = ({ children, title = "RNGY" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
      />
    </Head>
    {children}
  </div>
);

export default Layout;
