import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb/Breadcrumb";

interface Breadcrumbs {
    breadcrumbs: {
        label: string;
        url?: string;
    }[],
    className?: string
}

const UseBreadcrumb: React.FC<Breadcrumbs> = ({ breadcrumbs, className }) => {
    return <Breadcrumb className={className}>
        <BreadcrumbList>
            {
                breadcrumbs.map((breadcrumb, index) => (
                    index !== breadcrumbs.length - 1 ?
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={breadcrumb.url}>{breadcrumb.label}</BreadcrumbLink>
                        <BreadcrumbSeparator/>
                    </BreadcrumbItem>: <BreadcrumbItem key={index}>
                            <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                    </BreadcrumbItem>
                ))
            }
        </BreadcrumbList>
    </Breadcrumb>
}
export default UseBreadcrumb;