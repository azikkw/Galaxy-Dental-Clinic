import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";
import { DoctorInterface } from "@/data/doctors";

interface DoctorProps {
    doctor: DoctorInterface
}

const DoctorCard: React.FC<DoctorProps> = ({ doctor }) => {
    return <Link href={`/doctors/${doctor.id}`} className="relative w-full sm:!w-[380px] block border border-mainBorderColor rounded-2xl mb-7">
        <p className="w-[130px] py-[7px] text-center absolute left-5 top-5 text-mainBlueColor text-[17px] font-bold bg-white rounded-[8px]">Стаж {doctor.experience} лет</p>
        <Image src={doctor.img} alt={doctor.name} width={350} height={350} className="w-full h-[350px] sm:h-[330px] object-cover rounded-t-[15px]" />
        <div className="px-5 py-[18px]">
            <div className="flex flex-col mb-[18px]">
                <span className="text-[23px] font-bold text-mainTextColor">{doctor.name}</span>
                <span className="text-lg">{doctor.type}</span>
                <Rating amount={5} ratingClassName="gap-1.5 mt-2" starClassName="w-[18px] h-[18px]"/>
            </div>
            <Button className="w-full">Подробнее...</Button>
        </div>
    </Link>
}
export default DoctorCard;