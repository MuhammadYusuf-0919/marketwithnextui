'use client'
import logo from '@/assets/logo.png'
import { links } from './data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
const Header = () => {
    const pathname = usePathname()
    const [lang, setLang] = useState('RU')
    const langs = ['RU', 'UA', 'En']
    const variants = [
        "solid",
        "underlined",
        "bordered",
        "light",
    ];
    return (
        <div className='flex container items-center justify-between mt-[-45px]'>
            <div className='flex items-center'>
                <div className='bg-light rounded-full w-[264px] h-[264px] shadow-lg flex items-center justify-center z-10'>
                    <img src={logo.src} alt="" />
                </div>
                <div className='flex flex-col'>
                    <div className='bg-light shadow-lg pl-[70px] pr-[40px] py-[17px] rounded-lg ml-[-37px] flex gap-[40px]'>
                        {links.map(l => (
                            <Link href={l.link} className={`${pathname === l.link && 'text-green'} text-[14px] hover:text-green hover:scale-[1.1] duration-200`}>
                                {l.name}
                            </Link>
                        ))}
                    </div>
                    <div className='flex gap-[15px] mb-[-80px]'>
                        <Tabs variant='light'
                            classNames={{
                                tabList: "gap-[15px] w-full relative rounded-none pt-[20px] pr-[30px] pb-[30px] pl-[30px]",
                                cursor: "w-[35px] h-[35px] bg-green shadow-none text-light rounded-full",
                                tab: "w-[35px] h-[35px] rounded-full px-0 shadow-lg hover:bg-green !opacity-100",
                                tabContent: "group-data-[selected=true]:text-[#F4F9FE]",
                            }}
                        >
                            {langs.map(l => (
                                <Tab key={l} title={l} onClick={() => setLang(l)} />
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className='bg-light px-[40px] py-[17px] shadow-lg rounded-lg'>
                <a href="tel:+380689494919" className='text-green font-[600]'>
                    +38(068)949-49-19</a>
            </div>
        </div>
    )
}

export default Header