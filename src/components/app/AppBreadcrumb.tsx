import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import routes, { type Routes } from "@/routes/route";
import { useBreadcrumbStore } from "@/stores/useBreadcrumbStore";
import { useLocation } from "react-router-dom";

interface RouteResult {
  parent: Routes | null;
  child: Routes;
}

export default function AppBreadcrumb() {
  const location = useLocation();
  const { state } = useBreadcrumbStore();

  function findRoute(): RouteResult | null {
    let result: RouteResult | null = null;

    for (const route of routes) {
      if ("items" in route) {
        const paths = location.pathname.split("/");
        const match: Routes | undefined = route.items.find(
          (item) => item.path === paths[paths.length - 1]
        );
        if (match) {
          result = {
            parent: route,
            child: match,
          };
        }
      } else if (route.path === location.pathname) {
        result = {
          parent: null,
          child: route,
        };
      }
    }

    if (result && state.name && state.path === location.pathname) {
      result.child.name = state.name;
    }

    return result;
  }

  const matched = findRoute();

  if (!matched) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {matched.parent && (
          <>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={matched.parent.path ?? "#"}>
                {matched.parent.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{matched.child.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
