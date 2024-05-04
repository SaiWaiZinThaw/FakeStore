import { Navigate, RouteObject } from "react-router-dom";
import { Home, ProductDetails } from "../pages";
import Layout from "../Layout";
import MainPage from "../MainPage";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <MainPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
];

export default UserRouter;
