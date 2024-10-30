export interface DoctorInterface {
    id: string,
    name: string,
    type: string,
    img: string,
    experience: number,
    services?: string[]
}

export const doctors: DoctorInterface[] = [
    { id: "d1", name: "Арман Канатович", type: "Хирург-имплантолог", img: "/images/d1.jpg", experience: 12, services: ["s3", "s4"] },
    { id: "d2", name: "Алмаз Нурланович", type: "Хирург-имплантолог", img: "/images/d2.jpg", experience: 12, services: ["s3", "s4"] },
    { id: "d3", name: "Мират Дулатович", type: "Ортодонт-терапевт", img: "/images/d3.jpg", experience: 5, services: ["s1", "s2", "s6"] },
    { id: "d4", name: "Зарина Рашидовна", type: "Ортодонт-терапевт", img: "/images/d4.jpg", experience: 5, services: ["s1", "s2", "s6"] },
    { id: "d5", name: "Болат Базылбекович", type: "Оротопед", img: "/images/d5.jpg", experience: 25, services: ["s5"] }
]

export const getDoctor = (id: string): DoctorInterface => {
    return <DoctorInterface>doctors.find((doctor) => doctor.id === id);
}