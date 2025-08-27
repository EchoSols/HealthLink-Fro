import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Chatbot } from "@/components/patient/Chatbot";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthLink",
  description: "Your health care assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
