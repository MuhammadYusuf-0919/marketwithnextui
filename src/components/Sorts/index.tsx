'use client'
import React, { useState } from 'react'
import { sorts } from './data'

const Sorts = () => {
    const [sort, setSort] = useState('')
    return (
        <div className='flex flex-col gap-[50px] absolute md:pt-[25px] z-50 left-[50px] 2xl:left-[20px] xl:left-[5px] md:pl-[20px] smd:flex-row smd:bottom-0 pb-[18px] smd:justify-between smd:gap-0 smd:w-full pr-[20px] smd:fixed smd:pt-0 smd:bg-[#DEE6EE] rounded-t-sm ml-[-5px] select-none '>
            <div
                className={`group w-[70px] md:w-[42px] h-[70px] md:h-[42px] cursor-pointer hover:w-[108px] md:hover:w-[70px] flex items-center shadow-lg rounded-full duration-200 bg-light ${sort === 'Kkal' && '!w-[188px] md:!w-[128px] smd:!w-[42px]'} smd:translate-y-[-50%] smd:hover:w-[42px]`}
                onClick={() => setSort(sort !== 'Kkal' ? 'Kkal' : '')}
            >
                <p
                    className={`pointer-events-none group-hover:text-green text-[20px] md:text-[10px] translate-x-[25%] md:translate-x-[35%] duration-200 ${sort === 'Kkal' && 'text-green'}`}
                >
                    Kkal
                </p>
                <p
                    className={`${sort === 'Kkal' && 'opacity-100 !text-green'} pointer-events-none absolute right-0 text-green smd:text-dark opacity-0 text-[12px] w-[60%] pr-[38px] md:pr-[20px] duration-200 md:text-[10px] smd:bottom-[-29px] smd:opacity-100 smd:text-[7px] smd:!w-[135%] smd:left-[-10%] smd:p-0 text-left smd:text-center`}
                >
                    Программы
                    800 - 2400 ккал
                </p>
            </div>
            {
                sorts.map((s, index) => (
                    <div
                        className={`group w-[70px] md:w-[42px] md:h-[42px] hover:w-[108px] md:hover:w-[70px] ${sort === s.des && '!w-[188px] md:!w-[100px] smd:!w-[42px]'} h-[70px] cursor-pointer flex ml-auto items-center shadow-lg rounded-full duration-200 bg-light !m-0 smd:translate-y-[-50%] smd:hover:w-[42px] smd:justify-center smd:flex-col`}
                        key={index} onClick={() => setSort(sort !== s.des ? s.des : '')}
                    >
                        {s.img(`group-hover:!fill-green ${sort === s.des && '!fill-green'} fill-[black] ml-[20px] duration-200 transform-origin-left md:ml-[5px] smd:m-0 md:h-[30px]`)}
                        <p
                            className={`${sort === s.des && 'opacity-100 !text-green smd:text-[10px] smd:left-[15%] smd:bottom-[-26px]'} pointer-events-none absolute right-0 text-green smd:text-dark opacity-0 text-[25px] pr-[38px] md:pr-[38px] duration-200 md:text-[10px] smd:opacity-100 smd:bottom-[-24px] smd:text-[8px] smd:w-full smd:left-[25%]`}
                        >
                            {s.des}
                        </p>
                    </div>
                ))
            }
        </div >

    )
}

export default Sorts