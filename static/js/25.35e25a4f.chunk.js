(this["webpackJsonpfront-end-roadmap"]=this["webpackJsonpfront-end-roadmap"]||[]).push([[25],{111:function(e,t,n){"use strict";n.r(t);var r=n(90),o=n(0),a=n.n(o),u=n(82);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(u.MDXTag,{name:"wrapper",components:t},a.a.createElement(u.MDXTag,{name:"h1",components:t},"\u6d4b\u8bd5\u6846\u67b6"),a.a.createElement(u.MDXTag,{name:"h2",components:t},"\u57fa\u7840\u77e5\u8bc6"),a.a.createElement(u.MDXTag,{name:"ul",components:t},a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"p",components:t,parentName:"li"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://juejin.im/entry/584ab2dc128fe1006c7cdc11"}},"JavaScript \u6d4b\u8bd5\ufe30 \u5355\u5143 vs \u529f\u80fd vs \u96c6\u6210\u6d4b\u8bd5"))),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"p",components:t,parentName:"li"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://juejin.im/entry/589d6f072f301e0069bda275"}},"\u7406\u89e3\u524d\u7aef\u5f00\u53d1\u4e2d\u7684unit test \u548ce2e test")))),a.a.createElement(u.MDXTag,{name:"h2",components:t},"JS\u6d4b\u8bd5\u6846\u67b6"),a.a.createElement(u.MDXTag,{name:"ul",components:t},a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://jestjs.io/"}},"Jest")),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://mochajs.org/"}},"Mocha")),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://jasmine.github.io/"}},"Jasmine"))),a.a.createElement(u.MDXTag,{name:"h2",components:t},"E2E\u6d4b\u8bd5"),a.a.createElement(u.MDXTag,{name:"ul",components:t},a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/puppeteer/puppeteer"}},"Puppeteer")),a.a.createElement(u.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(u.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.cypress.io/"}},"Cypress"))))}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(0)),a=c(n(85)),u=c(n(7));function c(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)({}),p=i.Provider,s=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(s,null,(function(t){return o.default.createElement(e,r({components:n||t},a))}))}};var l=function(e){var t=e.components,n=e.children;return o.default.createElement(p,{value:t},n)};l.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=l},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(83);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(81);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=p(a),c=p(n(84)),i=n(81);function p(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,i=e.children,p=e.components,s=void 0===p?{}:p,l=e.Layout,m=e.layoutProps,h=s[n+"."+t]||s[t]||f[t]||t;return l?((0,c.default)(this,l),u.default.createElement(l,r({components:s},m),u.default.createElement(h,a,i))):u.default.createElement(h,a,i)}}]),t}(a.Component);t.default=(0,i.withMDXComponents)(m)},84:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,s=p&&p(Object);e.exports=function e(t,n,l){if("string"!==typeof n){if(s){var f=p(n);f&&f!==s&&e(t,f,l)}var m=u(n);c&&(m=m.concat(c(n)));for(var h=0;h<m.length;++h){var d=m[h];if(!r[d]&&!o[d]&&(!l||!l[d])){var v=i(n,d);try{a(t,d,v)}catch(y){}}}return t}return t}},85:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(86));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},86:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(u(r),u(n(7))),a=u(n(87));u(n(88));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,u,l="__create-react-context-"+(0,a.default)()+"__",f=function(e){function n(){var t,r;c(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return t=r=i(this,e.call.apply(e,[this].concat(a))),r.emitter=s(r.props.value),i(r,t)}return p(n,e),n.prototype.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(u=r)?0!==a||1/a===1/u:a!==a&&u!==u)?o=0:(o="function"===typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,u},n.prototype.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[l]=o.default.object.isRequired,n);var m=function(t){function n(){var e,r;c(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return e=r=i(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},i(r,e)}return p(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[l]?this.context[l].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return m.contextTypes=((u={})[l]=o.default.object,u),{Provider:f,Consumer:m}},e.exports=t.default},87:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(20))},88:function(e,t,n){"use strict";var r=n(89);e.exports=r},89:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},90:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=25.35e25a4f.chunk.js.map