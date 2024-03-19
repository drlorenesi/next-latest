import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./globals.css";
//Components
import Shell from "./components/shell/Shell";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App with Mantine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <MantineProvider>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
