import React from "react";

export default function Streak({ icon, num }: {icon: React.ReactNode, num: number}) {
  return (
    <div className="flex items-center gap-1 bg-orange-500/20 border border-orange-500/30 px-3 py-1 rounded-full mt-2">
      <div className="text-orange-400 scale-75">
        {icon}
      </div>
      <span className="text-orange-300 text-xs font-bold">{num} hari</span>
    </div>
  );
}