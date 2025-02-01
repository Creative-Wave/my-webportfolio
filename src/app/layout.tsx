import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Add favicon */}

        <link rel="icon" href="logo1.png" sizes="32x32" />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
