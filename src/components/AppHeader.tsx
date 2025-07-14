import AppBreadcrumb from "@/components/AppBreadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { twMerge } from "tailwind-merge";

export default function AppHeader({ ...props }: React.HTMLProps<HTMLElement>) {
  return (
    <header
      {...props}
      className={twMerge(
        "flex w-full h-16 shrink-0 items-center gap-2 bg-background border-b px-4",
        props.className
      )}
    >
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
      <AppBreadcrumb />
    </header>
  );
}
