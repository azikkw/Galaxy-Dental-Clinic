import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";

const InstagramSection = () => {
    return <Section className="relative sm:flex items-center">
        <div className="md:w-[500px]">
            <Title title="Посетите наш блог в Instagram" className="mb-4 leading-[45px]"/>
            <p className="mb-7">Посетите наш блог в Instagram и узнайте больше о здоровье зубов и полости рта! Делимся советами по уходу, новостями о современных методах лечения и акциями нашей клиники. Следите за обновлениями, чтобы сохранить вашу улыбку красивой и здоровой!</p>
            <Link href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank">
                <Button size="lg" className="w-[230px] text-[17px]">Подписаться на блог</Button>
            </Link>
        </div>
        <Image src="/images/instagram.png" alt="2ГИС" fill className="!static !w-full md:!w-[380px] mt-10 md:mt-0"/>
    </Section>
}
export default InstagramSection;