import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";

const InstagramSection = () => {
    return <section className="relative sm:flex sm:justify-between sm:items-center">
        <div className="md:w-[500px]">
            <Title title="Посетите наш блог в Instagram" className="mb-5"/>
            <p className="mb-9">Посетите наш блог в Instagram и узнайте больше о здоровье зубов и полости рта! Делимся советами по уходу, новостями о современных методах лечения и акциями нашей клиники. Следите за обновлениями, чтобы сохранить вашу улыбку красивой и здоровой!</p>
            <Link href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank">
                <Button size="lg" className="w-[230px] text-[17px]" aria-label="Ссылка на инстаграм">Подписаться на блог</Button>
            </Link>
        </div>
        <Image src="/images/home/instagram.png" alt="2ГИС" width="978" height="2000" className="w-full sm:w-[280px] sm:ml-[60px] md:w-[320px] lg:w-[380px] mt-10 md:mt-0"/>
    </section>
}
export default InstagramSection;