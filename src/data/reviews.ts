export interface ReviewInterface {
    id: string,
    video: string,
    previewImg: string,
    personName: string
}

export const reviews: ReviewInterface[] = [
    { id: "r1", video: "/videos/r1.mp4", previewImg: "/images/preview/r1.png", personName: "Кажкеев Гайнулла" },
    { id: "r2", video: "/videos/r2.mov", previewImg: "/images/preview/r2.png", personName: "Егембердиева Аида" },
    { id: "r3", video: "/videos/r3.mp4", previewImg: "/images/preview/r3.png", personName: "Пациент Мадина" },
    { id: "r4", video: "/videos/r4.mp4", previewImg: "/images/preview/r4.png", personName: "Болтахан Адлет" },
    { id: "r5", video: "/videos/r5.mov", previewImg: "/images/preview/r5.png", personName: "Пациент Мадина" },
    { id: "r6", video: "/videos/r6.mov", previewImg: "/images/preview/r6.png", personName: "Ахтаева Алтынкыз" },
    { id: "r7", video: "/videos/r7.mov", previewImg: "/images/preview/r7.png", personName: "Пациент №7" },
    { id: "r8", video: "/videos/r8.mov", previewImg: "/images/preview/r8.png", personName: "Пациент Альмира" },
    { id: "r9", video: "/videos/r9.mp4", previewImg: "/images/preview/r9.png", personName: "Жапанкан Сана" },
    { id: "r10", video: "/videos/r10.mp4", previewImg: "/images/preview/r10.png", personName: "Клышев Меирлан" }
]