import React from 'react';
import { usePost } from '../hooks/usePost';

export const Contact = () => {

    const { form, error, success, handleChange, handleSubmit } = usePost();

    return (
        <section className='w-full py-20 bg-white flex justify-center'>
            <div className='max-w-2xl w-full px-6 text-center'>
                <h2 className='text-4xl font-light mb-2 mt-7'>Get In Touch!</h2>
                <h3 className='text-5xl font-extralight mb-6'>We'd Love to Hear From You</h3>

                <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col'>
                            <label className="text-sm font-bold mb-1">First Name</label>
                            <input
                                type='text' name="firstName" value={form.firstName} onChange={handleChange}
                                placeholder='First Name' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>

                        <div className='flex flex-col md:ml-5'>
                            <label className="text-sm font-bold mb-1">Last Name</label>
                            <input
                                type='text' name="lastName" value={form.lastName} onChange={handleChange}
                                placeholder='Last Name' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>

                        <div className='flex flex-col mt-4 md:mt-10'>
                            <label className="text-sm font-bold mb-1">Email</label>
                            <input
                                type='email' name="email" value={form.email} onChange={handleChange}
                                placeholder='Email' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>

                        <div className='flex flex-col mt-4 md:mt-10 md:ml-5'>
                            <label className="text-sm font-bold mb-1">Message</label>
                            <input
                                type='text' name="message" value={form.message} onChange={handleChange}
                                placeholder='Message' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>
                    </div>


                    {success && <p className="text-green-500 text-center">Message sent successfully!</p>}
                    {error && <p className="text-red-500 text-center">Something went wrong. Please try again.</p>}

                    <button type="submit" className="py-3 px-10 mx-auto block mt-10 bg-[#E0c013] text-white rounded-full font-light hover:bg-black transition duration-100">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};