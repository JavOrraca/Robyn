(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(109)),a=r(112),i={id:"doc9",title:"Outputs and diagnostics"},u={unversionedId:"doc9",id:"doc9",isDocsHomePage:!1,title:"Outputs and diagnostics",description:"The MMM code will automatically generate & select models and then autorank the top models according to statistical properties",source:"@site/docs/doc9.md",slug:"/doc9",permalink:"/Robyn/docs/doc9",editUrl:"https://github.com/facebookexperimental/Robyn/docs/doc9.md",version:"current",sidebar:"someSidebar",previous:{title:"Calibration using experimental results",permalink:"/Robyn/docs/doc8"},next:{title:"Getting help and contributing",permalink:"/Robyn/docs/doc10"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The MMM code will automatically generate & select models and then autorank the top models according to statistical properties"),Object(c.b)("img",{alt:"Model output",src:Object(a.a)("/img/output1.png")}),Object(c.b)("p",null,"MMM Code will produce following visual output graphs:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Sales decomp (Waterfall chart)")),Object(c.b)("img",{alt:"Model charts",src:Object(a.a)("/img/bestDecomp2.png")}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Sales decomp over time"),Object(c.b)("img",{alt:"Model charts",src:Object(a.a)("/img/plotBestDecomp.png")})),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Response curves"),Object(c.b)("img",{alt:"Model charts",src:Object(a.a)("/img/bestAdstock.png")}))))}p.isMDXComponent=!0},109:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},112:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return a}));var n=r(22),o=r(114);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,a=c.forcePrependBaseUrl,i=void 0!==a&&a,u=c.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(c,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},114:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);