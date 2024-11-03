import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { AppointmentIcon } from "@/app/assets/defaultIcons";

const PromotionsSection = () => {
    return <Section id="promotions">
        <Title title="Акции и скидки" className="mb-7"/>
        <div className="bg-secondBlueColor pt-8 rounded-[15px] overflow-hidden">
            <div className="px-5 mb-10">
                <p className="font-bold text-[33px] leading-[45px] text-mainTextColor mb-4">
                    Рассрочка 0•0•24 от <span className="text-redColor">Kaspi.kz</span>
                </p>
                <p>Отличная возможность получить качественное стоматологическое обслуживание без забот о финансах!</p>
                <p className="mb-6">Акция действует <span className="font-bold">с 1 по 13 октября</span></p>
                <Link href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ" target="_blank">
                    <Button variant="green" size="lg" className="w-[180px] text-[17px]"><AppointmentIcon className="!w-5 !h-5"/> Записаться</Button>
                </Link>
            </div>
            <Image src="/images/home/promotion.png" alt="Команда Galaxy Dental Clinic" fill className="!static !w-auto !h-[240px] md:!h-[300px] object-cover"/>
        </div>
    </Section>
}
export default PromotionsSection;