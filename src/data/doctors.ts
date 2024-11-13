export interface DoctorInterface {
    id: string,
    name: string,
    type: string,
    img: string,
    experience: number,
    services?: string[]
}
export interface DoctorWorksInterface {
    id: string,
    works: {
        before?: string,
        after: string,
        description: string
    }[]
}

export const doctors: DoctorInterface[] = [
    { id: "d1", name: "Арман Канатович", type: "Хирург-имплантолог", img: "/images/doctors/d1/profile.jpg", experience: 12, services: ["s3", "s4"] },
    { id: "d2", name: "Алмаз Нурланович", type: "Хирург-имплантолог", img: "/images/doctors/d2/profile.jpg", experience: 12, services: ["s3", "s4"] },
    { id: "d3", name: "Мират Дулатович", type: "Ортодонт-терапевт", img: "/images/doctors/d3/profile.jpg", experience: 5, services: ["s1", "s2", "s6"] },
    { id: "d4", name: "Зарина Рашидовна", type: "Ортодонт-терапевт", img: "/images/doctors/d4/profile.jpg", experience: 5, services: ["s1", "s2", "s6"] },
    { id: "d5", name: "Болат Базылбекович", type: "Ортопед", img: "/images/doctors/d5/profile.jpg", experience: 25, services: ["s5"] }
]
const doctorWorks: DoctorWorksInterface[] = [
    {
        id: "d1",
        works: [
            { before: "/images/doctors/d1/b1.jpg", after: "/images/doctors/d1/a1.jpg", description: "Имплантация Зубов методом ALL-ON-6: Металлокерамика, протезирование." },
            { before: "/images/doctors/d1/b2.jpg", after: "/images/doctors/d1/a2.jpg", description: "Имплантация Зубов методом ALL-ON-6 - полное протезирование." },
            { before: "/images/doctors/d1/b3.jpg", after: "/images/doctors/d1/a3.jpg", description: "ALL-ON-6 верхней челюсти + протезирование, удаление несостоятельных зубов, срок имплантация + изготовление протезов: 5 дней" },
            { before: "/images/doctors/d1/b4.jpg", after: "/images/doctors/d1/a4.jpg", description: "ALL-ON-6 верхней челюсти + протезирование, удаление несостоятельных зубов, срок имплантация + изготовление протезов: 5 дней" }
        ]
    },
    {
        id: "d2",
        works: [
            { before: "/images/doctors/d2/b1.jpg", after: "/images/doctors/d2/a1.jpg", description: "Удаление образования слизистой нижней губы. До операции и после через 2 недели." },
            { before: "/images/doctors/d2/b2.jpg", after: "/images/doctors/d2/a2.jpg", description: "Удаление горизонтально дистопированного зуба мудрости." },
            { before: "/images/doctors/d2/b3.jpg", after: "/images/doctors/d2/a3.jpg", description: "Классическое удаление зуба мудрости, без каких-либо дополнительных манипуляций." },
            { before: "/images/doctors/d2/b4.jpg", after: "/images/doctors/d2/a4.jpg", description: "Удаление корня 3.5 зуба с хроническим гранулёматозным периодонтитом." },
            { before: "/images/doctors/d2/b5.jpg", after: "/images/doctors/d2/a5.jpg", description: "Удаление зуба мудрости с изогнутым медиальным корнем, который препятствовал удалению классическим методом. В связи с этим пришлось прибегнуть к продольной диссекции зуба и дальнейшему удалению классическим методом." },
            { before: "/images/doctors/d2/b6.jpg", after: "/images/doctors/d2/a6.jpg", description: "Удаление  вертикально дистопированного зуба мудрости с ещё не развитыми полностью корнями по ортодонтическим показаниям." },
            { after: "/images/doctors/d2/a7.jpg", description: "Коронка после имплантации в области зуба 1.5. Импользован имплант AnyOne компании Megagen." }
        ]
    },
    {
        id: "d3",
        works: [
            { before: "/images/doctors/d3/b1.jpg", after: "/images/doctors/d3/a1.jpg", description: "Лечения на брекет-системе, срок 1 год." },
            { before: "/images/doctors/d3/b2.jpg", after: "/images/doctors/d3/a2.jpg", description: "Лечения на брекет-системе, срок 1 год." },
            { before: "/images/doctors/d3/b3.jpg", after: "/images/doctors/d3/a3.jpg", description: "Лечения на брекет-системе без удаления, срок 1.7 месяцев." },
            { before: "/images/doctors/d3/b4.jpg", after: "/images/doctors/d3/a4.jpg", description: "Лечения на брекет-системе, срок 1,8 месяцев." },
            { before: "/images/doctors/d3/b5.jpg", after: "/images/doctors/d3/a5.jpg", description: "Восстановление эстетики и жевательной функции: лечение брекет-системой с последующей установкой коронок на имплантах и зубах." }
        ]
    },
    {
        id: "d4",
        works: [
            { before: "/images/doctors/d4/b1.jpg", after: "/images/doctors/d4/a1.jpg", description: "Лечение контактного кариеса верхних центральных Резцов." },
            { before: "/images/doctors/d4/b2.jpg", after: "/images/doctors/d4/a2.jpg", description: "Лечение на брекет системе, создание места для последующей имплантации, срок лечения 2 года." },
            { before: "/images/doctors/d4/b3.jpg", after: "/images/doctors/d4/a3.jpg", description: "Лечение на брекет системе, срок 2 года." },
            { before: "/images/doctors/d4/b4.jpg", after: "/images/doctors/d4/a4.jpg", description: "Лечение вторичного глубокого кариеса 4.7 зуба." },
            { before: "/images/doctors/d4/b5.jpg", after: "/images/doctors/d4/a5.jpg", description: "Лечение глубокого кариеса с последующей реставрацией." }
        ]
    },
    {
        id: "d5",
        works: [
            { before: "/images/doctors/d5/b1.jpg", after: "/images/doctors/d5/a1.jpg", description: "5 виниров и 2 цирк. коронки. Пациентка была не довольна цветом своих зубов. На постоянное выполнение пломб с 12 зуба." },
            { before: "/images/doctors/d5/b2.jpg", after: "/images/doctors/d5/a2.jpg", description: "Установка циркониевого мостовидного протеза на имплантах Анкелоз Германия 11-22." },
            { before: "/images/doctors/d5/b3.jpg", after: "/images/doctors/d5/a3.jpg", description: "Установка виниров." },
            { before: "/images/doctors/d5/b4.jpg", after: "/images/doctors/d5/a4.jpg", description: "Цирконивые коронки на имплантах Дио Юк и виниры." },
            { before: "/images/doctors/d5/b5.jpg", after: "/images/doctors/d5/a5.jpg", description: "Установка протезов на балочной фиксации." }
        ]
    }
]

export async function getDoctor(id: string): Promise<DoctorInterface> {
    return <DoctorInterface>doctors.find((doctor) => doctor.id === id);
}
export async function getDoctorWorks(id: string): Promise<DoctorWorksInterface> {
    return <DoctorWorksInterface>doctorWorks.find((doctor) => doctor.id === id);
}