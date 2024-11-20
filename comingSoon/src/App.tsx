import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home } from "@/pages";
import { NotFound_404 } from "@/pages/status_pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound_404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
