import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = localFont({
  src: "./fonts/inter/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});
const lora = localFont({
  src: "./fonts/lora/Lora-VariableFont_wght.ttf",
  variable: "--font-lora",
  weight: "100 900",
});
const inconsolata = localFont({
  src: "./fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf",
  variable: "--font-inconsolata",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dictionary App",
  description: "This is a dictionary app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} ${inconsolata.variable}antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>{children}</>
        </ThemeProvider>
      </body>
    </html>
  );
}
