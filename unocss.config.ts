import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        xxs: '0.5rem',
      },
      colors: {
        // primary: '#0fd64f',
        // primaryAccent: '#f8ef42',
        primary: '#0181D4',
        primaryAccent: '#FDEC06',
        text: '#50514f',
        ringFade: '#615f5f2e',
        whiteFade: '#fffcff',
        grey: {
          trans: '#6a6a6a8c',
          text: '#646D82',
          lightText: '#B4B4B4',
          bg: '#F7F7F7',
          light: '#B2B2B2',
          underline: '#E9E9F0',
          bg2: '#F5F5F5',
          table: '#CBD1D9',
        },
        green: {
          success: '#0181D4',
          suc: '#22CE8B',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        helv: ['Helvetica', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        toggle: '0 6px 16px -2px rgba(24, 151, 233, .5)',
      },
    },
    variants: {
      extend: {
        borderColor: ['active'],
      },
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
