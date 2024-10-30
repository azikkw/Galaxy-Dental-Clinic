import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Breadcrumbs {
    breadcrumbs: {
        label: string;
        url?: string;
    }[];
}

const UseBreadcrumb: React.FC<Breadcrumbs> = ({ breadcrumbs }) => {
    return <Breadcrumb className="mb-1">
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