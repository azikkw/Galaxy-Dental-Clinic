import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoreProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
    title: "Стоматологическая клиника Galaxy Dental Clinic в городе Астана",
    description: "Стоматологическая клиника Galaxy Dental Clinic в городе Астана. Мы на рынке более 4 лет, и за это время мы помогли более 10 000 пациентам. Наша команда состоит только из проффесионалов со стажем более 25 лет.",
    keywords: "Galaxy Dental Clinic, стоматологическая клиника, стоматология, стоматология астана, лечение зубов, лечение кариеса, удаление зубов, удаление зуба мудрости, имплантация зубов, установка коронок, установка брекет систем, челюстно-лицевая хирургия, dental clinic",
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://galaxy-dental-clinic.kz",
        title: "Galaxy Dental Clinic",
        description: "Стоматологическая клиника Galaxy Dental Clinic в городе Астана. Команда профессионалов со стажем более 25 лет.",
        siteName: "Galaxy Dental Clinic",
        images: [{
            url: "https://www.galaxy-dental-clinic.kz/_next/image?url=%2Fimages%2Fhome%2Flogo.png&w=1080&q=75",
        }]
    }
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
