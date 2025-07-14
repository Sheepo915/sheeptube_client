import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import routes, { type NavWithGroup, type NavWithoutGroup } from "@/routes/route";
import { Link, useLocation } from "react-router-dom";
import SidebarAccount from "./SidebarAccount";

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarAccount />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-2">
          {routes
            .filter(
              (route): route is NavWithoutGroup => !("items" in route) && (route.shown as boolean)
            )
            .map((route) => (
              <SidebarMenuItem key={route.title}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === route.path}
                  className="data-[slot=sidebar-menu-button]:!p-1.5"
                >
                  <Link to={route.path as string}>
                    {route.Icon && <route.Icon className="!size-5" />}
                    <span className="text-base ">{route.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
        {/* Render grouped menu items */}
        {routes
          .filter((route): route is NavWithGroup => "items" in route && (route.shown as boolean))
          .map((route) => (
            <SidebarGroup key={route.title}>
              <SidebarGroupLabel>{route.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {route.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === item.path}
                        className="data-[slot=sidebar-menu-button]:!p-1.5"
                      >
                        <Link to={item.path as string}>
                          {item.Icon && <item.Icon className="!size-5" />}
                          <span className="text-base ">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
      </SidebarContent>
    </Sidebar>
  );
}
