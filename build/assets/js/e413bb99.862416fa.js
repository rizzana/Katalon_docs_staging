"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[24016],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=s.createContext({}),p=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return s.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return a?s.createElement(f,l(l({ref:t},c),{},{components:a})):s.createElement(f,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=a(87462),n=(a(67294),a(3905)),r=a(44996);const l={id:"8e5d84d0-22b2-11ed-9930-0242fe3e4a3f",title:"Create and edit releases in TestOps",slug:"plan/create-and-edit-releases-in-testops",hide_title:!0},o='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Create and edit releases in TestOps',i={unversionedId:"8e5d84d0-22b2-11ed-9930-0242fe3e4a3f",id:"8e5d84d0-22b2-11ed-9930-0242fe3e4a3f",title:"Create and edit releases in TestOps",description:"You can natively create and edit releases in Katalon TestOps and link your test runs to it.",source:"@site/docs/8e5d84d0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/plan/create-and-edit-releases-in-testops",permalink:"/docs/plan/create-and-edit-releases-in-testops",draft:!1,tags:[],version:"current",frontMatter:{id:"8e5d84d0-22b2-11ed-9930-0242fe3e4a3f",title:"Create and edit releases in TestOps",slug:"plan/create-and-edit-releases-in-testops",hide_title:!0},sidebar:"aSidebar",previous:{title:"Introduction to test planning",permalink:"/docs/plan/introduction-to-test-planning"},next:{title:"Create and manage builds in Katalon TestOps",permalink:"/docs/plan/create-and-manage-builds-in-katalon-testops"}},p={},c=[{value:'<a id="task-5617" class="anchor_top_offset"/>Create a new release in TestOps',id:"create-a-new-release-in-testops",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-and-edit-releases-in-testops"},(0,n.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,n.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Create and edit releases in TestOps"),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can natively create and edit releases in ",(0,n.kt)("span",{className:"ph"},"Katalon TestOps")," and link your test runs to it."),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Alternatively, if you have integrated ",(0,n.kt)("span",{className:"ph"},"Katalon TestOps")," with Jira, you can also populate Jira releases in TestOps. See: ",(0,n.kt)("a",{className:"xref",href:"/docs/plan/integration-for-test-planning/populate-jira-releases"},"Populate Jira releases"),"."),(0,n.kt)("h2",{id:"create-a-new-release-in-testops"},(0,n.kt)("a",{id:"task-5617",class:"anchor_top_offset"}),"Create a new release in TestOps"),(0,n.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"To create a new release in ",(0,n.kt)("span",{className:"ph"},"Katalon TestOps"),", follow these steps:"),(0,n.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Sign in to ",(0,n.kt)("a",{className:"xref j-external-link",href:"https://testops.katalon.io/login",target:"_blank"},(0,n.kt)("span",{className:"ph"},"Katalon TestOps"))," and go to your project."),(0,n.kt)("div",{className:"itemgroup stepresult"},"The project ",(0,n.kt)("span",{className:"ph uicontrol"},"Dashboard")," page appears.")),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Go to ",(0,n.kt)("span",{className:"ph uicontrol"},"Planning")," > ",(0,n.kt)("span",{className:"ph uicontrol"},"Releases"),"."),(0,n.kt)("div",{className:"itemgroup stepresult"},"The ",(0,n.kt)("span",{className:"ph uicontrol"},"Releases")," page appears as below.",(0,n.kt)("p",{className:"p"},(0,n.kt)("img",{className:"image",src:(0,r.Z)("/8e5c9a70-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"The release page appears in TestOps"})))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Click on the ",(0,n.kt)("span",{className:"ph uicontrol"},"Create Release")," button at the top right corner."),(0,n.kt)("div",{className:"itemgroup stepresult"},"The ",(0,n.kt)("span",{className:"ph uicontrol"},"Create Release ")," page appears as below.",(0,n.kt)("p",{className:"p"},(0,n.kt)("img",{className:"image",src:(0,r.Z)("/8e5d36b0-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Create releases in TestOps"})))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Fill in the required information:"),(0,n.kt)("div",{className:"itemgroup info"},(0,n.kt)("ul",{className:"ul"},(0,n.kt)("li",{className:"li"},(0,n.kt)("span",{className:"ph uicontrol"},"Name"),": your Release version (e.g., Release 8.0.0)."),(0,n.kt)("li",{className:"li"},(0,n.kt)("span",{className:"ph uicontrol"},"Start Date"),": when you want to start your Release."),(0,n.kt)("li",{className:"li"},(0,n.kt)("span",{className:"ph uicontrol"},"Release Date"),": when you want to end your Release.")))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Click ",(0,n.kt)("span",{className:"ph uicontrol"},"Create"),"."))),(0,n.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"You have successfully created a new release in TestOps."),(0,n.kt)("nav",{xmlns:"http://www.w3.org/1999/xhtml",role:"navigation",className:"related-links"},(0,n.kt)("div",{className:"linklist"},(0,n.kt)("strong",null,"Next step"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("ul",{className:"linklist"},(0,n.kt)("li",{className:"linklist"},(0,n.kt)("a",{className:"link",href:"/docs/plan/link-test-runs-to-a-release-in-testops"},"Link test runs to a release in TestOps"))))))}m.isMDXComponent=!0}}]);