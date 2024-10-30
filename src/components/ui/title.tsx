import React from "react";

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return <h1 className="text-[33px] font-bold text-mainTextColor -ml-0.5">
        {title}
    </h1>
}
export default Title;