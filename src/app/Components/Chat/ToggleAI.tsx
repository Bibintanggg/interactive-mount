"use client"

import { MessageCircle } from "lucide-react";

export default function ToggleAI({ onClick }: { onClick?: () => void}) {
    return (
        <button onClick={onClick}
        className="bg-white cursor-pointer w-16 h-16 right-4 bottom-4 z-[99999] rounded-full fixed flex flex-col justify-center">
            <div className="flex items-center flex-col">
                <MessageCircle size={30}/>
            </div>
        </button>
    )
}