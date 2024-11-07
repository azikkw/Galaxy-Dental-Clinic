import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper/types';
import { Button } from "@/components/ui/Button";
import { DoctorInterface } from "@/data/doctors";
import { ReviewInterface } from "@/data/reviews";
import { CarouselBtn } from "@/icons/defaultIcons";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import 'swiper/css';

type CarouselData = DoctorInterface | ReviewInterface;

interface UseCarouselProps<T extends CarouselData> {
    data: T[],
    renderItem: (item: T) => React.ReactNode
}

const Carousel = <T extends CarouselData>({ data, renderItem }: UseCarouselProps<T>) => {

    const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
    const [firstIndex, setFirstIndex] = useState(true);
    const [lastIndex, setLastIndex] = useState(false);

    const getSlidesPerView = (): number => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
    };

    return <React.Fragment>
        <Swiper
            onSwiper={setSwiperRef}
            breakpoints={{
                640: {slidesPerView: 2, spaceBetween: 20},
                1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            onSlideChange={(swiper) => {
                if(swiper.activeIndex === 0) setFirstIndex(true);
                else if(swiper.activeIndex === data.length - getSlidesPerView()) setLastIndex(true);
                else {
                    setFirstIndex(false);
                    setLastIndex(false);
                }
            }}
        >
            {
                data.map((item) => (
                    <SwiperSlide key={item.id}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <div className="flex justify-center items-center gap-2 mt-9 lg:mt-1 lg:absolute lg:top-0 lg:right-0">
            <Button variant="carouselPrev" size="icon" onClick={() => swiperRef?.slidePrev()} disabled={firstIndex} aria-label="Кнопка для предыдущего слайда">
                <CarouselBtn className="rotate-180 !size-[23px] md:!size-7 lg:!size-6"/>
            </Button>
            <Button variant="carouselNext" size="icon" onClick={() => swiperRef?.slideNext()} disabled={lastIndex} aria-label="Кнопка для следующего слайда">
                <CarouselBtn className="!size-[23px] md:!size-7 lg:!size-6"/>
            </Button>
        </div>
    </React.Fragment>
}
export default Carousel;