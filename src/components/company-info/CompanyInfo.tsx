import React from "react";
import styles from "./CompanyInfo.module.css";
import Link from "next/link";
import { InstagramLinkIcon, LocationIcon, PhoneIcon, TelegramLinkIcon, TimeIcon, WhatsappLinkIcon, AppointmentIcon } from "@/app/assets/icons";

export default function CompanyInfo() {
    return <React.Fragment>
        <div className={styles.infoBlock}>
            <span>Информация</span>
            <ul className={styles.info}>
                <li><Link href="/#about">О Нас</Link></li>
                <li><Link href={"/doctors"}>Наши врачи</Link></li>
                <li><Link href="/#feedback">Отзывы</Link></li>
                <li><Link href={"/services"}>Услуги</Link></li>
                <li><Link href="/#promotions">Акции и скидки</Link></li>
                <li><Link href="/#contacts">Контакты</Link></li>
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
                <Link href="https://click.pulse.is/public/s/Mjc2OTQ4/p/MzMxMTI0/l/aHR0cHM6Ly90Zy5wdWxzZS5pcy9HYWxheHlkZW50YWxfYm90P3N0YXJ0PTY2NTYxOWQxMThiYWUzM2M1MjA3ZDQ2Yg==" target="_blank"><TelegramLinkIcon/></Link>
            </div>
        </div>
    </React.Fragment>
}