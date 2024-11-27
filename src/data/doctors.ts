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
    { id: "arman-kanatovich", name: "Арман Канатович", type: "Челюстно-лицевой хирург, \nхирург-имплантолог", img: "/images/vrachi/arman-kanatovich/profile.jpg", experience: 12, services: ["hirurgia", "implantacziya"] },
    { id: "almaz-nurlanovich", name: "Алмаз Нурланович", type: "Челюстно-лицевой хирург, \nхирург-имплантолог", img: "/images/vrachi/almaz-nurlanovich/profile.jpg", experience: 12, services: ["hirurgia", "implantacziya"] },
    { id: "mirat-dulatovich", name: "Мират Дулатович", type: "Ортодонт-терапевт", img: "/images/vrachi/mirat-dulatovich/profile.jpg", experience: 5, services: ["prof-gigiena", "terapia", "ortodontia"] },
    { id: "zarina-rashidovna", name: "Зарина Рашидовна", type: "Ортодонт-терапевт", img: "/images/vrachi/zarina-rashidovna/profile.jpg", experience: 5, services: ["prof-gigiena", "terapia", "ortodontia"] },
    { id: "bolat-bazylbekovich", name: "Болат Базылбекович", type: "Ортопед", img: "/images/vrachi/bolat-bazylbekovich/profile.jpg", experience: 25, services: ["ortopedia"] }
]
const doctorWorks: DoctorWorksInterface[] = [
    {
        id: "arman-kanatovich",
        works: [
            { before: "/images/vrachi/arman-kanatovich/b1.jpg", after: "/images/vrachi/arman-kanatovich/a1.jpg", description: "Имплантация методом ALL-ON-6: постоянное протезирование." },
            { before: "/images/vrachi/arman-kanatovich/b2.jpg", after: "/images/vrachi/arman-kanatovich/a2.jpg", description: "Имплантация методом ALL-ON-6: полное временное протезирование." },
            { before: "/images/vrachi/arman-kanatovich/b3.jpg", after: "/images/vrachi/arman-kanatovich/a3.jpg", description: "ALL-ON-6 верхней челюсти: удаление несостоятельных зубов, имплантация + изготовление протезов, 5 дней." },
            { before: "/images/vrachi/arman-kanatovich/b4.jpg", after: "/images/vrachi/arman-kanatovich/a4.jpg", description: "ALL-ON-6 верхней челюсти: удаление несостоятельных зубов, имплантация + изготовление протезов, 5 дней." }
        ]
    },
    {
        id: "almaz-nurlanovich",
        works: [
            { before: "/images/vrachi/almaz-nurlanovich/b1.jpg", after: "/images/vrachi/almaz-nurlanovich/a1.jpg", description: "Удаление образования слизистой нижней губы. До операции и после через 2 недели." },
            { before: "/images/vrachi/almaz-nurlanovich/b2.jpg", after: "/images/vrachi/almaz-nurlanovich/a2.jpg", description: "Удаление горизонтально дистопированного зуба мудрости." },
            { before: "/images/vrachi/almaz-nurlanovich/b3.jpg", after: "/images/vrachi/almaz-nurlanovich/a3.jpg", description: "Удаление корня 3.5 зуба с хроническим гранулёматозным периодонтитом." },
            { before: "/images/vrachi/almaz-nurlanovich/b4.jpg", after: "/images/vrachi/almaz-nurlanovich/a4.jpg", description: "Удаление зуба мудрости с изогнутым медиальным корнем, который препятствовал удалению классическим методом. В связи с этим пришлось прибегнуть к продольной диссекции зуба и дальнейшему удалению классическим методом." },
            { before: "/images/vrachi/almaz-nurlanovich/b5.jpg", after: "/images/vrachi/almaz-nurlanovich/a5.jpg", description: "Удаление  вертикально дистопированного зуба мудрости с ещё не развитыми полностью корнями по ортодонтическим показаниям." },
            { before: "/images/vrachi/almaz-nurlanovich/b7.jpg", after: "/images/vrachi/almaz-nurlanovich/a7.jpg", description: "Установлен имплант компании Straumann в области зуба 4.6. Через 4 месяца установлена коронка из диоксида циркония." }
        ]
    },
    {
        id: "mirat-dulatovich",
        works: [
            { before: "/images/vrachi/mirat-dulatovich/b1.jpg", after: "/images/vrachi/mirat-dulatovich/a1.jpg", description: "Лечения на брекет-системе, срок 1 год." },
            { before: "/images/vrachi/mirat-dulatovich/b2.jpg", after: "/images/vrachi/mirat-dulatovich/a2.jpg", description: "Лечения на брекет-системе, срок 1 год." },
            { before: "/images/vrachi/mirat-dulatovich/b3.jpg", after: "/images/vrachi/mirat-dulatovich/a3.jpg", description: "Лечения на брекет-системе без удаления, срок 1.7 месяцев." },
            { before: "/images/vrachi/mirat-dulatovich/b4.jpg", after: "/images/vrachi/mirat-dulatovich/a4.jpg", description: "Лечения на брекет-системе, срок 1,8 месяцев." },
            { before: "/images/vrachi/mirat-dulatovich/b5.jpg", after: "/images/vrachi/mirat-dulatovich/a5.jpg", description: "Восстановление эстетики и жевательной функции: лечение брекет-системой с последующей установкой коронок на имплантах и зубах." }
        ]
    },
    {
        id: "zarina-rashidovna",
        works: [
            { before: "/images/vrachi/zarina-rashidovna/b1.jpg", after: "/images/vrachi/zarina-rashidovna/a1.jpg", description: "Лечение контактного кариеса верхних центральных Резцов." },
            { before: "/images/vrachi/zarina-rashidovna/b2.jpg", after: "/images/vrachi/zarina-rashidovna/a2.jpg", description: "Лечение на брекет системе, создание места для последующей имплантации, срок лечения 2 года." },
            { before: "/images/vrachi/zarina-rashidovna/b3.jpg", after: "/images/vrachi/zarina-rashidovna/a3.jpg", description: "Лечение на брекет системе, срок 2 года." },
            { before: "/images/vrachi/zarina-rashidovna/b4.jpg", after: "/images/vrachi/zarina-rashidovna/a4.jpg", description: "Лечение вторичного глубокого кариеса 4.7 зуба." },
            { before: "/images/vrachi/zarina-rashidovna/b5.jpg", after: "/images/vrachi/zarina-rashidovna/a5.jpg", description: "Лечение глубокого кариеса с последующей реставрацией." }
        ]
    },
    {
        id: "bolat-bazylbekovich",
        works: [
            { before: "/images/vrachi/bolat-bazylbekovich/b1.jpg", after: "/images/vrachi/bolat-bazylbekovich/a1.jpg", description: "5 виниров и 2 циркониевые коронки. Пациентка была не довольна цветом своих зубов. На постоянное выполнение пломб с 12 зуба." },
            { before: "/images/vrachi/bolat-bazylbekovich/b2.jpg", after: "/images/vrachi/bolat-bazylbekovich/a2.jpg", description: "Установка коронок из диоксид циркония на имплантах Ankylos." },
            { before: "/images/vrachi/bolat-bazylbekovich/b3.jpg", after: "/images/vrachi/bolat-bazylbekovich/a3.jpg", description: "Тотальное протезирование." },
            { before: "/images/vrachi/bolat-bazylbekovich/b4.jpg", after: "/images/vrachi/bolat-bazylbekovich/a4.jpg", description: "Установка виниров." },
            { before: "/images/vrachi/bolat-bazylbekovich/b5.jpg", after: "/images/vrachi/bolat-bazylbekovich/a5.jpg", description: "Установка протезов на балочной фиксации." }
        ]
    }
]

export async function getDoctor(id: string): Promise<DoctorInterface> {
    return <DoctorInterface>doctors.find((doctor) => doctor.id === id);
}
export async function getDoctorWorks(id: string): Promise<DoctorWorksInterface> {
    return <DoctorWorksInterface>doctorWorks.find((doctor) => doctor.id === id);
}