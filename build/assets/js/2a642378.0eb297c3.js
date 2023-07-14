"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[15208],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(o),m=r,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return o?n.createElement(p,s(s({ref:t},d),{},{components:o})):n.createElement(p,s({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},51424:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(87462),r=(o(67294),o(3905)),a=o(44996);const s={id:"8bb23af0-22b2-11ed-9930-0242fe3e4a3f",title:"Tests not loading when executing with Chrome version 92, 93, 94 in Windows",slug:"execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows",hide_title:!0},i='<a id="troubleshooting-1651" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Tests not loading when executing with Chrome version 92, 93, 94 in Windows',c={unversionedId:"8bb23af0-22b2-11ed-9930-0242fe3e4a3f",id:"8bb23af0-22b2-11ed-9930-0242fe3e4a3f",title:"Tests not loading when executing with Chrome version 92, 93, 94 in Windows",description:"When executing tests in KRE in console mode on Windows with Chrome version 92.x, 93.x or 94.x, you might come across the following error Message Timed out receiving message from renderer: 600.000.",source:"@site/docs/8bb23af0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows",permalink:"/docs/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows",draft:!1,tags:[],version:"current",frontMatter:{id:"8bb23af0-22b2-11ed-9930-0242fe3e4a3f",title:"Tests not loading when executing with Chrome version 92, 93, 94 in Windows",slug:"execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows",hide_title:!0},sidebar:"aSidebar",previous:{title:"New and old proxy mechanisms are not allowed in one command",permalink:"/docs/execute/troubleshooting/new-and-old-proxy-mechanisms-are-not-allowed-in-one-command"},next:{title:"How to free up more available RAM for Katalon Studio",permalink:"/docs/execute/troubleshooting/how-to-free-up-more-available-ram-for-katalon-studio"}},l={},d=[],u={toc:d};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows"},(0,r.kt)("a",{id:"troubleshooting-1651",class:"anchor_top_offset"}),(0,r.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Tests not loading when executing with Chrome version 92, 93, 94 in Windows"),(0,r.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section condition"},(0,r.kt)("p",{className:"p"},"When executing tests in KRE in console mode on Windows with Chrome version 92.x, 93.x or 94.x, you might come across the following error: ",(0,r.kt)("code",{className:"ph codeph"},"SessionNotCreatedException: Message: session not created from timeout: Timed out receiving message from renderer: 600.000"),".")),(0,r.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"bodydiv troubleSolution"},(0,r.kt)("section",{className:"section cause"},(0,r.kt)("p",{className:"p"},"This is an issue from Chrome version 93.x and 94.x that doesn't allow the ChromeDriver to start as a Windows service. Here are two workarounds for this issue:")),(0,r.kt)("section",{className:"section remedy"},(0,r.kt)("div",{className:"li step p"},(0,r.kt)("span",{className:"ph cmd"},"Set ",(0,r.kt)("code",{className:"ph codeph"},"--disable-gpu")," for the desired capability in ",(0,r.kt)("span",{className:"ph uicontrol"}," Project")," > ",(0,r.kt)("span",{className:"ph uicontrol"},"Settings")," > ",(0,r.kt)("span",{className:"ph uicontrol"},"Desired Capabilities")," > ",(0,r.kt)("span",{className:"ph uicontrol"},"Web UI")," > ",(0,r.kt)("span",{className:"ph uicontrol"}," Chrome"),". Click ",(0,r.kt)("span",{className:"ph uicontrol"},"Add"),", then input as follows:"),(0,r.kt)("div",{className:"itemgroup info"},(0,r.kt)("table",{className:"table anchor_top_offset",id:"troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c"},(0,r.kt)("caption",null),(0,r.kt)("colgroup",null,(0,r.kt)("col",{style:{width:"33.33333333333333%"}}),(0,r.kt)("col",{style:{width:"33.33333333333333%"}}),(0,r.kt)("col",{style:{width:"33.33333333333333%"}})),(0,r.kt)("thead",{className:"thead"},(0,r.kt)("tr",{className:!0},(0,r.kt)("th",{className:"entry anchor_top_offset",id:"troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__1"},"Name"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__2"},"Type"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__3"},"Value"))),(0,r.kt)("tbody",{className:"tbody"},(0,r.kt)("tr",{className:!0},(0,r.kt)("td",{className:"entry",headers:"troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__1 troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__2 troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__3 "},"args"),(0,r.kt)("td",{className:"entry",headers:"troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__1 troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__2 troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__3 "},"List"),(0,r.kt)("td",{className:"entry",headers:"troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__1 troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__2 troubleshooting-1651__1c42a666-d936-451b-af31-c3537ac1543c__entry__3 "},"--disable-gpu"))))),(0,r.kt)("div",{className:"itemgroup info"},(0,r.kt)("img",{className:"image",src:(0,a.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-testcloud/troubleshoot/TC-TROUBLESHOOT-Set-desired-capability.png"),alt:"Set desired capabilities in chrome"}),(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("div",{className:"itemgroup info"},"OR"),(0,r.kt)("div",{className:"itemgroup info"},"Downgrade to Chrome of lower version. To downgrade ChromeDriver versions, you can refer to this guide: ",(0,r.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio#id_2"},"Update or Downgrade WebDrivers"),".")))))}h.isMDXComponent=!0}}]);