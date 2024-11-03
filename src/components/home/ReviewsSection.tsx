import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import UseCarousel from "@/components/ui/carousel/UseCarousel";
import ReviewCard from "@/components/card/ReviewCard";
import { reviews } from "@/data/reviews";

const ReviewsSection = () => {
    return <Section>
        <Title title="Наши довольные клиенты" className="mb-7"/>
        <UseCarousel
            data={reviews}
            renderItem={(review) => <ReviewCard review={review}/>}
        />
    </Section>
}
export default ReviewsSection;