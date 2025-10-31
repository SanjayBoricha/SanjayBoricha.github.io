// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/tailwind.css"],
  ssr: true,
  app: {
    head: {
      title: "Sanjay Boricha - Full Stack Developer - Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          id: "description",
          name: "description",
          content:
            "Hello, my name is Sanjay Boricha, and I work as a Full Stack Developer.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-8",
      script: [
        {
          src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
          defer: true,
        },
        {
          id: "gtm-script1",
          src: "https://www.googletagmanager.com/gtag/js?id=G-Q8P4R9MERP",
          async: true,
          defer: true,
        },
        {
          id: "gtm-script2",
          innerHTML: `
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', 'G-Q8P4R9MERP')
        `,
          type: "text/javascript",
        },
      ],
    },
  },
});
