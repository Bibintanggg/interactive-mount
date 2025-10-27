import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import React from 'react';

export default function UpcomingTrips() {
  const trips = [
    {
      id: 1,
      mountain: "Gunung Semeru",
      date: "15 Nov 2025",
      participants: 12,
      difficulty: "Hard",
      duration: "3D2N",
      status: "Confirmed"
    },
    {
      id: 2,
      mountain: "Gunung Rinjani",
      date: "22 Nov 2025",
      participants: 8,
      difficulty: "Medium",
      duration: "4D3N",
      status: "Planning"
    },
    {
      id: 3,
      mountain: "Gunung Prau",
      date: "28 Nov 2025",
      participants: 15,
      difficulty: "Easy",
      duration: "2D1N",
      status: "Open"
    }
  ];

  const difficultyColors: Record<string, string> = {
    "Hard": "text-red-500 bg-red-500/10 border-red-500/20",
    "Medium": "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    "Easy": "text-green-500 bg-green-500/10 border-green-500/20"
  };

  const statusColors: Record<string, string> = {
    "Confirmed": "text-blue-500 bg-blue-500/10",
    "Planning": "text-purple-500 bg-purple-500/10",
    "Open": "text-green-500 bg-green-500/10"
  };

  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-gray-400" />
          <h3 className="text-white font-semibold">Upcoming Trips</h3>
        </div>
        <button className="text-xs text-gray-400 hover:text-white transition-colors font-medium">
          View All →
        </button>
      </div>

      <div className="space-y-3">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#333] transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-white font-medium mb-1 group-hover:text-gray-300 transition-colors">{trip.mountain}</h4>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {trip.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {trip.duration}
                  </span>
                </div>
              </div>
              <span className={`text-[10px] px-2 py-1 rounded font-mono ${statusColors[trip.status]}`}>
                {trip.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded border font-medium ${difficultyColors[trip.difficulty]}`}>
                  {trip.difficulty}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Users size={12} />
                  {trip.participants} orang
                </span>
              </div>
              <button className="text-xs text-gray-400 hover:text-white transition-colors">
                Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}