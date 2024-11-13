import Title from "@/components/ui/Title";
import VideoCard from "@/components/card/VideoCard";

const AboutCartSection = () => {
    return <section id="about-cart" className="md:flex md:items-center md:justify-between md:gap-10 md:mt-5">
        <div className="mb-7 lg:mb-3">
            <Title title="Что-за корзина?" className="mb-5"/>
            <p>Мы стремимся сделать процесс выбора услуг максимально удобным для вас. С помощью нашей корзины вы можете легко рассчитать стоимость необходимого комплекса процедур и оставить заявку прямо на сайте. Заполняя корзину, вы получите смету, которая поможет принять решение и оформить заявку на удобных для вас условиях. Также вы можете посмотреть видео о том, как ею пользоваться.</p>
        </div>
        <VideoCard previewImg="/images/preview/cart1.jpg" video="/videos/cart.webm" imgWidth={978} imgHeight={2000} imgClassName="h-[320px] sm:w-full md:w-[350px] lg:w-[430px] lg:h-[300px] xl:w-[500px] xl:h-[300px] rounded-[15px]"/>
    </section>
}
export default AboutCartSection;