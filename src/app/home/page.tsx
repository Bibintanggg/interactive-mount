import { CardData } from "@/data/card-data";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { Bell, Search } from 'lucide-react';
import TopRank from "../Components/TopRankRightbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-8">
            <div className="max-w-[1800px] mx-auto">
                <Header
                    notif={<Bell />}
                    search={<Search />}
                    title="Overview"
                    subtitle="Asisten Pendakian Anda"
                />

                <div className="flex gap-8 mt-10">
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                            {CardData.map((items) => (
                                <Card
                                    key={items.id}
                                    title={items.title}
                                    icon={items.icon}
                                    reach={items.reach}
                                />
                            ))}
                        </div>
                    </div>

                    <TopRank />
                </div>
            </div>
        </div>
    );
}