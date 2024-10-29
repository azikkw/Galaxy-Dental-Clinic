import styles from "./Menu.module.css";
import CompanyInfo from "@/components/company-info/CompanyInfo";

export default function Menu() {
    return <div className={styles.menu}>
        <CompanyInfo/>
    </div>
}