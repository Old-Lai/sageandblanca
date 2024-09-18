import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root, Home, Order } from "@/pages"
import { NotFound_404 } from "@/pages/status_pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound_404/>,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/order",
        element: <Order />,
      },
      // {
      //   path:"/admin",
      //   element: <AdminPage />,
      // },
      // {
      //   path:"/celebrations",
      //   element: <Celebrations />,
      // },
      // {
      //   path:"/galleries",
      //   element: <Portfolio />,
      // },
      // {
      //   path:"/about",
      //   element: <About />,
      // },
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
