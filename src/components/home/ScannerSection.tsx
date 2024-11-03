import Title from "@/components/ui/Title";
import VideoCard from "@/components/card/VideoCard";

const ScannerSection = () => {
    return <section>
        <Title title="Профессиональный 3D-сканер" className="mb-5"/>
        <p className="mb-8">3D-сканирование зубов — это новый уровень комфорта и точности. За считанные минуты без дискомфорта и слепков, с максимальной точностью и мгновенной обработкой создается детальная 3D-модель челюсти для персонализированного плана лечения. Вы даже сможете заранее увидеть результат. В Galaxy Dental Clinic ваш идеальный результат начинается с 3D-сканирования!</p>
        <VideoCard previewImg="/images/preview/scanner.jpg" video="/videos/scanner.mp4" imgClassName="h-[420px]"/>
    </section>
}
export default ScannerSection;