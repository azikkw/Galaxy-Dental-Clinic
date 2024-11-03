import Title from "@/components/ui/Title";
import UseCarousel from "@/components/ui/carousel/UseCarousel";
import ReviewCard from "@/components/card/ReviewCard";
import { reviews } from "@/data/reviews";

const ReviewsSection = () => {
    return <section id="reviews">
        <Title title="Наши довольные клиенты" className="mb-7"/>
        <UseCarousel
            data={reviews}
            renderItem={(review) => <ReviewCard review={review}/>}
        />
    </section>
}
export default ReviewsSection;