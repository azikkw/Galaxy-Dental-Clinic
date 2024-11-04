import React from "react";
import { ReviewInterface } from "@/data/reviews";
import Rating from "@/components/ui/Rating";
import VideoCard from "@/components/card/VideoCard";

interface ReviewProps {
    review: ReviewInterface
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
    return <div className="w-full block border border-mainBorderColor rounded-[15px] p-[20px] pb-6">
        <VideoCard previewImg={review.previewImg} video={review.video} imgClassName="h-[380px] lg:h-[330px]"/>
        <p className="text-mainTextColor text-[22px] mt-4 lg:text-xl">Отзыв <span className="font-bold">{review.personName}</span></p>
        <Rating amount={5} ratingClassName="gap-1.5 mt-2" starClassName="size-5 lg:size-[18px]"/>
    </div>
}
export default ReviewCard;