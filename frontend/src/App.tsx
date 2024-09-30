import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, Order, SingleProduct } from "@/pages";
import { Faq, TermsOfServices, PrivacyPolicy, FlowerCare } from "./pages/useful_links";
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
      {
        path: "/terms-of-services",
        element: <TermsOfServices />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/flower-care",
        element: <FlowerCare />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
