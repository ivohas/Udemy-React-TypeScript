import { addToCart, removeFromCart, type CartItem } from "../store/cart-slice";
import { useCartDisptch, useCartSelector } from "../store/hooks";

export default function CartItems() {

  const cartItems = useCartSelector((state) => state.cart.items);

  const formattedTotalPrice = `$${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}`;

  const dispatch = useCartDisptch();

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart({ id: item.id, title: item.title, price: item.price }));
  }

  function handleRemoveFromCart(itemId: string) {
    dispatch(removeFromCart(itemId));
  }

  if (cartItems.length === 0) {
    return (
      <div id="cart">
        <p>No items in cart!</p>
      </div>
    );
  } else {
    return (
      <div id="cart">
        <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
        <p id="cart-total-price">
          Cart Total: <strong>{formattedTotalPrice}</strong>
        </p>
      </div>
    );
  }
}
