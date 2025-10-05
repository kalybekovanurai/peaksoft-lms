import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Schedule from "./pages/Schedule";
import Trash from "./pages/Trash";
import Announcement from "./pages/Announcements";
import MainLayout from "./layouts/MainLayout";
import Courses from "./pages/Courses";
import CoursesLayout from "./layouts/CoursesLayout";
import MaterialsLayout from "./layouts/MaterilasLayout";
import Materials from "./pages/Materials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="courses" replace /> },
      { path: "courses", element: <Courses /> },
      {
        path: "courses/:cristiano",
        element: <CoursesLayout />,
        children: [
          { index: true, element: <Navigate to="materials" replace /> },
          {
            path: "materials",
            element: <Materials />,
            children: [
              {
                path: ":materialId",
                element: <MaterialsLayout />,
                children: [
                  { index: true, element: <Navigate to="video" replace /> },
                  { path: "video", element: <h1>Видео</h1> },
                  { path: "presentation", element: <h1>Презентация</h1> },
                  { path: "task", element: <h1>Задание</h1> },
                  { path: "links", element: <h1>Ссылки</h1> },
                  { path: "tests", element: <h1>Тесты</h1> },
                ],
              },
            ],
          },

          // Студенты и рейтинг
          { path: "students", element: <h1>Студенты</h1> },
          { path: "rating", element: <h1>Рейтинг студентов</h1> },
        ],
      },
      { path: "announcements", element: <Announcement /> },
      { path: "deleted", element: <Trash /> },
      { path: "schedule", element: <Schedule /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
