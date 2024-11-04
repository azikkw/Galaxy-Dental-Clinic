"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/layout/menu/Menu";
import { CloseIcon, InstagramIcon, LocationIcon, MenuIcon, PhoneIcon } from "@/app/assets/defaultIcons";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 130) setIsFixed(true);
            else setIsFixed(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <header className="w-full xl:flex xl:flex-col xl:items-center">
        <div className="w-full flex items-center justify-between p-[15px] fixed top-0 z-[3] backdrop-blur-[20px] sm:px-6 sm:py-5 md:px-10 lg:static lg:px-[90px] xl:px-0 xl:w-[1050px]">
            <Link href="/" onClick={closeMenu}>
                <Image src="/images/home/logo.png" alt="Galaxy Dental Clinic" width="170" height="36"/>
            </Link>
            {
                menuOpen ? <CloseIcon className="w-8 h-8 m-1 text-mainTextColor lg:hidden" onClick={() => setMenuOpen(false)}/>
                    : <div className="flex items-center gap-2">
                        <ul className="hidden lg:flex items-center gap-5 mr-5">
                            <li><Link className="flex items-center gap-2" href="https://go.2gis.com/z4vmv" target="_blank"><LocationIcon className="size-5 text-mainBlueColor"/> г. Астана, ул. Керей-Жанибек хандар 22</Link></li>
                            <li><Link className="flex items-center gap-2" href="tel:+77757470816" target="_blank"><PhoneIcon className="size-5 text-mainBlueColor"/> +7 775 747-08-16</Link></li>
                        </ul>
                        <Link href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank">
                            <InstagramIcon className="size-[34px] lg:size-[26px] text-secondTextColor lg:text-mainBlueColor"/>
                        </Link>
                        <MenuIcon className="w-10 h-10 text-mainTextColor lg:hidden" onClick={() => setMenuOpen(true)}/>
                    </div>
            }
        </div>
        <nav className={`hidden lg:flex lg:justify-center lg:w-full lg:px-[90px] xl:p-0 ${isFixed && 'lg:fixed lg:top-0 lg:z-10 lg:bg-white lg:!py-1.5 lg:border-b lg:border-mainBorderColor'}`}>
            <ul className={`lg:w-full lg:flex lg:justify-between lg:items-center lg:bg-thirdBlueColor lg:rounded-[15px] lg:px-14 lg:py-3 lg:text-white lg:font-normal xl:w-[1050px] xl:text-[17px] ${isFixed && 'lg:bg-white lg:text-mainTextColor lg:!font-medium'}`}>
                {[
                    { href: "/#about", label: "О Нас" },
                    { href: "/doctors", label: "Наши врачи" },
                    { href: "/#reviews", label: "Отзывы" },
                    { href: "/services", label: "Услуги" },
                    { href: "/#promotions", label: "Акции и скидки" },
                    { href: "/#contacts", label: "Контакты" }
                ].map((link) => (
                    <li key={link.href} className="lg:hover:underline">
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        {menuOpen && <Menu onClose={closeMenu}/>}
    </header>
}