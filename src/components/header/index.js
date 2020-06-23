import React from "react";
import { useHistory } from "react-router-dom";
import GitHubButton from "react-github-btn";
import LOGO from "../../assets/logo.jpeg";

export default function Header() {
  const history = useHistory();

  return (
    <div div className="header">
      <div className="top">
        <img
          src={LOGO}
          alt="logo"
          onClick={() => {
            window.location.href = "/front-end-roadmap";
          }}
        />
        <span className="github-button">
          <GitHubButton
            href="https://github.com/ObjTube/front-end-roadmap"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-size="large"
            data-show-count="true"
            aria-label="Star ObjTube/front-end-roadmap on GitHub"
          >
            Star
          </GitHubButton>
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
  );
}
