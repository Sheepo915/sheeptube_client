import AppHeader from "@/components/app/AppHeader";
import AppSidebar from "@/components/app/AppSidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="relative">
        <>
          <AppHeader className="sticky top-0 z-50" />
          <Outlet />
        </>
      </SidebarInset>
    </SidebarProvider>
  );
}
