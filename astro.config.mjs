// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.vshop.one",
  integrations: [
    starlight({
      title: "VShop Docs",
      customCss: ["./src/tailwind.css"],
      favicon: "./src/assets/logo.svg",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/vshopapp/docs",
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
