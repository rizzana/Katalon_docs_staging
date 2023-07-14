"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[95899],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),s=a(44996);const r={id:"759b1ca0-f54d-11ed-878a-0242c7a41fd4",title:"PowerBI integration",slug:"integrations/unsupported-integrations/powerbi-integration",hide_title:!0},i='<a id="concept-7553" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>PowerBI integration',l={unversionedId:"759b1ca0-f54d-11ed-878a-0242c7a41fd4",id:"759b1ca0-f54d-11ed-878a-0242c7a41fd4",title:"PowerBI integration",description:"Note: Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform.",source:"@site/docs/759b1ca0-f54d-11ed-878a-0242c7a41fd4.md",sourceDirName:".",slug:"/integrations/unsupported-integrations/powerbi-integration",permalink:"/docs/integrations/unsupported-integrations/powerbi-integration",draft:!1,tags:[],version:"current",frontMatter:{id:"759b1ca0-f54d-11ed-878a-0242c7a41fd4",title:"PowerBI integration",slug:"integrations/unsupported-integrations/powerbi-integration",hide_title:!0},sidebar:"aSidebar",previous:{title:"Playwright integration",permalink:"/docs/integrations/unsupported-integrations/playwright-integration"},next:{title:"QR code scanning automation",permalink:"/docs/integrations/unsupported-integrations/qr-code-scanning-automation"}},c={},p=[{value:'<a id="task-6751" class="anchor_top_offset"/>How to automate PowerBI applications',id:"how-to-automate-powerbi-applications",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"powerbi-integration"},(0,o.kt)("a",{id:"concept-7553",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"PowerBI integration"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Please note that the use case presented here is a suggestion only and should be implemented with caution. It has not undergone quality assurance testing and is not officially supported by our platform. ")))),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This article guidelines how ",(0,o.kt)("span",{className:"ph"},"Katalon Studio")," helps users to automate Power BI applications. We will present two PowerBI applications: Power Apps portal and PowerBI with sample test cases in our ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio-samples/katalon-powewbi-sample.git",target:"_blank"},"GitHub sample repository"),"."),(0,o.kt)("h2",{id:"how-to-automate-powerbi-applications"},(0,o.kt)("a",{id:"task-6751",class:"anchor_top_offset"}),"How to automate PowerBI applications"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"The test cases for automation: ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Test case with Power Apps portal: Login into the power app portal and Create a flagging Request."),"     "),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Test case with PowerBI: Create a Dashboard, create content and delete dashboard")))),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In ",(0,o.kt)("span",{className:"ph"},"Katalon Studio"),", go to ",(0,o.kt)("span",{className:"ph menucascade"},(0,o.kt)("span",{className:"ph uicontrol"},"Project"),(0,o.kt)("abbr",{title:"and then"}," > "),(0,o.kt)("span",{className:"ph uicontrol"},"Settings"),(0,o.kt)("abbr",{title:"and then"}," > "),(0,o.kt)("span",{className:"ph uicontrol"},"Test Design"),(0,o.kt)("abbr",{title:"and then"}," > "),(0,o.kt)("span",{className:"ph uicontrol"},"WebUI"))," and change the priority of Xpath Locators.",(0,o.kt)("img",{className:"image",src:(0,s.Z)("/769b9cb0-f54d-11ed-878a-0242c7a41fd4.png"),alt:"change priority of Xpath locators"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Record test script via Katalon Recorder and save test objects and test cases. You can refer to ",(0,o.kt)("a",{className:"xref",href:"/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio"},"Record web utility in Katalon Studio"),"."),(0,o.kt)("div",{className:"itemgroup info"},"You can also use the test in our sample project, by updating the application URL, Username, and Password inside the Default Profile. Refer to ",(0,o.kt)("a",{className:"xref",href:"/docs/create-tests/data-driven-testing/execution-profile"},"Execution profile"),".",(0,o.kt)("img",{className:"image",src:(0,s.Z)("/751523c0-f54d-11ed-878a-0242c7a41fd4.png"),alt:"run PowerBI sample test"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Run the test execution. You can refer to ",(0,o.kt)("a",{className:"xref",href:"/docs/execute/test-execution-with-katalon-studio/execute-tests-with-katalon-studio-overview"},"Execute tests with Katalon Studio overview"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Verify the test execution result. You can refer to ",(0,o.kt)("a",{className:"xref",href:"/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/view-test-results-and-execution-logs-in-katalon-testops"},"View test results and execution logs in ",(0,o.kt)("span",{className:"ph"},"Katalon TestOps")),"."))))}d.isMDXComponent=!0}}]);