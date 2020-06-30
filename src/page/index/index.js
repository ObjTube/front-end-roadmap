import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import domtoimage from "dom-to-image";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import drawRoadmap from "./drawRoadmap";
import * as roadMap from "./roadmap";
import "./style.css";

const options = [
  { value: "all", label: "完整路线" },
  { value: "p1", label: "👶🏻 阶段1" },
  { value: "p2", label: "👦🏻 阶段2" },
  { value: "p3", label: "👨🏻 阶段3" },
  //   { value: "p10000", label: "👴🏻 养生路线" },  // 这个也挺重要的，哈哈！(手动狗头
];

function Index() {
  const history = useHistory();
  const [process, setProcess] = useState("all");
  const [showTag, setShowTag] = useState(true);
  useEffect(() => {
    const canvas = drawRoadmap(`roadmap-${process}`, roadMap[process], showTag);
    canvas.on("mouse:down", (options) => {
      if (options.target && options.target.link) {
        history.push(`/guide${options.target.link}`);
      }
    });
  }, [history, process, showTag]);

  const onSelectProcess = useCallback(({ value }) => {
    setProcess(value);
  }, []);

  const onDownloadImg = useCallback(() => {
    const $el = document.querySelector(".roadmap");
    domtoimage.toJpeg($el).then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = "roadmap.jpeg";
      link.href = dataUrl;
      link.click();
    });
  }, []);

  const onShowTag = useCallback((value) => {
    setShowTag(value);
  }, []);
  return (
    <div className="roadmap-container">
      <div className="process-select-container">
        <div className="tag-switch">
          <span>展示标签</span>
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            defaultChecked
            onChange={onShowTag}
          />
        </div>
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={onSelectProcess}
          placeholder="请选择"
          className="process-select"
        />
        <div className="download" onClick={onDownloadImg}>
          下载路线图
        </div>
      </div>

      <div className="roadmap">
        {showTag && (
          <div className="desc-container">
            <div className="explain-square">
              <div className="explain-content">
                <div>1. ⭐️ - 推荐使用</div>
                <div>2. ✅ - 备选方案</div>
                <div>3. ❎ - 不推荐学习（技术已过时或其他原因）</div>
                <div>
                  4.
                  <span className="grey-card">xxxx</span> - 需要时再学
                </div>
              </div>
            </div>
          </div>
        )}
        {process === "all" && showTag && (
          <div>
            <canvas id="roadmap-all" height="5000px" width="1000px"></canvas>
          </div>
        )}
        {process === "all" && !showTag && (
          <div>
            <canvas id="roadmap-all" height="5000px" width="1000px"></canvas>
          </div>
        )}
        {process === "p1" && showTag && (
          <div>
            <canvas id="roadmap-p1" height="5000px" width="1000px"></canvas>
          </div>
        )}
        {process === "p1" && !showTag && (
          <div>
            <canvas id="roadmap-p1" height="5000px" width="1000px"></canvas>
          </div>
        )}
        {process === "p2" && !showTag && (
          <div>
            <canvas id="roadmap-p2" height="5000px" width="1000px"></canvas>
          </div>
        )}
        {process === "p2" && showTag && (
          <div>
            <canvas id="roadmap-p2" height="5000px" width="1000px"></canvas>
          </div>
        )}
        {process === "p3" && !showTag && (
          <div>
            <canvas id="roadmap-p3" height="5000px" width="1000px"></canvas>
          </div>
        )}
        {process === "p3" && showTag && (
          <div>
            <canvas id="roadmap-p3" height="5000px" width="1000px"></canvas>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
