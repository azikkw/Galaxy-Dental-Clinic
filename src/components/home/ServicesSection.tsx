import ServiceCard from "@/components/card/ServiceCard";
import Title from "@/components/ui/Title";
import { services } from "@/data/services";

const ServicesSection = () => {
    return <section className="xl:flex xl:flex-col">
        <Title title="Наши услуги" className="mb-7"/>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                services.map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                ))
            }
        </div>
    </section>
}
export default ServicesSection;