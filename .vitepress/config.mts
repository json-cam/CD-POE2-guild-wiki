import { defineConfig } from "vitepress";
import { Vite } from "vitest/node";

// https://vitepress.dev/reference/site-config
export default {
  title: "Slightly Overcapped Hub",
  Vite: {
    sr: {
      noExternal: ["jsdom"],
    },
    optimizeDeps: {
      include: ["jsdom"],
    },
  },
  description:
    "Slightly Overcapped Resource Hub, for all things related to Path of Exile 2.",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "FAQ", link: "/faq/faq" },
      // { text: "Guides", link: "/guides/crafting-basics" },
    ],
    sidebar: [
      {
        text: "Resources & Tips",
        collapsed: false,
        items: [
          { text: "Performance Improvements", link: "/resources/performance" },
          { text: "Ladder Character Guide", link: "/resources/ladderChar" },
        ],
      },
      {
        text: "Leveling Guides",
        collapsed: false,
        items: [
          {
            text: "Twink Leveling Guide by Requip",
            link: "/levelingGuides/twinkGuide",
          },
        ],
      },
      {
        text: "Fundamentals",
        collapsed: false,
        items: [
          { text: "Things I Wish I Knew", link: "/fundamentals/tips" },
          { text: "Currency Guide", link: "/fundamentals/currency" },
        ],
      },
      {
        text: "Boss Tactics",
        collapsed: false,
        items: [
          { text: "Act 1 Bosses", link: "/bosses/act-1" },
          { text: "Endgame Pinnacles", link: "/bosses/pinnacles" },
        ],
      },
    ],
    socialLinks: [{ icon: "discord", link: "https://discord.gg/yourlink" }],
  },
};
