import { Metadata } from "next";
import { getDoctor, getDoctorWorks } from "@/data/doctors";
import Doctor from "@/components/pages/Doctor";

type Props = {
    params: Promise<{ doctorId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const doctorId = (await params).doctorId;
    const doctor = await getDoctor(doctorId);
    return {
        title: `${doctor.name} | Galaxy Dental Clinic`,
        description: `Наш(а) ${doctor.type} - ${doctor.name}. Это профессионал с опытом более ${doctor.experience} лет, за время своей работы ${doctor.name} подарил(а) улыбки очень многим пацинетам и здесь вы сможете увидеть его работы.`
    }
}

export default async function DoctorPage({ params }: Props) {
    const doctorId = (await params).doctorId;
    const doctor = await getDoctor(doctorId);
    const doctorWorks = await getDoctorWorks(doctorId);
    return <Doctor doctor={doctor} doctorWorks={doctorWorks}/>
}