// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const { PLAUSIBLE_URL, PLAUSIBLE_DOMAIN } = process.env;

// https://astro.build/config
export default defineConfig({
  site: "https://docs.vshop.one",
  integrations: [
    starlight({
      title: "VShop Docs",
      customCss: ["./src/styles/tailwind.css", "./src/styles/custom.css"],
      favicon: "./src/assets/logo-white.svg",
      logo: {
        dark: "./src/assets/logo-white.svg",
        light: "./src/assets/logo-black.svg",
      },
      social: {
        github: "https://github.com/vshopapp/docs",
      },
      editLink: {
        baseUrl: "https://github.com/vshopapp/docs/edit/main",
      },
      head:
        PLAUSIBLE_URL && PLAUSIBLE_DOMAIN
          ? [
              {
                tag: "script",
                attrs: {
                  src: `${PLAUSIBLE_URL}/js/script.hash.outbound-links.js`,
                  "data-domain": PLAUSIBLE_DOMAIN,
                  defer: true,
                },
              },
            ]
          : undefined,
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
