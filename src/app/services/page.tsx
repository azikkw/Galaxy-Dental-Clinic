import Title from "@/components/ui/Title";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import ServiceCard from "@/components/pages/ServiceCard";
import { services } from "@/data/services";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши услуги" }
]

export default function Services() {
    return <main className="min-h-dvh px-[15px] pt-[110px] mb-[150px]">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <Title title="Наши услуги" className="text-[33px] mt-1 mb-7 -ml-0.5"/>
        <section>
            {
                services.map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                ))
            }
        </section>
    </main>
}