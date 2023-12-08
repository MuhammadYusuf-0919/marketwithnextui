import React from 'react'
import { StaticImageData } from 'next/image'
import { AboutSection } from '@/app/about/types'
import { hightLight } from '../../../useFulls/highlight'

const Section: React.FC<AboutSection> = ({ data, reverse, bordered }) => {
  const { imageSrc, textContent } = data

  // Get the URL from StaticImageData if it is provided
  const imageUrl = typeof imageSrc === 'string' ? imageSrc : imageSrc.src

  return (
    <div
      className={`container mx-auto flex smd:flex-col-reverse ${reverse && 'flex-row-reverse'
        } items-start pb-6 gap-y-10 justify-between`}
    >
      <div className="text-white w-6/12 smd:w-full grid gap-y-10 md:gap-y-5 smd:gap-y-2.5 pt-10 smd:p-0">
        <h2 className="text-start text-[32px] md:text-[17px] tracking-[0.8px] md:tracking-[0.425px] smd:text-sm smd:tracking-[0.35px] font-bold m-0 font-comforta">
          {hightLight(textContent.title, textContent.span)}
        </h2>
        <div className="grid gap-y-5 md:gap-y-3.5 smd:gap-y-2.5 text-xl md:text-base smd:text-[10px] font-light font-comforta">
          <p>{textContent.paragraph1}</p>
          <p>{textContent.paragraph2}</p>
        </div>
        <p
          className={`${textContent?.additionalText ? 'flex' : 'hidden'
            } font-bold text-xl md:text-base smd:text-[10px]`}
        >
          {textContent?.additionalText}
        </p>
        <p className="font-bold text-xl md:text-base smd:text-sm">
          {textContent.moreAbout}
        </p>
        <div
          className={`${textContent?.socials ? 'flex' : 'hidden'
            } items-center ml-6 gap-[15px]`}
        >
          {textContent.socials &&
            textContent.socials.icons.map(
              (icon: StaticImageData, index: number) => (
                <a
                  key={index}
                  href="https://youtube.com"
                  className="hover:scale-[1.2] duration-200"
                >
                  <img src={icon.src} alt={`social-icon-${index}`} />
                </a>
              )
            )}
          <p>- Я в социальных сетях</p>
        </div>
      </div>
      <div className="h-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt="about_cook_img"
          className={`max-w-lg md:max-w-md smd:max-w-sm ${reverse
              ? 'ml-[-39%] md:ml-[-5%] smd:ml-[-5.5%]'
              : 'mr-[-39%] md:mr-[-4.5%] smd:mr-[5%]'
            } ${bordered
              ? 'rounded-full border-solid border-[30px] md:border-[10px] xl:border-[20px] smd:mr-0 smd:items-center'
              : 'border-0'
            } ${reverse ? 'left-0' : 'right-0'} 
           border-light ml-auto mt-[-60px] md:mt-[-40px] smd:mt-0`}
        />
      </div>
    </div>
  )
}

export default Section
