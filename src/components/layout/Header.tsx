"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import Menu from "@/components/layout/Menu";
import CartLink from "@/components/ui/CartLink";
import { CloseIcon, LocationIcon, MenuIcon, PhoneIcon } from "@/icons/defaultIcons";
import { navigation } from "@/data/companyInfo";
import NotEmpty from "@/components/ui/NotEmpty";

const linkList = [
    { href: "https://go.2gis.com/z4vmv", label: "г. Астана, ул. Керей-Жанибек хандар, 22", icon: LocationIcon, ariaLabel: "Ссылка на местоположение в 2ГИС" },
    { href: "tel:+77757470816", label: "+7 775 747-08-16", icon: PhoneIcon, ariaLabel: "Ссылка на номер телефона" }
]

export default function Header() {

    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 150) setIsFixed(true);
            else setIsFixed(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <header className="w-full xl:flex xl:flex-col xl:items-center">
        <div className="w-full flex items-center justify-between p-[15px] fixed top-0 z-[4] backdrop-blur-[20px] sm:px-6 sm:py-5 md:px-10 lg:static lg:px-[90px] xl:px-0 xl:w-[1050px]">
            <Link href="/" onClick={closeMenu} aria-label="Ссылка на главную страницу">
                <Image src="/images/home/logo.png" alt="Galaxy Dental Clinic" width="1080" height="230" loading="eager" priority className="w-[170px]" />
            </Link>
            {
                menuOpen ? <CloseIcon className="w-8 h-8 m-1 text-mainTextColor lg:hidden" onClick={() => setMenuOpen(false)}/>
                    : <div className="flex items-center gap-2">
                        <ul className="hidden lg:flex items-center gap-5 mr-5 lg:mr-3">
                            {
                                linkList.map((link, index) => (
                                    <li key={index}>
                                        <Link className="flex items-center gap-2 lg:hover:underline" href={link.href} target="_blank" aria-label={link.ariaLabel}>
                                            <link.icon className="size-5 text-mainBlueColor"></link.icon> {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <CartLink generalClassName="!flex"/>
                        <MenuIcon className="w-10 h-10 text-mainTextColor lg:hidden" onClick={() => setMenuOpen(true)}/>
                    </div>
            }
        </div>
        <nav className={clsx("hidden lg:flex lg:justify-center lg:w-full lg:px-[90px] xl:p-0", isFixed && "lg:fixed lg:top-0 lg:z-10 lg:bg-white lg:!py-1.5 lg:border-b lg:border-mainBorderColor")}>
            <ul className={`lg:w-full lg:flex lg:justify-between lg:items-center lg:bg-thirdBlueColor lg:rounded-[15px] lg:px-14 lg:py-3 lg:text-white lg:font-normal xl:w-[1050px] xl:text-[17px] ${isFixed && 'lg:bg-white lg:!text-mainTextColor lg:!font-medium'}`}>
                {
                    navigation.map((link) => (
                        <li key={link.href} className="relative lg:hover:underline">
                            <Link
                                href={link.href}
                                className={clsx({
                                        "underline": pathname === link.href,
                                        "text-mainBlueColor": isFixed && pathname === link.href
                                    }
                                )}
                                aria-label={link.ariaLabel}
                            >
                                {link.label}
                                {
                                    link.label === "Акции" && link.promotionsAmount !== 0 &&
                                    <NotEmpty amount={link.promotionsAmount} className="-right-[18px] -top-0.5"/>
                                }
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <CartLink isFixed={isFixed} textClassName="lg:text-[17px]"/>
        </nav>
        {menuOpen && <Menu onClose={closeMenu}/>}
    </header>
}