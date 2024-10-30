import Link from "next/link";

export default function NotFound() {
    return <main className="min-h-dvh flex flex-col justify-center px-[15px]">
        <p className="text-xl font-semibold text-mainBlueColor">404</p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-mainTextColor sm:text-[45px]">Страница не найдена</h1>
        <p className="mt-6 text-base text-secondTextColor sm:text-[17px]">Извините, мы не смогли найти страницу, которую вы ищете.</p>
        <Link href="/" className="w-fit mt-9 rounded-lg bg-mainBlueColor hover:bg-hoverBlueColor px-5 py-2.5 font-semibold text-white">Вернуться на главную</Link>
    </main>
}