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
import {BinIcon} from "@/app/assets/defaultIcons";

// export const metadata = {
//     title: "Корзина | Galaxy Dental Clinic",
//     description: "Корзина с услугами от стомотологической компании Galaxy Dental Clinic в городе Астана"
// };

export default function Cart() {

    const cart = useSelector((state: RootState) => state.cart.services);
    const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);
    const dispatch = useDispatch();

    function formatNumber(num: number) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

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
        <Title title="Корзина" className="mb-[18px]"/>
        <button
            onClick={() => dispatch(removeAll())}
            className="flex items-center gap-1.5 text-mainTextColor lg:hover:text-mainBlueColor"
        >
            <BinIcon className="size-[22px] mb-0.5"/>
            Удалить все
        </button>
        <section className="flex gap-5 mt-5">
            <ul className="">
                {
                    cart.map((service, index) => (
                        <li
                            key={index}
                            className="w-[700px] flex justify-between gap-16 border-b border-mainBorderColor p-[15px]"
                        >
                            <div className="flex-1 mt-1.5">
                                <span className="opacity-80">{service.category}</span>
                                <p className="text-mainTextColor text-[17px]">{service.name}</p>
                            </div>
                            <div className="flex flex-col items-end gap-y-2.5">
                                <button
                                    onClick={() => dispatch(removeServiceFully(service.name))}
                                    className="flex items-center gap-1.5 mb-1"
                                >
                                    <BinIcon className="size-[22px] text-mainTextColor lg:hover:text-mainBlueColor"/>
                                </button>
                                <CartOperations service={service.name} className="!w-fit"/>
                                <p className="text-mainTextColor font-semibold text-xl">
                                    {formatNumber(service.totalPrice)}
                                    <span className="font-medium"> ₸</span>
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="flex-1 h-fit sticky top-20 border border-mainBorderColor rounded-[15px] p-[15px]">
                <h1 className="text-2xl text-mainTextColor font-bold mb-3">Общая сумма:</h1>
                <p className="text-3xl font-bold text-mainBlueColor text-end">{formatNumber(cartTotalPrice)} ₸</p>
            </div>
        </section>
    </MainBlock>
}