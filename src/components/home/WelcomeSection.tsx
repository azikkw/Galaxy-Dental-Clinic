import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AppointmentIcon } from "@/app/assets/defaultIcons";

const WelcomeSection = () => {
    return <section className="h-[700px] overflow-hidden">
        <div className="mb-8 px-[15px]">
            <h1 className="text-4xl leading-[50px] font-bold text-mainTextColor mb-3">
                Рассрочка 0•0•24 от <span className="text-redColor">Kaspi.kz</span>
            </h1>
            <p className="text-[17px] mb-7">Акция действует <span className="font-semibold">с 1 по 13 октября</span></p>
            <Link href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ" target="_blank">
                <Button variant="green" size="lg" className="w-[200px] text-[19px] !py-[27px]"><AppointmentIcon className="!w-6 !h-6"/> Записаться</Button>
            </Link>
        </div>
        <div className="relative">
            <Image src="/images/home/banner.png" alt="Команда Galaxy Dental Clinic" fill className="!static !w-[450px] ml-9"/>
            <span className="w-[450px] h-[450px] rounded-full bg-beigeColor absolute left-0 top-[100px] -z-[1]"></span>
        </div>
    </section>
}
export default WelcomeSection;