import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AppointmentIcon } from "@/icons/defaultIcons";

const WelcomeSection = () => {
    return <section className="border-b border-mainBorderColor overflow-hidden lg:flex xl:justify-center">
        <div className="relative sm:px-6 md:px-10 lg:w-full lg:flex lg:items-end lg:px-[90px] lg:h-[550px] xl:px-0 xl:w-[1050px]">
            <div className="mb-8 px-[15px] sm:px-0 lg:h-full lg:w-[620px] lg:flex lg:flex-col lg:justify-center">
                <span className="text-lg font-semibold text-mainTextColor">27 ноября</span>
                <h1 className="text-4xl leading-[50px] font-bold text-mainTextColor mb-5 sm:w-[500px] lg:text-[37px] lg:font-black lg:mb-4 xl:text-[40px] lg:leading-[55px]">
                    <span className="text-mainBlueColor">День Улыбки</span> в Galaxy Dental Clinic
                </h1>
                <ul className="inline-flex flex-wrap items-center gap-2 mb-4 text-[15px] text-white">
                    <li className="text-[17px] text-secondTextColor">Бесплатно:</li>
                    <li className="bg-blue-400 text-center px-3 py-2 rounded-lg">👨🏻‍⚕️Консультация</li>
                    <li className="bg-thirdBlueColor text-center px-3 py-2 rounded-lg">🔬3Д-сканирование</li>
                    <li className="bg-mainBlueColor text-center px-3 py-2 rounded-lg">📷Фотопротокол</li>
                </ul>
                <h3 className="sm:text-[17px] mb-7 sm:w-[500px] lg:mb-9"><span className="font-bold">Только 27 ноября, </span>первым 3-м пациентам, которые совершили оплату <span className="font-bold text-redColor">скидка 10%</span> на элайнеры Invisalign!</h3>
                <Link href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ" target="_blank">
                    <Button variant="green" size="lg" className="w-[230px] text-[19px] !py-[27px] lg:w-[225px]" aria-label="Кнопка для узнать больше">
                        <AppointmentIcon className="!w-6 !h-6"/> Узнать больше
                    </Button>
                </Link>
            </div>
            <div className="lg:absolute lg:right-5 xl:-right-16 -z-[1] w-full lg:w-fit">
                <Image src="/images/home/aligners.png" alt="Команда Galaxy Dental Clinic" loading="eager" priority width="1100" height="1100" className="relative w-full lg:-mt-6 lg:ml-20 lg:w-[580px]"/>
            </div>
        </div>
    </section>
}
export default WelcomeSection;