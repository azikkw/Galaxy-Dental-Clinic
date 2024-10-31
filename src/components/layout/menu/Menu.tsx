import styles from "./Menu.module.css";
import CompanyInfo from "@/components/layout/company-info/CompanyInfo";

export default function Menu({ onClose }: { onClose: () => void }) {
    return <div className={styles.menu}>
        <CompanyInfo onClose={onClose}/>
    </div>
}