"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import MainBlock from "@/components/ui/MainBlock";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import DoctorCard from "@/components/pages/DoctorCard";
import Title from "@/components/ui/Title";
import { getService, ServicesInterface } from "@/data/services";
import { doctors, DoctorInterface } from "@/data/doctors";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши услуги", url: "/services" },
    { label: "Хирургия" }
]

export default function Service() {

    const params = useParams<{serviceId: string}>();
    const service: ServicesInterface = getService(params.serviceId);

    breadcrumbs[2].label = service.name;

    const availableDoctors: DoctorInterface[] = doctors.filter((doctor) => doctor.services?.includes(service.id));

    return <MainBlock>
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <section className="bg-fourthBlueColor h-[540px] rounded-b-[20px] absolute left-0 top-0 -z-[1] pt-[150px] px-[15px]">
            <Title title={service.name} className="mb-1"/>
            <span className="text-lg">{service.description}</span>
            <Image src={service.img} alt={service.name} width={500} height={500} className="absolute right-0 bottom-0 object-cover rounded-b-[20px]" />
        </section>
        <section className="mt-[500px]">
            <Title title="Лечащие врачи" className="text-[33px] mb-7"/>
            <div>
                {
                    availableDoctors.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor}/>
                    ))
                }
            </div>
        </section>
    </MainBlock>
}