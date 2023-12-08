import React from 'react'
import Link from 'next/link'
import Arrow from '@/assets/arrow'
import { Button } from '@nextui-org/react'
import { ShopCardProps } from '@/app/gastro/types'


const ShopCard: React.FC<{ row: ShopCardProps; index: number }> = ({
  row
}) => (
  <div className="flex flex-col gap-[30px] md:gap-[20px]">
    <div className="rounded-sm">
      <div className="relative overflow-hidden rounded-sm shadow-xl">
        <img
          src={row.img}
          loading="lazy"
          alt="card-image"
          className={`w-full h-72 md:h-48 smd:h-[140px] object-cover sm:w-full ${row.soon ? 'filter blur-[3px]' : ''
            }`}
        />
        {row.soon && (
          <span className="w-[230px] py-3 md:py-2 smd:py-1 bg-green text-light absolute top-[30px] right-[-60px] md:top-[25px] md:right-[-70px] smd:top-[20px] smd:right-[-85px] rotate-45 flex justify-center items-center drop-shadow-sm font-comfortaa font-bold text-2xl md:text-base smd:text-xs">
            Скоро!
          </span>
        )}
      </div>
    </div>

    <div className="px-2 w-full flex justify-between items-center text-[20px] text-[16px] smd:text-[12px] capitalize">
      <p>{row.storeName}</p>
      {row.soon ? (
        <Button
          size="sm"
          variant="bordered"
          isDisabled={row.soon}
          className="border-disabled group text-disabled rounded-lg text-[14px] md:tracking-tighter px-[20px] py-[8px] md:px-[16px] md:py-[6px] smd:px-[10px] smd:py-[4px] smd:gap-[6px] gap-2.5"
        >
          Ассортимент
          <Arrow className="fill-disabled w-4 smd:w-2" />
        </Button>
      ) : (
        <Link href={`/gastro/${row.storeName.toLowerCase().replace(/\s+/g, '-')}`}>
          <Button
            size="sm"
            variant="bordered"
            isDisabled={row.soon}
            className="border-green group hover:text-light hover:bg-green text-green rounded-lg text-[14px] md:text-sm md:tracking-tighter px-[20px] py-[8px] md:px-[16px] md:py-[6px] smd:px-[10px] smd:py-[4px] gap-2.5 smd:gap-[6px]"
          >
            Ассортимент
            <Arrow
              className={`${!row.soon && 'animate-slide'
                } w-4 smd:w-2 fill-green group-hover:fill-light duration-100`}
            />
          </Button>
        </Link>
      )}
    </div>
  </div>
)

export default ShopCard
