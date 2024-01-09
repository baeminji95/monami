/** @type {import('tailwindcss').Config} */
import { NewsList } from './src/components/objects/NewsList'

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main_visual': "url('/public/images/visual1.jpg')",
        'visual1': "url('/public/images/page_visual1.jpg')",
        'visual2': "url('/public/images/page_visual2.jpg')",
        'visual4': "url('/public/images/page_visual4.jpg')",
        'visual5': "url('/public/images/page_visual5.jpg')",
        'inquity_bg': "url('/public/images/inquirypage_bg.jpg')",
        'message_slg': "url('/public/images/message_slg_bg.png')",
        'about_map': "url('/public/images/company_info3_img1.jpg')",
        'newsMainImg': `url(${NewsList[0].img.slice(-1)})`,
        'office_img' : "url('/public/images/location_img1.jpg')",
      },
      gridTemplateColumns: {
        '3rem_1fr': 'minmax(3rem, 6rem) minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}
