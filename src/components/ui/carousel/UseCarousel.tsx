import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel/Carousel";
import { DoctorInterface } from "@/data/doctors";
import { ReviewInterface } from "@/data/reviews";

type CarouselData = DoctorInterface | ReviewInterface;

interface UseCarouselProps<T extends CarouselData> {
    data: T[],
    renderItem: (item: T) => React.ReactNode
}

const UseCarousel = <T extends CarouselData>({ data, renderItem }: UseCarouselProps<T>) => {
    return <Carousel className="!overflow-visible">
        <CarouselContent>
            {
                data.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-[27%]">
                        {renderItem(item)}
                    </CarouselItem>
                ))
            }
        </CarouselContent>
        <div className="h-fit flex items-center justify-center gap-2 mt-9">
            <CarouselPrevious/>
            <CarouselNext/>
        </div>
    </Carousel>
}
export default UseCarousel;