import { useState } from "react";

export const ContactView = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const inputClass =
    "border-b border-pink-300 p-2 outline-none focus:border-[#CB5585] transition";

  return (
    <>
      <section className="w-full py-12 bg-white flex justify-center">
        <div className="max-w-2xl w-full px-6 text-center">
          <h2 className="text-4xl font-light mb-2 mt-7">Get In Touch!</h2>
          <h3 className="text-5xl font-extralight mb-6">
            We'd Love to Hear From You
          </h3>
          <p className="text-gray-600 mb-12">
            We're here to answer any question you have about our pawwsome pet
            apparel.
          </p>

          <form className="space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className={inputClass}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Message</label>
                <input
                  type="text"
                  placeholder="Message"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowSuccess(true)}
                className="py-3 px-12 mt-6 bg-[#CB5585] text-white rounded-full font-light hover:opacity-90 transition hover:cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-4 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#CB5585]">
              We’ve Received Your Message
            </h2>
            <p className="text-gray-600 text-center">
              ขอบคุณที่ติดต่อ VELVE <br />
              เราจะติดต่อกลับโดยเร็วที่สุด
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-8 py-3 rounded-full bg-[#CB5585] text-white hover:opacity-90 transition "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
