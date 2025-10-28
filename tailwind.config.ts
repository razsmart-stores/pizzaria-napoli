import type { Config } from 'tailwindcss';
// Se elimina la importación problemática de 'tailwindcss/types/config'
import typography from '@tailwindcss/typography';

const config: Config = {
  // Usar 'class' para permitir el cambio manual de tema claro/oscuro
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 1. Definición de Colores basada en Tokens (Variables CSS)
      colors: {
        'base': 'var(--color-base)',
        'content': 'var(--color-content)',
        'secondary': 'var(--color-secondary)',
        'accent': {
          DEFAULT: 'var(--color-accent)',
          'subtle': 'var(--color-subtle)',
        },
      },

      // 2. Definición de Sombras Avanzadas (Shadows)
      boxShadow: {
        'default': 'var(--shadow-default)',
        'hover': 'var(--shadow-hover)',
        'accent-glow': 'var(--shadow-accent-glow)',
      },

      // 3. Definición de Filtros (Glow/Brillo)
      dropShadow: {
        'glow': 'var(--filter-glow)',
      },

      // 4. Definición de Animaciones
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            filter: 'drop-shadow(0 0 5px var(--color-accent))'
          },
          '50%': {
            opacity: 0.8,
            filter: 'drop-shadow(0 0 10px var(--color-accent))'
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // 5. Tailwind CSS 5 (Simulación de funcionalidades avanzadas)
      backdropBlur: {
        'xs': '2px',
        '3xl': '32px',
        '4xl': '64px',
      },
    },
  },
  plugins: [
    // Plugins para efectos visuales avanzados que simulan las capacidades de la v5
    typography,
    // CORRECCIÓN FINAL: Tipado inline para evitar el error de módulo no encontrado
    // Usamos 'any' para evitar la necesidad de importar tipos internos y resolver el error de 'implicit any'
    // @ts-expect-error TS7031: No se puede tipar correctamente el PluginAPI sin importar un módulo interno.
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-glow': {
          'text-shadow': 'var(--filter-glow-text)',
        },
        '.bg-glass-light': {
          'background-color': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.dark:bg-glass-dark': {
          'background-color': 'rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover', 'dark'])
    }
  ],
}

export default config;
