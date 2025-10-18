import { Crown } from "lucide-react";
import TopCards from "./TopCards";

export default function TopRank() {
    return (
        <div className="fixed right-0 h-screen w-80 bg-black/5 rounded-xl p-4 shadow-lg overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 font-sans">Top Summits</h2>

            <TopCards
                icon={<Crown fill="yellow" />}
                profile="/assets/file.jpg"
                name="BintangGG"
                summits={20}
                role="Pendaki Akut"
                location="Jakarta/Indonesia"
                region={4}
                climbs={20}
            />
        </div>
    );
}

