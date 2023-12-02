// tailwind.config.js
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'green':'#64D370',
      'dark':'#020202',
      'light':'#F5FAFF'
    },
    screens:{
      '2xl': {'max': '1750px'},
      'xl': {'max': '1380px'},
      'lg': {'max': '1170px'},
      'md': {'max': '1000px'},
      'smd': {'max': '800px'},
      'sm': {'max': '456px'}
    },
    extend: {
      borderRadius:{
        lg:'190px',
        sm:'30px'
      },
      boxShadow:{
        'xl':'0px 0px 20px 0px rgba(86, 86, 86, 0.50)',
        'lg':'0px 0px 40px 0px rgba(86, 86, 86, 0.30)',
        'md':'0px 0px 30px 0px rgba(86, 86, 86, 0.25)',
        'sm':'0px 0px 20px 0px rgba(86, 86, 86, 0.20)'
      },
      keyframes:{
        slide:{
          '0%,100%':{transform:'translateX(0px)'},
          '50%':{transform:'translateX(4px)'},
          '80%':{transform:'translateX(10px)'},
        }
      },
      animation:{
        slide:'slide 1.2s ease infinite'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;