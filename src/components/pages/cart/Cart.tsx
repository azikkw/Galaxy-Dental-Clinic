"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainBlock from "@/components/ui/MainBlock";
import Title from "@/components/ui/Title";
import CartOperations from "@/components/ui/CartOperations";
import { Button } from "@/components/ui/Button";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, removeServiceFully } from "@/lib/features/cartSlice";
import { BinIcon } from "@/icons/defaultIcons";
import { formatNumber } from "@/utils/utils";
import CartForm from "@/components/pages/cart/CartForm";
import PopupWindow from "@/components/ui/PopupWindow";
import AboutCartSection from "@/components/home/AboutCartSection";

export default function Cart() {

    const cart = useSelector((state: RootState) => state.cart.services);
    const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);
    const dispatch = useDispatch();

    const [isHovered, setIsHovered] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const totalCount = cart.reduce((total, item) => total + item.count, 0);
    const closeWindow = () => setShowForm(false);

    if(cart.length === 0)
        return <MainBlock>
            <section className="flex flex-col items-center text-center mt-12 sm-custom:mt-16 sm:mt-[140px] lg:mt-10 mb-[150px]">
                <div className="w-[280px] sm:w-[300px] mb-5">
                    <Image src="/images/home/empty.png" alt="Корзина пуста" fill className="!static !w-full !h-full"/>
                </div>
                <Title title="Ваша корзина пуста" className="mb-3"/>
                <p>В вашей корзиние нету услуг. Вернитесь и добавьте их!</p>
                <Link href={"/services"}>
                    <Button size="sm" className="w-[195px] mt-8" aria-label="Ссылка на страницу услуг">Перейти на услуги</Button>
                </Link>
            </section>
            <AboutCartSection/>
        </MainBlock>

    return <MainBlock>
        <Title title="Корзина" className="mb-[18px]"/>
        <button
            onClick={() => dispatch(removeAll())}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group w-fit flex items-center gap-1.5 lg:hover:text-mainBlueColor"
            aria-label="Кнопка для очистки корзины"
        >
            <BinIcon className="size-[22px] mb-0.5"/>
            Удалить все
        </button>
        <section className="flex flex-col lg:flex-row gap-20 lg:gap-5 mt-4 lg:mt-5 mb-[130px]">
            <ul className={isHovered ? "lg:opacity-55" : ""}>
                {
                    cart.map((service, index) => (
                        <li
                            key={index}
                            className="lg:w-[600px] xl:w-[700px] flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-16 border-b border-mainBorderColor px-3 py-5 lg:p-[15px]"
                        >
                            <div className="lg:flex-1 lg:mt-1.5">
                                <span className="opacity-80">{service.category}</span>
                                <p className="text-mainTextColor text-[17px]">{service.name}</p>
                            </div>
                            <div className="flex lg:flex-col justify-between lg:justify-start lg:items-end gap-y-2">
                                <button
                                    onClick={() => dispatch(removeServiceFully(service.name))}
                                    className="lg:mb-1.5"
                                    aria-label="Кнопка для удаления услуги из корзины"
                                >
                                    <BinIcon className="size-[22px] lg:text-mainTextColor lg:hover:text-mainBlueColor"/>
                                </button>
                                <CartOperations service={service.name} className="!w-fit"/>
                                <p className="text-mainTextColor font-semibold text-lg">
                                    {formatNumber(service.totalPrice)}
                                    <span className="font-medium"> ₸</span>
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="flex-1 h-fit lg:sticky lg:top-20 lg:border lg:border-mainBorderColor lg:rounded-[15px] px-2 lg:p-[15px] lg:pt-5">
                <h1 className="text-2xl text-mainTextColor font-bold mb-1.5">Итого:</h1>
                <div className="flex justify-between border-b border-mainBorderColor py-2 mb-3.5">
                    <span>Количество услуг</span>
                    <span className="text-mainTextColor">{totalCount}</span>
                </div>
                <div className="flex items-center justify-between text-mainTextColor mb-5">
                    <span>Общая сумма</span>
                    <p className="font-semibold text-[19px]">
                        {formatNumber(cartTotalPrice)} <span className="font-medium"> ₸</span>
                    </p>
                </div>
                <Button onClick={() => setShowForm(true)} size="lg" className="w-full text-[17px] lg:text-base" aria-label="Кнопка для открытия формы заявки">Оставить заявку</Button>
            </div>
        </section>
        <AboutCartSection/>
        { showForm && <PopupWindow closeWindow={closeWindow} className="!p-0 !pt-6 items-center justify-between sm:justify-center">
            <CartForm cart={cart} totalItems={totalCount} cartTotalPrice={cartTotalPrice} closeWindow={closeWindow}/>
        </PopupWindow> }
    </MainBlock>
}