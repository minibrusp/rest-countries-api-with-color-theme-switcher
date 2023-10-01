import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Countries from "./countries"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
  }
])

export const Pages = () => {
  return (
    <RouterProvider router={router} />
  )
}
