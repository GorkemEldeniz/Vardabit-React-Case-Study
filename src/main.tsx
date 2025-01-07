import ProductDetail from "@/pages/ProductDetail";
import Products from "@/pages/Products";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import "./index.css";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/products" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
