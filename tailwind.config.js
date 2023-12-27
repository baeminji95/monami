/** @type {import('tailwindcss').Config} */
import { NewsList } from './src/components/objects/NewsList'

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'visual1': "url('/public/img/page_visual1.jpg')",
        'visual2': "url('/public/img/page_visual2.jpg')",
        'visual4': "url('/public/img/page_visual4.jpg')",
        'visual5': "url('/public/img/page_visual5.jpg')",
        'inquity_bg': "url('/public/img/inquirypage_bg.jpg')",
        'message_slg': "url('/public/img/message_slg_bg.png')",
        'about_map': "url('/public/img/company_info3_img1.jpg')",
        'newsMainImg': `url(${NewsList[0].img.slice(-1)})`,
      }
    },
  },
  plugins: [],
}
