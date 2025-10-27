import { Activity, Mountain, Award, Users, TrendingUp } from 'lucide-react';
import React from 'react';

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "summit",
      user: "BintangGG",
      action: "mencapai puncak",
      target: "Gunung Merbabu",
      time: "2 jam lalu",
      icon: <Mountain size={14} />
    },
    {
      id: 2,
      type: "achievement",
      user: "MountainHero",
      action: "mendapat badge",
      target: "10 Summits Master",
      time: "5 jam lalu",
      icon: <Award size={14} />
    },
    {
      id: 3,
      type: "join",
      user: "SummitMaster",
      action: "bergabung trip",
      target: "Gunung Semeru Expedition",
      time: "8 jam lalu",
      icon: <Users size={14} />
    },
    {
      id: 4,
      type: "rank",
      user: "You",
      action: "naik ke rank",
      target: "#12 Global",
      time: "1 hari lalu",
      icon: <TrendingUp size={14} />
    },
    {
      id: 5,
      type: "summit",
      user: "TrailBlazer",
      action: "menyelesaikan",
      target: "Gunung Prau Trail",
      time: "1 hari lalu",
      icon: <Mountain size={14} />
    }
  ];

  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity size={18} className="text-gray-400" />
          <h3 className="text-white font-semibold">Recent Activity</h3>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-[#1a1a1a] last:border-0 last:pb-0">
            <div className="w-8 h-8 bg-[#1a1a1a] border border-[#222] rounded-lg flex items-center justify-center text-gray-400 flex-shrink-0 mt-0.5">
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300">
                <span className="text-white font-medium">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="text-white font-medium">{activity.target}</span>
              </p>
              <span className="text-xs text-gray-600 font-mono">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-xs text-gray-400 hover:text-white transition-colors text-center py-2 border-t border-[#1a1a1a] font-medium">
        Load More Activity
      </button>
    </div>
  );
}