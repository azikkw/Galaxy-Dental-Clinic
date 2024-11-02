import React from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
    title: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
    return <h1 className={cn("text-[33px] font-bold text-mainTextColor", className)}>
        {title}
    </h1>
}
export default Title;