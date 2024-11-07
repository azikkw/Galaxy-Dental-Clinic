import React from "react";
import { CloseIcon } from "@/icons/defaultIcons";
import {cn} from "@/lib/utils";

interface PopupWindowProps {
    children: React.ReactNode
    closeWindow: () => void
    className?: string
}

const PopupWindow: React.FC<PopupWindowProps> = ({ children, closeWindow, className }) => {
    return <div className={cn("w-full h-dvh flex flex-col items-end sm:items-center bg-[#000000DA] px-[15px] py-5 fixed left-0 top-0 z-20", className)}>
        <CloseIcon className="size-9 text-white mb-7 sm:absolute sm:right-5 sm:top-5 cursor-pointer" onClick={closeWindow}/>
        {children}
        <span className="absolute left-0 top-0 w-full h-full -z-[1]" onClick={closeWindow}/>
    </div>
}
export default PopupWindow;