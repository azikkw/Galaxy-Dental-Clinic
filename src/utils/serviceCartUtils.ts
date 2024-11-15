const cacheDuration = 12 * 60 * 60 * 1000;

const getDollarToTengeRate = async (): Promise<number | null> => {
    const cachedRate = localStorage.getItem("cachedDollarRate");
    const lastFetch = localStorage.getItem("lastFetchedTime");
    const currentTime = Date.now();

    if(cachedRate && lastFetch && (currentTime - Number(lastFetch) < cacheDuration)) {
        return Number(cachedRate);
    }

    try {
        const response = await fetch('/api/currency', { method: 'GET' });
        const data = await response.json();
        const rate = data?.conversion_rates?.KZT || null;
        if(rate !== null) {
            localStorage.setItem("cachedDollarRate", rate.toString());
            localStorage.setItem("lastFetchedTime", currentTime.toString());
        }
        return rate;
    } catch(error) {
        console.error('Ошибка при получении данных валюты:', error);
        return null;
    }
};

export const convertNumber = async (num: number | string, serviceName: string) => {
    if(serviceName.includes("Invisalign") && num.toString().includes("$")) {
        const converted = num.toString().split("$")[0]
        const dollar = await getDollarToTengeRate()
        const amount = dollar ? (Number(converted) * dollar) : 0
        return Math.round(amount)
    }
    return num
}

export function formatPrice(num: number | string) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}