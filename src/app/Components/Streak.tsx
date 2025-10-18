import React from "react";

export default function Streak({ num, icon}: {num: number, icon: React.ReactNode}) {
    return (
        <div className="flex items-center mt-3 gap-2">
            <div className="text-orange-400">
            {icon}
            </div>
            <p className="font-mono text-sm">{num}</p>
        </div>
    )
}