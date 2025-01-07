import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import Cart from "./cart";
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
      <Link
        to="/products"
        className="font-bold text-primary-content text-xl md:text-2xl"
      >
        Vardabit
      </Link>
      <form onSubmit={handleSubmit} className="hidden sm:block w-1/3">
        <label className="input input-sm md:input-md flex items-center gap-2">
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
      <div className="flex gap-2 md.gap-4">
        <div className="text-primary-content font-bold flex gap-1 md:gap-2 items-center">
          <Icon
            width={24}
            height={24}
            className="size-4 md:size-6"
            name="portfeil"
          />
          <p className="text-xs md:text-sm">₺117.00</p>
        </div>
        <div className="text-primary-content font-bold flex gap-1 md:gap-2 items-center">
          <Icon
            width={24}
            height={24}
            className="size-4 md:size-6"
            name="profile"
          />
          <p className="text-xs md:text-sm">Kerem</p>
        </div>
        <details className="dropdown dropdown-end md:hidden">
          <summary className="btn btn-sm md:btn-md m-1">Cart</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <Cart />
          </ul>
        </details>
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
