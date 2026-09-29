export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",

  // Gera o site inteiro como arquivos estáticos (HTML/CSS/JS)
  // ao rodar "npm run generate" -> saída em .output/public
  ssr: true,
  nitro: {
    preset: "static",
  },

  app: {
    head: {
      title: "Limpa Sofá — Higienização de estofados",
      meta: [
        { name: "description", content: "Higienização profissional de sofás e estofados." },
      ],
    },
  },
});
