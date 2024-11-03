import Title from "@/components/ui/Title";
import Image from "next/image";

const AboutSection = () => {
    return <section id="about">
        <div className="mb-6">
            <Title title="Стоматологическая клиника Galaxy Dental Clinic." className="!text-3xl !leading-10 mb-5"/>
            <p className="text-mainTextColor font-semibold text-[17px]">Мы на рынке более 4 лет, <span className="underline">наша миссия:</span></p>
            <p className="text-[17px]">
                Здоровые зубы — здоровое тело. <br/>
                Здоровое тело — здоровые мысли. <br/>
                Здоровые мысли — праведные дела!
            </p>
        </div>
        <Image src="/images/home/team.jpg" alt="Команда Galaxy Dental Clinic" fill className="!static !w-full md:!w-[500px] rounded-[15px]"/>
    </section>
}
export default AboutSection;