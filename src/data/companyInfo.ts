import React, { SVGProps } from "react";
import { AppointmentIcon, LocationIcon, PhoneIcon, TimeIcon } from "@/icons/defaultIcons";

interface NavigationInterface {
    href: string,
    label: string,
    promotionsAmount?: number,
    ariaLabel: string
}
interface CompanyInfoInterface {
    href: string
    label: string,
    icon: React.FC<SVGProps<SVGSVGElement>>,
    ariaLabel: string
}

export const navigation: NavigationInterface[] = [
    { href: "/#o-klinike", label: "О Нас", ariaLabel: "Ссылка на секцию о нас" },
    { href: "/vrachi", label: "Наши врачи", ariaLabel: "Ссылка на страницу врачей" },
    { href: "/#reviews", label: "Отзывы", ariaLabel: "Ссылка на отзывы" },
    { href: "/#o-korzine", label: "Что-за корзина?", ariaLabel: "Ссылка на секцию про корзину" },
    { href: "/uslugi", label: "Услуги", ariaLabel: "Ссылка на страницу услуг" },
    { href: "/#promotions", label: "Акции", promotionsAmount: 0, ariaLabel: "Ссылка на секцию акций" },
    { href: "/#contacts", label: "Контакты", ariaLabel: "Ссылка на секцию контакты" }
]
export const companyInfo: CompanyInfoInterface[] = [
    { href: "https://go.2gis.com/z4vmv", label: "г. Астана, ул. Керей-Жанибек хандар, 22", icon: LocationIcon, ariaLabel: "Ссылка на местоположение в 2ГИС" },
    { href: "#", label: "Пн-сб с 10:00 до 20:00", icon: TimeIcon, ariaLabel: "Рабочий график" },
    { href: "tel:+77757470816", label: "+7 775 747-08-16", icon: PhoneIcon, ariaLabel: "Ссылка на номер телефона" },
    { href: "https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ", label: "zapis-galaxy.pulse.is", icon: AppointmentIcon, ariaLabel: "Ссылка на zapis-galaxy" },
]