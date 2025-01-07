import { addItem } from "@/libs/redux/features/cart/cartSlice";
import { fetchProducts } from "@/services/product";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import NotFound from "./not-found";
import PaginationBar from "./pagination-bar";

export type Product = {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
};

const ProductItem = ({ name, image, price, id }: Product) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <li
      onClick={() => navigate(`/products/${id}`)}
      className="card card-compact card-bordered bg-base-100 shadow-md cursor-pointer"
    >
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="flex-1 flex items-end">
          {Number(price).toLocaleString("tr", {
            style: "currency",
            currency: "TRY",
          })}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(
                addItem({
                  name,
                  price: Number(price),
                  count: 1,
                })
              );
            }}
            className="btn btn-xs sm:btn-sm btn-primary"
          >
            Add to Chart
          </button>
        </div>
      </div>
    </li>
  );
};

const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
      {new Array(12).fill("").map((_, idx) => (
        <li
          key={idx}
          className="card card-compact card-bordered bg-base-100 shadow-md"
        >
          <figure>
            <img src="https://placehold.co/640x480" alt="placeholder" />
          </figure>
          <div className="card-body">
            <h2 className="skeleton h-6 w-3/4"></h2>
            <p className="skeleton h-4 w-1/2"></p>
            <div className="card-actions justify-end">
              <button className="skeleton h-8 w-24"></button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

const ProductList = () => {
  const [searchParams] = useSearchParams();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", searchParams.toString()], () =>
    fetchProducts(searchParams)
  );

  if (isLoading) return <ProductListSkeleton />;

  if (isError || !products?.length) return <NotFound className="text-lg" />;

  const hidePagination = products?.length < 10;

  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 h-fit">
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
      {!hidePagination && <PaginationBar />}
    </ol>
  );
};

export default ProductList;
