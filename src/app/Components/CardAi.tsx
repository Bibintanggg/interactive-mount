import { AiMountainProps } from "@/types/ai-mount"

export default function CardAi({ desc, icon, link }: AiMountainProps) {
    return (
        <div className="p-2">
        <div className="bg-black/10 mb-10 rounded-lg h-52 w-[235px] p-4">
            <div className="bg-gradient-to-tr from-purple-400 to-purple-800 w-16 h-16 flex items-center justify-center rounded-full text-white">
                {icon}
            </div>
            <p className="mt-3">{desc}</p>
            <a href={link} className=" text-sm ">
            <div className="mt-3 bg-black/20 text-white w-40 h-10 flex items-center rounded-lg justify-center">
                Lets Talk !
            </div>
            </a>
        </div>
        </div>
    )
}