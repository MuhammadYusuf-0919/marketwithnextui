import React from 'react'
import { links } from '../data'
import Link from 'next/link'
import { Tab, Tabs } from '@nextui-org/react'
import Close from '@/assets/close'

interface thisProps {
    open: boolean,
    setOpen: (val: boolean) => void,
    pathname: string,
    langs: any[],
    setLang: (val: string) => void,
}
const Drawer = ({ open, setOpen, pathname, langs, setLang }: thisProps) => {
    const classNames = {
        tabList: "gap-[15px] w-full relative flex-col rounded-none p-[40px] mr-[-40px] mt-[-20px]",
        cursor: "w-[35px] aspect-square bg-green shadow-none text-light rounded-full",
        tab: "w-[35px] aspect-square  rounded-full px-0 shadow-lg hover:bg-green !opacity-100",
        tabContent: "group-data-[selected=true]:text-[#F4F9FE]",
    }
    return (
        <div className={`fixed w-[100%] z-[999] duration-400 ml-[-20px] h-[auto] flex ${open ? 'top-0' : 'top-[-100%]'} `}>
            <div className='flex flex-col shadow-lg gap-[30px] items-center relative bg-light rounded-b-[50px] z-50 p-[20px] justify-between w-full'>
                <div className='flex w-full justify-between items-start'>
                    <div className='flex flex-col gap-[20px] pl-[10px]'>
                        {links.map((l) => (
                            <Link href={l.link} key={l.link} className={`${pathname === l.link && 'text-green'} text-[16px] hover:text-green`} onClick={() => setOpen(false)}>
                                {l.name}
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='group hover:bg-green z-50 duration-200 w-[64px] h-[64px] shadow-lg flex items-center justify-center rounded-full cursor-pointer' onClick={() => setOpen(false)}>
                            <Close className='fill-dark duration-200 group-hover:fill-light' />
                        </div>
                        <div className='flex flex-col gap-[15px] mb-[-90px]'>
                            <Tabs variant='light'
                                classNames={classNames}
                            >
                                {langs.map(l => (
                                    <Tab key={l} title={l} onClick={() => setLang(l)} />
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
                <a href="tel:+380689494919" className='font-[600] text-[18px] text-light text-center py-[12px] bg-green rounded-lg w-full shadow-lg'>
                    +38(068)949-49-19
                </a>
            </div>
        </div >
    )
}

export default Drawer