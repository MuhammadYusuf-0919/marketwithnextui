import { Input } from '@nextui-org/react'
import React from 'react'

interface thisProps {
    value?: string,
    setValue?: (e: string) => void,
    label?: string,
    error?: boolean,
    disabled?: boolean,
    type?: boolean,
    placeholder?: string,
    name?: string,
    fullWidth?: boolean
}
const MyInput = ({ value, setValue = () => { }, label, error, disabled, type, placeholder, name, fullWidth }: thisProps) => {

    return (
        <div className='flex flex-col flex-1 h-[40px] sm:w-full'>
            {label && <label htmlFor={name}
                className={`text-[18px] pl-[20px] mb-[-5px] ${!error ? '' : value === '' ? 'text-[#F87676]' : 'text-green'}`}
            >
                {label}
            </label>}
            <div className='relative'>
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={disabled}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    className={fullWidth ? 'w-full h-[40px]' : ''}
                    classNames={{
                        input: [
                            'bg-[#DEE6EE]',
                            'text-[16px]',
                        ],
                        innerWrapper: [
                            'bg-[#DEE6EE]',
                            'px-[20px]',
                            'rounded-lg',
                            'w-[418px] sm:w-full',
                            'h-[40px]',
                        ],
                        inputWrapper: [
                            '!bg-[transparent]',
                            'shadow-none',
                            'p-0'
                        ]
                    }}
                    endContent={type === undefined && <span className={`w-[13px] h-[13px] ${!error && 'hidden '} ${error && value === '' ? 'bg-[#F87676]' : 'bg-green'} rounded-full`} />}
                />
                {type && error && <span className={`absolute top-0 w-[20px] h-[20px] rounded-full ${error && value === 'bg-green' ? 'bg-[#F87676] drop-shadow-red' : 'bg-green drop-shadow-green'}`} />}
            </div>
        </div>
    )
}

export default MyInput