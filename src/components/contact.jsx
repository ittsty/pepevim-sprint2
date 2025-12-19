import React from 'react'

export const Contact = () => {
  return (
    <section className='w-full py-20 bg white flex justify-center'>
        <div className='max-w-2xl w-full px-6 text-center'>
            <h2 className='text-4xl font-light mb-2 mt-7'>Get In Touch!</h2>
            <h3 className='text-5xl font-extralight mb-6'>We'd Love to Hear From You</h3>
            <p className='text-gray-600 mb-12'>
                We're here to answer any question
                you have about our pawsome pet apparel.
            </p>

        <form className="space-y-6 text-left">
            <div className='grid grid-cols-1 md:grid-cols-2 gap4'>
                <div className='flex flex-col'>
                    <label className="text-sm font-bold mb-1">First Name</label>
                    <input type='text' placeholder='First Name' className='border-b border-pink-300 p-2 outline-none'/>
                </div>

                <div className='flex flex-col mx-5'>
                    <label className="text-sm font-bold mb-1">Last Name</label>
                    <input type='text' placeholder='First Name' className='border-b border-pink-300 p-2 outline-none'/>
                </div>

                <div className='flex flex-col mt-10'>
                    <label className="text-sm font-bold mb-1 ">Email</label>
                    <input type='text' placeholder='Email' className='border-b border-pink-300 p-2 outline-none'/>
                </div>

                <div className='flex flex-col mt-10 mx-5'>
                    <label className="text-sm font-bold mb-1 ">Message</label>
                    <input type='text' placeholder='Message' className='border-b border-pink-300 p-2 outline-none'/>
                </div>
            </div>
             <button className="py-3 px-10 mx-56 mt-10 bg-[#E0c013] text-white rounded-full font-light hover:bg-black transition duration-100">
                Sent Message
                </button>
        </form>
        </div>
    </section>
  )
}
