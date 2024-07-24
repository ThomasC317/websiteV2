import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-(azure-radiance|coral-red|gorse|white)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /text-(azure-radiance|coral-red|gorse|white)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      colors: {
            "border": "hsl(var(--border))",
            "input": "hsl(var(--input))",
            "ring": "hsl(var(--ring))",
            "background": "hsl(var(--background))",
            "foreground": "hsl(var(--foreground))",
            "primary": {
              "DEFAULT": "hsl(var(--primary))",
              "foreground": "hsl(var(--primary-foreground))"
            },
            "secondary": {
              "DEFAULT": "hsl(var(--secondary))",
              "foreground": "hsl(var(--secondary-foreground))"
            },
            "destructive": {
              "DEFAULT": "hsl(var(--destructive))",
              "foreground": "hsl(var(--destructive-foreground))"
            },
            "muted": {
              "DEFAULT": "hsl(var(--muted))",
              "foreground": "hsl(var(--muted-foreground))"
            },
            "accent": {
              "DEFAULT": "hsl(var(--accent))",
              "foreground": "hsl(var(--accent-foreground))"
            },
            "popover": {
              "DEFAULT": "hsl(var(--popover))",
              "foreground": "hsl(var(--popover-foreground))"
            },
            "card": {
              "DEFAULT": "hsl(var(--card))",
              "foreground": "hsl(var(--card-foreground))"
            },
            'azure-radiance': {
          '50': '#eff5ff',
          '100': '#dbe8fe',
          '200': '#bfd7fe',
          '300': '#93bbfd',
          '400': '#609afa',
          '500': '#3b82f6',
          '600': '#2570eb',
          '700': '#1d64d8',
          '800': '#1e55af',
          '900': '#1e478a',
          '950': '#172e54',
        },
        'coral-red': {
          '50': '#fff1f1',
          '100': '#ffdfe0',
          '200': '#ffc5c7',
          '300': '#ff9da0',
          '400': '#ff6468',
          '500': '#ff4045',
          '600': '#ed151b',
          '700': '#c80d12',
          '800': '#a50f13',
          '900': '#881417',
          '950': '#4b0406',
      },
      'gorse': {
        '50': '#fefee8',
        '100': '#ffffc2',
        '200': '#fffb89',
        '300': '#fff140',
        '400': '#fde212',
        '500': '#ecc806',
        '600': '#cc9c02',
        '700': '#a37005',
        '800': '#86570d',
        '900': '#724711',
        '950': '#432505',
    },
'white': {
        '50': '#fdfdfd',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    }
          },
      borderRadius: {
            "lg": "var(--radius)",
            "md": "calc(var(--radius) - 2px)",
            "sm": "calc(var(--radius) - 4px)"
          },
      keyframes: {
            "accordion-down": {
              "from": {
                "height": "0"
              },
              "to": {
                "height": "var(--radix-accordion-content-height)"
              }
            },
            "accordion-up": {
              "from": {
                "height": "var(--radix-accordion-content-height)"
              },
              "to": {
                "height": "0"
              }
            }
          }
},  variants: {
  extend: {
    backgroundColor: ['hover'],
    textColor: ['hover'],
  },
},

  plugins: [require("tailwindcss-animate"), require('@tailwindcss/line-clamp')]
};
export default config;
