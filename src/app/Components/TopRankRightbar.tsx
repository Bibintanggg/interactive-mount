import { Crown } from "lucide-react";
import TopCards from "./TopCards";

export default function TopRank() {
  return (
    <div className="w-96 bg-[#111] border border-[#222] rounded-xl p-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
      
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#222]">
        <div className="flex items-center gap-2">
          <Crown size={20} className="text-gray-400" />
          <h2 className="text-lg font-semibold text-white">Top Pendaki</h2>
        </div>
        <div className="text-[10px] text-gray-600 font-mono">LIVE</div>
      </div>

      <TopCards
        rank={1}
        icon={<Crown fill="#FFD700" size={16} />}
        profile="/assets/file.jpg"
        name="BintangGG"
        summits={20}
        role="Pendaki Legendaris"
        location="Jakarta, Indonesia"
        region={4}
        climbs={20}
      />
      
      <TopCards
        rank={2}
        icon={<Crown fill="#C0C0C0" size={16} />}
        profile="/api/placeholder/80/80"
        name="MountainHero"
        summits={18}
        role="Pendaki Senior"
        location="Bandung, Indonesia"
        region={3}
        climbs={18}
      />
      
      <TopCards
        rank={3}
        icon={<Crown fill="#CD7F32" size={16} />}
        profile="/api/placeholder/80/80"
        name="SummitMaster"
        summits={15}
        role="Pendaki Veteran"
        location="Yogyakarta, Indonesia"
        region={3}
        climbs={15}
      />
    </div>
  );
}