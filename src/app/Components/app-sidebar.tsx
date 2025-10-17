// Components/app-sidebar.tsx
import { 
  Calendar, 
  Home, 
  Inbox, 
  Search, 
  Settings, 
  Users, 
  FileText, 
  BarChart3,
  Bell,
  HelpCircle,
  Map
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { sidebarData } from "@/data/sidebar-data"
import AiBox from "./AiBox"
import { UserData } from "@/lib/user-inform"
import Image  from "next/image"

export function AppSidebar() {
  return (
    <Sidebar className="font-mono">
      <SidebarHeader className="border-b p-6">
        <div className="flex items-center gap-3 flex-col">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          <div className="flex items-center flex-col">
            <h2 className="font-semibold">GuideMount</h2>
            <p className="text-xs text-muted-foreground">Your summits assistance</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Feature</SidebarGroupLabel>
          <hr className="border border-black/5 mt-3 mb-3 rounded-full w-52 flex justify-center mx-auto"/>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarData.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center gap-3 text-xl">
                      {item.icon}
                      <span className="max-w-xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div>
        <AiBox/>
      </div>
      <SidebarFooter className="border-t p-4">
        {UserData.map((item) => (
          <div key={item.id} className="flex">
            <div className="flex items-center gap-3">
            <Image src={item.profile} alt={item.profile} width={40} height={40} className="rounded-full"/>
            <div className="flex flex-col">
            <p>{item.name}</p>
            <p className="text-sm text-black/50">{item.email}</p>
            <p className="text-sm text-black/50">{item.role}</p>
            </div>
            </div>
          </div>
        ))}
      </SidebarFooter>
    </Sidebar>
  )
}