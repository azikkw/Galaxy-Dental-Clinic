import React, { FC } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { CartIcon } from "@/app/assets/defaultIcons";
// import NotEmpty from "@/components/ui/NotEmpty";

interface CartLinkProps {
    generalClassName?: string;
    textClassName?: string,
    isFixed?: boolean
}

const CartLink: FC<CartLinkProps> = ({ generalClassName, textClassName, isFixed } ) => {
    return <Link
        href="https://www.instagram.com/galaxy_dental_clinic/" target="_blank"
        className={clsx(
            "group relative hidden py-[5px] pl-1.5 pr-2 rounded-[6px] mr-1.5 bg-mainBlueColor lg:bg-transparent lg:mr-0 lg:items-center lg:gap-2 lg:py-1 lg:hover:bg-mainBlueColor",
            isFixed && "lg:flex lg:fixed lg:top-3.5 lg:right-12 lg:z-10",
            generalClassName)
        }
    >
        <CartIcon className="size-[26px] mb-0.5 text-white lg:size-[22px] lg:text-mainBlueColor lg:group-hover:text-white"/>
        <span className={clsx("hidden lg:block lg:text-mainTextColor lg:group-hover:text-white", textClassName)}>Корзина</span>
        {/*<NotEmpty amount={1} className="-right-2 -top-0.5"/>*/}
    </Link>
}
export default CartLink;