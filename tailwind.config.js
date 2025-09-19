module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueblue5-157bf3": "var(--blueblue5-157bf3)",
        "blueblue6-0c63ca": "var(--blueblue6-0c63ca)",
        "blueblue7-075093": "var(--blueblue7-075093)",
        "blueblue8-033a6d": "var(--blueblue8-033a6d)",
        "blueblue9-022240": "var(--blueblue9-022240)",
        "graygray1-f2f4f8": "var(--graygray1-f2f4f8)",
        "graygray2-e9ebef": "var(--graygray2-e9ebef)",
        "graygray6-767680": "var(--graygray6-767680)",
        "graygray7-6a6a71": "var(--graygray7-6a6a71)",
        "graygray8-353539": "var(--graygray8-353539)",
        "graygray9-18181a": "var(--graygray9-18181a)",
        "greengreen2-cfecca": "var(--greengreen2-cfecca)",
        "greengreen4-85dc74": "var(--greengreen4-85dc74)",
        "greengreen5-46a037": "var(--greengreen5-46a037)",
        "greengreen6-1d890b": "var(--greengreen6-1d890b)",
        "greengreen8-15570a": "var(--greengreen8-15570a)",
        "orangeorange5-e5631a": "var(--orangeorange5-e5631a)",
        "redred5-df3a3a": "var(--redred5-df3a3a)",
        "redred6-d10909": "var(--redred6-d10909)",
        "redred7-168703": "var(--redred7-168703)",
        "white-faf": "var(--white-faf)",
        "yellowyellow2-f3e6b9": "var(--yellowyellow2-f3e6b9)",
        "yellowyellow3-f3de93": "var(--yellowyellow3-f3de93)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "m3-label-medium": "var(--m3-label-medium-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "shadow-1": "var(--shadow-1)",
        "shadow-2": "var(--shadow-2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
