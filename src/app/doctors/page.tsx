import Title from "@/components/ui/Title";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import DoctorCard from "@/components/pages/DoctorCard";
import { doctors } from "@/data/doctors";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши врачи" }
]

export default function Doctors() {
    return <main className="min-h-dvh px-[15px] pt-[110px] mb-[150px]">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <Title title="Наши врачи" className="text-[33px] mt-1 mb-7 -ml-0.5"/>
        <section className="sm:grid sm:grid-cols-3 sm:justify-between">
            {
                doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor}/>
                ))
            }
        </section>
    </main>
}