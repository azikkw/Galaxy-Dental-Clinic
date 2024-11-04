"use client";

import React, { useState } from "react";
import { ReactDOM } from "next/dist/server/route-modules/app-page/vendored/ssr/entrypoints";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CloseIcon, PlayerIcon } from "@/app/assets/defaultIcons";

interface VideoCardProps {
    previewImg: string,
    video: string,
    imgClassName?: string
}

const VideoCard: React.FC<VideoCardProps> = ({previewImg, video, imgClassName}) => {

    const [showVideo, setShowVideo] = useState(false);

    const VideoModal = (
        <div className="w-full h-dvh flex flex-col items-end sm:items-center bg-[#000000DA] px-[15px] py-5 fixed left-0 top-0 z-10">
            <CloseIcon className="size-9 text-white mb-7 sm:absolute sm:right-5 sm:top-5 cursor-pointer" onClick={() => setShowVideo(false)}/>
            <video src={video} poster={previewImg} className="w-full sm:w-auto h-[90%] sm:h-full object-cover rounded-[15px]" controls/>
            <span className="absolute left-0 top-0 w-full h-full -z-[1]" onClick={() => setShowVideo(false)}/>
        </div>
    );

    return <div className="w-full cursor-pointer">
        <div className={cn("relative", imgClassName)} onClick={() => setShowVideo(true)} >
            <PlayerIcon className="size-[75px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] lg:transition-all lg:duration-200 lg:size-[70px] lg:hover:scale-110" />
            <Image src={previewImg} alt="Video preview img" fill className="!static !w-full object-cover rounded-[15px]"/>
        </div>
        { showVideo && ReactDOM.createPortal(VideoModal, document.body) }
    </div>
}
export default VideoCard;