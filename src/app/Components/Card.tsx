import { CardProps } from "@/data/card-data";
import React from "react";

export default function Card({  title, icon, reach}: CardProps) {
    return (
        <div className="p-4 flex flex-col items-start bg-black/5 w-80 h-36 rounded-xl mt-10">
            <div className="flex items-center gap-4">
            <div className="bg-purple-800 w-14 h-14 flex items-center justify-center text-white rounded-full">
                {icon}
            </div>
            <p className="text-sans text-2xl font-medium">{title}</p>
            </div>
            <span className="p-3 text-xl font-sans">{reach} Mount</span>
        </div>
    )
}