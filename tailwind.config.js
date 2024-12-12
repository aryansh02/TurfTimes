/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode based on a class
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in src folder
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in pages folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in components folder
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in app folder
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)", // Large border radius
        md: "calc(var(--radius) - 2px)", // Medium border radius
        sm: "calc(var(--radius) - 4px)", // Small border radius
      },
      colors: {
        background: "hsl(var(--background))", // Background color
        foreground: "hsl(var(--foreground))", // Foreground color
        card: {
          DEFAULT: "hsl(var(--card))", // Default card color
          foreground: "hsl(var(--card-foreground))", // Card foreground color
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Default popover color
          foreground: "hsl(var(--popover-foreground))", // Popover foreground color
        },
        primary: {
          DEFAULT: "hsl(var(--primary))", // Primary color
          foreground: "hsl(var(--primary-foreground))", // Primary foreground color
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Secondary color
          foreground: "hsl(var(--secondary-foreground))", // Secondary foreground color
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Muted color
          foreground: "hsl(var(--muted-foreground))", // Muted foreground color
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Accent color
          foreground: "hsl(var(--accent-foreground))", // Accent foreground color
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Destructive color
          foreground: "hsl(var(--destructive-foreground))", // Destructive foreground color
        },
        border: "hsl(var(--border))", // Border color
        input: "hsl(var(--input))", // Input color
        ring: "hsl(var(--ring))", // Ring color
        chart: {
          1: "hsl(var(--chart-1))", // Chart color 1
          2: "hsl(var(--chart-2))", // Chart color 2
          3: "hsl(var(--chart-3))", // Chart color 3
          4: "hsl(var(--chart-4))", // Chart color 4
          5: "hsl(var(--chart-5))", // Chart color 5
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Animation plugin for Tailwind
  ],
};
