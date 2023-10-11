import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Countries from "./countries"
import Country from "./country"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  },
  {
    path: "/countries/:id",
    element: <Country />,
  },
  {
    path: "*",
    element: "Error 404"
  }
])

export const Pages = () => {
  return (
    <RouterProvider router={router} />
  )
}
