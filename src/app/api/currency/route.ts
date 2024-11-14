import { NextResponse } from 'next/server';

type ExchangeRateResponse = {
    result: string;
    conversion_rates: {
        KZT: number;
    }
}

export async function GET() {
    const apiKey = process.env.CURRENCY_API_KEY;
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    const response = await fetch(apiUrl);
    const data: ExchangeRateResponse = await response.json();

    return NextResponse.json({ ...data });
}

