"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[50216],{3905:(e,t,s)=>{s.d(t,{Zo:()=>m,kt:()=>d});var a=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,o=function(e,t){if(null==e)return{};var s,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var r=a.createContext({}),c=function(e){var t=a.useContext(r),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},m=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var s=e.components,o=e.mdxType,n=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(s),d=o,f=u["".concat(r,".").concat(d)]||u[d]||p[d]||n;return s?a.createElement(f,l(l({ref:t},m),{},{components:s})):a.createElement(f,l({ref:t},m))}));function d(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=s.length,l=new Array(n);l[0]=u;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=s[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,s)}u.displayName="MDXCreateElement"},86843:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var a=s(87462),o=(s(67294),s(3905)),n=s(44996);const l={id:"e79e4b70-76c1-11ed-a602-0242cfbc79b5",title:"Custom Fields and Tags",slug:"organize/custom-field-and-tags/custom-fields-and-tags",hide_title:!0},i='<a id="concept-2460" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Custom Fields and Tags',r={unversionedId:"e79e4b70-76c1-11ed-a602-0242cfbc79b5",id:"e79e4b70-76c1-11ed-a602-0242cfbc79b5",title:"Custom Fields and Tags",description:"Custom fields &amp; tags are great tools to create and label meta-data to your Katalon test artifacts such as test case, test run schedule, test execution. You can create as many attributes to your test entities as you need, then categorize, organize or filter them with ease throughout the testing cycle on Katalon Platform.",source:"@site/docs/e79e4b70-76c1-11ed-a602-0242cfbc79b5.md",sourceDirName:".",slug:"/organize/custom-field-and-tags/custom-fields-and-tags",permalink:"/docs/organize/custom-field-and-tags/custom-fields-and-tags",draft:!1,tags:[],version:"current",frontMatter:{id:"e79e4b70-76c1-11ed-a602-0242cfbc79b5",title:"Custom Fields and Tags",slug:"organize/custom-field-and-tags/custom-fields-and-tags",hide_title:!0},sidebar:"aSidebar",previous:{title:"View test scripts in Katalon TestOps",permalink:"/docs/organize/view-test-scripts-in-katalon-platform/view-test-scripts-in-katalon-testops"},next:{title:"Add Custom Fields and Tags to test cases",permalink:"/docs/organize/manage-tests/test-case/add-custom-fields-and-tags-to-test-cases"}},c={},m=[{value:'<a id="task-583" class="anchor_top_offset"/>Create Custom Fields in Configurations',id:"create-custom-fields-in-configurations",level:2},{value:'<a id="task-2690" class="anchor_top_offset"/>Edit your Custom Fields',id:"edit-your-custom-fields",level:2},{value:'<a id="task-9216" class="anchor_top_offset"/>Delete your Custom Field',id:"delete-your-custom-field",level:2}],p={toc:m};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-fields-and-tags"},(0,o.kt)("a",{id:"concept-2460",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Custom Fields and Tags"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Custom fields & tags are great tools to create and label meta-data to your Katalon test artifacts such as test case, test run schedule, test execution. You can create as many attributes to your test entities as you need, then categorize, organize or filter them with ease throughout the testing cycle on Katalon Platform. "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Custom field is a pair of key and value meta-data that you can assign to then differentiate among your test entities, for example: ",(0,o.kt)("strong",{className:"ph b"},"testPriority: "),"High, or, ",(0,o.kt)("strong",{className:"ph b"},"scriptLanguage: "),"Java",(0,o.kt)("strong",{className:"ph b"},".")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Tag is a single-word string value (not including a white-space), similar to a hashtag, that you can assign to tests entities and query with them later on. "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Custom fields can only be created in ",(0,o.kt)("span",{className:"ph uicontrol"},"Configurations")," section of Katalon Platform, while Tags can be created on-the-move in the test case detail, test run detail and test result detail module. "),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Custom fields and tags empower you throughout testing cycles on ",(0,o.kt)("span",{className:"ph"},"Katalon Platform"),":",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"Assign custom fields and tags to your ",(0,o.kt)("a",{className:"xref",href:"/docs/organize/manage-tests/test-case/add-custom-fields-and-tags-to-test-cases"},"test case")," and ",(0,o.kt)("a",{className:"xref",href:"/docs/organize/manage-tests/test-case/search-a-test-case-by-custom-fields-and-tags"},"query your test case")," by them."),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Assign custom fields and tags to ",(0,o.kt)("a",{className:"xref",href:"/docs/execute/schedule-test-execution/schedule-test-runs-in-testops#id_2"},"test run schedules")," or ",(0,o.kt)("a",{className:"xref",href:"/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/view-test-results-and-execution-logs-in-katalon-testops#task-6012"},"test run results"),".")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Assign custom fields and tags to a ",(0,o.kt)("a",{className:"xref",href:"/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine#concept-9115__dl-544"},"test execution")," via ",(0,o.kt)("span",{className:"ph"},"Katalon Runtime Engine")," command-line interface.")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Assign custom fields and tags when you ",(0,o.kt)("a",{className:"xref",href:"/docs/analyze/reports/upload-test-reports/upload-junit-and-katalon-studio-reports-to-testops-manually"},"manually import your test run results to TestOps"),".")))),(0,o.kt)("h2",{id:"create-custom-fields-in-configurations"},(0,o.kt)("a",{id:"task-583",class:"anchor_top_offset"}),"Create Custom Fields in Configurations"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Login to ",(0,o.kt)("span",{className:"ph"},"Katalon TestOps"),", then navigate to ",(0,o.kt)("span",{className:"ph uicontrol"},"Configurations")," > ",(0,o.kt)("span",{className:"ph uicontrol"},"Custom Fields"),"."),(0,o.kt)("div",{className:"itemgroup stepresult"},"The ",(0,o.kt)("span",{className:"ph uicontrol"},"Custom Fields")," page appears.",(0,o.kt)("img",{className:"image",src:(0,n.Z)("/e0f40e90-76c1-11ed-a602-0242cfbc79b5.png"),alt:"TestOps custom fields page"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Click the ",(0,o.kt)("span",{className:"ph uicontrol"},"+ Create new customer field")," button."),(0,o.kt)("div",{className:"itemgroup stepresult"},"The ",(0,o.kt)("span",{className:"ph uicontrol"},"Create new custom field")," dialog appears. ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("/e65be060-76c1-11ed-a602-0242cfbc79b5.png"),alt:"Create new custom field"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"For ",(0,o.kt)("span",{className:"ph uicontrol"},"Key"),", enter a key for your custom field, for example: ",(0,o.kt)("strong",{className:"ph b"},"priority"),", ",(0,o.kt)("strong",{className:"ph b"},"testing-type"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"For ",(0,o.kt)("span",{className:"ph uicontrol"},"Display Name"),", enter a name for your key what would display on Katalon Platform interface, for example: ",(0,o.kt)("strong",{className:"ph b"},"Priority"),", ",(0,o.kt)("strong",{className:"ph b"},"Testing Type"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"For ",(0,o.kt)("span",{className:"ph uicontrol"},"Values"),", enter a value for your key, for example ",(0,o.kt)("strong",{className:"ph b"},"High, Medium")," or ",(0,o.kt)("strong",{className:"ph b"},"Low")," for ",(0,o.kt)("strong",{className:"ph b"},"Priority")," key; ",(0,o.kt)("strong",{className:"ph b"},"API or Regression")," for ",(0,o.kt)("strong",{className:"ph b"},"Testing Type")," key. You can create multiple values for a key by selecting ",(0,o.kt)("span",{className:"ph uicontrol"},"+ Add new value"),"."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,n.Z)("/02188dd0-76c2-11ed-a602-0242cfbc79b5.png"),alt:"custom fields values"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Click ",(0,o.kt)("span",{className:"ph uicontrol"},"Create"),". "))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"Your custom field is created successfully. "),(0,o.kt)("h2",{id:"edit-your-custom-fields"},(0,o.kt)("a",{id:"task-2690",class:"anchor_top_offset"}),"Edit your Custom Fields"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"To edit your custom field, select the ",(0,o.kt)("span",{className:"ph uicontrol"},"Edit")," button."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,n.Z)("/fb3084a0-76c1-11ed-a602-0242cfbc79b5.png"),alt:"edit custom field button"})),(0,o.kt)("div",{className:"itemgroup stepresult"},"The Edit custom field dialog appears. ")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"You can edit display name and values of your custom field,  but not the key. When you finish editing, select ",(0,o.kt)("span",{className:"ph uicontrol"},"Save Changes"),".",(0,o.kt)("img",{className:"image",src:(0,n.Z)("/e24ac4f0-76c1-11ed-a602-0242cfbc79b5.png"),alt:"Edit custom field dialog"})))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"Your custom field is updated and it will reflect in any test case, test run where it is assigned."),(0,o.kt)("h2",{id:"delete-your-custom-field"},(0,o.kt)("a",{id:"task-9216",class:"anchor_top_offset"}),"Delete your Custom Field"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"To delete your custom field, click the ",(0,o.kt)("span",{className:"ph uicontrol"},"Delete")," button. "),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,n.Z)("/e2cdfeb0-76c1-11ed-a602-0242cfbc79b5.png"),alt:"delete custom field"}),"The delete custom field warning dialog appears.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Deleting a custom field will also remove it  from any test entities such as test case, test run  in your project. When you are sure, select ",(0,o.kt)("span",{className:"ph uicontrol"},"Delete"),"."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,n.Z)("/e5eb9260-76c1-11ed-a602-0242cfbc79b5.png"),alt:"delete custom field dialog"})))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"Your custom field is deleted."))}u.isMDXComponent=!0}}]);