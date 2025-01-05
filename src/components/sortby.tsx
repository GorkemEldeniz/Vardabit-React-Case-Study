import { useSearchParams } from "react-router";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (sortBy: string, order: string) => {
    setSearchParams((prev) => {
      prev.set("order", order);
      prev.set("sortBy", sortBy);
      return prev;
    });
  };

  return (
    <div className="card bg-base-100 py-2 px-4 space-y-4 shadow-md">
      <h1 className="font-bold">Sort By</h1>

      <label className="label cursor-pointer">
        <span className="label-text">Old to new</span>
        <input
          type="radio"
          name="sort"
          value="old-to-new"
          className="radio radio-xs sm:radio-sm"
          onChange={() => handleChange("createdAt", "desc")}
          checked={
            searchParams.get("sortBy") === "createdAt" &&
            searchParams.get("order") === "desc"
          }
        />
      </label>

      <label className="label cursor-pointer">
        <span className="label-text">New to old</span>
        <input
          type="radio"
          name="sort"
          value="new-to-old"
          className="radio radio-xs sm:radio-sm"
          onChange={() => handleChange("createdAt", "asc")}
          checked={
            searchParams.get("sortBy") === "createdAt" &&
            searchParams.get("order") === "asc"
          }
        />
      </label>

      <label className="label cursor-pointer">
        <span className="label-text">Price hight to low</span>
        <input
          type="radio"
          name="sort"
          value="price-hight-to-low"
          className="radio radio-xs sm:radio-sm"
          onChange={() => handleChange("price", "desc")}
          checked={
            searchParams.get("sortBy") === "price" &&
            searchParams.get("order") === "desc"
          }
        />
      </label>

      <label className="label cursor-pointer">
        <span className="label-text">Price low to hight</span>
        <input
          type="radio"
          name="sort"
          value="price-low-to-hight"
          className="radio radio-xs sm:radio-sm"
          onChange={() => handleChange("price", "asc")}
          checked={
            searchParams.get("sortBy") === "price" &&
            searchParams.get("order") === "asc"
          }
        />
      </label>
    </div>
  );
};

export default SortBy;
