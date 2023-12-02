'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import { blog, blogs } from '../../../components/Blogs/data'
import BackButton from '@/themes/BackButton'
import f from '@/assets/face.png'
import insta from '@/assets/insta.png'
import MyButton from '@/themes/MyButton'
import Blogs from '@/components/Blogs'
import { useRouter } from 'next/navigation'

const Blog = () => {
    const params = useParams()
    const router = useRouter()

    const back = () => {
        router.back()
    }
    return (
        <div className='container relative flex flex-col gap-[60px] md:gap-[30px]'>
            <div className=' flex flex-col gap-[40px]'>
                <img src={blogs[+params.blog].img} alt="" loading='lazy' className='w-full h-[500px] md:h-[240px] sm:h-[120px] rounded-sm shadow-xl object-cover' />
                <div className='flex w-full gap-[20px] smd:flex-col-reverse justify-between items-start'>
                    <div className='flex items-start gap-[30px]'>
                        <BackButton className='smd:hidden' click={back} />
                        <div className='flex flex-col gap-[15px] md:gap-[10px] smd:gap-[15px]'>
                            <h4 className='mt-[-5px] md:text-[20px] smd:text-left'>{blog.title}</h4>
                            <span className='text-[14px] text-[#B5C2CE]'>{blogs[+params.blog].date}</span>
                        </div>
                    </div>
                    <div className='flex items-center smd:w-full justify-between'>
                        <BackButton className='hidden smd:flex' click={back} />
                        <div className='flex items-center gap-[10px]'>
                            <p>Поделиться:</p>
                            <img src={insta.src} alt="" />
                            <img src={f.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] w-[85%] mx-auto'>
                    {blog.fd.map(f => (
                        <p key={f}>{f}</p>
                    ))}
                </div>
            </div>
            {blog.adds.map(b => (
                <div className='flex flex-col gap-[60px] md:gap-[30px]'>
                    <img className='w-[90%] sm:w-full mx-auto rounded-sm shadow-lg' src={b.img} alt="" />
                    <div className='flex flex-col gap-[40px] md:gap-[20px] w-[85%] mx-auto text-left'>
                        {b.d.map(d => (
                            <p>{d}</p>
                        ))}
                    </div>
                </div>
            ))}
            <div className='flex smd:flex-wrap smd:gap-[20px]  justify-between items-end pt-[100px] md:pt-[30px]'>
                <div className='smd:flex justify-center hidden w-full'>
                    <MyButton>
                        Программы питания
                    </MyButton>
                </div>
                <div className='flex sm:w-min gap-[15px] items-center group cursor-pointer' onClick={back}>
                    <BackButton className='group-hover:bg-green group-hover:text-light' />
                    <p>Назад</p>
                </div>
                <MyButton className='smd:hidden'>
                    Программы питания
                </MyButton>
                <div className='flex items-center gap-[10px]'>
                    <p>Поделиться:</p>
                    <img src={insta.src} alt="" />
                    <img src={f.src} alt="" />
                </div>
            </div>
            <div>
                <Blogs title='Вас может заинтересовать:' data={blogs.slice(0, 3)} />
            </div>
        </div>
    )
}

export default Blog