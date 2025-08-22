import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "HealthLink - Patient Portal | Secure Healthcare Management",
    template: "%s | HealthLink Patient Portal"
  },
  description: "Access your medical records, book appointments, manage prescriptions, and handle payments securely through our comprehensive patient portal. Your health, simplified.",
  keywords: [
    "patient portal",
    "healthcare management", 
    "medical records",
    "online appointments",
    "prescription management",
    "healthcare payments",
    "telemedicine",
    "digital health"
  ],
  authors: [{ name: "HealthLink Team" }],
  creator: "HealthLink",
  publisher: "HealthLink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://healthlink.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthlink.com",
    siteName: "HealthLink Patient Portal",
    title: "HealthLink - Secure Patient Portal for Healthcare Management",
    description: "Manage your healthcare journey with our secure patient portal. Book appointments, access records, and handle prescriptions all in one place.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HealthLink Patient Portal Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthLink Patient Portal",
    description: "Your secure healthcare management platform",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#118CDB" />
        <meta name="msapplication-TileColor" content="#118CDB" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
