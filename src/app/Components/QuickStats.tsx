import { TrendingUp, Activity, Award, Users } from 'lucide-react';
import React from 'react';

export default function QuickStats() {
  const stats = [
    { label: "Minggu Ini", value: "+3", icon: <TrendingUp size={16} />, change: "+12%" },
    { label: "Total Jam", value: "156", icon: <Activity size={16} />, change: "+8%" },
    { label: "Rank", value: "#12", icon: <Award size={16} />, change: "+2" },
    { label: "Followers", value: "2.4k", icon: <Users size={16} />, change: "+15%" }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-[#111] border border-[#222] rounded-xl p-4 hover:border-[#333] transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
            <div className="text-gray-400">{stat.icon}</div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">{stat.value}</span>
            <span className="text-xs text-green-500 font-mono">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}