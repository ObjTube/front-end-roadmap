(this["webpackJsonpfront-end-roadmap"]=this["webpackJsonpfront-end-roadmap"]||[]).push([[27],{112:function(e,t,n){"use strict";n.r(t);var r=n(90),o=n(0),a=n.n(o),u=n(82);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(u.MDXTag,{name:"wrapper",components:t},a.a.createElement(u.MDXTag,{name:"h1",components:t},"WebView"),a.a.createElement(u.MDXTag,{name:"blockquote",components:t},a.a.createElement(u.MDXTag,{name:"p",components:t,parentName:"blockquote"},"\u53ef\u4ee5\u5185\u5d4c\u5728\u79fb\u52a8\u7aef\uff0c\u5b9e\u73b0\u524d\u7aef\u7684\u6df7\u5408\u5f0f\u5f00\u53d1\uff0c\u5927\u591a\u6570\u6df7\u5408\u5f0f\u5f00\u53d1\u6846\u67b6\u90fd\u662f\u57fa\u4e8e WebView \u6a21\u5f0f\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\u7684")),a.a.createElement(u.MDXTag,{name:"h2",components:t},"\ud83d\udcc4 \u6587\u7ae0"),a.a.createElement(u.MDXTag,{name:"ul",components:t},a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://blog.csdn.net/xiaoqiang_0719/article/details/52383920"}},"\u4f7f\u7528 webview \u51e0\u79cd\u5e38\u89c1\u7684 hybrid \u901a\u4fe1\u65b9\u5f0f")),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.cnblogs.com/pqjwyn/p/7120342.html"}},"\u524d\u7aef\u89e3\u8bfb WebView"))))}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(85)),u=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)({}),s=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(l,null,(function(t){return o.default.createElement(e,r({components:n||t},a))}))}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};p.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=p},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(83);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(81);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=s(a),i=s(n(84)),c=n(81);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f={inlineCode:"code",wrapper:"div"},d=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,c=e.children,s=e.components,l=void 0===s?{}:s,p=e.Layout,d=e.layoutProps,m=l[n+"."+t]||l[t]||f[t]||t;return p?((0,i.default)(this,p),u.default.createElement(p,r({components:l},d),u.default.createElement(m,a,c))):u.default.createElement(m,a,c)}}]),t}(a.Component);t.default=(0,c.withMDXComponents)(d)},84:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,l=s&&s(Object);e.exports=function e(t,n,p){if("string"!==typeof n){if(l){var f=s(n);f&&f!==l&&e(t,f,p)}var d=u(n);i&&(d=d.concat(i(n)));for(var m=0;m<d.length;++m){var h=d[m];if(!r[h]&&!o[h]&&(!p||!p[h])){var v=c(n,h);try{a(t,h,v)}catch(y){}}}return t}return t}},85:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(86));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},86:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(u(r),u(n(7))),a=u(n(87));u(n(88));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,u,p="__create-react-context-"+(0,a.default)()+"__",f=function(e){function n(){var t,r;i(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return t=r=c(this,e.call.apply(e,[this].concat(a))),r.emitter=l(r.props.value),c(r,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(u=r)?0!==a||1/a===1/u:a!==a&&u!==u)?o=0:(o="function"===typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,u},n.prototype.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[p]=o.default.object.isRequired,n);var d=function(t){function n(){var e,r;i(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return e=r=c(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},c(r,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return d.contextTypes=((u={})[p]=o.default.object,u),{Provider:f,Consumer:d}},e.exports=t.default},87:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(20))},88:function(e,t,n){"use strict";var r=n(89);e.exports=r},89:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},90:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=27.a7b99fe1.chunk.js.map