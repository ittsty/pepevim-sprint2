export default function PaymentView() {
    return () => {
        <div>
      <h1 className="text-8xl font-bold p-4">Your Cart</h1>
      <div className="flex gap-4">
        <div className=" w-2/3 p-8">
          <div className="flex justify-between border-b-2 border-black p-4 font-bold">
            <h2>Product</h2>
            <h2>Quanity</h2>
            <h2>Total</h2>
          </div>
          <div className="grid grid-cols-3 p-4 pb-10 pt-5 border-b-2 border-black ">
            <div className="flex items-center">
              <div className="border-2 flex items-center h-40 w-40 shrink-0">
                <img src="https://i.redd.it/zj7m5n0a2xx91.jpg" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-bold leading-tight">Item Collecton 1</h3>
                <div className="flex gap-1">
                  <p>9,999.99</p>
                  <p>B</p>
                </div>
                <p>Option</p>
              </div>
            </div>
            <div className="gap-4 flex justify-center items-center shrink-0">
              <div className="flex justify-center items-center">
                <button className="border-2 rounded-l-md p-3">-</button>
                <div className="border-t-2 border-b-2 p-3">99</div>
                <button className="border-2 rounded-r-md p-3">+</button>
              </div>
              <div className="flex items-center justify-center">
                <button className="border-2 p-3">Bin</button>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <p>99,999.99</p>
              <p>B</p>
            </div>
          </div>
          <div className="grid grid-cols-3 p-4 pb-10 pt-5 border-b-2 border-black ">
            <div className="flex items-center">
              <div className="border-2 flex items-center h-40 w-40 shrink-0">
                <img src="https://i.redd.it/zj7m5n0a2xx91.jpg" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-bold leading-tight">Item Collecton 1</h3>
                <div className="flex gap-1">
                  <p>9,999.99</p>
                  <p>B</p>
                </div>
                <p>Option</p>
              </div>
            </div>
            <div className="gap-4 flex justify-center items-center shrink-0">
              <div className="flex justify-center items-center">
                <button className="border-2 rounded-l-md p-3">-</button>
                <div className="border-t-2 border-b-2 p-3">99</div>
                <button className="border-2 rounded-r-md p-3">+</button>
              </div>
              <div className="flex items-center justify-center">
                <button className="border-2 p-3">Bin</button>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <p>99,999.99</p>
              <p>B</p>
            </div>
          </div>
          <div className="grid grid-cols-3 p-4 pb-10 pt-5 border-b-2 border-black ">
            <div className="flex items-center">
              <div className="border-2 flex items-center h-40 w-40 shrink-0">
                <img src="https://i.redd.it/zj7m5n0a2xx91.jpg" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-bold leading-tight">Item Collecton 1</h3>
                <div className="flex gap-1">
                  <p>9,999.99</p>
                  <p>B</p>
                </div>
                <p>Option</p>
              </div>
            </div>
            <div className="gap-4 flex justify-center items-center shrink-0">
              <div className="flex justify-center items-center">
                <button className="border-2 rounded-l-md p-3">-</button>
                <div className="border-t-2 border-b-2 p-3">99</div>
                <button className="border-2 rounded-r-md p-3">+</button>
              </div>
              <div className="flex items-center justify-center">
                <button className="border-2 p-3">Bin</button>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <p>99,999.99</p>
              <p>B</p>
            </div>
          </div>
        </div>
        <div className=" w-1/3 flex justify-center items-baseline pt-22 p-4">
          <div className="border-2 rounded-2xl flex flex-col justify-center items-center gap-8 p-4 w-6/9">
            <div className="flex justify-between w-full">
              <div>Estimated total</div>
              <div>5,000.00 B</div>
            </div>
            <button className="border-2 rounded-2xl w-4/5">
              Check Out
            </button>
            <div className="flex justify-between w-full gap-2">
              <div className="border-2 flex items-center">Visa</div>
              <div className="border-2 flex items-center">master card</div>
              <div className="border-2 flex items-center">promptpay</div>
              <div className="border-2 flex items-center">googlepay</div>
              <div className="border-2 flex items-center">Applepay</div>
            </div>
          </div>
        </div>
      </div>
        </div>
    }
}
