import CountrySelector from "@/components/CountrySelect";

export default function ConfirmOrderView() {
  return (
    <div className="grid grid-cols-2 p-9">
      <div className="border-r-2 border-black flex flex-col gap-6 p-8">
        <div className="flex flex-col p-2">
          <div className="text-4xl">Delivery</div>
          <div className="p-2 ">
            <CountrySelector />
          </div>
          <div className="grid grid-cols-2 gap-2 p-2">
            <input
              type="text"
              placeholder="First-name"
              className="border rounded-sm shadow-sm"
            ></input>
            <input
              type="text"
              placeholder="Last-name"
              className="border rounded-sm shadow-sm"
            ></input>
          </div>
          <div className="p-2">
            <input
              type="text"
              placeholder="Address"
              className="border w-full rounded-sm shadow-sm"
            ></input>
          </div>
          <div className="p-2">
            <input
              type="text"
              placeholder="Apartment, suite,etc, (optional)"
              className="border w-full rounded-sm shadow-sm"
            ></input>
          </div>
          <div className="grid grid-cols-3 p-2 gap-2">
            <input
              type="text"
              placeholder="City"
              className="border shadow-sm rounded-sm"
            ></input>
            <input
              type="text"
              placeholder="District"
              className="border shadow-sm rounded-sm"
            ></input>
            <input
              type="text"
              placeholder="Postal code"
              className="border rounded-sm shadow-sm"
            ></input>
          </div>
          <div className="p-2">
            <input
              type="tel"
              placeholder="Phone"
              className="border w-full rounded-sm shadow-sm"
            ></input>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <div className="text-4xl">Payment</div>
          <div>All transactions are secure and encrypted.</div>
          <div className="flex gap-4">
            <div>
              <img
                src="https://images.seeklogo.com/logo-png/36/2/truemoney-wallet-logo-png_seeklogo-367826.png"
                className="h-20 hover:border-2"
              ></img>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0RcVjqOd7ijzqhMX7okRVtx5P4W8Zy2z5A&s"
                className="h-20 hover:border-2"
              ></img>
            </div>
          </div>
          <div className="p-4 rounded-sm bg-gray-200 shadow-sm">
            <input
              type="tel"
              placeholder="Phone number"
              className="border bg-white w-full rounded-sm shadow-sm"
            ></input>
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-8">
        <div className="flex justify-between border-b-2 border-black p-4 font-bold">
          <h2>Order Summary</h2>
          <h2>Quanity</h2>
          <h2>Price</h2>
        </div>
        <div className="flex justify-between p-2 pb-10 pt-5 border-b-2">
          <div className="flex p-2 gap-2">
            <img src="/1.png" className="h-35" />
            <div className="flex items-center">ITEM HEADER</div>
          </div>
          <div className="flex items-center">3</div>
          <div className="flex items-center">30,000 Baht</div>
        </div>
        <div className="flex flex-col items-center p-2 gap-2">
          <div className="flex justify-between w-full">
            <input
              type="text"
              placeholder="Input Coupon"
              className="border bg-gray-200"
            ></input>
            <button type="button" className="border-2 bg-gray-200 p-2">
              Apply
            </button>
          </div>
          <div className="flex justify-between w-full">
            <div>subtotal</div>
            <div>30,000 Baht</div>
          </div>
          <div className="flex justify-between w-full">
            <div>shipping</div>
            <div>1,000 Baht</div>
          </div>
          <div className="flex justify-between w-full">
            <div>Total</div>
            <div>31,000 Baht</div>
          </div>
          <button
            type="button"
            className="border-2 rounded-sm w-3/5 bg-gray-200 p-2"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
