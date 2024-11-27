import { Metadata } from "next";
import { getDoctor, getDoctorWorks } from "@/data/doctors";
import Doctor from "@/components/pages/Doctor";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id;
    const doctor = await getDoctor(id);
    return {
        title: `${doctor.name}, ${doctor.type} | Стоматология Galaxy Dental Clinic в Астане`,
        description: `Наш(а) ${doctor.type} - ${doctor.name}. Это профессионал с опытом более ${doctor.experience} лет, за время своей работы ${doctor.name} подарил(а) улыбки очень многим пацинетам и здесь вы сможете увидеть его работы.`
    }
}

export default async function DoctorPage({ params }: Props) {
    const id = (await params).id;
    const doctor = await getDoctor(id);
    const doctorWorks = await getDoctorWorks(id);
    return <Doctor doctor={doctor} doctorWorks={doctorWorks}/>
}