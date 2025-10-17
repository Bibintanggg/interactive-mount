import { TopRankData } from "@/data/top-rank-data";
import Image from "next/image";

export default function TopCards({ name, profile, icon, summits, role, location, climbs, region }: TopRankData) {
    return (
        <div className="w-full h-40 bg-gradient-to-r from-purple-700 to-purple-500 backdrop-blur-md rounded-xl p-6 text-white shadow-lg">
            <div className="relative flex items-start gap-5">
                <div className="absolute right-0 bg-yellow-400 text-purple-900 px-2 py-1 rounded-full text-xs font-bold">
                    #1
                </div>
                <div className="relative w-fit animate-pulse transition-all duration-100 ease-in-out">

                    <div className="absolute -top-3 left-1/2 -translate-x-[55%] text-yellow-400">
                        {icon}
                    </div>

                    <Image
                        src={profile}
                        width={85}
                        height={85}
                        alt="profile"
                        className="rounded-full border-2 border-yellow-400"
                    />
                </div>

                <div className="flex flex-col font-sans">
                    <p className="font-semibold text-lg">{name}</p>
                    <span className="text-sm opacity-80">{summits} summits</span>
                    <span className="text-sm opacity-80">{role}</span>
                    <span className="text-sm opacity-80">{location}</span>

                    <div className="mt-4 flex gap-3">
                        <span className="text-xs opacity-80">{region} Daerah</span>
                        <span className="text-xs opacity-80">{climbs} Mendaki</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
