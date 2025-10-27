import React from "react";

export default function Card({ title, icon, reach }: {title: string, icon: React.ReactNode, reach: number}) {
  return (
    <div className="group relative bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#444] transition-all duration-200 cursor-pointer">
      
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
            {icon}
          </div>
          <h3 className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">{title}</h3>
        </div>
        
        <div className="text-[10px] text-gray-600 font-mono bg-[#1a1a1a] px-2 py-1 rounded border border-[#222]">
          #{String(reach).padStart(3, '0')}
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-4xl font-bold text-white">{reach}</span>
        <span className="text-gray-500 text-sm">Gunung</span>
      </div>
      
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-600">Progress</span>
        <span className="text-green-500 font-mono">+{Math.floor(Math.random() * 20)}% bulan ini</span>
      </div>
      
      <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>
    </div>
  );
}