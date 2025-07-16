import Categories from "@/pages/Categories";
import Channel from "@/pages/Channel";
import Home from "@/pages/Home";
import Models from "@/pages/Models";
import UploadVideo from "@/pages/UploadVideo";
import Video from "@/pages/Video";
import { AppWindowIcon, Folder, HomeIcon, Users, VideoIcon, type LucideIcon } from "lucide-react";
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
    path: "video",
    shown: false,
    element: <Video />,
    Icon: VideoIcon,
  },
  {
    title: "Channel",
    path: "channel",
    shown: true,
    items: [
      {
        title: "Page",
        path: "page",
        shown: true,
        element: <Channel />,
        Icon: AppWindowIcon,
      },
      {
        title: "New Video",
        path: "video",
        element: <UploadVideo />,
        shown: false,
      },
    ],
  },
  {
    title: "Model",
    path: "model",
    shown: true,
    items: [
      {
        title: "Models",
        path: "",
        shown: true,
        element: <Models />,
        Icon: Users,
      },
    ],
  },
  {
    title: "Category",
    path: "model",
    shown: true,
    items: [
      {
        title: "Categories",
        path: "",
        shown: true,
        element: <Categories />,
        Icon: Folder,
      },
    ],
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
