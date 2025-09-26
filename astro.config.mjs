import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://ld-web.github.io",
  base: "appendix",
  integrations: [
    starlight({
      title: {
        fr: "Annexes",
        en: "Appendix",
      },
      locales: {
        root: {
          label: "Français",
          lang: "fr",
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ld-web/appendix",
        },
      ],
    }),
  ],
});
