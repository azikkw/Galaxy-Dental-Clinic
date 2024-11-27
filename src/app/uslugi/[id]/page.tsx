import { Metadata } from "next";
import { getService, getServicePrice } from "@/data/services";
import Service from "@/components/pages/Service";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id;
    const service = await getService(id);
    return {
        title: `${service.name} в Астане | Стоматологическая клиника Galaxy Dental Clinic`,
        description: `Услуга ${service.name}. ${service.name} это все об - ${service.description}`
    }
}

export default async function ServicePage({ params }: Props) {
    const id = (await params).id;
    const service = await getService(id);
    const servicePrice = await getServicePrice(id);
    return <Service service={service} servicePrice={servicePrice}/>
}