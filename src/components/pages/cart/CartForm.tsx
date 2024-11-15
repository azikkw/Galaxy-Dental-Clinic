"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form/Form"
import { Input } from "@/components/ui/form/Input";
import { Button } from "@/components/ui/Button";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { setFormIsSent } from "@/lib/features/cartSlice";
import { formatPrice } from "@/utils/serviceCartUtils";

const FormSchema = z.object({
    name: z.string().min(3, {
        message: "Введите ваше имя!"
    }),
    phone: z
        .string()
        .regex(/^(\+7|8)/, { message: "Номер должен начинаться с 8 или +7" })
        .min(11, { message: "Введите правильный номер телефона" })
        .refine((value) => /^[+]?\d+$/.test(value), {
            message: "Номер должен содержать только цифры"
        })
})

interface CartFormProps {
    closeWindow: () => void
}

const CartForm: React.FC<CartFormProps> = ({ closeWindow }) => {

    const cart = useSelector((state: RootState) => state.cart.services);
    const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);
    const totalItems = useSelector((state: RootState) => state.cart.totalItems);
    const dispatch = useDispatch();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone: ""
        },
    })
    const [requestSent, setRequestSent] = useState(false);
    const [isError, setIsError] = useState(false);

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const result = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, data: { cart, cartTotalPrice, totalItems } }),
        });

        if(result.status === 200) {
            setIsError(false)
            setRequestSent(true)
            dispatch(setFormIsSent())
        } else {
            setIsError(true)
        }
    }

    if(requestSent)
        return <section className="h-full flex flex-col justify-center px-[15px] sm:px-0 sm:h-fit sm:block">
            <div className="w-full sm:w-[480px] bg-white p-5 rounded-[10px]">
                <h1 className="text-xl font-bold text-mainTextColor mb-2">Заявка отправлена</h1>
                <p className="text-[15px]">Ваша заявка успешно отправлена! Мы свяжемся с вами в скором времени.</p>
                <div className="flex justify-end mt-3.5">
                    <Button onClick={closeWindow} size="sm" className="w-[170px]" aria-label="Кнопка для закрытия окна">Продолжить</Button>
                </div>
            </div>
        </section>

    return <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-white w-full sm:w-[380px] px-[15px] pt-8 pb-14 sm:pb-6 space-y-5 rounded-t-[22px] sm:rounded-[15px]"
        >
            <h1 className="text-center text-2xl font-bold text-mainTextColor">Форма для заявки</h1>
            {isError && <p className="text-sm text-center text-redColor">Произошла ошибка, попробуйте еще раз.</p>}
            <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                            <Input inputMode="text" placeholder="Введите ваше имя" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Номер телефона</FormLabel>
                        <FormControl>
                            <Input inputMode="tel" placeholder="+7" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <ul className="text-[15px] pt-3">
                <li className="flex justify-between mb-1.5">
                    <span>Количество услуг</span>
                    <span className="text-mainTextColor font-semibold">{totalItems}</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Общая сумма</span>
                    <p className="font-semibold text-mainTextColor text-[17px]">
                        {formatPrice(cartTotalPrice)} <span className="font-medium"> ₸</span>
                    </p>
                </li>
            </ul>
            <Button type="submit" size="lg" className="!mt-4 w-full" aria-label="Кнопка для отравления формы">Отправить</Button>
            <p className="text-sm opacity-85 !mt-3 text-center">Общая сумма не является финальной! Итоговая стоимость будет расчитана после консультации.</p>
        </form>
    </Form>
}
export default CartForm;