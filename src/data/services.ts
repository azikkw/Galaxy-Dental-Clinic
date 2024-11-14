import React, { SVGProps } from "react";
import {
    HygieneIcon,
    ImplantationIcon,
    OrthodonticsIcon,
    OrthopedicsIcon,
    SalesIcon,
    SurgeryIcon,
    TherapyIcon
} from "@/icons/servicesIcons";

export interface ServiceCardInterface {
    id: string,
    name: string,
    description: string,
    icon: React.FC<SVGProps<SVGSVGElement>>
}
export interface ServicesInterface {
    id: string,
    name: string,
    description: string,
    img: string,
    categories: string[]
}
export interface ServiceCategoryInterface {
    name: string,
    types: {
        name: string,
        price: {
            service: string,
            amount: number | string
        }[]
    }[]
}
export interface ServicePriceInterface {
    id: string,
    categories: ServiceCategoryInterface[]
}

export const services: ServiceCardInterface[] = [
    { id: "s1", name: "Проф. гигиена", description: "Комплексная чистка и уход за зубами и деснами", icon: HygieneIcon },
    { id: "s2", name: "Терапия", description: "Лечение кариеса, пульпита и разных инфекций", icon: TherapyIcon },
    { id: "s3", name: "Хирургия", description: "Операция по удалению и сохранению зубов", icon: SurgeryIcon },
    { id: "s4", name: "Имплантация", description: "Восстановление зуба с помощью импланта", icon: ImplantationIcon },
    { id: "s5", name: "Ортопедия", description: "Восстановление зубов с помощью коронок", icon: OrthopedicsIcon },
    { id: "s6", name: "Ортодонтия", description: "Исправление зубов и установка брекет-систем", icon: OrthodonticsIcon },
    { id: "s7", name: "Продажи", description: "Полезные вещи для ухода за зубами и деснами", icon: SalesIcon }
]
export const servicePage: ServicesInterface[] = [
    { id: "s1", name: "Проф. гигиена", description: "Комплексная чистка и уход за зубами и деснами", img: "/images/services/s1.png", categories: ["Проф. гигиена"] },
    { id: "s2", name: "Терапия", description: "Лечение кариеса, пульпита и разных инфекций", img: "/images/services/s2.png", categories: ["EsCom (Юж.Корея)", "EstelitePalfique (Япония)", "Художественная реставрация", "Дополнительно"] },
    { id: "s3", name: "Хирургия", description: "Операция по удалению и сохранению зубов", img: "/images/services/s3.png", categories: ["Хирургия", "Дополнительно"] },
    { id: "s4", name: "Имплантация", description: "Восстановление зуба с помощью импланта", img: "/images/services/s4.png", categories: ["Имплантация", "Дополнительно"] },
    { id: "s5", name: "Ортопедия", description: "Восстановление зубов с помощью коронок", img: "/images/services/s5.png", categories: ["Съемные конструкции", "Несъёмные конструкции", "Дополнительно"] },
    { id: "s6", name: "Ортодонтия", description: "Исправление зубов и установка брекет-систем", img: "/images/services/s6.png", categories: ["Ортодонтия", "Детская ортодонтия"] },
    { id: "s7", name: "Продажи", description: "Полезные вещи для ухода за зубами и деснами", img: "/images/services/s7.png", categories: ["Продажи"] },
]

// const getDollarToTengeRate = async (num: number): Promise<number> => {
//     try {
//         const response = await fetch('/api/currency', { method: 'GET' });
//         const data = await response.json();
//         const dollar = data.data?.conversion_rates?.KZT || 0;
//         const amount = num * dollar;
//         return Math.round(amount);
//     } catch(error) {
//         console.error('Ошибка при получении данных валюты:', error);
//         return 0;
//     }
// }

