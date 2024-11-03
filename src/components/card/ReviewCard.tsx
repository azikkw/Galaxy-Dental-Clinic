import React from "react";
import { ReviewInterface } from "@/data/reviews";
import Rating from "@/components/ui/Rating";
import VideoCard from "@/components/card/VideoCard";

interface ReviewProps {
    review: ReviewInterface
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
    return <div className="w-full sm:!w-[380px] block border border-mainBorderColor rounded-[15px] p-[20px] pb-6">
        <VideoCard previewImg={review.previewImg} video={review.video} imgClassName="h-[380px]"/>
        <p className="text-mainTextColor text-[22px] mt-4">Отзыв <span className="font-bold">{review.personName}</span></p>
        <Rating amount={5} ratingClassName="gap-1.5 mt-2" starClassName="w-5 h-5"/>
    </div>
}
export default ReviewCard;