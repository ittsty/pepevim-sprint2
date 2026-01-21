
import React from 'react';
import { usePost } from '../hooks/usePost';

export const ContactView = () => {

    const { form, error, success, handleChange, handleSubmit } = usePost();

  return (
    <section className='w-full py-2 bg white flex justify-center'>
        <div className='max-w-2xl w-full px-6 text-center'>
            <h2 className='text-4xl font-light mb-2 mt-7'>Get In Touch!</h2>
            <h3 className='text-5xl font-extralight mb-6'>We'd Love to Hear From You</h3>
            <p className='text-gray-600 mb-12'>
                We're here to answer any question
                you have about our pawwsome pet apparel.
            </p>

        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap4'>
                <div className='flex flex-col'>
                    <label className="text-sm font-bold mb-1">First Name</label>
                    <input 
                        type='text' 
                        name='firstName'
                        placeholder='First Name' 
                        className='border-b border-pink-300 p-2 outline-none'
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col mx-5'>
                    <label className="text-sm font-bold mb-1">Last Name</label>
                    <input 
                        type='text' 
                        name='lastName'
                        placeholder='Last Name' 
                        className='border-b border-pink-300 p-2 outline-none'
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col mt-10'>
                    <label className="text-sm font-bold mb-1 ">Email</label>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='Email' 
                        className='border-b border-pink-300 p-2 outline-none'
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col mt-10 mx-5'>
                    <label className="text-sm font-bold mb-1 ">Message</label>
                    <input 
                        type='text' 
                        name='message'
                        placeholder='Message' 
                        className='border-b border-pink-300 p-2 outline-none'
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>
            </div>
             <button 
                type='submit'
                className="py-3 px-10 mx-56 mt-10 bg-secondary text-white rounded-full font-light hover:bg-black transition duration-100"
             >
                Sent Message
                </button>
                {
                    success && <p className='text-green-500 text-center mt-4'>Message sent successfully!</p>
                }
                {
                    error && <p className='text-red-500 text-center mt-4'>{error}</p>
                }
        </form>
        </div>
    </section>
  )
}
