import React from "react";
import Link from "next/link";
import { ServicesInterface } from "@/data/services";

interface ServiceProps {
    service: ServicesInterface
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
    return <Link href={`/services/${service.id}`} className="w-full block sm:w-fit p-5 rounded-[15px] bg-secondBlueColor mb-6">
        <div className="w-full flex gap-[18px] mb-5">
            <service.icon className="w-[80px] h-[80px] rounded-[10px]"></service.icon>
            <ul className="flex-1 -mt-0.5">
                <li className="text-mainTextColor text-[23px] font-bold mb-0.5">{service.name}</li>
                <li className="leading-[22px]">{service.description}</li>
            </ul>
        </div>
        <p className="text-end text-lg font-semibold text-mainBlueColor">Подробнее...</p>
    </Link>;
}
export default ServiceCard;