import React from "react";
import {clsx} from "clsx";

interface NotEmptyProps {
    amount: number | undefined,
    className?: string
}

const NotEmpty: React.FC<NotEmptyProps> = ({ amount, className }) => {
    return <span className={clsx("bg-red-500 size-4 grid place-content-center !text-white !text-[11px] font-semibold rounded-full absolute", className)}>
        {amount}
    </span>

}
export default NotEmpty;