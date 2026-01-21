import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h1 className="text-8xl font-bold p-20">Cart</h1>
      <div className="flex gap-4">
        <div className="max-w-xl mx-auto p-6 space-y-4 w-full">
          {cart.length === 0 && <p>ไม่มีสินค้าในตะกร้า</p>}

          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <div>
                <p className="font-semibold">{item.productName} | size: {item.size}</p>
                <p>{item.price} บาท</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item._id,item.size)}
                  className="text-red-500"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}

          <hr />
        </div>
        <div className=" w-1/3 flex justify-center items-baseline">
          <div className="bg-[#C662A5] border-2 rounded-2xl flex flex-col justify-center items-center gap-8 p-6 w-7/9">
            <div className="flex justify-between w-full text-white font-bold text-xl">
              <div>รายการสั่งซื้อรวม</div>
              <div>{totalPrice} บาท</div>
            </div>
            <button
              onClick={handleCheckOut}
              className="bg-[#E09D00] rounded-2xl w-4/5 p-2 text-white font-bold text-xl hover:bg-[#f0a800]"
            >
              สั่งสินค้า
            </button>

            <div className="flex justify-center w-full gap-4">
              <div className="border-2">
                <img
                  className="h-15"
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-visa-icon-PNG.png"
                />
              </div>
              <div className="border-2">
                <img
                  className="h-15 bg-white"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/330px-MasterCard_Logo.svg.png"
                />
              </div>
              <div className="border-2">
                <img
                  className="h-15"
                  src="https://e7.pngegg.com/pngimages/849/112/png-clipart-google-pay-send-android-computer-icons-android-text-trademark.png"
                />
              </div>
              <div className="border-2">
                <img
                  className="h-15"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0RcVjqOd7ijzqhMX7okRVtx5P4W8Zy2z5A&s"
                />
              </div>
              <div className="border-2 bg-white">
                <img
                  className="h-15"
                  src="https://images.seeklogo.com/logo-png/36/2/truemoney-wallet-logo-png_seeklogo-367826.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
