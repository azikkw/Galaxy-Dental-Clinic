import React from "react";
import Link from "next/link";
import { ServiceCardInterface } from "@/data/services";

interface ServiceProps {
    service: ServiceCardInterface
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
    return <Link href={`/services/${service.id}`} className="group !w-full block sm:w-fit p-5 rounded-[15px] bg-secondBlueColor sm:p-[25px] xl:p-[30px]">
        <div className="w-full flex gap-[18px] mb-5 sm:flex-col">
            <service.icon className="size-20 rounded-[10px]"></service.icon>
            <ul className="flex-1 -mt-0.5">
                <li className="text-mainTextColor text-[23px] font-bold mb-0.5 sm:mb-1">{service.name}</li>
                <li className="leading-[22px]">{service.description}</li>
            </ul>
        </div>
        <p className="text-end text-lg font-semibold text-mainBlueColor sm:text-start sm:text-[17px] lg:group-hover:underline">Подробнее...</p>
    </Link>;
}
export default ServiceCard;