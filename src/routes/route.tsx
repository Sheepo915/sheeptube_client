import Home from "@/pages/Home";
import Video from "@/pages/Video";
import { HomeIcon, VideoIcon, type LucideIcon } from "lucide-react";
import type { RouteObject } from "react-router-dom";

type RouteObjectWithTitle = RouteObject & {
  title: string;
  shown?: boolean;
  isActive?: boolean;
  Icon?: LucideIcon;
};

type NavWithoutGroup = RouteObjectWithTitle & {};

type NavWithGroup = RouteObjectWithTitle & {
  items: RouteObjectWithTitle[];
};

type Routes = NavWithGroup | NavWithoutGroup;

let routes: Routes[] = [
  {
    title: "Home",
    index: true,
    path: "/",
    element: <Home />,
    Icon: HomeIcon,
  },
  {
    title: "Video",
    path: "/video",
    shown: false,
    element: <Video />,
    Icon: VideoIcon,
  },
];

routes = routes.map((route) => {
  if (route.shown === undefined) {
    route.shown = true;
  }
  return route;
});

export default routes;
export type { NavWithGroup, NavWithoutGroup, Routes };
