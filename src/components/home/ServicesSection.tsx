import Section from "@/components/ui/Section";
import ServiceCard from "@/components/pages/ServiceCard";
import Title from "@/components/ui/Title";
import { services } from "@/data/services";

const ServicesSection = () => {
    return <Section>
        <Title title="Наши услуги" className="mb-7"/>
        <div>
            {
                services.map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                ))
            }
        </div>
    </Section>
}
export default ServicesSection;