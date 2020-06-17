import React, { useEffect } from 'react';
import { fabric } from 'fabric'
import GitHubButton from 'react-github-btn'

import './App.css';
import LOGO from './logo.png'
const CARD_CONFIG = {
  width: 140,
  height: 40,
  // bgColor: ['#ff6f3c', '#ff9a3c', '#ffc93c'],
  bgColor: ['#ea5455', '#f07b3f', '#ffd460'],
  subCardMargin: 10,
  lineColor: '#3A7AF2',
  textColor: '#444',
  strokeColor: '#3A7AF2'
}


function c(text, x, w = 200, h, children) {
  let temp = {
    text,
    w,
    h,
    children
  }
  typeof x === 'number' ? temp.x = x : temp = { ...temp, ...x }
  return temp
}

function makeTextSquare(x, y, val, level = 1, w = CARD_CONFIG.width, h = CARD_CONFIG.height) {
  const square = new fabric.Rect({
    fill: CARD_CONFIG.bgColor[level - 1],
    // stroke: CARD_CONFIG.strokeColor,
    // strokeWidth: 2,
    width: w,
    height: h,
    originX: 'center',
    originY: 'center',
    rx: 4,
    ry: 4,
    shadow: 'rgba(0,0,0,0.3) 2px 2px 4px'
  });
  const text = new fabric.Text(val, {
    fontSize: 15,
    fill: CARD_CONFIG.textColor,
    originX: 'center',
    originY: 'center',
    fontFamily: " Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif",
    fontWeight: '500'
  })
  const group = new fabric.Group([square, text], {
    left: x,
    top: y,
  });

  return group
}
let lineDirection = 'left'
function makeLine(c1, c2) {
  const line = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke: CARD_CONFIG.lineColor, strokeWidth: 3, objectCaching: false });
  line.path[0][1] = c1.left + CARD_CONFIG.width / 2;
  line.path[0][2] = c1.top + CARD_CONFIG.height / 2;

  line.path[1][1] = lineDirection === 'left' ? c1.left - CARD_CONFIG.width / 3 : c1.left + CARD_CONFIG.width;
  lineDirection = lineDirection === 'left' ? 'right' : 'left'
  line.path[1][2] = c1.top + (c2.top - c1.top) / 2;

  line.path[1][3] = c2.left + CARD_CONFIG.width / 2;
  line.path[1][4] = c2.top + CARD_CONFIG.height / 2;
  line.globalCompositeOperation = "destination-over"
  return line
}

function makeSubLine(c1, c2) {
  const line = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke: CARD_CONFIG.lineColor, strokeWidth: 2, objectCaching: false });
  line.strokeDashArray = [5, 5]
  line.path[0][1] = c1.left + c1.width;
  line.path[0][2] = c1.top + c1.height / 2;

  if (c1.left > c2.left) {
    line.path[1][1] = c2.left - (c1.left - c2.left) / 2;
    line.path[1][2] = c1.top + (c2.top - c1.top) / 2;
  } else if (c1.left < c2.left) {
    line.path[1][1] = c1.left + (c2.left + c1.width - c1.left) / 2;
    line.path[1][2] = c1.top + (c2.top - c1.top) / 2;
  }


  line.path[1][3] = c2.left;
  line.path[1][4] = c2.top + c2.height / 2;
  line.globalCompositeOperation = "destination-over"
  return line
}


