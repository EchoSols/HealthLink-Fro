"use client";

import React, { ReactNode } from "react";
import PatientSidebar from "@/components/patient/Sidebar";
import PatientTopbar from "@/components/patient/Topbar";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "HealthLink",
            "description": "Secure patient portal for healthcare management",
            "url": "https://healthlink.com",
            "logo": "https://healthlink.com/logo.svg",
            "sameAs": [
              "https://twitter.com/healthlink",
              "https://facebook.com/healthlink"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Healthcare Ave",
              "addressLocality": "Medical City",
              "addressRegion": "MC",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "service": [
              {
                "@type": "Service",
                "name": "Patient Portal",
                "description": "Secure access to medical records, appointments, and prescriptions",
                "provider": {
                  "@type": "MedicalOrganization",
                  "name": "HealthLink"
                }
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-[#F1F4F8]">
        <div className="flex">
          <PatientSidebar />
          <div className="flex-1 min-h-screen flex flex-col">
            <PatientTopbar />
            <main className="p-6 flex-1">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
