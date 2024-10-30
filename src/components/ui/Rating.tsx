import React from "react";
import { cn } from "@/lib/utils";
import { StarIcon } from "@/app/assets/defaultIcons";

interface RatingProps {
    amount: number;
    ratingClassName?: string;
    starClassName?: string;
}

const Rating: React.FC<RatingProps> = ({ amount, ratingClassName, starClassName }) => {
    return <ul className={cn("flex", ratingClassName)}>
        {
            Array.from({length: amount}, (_, index) => (
                <li key={index}>
                    <StarIcon className={starClassName}/>
                </li>
            ))
        }
    </ul>
}
export default Rating;