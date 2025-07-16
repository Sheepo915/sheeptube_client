import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import routes, { type NavWithGroup } from "./routes/route";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {routes.map((route) => {
            if ("items" in (route as NavWithGroup)) {
              return (
                <Route path={route.path}>
                  {(route as NavWithGroup).items.map((subRoute) => (
                    <Route
                      index={subRoute.index || false}
                      path={subRoute.path}
                      element={subRoute.element}
                    />
                  ))}
                </Route>
              );
            } else {
              return (
                <Route index={route.index || false} path={route.path} element={route.element} />
              );
            }
          })}
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster />
  </StrictMode>
);
