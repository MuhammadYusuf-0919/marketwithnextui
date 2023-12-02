import Arrow from '@/assets/arrow'
import { Button } from '@nextui-org/react'
import React from 'react'

const BackButton = ({ click, className }: { click?: () => void, className?: string }) => {

    return (
        <Button onClick={click} className={`w-[30px] h-[30px] min-w-0 p-0 rounded-full bg-[#DEE6EE] group hover:bg-green flex items-center justify-center ${className}`}>
            <Arrow className='fill-dark group-hover:fill-light rotate-180' />
        </Button>
    )
}

export default BackButton