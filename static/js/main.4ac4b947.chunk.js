(this["webpackJsonpfront-end-roadmap"]=this["webpackJsonpfront-end-roadmap"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.588f5cbf.jpeg"},28:function(e,t,a){e.exports=a(49)},33:function(e,t,a){},39:function(e,t){},40:function(e,t){},41:function(e,t){},42:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"all",(function(){return z})),a.d(n,"p1",(function(){return M})),a.d(n,"p2",(function(){return T})),a.d(n,"p3",(function(){return A}));var r=a(0),l=a.n(r),o=a(10),i=a.n(o),c=a(11),s=a(1),u=(a(33),a(16)),d=a(25),h=a(20),p=a.n(h),m=a(26),f=(a(34),a(9)),b=a(8),g={width:140,height:40,bgColor:["#ea5455","#f07b3f","#ffd460"],subCardMargin:10,lineColor:"#fff",textColor:"#444",strokeColor:"#3A7AF2"},x={recommand:"\u2b50\ufe0f",optional:"\u2705",notRecommand:"\u274e"},v="recommand",k="optional",y="notRecommand";function C(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,l=n||{},o=l.h,i=void 0===o?40:o,c=l.bgColor,s=l.textColor,u=l.link,d=l.process,h=l.tag,p={text:e,w:a,h:i,children:r,bgColor:c,textColor:s,link:u,process:d,tag:h};return"number"===typeof t?p.x=t:p=Object(f.a)(Object(f.a)({},p),t),p}function E(e,t,a){var n=new b.fabric.Text("".concat(x[e]),{fontSize:14,fill:"#fff",originX:"center",originY:"center",fontFamily:" Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '\u5fae\u8f6f\u96c5\u9ed1', Arial, sans-serif",fontWeight:"500"}),r=new b.fabric.Group([n],{left:a?t.left-5:t.left+t.width-6,top:t.top-4,lockMovementX:!0,lockMovementY:!0,globalCompositeOperation:"source-over"});return r.hasControls=!1,r}function w(e,t){var a=t.x,n=t.y,r=t.depth,l=void 0===r?1:r,o=t.w,i=void 0===o?g.width:o,c=t.h,s=void 0===c?g.height:c,u=t.bgColor,d=void 0===u?g.bgColor[l-1]:u,h=t.textColor,p=void 0===h?g.textColor:h,m=t.isMain,f=(t.isEnd,new b.fabric.Rect({fill:d,width:i,height:s,originX:"center",originY:"center",rx:4,ry:4,shadow:"rgba(0,0,0,0.3) 2px 2px 4px",hasControls:!1})),x=new b.fabric.Text(e,{fontSize:15,fill:p,originX:"center",originY:"center",fontFamily:" Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '\u5fae\u8f6f\u96c5\u9ed1', Arial, sans-serif",fontWeight:"500"}),v=new b.fabric.Group([f,x],{left:a,top:n,lockMovementX:!0,lockMovementY:!0});return v.hasControls=!1,m&&v,v}var j="left";function O(e,t){var a=new b.fabric.Path("M 65 0 Q 100, 100, 200, 0",{fill:"",stroke:g.lineColor,strokeWidth:2,objectCaching:!1});return a.strokeDashArray=[5,5],a.path[0][1]=e.left+e.width,a.path[0][2]=e.top+e.height/2,e.left>t.left?(a.path[1][1]=t.left-(e.left-t.left)/2,a.path[1][2]=e.top+(t.top-e.top)/2):e.left<t.left&&(a.path[1][1]=e.left+(t.left+e.width-e.left)/2,a.path[1][2]=e.top+(t.top-e.top)/2),a.path[1][3]=t.left,a.path[1][4]=t.top+t.height/2,a.globalCompositeOperation="destination-over",a}function S(e,t,a){var n,r=new b.fabric.Canvas(e,{containerClass:"roadmap-canvas",selection:!1,interactive:!1,hoverCursor:"pointer"}),l=[],o=[];return t.forEach((function(e){var t=w(e.text,e);if(t.link=e.link,l.push(t),e.tag&&a){var r=E(e.tag,t);l.push(r)}function i(t,n,r,c){n&&n.forEach((function(s,u){var d=n.length,h=d%2===0,p=s.y||t.top-(Math.floor(d/2)-u)*(g.height+g.subCardMargin);p+=h?g.height/2:0;var m=w(s.text,Object(f.a)(Object(f.a)({},s),{},{y:p,depth:c}));m.link=s.link||e.link,l.push(m);var b="left"===r?O(m,t):O(t,m);if(o.push(b),s.tag&&a){var x=E(s.tag,m,"left"===r);l.push(x)}s.children&&i(m,s.children,r,c+1)}))}if(n&&o.push(function(e,t){var a=new b.fabric.Path("M 65 0 Q 100, 100, 200, 0",{fill:"",stroke:g.lineColor,strokeWidth:3,objectCaching:!1});return a.path[0][1]=e.left+g.width/2,a.path[0][2]=e.top+g.height/2,a.path[1][1]="left"===j?e.left-g.width/3:e.left+g.width,j="left"===j?"right":"left",a.path[1][2]=e.top+(t.top-e.top)/2,a.path[1][3]=t.left+g.width/2,a.path[1][4]=t.top+g.height/2,a.globalCompositeOperation="destination-over",a}(n,t)),n=t,e.children){var c=e.children[0],s=e.children[1];i(t,c,"left",2),i(t,s,"right",2)}})),l.map((function(e){return r.add(e)})),o.map((function(e){return r.add(e)})),r}var z=[{text:"\u51c6\u5907\u5f00\u59cb",x:400,y:0,process:1},{text:"\u4e92\u8054\u7f51",x:400,y:100,tag:v,link:"/how-does-the-internet-work",process:2,children:[[C("\u4e92\u8054\u7f51\u5982\u4f55\u8fd0\u4f5c\uff1f",100),C("\u4ec0\u4e48\u662fHTTP/HTTPS",100)],[C("DNS\u539f\u7406",700),C("CDN\u539f\u7406",700)]]},{text:"\u6d4f\u89c8\u5668",x:400,y:280,process:2,link:"/how-does-the-browser-work",children:[[C("\u6d4f\u89c8\u5668\u5982\u4f55\u8fd0\u884c\uff1f",160,160),C("\u6d4f\u89c8\u5668\u5dee\u5f02/\u517c\u5bb9\u6027",160,160,{},[C("Chrome",0,100),C("Safari",0,100),C("Firefox",0,100),C("Android Browser",0,120),C("iOS Safari",0,100)])],[C("Headless Browser",700,200,{bgColor:"#CCCCCC"}),C("WebView",700,200,{bgColor:"#CCCCCC"})]]},{text:"\u7f16\u8f91\u5668",x:400,y:460,link:"/editor",process:1,children:[[],[C("VSCode",700,100,{tag:v}),C("WebStorm",700,100,{tag:k}),C("Atom",700,100,{tag:k}),C("Sublime",700,100,{tag:k})]]},{text:"HTML",x:400,y:600,link:"/html",process:1,children:[[C("\u5e38\u7528\u6807\u7b7e",100),C("\u8868\u5355",100)],[C("SEO\u641c\u7d22\u4f18\u5316",{x:700,y:590},140,{bgColor:"#CCCCCC"})]]},{text:"CSS",x:400,y:720,link:"/css",process:1,children:[[],[C("\u57fa\u672c\u8bed\u6cd5",700,140),C("\u5e03\u5c40",700,140,{},[C("\u6d6e\u52a8float",900,100),C("\u5b9a\u4f4dpostion",900,100),C("\u76d2\u6a21\u578b",900,100),C("flex",900,100),C("grid/layout",900,100)]),C("\u54cd\u5e94\u5f0f\u8bbe\u8ba1",700,140)]]},{text:"JavaScript",x:400,y:800,link:"/javascript",process:1,children:[[C("\u57fa\u672c\u8bed\u6cd5",100),C("DOM & BOM",100),C("\u63a5\u53e3\u8bf7\u6c42Ajax/Fetch",100),C("ES6+",100),C("\u91cd\u70b9\u7406\u89e3\u6982\u5ff5 \n\u53d8\u91cf\u63d0\u5347\u3001\u65f6\u95f4\u5192\u6ce1\u6355\u83b7\u3001 \n\u4f5c\u7528\u57df\u3001\u539f\u578b\u7b49 ",100,200,{h:100})]]},{text:"\u7248\u672c\u7ba1\u7406\u5de5\u5177Git",x:380,y:960,link:"/git",process:1,children:[[],[C("\u57fa\u672c\u547d\u4ee4",600),C("\u6ce8\u518cgithub\u8d26\u53f7\u5e76\u5b66\u4f1a\u4f7f\u7528",600),C("\u642d\u5efa\u4e00\u4e2a\u9759\u6001\u535a\u5ba2\u7ad9\u70b9",600,200,{},[C("xxx.github.io/blog",840,160)])]]},{text:"           Node\u57fa\u7840 \n \uff08\u6682\u65f6\u4e0d\u7528\u6df1\u5165\u5b66\u4e60\uff09",x:440,y:1100,w:200,h:50,link:"/node",children:[[C("\u5305\u7ba1\u7406",200,100,{},[C("npm",0,100),C("yarn",0,100),C("npx",0,100)]),C("\u5e38\u7528\u5305",{x:200,y:1200},100,{},[C("\u6587\u4ef6\u8bfb\u5199fs",0,100),C("\u8def\u5f84\u67e5\u627epath",0,100),C("\u7f51\u7edchttp",0,100)])]]},{text:"\u6784\u5efa\u5de5\u5177",x:400,y:1300,link:"/build-tools",children:[[],[C("\u81ea\u52a8\u5316\u6784\u5efa",{x:600,y:1200},100,{},[C("npm script",800,100),C("gulp",800,100,{bgColor:"#CCCCCC"})]),C("\u6a21\u5757\u5316\u6253\u5305",{x:600,y:1360},100,{},[C("Webpack",800,100,{tag:v}),C("Rollup",800,100,{tag:k}),C("Parcel",800,100,{tag:k}),C("Snowpack",800,100,{tag:k})])]]},{text:"CSS\u9884\u5904\u7406",x:300,y:1400,process:2,link:"/css-preprocessor",children:[[C("Sass",100,100,{tag:v}),C("PostCss",100,100,{tag:v}),C("Less",100,100,{tag:y})]]},{text:"JS\u6846\u67b6",x:500,y:1700,process:2,link:"/js-framework",children:[[C("React",{x:200,y:1570},100,{},[C("Redux",10,100,{tag:v}),C("Mobx",10,100,{tag:k}),C("React-router",10,100,{tag:v})]),C("Vue",{x:200,y:1700},100,{},[C("VueX",10,100,{tag:v}),C("Vue-router",10,100,{tag:v})]),C("Angular",{x:200,y:1800},100,{},[C("RxJS",10,100),C("NgRx",10,100)])]]},{text:"CSS\u6846\u67b6",x:400,y:1900,process:2,link:"/css-framework",children:[[],[C("Antd",700,100,{tag:v}),C("Element UI",700,100,{tag:v}),C("Material UI",700,100,{tag:k})]]},{text:"CSS\u4f18\u5316\u65b9\u6848",x:300,y:2e3,process:3,link:"/css-modern",children:[[C("Styled Component",10,140,{tag:v}),C("CSS Modules",10,140,{tag:v}),C("Styled JSX",10,140,{tag:k})]]},{text:"\u6d4b\u8bd5",x:400,y:2200,process:3,link:"/test-framework",children:[[C("\u5355\u5143\u6d4b\u8bd5",200,100),C("\u96c6\u6210\u6d4b\u8bd5",200,100),C("E2E\u6d4b\u8bd5",200,100)],[C("Jest",700,100),C("Enzyme",700,100),C("Puppeteer",700,100)]]},{text:"\u4ee3\u7801\u8d28\u91cf",x:400,y:2400,link:"/code-quality",process:3,children:[[C("\u7c7b\u578b\u6821\u9a8c",200,100,{},[C("TypeScript",10,100,{tag:v}),C("Flow",10,100,{tag:y})]),C("Linter & Formatter",{x:200,y:2460},140,{},[C("ESLint",0,100),C("Prettier",0,100)])],[C("\u7f16\u7801\u89c4\u8303",600,100,{},[C("JavaScript Style Guide",800,180),C("CSS Style Guide",800,180),C("React Style Guide",800,180)])]]},{text:"\u6027\u80fd",x:380,y:2760,process:3,link:"/performance",children:[[C("\u6027\u80fd\u6307\u6807",140,100,{},[C("FP",0,60),C("FCP",0,60),C("FMP",0,60),C("TTI",0,60)]),C("RAIL\u6a21\u578b",140,120),C("Lighthouse \u6307\u6807",140,120),C("DevTools",140,100)],[C("PWA",700,100),C("Service Worker",700,140),C("\u9aa8\u67b6\u5c4f",700,140)]]},{text:"\u6570\u636e\u53ef\u89c6\u5316",x:300,y:2980,link:"/data-view",children:[[C("EChart",100,100,{tag:v}),C("AntV",100,100,{tag:k}),C("HighChart",100,100,{tag:k})],[C("D3.js",500,100)]]},{text:"\u670d\u52a1\u7aef\u6e32\u67d3SSR",x:420,y:3180,process:3,link:"/ssr",children:[[],[C("Next.js(React)",700,120),C("Nuxt.js(Vue)",700,120)]]},{text:"\u79fb\u52a8\u7aef\u5e94\u7528",x:360,y:3340,link:"/mobile-app",children:[[C("React Native",200,100),C("Weex",200,100),C("hybrid",200,100),C("Flutter",200,100)],[C("\u8c03\u8bd5",600,100,{},[C("Chrome DevTools",800,140),C("Android Simulator",800,140),C("iOS Simulator",800,140)])]]},{text:"\u5c0f\u7a0b\u5e8f",x:400,y:3560,link:"/mini-app",children:[[C("\u539f\u751f",200,100,{},[C("\u5fae\u4fe1",0,100),C("\u652f\u4ed8\u5b9d",0,100),C("\u5934\u6761",0,100)])],[C("\u8de8\u7aef\u89e3\u51b3\u65b9\u6848",700,100,{},[C("Taro",890,100,{tag:v}),C("uni-app",890,100,{tag:v}),C("Chameleon",890,100,{tag:k})])]]},{text:"\u684c\u9762\u5e94\u7528",x:450,y:3670,link:"/desktop-app",children:[[C("Electron",200,100,{tag:v}),C("NW.js",200,100)]]},{text:"\u9759\u6001\u7ad9\u70b9\u6784\u5efa",x:400,y:3840,process:3,link:"/static-site",children:[[],[C("GatsbyJS",700,100,{tag:v}),C("VuePress",700,100,{tag:v}),C("Docusaurus",700,100,{tag:k}),C("Hexo",700,100,{tag:y})]]},{text:"Web Assembly",x:400,y:4e3,link:"/web-assembly",bgColor:"#CCC",children:[[C("\u62e5\u62b1\u672a\u6765",200,100)]]},{text:"\u5b66\u4e60\u6c38\u65e0\u6b62\u5883",x:300,y:4500,process:1},{text:"\u7ffb\u6eda\u5427\uff01\u540e\u6d6a\uff01",x:400,y:4900,process:1}];function N(e){return z.filter((function(t){return e.includes(t.process)}))}var M=N([1]),T=N([1,2]),A=N([1,2,3]),R=(a(42),[{value:"all",label:"\u5b8c\u6574\u8def\u7ebf"},{value:"p1",label:"\ud83d\udc76\ud83c\udffb \u9636\u6bb51"},{value:"p2",label:"\ud83d\udc66\ud83c\udffb \u9636\u6bb52"},{value:"p3",label:"\ud83d\udc68\ud83c\udffb \u9636\u6bb53"}]);var W=function(){var e=Object(s.e)(),t=Object(r.useState)("all"),a=Object(u.a)(t,2),o=a[0],i=a[1],c=Object(r.useState)(!0),h=Object(u.a)(c,2),f=h[0],b=h[1];Object(r.useEffect)((function(){S("roadmap-".concat(o),n[o],f).on("mouse:down",(function(t){t.target&&t.target.link&&e.push("/guide".concat(t.target.link))}))}),[e,o,f]);var g=Object(r.useCallback)((function(e){var t=e.value;i(t)}),[]),x=Object(r.useCallback)((function(){var e=document.querySelector(".roadmap");p.a.toJpeg(e).then((function(e){var t=document.createElement("a");t.download="roadmap.jpeg",t.href=e,t.click()}))}),[]),v=Object(r.useCallback)((function(e){b(e)}),[]);return l.a.createElement("div",{className:"roadmap-container"},l.a.createElement("div",{className:"process-select-container"},l.a.createElement("div",{className:"tag-switch"},l.a.createElement("span",null,"\u5c55\u793a\u6807\u7b7e"),l.a.createElement(m.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:!0,onChange:v})),l.a.createElement(d.a,{options:R,defaultValue:R[0],onChange:g,placeholder:"\u8bf7\u9009\u62e9",className:"process-select"}),l.a.createElement("div",{className:"download",onClick:x},"\u4e0b\u8f7d\u8def\u7ebf\u56fe")),l.a.createElement("div",{className:"roadmap"},f&&l.a.createElement("div",{className:"desc-container"},l.a.createElement("div",{className:"explain-square"},l.a.createElement("div",{className:"explain-content"},l.a.createElement("div",null,"1. \u2b50\ufe0f - \u63a8\u8350\u4f7f\u7528"),l.a.createElement("div",null,"2. \u2705 - \u5907\u9009\u65b9\u6848"),l.a.createElement("div",null,"3. \u274e - \u4e0d\u63a8\u8350\u5b66\u4e60\uff08\u6280\u672f\u5df2\u8fc7\u65f6\u6216\u5176\u4ed6\u539f\u56e0\uff09"),l.a.createElement("div",null,"4.",l.a.createElement("span",{className:"grey-card"},"xxxx")," - \u9700\u8981\u65f6\u518d\u5b66")))),"all"===o&&f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-all",height:"5000px",width:"1000px"})),"all"===o&&!f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-all",height:"5000px",width:"1000px"})),"p1"===o&&f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-p1",height:"5000px",width:"1000px"})),"p1"===o&&!f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-p1",height:"5000px",width:"1000px"})),"p2"===o&&!f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-p2",height:"5000px",width:"1000px"})),"p2"===o&&f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-p2",height:"5000px",width:"1000px"})),"p3"===o&&!f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-p3",height:"5000px",width:"1000px"})),"p3"===o&&f&&l.a.createElement("div",null,l.a.createElement("canvas",{id:"roadmap-p3",height:"5000px",width:"1000px"}))))};a(47);function P(){var e;switch(Object(s.f)().query){case"how-does-the-internet-work":e=Object(r.lazy)((function(){return a.e(14).then(a.bind(null,60))}));break;case"how-does-the-browser-work":e=Object(r.lazy)((function(){return a.e(13).then(a.bind(null,61))}));break;case"editor":e=Object(r.lazy)((function(){return a.e(11).then(a.bind(null,62))}));break;case"html":e=Object(r.lazy)((function(){return a.e(15).then(a.bind(null,63))}));break;case"css":e=Object(r.lazy)((function(){return a.e(8).then(a.bind(null,64))}));break;case"javascript":e=Object(r.lazy)((function(){return a.e(16).then(a.bind(null,65))}));break;case"git":e=Object(r.lazy)((function(){return a.e(12).then(a.bind(null,66))}));break;case"node":e=Object(r.lazy)((function(){return a.e(20).then(a.bind(null,67))}));break;case"code-quality":e=Object(r.lazy)((function(){return a.e(4).then(a.bind(null,68))}));break;case"css-framework":e=Object(r.lazy)((function(){return a.e(5).then(a.bind(null,69))}));break;case"css-modern":e=Object(r.lazy)((function(){return a.e(6).then(a.bind(null,70))}));break;case"css-preprocessor":e=Object(r.lazy)((function(){return a.e(7).then(a.bind(null,71))}));break;case"data-view":e=Object(r.lazy)((function(){return a.e(9).then(a.bind(null,72))}));break;case"desktop-app":e=Object(r.lazy)((function(){return a.e(10).then(a.bind(null,73))}));break;case"js-framework":e=Object(r.lazy)((function(){return a.e(17).then(a.bind(null,74))}));break;case"mini-app":e=Object(r.lazy)((function(){return a.e(18).then(a.bind(null,75))}));break;case"mobile-app":e=Object(r.lazy)((function(){return a.e(19).then(a.bind(null,76))}));break;case"performance":e=Object(r.lazy)((function(){return a.e(21).then(a.bind(null,77))}));break;case"ssr":e=Object(r.lazy)((function(){return a.e(22).then(a.bind(null,78))}));break;case"static-site":e=Object(r.lazy)((function(){return a.e(23).then(a.bind(null,79))}));break;case"test-framework":e=Object(r.lazy)((function(){return a.e(25).then(a.bind(null,80))}));break;case"webivew":e=Object(r.lazy)((function(){return a.e(27).then(a.bind(null,81))}));break;case"web-assembly":e=Object(r.lazy)((function(){return a.e(26).then(a.bind(null,82))}));break;case"build-tools":e=Object(r.lazy)((function(){return a.e(3).then(a.bind(null,83))}));break;case"temp-md":e=Object(r.lazy)((function(){return a.e(24).then(a.bind(null,84))}))}return Object(r.useEffect)((function(){}),[]),l.a.createElement(e,null)}function F(){return Object(r.useEffect)((function(){return function(){setTimeout((function(){Array.from(document.getElementsByTagName("a")).forEach((function(e){e.setAttribute("target","_blank")}))}),100)}}),[]),l.a.createElement("div",null,"Loading...")}var H=a(27),G=a(24),J=a.n(G);function B(){Object(s.e)();return l.a.createElement("div",{div:!0,className:"header"},l.a.createElement("div",{className:"top"},l.a.createElement("img",{src:J.a,alt:"logo",onClick:function(){window.location.href="/front-end-roadmap"}}),l.a.createElement("span",{className:"github-button"},l.a.createElement(H.a,{href:"https://github.com/ObjTube/front-end-roadmap","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Star ObjTube/front-end-roadmap on GitHub"},"Star"))),l.a.createElement("div",{className:"title"},l.a.createElement("span",{className:"text"},"\u524d\u7aef\u5b66\u4e60\u8def\u7ebf",l.a.createElement("span",{className:"emoji"},"\ud83e\uddf6\ud83e\udd8c"))),l.a.createElement("div",{className:"sub-title"},"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb \u597d\u597d\u5b66\u4e60\uff0c\u5929\u5929\u6572\u4ee3\u7801 \ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null),l.a.createElement(c.a,{basename:"/front-end-roadmap"},l.a.createElement(s.a,{exact:!0,path:"/",component:W}),l.a.createElement(s.a,{path:"/guide/:query",component:function(){var e=Object(s.f)().query,t=Object(s.e)();return l.a.createElement("div",{className:"guide-container"},l.a.createElement("div",{className:"go-home",onClick:t.goBack},l.a.createElement("span",null,"<- \u8fd4\u56de")),l.a.createElement(r.Suspense,{fallback:l.a.createElement(F,null)},l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null),l.a.createElement("div",{className:"go-github-edit"},l.a.createElement("a",{href:"https://github.com/ObjTube/front-end-roadmap/edit/master/src/page/guide/md/".concat(e,".md")},"\u60f3\u8981\u8865\u5145\uff0c\u70b9\u51fb\u8fd9\u91cc",l.a.createElement("span",{role:"img","aria-label":"cool"},"\ud83d\udcdd"))))))}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.4ac4b947.chunk.js.map