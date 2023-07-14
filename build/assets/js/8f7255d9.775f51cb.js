"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[12988],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>p});var s=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,s,o=function(t,e){if(null==t)return{};var a,s,o={},i=Object.keys(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var r=s.createContext({}),c=function(t){var e=s.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},m=function(t){var e=c(t.components);return s.createElement(r.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=c(a),p=o,h=d["".concat(r,".").concat(p)]||d[p]||u[p]||i;return a?s.createElement(h,n(n({ref:e},m),{},{components:a})):s.createElement(h,n({ref:e},m))}));function p(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,n=new Array(i);n[0]=d;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:o,n[1]=l;for(var c=2;c<i;c++)n[c]=a[c];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55270:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>m});var s=a(87462),o=(a(67294),a(3905)),i=a(44996);const n={id:"8ba62d00-22b2-11ed-9930-0242fe3e4a3f",title:"Terminate execution conditionally",slug:"execute/configurations-for-test-execution/terminate-execution-conditionally",hide_title:!0},l='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Terminate execution conditionally',r={unversionedId:"8ba62d00-22b2-11ed-9930-0242fe3e4a3f",id:"8ba62d00-22b2-11ed-9930-0242fe3e4a3f",title:"Terminate execution conditionally",description:"In this article, you will learn how to terminate a test execution automatically by configuring a maximum number of test failures in manual view or via the command-line option, with examples using common use cases.",source:"@site/docs/8ba62d00-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/execute/configurations-for-test-execution/terminate-execution-conditionally",permalink:"/docs/execute/configurations-for-test-execution/terminate-execution-conditionally",draft:!1,tags:[],version:"current",frontMatter:{id:"8ba62d00-22b2-11ed-9930-0242fe3e4a3f",title:"Terminate execution conditionally",slug:"execute/configurations-for-test-execution/terminate-execution-conditionally",hide_title:!0},sidebar:"aSidebar",previous:{title:"Specify a path to Android SDK root folder",permalink:"/docs/execute/configurations-for-test-execution/specify-a-path-to-android-sdk-root-folder"},next:{title:"Troubleshooting common execution issues",permalink:"/docs/execute/troubleshooting/troubleshooting-common-execution-issues"}},c={},m=[{value:'<a id="id_1" class="anchor_top_offset"/>Set a maximum number of test failures',id:"set-a-maximum-number-of-test-failures",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>With Command Builder',id:"with-command-builder",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>With Command-line option',id:"with-command-line-option",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Report Incomplete Test Suite',id:"report-incomplete-test-suite",level:2},{value:'<a id="id_5" class="anchor_top_offset"/>Troubleshoot',id:"troubleshoot",level:2},{value:'<a id="id_6" class="anchor_top_offset"/>Common Use Cases',id:"common-use-cases",level:2},{value:'<a id="id_7" class="anchor_top_offset"/>Terminate Test Suite Execution',id:"terminate-test-suite-execution",level:3},{value:'<a id="id_8" class="anchor_top_offset"/>Terminate Test Suite Collection Executed In Sequential Mode',id:"terminate-test-suite-collection-executed-in-sequential-mode",level:3},{value:'<a id="id_9" class="anchor_top_offset"/>Terminate Test Suite Collection Executed In Parallel Mode',id:"terminate-test-suite-collection-executed-in-parallel-mode",level:3}],u={toc:m};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,s.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terminate-execution-conditionally"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Terminate execution conditionally"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In this article, you will learn how to terminate a test execution automatically by configuring a maximum number of test failures in manual view or via the command-line option, with examples using common use cases."),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note important note_important"},(0,o.kt)("span",{className:"note__title"},"Important:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"Katalon Studio ",(0,o.kt)("strong",{className:"ph b"},"version 8.1.0 onwards")," "),(0,o.kt)("li",{className:"li"},"Katalon Runtime Engine ",(0,o.kt)("strong",{className:"ph b"},"version 8.1.0 onwards")," "),(0,o.kt)("li",{className:"li"},"A Katalon Runtime Engine License. See ",(0,o.kt)("a",{className:"xref",href:"/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/license-overview"},"Katalon licensing"),"."))),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Consider using the condition to terminate execution when a set of tests is mature and takes hours to finish. Once a significant number of tests fail, they may fail for the same cause. This feature helps you save time, provide early feedback, and avoid the execution of unnecessary test cases."),(0,o.kt)("h2",{id:"set-a-maximum-number-of-test-failures"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Set a maximum number of test failures"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),(0,o.kt)("p",{className:"p"},(0,o.kt)("strong",{className:"ph b"},"What is a test failure?")),(0,o.kt)("p",{className:"p"},"A test failure is a failed test case or test iteration in an execution."),(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"1 test case fails = 1 test failure"),(0,o.kt)("li",{className:"li"},"1 retried test case fails = 1 test failure"),(0,o.kt)("li",{className:"li"},"1 test iteration (test case + data row) fails = 1 test failure"),(0,o.kt)("li",{className:"li"},"1 retried test iteration fails = 1 test failure"))),(0,o.kt)("h3",{id:"with-command-builder"},(0,o.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"With Command Builder"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),(0,o.kt)("p",{className:"p"},"For detailed instruction on how to run a test execution in Console mode, see ",(0,o.kt)("a",{className:"xref",href:"/docs/execute/katalon-runtime-engine/get-started-with-katalon-runtime-engine#id_10"},"Command Builder"),".")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Go to Katalon Studio and set a maximum number of test failures."),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the toolbar, select ",(0,o.kt)("strong",{className:"ph b"},"Build CMD")," (Build Command)."),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the ",(0,o.kt)("strong",{className:"ph b"},"Generate Command for Console Mode > Execution Configurations"),", check the box ",(0,o.kt)("strong",{className:"ph b"},"Terminate the execution once the total number of test failures reaches this threshold"),". In the text field, input your desired maximum number of test failures."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/condition%20to%20stop%20-%202.png"),alt:"command builder"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"     ",(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),"        ",(0,o.kt)("p",{className:"p"},"The maximum test cases failure must be greater than 0 and a natural number (1, 2, 3...). Otherwise, Katalon Studio will not start the execution."),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"After you are done with the configuration, click ",(0,o.kt)("strong",{className:"ph b"},"Generate command"),". A command containing the ",(0,o.kt)("code",{className:"ph codeph"},"-maxFailedTests")," option is generated."),"     ",(0,o.kt)("p",{className:"p"},"Copy the generated command to use in Console mode."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/generate%20command%201.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"     ",(0,o.kt)("p",{className:"p"},"You can also execute the test with the property file. To save the property file in the ",(0,o.kt)("strong",{className:"ph b"},"Execution Configurations")," dialog, click ",(0,o.kt)("strong",{className:"ph b"},"Generate property file > Save"),"."),"   ")),(0,o.kt)("h3",{id:"with-command-line-option"},(0,o.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"With Command-line option"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Use the command-line option: ",(0,o.kt)("code",{className:"ph codeph"},"-maxFailedTests=T"),", where T is the maximum number of test failures."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/Command-line-2.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"See ",(0,o.kt)("a",{className:"xref",href:"/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine"},"Katalonc command-line option")," for the list of common command-line options supported."),(0,o.kt)("h2",{id:"report-incomplete-test-suite"},(0,o.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Report Incomplete Test Suite"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When a test suite has at least 1 test case ",(0,o.kt)("strong",{className:"ph b"},"Not     Run"),", the final status of that test suite is marked   ",(0,o.kt)("strong",{className:"ph b"},"Incomplete"),"."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For test suites marked ",(0,o.kt)("strong",{className:"ph b"},"Incomplete")," or   ",(0,o.kt)("strong",{className:"ph b"},"Not started yet"),", Katalon Studio automatically   sends attachments to TestOps after execution ends. The reports   include the execution logs and JUnit Reports."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Test suites marked ",(0,o.kt)("strong",{className:"ph b"},"Incomplete")," or ",(0,o.kt)("strong",{className:"ph b"},"Not     started yet")," and the attachments of the test suite   execution cannot be uploaded to 3rd-party tools (qTest, JIRA,   Slack, Azure DevOps Test Plans, TestRail)."),(0,o.kt)("h2",{id:"troubleshoot"},(0,o.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Troubleshoot"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When a test suite or test suite collection is terminated, you can find the test suite or test suite collection reference ID and the maximum number of test failures in the execution log."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/Execution%20log.png"),alt:"execution log"}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This applies to either sequential or parallel mode execution. You can check which test execution was terminated and why. You can also see the report in the manual view of Katalon Studio. See also ",(0,o.kt)("a",{className:"xref",href:"/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio"},"View and Customize Execution Log"),"."),(0,o.kt)("h2",{id:"common-use-cases"},(0,o.kt)("a",{id:"id_6",class:"anchor_top_offset"}),"Common Use Cases"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Below are three example use cases to illustrate how the   parameter works:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,o.kt)("li",{className:"li"},"In the case of a test suite execution."),"   ",(0,o.kt)("li",{className:"li"},"In the case of a test suite collection executed in sequential     mode."),"   ",(0,o.kt)("li",{className:"li"},"In the case of a test suite collection executed in parallel     mode.")," "),(0,o.kt)("h3",{id:"terminate-test-suite-execution"},(0,o.kt)("a",{id:"id_7",class:"anchor_top_offset"}),"Terminate Test Suite Execution"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In this section, we outline an example execution of a test suite with this parameter."),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Given that you have a test suite that has 10 test cases."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/Test%20suite%20UC%201.png"),alt:"Test Suites"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"You want to stop the test suite after 4 test failures. Set T = 4."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("strong",{className:"ph b"},"Configure in Command Builder"),"     "),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/terminate.png"),alt:"command builder"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/command%20UC%201.png"),alt:"execution log"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("strong",{className:"ph b"},"Execute in Console Mode"),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"The test suite is terminated once the number of failures becomes 4. The execution ends, and the rest test cases do not run."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/Test%20log%20result%20-%20UC%201.png"),alt:"info"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Katalon Studio generates a report in JUnit, HTML, PDF, and CSV format. The report does not show information for test cases that were not run."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/Test%20Result%20in%20KS%20-%20UC%201.png"),alt:"report in Katalon Studio"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"     ",(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),"        ",(0,o.kt)("p",{className:"p"},"See also ",(0,o.kt)("a",{className:"xref",href:"/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-test-suite-and-test-suite-collection-reports-in-katalon-studio#id_1"},"Test Suite and Test Suite Collection Reports"),"."),"     "),"   ")),(0,o.kt)("h3",{id:"terminate-test-suite-collection-executed-in-sequential-mode"},(0,o.kt)("a",{id:"id_8",class:"anchor_top_offset"}),"Terminate Test Suite Collection Executed In Sequential Mode"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Given that you have 5 test suites, each test suite has 10 test cases. You want to stop the test suite collection after 20 test failures. Set T = 20."),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"The test suite collection executes in sequential mode and is terminated once the number of failures becomes 20. The rest test cases in the terminated test suite and the rest test suite do not run."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/Report%20TSC%20UC2.png"),alt:"report test suite collection"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Katalon Studio generates a report in JUnit, HTML, PDF, and CSV format. The report does not show information for test cases and test suites that were not run."),"     ",(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),"        ",(0,o.kt)("p",{className:"p"},"Learn more about how to create and execute a ",(0,o.kt)("a",{className:"xref",href:"/docs/organize/manage-tests/manage-test-suite-collections-in-katalon-studio"},"Manage test suite collections in Katalon Studio"),"."),"     "),"   ")),(0,o.kt)("h3",{id:"terminate-test-suite-collection-executed-in-parallel-mode"},(0,o.kt)("a",{id:"id_9",class:"anchor_top_offset"}),"Terminate Test Suite Collection Executed In Parallel Mode"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Given that you have a test suite collection that has 5 test suites with 3 parallel instances. You want to stop the test suite collection after 20 test failures. Set T = 20."),"     ",(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),"        ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"           ",(0,o.kt)("p",{className:"p"},"Instances is the number of test suites you set to run at the same time."),"         "),(0,o.kt)("li",{className:"li"},"           ",(0,o.kt)("p",{className:"p"},"T is the maximum number of test case failures (threshold)."),"         ")),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"When the test suite begins execution, the first 3 test suites run at the same time with T = 20 in each test suite."),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"The test suite collection is terminated once the total number of failures becomes 20. The rest test cases in the terminated test suite and the rest test suite do not run. However, the currently running test suites will not be terminated."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/condition-to-stop/Report%20UC%203.png"),alt:"report test suite collection in parallel mode"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Katalon Studio generates a report in JUnit, HTML, PDF, and CSV format. The report does not show information for test cases and test suites that were not run."),"   ")))}d.isMDXComponent=!0}}]);