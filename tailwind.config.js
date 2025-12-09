/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for dark mode
        dark: {
          bg: '#0f172a',     // Dark blue-gray background
          surface: '#1e293b', // Slightly lighter surface color
          text: '#f8fafc',   // Light gray text
          muted: '#94a3b8',  // Muted text color
          border: '#334155',  // Border color
          primary: '#818cf8', // Indigo-400
          'primary-dark': '#6366f1', // Indigo-500
        },
      },
      backgroundColor: {
        'dark-bg': 'var(--background)',
      },
      textColor: {
        'dark-text': 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
