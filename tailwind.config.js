/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0f',
        paper: '#f5f3ef',
        accent: '#e8ff47',
        dim: '#1c1c24',
        muted: '#5a5a72',
        border: '#2a2a38',
      }
    }
  },
  plugins: [],
}
