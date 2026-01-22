import { useState } from "react";
import CountrySelector from "@/components/CountrySelect";

export default function ConfirmOrderView() {
  const [showSuccess, setShowSuccess] = useState(false);

  const inputClass =
    "w-full border border-[#E5B6C8] rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CB5585] transition";

  return (
    <>
      <div className="min-h-screen bg-[#FFF3F8] px-10 py-12 grid grid-cols-2 gap-8">
        {/* LEFT */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col gap-12">
          {/* DELIVERY */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-gray-800">Delivery</h2>

            <CountrySelector />

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="First name" className={inputClass} />
              <input placeholder="Last name" className={inputClass} />
            </div>

            <input placeholder="Address" className={inputClass} />

            <input
              placeholder="Apartment, suite, etc. (optional)"
              className={inputClass}
            />

            <div className="grid grid-cols-3 gap-4">
              <input placeholder="City" className={inputClass} />
              <input placeholder="District" className={inputClass} />
              <input placeholder="Postal code" className={inputClass} />
            </div>

            <input placeholder="Phone" className={inputClass} />
          </section>

          {/* PAYMENT */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-gray-800">Payment</h2>

            <p className="text-sm text-gray-500">
              All transactions are secure and encrypted.
            </p>

            <div className="flex gap-6">
              <img
                src="https://images.seeklogo.com/logo-png/36/2/truemoney-wallet-logo-png_seeklogo-367826.png"
                className="h-16 p-3 rounded-xl border border-[#E5B6C8] hover:shadow-md transition cursor-pointer"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0RcVjqOd7ijzqhMX7okRVtx5P4W8Zy2z5A&s"
                className="h-16 p-3 rounded-xl border border-[#E5B6C8] hover:shadow-md transition cursor-pointer"
              />
            </div>

            <div className="bg-[#FFF3F8] rounded-xl p-4">
              <input
                placeholder="Phone number for payment"
                className={inputClass}
              />
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col gap-8">
          <div className="flex justify-between text-gray-700 font-medium border-b border-[#E5B6C8] pb-4">
            <span>Order Summary</span>
            <span>Qty</span>
            <span>Price</span>
          </div>

          <div className="flex justify-between items-center border-b border-[#E5B6C8] pb-6">
            <div className="flex items-center gap-4">
              <img src="/1.png" className="h-20 rounded-xl" />
              <span className="font-medium text-gray-700">ITEM HEADER</span>
            </div>
            <span>3</span>
            <span>30,000 Baht</span>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <input
                placeholder="Coupon code"
                className="flex-1 border border-[#E5B6C8] rounded-lg px-4 py-3 bg-[#FFF3F8] focus:ring-2 focus:ring-[#CB5585]"
              />
              <button className="px-5 rounded-lg bg-[#CB5585] text-white hover:opacity-90 transition">
                Apply
              </button>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>30,000 Baht</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>1,000 Baht</span>
            </div>

            <div className="flex justify-between text-lg font-semibold text-gray-800 border-t border-[#E5B6C8] pt-4">
              <span>Total</span>
              <span>31,000 Baht</span>
            </div>

            <button
              onClick={() => setShowSuccess(true)}
              className="mt-4 w-full py-4 rounded-xl bg-[#CB5585] text-white text-lg font-medium hover:opacity-90 transition"
            >
              สั่งซื้อสินค้า
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-4 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#CB5585]">
              Order Successful
            </h2>
            <p className="text-gray-600">ขอบคุณสำหรับการสั่งซื้อกับ VELVE</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-8 py-3 rounded-xl bg-[#CB5585] text-white hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
