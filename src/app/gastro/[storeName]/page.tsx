'use client'

import React from 'react'
import Slider from '@/components/Slider'
import BackButton from '@/themes/BackButton'
import { StoreData, StoreItem } from './types'
import MyPagination from '@/themes/MyPagination'
import CardItem from '@/components/GastroShop/Store'
import { useParams, useRouter } from 'next/navigation'
import StoreSkeleton from '@/components/GastroShop/Store/skeleton'
import ShoppingCart from '@/components/CheckoutModal'
import { useCart } from '../../../../useFulls/useCart'

function StorePage() {
  const {
    cart,
    isCartOpen,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    clearCart,
  } = useCart()
  const router = useRouter()
  const { storeName } = useParams()
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(true)
  const [storeData, setStoreData] = React.useState<StoreData[] | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://656834ba9927836bd9743fab.mockapi.io/book-test/stories?storeName=${storeName}`
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const responseData = await response.json()
        setStoreData(responseData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [storeName])

  if (!storeData || loading) {
    return <StoreSkeleton />
  }

  const store = storeData[0]

  return (
    <div className="w-full mt-[-20px] smd:mt-[-10px]">
      <div
        style={{ backgroundImage: `url('${store.img}')` }}
        className={`relative z-[-2] w-full h-[460px] md:h-[320px] smd:h-[370px] pt-10 flex p-y-10 bg-cover bg-no-repeat bg-center`}
      >
        <div className="w-full h-full absolute bg-rgba(2, 2, 2, 0.70) bg-[hsla(0,0%,0%,0.6)] inset-0 inset-shadow-md bg-blur-md bg-opacity-70">
          <div className="h-full gap-y-4 grid mt-[50px] md:mt-10 smd:mt-[30px] capitalize content-start font-comfortaa max-w-[60%] md:max-w-[80%] smd:max-w-[90%] text-center mx-auto">
            <h2 className="text-2xl md:text-xl smd:text-lg text-light">
              {store.storeName}
            </h2>
            {store?.storeInfo && (
              <div className="grid gap-y-4">
                {Object.entries(store.storeInfo).map(
                  ([_, value]: [string, any], index) => (
                    <p
                      key={index}
                      className="text-lg md:text-xs smd:text-[10px] leading-[0.13.38] text-light"
                    >
                      {value}
                    </p>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container pt-10 pb-14 grid gap-y-10">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-4 cursor-pointer transition-all"
            onClick={router.back}
          >
            <BackButton />
            <p className="text-lg font-comfortaa hover:text-disabled">Назад</p>
          </div>
          <ShoppingCart />
        </div>
        <div className="grid grid-cols-2 smd:grid-cols-1 gap-x-[20px] md:gap-x-6 smd:gap-x-[30px] gap-y-16 md:gap-y-14 smd:gap-y-10">
          {store.list
            .slice((page - 1) * 6, page * 6)
            .map((item: StoreItem, index) => (
              <CardItem
                key={index}
                objId={storeData[0].id}
                itemIndex={index}
                row={item}
              />
            ))}
        </div>
        {Math.ceil(store.list.length / 6) > 1 && (
          <div className="ml-[30px] smd:ml-5">
            <MyPagination
              count={Math.ceil(store.list.length / 6)}
              setPg={setPage}
              pg={page}
            />
          </div>
        )}
      </div>
      <Slider />
    </div>
  )
}

export default StorePage
