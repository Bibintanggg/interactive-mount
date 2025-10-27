import { CardData } from "@/data/card-data";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { Bell, Search, TrendingUp, Activity, Calendar, MapPin } from 'lucide-react';
import TopRank from "../Components/TopRankRightbar";
import ActivityFeed from "../Components/ActivityFeed";
import QuickStats from "../Components/QuickStats";
import UpcomingTrips from "../Components/UpcomingTrips";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] p-8">
            <div className="max-w-[1800px] mx-auto">
                <Header
                    notif={<Bell />}
                    search={<Search />}
                    title="Overview"
                    subtitle="Asisten Pendakian Anda"
                />

                <QuickStats />

                <div className="flex gap-6 mt-6">
                    <div className="flex-1 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {CardData.map((items) => (
                                <Card
                                    key={items.id}
                                    title={items.title}
                                    icon={items.icon}
                                    reach={items.reach}
                                />
                            ))}
                        </div>

                        <UpcomingTrips />

                        <ActivityFeed />
                    </div>

                    <TopRank />
                </div>
            </div>
        </div>
    );
}