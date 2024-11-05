import React, {SVGProps} from "react";
import {AppointmentIcon, LocationIcon, PhoneIcon, TimeIcon} from "@/app/assets/defaultIcons";

interface NavigationInterface {
    href: string,
    label: string,
    promotionsAmount?: number
}
interface CompanyInfoInterface {
    href: string
    label: string,
    icon: React.FC<SVGProps<SVGSVGElement>>
}

export const navigation: NavigationInterface[] = [
    { href: "/#about", label: "О Нас" },
    { href: "/doctors", label: "Наши врачи" },
    { href: "/#reviews", label: "Отзывы" },
    { href: "/services", label: "Услуги" },
    { href: "/#promotions", label: "Акции и скидки", promotionsAmount: 1 },
    { href: "/#contacts", label: "Контакты" }
]
export const companyInfo: CompanyInfoInterface[] = [
    { href: "https://go.2gis.com/z4vmv", label: "г. Астана, ул. Керей-Жанибек хандар 22", icon: LocationIcon },
    { href: "", label: "Пн-сб с 10:00 до 20:00", icon: TimeIcon },
    { href: "tel:+77757470816", label: "+7 775 747-08-16", icon: PhoneIcon },
    { href: "https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ", label: "zapis-galaxy.pulse.is", icon: AppointmentIcon },
]