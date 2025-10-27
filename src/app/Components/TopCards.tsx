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
  const rankStyles: Record<number, { accent: string; bg: string }> = {
    1: { accent: "#FFD700", bg: "bg-gradient-to-br from-yellow-500/5 to-orange-500/5" },
    2: { accent: "#C0C0C0", bg: "bg-gradient-to-br from-gray-400/5 to-gray-500/5" },
    3: { accent: "#CD7F32", bg: "bg-gradient-to-br from-orange-600/5 to-red-600/5" }
  };
  
  const style = rankStyles[rank] || rankStyles[1];
  
  return (
    <div className={`relative w-full bg-[#111] border border-[#222] rounded-xl p-5 mb-3 hover:border-[#333] transition-all duration-200`}>
      
      <div className="absolute top-4 right-4">
        <div className="text-[11px] font-mono text-gray-600 bg-[#1a1a1a] px-2 py-1 rounded border border-[#222]">
          #{rank}
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute -top-1 -right-1 z-10" style={{ color: style.accent }}>
            {icon}
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-lg border-2 bg-[#0a0a0a] overflow-hidden" style={{ borderColor: style.accent }}>
              {profile ? (
                <img src={profile} alt={name} className="w-full h-full object-cover" />
              ) : (
                <span className="flex items-center justify-center h-full text-white font-bold text-xl">{name[0]}</span>
              )}
            </div>
            <Streak icon={<Droplet fill="orange" />} num={20} />
          </div>
        </div>

        <div className="flex-1 pt-1">
          <h3 className="font-semibold text-lg text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-400 mb-1">{summits} puncak ditaklukkan</p>
          <p className="text-xs text-gray-500 mb-1">{role}</p>
          <p className="text-xs text-gray-600 mb-3">{location}</p>
          
          <div className="flex gap-2 text-xs">
            <span className="bg-[#1a1a1a] text-gray-400 px-2 py-1 rounded border border-[#222]">
              📍 {region} Daerah
            </span>
            <span className="bg-[#1a1a1a] text-gray-400 px-2 py-1 rounded border border-[#222]">
              ⛰️ {climbs} Mendaki
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}