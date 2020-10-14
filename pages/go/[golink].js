import { GTM_AUTH, GTM_ID, GTM_PREVIEW } from "../../constants/gtm";

import GOLINKS from "../../constants/golinks";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const DEFAULT_GOLINK = "https://ronggy.com/";

const Golink = () => {
  const router = useRouter();
  const { golink } = router.query;
  useEffect(() => {
    window.location.replace(GOLINKS[golink] || DEFAULT_GOLINK);
  });
  return (
    <div>
      <Head>
        <title>{"RNGY → " + golink}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${GTM_AUTH}&gtm_preview=${GTM_PREVIEW}&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}&gtm_auth=${GTM_AUTH}&gtm_preview=${GTM_PREVIEW}&gtm_cookies_win=x"
            height="0" width="0" style="display:none;visibility:hidden"></iframe`,
        }}
      />
      <p>Redirecting...</p>
    </div>
  );
};

export default Golink;
