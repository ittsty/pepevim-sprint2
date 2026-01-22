import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#FFF3F8]">
      {/* Title */}
      <h1 className="text-7xl font-bold px-20 py-16 text-gray-800">Cart</h1>

      <div className="flex px-20 gap-12">
        {/* LEFT: CART LIST */}
        <div className="w-2/3 flex flex-col gap-6">
          {/* Header */}
          <div className="grid grid-cols-3 text-gray-600 font-medium border-b border-[#E5B6C8] pb-4 px-4">
            <span>Product</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Total</span>
          </div>

          {cart.length === 0 && (
            <p className="text-gray-500 px-4">ไม่มีสินค้าในตะกร้า</p>
          )}

          {/* Item Card */}
          {cart.map((item) => (
            <div
              key={`${item._id}-${item.size}`}
              className="bg-white rounded-2xl border border-[#E5B6C8] shadow-sm px-6 py-5"
            >
              <div className="grid grid-cols-3 items-center gap-4">
                {/* Product Info */}
                <div>
                  <p className="font-medium text-gray-800">
                    {item.productName}
                  </p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">ราคา {item.price} บาท</p>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.size, item.quantity - 1)
                    }
                    className="w-9 h-9 rounded-full border border-[#CB5585] text-[#CB5585] hover:bg-[#CB5585] hover:text-white transition"
                  >
                    −
                  </button>

                  <span className="font-medium text-gray-800">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.size, item.quantity + 1)
                    }
                    className="w-9 h-9 rounded-full border border-[#CB5585] text-[#CB5585] hover:bg-[#CB5585] hover:text-white transition"
                  >
                    +
                  </button>
                </div>

                {/* Total + Remove */}
                <div className="flex flex-col items-end gap-2">
                  <span className="font-medium text-gray-800">
                    {item.price * item.quantity} บาท
                  </span>
                  <button
                    onClick={() => removeFromCart(item._id, item.size)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    ลบสินค้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="w-1/3 flex justify-center">
          <div className="bg-[#CB5585] rounded-3xl shadow-lg p-8 w-full flex flex-col gap-8">
            <div className="flex justify-between text-white font-semibold text-xl">
              <span>รายการสั่งซื้อรวม</span>
              <span>{totalPrice} บาท</span>
            </div>

            <button
              onClick={handleCheckOut}
              className="bg-[#E09D00] rounded-full py-3 text-white font-semibold text-lg hover:opacity-90 transition"
            >
              สั่งสินค้า
            </button>

            {/* Payment Icons */}
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-visa-icon-PNG.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/330px-MasterCard_Logo.svg.png",
                "https://e7.pngegg.com/pngimages/849/112/png-clipart-google-pay-send-android-computer-icons-android-text-trademark.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0RcVjqOd7ijzqhMX7okRVtx5P4W8Zy2z5A&s",
                "https://images.seeklogo.com/logo-png/36/2/truemoney-wallet-logo-png_seeklogo-367826.png",
              ].map((src, idx) => (
                <div key={idx} className="bg-white p-2 rounded-xl shadow-sm">
                  <img src={src} className="h-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
