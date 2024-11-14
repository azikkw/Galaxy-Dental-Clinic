import React, { useState, useEffect, useRef } from "react";
import { formatServicePrice } from "@/utils/serviceCartUtils";

interface PriceComponentProps {
    amount: number | string;
    serviceName: string;
}

const PriceComponent: React.FC<PriceComponentProps> = ({ amount, serviceName }) => {

    const [formattedPrice, setFormattedPrice] = useState<string | number | null>(null);
    const requestInProgress = useRef(false);

    useEffect(() => {
        const fetchData = async () => {
            if(requestInProgress.current) return;
            requestInProgress.current = true;
            const formatted = await formatServicePrice(amount, serviceName);
            setFormattedPrice(formatted);
            requestInProgress.current = false;
        };
        fetchData();
    }, [amount, serviceName])

    return <span className="text-mainTextColor text-[17px] md:w-[21%] md:pl-[5%] lg:text-base font-medium">
        { formattedPrice !== null ? `${formattedPrice} ₸` : "..." }
    </span>
}
export default PriceComponent;
