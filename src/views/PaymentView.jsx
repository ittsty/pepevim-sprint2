import { RiDeleteBin5Fill } from "react-icons/ri";
import QuantityButton from "@/components/QuantityButton";
import { useNavigate, Link } from "react-router-dom";

export default function PaymentView() {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h1 className="text-8xl font-bold p-4">Your Cart</h1>
      <div className="flex gap-4">
        <div className=" w-2/3 p-8">
          <div className="flex justify-between border-b-2 border-black p-4 font-bold">
            <h2>Product</h2>
            <h2>Quanity</h2>
            <h2>Total</h2>
          </div>
          <div className="grid grid-cols-3 p-4 pb-10 pt-5 border-b-2 border-black">
            <div className="flex items-center">
              <div className="border-2 flex items-center h-35 w-35 shrink-0">
                <img src="/1.png" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-bold leading-tight">Item Collecton 1</h3>
                <div className="flex gap-1 font">
                  <p>10,000.00</p>
                  <p>B</p>
                </div>
                <p>Option</p>
              </div>
            </div>
            <div className="gap-4 flex justify-center items-center shrink-0">
              <div className="flex justify-center items-center">
                <QuantityButton />
              </div>
              <div className="flex items-center justify-center">
                <RiDeleteBin5Fill />
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 text-2xl">
              <p>10,000.00</p>
              <p>B</p>
            </div>
          </div>
          <div className="grid grid-cols-3 p-4 pb-10 pt-5 border-b-2 border-black">
            <div className="flex items-center">
              <div className="border-2 flex items-center h-35 w-35 shrink-0">
                <img src="/1.png" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-bold leading-tight">Item Collecton 1</h3>
                <div className="flex gap-1 font">
                  <p>10,000.00</p>
                  <p>B</p>
                </div>
                <p>Option</p>
              </div>
            </div>
            <div className="gap-4 flex justify-center items-center shrink-0">
              <div className="flex justify-center items-center">
                <QuantityButton />
              </div>
              <div className="flex items-center justify-center">
                <RiDeleteBin5Fill />
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 text-2xl">
              <p>10,000.00</p>
              <p>B</p>
            </div>
          </div>
          <div className="grid grid-cols-3 p-4 pb-10 pt-5 border-b-2 border-black">
            <div className="flex items-center">
              <div className="border-2 flex items-center h-35 w-35 shrink-0">
                <img src="/1.png" />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-bold leading-tight">Item Collecton 1</h3>
                <div className="flex gap-1 font">
                  <p>10,000.00</p>
                  <p>B</p>
                </div>
                <p>Option</p>
              </div>
            </div>
            <div className="gap-4 flex justify-center items-center shrink-0">
              <div className="flex justify-center items-center">
                <QuantityButton />
              </div>
              <div className="flex items-center justify-center">
                <RiDeleteBin5Fill />
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 text-2xl">
              <p>10,000.00</p>
              <p>B</p>
            </div>
          </div>
        </div>
        <div className=" w-1/3 flex justify-center items-baseline pt-22">
          <div className="bg-[#C662A5] border-2 rounded-2xl flex flex-col justify-center items-center gap-8 p-4 w-6/9">
            <div className="flex justify-between w-full text-white font-bold">
              <div>Estimated total</div>
              <div>5,000.00 B</div>
            </div>
            <button
              onClick={handleCheckOut}
              className="bg-[#E09D00] rounded-2xl w-4/5 p-2 text-white font-bold text-xl hover:bg-[#f0a800]"
            >
              Check Out
            </button>

            <div className="flex justify-between w-full gap-2">
              <div className="border-2">
                <img
                  className="h-10"
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-visa-icon-PNG.png"
                />
              </div>
              <div className="border-2">
                <img
                  className="h-10 bg-white"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/330px-MasterCard_Logo.svg.png"
                />
              </div>
              <div className="border-2">
                <img
                  className="h-10"
                  src="https://e7.pngegg.com/pngimages/849/112/png-clipart-google-pay-send-android-computer-icons-android-text-trademark.png"
                />
              </div>
              <div className="border-2">
                <img
                  className="h-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0RcVjqOd7ijzqhMX7okRVtx5P4W8Zy2z5A&s"
                />
              </div>
              <div className="border-2 bg-white">
                <img
                  className="h-10"
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
