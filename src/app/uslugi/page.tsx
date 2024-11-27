import MainBlock from "@/components/ui/MainBlock";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import ServicesSection from "@/components/home/ServicesSection";

export const metadata = {
    title: "Наши услуги | Стоматологическая клиника Galaxy Dental Clinic в городе Астана",
    description: "Услуги стомотологической клиники Galaxy Dental Clinic в городе Астана. Наши услуги включают в себя: проф. гигиену, терапию, хирургию, имплантацию, ортопедию и ортодонтию."
};

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