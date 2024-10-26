import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/writetime/",

  lang: "zh-CN",
  title: "Writetime",
  description: "writetime的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
