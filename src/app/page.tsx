import Title from "@/components/ui/Title";
import UseCarousel from "@/components/ui/carousel/UseCarousel";
import ServiceCard from "@/components/pages/ServiceCard";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";

export default function Home() {
    return <main className="min-h-dvh px-[15px] pt-[110px] mb-[150px]">
        <div className="mb-[100px]">
            <Title title="Наши врачи" className="text-[33px] mb-7" />
            <UseCarousel data={doctors}/>
        </div>
        <div>
            <Title title="Наши услуги" className="text-[33px] mb-7"/>
            <div>
                {
                    services.map((service) => (
                        <ServiceCard key={service.id} service={service}/>
                    ))
                }
            </div>
        </div>
    </main>
}