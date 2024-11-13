import Title from "@/components/ui/Title";
import Image from "next/image";

const AboutSection = () => {
    return <section id="about" className="lg:mt-5">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="mb-6 md:mb-4 lg:m-0 lg:order-2 lg:w-[500px] lg:h-[330px] lg:flex lg:flex-col lg:justify-between xl:h-[300px]">
                <Title title="Стоматологическая клиника Galaxy Dental Clinic." className="!text-3xl !leading-10 mb-5 lg:m-0"/>
                <div>
                    <p className="text-mainTextColor font-semibold text-[16px]">
                        Мы на рынке более 4 лет,
                        <span className="underline">наша миссия:</span>
                    </p>
                    <p className="text-[16px]">
                        Здоровые зубы — здоровое тело. <br/>
                        Здоровое тело — здоровые мысли. <br/>
                        Здоровые мысли — праведные дела!
                    </p>
                </div>
                <p className="text-[16px]">
                    Сделайте шаг к здоровой и красивой улыбке вместе с нами. Мы предлагаем индивидуальный подход для каждого пациента. Присоединяйтесь к нашему сообществу счастливых людей!
                </p>
            </div>
            <div className="w-full lg:w-[530px] lg:h-[330px] xl:h-[320px]">
                <Image src="/images/home/team.jpg" alt="Команда Galaxy Dental Clinic" width="2000" height="1480" loading="eager" priority className="w-full h-full object-cover rounded-[15px]"/>
            </div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-2.5 mt-7">
            <li className="w-full h-[110px] bg-secondBlueColor flex flex-col justify-center px-4 rounded-[15px]">
                <p className="font-bold text-[25px] text-mainTextColor mb-1">10K+</p>
                <span className="leading-5">Довольных пацентов</span>
            </li>
            <li className="w-full h-[110px] flex flex-col justify-center px-4 rounded-[15px] bg-[#3D6B9D]">
                <p className="text-[25px] text-white mb-1">25 лет</p>
                <span className="leading-5 text-white lg:font-normal opacity-85">Опыта у наших врачей</span>
            </li>
            <li className="w-full h-[110px] flex flex-col justify-center px-4 rounded-[15px] bg-thirdBlueColor">
                <p className="text-[25px] text-white mb-1">1К+</p>
                <span className="leading-5 text-white lg:font-normal opacity-85">Успешных операций</span>
            </li>
            <li className="w-full h-[110px] flex flex-col justify-center px-4 rounded-[15px] bg-blue-400">
                <p className="text-[25px] text-white mb-1">15К+</p>
                <span className="leading-5 text-white lg:font-normal opacity-85">Счастливых улыбок</span>
            </li>
            <li className="w-full h-[110px] flex flex-col justify-center px-4 rounded-[15px] bg-mainBlueColor">
                <p className="text-[25px] text-white mb-1">100%</p>
                <span className="leading-5 text-white lg:font-normal opacity-90">Рекомендуют нас</span>
            </li>
            <li className="w-full h-[110px] flex flex-col justify-center px-4 rounded-[15px] bg-thirdBlueColor">
                <span className="leading-5 text-white lg:font-normal ">Комплексное решение под ключ</span>
            </li>
        </ul>
    </section>
}
export default AboutSection;