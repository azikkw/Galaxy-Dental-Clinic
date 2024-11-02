import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel/Carousel";
import { DoctorInterface } from "@/data/doctors";

interface UseCarouselProps {
    data: DoctorInterface[],
    renderItem: (item: DoctorInterface) => React.ReactNode
}

const UseCarousel: React.FC<UseCarouselProps> = ({ data, renderItem }) => {
    return <Carousel>
        <CarouselContent>
            {
                data.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-[27%]">
                        {renderItem(item)}
                    </CarouselItem>
                ))
            }
        </CarouselContent>
        <div className="h-fit flex items-center justify-center gap-2 mt-2">
            <CarouselPrevious className="relative"/>
            <CarouselNext className="relative"/>
        </div>
    </Carousel>
}
export default UseCarousel;