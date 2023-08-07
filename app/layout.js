import { Providers } from "../utils/providers";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shopify App with NextJs 13</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
