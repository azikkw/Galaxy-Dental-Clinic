"use client";

import MainBlock from "@/components/ui/MainBlock";
import Title from "@/components/ui/Title";
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {removeAll, removeServiceFully} from "@/lib/features/cartSlice";
import CartOperations from "@/components/ui/CartOperations";

// export const metadata = {
//     title: "Корзина | Galaxy Dental Clinic",
//     description: "Корзина с услугами от стомотологической компании Galaxy Dental Clinic в городе Астана"
// };

export default function Cart() {

    const cart = useSelector((state: RootState) => state.cart.services);
    const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);
    const dispatch = useDispatch();

    if(cart.length === 0)
        return <MainBlock className="mb-[250px]">
            <section className="flex flex-col items-center text-center mt-12 sm-custom:mt-16 sm:mt-[140px] lg:mt-10">
                <div className="w-[280px] sm:w-[300px] mb-5">
                    <Image src="/images/home/empty.png" alt="Корзина пуста" fill className="!static !w-full !h-full"/>
                </div>
                <Title title="Ваша корзина пуста" className="mb-3"/>
                <p>В вашей корзиние нету услуг. Вернитесь и добавьте их!</p>
                <Link href={"/services"}>
                    <Button size="sm" className="w-[195px] mt-8">Перейти на услуги</Button>
                </Link>
            </section>
        </MainBlock>

    return <MainBlock>
        <Title title="Корзина" className="mb-7"/>
        <button onClick={() => dispatch(removeAll())}>Удалить все</button>
        <ul>
            {
                cart.map((service, index) => (
                    <li key={index}>
                        <span>{service.category}</span>
                        <p className="font-semibold text-mainTextColor text-[17px]">{service.name}</p>
                        <span>{service.totalPrice} тг</span>
                        <CartOperations service={service.name}/>
                        <button onClick={() => dispatch(removeServiceFully(service.name))}>Удалить</button>
                    </li>
                ))
            }
        </ul>
        <p className="text-3xl font-bold">{cartTotalPrice}</p>
    </MainBlock>
}