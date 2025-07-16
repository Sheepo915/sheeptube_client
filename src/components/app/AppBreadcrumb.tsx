import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import routes from "@/routes/route";
import { useLocation } from "react-router-dom";

export default function AppBreadcrumb() {
  const location = useLocation();

  function findRoute() {
    for (const route of routes) {
      if ("items" in route) {
        const match = route.items.find((item) => item.path === location.pathname);
        if (match) {
          return {
            parent: route,
            child: match,
          };
        }
      } else if (route.path === location.pathname) {
        return {
          parent: null,
          child: route,
        };
      }
    }
    return null;
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
          <BreadcrumbPage>{matched.child.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
