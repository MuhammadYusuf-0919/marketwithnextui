import { Button } from '@nextui-org/react'
import React from 'react'

interface thisProps {
    children: string,
    variant?: string,
    className?: string,
    onClick?: () => void,
    loading?: boolean
}
const MyButton = ({ children, variant, className, onClick, loading }: thisProps) => {
    return (
        <Button
            variant={variant === 'bordered' ? variant : 'solid'}
            onClick={onClick}
            isLoading={loading}
            className={`
                ${variant !== 'bordered' ? 'bg-green text-light' :
                    'border-green text-green border-[3px] !shadow-none'
                }
                ${className}
                font-[600] h-auto w-min
                rounded-lg shadow-lg
                py-[11px] px-[69px] md:py-[8px] md:px-[31px]
                text-[26px] md:text-[16px] sm:text-[14px]
    `}
        >
            {children}
        </Button>

    )
}

export default MyButton