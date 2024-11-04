import Title from "@/components/ui/Title";
import Image from "next/image";

const AboutSection = () => {
    return <section id="about" className="lg:flex lg:items-center lg:justify-between lg:gap-10 lg:mt-5">
        <div className="mb-6 md:mb-4 lg:m-0 lg:order-2 lg:w-[500px]">
            <Title title="Стоматологическая клиника Galaxy Dental Clinic." className="!text-3xl !leading-10 mb-5"/>
            <p className="text-mainTextColor font-semibold text-[17px]">Мы на рынке более 4 лет, <span className="underline">наша миссия:</span></p>
            <p className="text-[17px]">
                Здоровые зубы — здоровое тело. <br/>
                Здоровое тело — здоровые мысли. <br/>
                Здоровые мысли — праведные дела!
            </p>
            <ul className="flex gap-2.5 mt-6">
                <li className="w-full h-[110px] sm:h-[120px] bg-secondBlueColor flex flex-col justify-center px-4 rounded-[15px]">
                    <p className="font-bold text-[26px] text-mainTextColor mb-1">10K+</p>
                    <span className="leading-[22px]">Довольных пацентов</span>
                </li>
                <li className="w-full h-[110px] sm:h-[120px] flex flex-col justify-center px-4 rounded-[15px] bg-[#3D6B9D]">
                    <p className="font-medium text-[26px] text-white mb-1">25 лет</p>
                    <span className="leading-[22px] text-white font-normal opacity-85">Опыта у врачей</span>
                </li>
                <li className="w-full h-[110px] sm:h-[120px] flex flex-col justify-center px-4 rounded-[15px] bg-thirdBlueColor">
                    <p className="font-medium text-[26px] text-white mb-1">1К+</p>
                    <span className="leading-[22px] text-white font-normal opacity-85">Успешных операций</span>
                </li>
            </ul>
        </div>
        <div className="w-full lg:w-[530px] lg:h-[350px]">
            <Image src="/images/home/team.jpg" alt="Команда Galaxy Dental Clinic" fill className="!static !w-full !h-full !object-cover rounded-[15px]"/>
        </div>
    </section>
}
export default AboutSection;