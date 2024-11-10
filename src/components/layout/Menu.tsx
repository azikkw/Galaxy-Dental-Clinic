import CompanyInfo from "@/components/layout/company-info/CompanyInfo";

export default function Menu({ onClose }: { onClose: () => void }) {
    return <div className="w-full h-dvh pt-[70px] px-[15px] fixed left-0 top-0 z-[3] bg-white text-[17px] sm:px-6 md:px-10 lg:hidden before:w-full before:h-[1px] before:block before:absolute before:left-0 before:top-[70px] sm:before:top-20 before:bg-mainBorderColor">
        <CompanyInfo onClose={onClose}/>
    </div>
}