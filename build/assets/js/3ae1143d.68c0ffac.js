"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[54310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),w=r,m=p["".concat(l,".").concat(w)]||p[w]||u[w]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(44996);const o={id:"99b989f0-22b2-11ed-9930-0242fe3e4a3f",title:"Understand waiting keywords in Katalon Studio",slug:"create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio",hide_title:!0},i='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Understand waiting keywords in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',l={unversionedId:"99b989f0-22b2-11ed-9930-0242fe3e4a3f",id:"99b989f0-22b2-11ed-9930-0242fe3e4a3f",title:"Understand waiting keywords in Katalon Studio",description:"When a condition is not met, Katalon Studio returns a result (either True or False) with a warning message regardless of what failure handling settings you specified.",source:"@site/docs/99b989f0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"99b989f0-22b2-11ed-9930-0242fe3e4a3f",title:"Understand waiting keywords in Katalon Studio",slug:"create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"How to check element status in conditional statement in Katalon Studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio"},next:{title:"Using autoIT for authentication in Katalon Studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/using-autoit-for-authentication-in-katalon-studio"}},d={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understand-waiting-keywords-in-katalon-studio"},(0,r.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,r.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Understand waiting keywords in ",(0,r.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When a condition is not met, Katalon Studio returns a result (either ",(0,r.kt)("em",{className:"ph i"},"True")," or ",(0,r.kt)("em",{className:"ph i"},"False"),") with a warning message regardless of what failure handling settings you specified."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In other words, Katalon Studio continues running despite a test's failure. This behavior is similar to choosing the ",(0,r.kt)("em",{className:"ph i"},"Optional")," value for failure handling. See: ",(0,r.kt)("a",{className:"xref",href:"/docs/maintain/configure-failure-handling-settings-in-katalon-studio"},"Failure Handling"),"."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In case the waiting keyword fails due to such errors as a network problem, session timeout, or because the AUT didn't start, failure handling then applies your specified settings."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For example, if you use the waiting keyword, ",(0,r.kt)("code",{className:"ph codeph"},"WaitForElementPresent"),", Katalon Studio only returns a ",(0,r.kt)("em",{className:"ph i"},"True")," or ",(0,r.kt)("em",{className:"ph i"},"False")," result in respect of the element's presence. If the element is not present on the current view, Katalon Studio returns a ",(0,r.kt)("em",{className:"ph i"},"False")," result and shows a warning message (Failure Handling = Optional)."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,s.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/understand-waiting-keywords/waiting-keyword.png"),alt:"waiting keywords"}),(0,r.kt)("br",null),(0,r.kt)("br",null)," "),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"If you want to let the test case fail due to the element not being present, use the following script to make it an assertion:"),(0,r.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,r.kt)("code",null,"boolean present = Mobile.waitForElementPresent(findTestObject('...'), 10)","\n","\n","assert present","\n")))}p.isMDXComponent=!0}}]);