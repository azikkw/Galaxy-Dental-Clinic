import React from "react";
import { RootState } from "@/lib/store";
import { Cart, addMoreToCart, removeFromCart } from "@/lib/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, RemoveIcon } from "@/app/assets/defaultIcons";

interface CartOperationsProps {
    service: string
}

const CartOperations: React.FC<CartOperationsProps> = ({ service }) => {

    const cart: Cart[] = useSelector((state: RootState) => state.cart.services);
    const dispatch = useDispatch();

    const getServiceCount = (serviceName: string): number => {
        return cart.find((service) => service.name === serviceName)?.count as number;
    }

    return <div className="flex items-center justify-end gap-3 text-mainBlueColor md:w-[15%] lg:justify-start lg:text-secondTextColor">
        <button onClick={() => dispatch(removeFromCart(service))} className="lg:hover:text-mainBlueColor">
            <RemoveIcon className="size-6 lg:size-5"/>
        </button>
        <span className="font-semibold text-mainTextColor text-xl lg:text-[17px]">
            {getServiceCount(service)}
        </span>
        <button onClick={() => dispatch(addMoreToCart(service))} className="lg:hover:text-mainBlueColor">
            <AddIcon className="size-6 lg:size-5"/>
        </button>
    </div>
}
export default CartOperations;