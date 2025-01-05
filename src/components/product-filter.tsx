import brands from "@/helpers/brands";
import { useSearchParams } from "react-router";
import SearchBar from "./search-bar";

const ProductFilter = () => {
  const [searchParams] = useSearchParams();

  const brandsNameList = brands.map(({ brand }) => brand);

  const modelNameList = searchParams.get("brand")?.split("|").length
    ? brands
        .filter(({ brand }) =>
          searchParams.get("brand")?.split("|").includes(brand)
        )
        .map((brand) => brand.models)
        .flat()
    : brands.map(({ models }) => models).flat();

  return (
    <div className="space-y-4">
      <SearchBar items={brandsNameList} type="Brands" />
      <SearchBar items={modelNameList} type="Model" />
    </div>
  );
};

export default ProductFilter;
