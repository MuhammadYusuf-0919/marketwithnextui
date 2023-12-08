import { Card, Skeleton } from '@nextui-org/react'

const StoreItemSkeleton = () => {
  return (
    <div className="rounded-xl">
      <Skeleton className="w-full h-72 md:h-48 smd:h-36 rounded-sm shadow-xl" />
      <div className="flex flex-col gap-y-2.5 p-4 mt-4">
        <Skeleton className="w-1/3 h-4 rounded-lg" />
        <Skeleton className="w-2/3 h-5 rounded-xl" />
        <div className="flex items-center justify-between">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center">
              <Skeleton className="h-5 w-20 rounded-xl" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-4 rounded-lg" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
          <div className="text-green flex items-center">
            <Skeleton className="h-4 w-12 rounded-lg" /> /{' '}
            <Skeleton className="h-4 w-12 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

const StoreSkeleton = () => {
  return (
    <div className="w-full transition-all relative z-[-2]">
      <Card
        radius="none"
        className="w-full h-[460px] md:h-[320px] smd:h-[370px] gap-y-6 md:gap-y-4 mt-[-20px] smd:mt-[10px] p-4 ease-linear items-center justify-center"
      >
        <Skeleton className="w-2/5 smd:w-3/5 h-6 rounded-lg md:rounded-xl smd:rounded-sm" />
        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            className="w-3/5 smd:w-4/5 h-10 rounded-lg md:rounded-2xl smd:rounded-sm"
          />
        ))}
      </Card>
      <div className="container justify-between grid grid-cols-2 smd:grid-cols-1 gap-6 pt-10 pb-14 md:gap-6">
        {[...Array(6)].map((_, index) => (
          <StoreItemSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default StoreSkeleton
