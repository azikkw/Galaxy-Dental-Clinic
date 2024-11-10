import { CartItem } from "@/lib/features/cartSlice";
import { NextResponse } from "next/server";

type FormInterface = {
    name: string;
    phone: string;
    data: {
        cart: CartItem[];
        totalItems: number;
        cartTotalPrice: number;
    };
};

export async function POST(request: Request) {

    const { name, phone, data }: FormInterface = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const dataText = data.cart.map((item, index) =>
        `${index + 1}. ${item.category} / ${item.name} - ${item.price} тг, ${item.count} раз(а)`).join('\n');

    const text = `
      *Новая заявка с сайта*:\n\nИмя: ${name}\nНомер телефона: ${phone}\n\n*Данные корзины:*\n${dataText}\n\nКоличество услуг: ${data.totalItems}\nИтоговая сумма: *${data.cartTotalPrice} тг*
    `;

    const result = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown'
        })
    });

    return NextResponse.json({ status: result.status, message: result.statusText });

}