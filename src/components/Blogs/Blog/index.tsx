import React from 'react'
import arrow from '@/assets/arrow.svg'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import Arrow from '@/assets/arrow'
import blogProps from '../types'



const Blog = ({ b, index }: { b: blogProps, index: number }) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            <img
                src={b.img}
                loading='lazy' alt=""
                className='w-[380px] h-[190px] object-cover rounded-sm shadow-xl sm:w-full'
            />
            <div className='flex flex-col gap-[20px] px-[10px]'>
                <p className='w-[80%]'>{b.des}</p>
                <div className='w-full flex justify-between items-center'>
                    <span className='text-[14px] text-[#B5C2CE]'>{b.date}</span>
                    <Link href={'/blogs/' + index}>
                        <Button
                            size='sm'
                            variant='bordered'
                            className='border-green group hover:text-light hover:bg-green text-green rounded-lg text-[14px] px-[20px] py-[8px] gap-[10px] group'
                        >
                            Подробнее
                            <Arrow className='animate-slide fill-green group-hover:fill-light duration-100' />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Blog