import NotFound from "@/components/not-found";
import { addItem } from "@/libs/redux/features/cart/cartSlice";
import { fetchProductById } from "@/services/product";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

function ProductDetail() {
  const params = useParams();

  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", params], () => fetchProductById(params.id || ""));

  if (isError) return <NotFound className="text-lg" />;

  if (isLoading)
    return (
      <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-4 py-2 px-4 bg-base-100 shadow-md rounded-lg">
        <figure className="flex-shrink-0">
          <img
            src="https://placehold.co/640x480"
            className="rounded-lg"
            alt="placeholder"
          />
        </figure>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-6 w-[20ch] bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-[10ch] bg-gray-200 animate-pulse rounded" />
          <div className="w-full btn btn-md bg-gray-200 animate-pulse rounded" />
          <div className="h-[240px] md:mt-auto bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    );

  if (isError) return <div>Error...</div>;

  return (
    <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-4 py-2 px-4 bg-base-100 shadow-md rounded-lg">
      <figure className="flex-shrink-0">
        <img
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "https://placehold.co/640x480";
          }}
          src={product?.image}
          alt={product?.name}
          className="rounded-lg"
        />
      </figure>
      <div className="flex flex-col gap-4">
        <header>
          <h1 className="card-title text-2xl">{product?.name}</h1>
          <p className="text-lg">
            {Number(product?.price).toLocaleString("tr", {
              style: "currency",
              currency: "TRY",
            })}
          </p>
        </header>
        <button
          onClick={() => {
            dispatch(
              addItem({
                name: product?.name as string,
                price: Number(product?.price),
                count: 1,
              })
            );
          }}
          className="w-full btn btn-md btn-primary"
        >
          Add to Cart
        </button>
        <div className="flex-1 flex items-end">
          <p className="">{product?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
