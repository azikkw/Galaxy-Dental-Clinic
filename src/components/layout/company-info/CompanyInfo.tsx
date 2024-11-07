import React from "react";
import styles from "./CompanyInfo.module.css";
import Link from "next/link";
import { InstagramLinkIcon, TelegramLinkIcon, WhatsappLinkIcon } from "@/icons/socialMedia";
import { companyInfo, navigation } from "@/data/companyInfo";
import NotEmpty from "@/components/ui/NotEmpty";

export default function CompanyInfo({ onClose }: { onClose?: () => void }) {
    return <React.Fragment>
        <div className={styles.infoBlock}>
            <span>Информация</span>
            <ul className={styles.info}>
                {
                    navigation.map((link) => (
                        <li key={link.href} className="relative lg:hover:underline">
                            <Link href={link.href} onClick={onClose}>
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
        </div>
        <div className={styles.infoBlock}>
            <span>Контакты</span>
            <ul className={styles.info}>
                {
                    companyInfo.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}><link.icon/>{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className={styles.socialMedia}>
                <Link href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank" aria-label="Ссылка на инстаграм"><InstagramLinkIcon/></Link>
                <Link href="https://click.pulse.is/public/s/Mjc2OTQ4/p/MzMxMTI0/l/aHR0cHM6Ly93YS5saW5rLzh5c3lzMj9mYmNsaWQ9UEFaWGgwYmdOaFpXMENNVEVBQWFZYjZzeGJ1d1lhQ1dTU056aXZZMGRHMlgyNXFITXVHd09rX2RxSlRVV1FyakRzdGNRWFNRSXczdjBfYWVtX2lxRVFRZVpMQjQzUzVhMVZXbDJ2TVE=" target="_blank" aria-label="Ссылка на WhatsApp"><WhatsappLinkIcon/></Link>
                <Link href="https://t.me/Galaxydental_bot?start=tgr_0bc7266d-69df-4803-8214-d0eb7db65861_67824274525889" target="_blank" aria-label="Ссылка на телеграм"><TelegramLinkIcon/></Link>
            </div>
        </div>
    </React.Fragment>
}