import ProductFilter from "@/components/product-filter";
import ProductList from "@/components/product-list";
import SortBy from "@/components/sortby";

function Products() {
  return (
    <div className="flex gap-7">
      <div className="h-full relative space-y-6 max-w-52">
        <div className="sticky inset-0 space-y-4">
          <SortBy />
          <ProductFilter />
        </div>
      </div>
      <ProductList />
    </div>
  );
}

export default Products;
