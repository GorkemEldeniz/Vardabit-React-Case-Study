import ProductDetail from "@/pages/ProductDetail";
import Products from "@/pages/Products";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
