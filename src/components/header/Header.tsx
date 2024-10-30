"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/menu/Menu";
import { CloseIcon, InstagramIcon, MenuIcon } from "@/app/assets/icons";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return <div>
        <header className="w-full flex items-center justify-between p-[15px] fixed top-0 left-0 z-[3] backdrop-blur-[20px]">
            <Link href="/">
                <Image src="/images/logo.png" alt="Galaxy Dental Clinic" width="170" height="36"/>
            </Link>
            <div className="flex items-center gap-2">
                <Link href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank">
                    <InstagramIcon className="w-[34px] h-[34px] text-secondTextColor"/>
                </Link>
                {
                    menuOpen ? <CloseIcon className="w-8 h-8 m-1 text-mainTextColor" onClick={() => setMenuOpen(false)}/>
                        : <MenuIcon className="w-10 h-10 text-mainTextColor" onClick={() => setMenuOpen(true)}/>
                }
            </div>
        </header>
        { menuOpen ? <Menu/> : '' }
    </div>
}