import { createBrowserRouter, RouterProvider } from "react-router"
import Mainlayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ],
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}