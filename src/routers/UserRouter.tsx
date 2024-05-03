import { RouteObject } from "react-router-dom"
import { Home, ProductDetails } from "../pages"


const UserRouter: RouteObject[] = [
    {
        path: '/',
        element: <Home/>
    }, 

    {
        path: '/product/:id',
        element: <ProductDetails/>
    }
]

export default UserRouter