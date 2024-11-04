import styles from "./Footer.module.css";
import Image from "next/image";
import CompanyInfo from "@/components/layout/company-info/CompanyInfo";

export default function Footer() {
    return <footer className={styles.footer}>
        <div className="w-full xl:w-[1050px] lg:flex lg:justify-between">
            <div className="mr-14">
                <Image src="/images/home/logo.png" alt="Galaxy Dental Clinic" width="190" height="36"/>
                <p className="mt-5 lg:max-w-[300px]">Лучшая стоматологическая клиника в г. Астана. Ваша улыбка наша
                    радость.</p>
                <p className={styles.company}>© 2021-2024 Galaxy Dental Clinic</p>
            </div>
            <div className="sm:flex sm:gap-[90px] lg:gap-[70px] xl:gap-[90px]"><CompanyInfo/></div>
        </div>
    </footer>;
}