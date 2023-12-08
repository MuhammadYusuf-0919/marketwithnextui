import { Skeleton } from '@nextui-org/react'

const GastroCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <Skeleton className="w-full h-72 md:h-48 smd:h-[140px] rounded-2xl shadow-xl" />
      <div className="px-2 w-full flex items-center justify-between">
        <Skeleton className="w-2/4 h-6 rounded-lg" />
        <Skeleton className="w-1/4 h-6 rounded-lg" />
      </div>
    </div>
  )
}

export default GastroCardSkeleton
