'use client'

// About.tsx
import { aboutData } from './data';
import Slider from '@/components/Slider';
import Section from '@/components/About';
import Contact from '@/components/Contact';
import React, { CSSProperties } from 'react';
import aboutPeople from '@/assets/aboutPeople.png';

function About() {
  const backgroundImageStyle: CSSProperties = {
    width: '100%',
    // height: ['700px', '277px', '115px'].join(' '), // Join the array elements into a string
    backgroundImage: `url(${aboutPeople.src})`,
  };

  return (
    <div>
      <Section data={aboutData.aboutCook} bordered={true} />
      <Section data={aboutData.aboutDelivery} reverse={true} />
      <div
        style={backgroundImageStyle}
        className="w-full h-[700px] md:h-[277px] smd:h-[115px] my-4 p-4 bg-cover bg-no-repeat bg-center"
      />
      <Section data={aboutData.aboutFood} />
      <Slider />
      <Contact />
    </div>
  );
}

export default About;
