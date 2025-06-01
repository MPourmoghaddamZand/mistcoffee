/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        myprimary: '#6F4E37',
        mysecondary: '#B67C47',
        myaccent: '#FFD98C',
        myneutral: '#FFB673',
        mybase: '#FFD98C',
        myhardbrown: "372112",
        myback: "FFD98C",

      },
      backgroundColor: {
        myprimary: '#6F4E37',
        mysecondary: '#B67C47',
        myaccent: '#FFD98C',
        myneutral: '#FFB673',
        mybase: '#FFD98C',
        myhardbrown: "372112",
        myback: "FFD98C"
      },
      fontFamily: {
        trajan: 'Trajan Pro',
      }
    },
  },
  plugins: [],
}

