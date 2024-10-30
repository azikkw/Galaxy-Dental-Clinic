import Title from "@/components/ui/title";
import UseBreadcrumb from "@/components/ui/useBreadcrumb";

const breadcrumbs = [
    { label: "Главная", url: "/" },
    { label: "Наши врачи" }
]

export default function Doctors() {
    return <main className="min-h-dvh px-[15px] pt-[110px]">
        <UseBreadcrumb breadcrumbs={breadcrumbs}/>
        <Title title="Наши врачи"/>
    </main>
}