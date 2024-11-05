import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AppointmentIcon } from "@/app/assets/defaultIcons";

const WelcomeSection = () => {
    return <section className="border-b border-mainBorderColor overflow-hidden lg:flex lg:justify-center">
        <div className="sm:px-6 md:px-10 lg:flex lg:items-end lg:px-[90px] xl:px-0 xl:w-[1050px]">
            <div className="mb-8 px-[15px] sm:px-0 lg:h-full sm:w-[500px] lg:w-[600px] lg:flex lg:flex-col lg:justify-center">
                <h1 className="text-4xl leading-[50px] font-bold text-mainTextColor mb-3 lg:text-[37px] lg:font-black lg:mb-5 xl:text-[40px] lg:leading-[55px]">
                    <span className="text-mainBlueColor">День Улыбки</span> в Galaxy Dental Clinic
                </h1>
                <p><span className="font-bold">Только 27 ноября,</span> абсолютно бесплатно вы получите:</p>
                <ul className="mb-3 mt-0.5 ml-7 list-disc">
                    <li>Бесплатную консультацию</li>
                    <li>Фотопротокол</li>
                    <li>3Д сканирование</li>
                </ul>
                <p className="mb-7 lg:mb-9">
                    <span className="font-bold">Первым 3-м пациентам</span> оплатившим 27-го числа будет <span className="font-bold text-redColor">скидка 10%</span> на элайнеры!
                </p>
                {/*<p className="text-[17px] mb-7 lg:mb-11">Акция действует <span className="font-bold">с 1 по 13 октября</span></p>*/}
                <Link href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ" target="_blank">
                    <Button variant="green" size="lg" className="w-[230px] text-[19px] !py-[27px] lg:w-[225px]"><AppointmentIcon className="!w-6 !h-6"/> Узнать больше</Button>
                </Link>
            </div>
            <div className="w-[500px] sm-custom:w-[600px] sm:w-full sm:max-h-[650px] lg:w-fit lg:max-h-[500px] xl:max-h-[550px]">
                <Image src="/images/home/aligners.png" alt="Команда Galaxy Dental Clinic" fill className="!static !w-full -ml-[50px] lg:!ml-[60px] lg:!-mt-6 lg:!w-[650px] xl:!w-[750px]"/>
            </div>
        </div>
    </section>
}
export default WelcomeSection;