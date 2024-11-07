"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form/Form"
import { Input } from "@/components/ui/form/Input";
import { Button } from "@/components/ui/Button";
import { CartItem } from "@/lib/features/cartSlice";
import { formatNumber } from "@/utils/utils";

const FormSchema = z.object({
    name: z.string().min(3, {
        message: "Введите ваше имя!"
    }),
    phone: z.string().min(11, {
        message: "Номер должен начинаться с 8 или +7"
    }),
})

interface CartFormProps {
    cart: CartItem[]
    totalItems: number
    cartTotalPrice: number,
    closeWindow: () => void
}

const CartForm: React.FC<CartFormProps> = ({ cart, totalItems, cartTotalPrice, closeWindow }) => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log({...data, cart});
        closeWindow();
    }

    return <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-white w-full sm:w-[380px] px-[15px] pt-8 pb-14 sm:pb-6 space-y-5 rounded-t-[22px] sm:rounded-[15px]"
        >
            <h1 className="text-center text-2xl font-bold text-mainTextColor">Форма для заявки</h1>
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
                        {formatNumber(cartTotalPrice)} <span className="font-medium"> ₸</span>
                    </p>
                </li>
            </ul>
            <Button type="submit" size="lg" className="!mt-4 w-full" aria-label="Кнопка для отравления формы">Отправить</Button>
            <p className="text-sm opacity-85 !mt-3 text-center">Общая сумма не является финальной! Итоговая стоимость будет расчитана после консультации.</p>
        </form>
    </Form>
}
export default CartForm;