// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.vshop.one",
  integrations: [
    starlight({
      title: "VShop Docs",
      customCss: ["./src/styles/tailwind.css", "./src/styles/headings.css"],
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
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
