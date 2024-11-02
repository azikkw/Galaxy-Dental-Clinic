import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import UseCarousel from "@/components/ui/carousel/UseCarousel";
import { doctors } from "@/data/doctors";

const DoctorsSection = () => {
    return <Section>
        <Title title="Наши врачи" className="mb-7"/>
        <UseCarousel data={doctors}/>
    </Section>
}
export default DoctorsSection;