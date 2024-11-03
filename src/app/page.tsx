"use client";

import MainBlock from "@/components/ui/MainBlock";
import WelcomeSection from "@/components/home/WelcomeSection";
import AboutSection from "@/components/home/AboutSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import InstagramSection from "@/components/home/InstagramSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import TwoGisSection from "@/components/home/TwoGisSection";
import ServicesSection from "@/components/home/ServicesSection";
import ScannerSection from "@/components/home/ScannerSection";
import PromotionsSection from "@/components/home/PromotionsSection";
import ContactsSection from "@/components/home/ContactsSection";

export default function Home() {
    return <MainBlock className="gap-y-[100px] !px-0">
        <WelcomeSection/>
        <div className="flex flex-col gap-y-[100px] px-[15px]">
            <AboutSection/>
            <DoctorsSection/>
            <InstagramSection/>
            <ReviewsSection/>
            <TwoGisSection/>
            <ServicesSection/>
            <ScannerSection/>
            <PromotionsSection/>
            <ContactsSection/>
        </div>
    </MainBlock>
}