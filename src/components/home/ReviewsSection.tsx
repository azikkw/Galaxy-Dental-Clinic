import Title from "@/components/ui/Title";
import Carousel from "@/components/ui/Carousel";
import ReviewCard from "@/components/card/ReviewCard";
import { reviews } from "@/data/reviews";

const ReviewsSection = () => {
    return <section id="reviews" className="relative">
        <Title title="Наши довольные клиенты" className="mb-7"/>
        <Carousel
            data={reviews}
            renderItem={(review) => <ReviewCard review={review}/>}
        />
    </section>
}
export default ReviewsSection;