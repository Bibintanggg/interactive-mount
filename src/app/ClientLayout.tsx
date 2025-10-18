"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "./Components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideSidebarRoutes = ["/"];
  const hideSidebar = hideSidebarRoutes.includes(pathname);

  if (hideSidebar) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full relative">
        <AppSidebar />

        <div className="top-4 left-4 z-50 fixed">
          <SidebarTrigger
            className="p-2 rounded-lg bg-black/20 cursor-pointer"
          />
        </div>

        <SidebarInset>
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
