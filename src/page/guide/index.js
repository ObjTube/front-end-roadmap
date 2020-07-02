import React, { lazy, Suspense, useEffect, useState } from "react";
import { importMDX } from "mdx.macro";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import Axios from "axios";

let distinct = (arr) => {
  let map = new Map();
  for (let item of arr) {
    if (!map.has(item.author.id)) {
      map.set(item.author.id, item);
    }
  }
  return [...map.values()];
};

export default function Guide() {
  let { query } = useParams();
  const history = useHistory();
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const commitLogApi = `https://api.github.com/repos/ObjTube/front-end-roadmap/commits?path=src/page/guide/md/${query}.md`;
    Axios.get(commitLogApi).then((res) => {
      if (res.status && res.data) {
        const contributors = distinct(res.data)
          .map((item) => ({
            name: item.author.login,
            avatar_url: item.author.avatar_url,
            github: item.author.html_url,
          }))
          .reverse();
        setContributors(contributors);
      }
    });
  }, [query]);

  return (
    <div className="guide-container">
      <div className="go-home" onClick={history.goBack}>
        <span>{"<- 返回"}</span>
      </div>
      <Suspense fallback={<Loading />}>
        <>
          <Markdown />
          <div className="go-github-edit">
            <a
              href={`https://github.com/ObjTube/front-end-roadmap/edit/master/src/page/guide/md/${query}.md`}
            >
              想要补充，点击这里
              <span role="img" aria-label="cool">
                📝
              </span>
            </a>
          </div>
          <div className="github-contributors">
            <div className="github-contributors-title">贡献人员</div>
            <div className="github-contributors-info">
              {contributors.map((ct) => (
                <a href={ct.github} target="_blank">
                  <img src={ct.avatar_url} alt={ct.name} />
                  <span>{ct.name}</span>
                </a>
              ))}
            </div>
          </div>
        </>
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
    case "code-quality":
      Content = lazy(() => importMDX("./md/code-quality.md"));
      break;
    case "css-framework":
      Content = lazy(() => importMDX("./md/css-framework.md"));
      break;
    case "css-modern":
      Content = lazy(() => importMDX("./md/css-modern.md"));
      break;
    case "css-preprocessor":
      Content = lazy(() => importMDX("./md/css-preprocessor.md"));
      break;
    case "data-view":
      Content = lazy(() => importMDX("./md/data-view.md"));
      break;
    case "desktop-app":
      Content = lazy(() => importMDX("./md/desktop-app.md"));
      break;
    case "js-framework":
      Content = lazy(() => importMDX("./md/js-framework.md"));
      break;
    case "mini-app":
      Content = lazy(() => importMDX("./md/mini-app.md"));
      break;
    case "mobile-app":
      Content = lazy(() => importMDX("./md/mobile-app.md"));
      break;
    case "performance":
      Content = lazy(() => importMDX("./md/performance.md"));
      break;
    case "ssr":
      Content = lazy(() => importMDX("./md/ssr.md"));
      break;
    case "static-site":
      Content = lazy(() => importMDX("./md/static-site.md"));
      break;
    case "test-framework":
      Content = lazy(() => importMDX("./md/test-framework.md"));
      break;
    case "webivew":
      Content = lazy(() => importMDX("./md/webview.md"));
      break;
    case "web-assembly":
      Content = lazy(() => importMDX("./md/web-assembly.md"));
      break;
    case "build-tools":
      Content = lazy(() => importMDX("./md/build-tools.md"));
      break;
    case "temp-md":
      Content = lazy(() => importMDX("./md/temp-md.md"));
      break;
    default:
      break;
  }

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
