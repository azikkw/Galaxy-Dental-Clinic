import React from "react";
import { cn } from "@/lib/utils";

interface MainBlockProps {
    children: React.ReactNode,
    className?: string
}

const MainBlock: React.FC<MainBlockProps> = ({ children, className }) => {
    return <main className={cn("flex flex-col px-[15px] pt-[110px] mb-[150px] sm:px-6 sm:pt-[120px] md:px-10 lg:px-[90px] lg:pt-[70px] xl:px-0 xl:w-[1050px]", className)}>
        {children}
    </main>
}
export default MainBlock;