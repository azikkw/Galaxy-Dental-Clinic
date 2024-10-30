import UseBreadcrumb from "@/components/ui/UseBreadcrumb";
import Title from "@/components/ui/Title";
import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши услуги" }
]

export default function Services() {
    return <main className="min-h-dvh px-[15px] pt-[110px] mb-[150px]">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <Title title="Наши услуги" className="text-[33px] mt-1 mb-7 -ml-0.5"/>
        {
            services.map((service) => (
                <ServiceCard key={service.id} service={service}/>
            ))
        }
    </main>
}