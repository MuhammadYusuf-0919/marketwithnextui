import MyButton from '@/themes/MyButton'
import MyInput from '@/themes/MyInput'
import { Accordion, AccordionItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { questions } from './data'
import t from '@/assets/a3.png'
import f from '@/assets/a4.png'
import Link from 'next/link'

const Contact = () => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [accept, setAccept] = useState({ f: false, s: false })
    const [acc, setAcc] = useState<any>([])


    const sendRequest = async () => {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    const handleChange = (keys: any) => {
        setAcc(keys)
    }

    const submit = async () => {
        if (name && tel && accept.f && accept.s) {
            setLoading(true)
            await sendRequest()
            setLoading(false)
            setIsError(false)
            setAccept({ f: false, s: false })
            setTel('')
            setName('')
        } else {
            setIsError(true)
        }
    }

    const classNames = {
        base: "py-0 px-0 !rounded-lg w-full !bg-[#F5FAFF] duration-200 relative !border-none !shadow-sm",
        title: "font-normal text-[16px] sm:text-[10px]",
        trigger: "px-[20px] py-[10px] rounded-lg h-14 flex items-center h-[40px]",
        indicator: "text-[22px] text-[#000]  rotate-[-180deg]",
        content: "text-small sm:text-[12px] pl-[20px] text-light rounded-lg",
    }
    return (
        <div className='container flex items-start md:flex-col md:justify-center gap-[82px] pt-[150px] md:pt-[100px] align-top pb-[150px] sm:pb-[60px] relative'>
            <img src={t.src} className='absolute top-[-15%] right-0 md:hidden' alt="" />
            <img src={f.src} className='absolute left-0 bottom-[0] md:hidden' alt="" />
            <div className="w-min md:w-full flex flex-col justify-center  gap-[30px]">
                <div>
                    <h3>Оформить заказ</h3>
                    <p className='text-center px-[20px] sm:px-0'>Обсудите все детали заказа по телефону
                        или сами укажите все подробности онлайн
                    </p>
                </div>
                <div className='flex flex-col sm:w-full items-center gap-[30px]'>
                    <MyInput name='name' value={name} setValue={setName} label="Имя" error={isError} disabled={loading} />
                    <MyInput name='tel' value={tel} setValue={setTel} label='Номер телефона' error={isError} disabled={loading} />
                </div>
                <div className='flex flex-col items-start md:mx-auto w-max sm:w-full text-left gap-[15px] pl-[15px] md:pl-0'>
                    <div className='flex group cursor-pointer items-center gap-[20px]' onClick={() => setAccept({ f: !accept.f, s: accept.s })}>
                        <div className='w-[26px] flex items-center justify-center h-[26px] rounded-full bg-[#DEE6EE]'>
                            <div className={`aspect-square w-0 duration-200 group-hover:w-[6px] rounded-full bg-green ${accept.f && '!w-[12px]'} ${isError && !accept.f &&
                                '!w-[12px] !bg-[#F87676]'}`} />
                        </div>
                        <h5 className='select-none'>Тест-день! Получить скидку -30%?</h5>
                    </div>
                    <div className='flex group cursor-pointer items-center gap-[20px]' onClick={() => setAccept({ f: accept.f, s: !accept.s })}>
                        <div className='w-[26px] flex items-center justify-center h-[26px] rounded-full bg-[#DEE6EE]'>
                            <div className={`aspect-square w-0 duration-200 group-hover:w-[6px] rounded-full bg-green ${accept.s && '!w-[12px]'} ${isError && !accept.s &&
                                '!w-[12px] !bg-[#F87676]'}`} />
                        </div>
                        <h5 className='select-none'>Согласен с <Link href='/' className='text-green'>условиями сотрудничества</Link>
                        </h5>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[11px]'>
                    <MyButton
                        variant='bordered'
                        className='!px-[30px]'
                        onClick={submit}
                        loading={loading}
                    >
                        Заказ по телефону
                    </MyButton>
                    <h3 className='text-[22px]'>ИЛИ</h3>
                    <MyButton onClick={submit} loading={loading}>Онлайн заказ</MyButton>
                </div>
            </div>
            <div className='w-full'>
                <h4 className='pb-[33px]'>Часто задаваемые вопросы</h4>
                <Accordion variant="splitted" itemClasses={classNames}
                    className='gap-[23px'
                    selectedKeys={acc}
                    onSelectionChange={handleChange}
                >
                    {questions.map((q, index) => (
                        <AccordionItem
                            key={index}
                            aria-label={q.q}
                            title={q.q}
                            className={`hover:!bg-green group hover:!text-light !rounded-sm ${+acc?.currentKey === index && +acc.size && '!bg-green !text-light'}`}
                        >
                            {q.a}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div >
    )
}

export default Contact