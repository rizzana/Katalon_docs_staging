"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[51471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,w=p["".concat(l,".").concat(u)]||p[u]||m[u]||n;return a?o.createElement(w,i(i({ref:t},d),{},{components:a})):o.createElement(w,i({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},60206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=a(87462),s=(a(67294),a(3905)),n=a(44996);const i={id:"98c12030-22b2-11ed-9930-0242fe3e4a3f",title:"Solving Wait-time issue with Katalon Studio",slug:"create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-wait-time-issue-with-katalon-studio",hide_title:!0},r='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Solving Wait-time issue with <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',l={unversionedId:"98c12030-22b2-11ed-9930-0242fe3e4a3f",id:"98c12030-22b2-11ed-9930-0242fe3e4a3f",title:"Solving Wait-time issue with Katalon Studio",description:"Automation execution usually does not carry out exactly as   scripted due to many factors involved during execution such as   network stability, internet bandwidth, the performance of the AUT,   and the performance of the executing computer. This article will   guide users through leveraging delayed time to handle such   situations.",source:"@site/docs/98c12030-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-wait-time-issue-with-katalon-studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-wait-time-issue-with-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"98c12030-22b2-11ed-9930-0242fe3e4a3f",title:"Solving Wait-time issue with Katalon Studio",slug:"create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-wait-time-issue-with-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Handling iFrame issue with Katalon Studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/handling-iframe-issue-with-katalon-studio"},next:{title:"How to Handle Alerts in Katalon Studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-alerts-in-katalon-studio"}},c={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"solving-wait-time-issue-with-katalon-studio"},(0,s.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Solving Wait-time issue with ",(0,s.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Automation execution usually does not carry out exactly as   scripted due to many factors involved during execution such as   network stability, internet bandwidth, the performance of the AUT,   and the performance of the executing computer. This article will   guide users through leveraging delayed time to handle such   situations."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"What is Wait?")," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Using delayed time is a common practice in test automation   scripts to create a pause in-between automation steps as you wait   for web elements to load or for the AUT to respond."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Here are some examples of test failure due to insufficient   waiting time:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("strong",{className:"ph b"},"False Fail:")," One of the most common failures is     when a script fails due to waiting on the application. It is often     caused by network latency, delayed database requests, or simply     because the system needs more time to process and respond to the     request."),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("strong",{className:"ph b"},"Targeted element not present on the page:")," This     kind of failure occurs when waiting for elements to be displayed or     rendered in the browser. The application may be up and running but     certain elements may not be loaded, thus causing test scripts to     fail.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"How to address those failures related to     Wait?")," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon provides keywords dedicated to delay explicitly. You can   use the following options to address the situation:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"       ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://docs.katalon.com/katalon-studio/docs/webui-wait-for-page-load.html",target:"_blank"},"         ",(0,s.kt)("strong",{className:"ph b"},"Wait           For Page Load"),"       "),"       ",(0,s.kt)("strong",{className:"ph b"},"\u2013")," This logic will       wait for a page to completely load before running a step in your       script."),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"       ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://docs.katalon.com/katalon-studio/docs/webui-wait-for-element-present.html",target:"_blank"},"         ",(0,s.kt)("strong",{className:"ph b"},"Wait           For Element Present"),"       "),"       ",(0,s.kt)("strong",{className:"ph b"},"\u2013")," It       happens sometimes that web elements take longer time to appear on       the page. This keyword pauses execution until the targeted element       appears on the page. Once the element appears, the test continues       to execute the next action."),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://docs.katalon.com/katalon-studio/docs/variable-types.html",target:"_blank"},"       ",(0,s.kt)("strong",{className:"ph b"},"Global         variable"),"     "),"     ",(0,s.kt)("strong",{className:"ph b"},"\u2013")," This variable has     the global scope, meaning that it is visible throughout the     program. Thus, you can use this variable in your test scripts     according to the response time of your web application. You may     consider defining 3 kinds of global variable in your test scripts,     for short, medium, and long waits.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For example: The script below shows the usage of a global   variable and the use of Katalon Studio built-in keyword ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://docs.katalon.com/katalon-studio/docs/mobile-wait-for-element-present.html",target:"_blank"},"     ",(0,s.kt)("strong",{className:"ph b"},"Wait       For Element Present"),"   ")," to deliberately wait for a   specific test element."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/solving_common_issue_wait_time/Wait-For-Element-Present.png")}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("strong",{className:"ph b"},"Figure 1: Katalon Studio test script")," "),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint</p>","\n","import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase","\n"," ","\n","import static com.kms.katalon.core.testdata.TestDataFactory.findTestData","\n"," ","\n","import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject","\n"," ","\n","import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint","\n"," ","\n","import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory","\n"," ","\n","import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords","\n"," ","\n","import com.kms.katalon.core.model.FailureHandling as FailureHandling","\n"," ","\n","import com.kms.katalon.core.testcase.TestCase as TestCase","\n"," ","\n","import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory","\n"," ","\n","import com.kms.katalon.core.testdata.TestData as TestData","\n"," ","\n","import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory","\n"," ","\n","import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository","\n"," ","\n","import com.kms.katalon.core.testobject.TestObject as TestObject","\n"," ","\n","import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords","\n"," ","\n","import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords","\n"," ","\n","import internal.GlobalVariable as GlobalVariable","\n"," ","\n","import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI","\n"," ","\n","import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile","\n"," ","\n","import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS","\n","\n")),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"'Open browser and navigate to Katalon site'","\n",'WebUI.openBrowser("https://katalon.com")',"\n"," ","\n","'Wait for Katalon Studio page to load with wait used as Global Variable'","\n","WebUI.waitForPageLoad(GlobalVariable.G_Timeout_Small)","\n"," ","\n","'Click on \\'Login\\'","  ","button to navigate to Login page'","\n","WebUI.click(findTestObject('Page_KatalonHomepage/btn_Login'))","\n"," ","\n","'Input username'","\n","WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)","\n"," ","\n","'Input password'","\n","WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)","\n"," ","\n","'Click on \\'Login\\'","  ","button to login'","\n","WebUI.click(findTestObject('Page_KatalonHomepage/btn_Submit'))","\n"," ","\n","'Wait for failed message to be present'","\n","WebUI.waitForElementPresent(findTestObject('Page_KataloLogin/div_LoginMessage'), GlobalVariable.G_Timeout_Small)","\n"," ","\n","WebUI.closeBrowser()","\n","\n")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("strong",{className:"ph b"},"When to use Wait Commands")," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Quite often test execution get failed due to the exceptions such   as '",(0,s.kt)("strong",{className:"ph b"},"NoSuchElementException"),"',   '",(0,s.kt)("strong",{className:"ph b"},"ElementNotFoundException"),"',   '",(0,s.kt)("strong",{className:"ph b"},"ElementNotVisibleException"),"'. In order to handle   these exceptions, conditional Synchronization has to be   implemented. Katalon Studio supports many built in \"",(0,s.kt)("strong",{className:"ph b"},"Wait     for\u2026."),'" keywords to deal with such exceptions. For   example:'),(0,s.kt)("table",{xmlns:"http://www.w3.org/1999/xhtml",className:"table anchor_top_offset",id:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e"},(0,s.kt)("caption",null),(0,s.kt)("thead",{className:"thead"},(0,s.kt)("tr",{className:!0},(0,s.kt)("th",{className:"entry anchor_top_offset",id:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1"},"Keyword"),(0,s.kt)("th",{className:"entry anchor_top_offset",id:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2"},"Description"))),(0,s.kt)("tbody",{className:"tbody"},(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"         ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-present"},"Wait           For Element Present"),"       "),(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"Wait for the given element to present (appear) within the given         time in seconds.")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"         ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-visible"},"Wait           For Element Visible"),"       "),(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"Wait until the given web element is visible within         timeout.")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"         ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-alert"},"Wait For           Alert"),"       "),(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"Wait for a browser's alert to present.")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"         ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-clickable"},"Wait for           Element Clickable"),"       "),(0,s.kt)("td",{className:"entry",headers:"id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__1 id__045a8c9b-6dc0-42c6-ab25-62dfc9728e4e__entry__2 "},"Wait for the given element to be clickable within the given         time in seconds.")))))}p.isMDXComponent=!0}}]);