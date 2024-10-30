import UseBreadcrumb from "@/components/ui/useBreadcrumb";
import Title from "@/components/ui/title";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши услуги", url: "/services" },
    { label: "Хирургия" }
]

export default function Service() {
    return <main className="min-h-dvh px-[15px] pt-[110px]">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <Title title="Хирургия"/>
    </main>
}