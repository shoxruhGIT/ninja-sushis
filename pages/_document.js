import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <title>Ninja-sushi (Fake)</title>
      <body className="w-[full] bg-[#F5F5F7]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
