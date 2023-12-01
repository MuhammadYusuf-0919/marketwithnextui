import React from 'react'
import Marquee from 'react-fast-marquee'
import f from '@/assets/1.png'
import t from '@/assets/2.png'
import th from '@/assets/3.png'
import fo from '@/assets/4.png'
import fi from '@/assets/a1.png'
import se from '@/assets/a2.png'
const Slider = () => {
    return (
        <div className='relative'>
            <h3 className='pb-[60px]'>Фото блюд</h3>
            <img src={se.src} className='absolute left-0 top-0 md:hidden' alt="" />
            <img src={fi.src} className='absolute bottom-[-5%] left-[30%] md:hidden' alt="" />
            <Marquee autoFill pauseOnHover>
                <img className='w-[380px] h-[570px] md:w-[270px] md:h-[404px] sm:w-[240px] sm:h-[346px] object-cover' src={f.src} alt="" />
                <img className='w-[380px] h-[570px] md:w-[270px] md:h-[404px] sm:w-[240px] sm:h-[346px] object-cover' src={t.src} alt="" />
                <img className='w-[380px] h-[570px] md:w-[270px] md:h-[404px] sm:w-[240px] sm:h-[346px] object-cover' src={th.src} alt="" />
                <img className='w-[380px] h-[570px] md:w-[270px] md:h-[404px] sm:w-[240px] sm:h-[346px] object-cover' src={fo.src} alt="" />
            </Marquee>
        </div>
    )
}

export default Slider