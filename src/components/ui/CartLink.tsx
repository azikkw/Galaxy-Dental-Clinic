import React, { FC } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { CartIcon } from "@/icons/defaultIcons";
import NotEmpty from "@/components/ui/NotEmpty";

interface CartLinkProps {
    generalClassName?: string;
    textClassName?: string,
    isFixed?: boolean
}

const CartLink: FC<CartLinkProps> = ({ generalClassName, textClassName, isFixed } ) => {

    const pathname = usePathname();
    const cart = useSelector((state: RootState) => state.cart.services);

    return <Link
        href={"/korzina"}
        className={clsx(
            "group relative hidden py-[5px] pl-1.5 pr-2 rounded-[6px] mr-1.5 bg-mainBlueColor lg:bg-transparent lg:mr-0 lg:items-center lg:gap-1.5 lg:py-1 lg:hover:bg-mainBlueColor",
            isFixed && "lg:flex lg:fixed lg:top-3.5 lg:right-5 lg:z-10 lg:!gap-2 xl:right-12",
            pathname === "/korzina" && "lg:!bg-mainBlueColor",
            generalClassName)
        }
        aria-label="Ссылка на корзину"
    >
        <CartIcon className={clsx(
            "size-[26px] mb-0.5 text-white lg:size-[22px] lg:text-mainBlueColor lg:group-hover:text-white",
            isFixed && "mb-[1px]",
            pathname === "/korzina" && "lg:text-white")}
        />
        <span className={clsx(
            "hidden lg:block lg:text-mainTextColor lg:group-hover:text-white",
            pathname === "/korzina" && "lg:text-white",
            textClassName)}
        >
            Корзина
        </span>
        { cart.length > 0 && <NotEmpty amount={1} className="-right-2 -top-0.5"/> }
    </Link>
}
export default CartLink;