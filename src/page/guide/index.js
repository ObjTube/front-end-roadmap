import React, { useEffect, useState } from "react";
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
    Array.from(document.getElementsByTagName("a")).forEach((el) => {
      el.setAttribute("target", "_blank");
    });
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
              <a href={ct.github} target="_blank" rel="noopener noreferrer">
                <img src={ct.avatar_url} alt={ct.name} />
                <span>{ct.name}</span>
              </a>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

function Markdown() {
  let { query } = useParams();
  let Content;

  switch (query) {
    case "how-does-the-internet-work":
      Content = require("./md/how-does-the-internet-work.md");
      break;
    case "how-does-the-browser-work":
      Content = require("./md/how-does-the-browser-work.md");
      break;
    case "editor":
      Content = require("./md/editor.md");
      break;
    case "html":
      Content = require("./md/html.md");
      break;
    case "css":
      Content = require("./md/css.md");
      break;
    case "javascript":
      Content = require("./md/javascript.md");
      break;
    case "git":
      Content = require("./md/git.md");
      break;
    case "node":
      Content = require("./md/node.md");
      break;
    case "code-quality":
      Content = require("./md/code-quality.md");
      break;
    case "css-framework":
      Content = require("./md/css-framework.md");
      break;
    case "css-modern":
      Content = require("./md/css-modern.md");
      break;
    case "css-preprocessor":
      Content = require("./md/css-preprocessor.md");
      break;
    case "data-view":
      Content = require("./md/data-view.md");
      break;
    case "desktop-app":
      Content = require("./md/desktop-app.md");
      break;
    case "js-framework":
      Content = require("./md/js-framework.md");
      break;
    case "mini-app":
      Content = require("./md/mini-app.md");
      break;
    case "mobile-app":
      Content = require("./md/mobile-app.md");
      break;
    case "performance":
      Content = require("./md/performance.md");
      break;
    case "ssr":
      Content = require("./md/ssr.md");
      break;
    case "static-site":
      Content = require("./md/static-site.md");
      break;
    case "test-framework":
      Content = require("./md/test-framework.md");
      break;
    case "webivew":
      Content = require("./md/webview.md");
      break;
    case "web-assembly":
      Content = require("./md/web-assembly.md");
      break;
    case "build-tools":
      Content = require("./md/build-tools.md");
      break;
    case "temp-md":
      Content = require("./md/temp-md.md");
      break;
    default:
      break;
  }
  return <div dangerouslySetInnerHTML={{ __html: Content }} />;
}
