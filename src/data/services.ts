import React, { SVGProps } from "react";
import { HygieneIcon, ImplantationIcon, OrthodonticsIcon, OrthopedicsIcon, SurgeryIcon, TherapyIcon } from "@/app/assets/servicesIcons";

export interface ServicesInterface {
    id: string,
    name: string,
    description: string,
    icon: React.FC<SVGProps<SVGSVGElement>>,
    img: string
}

export const services: ServicesInterface[] = [
    { id: "s1", name: "Проф. гигиена", description: "Комплексная чистка и уход за зубами и деснами", icon: HygieneIcon, img: "" },
    { id: "s2", name: "Терапия", description: "Лечение кариеса, пульпита и инфекций", icon: TherapyIcon, img: "" },
    { id: "s3", name: "Хирургия", description: "Операция по удалению и сохранению зубов", icon: SurgeryIcon, img: "/images/s3.png" },
    { id: "s4", name: "Имплантация", description: "Восстановление зуба с помощью импланта", icon: ImplantationIcon, img: "" },
    { id: "s5", name: "Ортопедия", description: "Восстановление зубов с помощью коронок", icon: OrthopedicsIcon, img: "" },
    { id: "s6", name: "Ортодонтия", description: "Исправление зубов и установка брекет-систем", icon: OrthodonticsIcon, img: "/images/s6.png" }
]

export const getService = (id: string): ServicesInterface => {
    return <ServicesInterface>services.find((service) => service.id === id);
}