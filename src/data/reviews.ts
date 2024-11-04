export interface ReviewInterface {
    id: string,
    video: string,
    previewImg: string,
    personName: string
}

export const reviews: ReviewInterface[] = [
    { id: "f1", video: "/videos/scanner.mp4", previewImg: "/images/preview/scanner.jpg", personName: "Диаса Ардаковича" },
    { id: "f2", video: "/videos/scanner.mp4", previewImg: "/images/preview/scanner.jpg", personName: "Диаса Ардаковича" },
    { id: "f3", video: "/videos/scanner.mp4", previewImg: "/images/preview/scanner.jpg", personName: "Диаса Ардаковича" },
    { id: "f4", video: "/videos/scanner.mp4", previewImg: "/images/preview/scanner.jpg", personName: "Диаса Ардаковича" },
    { id: "f5", video: "/videos/scanner.mp4", previewImg: "/images/preview/scanner.jpg", personName: "Диаса Ардаковича" },
    { id: "f6", video: "/videos/scanner.mp4", previewImg: "/images/preview/scanner.jpg", personName: "Диаса Ардаковича" },
]