// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'JW 40th Anniversary - 嘉威聯合會計師事務所',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'A responsive promotional website for JW CPAs 40th Anniversary featuring events, history, and a gallery.' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com' },
        {
          children: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    jw: {
                      yellow: '#FFF9C7',
                      cyan: '#8BEBE8',
                      teal: '#009CBF',
                      darkTeal: '#004F6D',
                      accent: '#F9D423',
                      text: '#005F7F'
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'Microsoft JhengHei', 'sans-serif'],
                  },
                  animation: {
                    marquee: 'marquee 25s linear infinite',
                  },
                  keyframes: {
                    marquee: {
                      '0%': { transform: 'translateX(0%)' },
                      '100%': { transform: 'translateX(-100%)' },
                    }
                  }
                }
              }
            }
          `
        }
      ],
      style: [
        {
          children: `
            body {
              margin: 0;
              font-family: 'Inter', 'Microsoft JhengHei', sans-serif;
              background-color: #FFF9C7;
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `
        }
      ]
    }
  }
})