import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

import "./style.css";

const distinct = (arr) => {
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
  
  // 简单处理: router => detail page set scrollTop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {contributors.map((ct, idx) => (
              <a href={ct.github} key={"contributors-"+idx} target="_blank" rel="noopener noreferrer">
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
  const Content = require(`./md/${query}.md`);
  return <div dangerouslySetInnerHTML={{ __html: Content }} />;
}
