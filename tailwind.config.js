/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      'phone': '510px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    extend: {
      colors:{
        'primary':"#52D3D8",
        'trbg':"rgb(0,0,0,0.4)",
      },
      fontFamily:{
        'poppins' :['poppins','sans-serif'],
      }

    },
  },
  plugins: [],
}

