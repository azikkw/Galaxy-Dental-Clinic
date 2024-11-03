import ServiceCard from "@/components/card/ServiceCard";
import Title from "@/components/ui/Title";
import { services } from "@/data/services";

const ServicesSection = () => {
    return <section>
        <Title title="Наши услуги" className="mb-7"/>
        <div className="flex flex-col gap-y-6">
            {
                services.map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                ))
            }
        </div>
    </section>
}
export default ServicesSection;