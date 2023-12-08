'use client'
import Message from '@/assets/message'
import React, { useState } from 'react'
import tg from '@/assets/tg.png'
import fa from '@/assets/face.png'
import insta from '@/assets/insta.png'
import sms from '@/assets/sms.png'
import Close from '@/assets/close'

const Socials = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='fixed right-[30px] bottom-[70px] smd:bottom-[130px] z-50'>
            <div className='relative'>

                {false && <div className='absolute w-[200px] py-[12px] px-[16px] bg-light top-[-120%] right-0 rounded-[15px] shadow-lg'>
                    <p className='text-[12px]'>Мы онлайн! Консультация
                        и -30% в чате. Без звонка!
                    </p>
                    <div className='w-[10px] h-[10px] bg-light rotate-45 absolute bottom-[-5px] right-[30px]' />
                </div>}

                <div className={`flex gap-[15px] absolute left-[-150%] smd:left-[-200%] duration-300 bg-light bottom-[20%] smd:bottom-[15%] px-[15px] py-[11px] md:py-[5px] md:px-[11px] md:left-[-170%] shadow-lg rounded-sm ${!open && '!left-[-20%] opacity-0 pointer-events-none'}`}
                    onClick={() => setOpen(false)}
                >
                    <a href="">
                        <img className='hover:scale-[1.1] duration-200 hover:bg-green rounded-full md:w-[22px] shadow-lg' src={insta.src} alt="" />
                    </a>
                    <a href="">
                        <img className='hover:scale-[1.1] duration-200 hover:bg-green rounded-full md:w-[22px] shadow-lg' src={fa.src} alt="" />
                    </a>
                </div>

                <div className={`group relative w-[80px] md:w-[52px] smd:w-[42px] cursor-pointer bg-light h-[80px] md:h-[52px] smd:h-[42px] rounded-full duration-200 shadow-lg flex items-center justify-center hover:bg-green ${open && 'hover:!bg-[#F35353]'}`}
                    onClick={() => setOpen(!open)}
                >
                    {false && <span className='absolute bg-dark w-[25px] md:w-[16px] h-[25px] md:h-[16px] text-light rounded-full flex items-center justify-center top-[-5px] md:right-[2px] text-[12px] md:text-[8px] font-[Monstserrat] right-0'>
                        1
                    </span>}

                    {open ? <Close className='fill-dark group-hover:fill-light md:w-[25px] smd:w-[20px]' /> : <Message className='fill-dark group-hover:fill-light md:w-[25px] smd:w-[20px]' />}
                </div>

                <a href="">
                    <img className='absolute cursor-pointer hover:scale-[1.1] duration-200 hover:bg-green bottom-[-30%] smd:bottom-[-45%] left-[-20%] smd:left-[-40%] bg-light rounded-full md:w-[22px] shadow-lg' src={tg.src} alt="" />
                </a>
                <a href="">
                    <img className='absolute cursor-pointer hover:scale-[1.1] duration-200 hover:bg-green bottom-[-50%] smd:bottom-[-70%] right-[30%] smd:right-[20%] bg-light rounded-full md:w-[22px] shadow-lg' src={sms.src} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Socials