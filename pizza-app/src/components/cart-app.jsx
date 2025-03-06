const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD", // feel free to change to your local currency
});

// eslint-disable-next-line react/prop-types
export default function Cart({ cart, checkout }) {
  let total = 0;
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    // eslint-disable-next-line react/prop-types
    total += current.pizza.sizes[current.size];
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> –
            <span className="type">{item.pizza.name}</span> –
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
