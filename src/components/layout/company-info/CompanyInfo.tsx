import React from "react";
import styles from "./CompanyInfo.module.css";
import Link from "next/link";
import { LocationIcon, PhoneIcon, TimeIcon, AppointmentIcon } from "@/app/assets/defaultIcons";
import { InstagramLinkIcon, TelegramLinkIcon, WhatsappLinkIcon } from "@/app/assets/socialMedia";

export default function CompanyInfo({ onClose }: { onClose?: () => void }) {
    return <React.Fragment>
        <div className={styles.infoBlock}>
            <span>Информация</span>
            <ul className={styles.info}>
                {[
                    { href: "/#about", label: "О Нас" },
                    { href: "/doctors", label: "Наши врачи" },
                    { href: "/#reviews", label: "Отзывы" },
                    { href: "/services", label: "Услуги" },
                    { href: "/#promotions", label: "Акции и скидки" },
                    { href: "/#contacts", label: "Контакты" }
                ].map((link) => (
                    <li key={link.href} className="lg:hover:underline">
                        <Link href={link.href} onClick={onClose}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className={styles.infoBlock}>
            <span>Контакты</span>
            <ul className={styles.info}>
                <li><Link href="https://go.2gis.com/z4vmv" target="_blank"><LocationIcon/> г. Астана, ул. Керей-Жанибек хандар 22</Link></li>
                <li><Link href="/"><TimeIcon className="!size-[22px] lg:!size-[19px]"/> Пн-сб с 10:00 до 20:00</Link></li>
                <li><Link href="tel:+77757470816" target="_blank"><PhoneIcon/> +7 775 747-08-16</Link></li>
                <li><Link href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ" target="_blank"><AppointmentIcon/> zapis-galaxy.pulse.is</Link></li>
            </ul>
            <div className={styles.socialMedia}>
                <Link href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank"><InstagramLinkIcon/></Link>
                <Link href="https://click.pulse.is/public/s/Mjc2OTQ4/p/MzMxMTI0/l/aHR0cHM6Ly93YS5saW5rLzh5c3lzMj9mYmNsaWQ9UEFaWGgwYmdOaFpXMENNVEVBQWFZYjZzeGJ1d1lhQ1dTU056aXZZMGRHMlgyNXFITXVHd09rX2RxSlRVV1FyakRzdGNRWFNRSXczdjBfYWVtX2lxRVFRZVpMQjQzUzVhMVZXbDJ2TVE=" target="_blank"><WhatsappLinkIcon/></Link>
                <Link href="https://t.me/Galaxydental_bot?start=tgr_0bc7266d-69df-4803-8214-d0eb7db65861_67824274525889" target="_blank"><TelegramLinkIcon/></Link>
            </div>
        </div>
    </React.Fragment>
}