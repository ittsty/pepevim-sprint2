import React, { useState } from 'react';

export const Contact = () => {
    // 1. สร้างที่เก็บข้อมูล (State)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    // 2. ฟังก์ชันอัปเดตค่าเวลาเราพิมพ์
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 3. ฟังก์ชันส่งข้อมูลไปหา Backend (Port 3000)
    const handleSubmit = async (e) => {
        e.preventDefault(); // กันหน้าเว็บรีเฟรช
        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                alert("Success: " + result.message);
                setFormData({ firstName: '', lastName: '', email: '', message: '' }); // ล้างฟอร์ม
            }
        } catch (error) {
            console.error("Error:", error);
            alert("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้!");
        }
    };

    return (
        <section className='w-full py-20 bg-white flex justify-center'>
            <div className='max-w-2xl w-full px-6 text-center'>
                <h2 className='text-4xl font-light mb-2 mt-7'>Get In Touch!</h2>
                <h3 className='text-5xl font-extralight mb-6'>We'd Love to Hear From You</h3>
                
                {/* 4. เพิ่ม onSubmit ที่นี่ */}
                <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col'>
                            <label className="text-sm font-bold mb-1">First Name</label>
                            <input 
                                type='text' name="firstName" value={formData.firstName} onChange={handleChange}
                                placeholder='First Name' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>

                        <div className='flex flex-col mx-5'>
                            <label className="text-sm font-bold mb-1">Last Name</label>
                            <input 
                                type='text' name="lastName" value={formData.lastName} onChange={handleChange}
                                placeholder='Last Name' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>

                        <div className='flex flex-col mt-10'>
                            <label className="text-sm font-bold mb-1">Email</label>
                            <input 
                                type='email' name="email" value={formData.email} onChange={handleChange}
                                placeholder='Email' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>

                        <div className='flex flex-col mt-10 mx-5'>
                            <label className="text-sm font-bold mb-1">Message</label>
                            <input 
                                type='text' name="message" value={formData.message} onChange={handleChange}
                                placeholder='Message' className='border-b border-pink-300 p-2 outline-none' required
                            />
                        </div>
                    </div>
                    
                    {/* 5. ต้องเป็นปุ่ม type="submit" */}
                    <button type="submit" className="py-3 px-10 mx-auto block mt-10 bg-[#E0c013] text-white rounded-full font-light hover:bg-black transition duration-100">
                        Sent Message
                    </button>
                </form>
            </div>
        </section>
    );
};