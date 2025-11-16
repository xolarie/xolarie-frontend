/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#00BCD4",
        primary2: "#19042D",
        secondary1: "#39FF14",
        secondary2: "#3D1B60",
        tertiary1: "#8CE7FF",
        tertiary2: "#D9F0FF",
        tertiary3: "#AEFFA1",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      },
      backgroundImage: {
        "header-bg": "url('/images/Rectangle_6.png')",
        "home-bg": "url('/images/Hero Bg.png')",
        "grid1_bg": "url('/images/Frame_2.png')",
        "grid4_bg": "url('/images/image_1.png')",
        "rectangle_bg1": "url('/images/Rectangle 1.png')",
        "rectangle_bg5": "url('/images/Rectangle 5.png')",
        "rectangle_bg3": "url('/images/Rectangle 3.png')"
      }
    },
  },
  plugins: [scrollbarHide],
}

