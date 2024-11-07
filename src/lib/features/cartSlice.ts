import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    name: string,
    price: number,
    category: string,
    count: number,
    totalPrice: number
}
interface CartInterface {
    services: CartItem[]
    cartTotalPrice: number
}

const initialState: CartInterface = {
    services: [],
    cartTotalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            state.services.push({
                ...action.payload,
                count: 1,
                totalPrice: action.payload.price
            });
            state.cartTotalPrice += action.payload.price;
        },
        addMoreToCart: (state, action) => {
            const service = state.services.find((service) => service.name === action.payload);
            if(service) {
                service.count += 1;
                service.totalPrice = service.count * service.price;
            }
            state.cartTotalPrice = state.services.reduce((total, service) => total + service.totalPrice, 0);
        },
        removeFromCart: (state, action) => {
            const serviceIndex = state.services.findIndex((service) => service.name === action.payload);
            if(serviceIndex !== -1) {
                const service = state.services[serviceIndex];
                if(service.count > 1) {
                    service.totalPrice -= (service.totalPrice / service.count);
                    service.count -= 1;
                } else {
                    state.services.splice(serviceIndex, 1);
                }
            }
            state.cartTotalPrice = state.services.reduce((total, service) => total + service.totalPrice, 0);
        },
        removeServiceFully: (state, action) => {
            const serviceIndex = state.services.findIndex((service) => service.name === action.payload);
            state.services.splice(serviceIndex, 1);
            state.cartTotalPrice = state.services.reduce((total, service) => total + service.totalPrice, 0);
        },
        removeAll: (state) => {
            state.services = []
            state.cartTotalPrice = 0;
        }
    }
})
export const { addToCart, addMoreToCart, removeFromCart, removeServiceFully, removeAll } = cartSlice.actions;