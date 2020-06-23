import React, { lazy, Suspense, useEffect } from "react";
import { importMDX } from "mdx.macro";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
export default function Guide() {
  const history = useHistory();
  return (
    <div className="guide-container">
      <div className="go-home" onClick={history.goBack}>
        <span>{"<- 返回"}</span>
      </div>
      <Suspense fallback={<Loading />}>
        <Markdown />
      </Suspense>
    </div>
  );
}

function Markdown() {
  let { query } = useParams();
  let Content;

  switch (query) {
    case "how-does-the-internet-work":
      Content = lazy(() => importMDX("./md/how-does-the-internet-work.md"));
      break;
    case "how-does-the-browser-work":
      Content = lazy(() => importMDX("./md/how-does-the-browser-work.md"));
      break;
    case "editor":
      Content = lazy(() => importMDX("./md/editor.md"));
      break;
    case "html":
      Content = lazy(() => importMDX("./md/html.md"));
      break;
    case "css":
      Content = lazy(() => importMDX("./md/css.md"));
      break;
    case "javascript":
      Content = lazy(() => importMDX("./md/javascript.md"));
      break;
    case "git":
      Content = lazy(() => importMDX("./md/git.md"));
      break;
    case "node":
      Content = lazy(() => importMDX("./md/node.md"));
      break;
    default:
      break;
  }
  useEffect(() => {}, []);
  return <Content />;
}

function Loading() {
  useEffect(() => {
    //  毛招：
    //  loading销毁时，再去获取lazy加载的文档里a标签
    return () => {
      setTimeout(() => {
        Array.from(document.getElementsByTagName("a")).forEach((el) => {
          el.setAttribute("target", "_blank");
        });
      }, 100);
    };
  }, []);
  return <div>Loading...</div>;
}
