import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { debounce } from 'lodash'
import {
  CardItemProps,
  StoreData,
  StoreItem,
} from '@/app/gastro/[storeName]/types'
import Counter from '@/components/Counter'

const CardItem: React.FC<CardItemProps> = ({ objId, row, itemIndex }) => {
  const [count, setCount] = useState<number>(row.count)

  const debouncedUpdateCountOnServer = debounce(async () => {
    try {
      const storiesUrl =
        'https://656834ba9927836bd9743fab.mockapi.io/book-test/stories'
      const response = await fetch(storiesUrl)

      if (!response.ok) throw new Error('Network response was not ok')

      const stories = await response.json()

      const updatedStories = stories.map((story: StoreData) =>
        objId === story.id && story.list[itemIndex]
          ? {
            ...story,
            list: story.list.map((item: StoreItem, j) =>
              j === itemIndex ? { ...item, count } : item
            ),
          }
          : story
      )
      console.log(row.count)
      console.log(updatedStories)
      const updateResponse = await fetch(storiesUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStories),
      })

      if (!updateResponse.ok) throw new Error('Network response was not ok')
    } catch (error) {
      console.error('Error updating count on the server:', error)
    }
  }, 1000)

  const updateCountAndDebounce = (newCount: number) => {
    setCount(newCount)
    debouncedUpdateCountOnServer()
  }

  const handleIncrement = () => updateCountAndDebounce(count + 1)

  const handleDecrement = () => {
    if (count > 0) {
      updateCountAndDebounce(count - 1)
    }
  }

  const { belki, jiry, uglevody, kcal } = row

  const composition = [
    { label: 'Белки', value: belki },
    { label: 'Жиры', value: jiry },
    { label: 'Углеводы', value: uglevody },
    { label: 'Ккал', value: kcal },
  ]

  return (
    <div className="flex flex-col gap-4">
      <img
        src={row.img}
        loading="lazy"
        alt="card_img"
        className="w-full h-72 md:h-48 smd:h-36 object-cover rounded-sm shadow-xl"
      />
      <div className="flex flex-col gap-y-2.5 px-4 mt-4">
        <h4 className="w-full text-lg md:text-sm smd:text-xs">{row.title}</h4>
        <p className="w-full text-sm md:text-xs smd:text-[10px] ">{row.desc}</p>
        <div className="flex items-center justify-between">
          {composition.map(({ label, value }, index) => (
            <div key={index} className="flex items-center">
              <span className="text-lg md:text-sm smd:text-xs font-comfortaa font-bold">
                {label}: {value}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Counter />
          <div className="text-green">26 грн / {count} шт</div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
