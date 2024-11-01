import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/ui/Title";
import UseCarousel from "@/components/ui/carousel/UseCarousel";
import ServiceCard from "@/components/pages/ServiceCard";
import Rating from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";

export default function Home() {
    return <main className="min-h-dvh px-[15px] pt-[110px] mb-[150px]">
        <section className="mb-[100px]">
            <Title title="Наши врачи" className="text-[33px] mb-7" />
            <UseCarousel data={doctors}/>
        </section>
        <section className="mb-[100px]">
            <Title title="Наши услуги" className="text-[33px] mb-7"/>
            <div>
                {
                    services.map((service) => (
                        <ServiceCard key={service.id} service={service}/>
                    ))
                }
            </div>
        </section>
        <section className="mb-[174px] relative">
            <Title title="Посетите наш блог в Instagram" className="text-[33px] mb-4 leading-[45px]"/>
            <p className="mb-8">Посетите наш блог в Instagram и узнайте больше о здоровье зубов и полости рта! Делимся советами по уходу, новостями о современных методах лечения и акциями нашей клиники. Следите за обновлениями, чтобы сохранить вашу улыбку красивой и здоровой!</p>
            <Link href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank" className="w-full flex justify-center absolute left-0 bottom-0 bg-mainBlueColor py-2">
                <Button className="w-[190px] text-[19px]">Подписаться на блог</Button>
            </Link>
            <div className="max-h-[470px] overflow-hidden">
                <Image src="/images/instagram.png" alt="2ГИС" fill className="!static !w-full sm:!w-[400px] mb-[18px]"/>
            </div>
        </section>
        <section>
            <Title title="Больше отзывов" className="text-[33px] mb-4"/>
            <p className="mb-7">Еще больше отзывов от наших довольных пациентов вы сможете найти в приложении 2ГИС.</p>
            <Link href="https://go.2gis.com/z4vmv" target="_blank">
                <Image src="/images/2gis.png" alt="2ГИС" fill className="!static !w-[300px] sm:!w-[400px] mb-[18px]"/>
                <div className="flex items-center gap-2.5">
                    <Rating amount={5} ratingClassName="gap-2.5 ml-0.5 -mt-0.5" starClassName="w-[21px] h-[21px]"/>
                    <span className="text-xl font-bold text-mainTextColor">4.9</span>
                    <span className="text-lg -ml-1.5">(191 отзыв)</span>
                </div>
            </Link>
            <Link href="https://go.2gis.com/z4vmv" target="_blank" className="flex mt-10">
                <Button variant="green" size="lg" className="w-[170px] text-[17px]">Посмотреть</Button>
            </Link>
        </section>
    </main>
}