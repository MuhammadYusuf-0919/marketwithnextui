'use client'
import logo from '@/assets/logo.png'
import { links } from './data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import phone from '@/assets/phone.png'
import menu from '@/assets/burger.png'
import Drawer from './Drawer'
import bg1 from '@/assets/blogbg1.png'
const Header = () => {
    const pathname = usePathname()
    const [lang, setLang] = useState('RU')
    const [open, setOpen] = useState(false)
    const langs = ['RU', 'UA', 'En']

    const classNames = {
        tabList: "gap-[15px] w-full relative rounded-none pt-[20px] pr-[30px] pb-[30px] pl-[30px]",
        cursor: "w-[35px] !aspect-square md:w-[20px] bg-green shadow-none text-light rounded-full",
        tab: "w-[35px] h-[35px] !aspect-square md:w-[20px] md:h-[20px] rounded-full px-0 md:text-[9px] shadow-lg hover:bg-green !opacity-100 bg-light",
        tabContent: "group-data-[selected=true]:text-[#F4F9FE]",
    }
    return (
        <div>
            <div className='flex container relative items-center justify-between mt-[-45px] md:mt-[-18px] gap-[10px]'>
                <img className='absolute md:hidden right-0 top-[45px] z-[-1] ' src={bg1.src} alt="" />
                <div className='flex items-center justify-between smd:w-full'>
                    <div className='bg-light rounded-full max-w-full w-[264px] h-[264px] md:w-[150px] md:h-[150px] 
                smd:w-[140px] smd:h-[140px] aspect-square shadow-lg flex flex-col items-center justify-center z-10'>
                        <img className='w-[130%]' src={logo.src} alt="" />
                        <p className='text-[12px] md:text-[8px] mt-[-10px] md:mt-[-5px]'>healthy ration</p>
                    </div>
                    <div className='flex flex-col smd:hidden'>
                        <div className='bg-light shadow-lg pl-[70px] pr-[40px] md:pr-[30px] py-[18.5px] md:py-[10px] rounded-lg ml-[-37px] md:ml-[-45px] flex gap-[40px] items-center'>
                            {links.map(l => (
                                <Link href={l.link} key={l.link} className={`${pathname === l.link && 'text-green'} text-[14px] md:text-[8px] hover:text-green hover:scale-[1.1] duration-200`}>
                                    {l.name}
                                </Link>
                            ))}
                        </div>
                        <div className='flex gap-[15px] mb-[-90px]'>
                            <Tabs variant='light'
                                classNames={classNames}
                            >
                                {langs.map(l => (
                                    <Tab key={l} title={l} onClick={() => setLang(l)} />
                                ))}
                            </Tabs>
                        </div>
                    </div>
                    <div className='smd:flex items-center bg-light hidden justify-between h-[34px] rounded-full shadow-lg w-full pl-[20px] ml-[-20px]'>
                        <div />
                        <a href="tel:+380689494919">
                            <div className='w-[64px] h-[64px] bg-light flex items-center justify-center rounded-full shadow-lg cursor-pointer'>
                                <img src={phone.src} alt="" />
                            </div>
                        </a>
                        <div className='w-[64px] h-[64px] bg-light flex items-center justify-center rounded-full shadow-lg cursor-pointer' onClick={() => setOpen(true)}>
                            <img src={menu.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bg-light px-[40px] md:px-[30px] md:h-[32px] flex items-center md:mb-[-20px] py-[17px] md:py-[10px] shadow-lg rounded-lg smd:hidden'>
                    <a href="tel:+380689494919" className='text-green font-[600] md:text-[10px]'>
                        +38(068)949-49-19</a>
                </div>
                <Drawer open={open} setOpen={setOpen} pathname={pathname} langs={langs} setLang={setLang} />
            </div>
            <div className={`fixed w-screen top-0 opacity-100 h-screen mb-[-10px] pointer-events-none 
            overflow-hidden z-[99] bg-opacity-0 hidden duration-[4000] inset-0 ${open ? '!pointer-events-none backdrop-blur-lg !flex opacity-100' : ''}`} />
        </div>
    )
}

export default Header