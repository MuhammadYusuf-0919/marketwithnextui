'use client'

import React from 'react'
import { ShopCardProps } from './types'
import MyPagination from '@/themes/MyPagination'
import ShopCard from '@/components/GastroShop'
import GastroCardSkeleton from '@/components/GastroShop/skeleton'

function GastroShop() {
  const [page, setPage] = React.useState(1)
  const [pageData, setPageData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://656834ba9927836bd9743fab.mockapi.io/book-test/stories`
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        setPageData(await response.json())
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container pt-[180px] pb-[200px] md:pt-[80px] md:pb-[150px] smd:pt-[40px] smd:pb-[100px] grid gap-y-14 smd:gap-y-[35px]">
      <div className="grid grid-cols-2 smd:grid-cols-1 justify-between gap-x-[20px] md:gap-x-[30px] gap-y-14 smd:gap-y-8 max-w-full items-center">
        {!loading
          ? pageData
            .slice((page - 1) * 6, page * 6)
            .map((item: ShopCardProps, index: number) => (
              <ShopCard row={item} index={index} key={index} />
            ))
          : [...Array(4)].map((_, index) => <GastroCardSkeleton key={index} />)}
      </div>
      {Math.ceil(pageData.length / 6) > 1 && (
        <div className="ml-[30px] smd:ml-[20px]">
          <MyPagination
            count={Math.ceil(pageData.length / 6)}
            setPg={setPage}
            pg={page}
          />
        </div>
      )}
    </div>
  )
}
export default GastroShop
