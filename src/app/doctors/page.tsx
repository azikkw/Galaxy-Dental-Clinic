import MainBlock from "@/components/ui/MainBlock";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import Title from "@/components/ui/Title";
import DoctorCard from "@/components/card/DoctorCard";
import { doctors } from "@/data/doctors";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши врачи" }
]

export default function Doctors() {
    return <MainBlock>
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <Title title="Наши врачи" className="mt-1 mb-7"/>
        <section className="grid sm:grid-cols-2 sm:justify-between gap-6 lg:grid-cols-3 sm:gap-4 xl:gap-5">
            {
                doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor}/>
                ))
            }
        </section>
    </MainBlock>
}