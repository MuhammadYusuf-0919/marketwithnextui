import React from 'react'
import { adds } from './data'

const MainAdds = () => {
    return (
        <div className='container relative pt-[100px] md:pt-[60px] sm:pt-[40px]'>
            <div className='!bg-blur !w-[110%] ml-[-5%] !py-[37px] !px-[60px] !rounded-sm flex justify-between gap-[25px] items-center 2xl:!w-[110%] xl:!w-full  smd:grid grid-cols-2 xl:m-0 smd:gap-y-[35px] smd:gap-x-[25px] smd:!px-0 smd:gap-0 md:!w-full'>
                {adds.map(a => (
                    <div key={a.des} className='flex flex-col items-center w-full justify-center gap-[20px]'>
                        <img className='h-[68px] object-contain xl:h-[37px] smd:h-[42px]' src={a.img.src} alt="" />
                        <p className='text-[12px] lg:text-[10px] md:text-[8px] text-center'>{a.des}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MainAdds