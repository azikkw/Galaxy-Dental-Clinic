"use client";

import React, { useState, useRef } from "react";
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
        <div className="w-full h-dvh flex flex-col items-end bg-[#000000DA] px-[15px] py-5 fixed left-0 top-0 z-10">
            <CloseIcon className="w-9 h-9 text-white mb-7" onClick={() => setShowVideo(false)}/>
            <video src={video} poster={previewImg} className="w-full h-[90%] object-cover rounded-[15px]" controls autoPlay={window.innerWidth > 768}/>
        </div>
    );

    return <div className="w-full cursor-pointer">
        <div className={cn("relative md:w-[400px]", imgClassName)} onClick={() => setShowVideo(true)} >
            <PlayerIcon className="w-[75px] h-[75px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]" />
            <Image src={previewImg} alt="Video preview img" fill className="!static !w-full object-cover object-top rounded-[15px]"/>
        </div>
        { showVideo && ReactDOM.createPortal(VideoModal, document.body) }
    </div>
}
export default VideoCard;