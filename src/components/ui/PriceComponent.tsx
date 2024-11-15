import React from "react";
import { formatPrice } from "@/utils/serviceCartUtils";

interface PriceComponentProps {
    amount: number | string
    disclaimer?: string
}

const PriceComponent: React.FC<PriceComponentProps> = ({ amount, disclaimer }) => {

    if(disclaimer)
        return <div className="flex items-center gap-2 md:flex-col md:items-start md:w-[26%] md:pl-[5%] mb-2.5 md:mb-0 md:gap-0">
            <span className="text-mainTextColor text-[17px] lg:text-base font-medium">
                { formatPrice(amount) }
            </span>
            <span className="text-sm md:text-sm opacity-80">{ disclaimer }</span>
        </div>

    return <span className="text-mainTextColor text-[17px] md:w-[26%] md:pl-[5%] lg:text-base font-medium">
        { formatPrice(amount) }
        { !amount.toString().includes("$") && " ₸" }
    </span>
}
export default PriceComponent;
