export interface ReviewInterface {
    id: string,
    video: string,
    previewImg: string,
    personName: string
}

export const reviews: ReviewInterface[] = [
    { id: "f1", video: "/videos/scanner.mp4", previewImg: "/images/preview/scanner.jpg", personName: "Диаса Ардаковича" },
]