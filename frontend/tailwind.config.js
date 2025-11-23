/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Necesarios para HeadlessUI Switch
    'translate-x-0',
    'translate-x-5',
    'bg-blue-500',
    'bg-gray-200',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
