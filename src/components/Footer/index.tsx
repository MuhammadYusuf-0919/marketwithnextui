
import logo from '@/assets/logo.png'
import insta from '@/assets/insta.png'
import face from '@/assets/face.png'
import sms from '@/assets/sms.png'
import tg from '@/assets/tg.png'
const Footer = () => {
    return (
        <div className='container items-center py-[41px] shadow-md mb-[100px] smd:mb-[50px] 
        flex justify-between smd:flex-col smd:gap-[27px]'>
            <div className="flex flex-col gap-[7px] smd:hidden">
                <a href="https://youtube.com" className='hover:text-green 
                hover:scale-[1.1] duration-200'>
                    Програмы питания
                </a>
                <a href="https://youtube.com" className='hover:text-green hover:scale-[1.1] duration-200'>
                    О нас
                </a>
                <a href="https://youtube.com" className='hover:text-green hover:scale-[1.1] duration-200'>Бизнес-ланчи</a>
                <a href="https://youtube.com" className='hover:text-green hover:scale-[1.1] duration-200'>
                    Gastro Shop
                </a>
                <a href="https://youtube.com" className='hover:text-green hover:scale-[1.1] duration-200'>
                    Блог
                </a>
            </div>
            <div className='flex flex-col items-center'>
                <img src={logo.src} alt="" />
                <p className='mt-[-15px]'>сервис здорового питания</p>
            </div>
            <div className='text-right flex flex-col gap-[20px] smd:gap-[10px]'>
                <p className='smd:hidden'>Условия <br />сотрудничества</p>
                <p className='smd:hidden'>FAQ</p>
                <div className='flex gap-[15px]'>
                    <a href="https://youtube.com" className='hover:scale-[1.2] duration-200'>
                        <img src={insta.src} alt="" />
                    </a>
                    <a href="https://youtube.com" className='hover:scale-[1.2] duration-200'>
                        <img src={face.src} alt="" />
                    </a>
                    <a href="https://youtube.com" className='hover:scale-[1.2] duration-200'>
                        <img src={sms.src} alt="" />
                    </a>
                    <a href="https://youtube.com" className='hover:scale-[1.2] duration-200'>
                        <img src={tg.src} alt="" />
                    </a>
                </div>
                <a href="tel:+380689494919" className='text-green font-[600] hover:scale-[1.1] duration-200'>
                    +38(068)949-49-19</a>
            </div>
        </div>
    )
}

export default Footer