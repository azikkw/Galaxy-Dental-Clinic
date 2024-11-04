import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { AppointmentIcon } from "@/app/assets/defaultIcons";

const PromotionsSection = () => {
    return <section id="promotions">
        <Title title="Акции и скидки" className="mb-7"/>
        <div className="bg-secondBlueColor pt-8 rounded-[15px] overflow-hidden sm:pt-12 lg:h-[280px] lg:pt-0 lg:flex lg:items-end">
            <div className="px-5 mb-10 sm:mb-16 sm:px-10 lg:pr-0 lg:mb-0 lg:h-full lg:flex lg:flex-col lg:justify-center">
                <p className="font-bold text-[33px] leading-[45px] text-mainTextColor mb-4 lg:mb-5 lg:text-[28px] lg:leading-[40px]">
                    Рассрочка 0•0•24 от <span className="text-redColor">Kaspi.kz</span>
                </p>
                <p className="sm:mb-3 lg:mb-7">Отличная возможность получить качественное стоматологическое обслуживание без забот о финансах!</p>
                <p className="mb-6 lg:hidden">Акция действует <span className="font-bold">с 1 по 13 октября</span></p>
                <Link className="lg:flex lg:items-center lg:gap-5" href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ" target="_blank">
                    <Button variant="green" size="lg" className="w-[180px] text-[17px]"><AppointmentIcon className="!w-5 !h-5"/> Записаться</Button>
                    <p className="font-bold text-[17px] hidden lg:block">С 1 по 13 октября</p>
                </Link>
            </div>
            <Image src="/images/home/promotion.png" alt="Команда Galaxy Dental Clinic" fill className="!static !w-full object-cover sm:!h-auto lg:!w-auto md:-mb-3 md:-mr-20 lg:!h-[250px] xl:!h-[265px]"/>
        </div>
    </section>
}
export default PromotionsSection;