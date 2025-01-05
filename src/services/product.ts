import type { Product } from "@/components/product-list";
import axiosInstance from "@/libs/axios";

const fetchProducts = async (searchParams?: URLSearchParams) => {
  if (searchParams?.toString()) {
    const response = await axiosInstance.get<Product[]>(
      `?${searchParams.toString()}`
    );
    return response.data;
  }
  const response = await axiosInstance.get<Product[]>("?page=1&limit=10");
  return response.data;
};

const fetchProductById = async (id: string) => {
  const response = await axiosInstance.get<Product>(`/${id}`);
  return response.data;
};

export { fetchProductById, fetchProducts };
