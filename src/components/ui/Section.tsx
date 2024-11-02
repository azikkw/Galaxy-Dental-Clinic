import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode,
    className?: string
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
    return <section className={cn("mb-[100px]", className)}>
        {children}
    </section>
}
export default Section;