import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Rating from "@/components/ui/Rating";
import { Button } from "@/components/ui/Button";

const TwoGisSection = () => {
    return <section className="md:flex md:items-center relative mb-[80px] md:mb-0">
        <div className="md:w-[500px]">
            <Title title="Больше отзывов" className="mb-4"/>
            <p className="mb-7">Еще больше отзывов от наших довольных пациентов вы сможете найти в приложении 2ГИС.</p>
            <Link href="https://go.2gis.com/z4vmv" target="_blank" className="absolute -bottom-20 md:static">
                <Button variant="green" size="lg" className="w-[170px] text-[17px]">Посмотреть</Button>
            </Link>
        </div>
        <Link href="https://go.2gis.com/z4vmv" target="_blank" className="block md:mb-0">
            <Image src="/images/home/2gis.png" alt="2ГИС" fill className="!static !w-[300px] md:!w-[400px] md:mt-3.5 mb-[18px]"/>
            <div className="flex items-center gap-2.5">
                <Rating amount={5} ratingClassName="gap-2.5 ml-0.5 -mt-0.5" starClassName="w-[21px] h-[21px]"/>
                <span className="text-xl font-bold text-mainTextColor">4.9</span>
                <span className="text-lg -ml-1.5">(191 отзыв)</span>
            </div>
        </Link>
    </section>
}
export default TwoGisSection;