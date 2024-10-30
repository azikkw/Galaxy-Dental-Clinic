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
                <li><Link href="/#about" onClick={onClose}>О Нас</Link></li>
                <li><Link href={"/doctors"} onClick={onClose}>Наши врачи</Link></li>
                <li><Link href="/#feedback" onClick={onClose}>Отзывы</Link></li>
                <li><Link href={"/services"} onClick={onClose}>Услуги</Link></li>
                <li><Link href="/#promotions" onClick={onClose}>Акции и скидки</Link></li>
                <li><Link href="/#contacts" onClick={onClose}>Контакты</Link></li>
            </ul>
        </div>
        <div className={styles.infoBlock}>
            <span>Контакты</span>
            <ul className={styles.info}>
                <li><Link href="https://go.2gis.com/z4vmv" target="_blank"><LocationIcon/> г. Астана, ул. Керей-Жанибек хандар 22</Link></li>
                <li><Link href="/"><TimeIcon className="!w-[22px] !h-[22px]"/> Пн-сб с 10:00 до 20:00</Link></li>
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