import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel/Carousel";
import DoctorCard from "@/components/pages/DoctorCard";
import { DoctorInterface } from "@/data/doctors";

interface UseCarouselProps {
    data: DoctorInterface[]
}

const UseCarousel: React.FC<UseCarouselProps> = ({ data }) => {
    return <Carousel>
        <CarouselContent>
            {
                data.map((doctor) => (
                    <CarouselItem key={doctor.id} className="md:basis-1/2 lg:basis-1/3">
                        <DoctorCard doctor={doctor}/>
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