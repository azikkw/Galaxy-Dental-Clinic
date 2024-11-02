import Section from "@/components/ui/Section";
import ServiceCard from "@/components/card/ServiceCard";
import Title from "@/components/ui/Title";
import { services } from "@/data/services";

const ServicesSection = () => {
    return <Section>
        <Title title="Наши услуги" className="mb-7"/>
        <div className="flex flex-col gap-y-6">
            {
                services.map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                ))
            }
        </div>
    </Section>
}
export default ServicesSection;