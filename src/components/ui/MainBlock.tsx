import React from "react";
import { cn } from "@/lib/utils";

interface MainBlockProps {
    children: React.ReactNode,
    className?: string
}

const MainBlock: React.FC<MainBlockProps> = ({ children, className }) => {
    return <main className={cn("min-h-dvh px-[15px] pt-[110px] mb-[150px]", className)}>
        {children}
    </main>
}
export default MainBlock;