function App() {
  useEffect(() => {
    var canvas = new fabric.StaticCanvas('c');
    const cards = [{
      text: '准备开始',
      x: 400,
      y: 0
    }, {
      text: '互联网',
      x: 400,
      y: 100,
      children: [[
        c('互联网如何运作？', 100, 200),
        c('什么是HTTP/HTTPS', 100, 200),
      ], [
        c('DNS原理', 700, 200),
        c('CDN原理', 700, 200),
      ]]
    },
    {
      text: '浏览器',
      x: 400,
      y: 280,
      children: [[
        c('浏览器如何运行？', 160, 160),
        c('浏览器差异/兼容性', 160, 160, 40, [
          c('Chrome', 0, 100),
          c('Safari', 0, 100),
          c('Firefox', 0, 100),
          c('Android Browser', 0, 120),
          c('iOS Safari', 0, 100)])
      ], [
        c('Headless Browser', 700, 200),
        c('WebView', 700, 200),
      ]]
    },
    {
      text: '编辑器',
      x: 400,
      y: 460,
      children: [[],
      [
        c('VSCode', 700, 100),
        c('WebStorm', 700, 100),
        c('Atom', 700, 100),
        c('Sublime', 700, 100),
      ],
      ]
    },
    {
      text: 'HTML',
      x: 400,
      y: 600,
      children: [[
        c('常用标签', 100),
        c('表单', 100)],
      [
        c('SEO搜索优化', { x: 700, y: 590 }, 140),
      ],
      ]
    },
    {
      text: 'CSS',
      x: 400,
      y: 720,
      children: [[],
      [
        c('基本语法', 700, 140),
        c('布局', 700, 140, 40, [
          c('浮动float', 900, 100),
          c('定位postion', 900, 100),
          c('盒模型', 900, 100),
          c('flex', 900, 100),
          c('grid/layout', 900, 100),
        ]),
        c('响应式设计', 700, 140)
      ],
      ]
    },
    {
      text: 'JavaScript',
      x: 400,
      y: 800,
      children: [[
        c('基本语法', 100),
        c('DOM & BOM', 100),
        c('接口请求Ajax/Fetch', 100),
        c('ES6+', 100),
        c('重点理解概念 \n变量提升、时间冒泡捕获、 \n作用域、原型等 ', 100, 200, 100),
      ]
      ]
    },
    {
      text: '版本管理工具Git',
      x: 380,
      y: 960,
      children: [[], [
        c('基本命令', 600),
        c('注册github账号并学会使用', 600),
        c('搭建一个静态博客站点', 600, 200, 40, [c('xxx.github.io/blog', 840, 160),])
      ]
      ]
    },
    {
      text: '           Node基础 \n （暂时不用深入学习）',
      x: 440,
      y: 1100,
      w: 200,
      h: 50,
      children: [[
        c('包管理', 200, 100, 40, [
          c('npm', 0, 100),
          c('yarn', 0, 100),
          c('npx', 0, 100)
        ]),
        c('常用包', { x: 200, y: 1200 }, 100, 40, [
          c('文件读写fs', 0, 100),
          c('路径查找path', 0, 100),
          c('网络http', 0, 100)
        ])
      ]
      ]
    },
    {
      text: '构建工具',
      x: 400,
      y: 1300,
      children: [[], [
        c('自动化构建', { x: 600, y: 1200 }, 100, 40, [
          c('npm script', 800, 100),
          c('gulp', 800, 100)
        ]),
        c('模块化打包', { x: 600, y: 1360 }, 100, 40, [
          c('Webpack', 800, 100),
          c('Rollup', 800, 100),
          c('Parcel', 800, 100),
          c('Snowpack', 800, 100)
        ])
      ]
      ]
    },
    {
      text: 'CSS预处理',
      x: 300,
      y: 1400,
      children: [[
        c('Sass', 100, 100),
        c('PostCss', 100, 100),
        c('Less', 100, 100),
      ]
      ]
    },
    {
      text: 'JS框架',
      x: 500,
      y: 1680,
      children: [[
        c('React', { x: 200, y: 1580 }, 100, 40, [
          c('Redux/Mobx', 0, 100),
          c('React-router', 0, 100)
        ]),
        c('Vue', { x: 200, y: 1680 }, 100, 40, [
          c('VueX', 0, 100),
          c('Vue-router', 0, 100)
        ]),
        c('Angular', { x: 200, y: 1780 }, 100, 40, [
          c('RxJS', 0, 100),
          c('NgRx', 0, 100)
        ]),

      ]
      ]
    },
    {
      text: 'CSS框架',
      x: 400,
      y: 1900,
      children: [[], [
        c('Antd', 700, 100),
        c('Element UI', 700, 100),
        c('Material UI', 700, 100),
      ]
      ]
    },
    {
      text: 'CSS优化方案',
      x: 300,
      y: 2000,
      children: [[
        c('Styled Component', 0, 140),
        c('CSS Modules', 0, 140),
        c('Styled JSX', 0, 140),
      ]
      ]
    },
    {
      text: '测试',
      x: 400,
      y: 2200,
      children: [
        [
          c('单元测试', 200, 100),
          c('集成测试', 200, 100),
          c('E2E测试', 200, 100),
        ], [
          c('Jest', 700, 100),
          c('Enzyme', 700, 100),
          c('Puppeteer', 700, 100),
        ]
      ]
    },
    {
      text: '代码质量',
      x: 400,
      y: 2400,
      children: [
        [
          c('类型校验', 200, 100, 40, [
            c('TypeScript', 0, 100),
            c('Flow', 0, 100),
          ]),
          c('Linter & Formatter', { x: 200, y: 2460 }, 140, 40, [
            c('ESLint', 0, 100),
            c('Prettier', 0, 100),
          ]),
        ],
        [c('编码规范', 600, 100, 40, [
          c('JavaScript Style Guide', 800, 180),
          c('CSS Style Guide', 800, 180),
          c('React Style Guide', 800, 180),
        ])]
      ]
    },
    {
      text: '性能',
      x: 380,
      y: 2760,
      children: [
        [
          c('性能指标', 140, 100, 40, [
            c('FP', 0, 60),
            c('FCP', 0, 60),
            c('FMP', 0, 60),
            c('TTI', 0, 60),
          ]),
          c('RAIL模型', 140, 120),
          c('Lighthouse 指标', 140, 120),
          c('DevTools', 140, 100),
        ],
        [
          c('PWA', 700, 100),
          c('Service Worker', 700, 140),
          c('骨架屏', 700, 140),
        ]
      ]
    },
    {
      text: '数据可视化',
      x: 300,
      y: 2980,
      children: [
        [
          c('EChart', 100, 100),
          c('AntV', 100, 100),
          c('HighChart', 100, 100),
        ],
        [c('D3.js', 500, 100)]
      ]
    },
    {
      text: '服务端渲染SSR',
      x: 420,
      y: 3180,
      children: [[],
      [
        c('Next.js(React)', 700, 120),
        c('Nuxt.js(Vue)', 700, 120),
      ]
      ]
    },
    {
      text: '移动端应用',
      x: 360,
      y: 3340,
      children: [
        [
          c('React Native', 200, 100),
          c('Weex', 200, 100),
          c('hybrid', 200, 100),
          c('Flutter', 200, 100)
        ],
        [c('调试', 600, 100, 40, [
          c('Chrome DevTools', 800, 140),
          c('Android Simulator', 800, 140),
          c('iOS Simulator', 800, 140),
        ])]
      ]
    },
    {
      text: '小程序',
      x: 400,
      y: 3560,
      children: [
        [
          c('原生', 200, 100, 40, [c('微信', 0, 100), c('支付宝', 0, 100), c('头条', 0, 100)]),
        ],
        [c('跨端解决方案', 700, 100, 40, [c('Taro', 900, 100), c('Chameleon', 900, 100), c('uni-app', 900, 100)])]
      ]
    },
    {
      text: '桌面应用',
      x: 450,
      y: 3670,
      children: [
        [
          c('Electron', 200, 100),
          c('NW.js', 200, 100),
        ]
      ]
    },
    {
      text: '静态站点构建',
      x: 400,
      y: 3840,
      children: [
        [],
        [
          c('GatsbyJS', 700, 100),
          c('VuePress', 700, 100),
          c('Docusaurus', 700, 100),
          c('Hexo', 700, 100),
        ]
      ]
    },
    {
      text: 'Web Assembly',
      x: 400,
      y: 4000,
      children: [
        [
          c('拥抱未来', 200, 100),
        ]
      ]
    },
    {
      text: '学习永无止境',
      x: 300,
      y: 4500
    },
    {
      text: '加油吧！后浪！',
      x: 400,
      y: 4900
    },
    ]
    // 动画 Animation.css lottie
    const arr = []
    const lines = []
    let lastP
    cards.forEach((parent) => {
      const p = makeTextSquare(parent.x, parent.y, parent.text, 1, parent.w, parent.h)

      arr.push(p)
      if (lastP) {
        lines.push(makeLine(lastP, p))
      }
      lastP = p

      if (parent.children) {
        const left = parent.children[0]
        const right = parent.children[1] || []

        left.forEach((child, index) => {
          const length = left.length
          const isEven = length % 2 === 0
          let childY = child.y || (parent.y - (Math.floor(length / 2) - index) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin))
          childY += isEven ? CARD_CONFIG.height / 2 : 0
          const c = makeTextSquare(child.x, childY, child.text, 2, child.w, child.h)
          arr.push(c)

          const l = makeSubLine(c, p)
          lines.push(l)
          if (child.children) {
            child.children.forEach((cchild, ccindex) => {
              const length = child.children.length
              // if (length === 1) {
              //   const cc = makeTextSquare(child.x, child.y, cchild.text, 3, cchild.w, cchild.h)
              //   arr.push(cc)

              //   const l = makeSubLine(cc, c)
              //   lines.push(l)
              //   return
              // }
              const isEven = length % 2 === 0
              let childY = c.top - (Math.floor(length / 2) - ccindex) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin)
              childY += isEven ? CARD_CONFIG.height / 2 : 0
              const cc = makeTextSquare(cchild.x, childY, cchild.text, 3, cchild.w, cchild.h)
              arr.push(cc)

              const l = makeSubLine(cc, c)
              lines.push(l)
            })
          }

        })
        right.forEach((child, index) => {
          const length = right.length
          const isEven = right.length % 2 === 0
          let childY = child.y || (parent.y - (Math.floor(length / 2) - index) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin))
          childY += isEven ? CARD_CONFIG.height / 2 : 0
          const c = makeTextSquare(child.x, childY, child.text, 2, child.w, child.h)
          arr.push(c)
          const l = makeSubLine(p, c)
          lines.push(l)
          if (child.children) {
            child.children.forEach((cchild, ccindex) => {

              const length = child.children.length
              // if (length === 1) {
              //   const cc = makeTextSquare(child.x, c.top, cchild.text, 3, cchild.w, cchild.h)
              //   arr.push(cc)

              //   const l = makeSubLine(cc, c)
              //   lines.push(l)
              //   return
              // }

              const isEven = length % 2 === 0
              let childY = c.top - (Math.floor(length / 2) - ccindex) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin)
              childY += isEven ? CARD_CONFIG.height / 2 : 0
              const cc = makeTextSquare(cchild.x, childY, cchild.text, 3, cchild.w, cchild.h)
              arr.push(cc)
              const l = makeSubLine(c, cc)
              lines.push(l)
            })
          }
        })
      }
    })
    arr.map(item => canvas.add(item))
    lines.map(item => canvas.add(item))
  }, [])

  return (
    <div className="App">
      <div className="header">
        <div className="top">
          <img src={LOGO} alt="logo" />
          <span className="github-button">
            <GitHubButton href="https://github.com/ObjTube/front-end-roadmap" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star ObjTube/front-end-roadmap on GitHub">Star</GitHubButton>
          </span>
        </div>
        <div className="title">
          <span className="text">
            前端学习路线
          <span className="emoji">🧶🦌</span>
          </span>
        </div>
        <div className="sub-title">👨🏻‍💻 好好学习，天天敲代码 👩🏻‍💻</div>
      </div>
      <div style={{ marginTop: 60 }} className="roadmap">
        <canvas id="c" height="5000px" width="1000px" ></canvas>
      </div>
    </div>
  );
}

export default App;
