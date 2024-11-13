"use client";

import React from "react";
import Image from "next/image";
import MainBlock from "@/components/ui/MainBlock";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import Title from "@/components/ui/Title";
import Rating from "@/components/ui/Rating";
import { DoctorInterface, DoctorWorksInterface } from "@/data/doctors";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

interface DoctorProps {
    doctor: DoctorInterface;
    doctorWorks: DoctorWorksInterface;
}

const Doctor: React.FC<DoctorProps> = ({ doctor, doctorWorks }) => {

    const breadcrumbs = [
        { label: "Главная", url: "/" },
        { label: "Наши врачи", url: "/doctors" },
        { label: doctor.name }
    ]

    return <MainBlock>
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <section className="mt-7 sm:mt-8 sm:flex sm:items-center sm:gap-8">
            <div className="w-[160px] h-[160px] overflow-hidden rounded-full border border-[#D8DCE4]">
                <Image src={doctor.img} alt={doctor.name} width="1500" height="1500" loading="eager" priority className="static w-full scale-150 mt-8"/>
            </div>
            <div className="mt-3.5 sm:mt-0">
                <h1 className="text-[30px] text-mainTextColor font-bold sm:text-[33px]">{doctor.name}</h1>
                <span className="text-lg">{doctor.type} / Стаж {doctor.experience} лет</span>
                <Rating amount={5} ratingClassName="gap-1.5 mt-2.5" starClassName="w-5 h-5"/>
            </div>
        </section>
        <section>
            <Title title="До / После" className="mt-20 mb-7"/>
            <div className="grid md:grid-cols-2 justify-between gap-y-7 md:gap-x-3 md:gap-y-6 lg:gap-x-5 lg:gap-y-6 xl:gap-7">
                {
                    doctorWorks.works.map((work, index) => (
                        <div key={index} className="w-full">
                            {
                                work.before ? <ReactCompareSlider
                                    className="w-full md:h-auto rounded-[15px] mb-2 sm:mb-3"
                                    itemOne={<ReactCompareSliderImage src={work.before} alt={`Работа до от ${doctor.name}`}/>}
                                    itemTwo={<ReactCompareSliderImage src={work.after} alt={`Работа после от ${doctor.name}`}/>}
                                    onlyHandleDraggable
                                /> : <Image
                                    src={work.after}
                                    alt={`Работа после от ${doctor.name}`}
                                    width="1500"
                                    height="700"
                                    className="w-full md:h-auto rounded-[15px] mb-2 sm:mb-3"
                                />
                            }
                            <span className="sm:text-[17px] lg:text-base">{work.description}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    </MainBlock>
}
export default Doctor;