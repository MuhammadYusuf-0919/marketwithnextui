import { Tab, Tabs } from '@nextui-org/react'
import React, { useState } from 'react'
import { des, foods, weeks } from './data'
import MyButton from '@/themes/MyButton'

const FoodTabs = () => {
  const [f, setF] = useState<string>('')
  const [food, setFood] = useState<string>(foods[0].title)
  const [w, setW] = useState<string>(weeks[0])


  const classNames = {
    tabList: "container flex smd:flex-col gap-[20px] py-[40px] w-full relative rounded-none",
    cursor: "bg-green shadow-lg text-light rounded-full px-[30px]",
    tab: "rounded-lg px-0 shadow-none h-[62px] md:h-[36px] !opacity-100 bg-[#DEE6EE] !text-dark",
    tabContent: "group-data-[selected=true]:!text-light"
  }
  const classNames2 = {
    tabList: "w-full flex justify-between smd:grid smd:grid-cols-3 smd:gap-y-[18px] pb-[30px] w-full relative rounded-none",
    cursor: "text-light rounded-full px-[30px] shadow-none bg-[transparent]",
    tab: "rounded-lg px-0 shadow-none w-max smd:w-full !opacity-100 text-dark",
    tabContent: "group-data-[selected=true]:!text-green"
  }
  const classNames3 = {
    tabList: "w-full flex py-[16px] px-[50px] md:py-[12px] md:px-[30px] justify-between rounded-sm shadow-lg",
    cursor: "text-light rounded-full px-[30px] shadow-none bg-[transparent]",
    tab: "rounded-lg px-0 shadow-none w-max smd:w-full !opacity-100 text-dark",
    tabContent: "group-data-[selected=true]:!text-green"
  }
  return (
    <div className='pt-[80px] md:pt-[50px] smd:pt-[30px]'>
      <Tabs
        variant='light'
        size='lg'
        selectedKey={f}
        onSelectionChange={(e) => setF(e.toString())}
        classNames={classNames}
        className='w-full'
      >
        <Tab
          key={'1'}
          className='group'
          title={
            <p
              className={`${f !== '1' && 'group-hover:text-green'} !shadow-none !w-[100%] text-[25px] md:text-[14px]`}
            >Программы питания</p>
          }
        />
        <Tab
          className='group'
          key={'2'}
          title={
            <p className={`${f !== '2' && 'group-hover:text-green'} !shadow-none !w-[100%] text-[25px] md:text-[14px]`}
            >
              Специальные программы
            </p>
          } />
      </Tabs>
      <div className='container pt-[30px] md:pt-[10px] smd:pt-0'>
        <Tabs
          variant='light'
          selectedKey={food}
          onSelectionChange={(e) => setFood(e.toString())}
          classNames={classNames2}
          className='w-full flex justify-between'
        >
          {foods.map(fo => (
            <Tab key={fo.title} title={
              <div className={`flex flex-col gap-[7px] md:gap-0 justify-start items-center text-[#000] ${food === fo.title && '!text-green'}`}>
                <h6 className='text-[18px] md:text-[10px] smd:text-[12px] uppercase pt-[5px]'>{f + ' ' + fo.title}</h6>
                <span className='text-[14px] md:text-[8px] smd:text-[10px] smd:mt-[-2px]'>{fo.kal}</span>
              </div>
            }>
              <div className='flex smd:flex-col gap-[20px] w-full'>
                <div className='w-max smd:w-full flex flex-col items-center gap-[40px] md:gap-[30px]'>
                  <div className='bg-green w-[380px] md:w-[222px] smd:w-full flex flex-col gap-[20px] md:gap-[11px] shadow-lg py-[30px] px-[50px] md:py-[18px] md:px-[30px] rounded-sm text-light'>
                    <div className='flex items-center gap-[12px]'>
                      <h5 className='text-[25px] md:text-[14px]'>{f + fo.title}</h5>
                      <p className='text-[18px] md:text-[10px]'>{fo.kal}</p>
                    </div>
                    <p className='leading-normal md:text-[10px]'>{des.des}</p>
                  </div>

                  <div className='flex flex-col gap-[15px] md:gap-[8px] w-full px-[20px] md:px-[10px]'>
                    {des.plan.map(p => (
                      <div className='flex justify-between items-center'>
                        <p className='w-full md:text-[8px] smd:text-[10px]'>{p.day}</p>
                        <div className='flex justify-between w-full text-[15px]'>
                          <p className={`text-[15px] md:text-[8px] smd:text-[10px] ${!p.old.includes('%') && 'line-through'}`}>{p.old}</p>
                          <p className='text-[15px] md:text-[8px] smd:text-[10px]'>{p.new}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <MyButton>Заказать</MyButton>
                </div>
                <div className='w-full'>

                  <Tabs
                    variant='light'
                    classNames={classNames3}
                    selectedKey={w}
                    className='w-full flex justify-between'
                    onSelectionChange={(e) => setW(e.toString())}
                  >
                    {weeks.map((we, index) => (
                      <Tab key={we}
                        title={
                          <h5
                            className={`text-dark text-[25px] md:text-[12px] smd:text-[18px] uppercase ${w === we && 'text-green'}`}>
                            {we}
                          </h5>
                        }>
                        <div className='flex flex-col mt-[10px] md:mt-0 gap-[50px] sm:gap-[25px] w-full shadow-lg px-[50px] py-[30px] md:py-[12px] md:px-[30px] md:!p-[20px] rounded-sm'>
                          {des.days.map(d => (
                            <div className='flex sm:flex-col gap-[65px] sm:gap-[10px] justify-between w-full'>
                              <div className='flex flex-col sm:flex-row sm:items-center sm:gap-[20px] w-[200px] 
                              2xl:w-[160px] md:w-[140px] smd:w-[60px]'>
                                <h5 className='whitespace-nowrap text-[20px] xl:text-[18px] md:text-[15px]'>{index + d.when}</h5>
                                <p className='whitespace-nowrap text-[14px] xl:text-[13px] md:text-[12px]'>{d.time}</p>
                              </div>
                              <div className='flex justify-between gap-[12px] w-full'>
                                <div>
                                  {d.des.map(d => (
                                    <p className='text-[16px] xl:text-[14px] md:text-[12px]'>- {d}</p>
                                  ))}
                                </div>
                                <div>
                                  {
                                    d.much.map(d => (
                                      <p className='md:text-[12px] xl:text-[14px]'>{d}</p>
                                    ))
                                  }
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <MyButton className='mt-[30px] mb-[20px] hidden smd:flex mx-auto'>Заказать</MyButton>
                      </Tab>
                    ))}
                  </Tabs>

                </div>
              </div>
            </Tab>
          ))
          }
        </Tabs >
      </div >
    </div >
  )
}

export default FoodTabs