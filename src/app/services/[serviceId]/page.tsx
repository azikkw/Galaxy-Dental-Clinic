import { Metadata } from "next";
import { getService, getServicePrice } from "@/data/services";
import Service from "@/components/pages/Service";

type Props = {
    params: Promise<{ serviceId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const serviceId = (await params).serviceId;
    const service = await getService(serviceId);
    return {
        title: `${service.name} | Galaxy Dental Clinic`,
        description: `Услуга ${service.name}. ${service.name} это все об - ${service.description}`,
        robots: "index, follow",
    }
}

export default async function ServicePage({ params }: Props) {
    const serviceId = (await params).serviceId;
    const service = await getService(serviceId);
    const servicePrice = await getServicePrice(serviceId);
    return <Service service={service} servicePrice={servicePrice}/>
}