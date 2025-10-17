import { SidebarProps } from "@/types/sidebar"
import { Home, Map } from "lucide-react"

export const sidebarData: SidebarProps[] = [
    {
        id: 1,
        title: "Home",
        href: "/home",
        icon: <Home />
    },
    {
        id: 2,
        title: "Map",
        href: "/map",
        icon: <Map/>
    }
]