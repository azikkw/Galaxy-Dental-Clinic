import MainBlock from "@/components/ui/MainBlock";
import DoctorsSection from "@/components/home/DoctorsSection";
import InstagramSection from "@/components/home/InstagramSection";
import TwoGisSection from "@/components/home/TwoGisSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
    return <MainBlock>
        <DoctorsSection/>
        <InstagramSection/>
        <TwoGisSection/>
        <ServicesSection/>
    </MainBlock>
}