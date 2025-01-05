import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import Icon from "./icon";

const SearchBar = ({
  items,
  type,
}: {
  type: "Brands" | "Model";
  items: string[];
}) => {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const filterName = type === "Brands" ? "brand" : "model";

  const filteredItems = useMemo(
    () => items.filter((item) => item.toLowerCase().startsWith(search)),
    [search, items]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleFilter = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSearchParams((prev) => {
        // reset pagination
        prev.delete("page");
        prev.delete("limit");
        const currentParams = prev.get(filterName);
        if (currentParams) {
          prev.set(filterName, currentParams + "|" + name);
        } else {
          prev.set(filterName, name);
        }
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete("page");
        prev.delete("limit");
        const currentParams = prev.get(filterName);
        if (currentParams && currentParams.split("|").length > 1) {
          prev.set(
            filterName,
            currentParams
              .split("|")
              ?.filter((param) => param !== name)
              .join("|")
          );
        } else {
          prev.delete(filterName, name);
        }
        return prev;
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-md py-2 px-4 space-y-4">
      <h1 className="font-bold">{type}</h1>
      <label className="input input-xs sm:input-sm input-bordered flex items-center gap-2">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          className="grow"
          placeholder="Search"
        />
        <Icon name="search" className="h-4 w-4 opacity-70" fillRule="evenodd" />
      </label>
      <div className="max-h-52 overflow-y-scroll">
        {filteredItems.map((item, idx) => (
          <label key={idx} className="label cursor-pointer">
            <span className="label-text">{item}</span>
            <input
              checked={
                searchParams.get(filterName)
                  ? searchParams.get(filterName)?.split("|").includes(item)
                  : false
              }
              onChange={(event) => handleFilter(item, event)}
              type="checkbox"
              className="checkbox checkbox-xs sm:checkbox-sm"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