const servicesPrice: ServicePriceInterface[] = [
    {
        id: "s1",
        categories: [
            {
                name: "Проф. гигиена",
                types: [
                    {
                        name: "Проф. гигиена",
                        price: [
                            {
                                service: "Снятие ультразвуком зубного камня, полировка + Эйрфлоу (первой степени)",
                                amount: 19500
                            },
                            {
                                service: "Снятие ультразвуком зубного камня, полировка + Эйрфлоу (второй степени)",
                                amount: 23400
                            },
                            {
                                service: "Снятие ультразвуком зубного камня, полировка +Эйрфлоу (третьей степени)",
                                amount: 26000
                            },
                            {
                                service: "Реминерализующая терапия 1 зуб",
                                amount: 2000
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "s2",
        categories: [
            {
                name: "EsCom (Юж.Корея)",
                types: [
                    {
                        name: "Лечение кариеса и пломбирование материалом \"EsCom\" (Юж.Корея)",
                        price: [
                            {
                                service: "Лечение поверхностного кариеса",
                                amount: 13200
                            },
                            {
                                service: "Лечение среднего кариеса",
                                amount: 17600
                            },
                            {
                                service: "Лечение глубокого кариеса",
                                amount: 21450
                            },
                            {
                                service: "Лечение клиновидного дефекта",
                                amount: 18590
                            }
                        ]
                    },
                    {
                        name: "Лечение пульпита с пломбированием \"EsCom\"(Юж.Корея)",
                        price: [
                            {
                                service: "Лечение пульпита 1 корневого зуба.",
                                amount: 31460
                            },
                            {
                                service: "Лечение пульпита 2 корневого зуба.",
                                amount: 37180
                            },
                            {
                                service: "Лечение пульпита 3 корневого зуба.",
                                amount: 42900
                            },
                            {
                                service: "Лечение пульпита 4 корневого зуба.",
                                amount: 45760
                            }
                        ]
                    },
                    {
                        name: "Лечение периодонтита с пломбированием \"EsCom\" (Юж.Корея)",
                        price: [
                            {
                                service: "Лечение 1канального верхушечного периодонтита.",
                                amount: 40040
                            },
                            {
                                service: "Лечение 2канального верхушечного периодонтита.",
                                amount: 44330
                            },
                            {
                                service: "Лечение 3канального верхушечного периодонтита.",
                                amount: 51480
                            },
                            {
                                service: "Лечение 4канального верхушечного периодонтита.",
                                amount: 54340
                            },
                            {
                                service: "Мед. Обработка",
                                amount: 5000
                            }
                        ]
                    }
                ]
            },
            {
                name: "EstelitePalfique (Япония)",
                types: [
                    {
                        name: "Лечение кариеса и пломбирование материалом \"EstelitePalfique\" (Юж.Корея)",
                        price: [
                            {
                                service: "Лечение поверхностного кариеса",
                                amount: 15600
                            },
                            {
                                service: "Лечение среднего кариеса",
                                amount: 20800
                            },
                            {
                                service: "Лечение глубокого кариеса",
                                amount: 25350
                            },
                            {
                                service: "Лечение клиновидного дефекта",
                                amount: 21970
                            }
                        ]
                    },
                    {
                        name: "Лечение пульпита с пломбированием \"EstelitePalfique\" (Япония)",
                        price: [
                            {
                                service: "Лечение пульпита 1 корневого зуба.",
                                amount: 37180
                            },
                            {
                                service: "Лечение пульпита 2 корневого зуба.",
                                amount: 43940
                            },
                            {
                                service: "Лечение пульпита 3 корневого зуба.",
                                amount: 50700
                            },
                            {
                                service: "Лечение пульпита 4 корневого зуба.",
                                amount: 54080
                            }
                        ]
                    },
                    {
                        name: "Лечение периодонтита с пломбированием \"EstelitePalfique\" (Япония)",
                        price: [
                            {
                                service: "Лечение 1 канального верхушечного периодонтита",
                                amount: 47320
                            },
                            {
                                service: "Лечение 2 канального верхушечного периодонтита",
                                amount: 52390
                            },
                            {
                                service: "Лечение 3 канального верхушечного периодонтита",
                                amount: 60840
                            },
                            {
                                service: "Лечение 4 канального верхушечного периодонтита",
                                amount: 64220
                            },
                            {
                                service: "Мед.обработка",
                                amount: 5000
                            }
                        ]
                    }
                ]
            },
            {
                name: "Художественная реставрация",
                types: [
                    {
                        name: "Художественная реставрация",
                        price: [
                            {
                                service: "Художественная реставрация зуба",
                                amount: "от 33 800"
                            },
                            {
                                service: "Художественная реставрация фронтальной группы зубов Estelite Asteria (Япония)",
                                amount: 45000
                            },
                            {
                                service: "Художественная реставрация фронтальной группы зубов Omnichroma (Япония)",
                                amount: 40000
                            }
                        ]
                    }
                ]
            },
            {
                name: "Дополнительно",
                types: [
                    {
                        name: "Местное обезболивание",
                        price: [
                            {
                                service: "Анестезия аппликационная",
                                amount: 1000
                            },
                            {
                                service: "Анестезия инфильтрационная",
                                amount: 3000
                            },
                            {
                                service: "Анестезия проводниковая",
                                amount: 4000
                            }
                        ]
                    },
                    {
                        name: "Рентген диагностика",
                        price: [
                            {
                                service: "Рентген снимок (1 зуб)",
                                amount: 2000
                            },
                            {
                                service: "Контрольный снимок",
                                amount: 1000
                            }
                        ]
                    },
                    {
                        name: "Плазмолифтинг",
                        price: [
                            {
                                service: "Забор крови ",
                                amount: 1000
                            },
                            {
                                service: "A-PRF",
                                amount: 15000
                            },
                            {
                                service: "Плазмолифтинг 1 процедура",
                                amount: 20000
                            },
                            {
                                service: "DMPM",
                                amount: 20000
                            }
                        ]
                    },
                    {
                        name: "Дополнительные манипуляции",
                        price: [
                            {
                                service: "Восстановление зуба после эндодонтического лечения",
                                amount: 21000
                            },
                            {
                                service: "Девит паста",
                                amount: 6500
                            },
                            {
                                service: "Коффердам",
                                amount: 4000
                            },
                            {
                                service: "Распломбировка 1 канала (гуттаперчевый штифт)",
                                amount: 6500
                            },
                            {
                                service: "Распломбировка 1 канала (цемент)",
                                amount: 8500
                            },
                            {
                                service: "Распломбировка 1 канала (резорцин формалин)",
                                amount: 12000
                            },
                            {
                                service: "Штифт стекловолоконный",
                                amount: 8500
                            },
                            {
                                service: "Удаление штифта",
                                amount: 4000
                            },
                            {
                                service: "Удаление вкладки",
                                amount: 6500
                            },
                            {
                                service: "Восстановление зуба под коронку",
                                amount: 16900
                            },
                            {
                                service: "Индивидуальная ложка на 1 челюсть",
                                amount: 10000
                            },
                            {
                                service: "Диагностика с артикулятором",
                                amount: 50000
                            },
                            {
                                service: "Фотопротокол",
                                amount: 5000
                            },
                            {
                                service: "Фиксация винир (Variolink) 1 зуб",
                                amount: 10000
                            },
                            {
                                service: "Примерка винира",
                                amount: 2000
                            },
                            {
                                service: "Сканирование одной челюсти",
                                amount: 10000
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "s3",
        categories: [
            {
                name: "Хирургия",
                types: [
                    {
                        name: "Хирургия",
                        price: [
                            {
                                service: "Удаление зуба простое",
                                amount: 8000
                            },
                            {
                                service: "Удаление зуба средней сложности",
                                amount: 10000
                            },
                            {
                                service: "Удаление зуба сложное",
                                amount: 12000
                            },
                            {
                                service: "Удаление зуба мудрости",
                                amount: 15000
                            },
                            {
                                service: "Удаление ретинированного зуба мудрости",
                                amount: "от 25 000"
                            },
                            {
                                service: "Наложение швов ",
                                amount: 4000
                            },
                            {
                                service: "Остановка кровотечения из лунки с ушиванием",
                                amount: "от 5 000"
                            },
                            {
                                service: "Резекция верхушки корня зуба",
                                amount: 35000
                            },
                            {
                                service: "Лечение альвеолита (1 посещение)",
                                amount: 5000
                            },
                            {
                                service: "Иссечение капюшона",
                                amount: 10000
                            },
                            {
                                service: "Перевязка",
                                amount: 3000
                            },
                            {
                                service: "Периостотомия",
                                amount: 8000
                            },
                            {
                                service: "Кюретаж лунки",
                                amount: 10000
                            },
                            {
                                service: "Гингивопластика в области 1 зуба",
                                amount: 20000
                            },
                            {
                                service: "Забор десны с нёба",
                                amount: 25000
                            },
                            {
                                service: "Забор десны с бугра",
                                amount: 15000
                            },
                            {
                                service: "Пластика верхнечелюстной пазухи при свежей травме (перфорации)",
                                amount: 30000
                            },
                            {
                                service: "Удаление экзостозов ½ альвеолярного отростка",
                                amount: 25000
                            },
                            {
                                service: "Удаление образования альвеолярного отростка (эпулис)",
                                amount: 25000
                            },
                            {
                                service: "Удаление радикулярной кисты, без гистологического иследования",
                                amount: 50000
                            },
                            {
                                service: "Удаление ретенционной кисты",
                                amount: 25000
                            },
                            {
                                service: "Удаление атеромы/липомы кожи лица до 5 см",
                                amount: 50000
                            },
                            {
                                service: "Вскрытие абсцесса кожи",
                                amount: "от 10 000"
                            },
                            {
                                service: "Лечение перелома челюстей (шинирование)",
                                amount: 50000
                            },
                            {
                                service: "Снятие шин",
                                amount: 10000
                            },
                            {
                                service: "Активация шин",
                                amount: 3000
                            },
                            {
                                service: "Вправление вывиха нижней челюсти",
                                amount: 10000
                            }
                        ]
                    }
                ]
            },
            {
                name: "Дополнительно",
                types: [
                    {
                        name: "Местное обезболивание",
                        price: [
                            {
                                service: "Анестезия аппликационная",
                                amount: 1000
                            },
                            {
                                service: "Анестезия инфильтрационная",
                                amount: 3000
                            },
                            {
                                service: "Анестезия проводниковая",
                                amount: 4000
                            }
                        ]
                    },
                    {
                        name: "Рентген диагностика",
                        price: [
                            {
                                service: "Рентген снимок (1 зуб)",
                                amount: 2000
                            },
                            {
                                service: "Контрольный снимок",
                                amount: 1000
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "s4",
        categories: [
            {
                name: "Имплантация",
                types: [
                    {
                        name: "Имплантация",
                        price: [
                            {
                                service: "Установка импланта \"Dio\" (Корея)",
                                amount: 120000
                            },
                            {
                                service: "Установка импланта \"АnyOne\" (Корея)",
                                amount: 150000
                            },
                            {
                                service: "Установка импланта \"AnyRidge\" (Корея)",
                                amount: 180000
                            },
                            {
                                service: "Установка импланта \"Straumann\" (Швейцария)",
                                amount: 350000
                            },
                            {
                                service: "Имплантация по методике \"All on 4\" + временный протез (импланты \"Dio\")",
                                amount: 1000000
                            },
                            {
                                service: "Имплантация по методике \"All on 6\" + временный протез (импланты \"Dio\")",
                                amount: 1200000
                            },
                            {
                                service: "Имплантация по методике \"All on 4\" + временный протез (импланты \"AnyRidge\")",
                                amount: 1300000
                            },
                            {
                                service: "Имплантация по методике \"All on 6\" + временный протез (импланты \"AnyRidge\")",
                                amount: 1500000
                            },
                            {
                                service: "Установка формирователя десны импланта \"Straumann\" (Швейцария)",
                                amount: 50000
                            },
                            {
                                service: "Установка заглушки импланта\"Straumann\" (Швейцария)",
                                amount: 30000
                            },
                            {
                                service: "Установка формирователя десны импланта \"AnyRidge\" (Корея)",
                                amount: 25000
                            },
                            {
                                service: "Установка формирователя десны импланта \"АnyOne\" (Корея)",
                                amount: 15000
                            },
                            {
                                service: "Установка формирователя десны импланта \"Dio\" (Корея)",
                                amount: 10000
                            },
                            {
                                service: "Пины для мембраны 1 шт",
                                amount: 10000
                            },
                            {
                                service: "Расщепление кости",
                                amount: 35000
                            },
                            {
                                service: "Синуслифтинг закрытый",
                                amount: 100000
                            },
                            {
                                service: "Синуслифтинг открытый 1-я категория сложности",
                                amount: 150000
                            },
                            {
                                service: "Синуслифтинг открытый 2-я категория сложности",
                                amount: 200000
                            },
                            {
                                service: "Синуслифтинг открытый 3-я категория сложности",
                                amount: 250000
                            },
                            {
                                service: "Bottis костный материал 1гр (Германия)",
                                amount: 130000
                            },
                            {
                                service: "S1 костный материал 0,5гр (Корея)",
                                amount: 146000
                            },
                            {
                                service: "S1 костный материал 1,0 гр (Корея)",
                                amount: 260000
                            },
                            {
                                service: "S1 костный материал 2,0 гр (Корея)",
                                amount: 430000
                            },
                            {
                                service: "BOSS костный материал 0.25гр (Корея)",
                                amount: 44000
                            },
                            {
                                service: "BOSS костный материал 0.5гр (Корея)",
                                amount: 70000
                            },
                            {
                                service: "BOSS костный материал 1,0.гр (Корея)",
                                amount: 120000
                            },
                            {
                                service: "COLLA коллагеновая мембрана 10х20мм (Корея)",
                                amount: 44000
                            },
                            {
                                service: "COLLA коллагеновая мембрана 15х20мм (Корея)",
                                amount: 52000
                            },
                            {
                                service: "COLLA коллагеновая мембрана 20х30мм (Корея)",
                                amount: 80000
                            },
                            {
                                service: "COLLA коллагеновая мембрана 30х40мм (Корея)",
                                amount: 124000
                            },
                            {
                                service: "Хирургический шаблон",
                                amount: 100000
                            },
                            {
                                service: "Удаление имплантанта (от сложности)",
                                amount: "от 18 000"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Дополнительно",
                types: [
                    {
                        name: "Местное обезболивание",
                        price: [
                            {
                                service: "Анестезия аппликационная",
                                amount: 1000
                            },
                            {
                                service: "Анестезия инфильтрационная",
                                amount: 3000
                            },
                            {
                                service: "Анестезия проводниковая",
                                amount: 4000
                            }
                        ]
                    },
                    {
                        name: "Рентген диагностика",
                        price: [
                            {
                                service: "Рентген снимок (1 зуб)",
                                amount: 2000
                            },
                            {
                                service: "Контрольный снимок",
                                amount: 1000
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "s5",
        categories: [
            {
                name: "Съемные конструкции",
                types: [
                    {
                        name: "Съемные конструкции",
                        price: [
                            {
                                service: "Съёмный протез 1 челюсть",
                                amount: 100000
                            },
                            {
                                service: "Частичный съемный протез на одну челюсть",
                                amount: 80000
                            },
                            {
                                service: "Бюгельный протез 1 челюсть",
                                amount: 120000
                            },
                            {
                                service: "Бюгельный протез на замках 1 челюсть",
                                amount: 150000
                            },
                            {
                                service: "Бюгельный протез на балке 1 челюсть",
                                amount: 400000
                            },
                            {
                                service: "Нейлоновый протез",
                                amount: 120000
                            },
                            {
                                service: "Микропротез",
                                amount: 45000
                            },
                            {
                                service: "Аттачмены",
                                amount: 45000
                            },
                            {
                                service: "Коррекция съёмного протеза",
                                amount: 7000
                            },
                            {
                                service: "Протезирование на телескопах 1 челюсть",
                                amount: 250000
                            },
                            {
                                service: "Штифтовая/культевая вкладка КХС",
                                amount: 20000
                            },
                            {
                                service: "Штифтовая/культевая вкладка КХС многокорневая",
                                amount: 25000
                            },
                            {
                                service: "Штифтовая/культевая вкладка цирконевая",
                                amount: 55000
                            },
                            {
                                service: "Цифровое интраоральное 3D-сканирование зубов",
                                amount: 50000
                            }
                        ]
                    }
                ]
            },
            {
                name: "Несъёмные конструкции",
                types: [
                    {
                        name: "Несъёмные конструкции",
                        price: [
                            {
                                service: "Циркониевая коронка на импланте Dio",
                                amount: 110000
                            },
                            {
                                service: "Циркониевая коронка на импланте AnyOne",
                                amount: 120000
                            },
                            {
                                service: "Циркониевая коронка на импланте AnyRidge",
                                amount: 130000
                            },
                            {
                                service: "Циркониевая коронка на импланте Straumann",
                                amount: 250000
                            },
                            {
                                service: "Винир, коронка керамическая прессованная Еmax",
                                amount: 120000
                            },
                            {
                                service: "Винир, коронка керамическая (Дисиликат)",
                                amount: 130000
                            },
                            {
                                service: "Вкладка, накладки Emax",
                                amount: 110000
                            },
                            {
                                service: "\"All on 4,  All on 6\"  на металлокерамике за 1 ед",
                                amount: 80000
                            },
                            {
                                service: "\"All on 4,  All on 6\"  на цирконии за 1 ед",
                                amount: 130000
                            },
                            {
                                service: "Коронка металлокерамическая на зуб",
                                amount: 65000
                            },
                            {
                                service: "Коронка металлокерамическая на импланте",
                                amount: 90000
                            },
                            {
                                service: "Циркониевая коронка на зуб",
                                amount: 100000
                            },
                            {
                                service: "Восковое моделирование (WaxUp) 1 ед.",
                                amount: 10000
                            },
                            {
                                service: "Временная коронка (ПМА, Лабораторная работа) ",
                                amount: 25000
                            },
                            {
                                service: "Временная коронка на импланте (ПМА)",
                                amount: 50000
                            },
                            {
                                service: "Временная коронка (Protemt 4)",
                                amount: 15000
                            },
                            {
                                service: "Цифровое интраоральное 3D-сканирование зубов",
                                amount: 50000
                            }
                        ]
                    }
                ]
            },
            {
                name: "Дополнительно",
                types: [
                    {
                        name: "Местное обезболивание",
                        price: [
                            {
                                service: "Анестезия аппликационная",
                                amount: 1000
                            },
                            {
                                service: "Анестезия инфильтрационная",
                                amount: 3000
                            },
                            {
                                service: "Анестезия проводниковая",
                                amount: 4000
                            }
                        ]
                    },
                    {
                        name: "Рентген диагностика",
                        price: [
                            {
                                service: "Рентген снимок (1 зуб)",
                                amount: 2000
                            },
                            {
                                service: "Контрольный снимок",
                                amount: 1000
                            }
                        ]
                    },
                    {
                        name: "Дополнительные расходы",
                        price: [
                            {
                                service: "Оклюфаст (Occlufast) для регистрации прикуса",
                                amount: 5000
                            },
                            {
                                service: "Снятие штампованной коронки ( 1 ед.)",
                                amount: 3500
                            },
                            {
                                service: "Снятие М\/К коронки (1 ед.)",
                                amount: 4500
                            },
                            {
                                service: "Снятие циркониевой коронки (1 ед.)",
                                amount: 8000
                            },
                            {
                                service: "Диагностический оттиск и модель",
                                amount: 10000
                            },
                            {
                                service: "Временная цементировка",
                                amount: 6500
                            },
                            {
                                service: "Постоянная цементировка на Fuji Plus",
                                amount: 9000
                            },
                            {
                                service: "Снятие слепков массой \" Elit HD\" с 1 челюсти",
                                amount: 15000
                            },
                            {
                                service: "Снятие слепка с обеих челюстей Zeta +",
                                amount: 10000
                            },
                            {
                                service: "Индивидуальная ложка",
                                amount: 10000
                            },
                            {
                                service: "Справка",
                                amount: 3000
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "s6",
        categories: [
            {
                name: "Ортодонтия",
                types: [
                    {
                        name: "Ортодонтия",
                        price: [
                            {
                                service: "Металлические брекеты (США) (одна челюсть)",
                                amount: 90000
                            },
                            {
                                service: "Самолигирующие металлические брекеты (одна челюсть)",
                                amount: 180000
                            },
                            {
                                service: "Самолигирующие металлические брекеты \"Н4\" (США) (одна челюсть)",
                                amount: 300000
                            },
                            {
                                service: "Самолигирующие металлические брекеты  \"Damon\" (США) (одна челюсть)",
                                amount: 320000
                            },
                            {
                                service: "Самолигирующие брекеты \"Damon clear\" (США) (одна челюсть)",
                                amount: 370000
                            },
                            {
                                service: "Элайнеры Invisalign",
                                amount: "4900$"
                            },
                            {
                                service: "Диагностика для Invisalign",
                                amount: "600$"
                            },
                            {
                                service: "Установка апарата MSE ",
                                amount: 350000
                            },
                            {
                                service: "Функциональная диагностика",
                                amount: 200000
                            },
                            {
                                service: "Пластинка с микровинтом",
                                amount: "40000-80000"
                            },
                            {
                                service: "Установка минивинта",
                                amount: 50000
                            },
                            {
                                service: "Установка ретейнера",
                                amount: 16500
                            },
                            {
                                service: "Подклейка ретейнера",
                                amount: 5000
                            },
                            {
                                service: "Снятие ретейнера",
                                amount: 5000
                            },
                            {
                                service: "Коррекция брекетов",
                                amount: 15000
                            },
                            {
                                service: "Замена лигатур",
                                amount: 5000
                            },
                            {
                                service: "Стоперы\/Крючки\/Кнопки\/Силовые тяги",
                                amount: 2500
                            },
                            {
                                service: "Тяги резиновые",
                                amount: 1000
                            },
                            {
                                service: "Повторная фиксация брекетов",
                                amount: 5000
                            },
                            {
                                service: "Снятие брекетов и полировка зубов (1 челюсть)",
                                amount: 13500
                            },
                            {
                                service: "Каппа на одну челюсть",
                                amount: 25000
                            },
                            {
                                service: "Диагностика (снятие слепков, модель,фотопротокол, разбор снимка)",
                                amount: 25000
                            },
                            {
                                service: "Разбор снимка по ТРГ, 3Д с составлением плана лечения",
                                amount: 5000
                            },
                            {
                                service: "Цифровое интраоральное 3D-сканирование зубов",
                                amount: 50000
                            }
                        ]
                    }
                ]
            },
            {
                name: "Детская ортодонтия",
                types: [
                    {
                        name: "Детская ортодонтия",
                        price: [
                            {
                                service: "Съемный ортодонтический аппарат без винта с вестибулярной дугой, кламмерами Адамса",
                                amount: 50000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с винтом",
                                amount: 80000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с винтом Бертони",
                                amount: 150000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с окклюзионными накладками",
                                amount: 65000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с винтом, окклюзионными накладками",
                                amount: 85000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с винтом, наклонной плоскости",
                                amount: 85000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с винтом, заслонкой для языка",
                                amount: 85000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с заслонкой для языка",
                                amount: 60000
                            },
                            {
                                service: "Съемный ортодонтический аппарат с бусинкой для языка",
                                amount: 55000
                            },
                            {
                                service: "Съемный ортодонтический аппарат Брюкля",
                                amount: 65000
                            },
                            {
                                service: "Съемный ортодонтический аппарат Андрезена-Гойппля",
                                amount: 150000
                            },
                            {
                                service: "Твин-блок с 1 винтом",
                                amount: 160000
                            },
                            {
                                service: "Твин-блок с 2 винтами",
                                amount: 165000
                            },
                            {
                                service: "Расширяющий аппарат Хугекс",
                                amount: 150000
                            },
                            {
                                service: "Несъемный расширяющий аппарат Марко Росса",
                                amount: 150000
                            },
                            {
                                service: "Держатель места",
                                amount: 18000
                            },
                            {
                                service: "Лицевая маска",
                                amount: 30000
                            },
                            {
                                service: "Трейнер",
                                amount: 90000
                            },
                            {
                                service: "Аппарат Pendillum",
                                amount: 150000
                            },
                            {
                                service: "Аппарат Френкля",
                                amount: 100000
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "s7",
        categories: [
            {
                name: "Продажи",
                types: [
                    {
                        name: "Продажи",
                        price: [
                            {
                                service: "Ирригатор \"Portable\" (голубой)",
                                amount: 23000
                            },
                            {
                                service: "Ирригатор \"WaterFlosser\" (зеленый)",
                                amount: 28000
                            },
                            {
                                service: "Зубная щетка Tello \"4920\"",
                                amount: 3500
                            },
                            {
                                service: "Воск ортодонтический",
                                amount: 1000
                            },
                            {
                                service: "Ершики \"TePe\"",
                                amount: 1000
                            },
                            {
                                service: "Паста \"антикариес\"",
                                amount: 4000
                            },
                            {
                                service: "Паста \"Atomy\"",
                                amount: 2500
                            },
                            {
                                service: "Щетки \"Atomy\"",
                                amount: 1500
                            },
                            {
                                service: "Резинка \"Бурундук\"",
                                amount: 1000
                            },
                            {
                                service: "Резинка \"Лисичка\"",
                                amount: 1000
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export async function getService(id: string): Promise<ServicesInterface> {
    return <ServicesInterface>servicePage.find((service) => service.id === id);
}
export async function getServicePrice(id: string): Promise<ServicePriceInterface> {
    return <ServicePriceInterface>servicesPrice.find((service) => service.id === id);
}