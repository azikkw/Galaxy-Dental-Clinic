import MainBlock from "@/components/ui/MainBlock";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import ServicesSection from "@/components/home/ServicesSection";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши услуги" }
]

export default function Services() {
    return <MainBlock>
        <UseBreadcrumb breadcrumbs={breadcrumbs} className="mb-1"/>
        <ServicesSection/>
    </MainBlock>
}