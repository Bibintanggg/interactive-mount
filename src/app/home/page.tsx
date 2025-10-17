import { CardData } from "@/data/card-data";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { Bell, Search  } from 'lucide-react';

export default function Home() {
    return (
        <div className="p-4">
            <div className="flex flex-col items-start">
            <Header notif={<Bell/>} search={<Search/>} title="Overview" subtitle="Your summits assistance"/>
            </div>

            <div className="grid grid-cols-2 max-w-2xl">
                {CardData.map((items) => (
                    <div key={items.id}>
                        <Card 
                        title={items.title} 
                        icon={items.icon} 
                        reach={items.reach}/>
                    </div>
                ))}
            </div>
        </div>
    )
}