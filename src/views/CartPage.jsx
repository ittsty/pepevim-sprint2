import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      {cart.length === 0 && <p>ไม่มีสินค้าในตะกร้า</p>}

      {cart.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center border p-3 rounded"
        >
          <div>
            <p className="font-semibold">{item.productName}</p>
            <p>{item.price} บาท</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              ลบ
            </button>
          </div>
        </div>
      ))}

      <hr />
      <p className="text-right font-bold">
        รวมทั้งหมด: {totalPrice} บาท
      </p>
    </div>
  );
}
