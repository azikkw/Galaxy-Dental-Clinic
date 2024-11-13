"use client";

import React, { useState } from "react";
import { ReactDOM } from "next/dist/server/route-modules/app-page/vendored/ssr/entrypoints";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlayerIcon } from "@/icons/defaultIcons";
import PopupWindow from "@/components/ui/PopupWindow";

interface VideoCardProps {
    previewImg: string,
    video: string,
    imgClassName?: string
    imgWidth: number
    imgHeight: number
}

const VideoCard: React.FC<VideoCardProps> = ({previewImg, video, imgWidth, imgHeight, imgClassName}) => {

    const [showVideo, setShowVideo] = useState(false);
    const closeWindow = () => setShowVideo(false);

    const VideoModal = (
        <PopupWindow closeWindow={closeWindow}>
            <video src={video} poster={previewImg} className="w-full sm:w-auto h-[90%] sm:h-full object-cover rounded-[15px]" controls/>
        </PopupWindow>
    );

    return <div className="w-full cursor-pointer">
        <div className={cn("group relative", imgClassName)} onClick={() => setShowVideo(true)} >
            <PlayerIcon className="size-[75px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] lg:transition-all lg:duration-200 lg:size-[70px] lg:group-hover:scale-110" />
            <Image src={previewImg} alt="Video preview img" width={imgWidth} height={imgHeight} className="w-full h-full object-cover rounded-[15px]"/>
        </div>
        { showVideo && ReactDOM.createPortal(VideoModal, document.body) }
    </div>
}
export default VideoCard;