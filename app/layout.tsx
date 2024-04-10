import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// will load the default styling for the React Video SDK
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoom Nepal",
  description: "Build by Saurab Poudel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/icons/yoom-logo.svg",
          socialButtonsVariant: "iconButton",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1c1f2e",
          colorInputBackground: "#252a41",
          colorInputText: "#fff",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>
          {children} <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
