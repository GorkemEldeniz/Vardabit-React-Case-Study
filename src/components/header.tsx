import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import Icon from "./icon";
import ThemeController from "./theme-controller";

const Header = () => {
  const [search, setSearch] = useState("");

  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (event: React.FormEvent) => {
    if (!search) return;
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("search", search);
    setSearchParams(params);
  };

  return (
    <header className="flex bg-primary py-2 px-4 items-center justify-between">
      <Link to="/products" className="font-bold text-primary-content text-2xl">
        Vardabit
      </Link>
      <form onSubmit={handleSubmit} className="w-1/3">
        <label className="input input-sm sm:input-md input-bordered flex items-center gap-2">
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <Icon
            name="search"
            className="h-4 w-4 opacity-70"
            fillRule="evenodd"
          />
        </label>
      </form>
      <div className="flex gap-4">
        <div className="text-primary-content font-bold flex gap-2 items-center">
          <Icon width={24} height={24} name="portfeil" />
          <p>₺117.00</p>
        </div>
        <div className="text-primary-content font-bold flex gap-2 items-center">
          <Icon width={24} height={24} name="profile" />
          <p>Kerem</p>
        </div>
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
