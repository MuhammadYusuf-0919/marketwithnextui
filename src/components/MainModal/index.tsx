import Close from '@/assets/close';
import MyButton from '@/themes/MyButton';
import MyInput from '@/themes/MyInput';
import { Modal, ModalContent, ModalHeader, Select, SelectItem } from '@nextui-org/react'
import Link from 'next/link';
import { useState } from 'react';

interface thisProps {
    open: boolean
}
const MainModal = ({ open }: thisProps) => {
    const [error, setError] = useState(false)
    const [f, setF] = useState(false)
    const [accept, setAccept] = useState({ f: false, s: false })
    const [data, setData] = useState()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setError(true)
        console.log(e);
    }
    return (
        <Modal backdrop='blur' hideCloseButton size='full' className='items-start bg-[transparent] top-[20%] shadow-none' isOpen={open} placement='top' closeButton={false}>
            <ModalContent className='container pt-[40px]'>
                <ModalHeader className='flex justify-between items-center w-full px-0'>
                    <MyButton className='bg-[#FC3766] drop-shadow-red !text-[16px] !px-[20px] !py-[9px]'>Заполните все поля правильно</MyButton>
                    <div>
                        <Close className='fill-light cursor-pointer' />
                    </div>
                </ModalHeader>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[20px]'>
                    <div className='w-full flex justify-between gap-[20px]'>
                        <div className='w-full flex flex-col gap-[5px]'>
                            <MyInput name='name' placeholder='Name' fullWidth={true} type error={error} />
                            <MyInput name='tel' placeholder='Phone number' fullWidth={true} type error={error} />
                            <MyInput name='email' placeholder='Электронный адрес' fullWidth={true} type error={error} />
                            <Select className='!rounded-lg max-w-full' name='additional' radius='full' size='sm' placeholder='Программы питания'>
                                <SelectItem key={'one'} >
                                    one
                                </SelectItem>
                                <SelectItem key={'two'} >
                                    two
                                </SelectItem>
                            </Select>
                            <Select className='!rounded-lg max-w-full' name='important' radius='full' size='sm' placeholder='Специальные программы'>
                                <SelectItem key={'one'} >
                                    one
                                </SelectItem>
                                <SelectItem key={'two'} >
                                    two
                                </SelectItem>
                            </Select>
                            <div className='flex max-w-[580px]'>
                                <MyInput name='street' placeholder='Улица' />
                                <div className='flex !w-[240px]'>
                                    <MyInput name='home' fullWidth placeholder='Дом' />
                                    <MyInput name='number' fullWidth placeholder='Этаж' />
                                </div>
                            </div>
                            <div className='flex w-full max-w-[580px]'>
                                <MyInput name='number' fullWidth placeholder='Квартира' />
                                <MyInput name='number' fullWidth placeholder='Парадная' />
                                <MyInput name='number' fullWidth placeholder='Домофон' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-[20px]'>
                            <Select className='!rounded-lg ' name='important' radius='full' size='sm' placeholder='Время доставки'>
                                <SelectItem key={'one'} >
                                    one
                                </SelectItem>
                                <SelectItem key={'two'} >
                                    two
                                </SelectItem>
                            </Select>
                            <MyInput placeholder='Количество дней заказа' />
                            <Select className='!rounded-lg ' name='important' radius='full' size='sm' placeholder='Способ оплаты '>
                                <SelectItem key={'one'} >
                                    one
                                </SelectItem>
                                <SelectItem key={'two'} >
                                    two
                                </SelectItem>
                            </Select>
                            <Select className='!rounded-lg ' name='important' radius='full' size='sm' placeholder='Мне нужны приборы'>
                                <SelectItem key={'one'} >
                                    one
                                </SelectItem>
                                <SelectItem key={'two'} >
                                    two
                                </SelectItem>
                            </Select>
                            <MyInput placeholder='Пожелания' />
                            <Select className='!rounded-lg ' name='important' radius='full' size='sm' placeholder='Как с Вами связаться?'>
                                <SelectItem key={'one'} >
                                    one
                                </SelectItem>
                                <SelectItem key={'two'} >
                                    two
                                </SelectItem>
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col text-light items-start md:mx-auto w-max sm:w-full text-left gap-[15px] pl-[15px] md:pl-0'>
                        <div className='flex group cursor-pointer items-center gap-[20px]' onClick={() => setAccept({ f: !accept.f, s: accept.s })}>
                            <div className='w-[26px] flex items-center justify-center h-[26px] rounded-full bg-[#DEE6EE]'>
                                <div className={`aspect-square w-0 duration-200 group-hover:w-[6px] rounded-full bg-green ${accept.f && '!w-[12px]'} ${error && !accept.f &&
                                    '!w-[12px] !bg-[#F87676]'}`} />
                            </div>
                            <h5 className='select-none'>Тест-день! Получить скидку -30%?</h5>
                        </div>
                        <div className='flex group cursor-pointer items-center gap-[20px]' onClick={() => setAccept({ f: accept.f, s: !accept.s })}>
                            <div className='w-[26px] flex items-center justify-center h-[26px] rounded-full bg-[#DEE6EE]'>
                                <div className={`aspect-square w-0 duration-200 group-hover:w-[6px] rounded-full bg-green ${accept.s && '!w-[12px]'} ${error && !accept.s &&
                                    '!w-[12px] !bg-[#F87676]'}`} />
                            </div>
                            <h5 className='select-none'>Согласен с <Link href='/' className='text-green'>условиями сотрудничества</Link>
                            </h5>
                        </div>
                    </div>
                    <MyButton className='drop-shadow-green ml-[20px] smd:m-0' onClick={handleSubmit}>Заказать</MyButton>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default MainModal