import Title from "@/components/ui/Title";
import UseBreadcrumb from "@/components/ui/UseBreadcrumb";
import DoctorCard from "@/components/ui/DoctorCard";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши врачи" }
]

const doctors = [
    { id: "d1", name: "Арман Канатович", type: "Хирург-имплантолог", img: "/images/d1.jpg", experience: 12 },
    { id: "d2", name: "Алмаз Нурланович", type: "Хирург-имплантолог", img: "/images/d2.jpg", experience: 12 },
    { id: "d3", name: "Мират Дулатович", type: "Ортодонт-терапевт", img: "/images/d3.jpg", experience: 5 },
    { id: "d4", name: "Зарина Рашидовна", type: "Ортодонт-терапевт", img: "/images/d4.jpg", experience: 5 },
    { id: "d5", name: "Болат Базылбекович", type: "Оротопед", img: "/images/d5.jpg", experience: 25 }
]

export default function Doctors() {
    return <main className="min-h-dvh px-[15px] pt-[110px] mb-[150px]">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <Title title="Наши врачи" className="text-[33px] mt-1 mb-7 -ml-0.5"/>
        <div className="sm:grid sm:grid-cols-3 sm:justify-between">
            {
                doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor}/>
                ))
            }
        </div>
    </main>
}