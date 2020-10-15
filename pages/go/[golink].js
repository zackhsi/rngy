import GOLINKS from "../../constants/golinks";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const GA_TRACKING_ID = "UA-74307110-6";

const Golink = () => {
  const router = useRouter();
  const { golink } = router.query;
  useEffect(() => {
    // Do not redirect until the page is fully hydrated.
    // https://github.com/vercel/next.js/discussions/11484
    if (!golink) {
      return;
    }
    gtag("event", "page_view", {
      // window.location.href includes the querystring.
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: golink,
      event_callback: function () {
        // Append window.location.search to preserve querystring through redirect.
        window.location.replace(
          (GOLINKS[golink] || "https://ronggy.com") + window.location.search
        );
      },
    });
  });
  return (
    <div>
      <Head>
        <title>{"RNGY → " + golink}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              send_page_view: false,
            });
          `,
          }}
        />
      </Head>
      <p>Redirecting...</p>
    </div>
  );
};

export default Golink;
