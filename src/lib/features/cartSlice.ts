import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    name: string,
    price: number | string,
    category: string,
    count: number,
    totalPrice: number | string
}
interface CartInterface {
    services: CartItem[],
    cartTotalPrice: number | string,
    totalItems: number,
    formIsSent: boolean
}

const initialState: CartInterface = {
    services: [],
    cartTotalPrice: 0,
    totalItems: 0,
    formIsSent: false
}

const parsePrice = (price: number | string): { amount: number, prefix: string } => {
    if(typeof price === "number") return { amount: price, prefix: "" };

    const rangeMatch = price.match(/^(\d+)-(\d+)$/);
    if(rangeMatch) {
        const minAmount = parseFloat(rangeMatch[1]);
        return { amount: isNaN(minAmount) ? 0 : minAmount, prefix: "от " };
    }

    const amount = parseFloat(price.replace(/\D/g, ''));
    const prefix = price.includes("от") ? "от " : "";

    return { amount: isNaN(amount) ? 0 : amount, prefix };
}
const calculateTotalAmount = (services: CartItem[]): number | string => {
    const totalAmount = services.reduce((total, service) => total + parsePrice(service.totalPrice).amount, 0);
    const prefix = services.some(service => parsePrice(service.totalPrice).prefix === "от ") ? "от " : "";
    return `${prefix}${totalAmount}`;
}
const calculateTotalCount = (services: CartItem[]): number => {
    return services.reduce((total, service) => total + service.count, 0);
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { amount, prefix } = parsePrice(action.payload.price);
            const totalPrice = prefix + amount;

            state.services.push({
                ...action.payload,
                count: 1,
                totalPrice
            });
            state.cartTotalPrice = calculateTotalAmount(state.services);
            state.totalItems += 1;
        },
        addMoreToCart: (state, action) => {
            const service = state.services.find((service) => service.name === action.payload);
            if(service) {
                const { amount, prefix } = parsePrice(service.price);
                service.count += 1;
                service.totalPrice = `${prefix}${service.count * amount}`;
            }
            state.cartTotalPrice = calculateTotalAmount(state.services);
            state.totalItems = calculateTotalCount(state.services);
        },
        removeFromCart: (state, action) => {
            const serviceIndex = state.services.findIndex((service) => service.name === action.payload);
            if(serviceIndex !== -1) {
                const service = state.services[serviceIndex];
                const { amount, prefix } = parsePrice(service.price);
                if(service.count > 1) {
                    service.count -= 1;
                    service.totalPrice = `${prefix}${service.count * amount}`;
                } else {
                    state.services.splice(serviceIndex, 1);
                }
            }
            state.cartTotalPrice = calculateTotalAmount(state.services);
            state.totalItems = calculateTotalCount(state.services);
        },
        removeServiceFully: (state, action) => {
            const serviceIndex = state.services.findIndex((service) => service.name === action.payload);
            state.services.splice(serviceIndex, 1);
            state.cartTotalPrice = calculateTotalAmount(state.services);
            state.totalItems = calculateTotalCount(state.services);
        },
        removeAll: (state) => {
            state.services = [];
            state.cartTotalPrice = 0;
            state.totalItems = 0;
        },
        setFormIsSent: (state) => {
            state.formIsSent = true;
        },
        setFormIsNotSent: (state) => {
            state.formIsSent = false;
        }
    }
});

export const { addToCart, addMoreToCart, removeFromCart, removeServiceFully, removeAll, setFormIsSent, setFormIsNotSent } = cartSlice.actions;
