
import React, { useState } from 'react'
import Blog from '@/components/Blogs/Blog'
import MyPagination from '@/themes/MyPagination'
import bg2 from '@/assets/blogbg2.png'
import bg3 from '@/assets/blogbg3.png'
import { blogs } from './data'
import blogProps from './types'
import MainModal from '../MainModal'

interface thisProps {
    title?: string,
    data?: blogProps[]
}
const Blogs = ({ title, data }: thisProps) => {
    const [page, setPage] = useState(1)

    const mapData = () => {
        if (data) return data;
        return blogs
    }

    return (
        <div className={`${!title && 'container relative'} pb-[100px] pt-[83px] md:pt-[30px] sm:pb-[60px]`}>
            <img className='absolute md:hidden left-0 bottom-[-200px] z-[-1] rotate-[-19.057deg]' src={bg2.src} alt="" />
            <img className='absolute md:hidden right-0 bottom-[-20px] z-[-1]' src={bg3.src} alt="" />
            {title && <h4 className='pb-[20px]'>{title}</h4>}
            <div className='md:w-max md:mx-auto sm:w-full'>
                <div className='grid grid-cols-3 md:grid-cols-2 smd:grid-cols-1 justify-between gap-x-[24px] md:gap-x-[30px] gap-y-[60px]  pb-[50px] max-w-full'>
                    {mapData().slice((page - 1) * 6, page * 6).map((b: blogProps, index: number) => (
                        <Blog b={b} index={index} />
                    ))}
                </div>
                {Math.ceil((mapData().length) / 6) > 1 && <div className='ml-[30px] smd:ml-[20px]'>
                    <MyPagination count={Math.ceil((mapData().length) / 6)} setPg={setPage} pg={page} />
                </div>}
            </div>
            <MainModal open={true} />
        </div>
    )
}

export default Blogs