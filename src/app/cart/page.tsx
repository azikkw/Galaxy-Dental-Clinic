import MainBlock from "@/components/ui/MainBlock";
import Title from "@/components/ui/Title";
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
    title: "Корзина | Galaxy Dental Clinic",
    description: "Корзина с услугами от стомотологической компании Galaxy Dental Clinic в городе Астана"
};

export default function Cart() {
    return <MainBlock className="mb-[250px]">
        {/*<Title title="Корзина" className="mb-7"/>*/}
        <section className="flex flex-col items-center text-center mt-12 sm-custom:mt-16 sm:mt-[140px] lg:mt-10">
            <div className="w-[280px] sm:w-[300px] mb-5">
                <Image src="/images/home/empty.png" alt="Корзина пуста" fill className="!static !w-full !h-full"/>
            </div>
            <Title title="Ваша корзина пуста" className="mb-3"/>
            <p>В вашей корзиние нету услуг. Вернитесь и добавьте их!</p>
            <Link href={"/services"}>
                <Button size="sm" className="w-[195px] mt-8">Перейти на услуги</Button>
            </Link>
        </section>
    </MainBlock>
}