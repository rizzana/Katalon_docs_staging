"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[17989],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>h});var o=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,s=function(t,e){if(null==t)return{};var n,o,s={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,s=t.mdxType,r=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=c(n),h=s,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(d,a(a({ref:e},m),{},{components:n})):o.createElement(d,a({ref:e},m))}));function h(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:s,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57242:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=n(87462),s=(n(67294),n(3905)),r=n(44996);const a={id:"b816ddf0-10b7-11ee-bd0e-0242c7a41fd4",title:"Troubleshooting autonomous test generation issues",slug:"proof-of-concept/autonomous-test-generation/troubleshooting-autonomous-test-generation-issues",hide_title:!0},i='<a id="concept-9513" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Troubleshooting autonomous test generation issues',l={unversionedId:"b816ddf0-10b7-11ee-bd0e-0242c7a41fd4",id:"b816ddf0-10b7-11ee-bd0e-0242c7a41fd4",title:"Troubleshooting autonomous test generation issues",description:"This document lists out all the common issues and solutions you can encounter when setting up and using the Katalon Autonomous Test Generation feature (ATG).",source:"@site/docs/b816ddf0-10b7-11ee-bd0e-0242c7a41fd4.md",sourceDirName:".",slug:"/proof-of-concept/autonomous-test-generation/troubleshooting-autonomous-test-generation-issues",permalink:"/docs/proof-of-concept/autonomous-test-generation/troubleshooting-autonomous-test-generation-issues",draft:!1,tags:[],version:"current",frontMatter:{id:"b816ddf0-10b7-11ee-bd0e-0242c7a41fd4",title:"Troubleshooting autonomous test generation issues",slug:"proof-of-concept/autonomous-test-generation/troubleshooting-autonomous-test-generation-issues",hide_title:!0},sidebar:"aSidebar",previous:{title:"Autonomous test generation with Katalon AI",permalink:"/docs/proof-of-concept/autonomous-test-generation/autonomous-test-generation-with-katalon-ai"},next:{title:"StudioAssist in Katalon Studio",permalink:"/docs/proof-of-concept/studioassist-in-katalon-studio"}},c={},m=[{value:"Incorrect domain pattern for application under test",id:"incorrect-domain-pattern-for-application-under-test",level:2},{value:"Incorrect URL pattern for test environment",id:"incorrect-url-pattern-for-test-environment",level:2},{value:"Incorrect credentials to log into a test environment",id:"incorrect-credentials-to-log-into-a-test-environment",level:2},{value:"Incorrect Git username when integrating with a script repository",id:"incorrect-git-username-when-integrating-with-a-script-repository",level:2},{value:"Incorrect script repository branch name",id:"incorrect-script-repository-branch-name",level:2}],p={toc:m};function u(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"troubleshooting-autonomous-test-generation-issues"},(0,s.kt)("a",{id:"concept-9513",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Troubleshooting autonomous test generation issues"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This document lists out all the common issues and solutions you can encounter when setting up and using the Katalon Autonomous Test Generation feature (ATG)."),(0,s.kt)("h2",{id:"incorrect-domain-pattern-for-application-under-test"},"Incorrect domain pattern for application under test"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Issue"),": When adding an application under test (AUT), you need to  enter one or several domains (not URLs) associated with the AUT. A correct domain pattern must follow these rules:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"No protocol prefix (http:// or https://) and \u2018www\u2019 prefix."),(0,s.kt)("li",{className:"li"},"No trailing slash.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Some examples of correct domains:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"*.testing.com"),(0,s.kt)("li",{className:"li"},"testing.com.*"),(0,s.kt)("li",{className:"li"},"testing.*.com"),(0,s.kt)("li",{className:"li"},"testing.com")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Solution"),": Currently, you cannot edit an existing AUT, you need to add a new AUT with correct domain pattern."),(0,s.kt)("h2",{id:"incorrect-url-pattern-for-test-environment"},"Incorrect URL pattern for test environment"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Issue"),": When configuring a test environment for your AUT,  you need to enter a URL (not a domain) representing the test environment of the AUT. The valid   URL pattern must follow these rules:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},'Include protocol prefix, such as "https://".'),(0,s.kt)("li",{className:"li"},"No trailing slash.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Some examples of correct URLs:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"https://www.testing.com"),(0,s.kt)("li",{className:"li"},"http://testing.com")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Solution"),": Currently, you cannot edit an existing test environment, so you need to add a new test environment with a valid URL and set the environment as the default."),(0,s.kt)("h2",{id:"incorrect-credentials-to-log-into-a-test-environment"},"Incorrect credentials to log into a test environment"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Issue"),": If the test environment requires login credentials and the input username or password is incorrect, the Katalon AI Agent cannot access and run on the environment."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Solution"),": Currently, you cannot edit an existing test environment, so you need to add a new test environment with a valid credentials and set the environment as the default."),(0,s.kt)("h2",{id:"incorrect-git-username-when-integrating-with-a-script-repository"},"Incorrect Git username when integrating with a script repository"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Issue"),": When configuring script repository in ",(0,s.kt)("span",{className:"ph"},"TestOps"),", you can input email or Git username in the ",(0,s.kt)("span",{className:"ph uicontrol"},"Username")," field. However, Katalon AI Agent cannot commit test cases to a script repository with an email form username."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",width:400,src:(0,r.Z)("/b809be90-10b7-11ee-bd0e-0242c7a41fd4.png")})),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Solution"),": To work with ATG, you need to edit the integrated script repository with a Git username instead of email."),(0,s.kt)("h2",{id:"incorrect-script-repository-branch-name"},"Incorrect script repository branch name"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Issue"),": Katalon AI Agent cannot commit test cases on a branch that has  special characters in the name.",(0,s.kt)("img",{className:"image",width:400,src:(0,r.Z)("/b7fe25d0-10b7-11ee-bd0e-0242c7a41fd4.png")})),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," We recommend the following:",(0,s.kt)("ol",{className:"ol"},(0,s.kt)("li",{className:"li"},"Use the default-generated \u2018main\u2019 branch."),(0,s.kt)("li",{className:"li"},(0,s.kt)("div",{className:"p"},"Replace slash (/) in custom branch names: ",(0,s.kt)("ol",{className:"ol",type:"a"},(0,s.kt)("li",{className:"li"},"Unsupported name: refs/heads/feature/test"),(0,s.kt)("li",{className:"li"},"Supported name: refs/heads/feature_test")))))),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Solution"),": Correct the branch name and re-connect to the relevant script repository to get the updated branch (edit the script repository to trigger re-connecting)."))}u.isMDXComponent=!0}}]);