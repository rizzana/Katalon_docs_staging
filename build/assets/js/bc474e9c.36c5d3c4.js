"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[25788],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var s=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,l=function(e,t){if(null==e)return{};var a,s,l={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=s.createContext({}),i=function(e){var t=s.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=i(e.components);return s.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=i(a),m=l,u=f["".concat(r,".").concat(m)]||f[m]||p[m]||n;return a?s.createElement(u,c(c({ref:t},d),{},{components:a})):s.createElement(u,c({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,c=new Array(n);c[0]=f;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:l,c[1]=o;for(var i=2;i<n;i++)c[i]=a[i];return s.createElement.apply(null,c)}return s.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=a(87462),l=(a(67294),a(3905)),n=a(44996);const c={id:"8f491d50-22b2-11ed-9930-0242fe3e4a3f",title:"Call test case in Katalon Studio",slug:"create-tests/create-test-cases/call-test-case-in-katalon-studio",hide_title:!0},o='<a id="concept-5529" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Call test case in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',r={unversionedId:"8f491d50-22b2-11ed-9930-0242fe3e4a3f",id:"8f491d50-22b2-11ed-9930-0242fe3e4a3f",title:"Call test case in Katalon Studio",description:"When generating test steps in a test case in Katalon Studio, you can also call another test case as a test step. This section guides you through how to call a test case in manual and script view.Note: For more details on how to apply test cases in data-driven tests, refer to Test Case Variables.",source:"@site/docs/8f491d50-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/create-test-cases/call-test-case-in-katalon-studio",permalink:"/docs/create-tests/create-test-cases/call-test-case-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"8f491d50-22b2-11ed-9930-0242fe3e4a3f",title:"Call test case in Katalon Studio",slug:"create-tests/create-test-cases/call-test-case-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Define Method",permalink:"/docs/create-tests/create-test-cases/statements/define-method"},next:{title:"Test Fixtures and Test Listeners (Test Hooks) in Katalon Studio",permalink:"/docs/create-tests/create-test-cases/test-fixtures-and-test-listeners-test-hooks-in-katalon-studio"}},i={},d=[{value:'<a id="task-6797" class="anchor_top_offset"/>Call test case in  manual view',id:"call-test-case-in--manual-view",level:2},{value:'<a id="task-5943" class="anchor_top_offset"/>Call test case in script view',id:"call-test-case-in-script-view",level:2}],p={toc:d};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"call-test-case-in-katalon-studio"},(0,l.kt)("a",{id:"concept-5529",class:"anchor_top_offset"}),(0,l.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Call test case in ",(0,l.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,l.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When generating test steps in a test case in ",(0,l.kt)("span",{className:"ph"},"Katalon Studio"),", you can also call another test case as a test step. This section guides you through how to call a test case in manual and script view.",(0,l.kt)("div",{className:"note note note_note"},(0,l.kt)("span",{className:"note__title"},"Note:")," ",(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},(0,l.kt)("p",{className:"p"},"For more details on how to apply test cases in data-driven tests, refer to ",(0,l.kt)("a",{className:"xref",href:"/docs/create-tests/data-driven-testing/test-case-variables"},"Test Case Variables"),"."))))),(0,l.kt)("h2",{id:"call-test-case-in--manual-view"},(0,l.kt)("a",{id:"task-6797",class:"anchor_top_offset"}),"Call test case in  manual view"),(0,l.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},(0,l.kt)("p",{className:"p"},"To call another test case in ",(0,l.kt)("span",{className:"ph uicontrol"},"Manual")," view, do as follows:")),(0,l.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,l.kt)("li",{className:"li step stepexpand"},(0,l.kt)("span",{className:"ph cmd"},"Open a test case in ",(0,l.kt)("span",{className:"ph uicontrol"},"Manual")," view. Click on the dropdown icon of the ",(0,l.kt)("span",{className:"ph uicontrol"},"Add")," button, then select ",(0,l.kt)("span",{className:"ph uicontrol"},"Call Test Case"),"."),(0,l.kt)("div",{className:"itemgroup info"},(0,l.kt)("img",{className:"image",width:500,src:(0,n.Z)("/8f4796b0-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Call test case"}))),(0,l.kt)("li",{className:"li step stepexpand"},(0,l.kt)("span",{className:"ph cmd"},"The ",(0,l.kt)("span",{className:"ph uicontrol"},"Test Case Browser")," dialog appears. This dialog shows all existing test cases within the project. Select a test case to be called, then click ",(0,l.kt)("span",{className:"ph uicontrol"},"OK"),". You can only call one test case at a time."),(0,l.kt)("div",{className:"itemgroup info"},(0,l.kt)("img",{className:"image",width:500,src:(0,n.Z)("/8f468540-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Test case browser"}))),(0,l.kt)("li",{className:"li step stepexpand"},(0,l.kt)("span",{className:"ph cmd"},"A ",(0,l.kt)("span",{className:"ph uicontrol"},"Call Test Case"),"\xa0step is now added with the selected test case above as its target."),(0,l.kt)("div",{className:"itemgroup info"},(0,l.kt)("img",{className:"image",width:600,src:(0,n.Z)("/8f45c1f0-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Call test case step"}),(0,l.kt)("div",{className:"note note note_note"},(0,l.kt)("span",{className:"note__title"},"Note:")," ",(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},"Once a test step is added as ",(0,l.kt)("span",{className:"ph uicontrol"},"Call Test Case"),", you cannot change it to another keyword.")))))),(0,l.kt)("h2",{id:"call-test-case-in-script-view"},(0,l.kt)("a",{id:"task-5943",class:"anchor_top_offset"}),"Call test case in script view"),(0,l.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"In script view, the ",(0,l.kt)("code",{className:"ph codeph"},"callTestCase")," method allows you to call another test case as a test step."),(0,l.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"li step p"},(0,l.kt)("span",{className:"ph cmd"},"Open a test case in script view, then refer to the following script:"),(0,l.kt)("div",{className:"itemgroup stepxmp"},(0,l.kt)("pre",{className:"pre codeblock"},(0,l.kt)("code",null,"import com.kms.katalon.core.model.FailureHandling ","\n","import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase ","\n","import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI ","\n","//Call test case using WebUI Class ","\n",'WebUI.callTestCase(findTestCase("Test Case ID"), ["key1":"value1", "key2":"value2", \u2026 , "keyN":"valueN"], FailureHandling.OPTIONAL) ',"\n","//Call test case using Mobile Class ","\n",'Mobile.callTestCase(findTestCase("Test Case ID"), ["key1":"value1", "key2":"value2", \u2026 , "keyN":"valueN"], FailureHandling.OPTIONAL)'))),(0,l.kt)("div",{className:"itemgroup info"},(0,l.kt)("table",{className:"table anchor_top_offset",id:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494"},(0,l.kt)("caption",null),(0,l.kt)("colgroup",null,(0,l.kt)("col",null),(0,l.kt)("col",null)),(0,l.kt)("thead",{className:"thead"},(0,l.kt)("tr",{className:!0},(0,l.kt)("th",{className:"entry anchor_top_offset",id:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__1"},"Items"),(0,l.kt)("th",{className:"entry anchor_top_offset",id:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__2"},"Description"))),(0,l.kt)("tbody",{className:"tbody"},(0,l.kt)("tr",{className:!0},(0,l.kt)("td",{className:"entry",headers:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__1 task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__2 "},"Test Case ID"),(0,l.kt)("td",{className:"entry",headers:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__1 task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__2 "},"The ID of the test case to be called. You can find this info in the test case properties. Learn more about test case properties here: ",(0,l.kt)("a",{className:"xref",href:"/docs/organize/manage-workspace/search-test-cases-in-katalon-studio#task-5205"},"View test artifact properties"),".")),(0,l.kt)("tr",{className:!0},(0,l.kt)("td",{className:"entry",headers:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__1 task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__2 "},(0,l.kt)("p",{className:"p"},"Parameters binding:"),(0,l.kt)("pre",{className:"pre codeblock"},(0,l.kt)("code",null,(0,l.kt)("code",{className:"ph codeph"},"[key1:value1, key2:value2, \u2026 , keyN:valueN]")))),(0,l.kt)("td",{className:"entry",headers:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__1 task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__2 "},(0,l.kt)("p",{className:"p"},"The list of input parameters for that test case, if any:"),(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},"Key(s): The defined ",(0,l.kt)("a",{className:"xref",href:"/docs/create-tests/data-driven-testing/test-case-variables#id_1"},"Test Case variables")," within the called test case."),(0,l.kt)("li",{className:"li"},"Value: the value to be used for the corresponding public variables.")))),(0,l.kt)("tr",{className:!0},(0,l.kt)("td",{className:"entry",headers:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__1 task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__2 "},"FailureHandling.option"),(0,l.kt)("td",{className:"entry",headers:"task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__1 task-5943__3d28a6bd-1af7-44b2-abcf-cf78fe92c494__entry__2 "},"The failure handling option for the current test step. This parameter is optional. See also: ",(0,l.kt)("a",{className:"xref",href:"/docs/maintain/configure-failure-handling-settings-in-katalon-studio"},"Failure Handling"),"."))))),(0,l.kt)("div",{className:"itemgroup stepxmp"},(0,l.kt)("p",{className:"p"},(0,l.kt)("img",{className:"image",width:700,src:(0,n.Z)("/8f488110-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Call test case in script view"}))),(0,l.kt)("div",{className:"itemgroup info"},(0,l.kt)("div",{className:"note note note_note"},(0,l.kt)("span",{className:"note__title"},"Note:")," ",(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},(0,l.kt)("p",{className:"p"},"To learn more about how to reuse test artifacts, refer to chapter 2 of our ",(0,l.kt)("span",{className:"ph"},"Katalon Academy")," course: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://academy.katalon.com/courses/test-execution-management/?utm_source=kat_docs&utm_medium=call_test_case",target:"_blank"},"Reusing Test Scripts"),". ")))))))}f.isMDXComponent=!0}}]);