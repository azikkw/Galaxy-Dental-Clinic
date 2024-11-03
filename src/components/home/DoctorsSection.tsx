import Title from "@/components/ui/Title";
import UseCarousel from "@/components/ui/carousel/UseCarousel";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/card/DoctorCard";

const DoctorsSection = () => {
    return <section>
        <Title title="Наши врачи" className="mb-7"/>
        <UseCarousel
            data={doctors}
            renderItem={(doctor) => <DoctorCard doctor={doctor}/>}
        />
    </section>
}
export default DoctorsSection;