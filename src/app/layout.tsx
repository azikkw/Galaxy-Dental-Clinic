import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoreProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
    title: "Galaxy Dental Clinic",
    description: "Galaxy Dental Clinic, Стомотологическая клиника, Стомотология Астана, Брекеты, Имплантация, Челюстно-лицевая хирургия, Dental Clinic, Брекет система, город астана"
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="ru">
        <body className={manrope.className}>
            <StoreProvider>
                <Header/>
                {children}
                <Footer/>
            </StoreProvider>
        </body>
    </html>
}
