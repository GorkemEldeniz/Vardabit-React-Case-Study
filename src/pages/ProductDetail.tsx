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

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <div className="flex-1 flex gap-4 py-2 px-4 bg-base-100 shadow-md rounded-lg">
      <figure className="flex-shrink-0">
        <img src={product?.image} alt={product?.name} className="rounded-lg" />
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
