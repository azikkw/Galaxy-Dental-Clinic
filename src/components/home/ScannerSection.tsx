import Title from "@/components/ui/Title";
import VideoCard from "@/components/card/VideoCard";

const ScannerSection = () => {
    return <section className="md:flex md:items-center md:justify-between md:gap-10 md:mt-5">
        <div className="md:order-2">
            <Title title="Профессиональный 3D-сканер" className="mb-5"/>
            <p className="mb-8 md:mb-0">В нашей клинике есть профессиональный 3D-сканер. 3D-сканирование зубов — это новый уровень комфорта и точности. За считанные минуты без дискомфорта и слепков, с максимальной точностью и мгновенной обработкой создается детальная 3D-модель челюсти для персонализированного плана лечения. В Galaxy Dental Clinic ваш идеальный результат начинается с 3D-сканирования!</p>
        </div>
        <VideoCard previewImg="/images/preview/scanner.jpg" video="/videos/scanner.mp4" imgWidth={4000} imgHeight={6000} imgClassName="h-[420px] sm:w-full md:w-[350px] lg:w-[430px] lg:h-[300px] xl:w-[500px] xl:h-[290px]"/>
    </section>
}
export default ScannerSection;