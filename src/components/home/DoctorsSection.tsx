import Title from "@/components/ui/Title";
import Carousel from "@/components/ui/Carousel";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/card/DoctorCard";

const DoctorsSection = () => {
    return <section className="relative">
        <Title title="Наши врачи" className="mb-7"/>
        <Carousel
            data={doctors}
            renderItem={(doctor) => <DoctorCard doctor={doctor}/>}
        />
    </section>
}
export default DoctorsSection;