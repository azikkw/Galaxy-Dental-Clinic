import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AppointmentIcon } from "@/icons/defaultIcons";

const WelcomeSection = () => (
    <section className="h-[700px] border-b border-mainBorderColor overflow-hidden sm-custom:h-[800px] sm:h-fit lg:flex lg:justify-center">
        <div className="sm:px-6 md:px-10 lg:flex lg:items-end lg:px-[90px] xl:px-0 xl:w-[1050px]">
            <div className="mb-8 px-[15px] sm:px-0 lg:h-full sm:w-[500px] lg:w-[600px] lg:flex lg:flex-col lg:justify-center">
                <h1 className="text-4xl leading-[50px] font-bold text-mainTextColor mb-3 lg:text-[37px] lg:font-black lg:mb-8 xl:text-[40px] lg:leading-[55px]">
                    Galaxy Dental Clinic
                </h1>
                <p className="text-[17px] mb-7 lg:mb-11">Ваша уверенность в качестве и безопасности.</p>
                <Link
                    href="https://zapis-galaxy.pulse.is/?fbclid=PAZXh0bgNhZW0CMTEAAaYb6sxbuwYaCWSSNzivY0dG2X25qHMuGwOk_dqJTUWQrjDstcQXSQIw3v0_aem_iqEQQeZLB43S5a1VWl2vMQ"
                    target="_blank"
                >
                    <Button variant="green" size="lg" className="w-[200px] text-[19px] !py-[27px] lg:w-[210px]">
                        <AppointmentIcon className="!w-6 !h-6" /> Записаться
                    </Button>
                </Link>
            </div>
            <div className="w-[450px] sm-custom:w-[600px] sm:w-full sm:max-h-[650px] lg:w-fit lg:max-h-[500px] xl:max-h-[550px]">
                <Image
                    src="/images/home/banner2.png"
                    alt="Команда Galaxy Dental Clinic"
                    className="!static !w-full lg:!ml-[30px] lg:!w-[560px]"
                    fill
                />
            </div>
        </div>
    </section>
);

export default WelcomeSection;