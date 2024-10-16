// routes.tsx
import {
    createBrowserRouter,
    Route,
    RouteObject,
    Router,
  } from "react-router-dom";
  import Index from "./views/index";

  
  export const routes: RouteObject[] = [
    {
      path: "/",
      element: <Index/>,
      handle: {
        // icon: () => <GoHomeFill />,
        crumb: () => "Главная",
      },
      children: [
        {
          index: true, // Маршрут по умолчанию
          element:  <Index/>,
        },
        {
          path: "downtimes",
          element: <></>,
          handle: {
            // icon: () => <RxCountdownTimer />,
            crumb: () => "Список простоев",
          },
        },
        {
          path: "*", // Маршрут для обработки 404
          element: <></>,
        },
      ],
    },
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;
  