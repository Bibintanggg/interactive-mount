import { TopRankData } from "@/data/top-rank-data";
import Image from "next/image";

import Streak from "./Streak";
import { Droplet } from "lucide-react";
import React from "react";

export default function TopCards({ name, profile, icon, summits, role, location, climbs, region, rank = 1 }: {
    name: string
    profile: string
    icon: React.ReactNode
    summits: number
    role: string
    location: string
    climbs: number
    region: number
    rank: number
}) {
  const rankColors: Record<number, { bg: string; badge: string; border: string }> = {
    1: { bg: "from-yellow-600 to-yellow-500", badge: "bg-yellow-400 text-gray-900", border: "border-yellow-400" },
    2: { bg: "from-gray-500 to-gray-400", badge: "bg-gray-300 text-gray-900", border: "border-gray-400" },
    3: { bg: "from-orange-600 to-orange-500", badge: "bg-orange-400 text-gray-900", border: "border-orange-400" }
  };
  
  const colors = rankColors[rank] || rankColors[1];
  
  return (
    <div className={`relative w-full bg-gradient-to-r ${colors.bg} rounded-2xl p-6 text-white shadow-xl mb-4 hover:scale-[1.02] transition-transform duration-300`}>
      <div className="absolute top-4 right-4 z-10">
        <div className={`${colors.badge} px-3 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
          #{rank}
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            {icon}
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-20 h-20 rounded-full ${colors.border} border-3 bg-gray-800 flex items-center justify-center text-4xl overflow-hidden`}>
              {profile ? (
                <img src={profile} alt={name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-bold">{name[0]}</span>
              )}
            </div>
            <Streak icon={<Droplet fill="orange" />} num={20} />
          </div>
        </div>

        <div className="flex-1 pt-2">
          <h3 className="font-bold text-xl mb-1">{name}</h3>
          <p className="text-sm opacity-90 mb-1">{summits} puncak ditaklukkan</p>
          <p className="text-sm opacity-75 mb-1">{role}</p>
          <p className="text-xs opacity-75 mb-3">{location}</p>
          
          <div className="flex gap-4 text-xs">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              📍 {region} Daerah
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              ⛰️ {climbs} Mendaki
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
