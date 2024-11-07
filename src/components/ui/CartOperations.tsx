import React from "react";
import { cn } from "@/lib/utils";
import { RootState } from "@/lib/store";
import { CartItem, addMoreToCart, removeFromCart } from "@/lib/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, RemoveIcon } from "@/icons/defaultIcons";

interface CartOperationsProps {
    service: string,
    className?: string
}

const CartOperations: React.FC<CartOperationsProps> = ({ service, className }) => {

    const cart: CartItem[] = useSelector((state: RootState) => state.cart.services);
    const dispatch = useDispatch();

    const getServiceCount = (serviceName: string): number => {
        return cart.find((service) => service.name === serviceName)?.count as number;
    }

    return <div
        className={cn(
            "flex items-center justify-end gap-3 text-mainBlueColor md:w-[14%] lg:justify-start lg:text-secondTextColor",
            className
        )}
    >
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