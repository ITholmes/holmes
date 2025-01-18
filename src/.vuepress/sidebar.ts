import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "案例介绍",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "运维部署",
      icon: "book",
      prefix: "ops/",
      children: "structure",
      collapsible: true,
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});


// export default sidebar({
//   "/": [
//     "",
//     "portfolio",
//     {
//       text: "案例",
//       icon: "laptop-code",
//       prefix: "demo/",
//       link: "demo/",
//       children: "structure",
//     },
//     {
//       text: "文档",
//       icon: "book",
//       prefix: "guide/",
//       children: "structure",
//     },
//     {
//       text: "幻灯片",
//       icon: "person-chalkboard",
//       link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
//     },
//   ],
// });