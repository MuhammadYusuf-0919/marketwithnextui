// types.ts
import { StaticImageData } from 'next/image';

interface Social {
    text: string;
    icons: StaticImageData[];
}

interface TextContent {
    title: string;
    span?: string;
    socials?: Social;
    moreAbout: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3?: string;
    paragraph4?: string;
    additionalText?: string;
}

export interface AboutSection {
    reverse?: boolean;
    bordered?: boolean;
    data: {
        textContent: TextContent;
        imageSrc: StaticImageData;
    };
}

export interface AboutData {
    aboutCook: AboutSection;
    aboutFood: AboutSection;
    aboutDelivery: AboutSection;
}
