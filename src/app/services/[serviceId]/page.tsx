"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import MainBlock from "@/components/ui/MainBlock";
import UseBreadcrumb from "@/components/ui/breadcrumb/UseBreadcrumb";
import DoctorCard from "@/components/card/DoctorCard";
import Title from "@/components/ui/Title";
import {
    getService,
    getServicePrice,
    ServiceCategoryInterface,
    ServicePriceInterface,
    ServicesInterface
} from "@/data/services";
import { doctors, DoctorInterface } from "@/data/doctors";
import { Button } from "@/components/ui/Button";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши услуги", url: "/services" },
    { label: "" }
]

export default function Service() {

    const params = useParams<{serviceId: string}>();
    const service: ServicesInterface = getService(params.serviceId);
    const servicePrice: ServicePriceInterface = getServicePrice(params.serviceId);
    const [selectedServiceCategory, setSelectedServiceCategory] = useState<ServiceCategoryInterface>(servicePrice.categories[0]);

    breadcrumbs[2].label = service.name;

    const availableDoctors: DoctorInterface[] = doctors.filter((doctor) => doctor.services?.includes(service.id));

    const selectCategory = (name: string) => {
        const category = servicePrice.categories.find((category) =>
            category.name === name
        ) as ServiceCategoryInterface;
        setSelectedServiceCategory(category);
    }

    return <MainBlock className="relative">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <section className="w-full bg-[#EEF7FF] h-[540px] rounded-b-[20px] absolute left-0 top-0 -z-[1] pt-[150px] px-[15px] sm-custom:h-[650px] sm:px-6 md:static md:flex md:items-center md:justify-between md:h-[200px] md:overflow-hidden md:rounded-[15px] md:p-0 md:pl-8 md:mt-6 lg:pl-12">
            <div>
                <Title title={service.name} className="mb-1 sm:mt-3 md:mt-0 lg:-mt-3.5"/>
               <span className="text-lg md:text-[17px] lg:text-lg">{service.description}</span>
            </div>
            <div className="w-full absolute right-0 bottom-0 flex justify-center md:static sm:w-[550px] md:w-[460px]">
                <Image src={service.img} alt={service.name} fill className="!static !w-full object-cover rounded-b-[20px] lg:rounded-none" />
            </div>
        </section>
        <section className="mt-[500px] sm-custom:mt-[600px] md:mt-20">
            <Title title="Цены" className="mb-7"/>
            <div className={service.categories.length > 1 ? "inline-flex flex-wrap gap-2 mb-9" : ""}>
                {
                    service.categories.length > 1 && service.categories.map((name, index) => (
                        <Button onClick={() => selectCategory(name)} key={index} variant="outline" size="sm" className="text-[15px] px-4">{name}</Button>
                    ))
                }
            </div>
            <div className="flex flex-col gap-y-7 lg:gap-y-9">
                {
                    selectedServiceCategory.types.map((category, index) => (
                        <div key={index} className="bg-[#C7D3E3] rounded-[15px] border border-mainBorderColor">
                            <ul className="flex items-center px-[15px] py-[18px] text-mainTextColor text-lg font-semibold leading-[26px] md:px-7 md:py-5 lg:px-8">
                                <li className="md:w-[75%]">{category.name}</li>
                                <li className="hidden md:block md:w-[25%] md:pl-[5%]">Цена</li>
                            </ul>
                            <ul className="bg-white rounded-b-[15px]">
                                {
                                    category.price.map((priceItem, index) => (
                                        <li key={index} className="flex flex-col gap-y-1.5 p-[15px] border-t border-mainBorderColor md:flex-row md:items-center md:px-7 md:py-[18px] lg:px-8">
                                            <span className="md:w-[75%]">{priceItem.service}</span>
                                            <span className="text-mainTextColor text-[17px] font-semibold text-end md:w-[25%] md:pl-[5%] md:text-start">{priceItem.amount} тг</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
        <section className="mt-20">
            <Title title="Лечащие врачи" className="mb-7"/>
            <div className="flex flex-col md:flex-row gap-6">
                {
                    availableDoctors.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor}/>
                    ))
                }
            </div>
        </section>
    </MainBlock>
}