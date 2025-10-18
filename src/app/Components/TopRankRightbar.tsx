import { Crown } from "lucide-react";
import TopCards from "./TopCards";

export default function TopRank() {
  return (
    <div className="w-96 bg-gray-900/50 border border-gray-800 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <Crown fill="gold" className="text-yellow-400" size={28} />
        <h2 className="text-2xl font-bold text-white">Top Pendaki</h2>
      </div>

      <TopCards
        rank={1}
        icon={<Crown fill="gold" size={20} />}
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
        icon={<Crown fill="silver" size={20} />}
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
        icon={<Crown fill="#CD7F32" size={20} />}
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

