import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, Order, SingleProduct, Faq } from "@/pages";
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
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
