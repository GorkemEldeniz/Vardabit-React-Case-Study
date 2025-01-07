import ProductFilter from "@/components/product-filter";
import ProductList from "@/components/product-list";
import SortBy from "@/components/sortby";
import { ScrollRestoration } from "react-router";

function Products() {
  return (
    <div className="md:flex md:gap-7 px-2 md:px-0">
      <div className="h-full relative space-y-6 max-w-52">
        <div className="hidden md:block sticky inset-0 space-y-4">
          <SortBy />
          <ProductFilter />
        </div>
      </div>
      <ProductList />
      <ScrollRestoration />
    </div>
  );
}

export default Products;
