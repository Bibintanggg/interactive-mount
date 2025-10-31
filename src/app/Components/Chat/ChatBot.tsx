import { Menu } from "lucide-react"
import Image from "next/image"

export default function ChatBot() {
    return (
        <div className="bg-white z-[9999] fixed bottom-20 right-4 w-80 h-96 rounded-lg shadow-lg flex flex-col">
            {/* header */}
            <div className="flex items-center justify-between p-4 ">
                <Image src={"/assets/ai-Mountain.jpeg"} width={50} height={50} alt={"mountain-assistant"}
                className="rounded-full w-full object-cover"/>
                <h3>MountAIn Chat</h3>
                <Menu size={20}/>
            </div>
        </div>
    )
}