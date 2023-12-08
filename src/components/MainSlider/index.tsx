'use client'
import React, { useRef, useState } from 'react'
import bg from '@/assets/main_bg.png'
import mdbg from '@/assets/mdbg.png'
import smbg from '@/assets/smbg.png'
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import { mainData } from './data';
import MyButton from '@/themes/MyButton';
import Arrow from '@/assets/arrow';
import { hightLight } from '../../../useFulls/highlight'

const MainSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    SwiperCore.use([Autoplay, Navigation, Pagination]);


    const swiperRef = useRef<any>(null);


    const handleSlideChange = (swiper: any) => {
        setSlideIndex(swiper.realIndex)
    }

    const handleChangeSlide = (index: number) => {
        swiperRef.current.swiper.slideTo(index)
    }
    const slideNext = () => {
        if (slideIndex < mainData.length - 1) {
            setSlideIndex(slideIndex + 1);
            swiperRef.current.swiper.slideNext();
        } else {
            setSlideIndex(0);
            swiperRef.current.swiper.slideTo(0)
        }
    };

    const slidePrev = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
            swiperRef.current.swiper.slidePrev();
        } else {
            setSlideIndex(mainData.length - 1);
            swiperRef.current.swiper.slideTo(mainData.length - 1)
        }
    };
    const swiperParams = {
        loop: true,
        autoplay: {
            delay: 3000
        },
        effect: 'creative',
        onSlideChange: handleSlideChange,
        speed: 1000
    };
    return (
        <div className='w-full'>
            <img src={bg.src} alt="" className='lxl:w-[65%] w-[1020px] lg:w-[65%] md:hidden absolute right-0 top-[-219px] z-[-1]' />
            <img src={mdbg.src} alt="" className='hidden md:flex sm:hidden absolute right-0 top-0 z-[-1]' />
            <img src={smbg.src} alt="" className='hidden w-full sm:flex absolute right-0 top-0 z-[-1]' />
            <Swiper
                {...swiperParams}
                ref={swiperRef}
                loop={true}
                modules={[EffectCreative]}
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: [0, 0, -400],
                        opacity: 0
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
            >
                {mainData.map((m) => (
                    <SwiperSlide className='flex pr-[40px] smd:flex-col-reverse smd:gap-[30px] items-center w-full justify-between  md:pl-[90px] smd:pl-[45px] pl-[370px] 2xl:pl-[220px] xl:pl-[120px]  lg:pl-[90px]' key={m.img.src}>
                        <div className='flex flex-col gap-[15px] md:gap-[10px] sm:gap-[5px] justify-start smd:mr-auto md:pt-[50px] w-[37%] 2xl:w-[45%] md:w-[37%] smd:w-[55%] sm:w-[90%] smd:p-0'>
                            <h2 className={`text-left ${m.title.includes(mainData[2].span) ? 'text-[32px]' : 'text-[40px]'} font-[500] xl:text-[30px] xl:leading-[40px] md:text-[18px] md:leading-[25px] sm:text-[16px] leading-[45px]`}>{hightLight(m.title, m.span)}</h2>
                            <p className='smd:pt-[5px] text-[20px] md:text-[12px]'>{hightLight(m.des, m?.pdes)}</p>
                            <div className='flex md:flex-col md:items-start gap-[30px] md:gap-[10px] items-center pt-[42px] md:pt-[25px]'>
                                <MyButton>
                                    {m.btn}
                                </MyButton>
                                <div>
                                    <p className='text-[20px] md:text-[12px]'>{m.info.info}</p>
                                    <span className='text-green text-[35px] md:text-[18px] font-[700] mt-[-20px]'>{m.info.main}</span>
                                </div>
                            </div>
                        </div>
                        <img src={m.img.src} loading='lazy' alt="" className='2xl:w-[65%] max-w-[620px] lxl:border-[20px] smd:ml-auto rounded-full md:w-[275px] smd:w-[215px] border-solid border-[30px] md:border-[10px] border-light' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex w-full justify-center md:justify-start md:pl-[80px] smd:pl-[30px]'>
                <div className='flex items-center gap-[30px] smd:pt-[25px]'>
                    <div className='w-[34px] h-[34px] hover:bg-green group flex items-center justify-center rounded-full cursor-pointer duration-200 .swiper-button-next' onClick={slidePrev}>
                        <Arrow className='fill-green rotate-180 group-hover:fill-light ml-[-3px] duration-200' />
                    </div>
                    <div className='flex gap-[15px] items-center'>
                        {mainData.map((_, index) => (
                            <div key={index} onClick={() => handleChangeSlide(index)} className={`w-[10px] h-[10px] rounded-full border-green duration-300 border-solid border-[2px] relative cursor-pointer ${index === slideIndex && 'w-[14px] h-[14px] border-[#DEE6EE]'}`}>
                                {/* <div className={`w-0 hidden  h-[14px] aspect-square absolute border-[2px] border-solid border-green rounded-full top-[-2px] left-[-2px] ${index === slideIndex && '!w-[14px] !flex'} `} /> */}
                            </div>
                        ))}
                    </div>
                    <div className='w-[34px] h-[34px] hover:bg-green group flex items-center justify-center rounded-full cursor-pointer duration-200' onClick={slideNext}>
                        <Arrow className='fill-green group-hover:fill-light mr-[-1px] duration-200' />
                    </div>
                </div>
            </div>
            {/* <svg className="h-[16px] w-[16px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#DEE6EE" stroke-width="4"></circle>
                <path fill="#64D370"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg> */}
        </div>
    )
}

export default MainSlider
