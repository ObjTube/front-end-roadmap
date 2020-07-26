import { fabric } from "fabric";

// 卡片的默认配置
export const CARD_CONFIG = {
  width: 140,
  height: 40,
  bgColor: ["#ea5455", "#f07b3f", "#ffd460"],
  subCardMargin: 10,
  lineColor: "#fff",
  textColor: "#444",
  strokeColor: "#3A7AF2",
};

export const TAG_ICON_MAP = {
  recommand: "⭐️",
  optional: "✅",
  notRecommand: "❎",
};
export const TAG = {
  recommand: "recommand",
  optional: "optional",
  notRecommand: "notRecommand",
};
export function c(text, x, w = 200, opt, children) {
  const { h = 40, bgColor, textColor, link, process, tag } = opt || {};
  let temp = {
    text,
    w,
    h,
    children,
    bgColor,
    textColor,
    link,
    process,
    tag,
  };
  typeof x === "number" ? (temp.x = x) : (temp = { ...temp, ...x });
  return temp;
}
// const processColorMap = {
//   1: "#596FFB",
//   2: "#596FFB",
//   3: "#596FFB",
// };
export function makeTag(tag, instance, isleft) {
  // const Circle = new fabric.Circle({
  //   fill: processColorMap[process],
  //   radius: 10,
  //   originX: "center",
  //   originY: "center",
  //   shadow: "rgba(0,0,0,0.3) 1px 1px 2px",
  //   hasControls: false, // 关掉拖拉控制
  // });
  const Text = new fabric.Text(`${TAG_ICON_MAP[tag]}`, {
    fontSize: 14,
    fill: "#fff",
    originX: "center",
    originY: "center",
    fontFamily:
      " Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif",
    fontWeight: "500",
  });
  const group = new fabric.Group([Text], {
    left: isleft ? instance.left - 5 : instance.left + instance.width - 6,
    top: instance.top - 4,
    lockMovementX: true,
    lockMovementY: true, // 禁止xy轴拖动
    globalCompositeOperation: "source-over",
  });
  group.hasControls = false;
  return group;
}

// 生成一个带文字的卡片
export function makeTextSquare(
  text,
  {
    x,
    // mt,  // marginTop 离上一个卡片的距离
    y,
    depth = 1,
    w = CARD_CONFIG.width,
    h = CARD_CONFIG.height,
    bgColor = CARD_CONFIG.bgColor[depth - 1],
    textColor = CARD_CONFIG.textColor,
    isMain,
    isEnd,
  }
) {
  const Square = new fabric.Rect({
    fill: bgColor,
    width: w,
    height: h,
    originX: "center",
    originY: "center",
    rx: 4,
    ry: 4,
    shadow: "rgba(0,0,0,0.3) 2px 2px 4px",
    hasControls: false, // 关掉拖拉控制
  });
  const Text = new fabric.Text(text, {
    fontSize: 15,
    fill: textColor,
    originX: "center",
    originY: "center",
    fontFamily:
      " Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif",
    fontWeight: "500",
  });
  const group = new fabric.Group([Square, Text], {
    left: x,
    top: y,
    lockMovementX: true,
    lockMovementY: true, // 禁止xy轴拖动
  });
  group.hasControls = false;

  return group;
}
// 控制主轴曲线来回扭
let lineDirection = "left";

// 生成主轴卡片之间的连接线（竖向的）
export function makeLine(c1, c2) {
  const line = new fabric.Path("M 65 0 Q 100, 100, 200, 0", {
    fill: "",
    stroke: CARD_CONFIG.lineColor,
    strokeWidth: 3,
    objectCaching: false,
  });
  line.path[0][1] = c1.left + CARD_CONFIG.width / 2;
  line.path[0][2] = c1.top + CARD_CONFIG.height / 2;

  line.path[1][1] =
    lineDirection === "left"
      ? c1.left - CARD_CONFIG.width / 3
      : c1.left + CARD_CONFIG.width;
  lineDirection = lineDirection === "left" ? "right" : "left";
  line.path[1][2] = c1.top + (c2.top - c1.top) / 2;

  line.path[1][3] = c2.left + CARD_CONFIG.width / 2;
  line.path[1][4] = c2.top + CARD_CONFIG.height / 2;
  line.globalCompositeOperation = "destination-over";
  return line;
}

// 生成子树的连接线（横向的）
export function makeSubLine(c1, c2) {
  const line = new fabric.Path("M 65 0 Q 100, 100, 200, 0", {
    fill: "",
    stroke: CARD_CONFIG.lineColor,
    strokeWidth: 2,
    objectCaching: false,
  });
  line.strokeDashArray = [5, 5];
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
  // 线条在方块下面
  line.globalCompositeOperation = "destination-over";
  return line;
}
let canvas;
export default function drawRoadmap(id, roadmap, isShowTag) {
  const options = {
    containerClass: "roadmap-canvas",
    selection: false,
    interactive: false,
    // enableRetinaScaling: false,
    hoverCursor: "pointer",
  };
  if (canvas) {
    canvas.clear();
    if (window.__GO_TO_MARKDOWN__) {
      canvas = new fabric.Canvas(id, options);
      window.__GO_TO_MARKDOWN__ = false;
    }
  } else {
    canvas = new fabric.Canvas(id, options);
  }

  const arr = [];
  const lines = [];
  // 上一个绘制的主轴的卡片
  let lastP;
  roadmap.forEach((parent) => {
    const p = makeTextSquare(parent.text, parent, true);
    // 保存跳转地址，在点击的时候从卡片的实例上获取
    p.link = parent.link;

    arr.push(p);
    if (parent.tag && isShowTag) {
      const tag = makeTag(parent.tag, p);
      arr.push(tag);
    }
    if (lastP) {
      // 两个卡片连线
      lines.push(makeLine(lastP, p));
    }

    lastP = p;
    // 递归遍历children,和主轴相连
    function recursiveChildren(parentInstance, children, direction, depth) {
      if (!children) return;
      children.forEach((child, index) => {
        const length = children.length;
        const isEven = length % 2 === 0;
        let childY =
          child.y ||
          parentInstance.top -
            (Math.floor(length / 2) - index) *
              (CARD_CONFIG.height + CARD_CONFIG.subCardMargin);
        childY += isEven ? CARD_CONFIG.height / 2 : 0;
        const c = makeTextSquare(child.text, { ...child, y: childY, depth });
        // 如果没有配置跳转地址，则使用父卡片的地址
        c.link = child.link || parent.link;

        arr.push(c);
        const l =
          direction === "left"
            ? makeSubLine(c, parentInstance)
            : makeSubLine(parentInstance, c);
        lines.push(l);
        if (child.tag && isShowTag) {
          const tag = makeTag(child.tag, c, direction === "left");
          arr.push(tag);
        }
        if (child.children) {
          recursiveChildren(c, child.children, direction, depth + 1);
        }
      });
    }
    // 绘制分支
    if (parent.children) {
      // 左分支
      const left = parent.children[0];
      // 右分支
      const right = parent.children[1];
      recursiveChildren(p, left, "left", 2);
      recursiveChildren(p, right, "right", 2);
    }
  });
  arr.map((item) => canvas.add(item));
  lines.map((item) => canvas.add(item));
  return canvas;
}
