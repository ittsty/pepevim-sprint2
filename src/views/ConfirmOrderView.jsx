import { useState } from "react";
import CountrySelector from "@/components/CountrySelect";
import { useCart } from "@/contexts/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ConfirmOrderView() {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const apibase = import.meta.env.VITE_API_URL;
  const [showSuccess, setShowSuccess] = useState(false);
  const { cart, totalPrice } = useCart();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    district: "",
    postalCode: "",
    paymentMethod: "truemoney",
  });
  const inputClass =
    "w-full border border-[#E5B6C8] rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CB5585] transition";

  const validate = () => {
    const newErrors = {};
    if (cart.length === 0) newErrors.cart = "Your cart is empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const payload = {
      items: cart.map((item) => ({
        _id: item._id,
        productName: item.productName,
        size: item.size,
        price: item.price,
        quantity: item.quantity,
      })),
      paymentMethod: "promptpay",
      shippingAddress: {
        name: `${form.firstName} ${form.lastName}`,
        phone: form.phone,
        address: `${form.address}, ${form.city}, ${form.district}, ${form.postalCode}`,
      },
    };

    try {
      console.log(payload);
      await axios.post(`${apibase}/api/v2/orders`, payload);

      localStorage.removeItem("cart");
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Order failed");
    }
  };
  return (
    <>
      <div
  className="
    min-h-screen bg-[#FFF3F8]
    px-4 sm:px-6 md:px-10
    py-6 md:py-12
    grid grid-cols-1 lg:grid-cols-2
    gap-6 lg:gap-8
  "
>
        {/* LEFT */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col gap-12">
          <form id="order-form" onSubmit={handleSubmit}>
            <section className="flex flex-col gap-6">
              <h2 className="text-3xl font-semibold">Delivery</h2>

              <CountrySelector
                value={form.country}
                onChange={(val) => setForm({ ...form, country: val })}
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First name"
                  className={inputClass}
                  onChange={handleChange}
                  required 
                />
                
                <input
                  name="lastName"
                  placeholder="Last name"
                  className={inputClass}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                name="address"
                placeholder="Address"
                className={inputClass}
                onChange={handleChange}
                required
              />

              <input
                placeholder="Apartment, suite, etc. (optional)"
                className={inputClass}
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  name="city"
                  placeholder="City"
                  className={inputClass}
                  onChange={handleChange}
                  required
                />
                <input
                  name="district"
                  placeholder="District"
                  className={inputClass}
                  onChange={handleChange}
                  required
                />
                <input
                  name="postalCode"
                  placeholder="Postal code"
                  className={inputClass}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                name="phone"
                placeholder="Phone"
                className={inputClass}
                onChange={handleChange}
                required
              />
            </section>
            <section className="flex flex-col gap-6">
              <h2 className="text-3xl font-semibold mt-4">Payment</h2>

              <p className="text-sm text-gray-500">
                All transactions are secure and encrypted.
              </p>

              <div className="flex gap-4">
                <img
                  src="https://images.seeklogo.com/logo-png/36/2/truemoney-wallet-logo-png_seeklogo-367826.png"
                  className="h-14 p-3 rounded-xl border border-[#E5B6C8] cursor-pointer"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0RcVjqOd7ijzqhMX7okRVtx5P4W8Zy2z5A&s"
                  className="h-14 p-3 rounded-xl border border-[#E5B6C8] cursor-pointer"
                />
              </div>

              <div className="bg-[#FFF3F8] rounded-xl p-4">
                <input
                  placeholder="Phone number for payment"
                  className={inputClass}
                />
              </div>
            </section>
          </form>
        </div>
        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col gap-6">
          {errors.cart && (<p className="text-red-500 text-sm text-center">{errors.cart}</p>)}
          <div className="grid grid-cols-3 text-gray-700 font-medium border-b pb-4">
            <span className="col-span-1">Order Summary</span>
            <span className="text-center">Qty</span>
            <span className="text-right">Price</span>
          </div>

          {cart.map((item) => (
            <div
              key={`${item._id}-${item.size}`}
              className="grid grid-cols-3 items-center border-b pb-6"
            >
              <div className="flex items-center gap-3">
                <img src={item.image} className="h-16 w-16 rounded-xl" />
                <div className="text-sm">
                  {item.productName}
                  <div className="text-gray-400">Size {item.size}</div>
                </div>
              </div>
              <span className="text-center">{item.quantity}</span>
              <span className="text-right">
                {item.price * item.quantity} Baht
              </span>
            </div>
          ))}

          <div className="flex flex-col md:flex-row gap-3 mt-2">
            <input
              placeholder="Coupon code"
              className="flex-1 border border-[#E5B6C8] rounded-lg px-4 py-3 bg-[#FFF3F8]"
            />
            <button className="px-6 rounded-lg bg-[#CB5585] text-white">
              Apply
            </button>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{totalPrice} Baht</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>1,000 Baht</span>
          </div>

          <div className="flex justify-between text-lg font-semibold border-t pt-4">
            <span>Total</span>
            <span>{totalPrice + 1000} Baht</span>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              form="order-form"
              className="w-full py-4 rounded-xl bg-[#CB5585] text-white text-lg font-medium hover:opacity-90 transition"
            >
              สั่งซื้อสินค้า
            </button>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-4 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#CB5585]">
              Order Successful
            </h2>
            <p className="text-gray-600">ขอบคุณสำหรับการสั่งซื้อกับ VELVE</p>
            <button
              onClick={() => {
                setShowSuccess(false);
                navigate("/");
                clearCart();
              }}
              className={`w-full py-4 rounded-xl text-lg font-medium transition${cart.length === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-[#CB5585] text-white hover:opacity-90"}`}
              disabled={cart.length === 0}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
