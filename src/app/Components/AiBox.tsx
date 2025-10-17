import { AiMountainProps } from "@/types/ai-mount"
import CardAi from "./CardAi"
import { ComputerIcon } from "lucide-react"

export default function AiBox() {
    return (
        <div>
            <CardAi desc="MountAIn ready to Help your summits" link="/" icon={<ComputerIcon/>}/>
        </div>
    )
}