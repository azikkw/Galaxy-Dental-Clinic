import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
    name: string,
    price: number,
    category: string,
    count: number,
    totalPrice: number
}
interface CartInterface {
    services: Cart[]
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
            state.services.push(action.payload);
            state.cartTotalPrice += action.payload.price;
        },
        addMoreToCart: (state, action) => {
            const service = state.services.find((service) => service.name === action.payload);
            if(service) {
                service.count += 1;
                service.totalPrice = service.count * service.price;
                state.cartTotalPrice += service.totalPrice;
            }
        },
        removeFromCart: (state, action) => {
            const serviceIndex = state.services.findIndex((service) => service.name === action.payload);
            if(serviceIndex !== -1) {
                const service = state.services[serviceIndex];
                if(service.count > 1) {
                    service.totalPrice -= (service.totalPrice / service.count);
                    state.cartTotalPrice -= (service.totalPrice / service.count);
                    service.count -= 1;
                } else {
                    state.cartTotalPrice -= service.totalPrice;
                    state.services.splice(serviceIndex, 1);
                }
            }
        },
        removeServiceFully: (state, action) => {
            const serviceIndex = state.services.findIndex((service) => service.name === action.payload);
            const service = state.services[serviceIndex];
            state.cartTotalPrice -= service.totalPrice;
            state.services.splice(serviceIndex, 1);
        },
        removeAll: (state) => {
            state.services = []
            state.cartTotalPrice = 0;
        }
    }
})
export const { addToCart, addMoreToCart, removeFromCart, removeServiceFully, removeAll } = cartSlice.actions;