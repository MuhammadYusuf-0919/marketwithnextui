import { Input } from '@nextui-org/react'
import React from 'react'

interface thisProps {
    value: string,
    setValue: (e: string) => void,
    label: string,
    error: boolean,
    disabled: boolean
}
const MyInput = ({ value, setValue, label, error, disabled }: thisProps) => {
    return (
        <div className='flex flex-col flex-1 sm:w-full'>
            <p
                className={`text-[18px] pl-[20px] mb-[-5px] ${!error ? '' : value === '' ? 'text-[#F87676]' : 'text-green'}`}
            >
                {label}
            </p>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
                classNames={{
                    input: [
                        'bg-[#DEE6EE]',
                        'text-[16px]'
                    ],
                    innerWrapper: [
                        'bg-[#DEE6EE]',
                        'px-[20px]',
                        'rounded-lg',
                        'w-[418px] sm:w-full',
                        'h-[40px]'
                    ],
                    inputWrapper: [
                        '!bg-[transparent]',
                        'shadow-none',
                        'p-0'
                    ]
                }}
                endContent={<span className={`w-[13px] h-[13px] ${!error && 'hidden '} ${error && value === '' ? 'bg-[#F87676]' : 'bg-green'} rounded-full`} />}
            />
        </div>
    )
}

export default MyInput