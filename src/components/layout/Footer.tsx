import Image from "next/image";
import CompanyInfo from "@/components/layout/company-info/CompanyInfo";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return <footer className="px-[15px] pt-10 pb-[110px] text-[17px] relative border-t border-mainBorderColor sm:px-6 md:px-10 lg:px-[90px] lg:w-full lg:flex lg:justify-center lg:text-base lg:pb-12">
        <div className="w-full xl:w-[1050px] lg:flex lg:justify-between">
            <div className="mr-14">
                <Link href="/">
                    <Image src="/images/home/logo.png" alt="Galaxy Dental Clinic" width="190" height="36"/>
                </Link>
                <p className="mt-5 lg:max-w-[300px]">Лучшая стоматологическая клиника в г. Астана. Ваша улыбка наша
                    радость.</p>
                <p className="w-full h-[70px] flex items-center justify-center absolute left-0 bottom-0 mt-4 border-t border-mainBorderColor text-mainTextColor font-bold lg:static lg:border-none lg:block">
                    © 2021-2024 Galaxy Dental Clinic
                </p>
            </div>
            <div className="sm:flex sm:gap-[90px] lg:gap-[70px] xl:gap-[90px]"><CompanyInfo/></div>
        </div>
    </footer>;
}