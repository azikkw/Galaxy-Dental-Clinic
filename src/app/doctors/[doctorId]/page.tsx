"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Rating from "@/components/ui/Rating";
import Title from "@/components/ui/Title";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import { DoctorInterface, getDoctor } from "@/data/doctors";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши врачи", url: "/doctors" },
    { label: "" }
]

export default function Doctor() {

    const params = useParams<{doctorId: string}>();
    const doctor: DoctorInterface = getDoctor(params.doctorId);

    breadcrumbs[2].label = doctor.name;

    return <main className="min-h-dvh px-[15px] pt-[110px]">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <section className="mt-7 sm:mt-8 sm:flex sm:items-center sm:gap-8">
            <div className="w-[160px] h-[160px] overflow-hidden rounded-full border border-[#D8DCE4]">
                <Image src={doctor.img} alt={doctor.name} width={200} height={200} className="scale-150 mt-8"/>
            </div>
            <div className="mt-3.5 sm:mt-0">
                <h1 className="text-[30px] text-mainTextColor font-bold">{doctor.name}</h1>
                <span className="text-lg">{doctor.type} / Стаж {doctor.experience} лет</span>
                <Rating amount={5} ratingClassName="gap-1.5 mt-2.5" starClassName="w-5 h-5"/>
            </div>
        </section>
        <section>
            <Title title="До / После" className="text-[33px] mt-16 mb-7"/>

        </section>
    </main>
}