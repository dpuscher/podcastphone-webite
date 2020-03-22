import React from "react";

const GoogleAnalytics = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-161556123-1"
    />
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-161556123-1');
        `.replace(/\s*\n\s*/g, ""),
      }}
    />
  </>
);

export default GoogleAnalytics;
