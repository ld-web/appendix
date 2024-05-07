import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        fr: "Annexes",
        en: "Appendix",
      },
      defaultLocale: "fr",
      locales: {
        fr: {
          label: "Français",
        },
        en: {
          label: "English",
        },
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
    }),
  ],
});
