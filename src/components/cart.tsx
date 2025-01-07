import {
  decreaseCountByOne,
  increaseCountByOne,
} from "@/libs/redux/features/cart/cartSlice";
import type { RootState } from "@/libs/redux/store";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );

  const dispatch = useDispatch();

  return (
    <div className="sticky inset-0 card max-h-52 overflow-y-scroll bg-base-100 shadow-md py-2 px-4 space-y-4">
      <h2 className="card-title">Cart</h2>

      {cartItems.map((cart, id) => (
        <div key={id}>
          <div className="flex gap-4 items-center justify-between">
            <h3>{cart.name}</h3>
            <div className="flex border rounded-btn items-center">
              <button
                onClick={() => dispatch(decreaseCountByOne(cart.name))}
                className="btn btn-xs sm:btn-sm"
              >
                -
              </button>
              <span className="mx-2">{cart.count}</span>
              <button
                onClick={() => dispatch(increaseCountByOne(cart.name))}
                className="btn btn-xs sm:btn-sm"
              >
                +
              </button>
            </div>
          </div>
          <h3 className="text-gray-500">
            {cart.price.toLocaleString("tr", {
              style: "currency",
              currency: "TRY",
            })}
          </h3>
        </div>
      ))}

      <p>
        Total Price:{" "}
        {totalPrice.toLocaleString("tr", {
          style: "currency",
          currency: "TRY",
        })}
      </p>
      <button className="btn btn-sm btn-primary mt-4">Checkout</button>
    </div>
  );
};

export default Cart;
