import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { AppointmentIcon } from "@/icons/defaultIcons";

const PromotionsSection = () => {
    return <section id="promotions">
        <Title title="Акции и скидки" className="mb-7"/>
        <div className="bg-secondBlueColor pt-8 rounded-[15px] overflow-hidden sm:pt-12 lg:h-[280px] lg:pt-0 lg:flex lg:items-end">
            <div className="px-5 mb-10 sm:mb-16 sm:px-10 lg:pr-0 lg:mb-0 lg:h-full lg:flex lg:flex-col lg:justify-center">
                <p className="font-bold text-[33px] leading-[45px] text-mainTextColor mb-4 lg:mb-5 lg:text-[28px] lg:leading-[40px]">
                    Рассрочка 0•0•12 от <span className="text-redColor">Kaspi.kz</span>
                </p>
                <p className="sm:mb-3 lg:mb-7">Отличная возможность получить качественное стоматологическое обслуживание без забот о финансах!</p>
                <p className="mb-6 lg:hidden">Акция действует <span className="font-bold">с 11 по 28 ноября</span></p>
                <Link className="lg:flex lg:items-center lg:gap-5" href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ" target="_blank">
                    <Button variant="green" size="lg" className="w-[180px] text-[17px]" aria-label="Ссылка для записи"><AppointmentIcon className="!w-5 !h-5"/> Записаться</Button>
                    <p className="font-bold text-[17px] hidden lg:block">С 11 по 28 ноября</p>
                </Link>
            </div>
            <Image src="/images/home/promotion.png" alt="Команда Galaxy Dental Clinic" width="1200" height="578" className="w-full h-[220px] object-cover sm-custom:h-auto md:-mb-3 md:-mr-10 lg:w-auto lg:h-[250px] xl:h-[265px]"/>
        </div>
    </section>
}
export default PromotionsSection;