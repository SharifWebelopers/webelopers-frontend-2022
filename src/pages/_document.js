import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // locale is in ctx.locale

    return { ...initialProps };
  }

  render = () => (
    <Html dir="rtl" lang="fa">
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" />
        <title>وبلوپرز ۲۰۲۲</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
