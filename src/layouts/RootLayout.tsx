import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

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
