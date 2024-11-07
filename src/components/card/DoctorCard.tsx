import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";
import { DoctorInterface } from "@/data/doctors";
import {cn} from "@/lib/utils";

interface DoctorProps {
    doctor: DoctorInterface,
    className?: string,
}

const DoctorCard: React.FC<DoctorProps> = ({ doctor, className }) => {
    return <Link href={`/doctors/${doctor.id}`} className={cn("relative w-full block border border-mainBorderColor rounded-2xl lg:hover:border-hoverBorderColor", className)}>
        <p className="w-[130px] py-[7px] text-center absolute left-[18px] top-[18px] text-mainBlueColor text-[17px] font-bold bg-white rounded-[8px] lg:w-[115px] lg:text-[15.5px]">Стаж {doctor.experience} лет</p>
        <Image src={doctor.img} alt={doctor.name} fill className="!static !w-full !h-[350px] object-cover rounded-t-[15px] sm:!h-[270px] md:!h-[320px] lg:!h-[280px]"/>
        <div className="px-[18px] py-[18px]">
            <div className="flex flex-col mb-[18px]">
                <span className="text-[23px] font-bold text-mainTextColor lg:text-[21px]">{doctor.name}</span>
                <span className="text-lg lg:text-[17px]">{doctor.type}</span>
                <Rating amount={5} ratingClassName="gap-1.5 mt-2" starClassName="w-[18px] h-[18px]"/>
            </div>
            <Button className="w-full text-lg lg:!h-[52px] lg:text-[17px]" aria-label="Подробнее о враче">Подробнее...</Button>
        </div>
    </Link>
}
export default DoctorCard;