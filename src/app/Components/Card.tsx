import { CardProps } from "@/data/card-data";
import React from "react";

export default function Card({ title, icon, reach }: {title: string, icon: React.ReactNode, reach: number}) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer overflow-hidden">
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-emerald-500/10 border border-emerald-500/20 w-14 h-14 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300">
            <div className="text-emerald-400">
              {icon}
            </div>
          </div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">{reach}</span>
          <span className="text-gray-400 text-lg">Gunung</span>
        </div>
      </div>
    </div>
  );
}