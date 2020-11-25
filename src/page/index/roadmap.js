import { c, TAG } from "./drawRoadmap.js";
/**
 * 卡片x,y坐标
 * 背景颜色、宽高、标注、子树、跳转地址、字体颜色
 */
export const all = [
  {
    text: "准备开始",
    x: 400,
    y: 0,
    process: 1,
  },
  {
    text: "互联网",
    x: 400,
    y: 100,
    tag: TAG.recommand,
    link: "/how-does-the-internet-work",
    process: 2,
    children: [
      [c("互联网如何运作？", 100), c("什么是HTTP/HTTPS", 100)],
      [c("DNS原理", 700), c("CDN原理", 700)],
    ],
  },
  {
    text: "浏览器",
    x: 400,
    y: 280,
    process: 2,
    link: "/how-does-the-browser-work",
    children: [
      [
        c("浏览器如何运行？", 160, 160),
        c("浏览器差异/兼容性", 160, 160, {}, [
          c("Chrome", 0, 120),
          c("Safari", 0, 120),
          c("Firefox", 0, 120),
          c("Android Browser", 0, 120),
          c("iOS Safari", 0, 120),
        ]),
      ],
      [
        c("Headless Browser", 700, 200, { bgColor: "#CCCCCC" }),
        c("WebView", 700, 200, { bgColor: "#CCCCCC" }),
      ],
    ],
  },
  {
    text: "编辑器",
    x: 400,
    y: 460,
    link: "/editor",
    process: 1,
    children: [
      [],
      [
        c("VSCode", 700, 100, { tag: TAG.recommand }),
        c("WebStorm", 700, 100, { tag: TAG.optional }),
        c("Atom", 700, 100, { tag: TAG.optional }),
        c("Sublime", 700, 100, { tag: TAG.optional }),
      ],
    ],
  },
  {
    text: "HTML",
    x: 400,
    y: 600,
    link: "/html",
    process: 1,
    children: [
      [c("常用标签", 100), c("表单", 100)],
      [c("SEO搜索优化", { x: 700, y: 590 }, 140, { bgColor: "#CCCCCC" })],
    ],
  },
  {
    text: "CSS",
    x: 400,
    y: 720,
    link: "/css",
    process: 1,
    children: [
      [],
      [
        c("基本语法", 700, 140),
        c("布局", 700, 140, {}, [
          c("浮动float", 900, 100),
          c("定位postion", 900, 100),
          c("盒模型", 900, 100),
          c("flex", 900, 100),
          c("grid/layout", 900, 100),
        ]),
        c("响应式设计", 700, 140),
      ],
    ],
  },
  {
    text: "JavaScript",
    x: 400,
    y: 800,
    link: "/javascript",
    process: 1,
    children: [
      [
        c("基本语法", 100),
        c("DOM & BOM", 100),
        c("接口请求Ajax/Fetch", 100),
        c("ES6+", 100),
        c(
          "重点理解概念 \n变量提升、时间冒泡捕获、 \n作用域、原型等 ",
          100,
          200,
          { h: 100 }
        ),
      ],
    ],
  },
  {
    text: "版本管理工具Git",
    x: 380,
    y: 960,
    link: "/git",
    process: 1,
    children: [
      [],
      [
        c("基本命令", 600),
        c("注册github账号并学会使用", 600),
        c("搭建一个静态博客站点", 600, 200, {}, [
          c("xxx.github.io/blog", 840, 160),
        ]),
      ],
    ],
  },
  {
    text: "           Node基础 \n （暂时不用深入学习）",
    x: 440,
    y: 1100,
    w: 200,
    h: 50,
    link: "/node",
    children: [
      [
        c("包管理", 200, 100, {}, [
          c("npm", 0, 100),
          c("yarn", 0, 100),
          c("npx", 0, 100),
        ]),
        c("常用包", { x: 200, y: 1200 }, 100, {}, [
          c("文件读写fs", 0, 100),
          c("路径查找path", 0, 100),
          c("网络http", 0, 100),
        ]),
      ],
    ],
  },
  {
    text: "构建工具",
    x: 400,
    y: 1300,
    link: "/build-tools",
    children: [
      [],
      [
        c("自动化构建", { x: 600, y: 1200 }, 100, {}, [
          c("npm script", 800, 100),
          c("gulp", 800, 100, { bgColor: "#CCCCCC" }),
        ]),
        c("模块化打包", { x: 600, y: 1360 }, 100, {}, [
          c("Webpack", 800, 100, { tag: TAG.recommand }),
          c("Rollup", 800, 100, { tag: TAG.optional }),
          c("Parcel", 800, 100, { tag: TAG.optional }),
          c("Snowpack", 800, 100, { tag: TAG.optional }),
        ]),
      ],
    ],
  },
  {
    text: "CSS预处理",
    x: 300,
    y: 1400,
    process: 2,
    link: "/css-preprocessor",
    children: [
      [
        c("Sass", 100, 100, { tag: TAG.recommand }),
        c("PostCss", 100, 100, { tag: TAG.recommand }),
        c("Stylus", 100, 100, { tag: TAG.optional }),
        c("Less", 100, 100, { tag: TAG.notRecommand }),
      ],
    ],
  },
  {
    text: "JS框架",
    x: 500,
    y: 1700,
    process: 2,
    link: "/js-framework",
    children: [
      [
        c("React", { x: 200, y: 1570 }, 100, {}, [
          c("Redux", 10, 100, { tag: TAG.recommand }),
          c("Mobx", 10, 100, { tag: TAG.optional }),
          c("React-router", 10, 100, { tag: TAG.recommand }),
        ]),
        c("Vue", { x: 200, y: 1700 }, 100, {}, [
          c("VueX", 10, 100, { tag: TAG.recommand }),
          c("Vue-router", 10, 100, { tag: TAG.recommand }),
        ]),
        c("Angular", { x: 200, y: 1800 }, 100, {}, [
          c("RxJS", 10, 100),
          c("NgRx", 10, 100),
        ]),
      ],
    ],
  },
  {
    text: "CSS框架",
    x: 400,
    y: 1900,
    process: 2,
    link: "/css-framework",
    children: [
      [],
      [
        c("Antd", 700, 100, { tag: TAG.recommand }),
        c("Element UI", 700, 100, { tag: TAG.recommand }),
        c("Material UI", 700, 100, { tag: TAG.optional }),
      ],
    ],
  },
  {
    text: "CSS优化方案",
    x: 300,
    y: 2000,
    process: 3,
    link: "/css-modern",
    children: [
      [
        c("Styled Component", 10, 140, { tag: TAG.recommand }),
        c("CSS Modules", 10, 140, { tag: TAG.recommand }),
        c("Styled JSX", 10, 140, { tag: TAG.optional }),
      ],
    ],
  },
  {
    text: "测试",
    x: 400,
    y: 2200,
    process: 3,
    link: "/test-framework",
    children: [
      [
        c("单元测试", 200, 100),
        c("集成测试", 200, 100),
        c("E2E测试", 200, 100),
      ],
      [c("Jest", 700, 100), c("Enzyme", 700, 100), c("Puppeteer", 700, 100)],
    ],
  },
  {
    text: "代码质量",
    x: 400,
    y: 2400,
    link: "/code-quality",
    process: 3,
    children: [
      [
        c("类型校验", 200, 100, {}, [
          c("TypeScript", 10, 100, { tag: TAG.recommand }),
          c("Flow", 10, 100, { tag: TAG.notRecommand }),
        ]),
        c("Linter & Formatter", { x: 200, y: 2460 }, 140, {}, [
          c("ESLint", 0, 100),
          c("Prettier", 0, 100),
        ]),
      ],
      [
        c("编码规范", 600, 100, {}, [
          c("JavaScript Style Guide", 800, 180),
          c("CSS Style Guide", 800, 180),
          c("React Style Guide", 800, 180),
        ]),
      ],
    ],
  },
  {
    text: "性能",
    x: 380,
    y: 2760,
    process: 3,
    link: "/performance",
    children: [
      [
        c("性能指标", 140, 100, {}, [
          c("FP", 0, 60),
          c("FCP", 0, 60),
          c("FMP", 0, 60),
          c("TTI", 0, 60),
        ]),
        c("RAIL模型", 140, 120),
        c("Lighthouse 指标", 140, 120),
        c("DevTools", 140, 100),
      ],
      [
        c("PWA", 700, 100),
        c("Service Worker", 700, 140),
        c("骨架屏", 700, 140),
      ],
    ],
  },
  {
    text: "数据可视化",
    x: 300,
    y: 2980,
    link: "/data-view",
    children: [
      [
        c("EChart", 100, 100, { tag: TAG.recommand }),
        c("AntV", 100, 100, { tag: TAG.optional }),
        c("HighChart", 100, 100, { tag: TAG.optional }),
      ],
      [c("D3.js", 500, 100)],
    ],
  },
  {
    text: "服务端渲染SSR",
    x: 420,
    y: 3180,
    process: 3,
    link: "/ssr",
    children: [
      [],
      [c("Next.js (React)", 700, 120), c("Nuxt.js (Vue)", 700, 120)],
    ],
  },
  {
    text: "移动端应用",
    x: 360,
    y: 3340,
    link: "/mobile-app",
    children: [
      [
        c("React Native", 200, 100),
        c("Weex", 200, 100),
        c("hybrid", 200, 100),
        c("Flutter", 200, 100),
      ],
      [
        c("调试", 600, 100, {}, [
          c("Chrome DevTools", 800, 140),
          c("Android Simulator", 800, 140),
          c("iOS Simulator", 800, 140),
        ]),
      ],
    ],
  },
  {
    text: "小程序",
    x: 400,
    y: 3560,
    link: "/mini-app",
    children: [
      [
        c("原生", 200, 100, {}, [
          c("微信", 0, 100),
          c("支付宝", 0, 100),
          c("头条", 0, 100),
        ]),
      ],
      [
        c("跨端解决方案", 660, 100, {}, [
          c("Taro", 850, 100, { tag: TAG.recommand }),
          c("uni-app", 850, 100, { tag: TAG.recommand }),
          c("Chameleon", 850, 100, { tag: TAG.optional }),
        ]),
      ],
    ],
  },
  {
    text: "桌面应用",
    x: 450,
    y: 3670,
    link: "/desktop-app",
    children: [
      [c("Electron", 200, 100, { tag: TAG.recommand }), c("NW.js", 200, 100)],
    ],
  },
  {
    text: "静态站点构建",
    x: 400,
    y: 3840,
    process: 3,
    link: "/static-site",
    children: [
      [],
      [
        c("GatsbyJS", 700, 100, { tag: TAG.recommand }),
        c("VuePress", 700, 100, { tag: TAG.recommand }),
        c("Docusaurus", 700, 100, { tag: TAG.optional }),
        c("Hexo", 700, 100, { tag: TAG.notRecommand }),
      ],
    ],
  },
  {
    text: "Web Assembly",
    x: 400,
    y: 4000,
    link: "/web-assembly",
    bgColor: "#CCC",
    children: [[c("拥抱未来", 200, 100)]],
  },
  {
    text: "学习永无止境",
    x: 300,
    y: 4500,
    process: 1,
    link:"/learn-from-github"
  },
  {
    text: "翻滚吧！后浪！",
    x: 400,
    y: 4900,
    process: 1,
    link:"/afterwave"
  },
];
function getRoadmapByProcess(process) {
  return all.filter((item) => process.includes(item.process));
}
export const p1 = getRoadmapByProcess([1]);
export const p2 = getRoadmapByProcess([1, 2]);
export const p3 = getRoadmapByProcess([1, 2, 3]);
