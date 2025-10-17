import Header from "../Components/Header";
import { Bell, Search  } from 'lucide-react';

export default function Home() {
    return (
        <div className="p-4">
            <div className="flex flex-col items-start">
            <Header notif={<Bell/>} search={<Search/>} title="Overview"/>
            <p className="font-sans text-base text-black/50">Your summits assistance</p>
            </div>

            <div>

            </div>
        </div>
    )
}