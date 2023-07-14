"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[8528],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var s=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,s,i=function(t,e){if(null==t)return{};var a,s,i={},n=Object.keys(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var r=s.createContext({}),c=function(t){var e=s.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return s.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},m=s.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,r=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(a),u=i,h=m["".concat(r,".").concat(u)]||m[u]||p[u]||n;return a?s.createElement(h,l(l({ref:e},d),{},{components:a})):s.createElement(h,l({ref:e},d))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,l=new Array(n);l[0]=m;var o={};for(var r in e)hasOwnProperty.call(e,r)&&(o[r]=e[r]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17643:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=a(87462),i=(a(67294),a(3905)),n=a(44996);const l={id:"992fe790-22b2-11ed-9930-0242fe3e4a3f",title:"Data-driven testing in a test suite",slug:"create-tests/data-driven-testing/data-driven-testing-in-a-test-suite",hide_title:!0},o='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Data-driven testing in a test suite',r={unversionedId:"992fe790-22b2-11ed-9930-0242fe3e4a3f",id:"992fe790-22b2-11ed-9930-0242fe3e4a3f",title:"Data-driven testing in a test suite",description:"This document shows you how to perform data-driven testing at the test suite.",source:"@site/docs/992fe790-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/data-driven-testing/data-driven-testing-in-a-test-suite",permalink:"/docs/create-tests/data-driven-testing/data-driven-testing-in-a-test-suite",draft:!1,tags:[],version:"current",frontMatter:{id:"992fe790-22b2-11ed-9930-0242fe3e4a3f",title:"Data-driven testing in a test suite",slug:"create-tests/data-driven-testing/data-driven-testing-in-a-test-suite",hide_title:!0},sidebar:"aSidebar",previous:{title:"Manage data binding",permalink:"/docs/create-tests/data-driven-testing/manage-data-binding"},next:{title:"Data-driven testing at test case level",permalink:"/docs/create-tests/data-driven-testing/data-driven-testing-at-test-case-level"}},c={},d=[{value:'<a id="id_1" class="anchor_top_offset"/>Create a test data file',id:"create-a-test-data-file",level:2},{value:'<a id="task-4801" class="anchor_top_offset"/>Create a test suite with test case variables',id:"create-a-test-suite-with-test-case-variables",level:2},{value:'<a id="task-7065" class="anchor_top_offset"/>Perform data binding in test suite',id:"perform-data-binding-in-test-suite",level:2},{value:'<a id="id_4" class="anchor_top_offset"/>See also',id:"see-also",level:2}],p={toc:d};function m(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,s.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-driven-testing-in-a-test-suite"},(0,i.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,i.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Data-driven testing in a test suite"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This document shows you how to perform data-driven testing at the test suite."),(0,i.kt)("h2",{id:"create-a-test-data-file"},(0,i.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Create a test data file"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To create a test data file, go to ",(0,i.kt)("span",{className:"ph uicontrol"},"File")," > ",(0,i.kt)("span",{className:"ph uicontrol"},"New")," > ",(0,i.kt)("span",{className:"ph uicontrol"},"Test Data"),". ",(0,i.kt)("span",{className:"ph"},"Katalon Studio")," allows you to use external or internal data sources. For this guide, you can create an internal data file with values as follows:"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,i.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/run-test-case-external-data/KS-830-Test-data-file.png"),width:500,alt:"Test data file"}),(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For detailed instruction on creating internal data file, see ",(0,i.kt)("a",{className:"xref",href:"/docs/create-tests/data-driven-testing/manage-test-data#task-2895"},"Create an internal data file"),"."),(0,i.kt)("h2",{id:"create-a-test-suite-with-test-case-variables"},(0,i.kt)("a",{id:"task-4801",class:"anchor_top_offset"}),"Create a test suite with test case variables"),(0,i.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"For this step, you need to create test case variables, then add the test case to a test suite."),(0,i.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"Go to ",(0,i.kt)("span",{className:"ph uicontrol"},"File")," > ",(0,i.kt)("span",{className:"ph uicontrol"},"New")," > ",(0,i.kt)("span",{className:"ph uicontrol"},"Test Case")," to create a new test case.")),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"Go to the ",(0,i.kt)("span",{className:"ph uicontrol"},"Script")," view and input the following script:"),(0,i.kt)("div",{className:"itemgroup info"},(0,i.kt)("pre",{className:"pre codeblock"},(0,i.kt)("code",null,'println "$',"{","employee","}"," - $","{","department","}"," - $","{","position","}",'"')))),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"Switch to the ",(0,i.kt)("span",{className:"ph uicontrol"},"Variables")," tab, click ",(0,i.kt)("span",{className:"ph uicontrol"},"Add")," then input the following variables:"),(0,i.kt)("div",{className:"itemgroup info"},(0,i.kt)("img",{className:"image",width:500,src:(0,n.Z)("/990fa340-0cef-11ee-bd0e-0242c7a41fd4.png")}))),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"When you're done, add the test case to a test suite."))),(0,i.kt)("h2",{id:"perform-data-binding-in-test-suite"},(0,i.kt)("a",{id:"task-7065",class:"anchor_top_offset"}),"Perform data binding in test suite"),(0,i.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"To perform data binding in a test suite, do as follows:"),(0,i.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"In the test suite editor, click ",(0,i.kt)("span",{className:"ph uicontrol"},"Show Data Binding"),"."),(0,i.kt)("div",{className:"itemgroup info"},(0,i.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/run-test-case-external-data/KS-830-Show-data-binding.png"),width:650,alt:"Show data binding"}),(0,i.kt)("br",null),(0,i.kt)("br",null))),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"Click on the test case, then select   ",(0,i.kt)("span",{className:"ph uicontrol"},"Use Variables and Binding at Suite Test Case"),"."),(0,i.kt)("div",{className:"itemgroup tutorialinfo"},"With this option, ",(0,i.kt)("span",{className:"ph"},"Katalon Studio")," will execute with the suite test case data binding.")),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"In the ",(0,i.kt)("span",{className:"ph uicontrol"},"Test Data")," table, click ",(0,i.kt)("span",{className:"ph uicontrol"},"Add")," to  select data file(s)."),(0,i.kt)("div",{className:"itemgroup stepresult"},"The selected file(s) is added to the table accordingly.",(0,i.kt)("p",{className:"p"},(0,i.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/run-test-case-external-data/KS-830-Add-test-data.png"),width:650,alt:"Add test data"}),(0,i.kt)("br",null),(0,i.kt)("br",null)))),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"In the ",(0,i.kt)("span",{className:"ph uicontrol"},"Variable Binding")," table, select all rows, click ",(0,i.kt)("span",{className:"ph uicontrol"},"Set Type"),"  , then select ",(0,i.kt)("span",{className:"ph uicontrol"},"Data Column")," as their types."),(0,i.kt)("div",{className:"itemgroup info"},(0,i.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/run-test-case-external-data/KS-830-Set-data-type.png"),width:500,alt:"Set data type"}),(0,i.kt)("br",null),(0,i.kt)("br",null))),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"Click ",(0,i.kt)("span",{className:"ph uicontrol"},"Set Test Data")," to select   data files from the ",(0,i.kt)("span",{className:"ph uicontrol"},"Test Data")," table."),(0,i.kt)("div",{className:"itemgroup info"},(0,i.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/run-test-case-external-data/KS-830-Set-test-data.png"),width:500,alt:"Set test data"}),(0,i.kt)("br",null),(0,i.kt)("br",null))),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"In the ",(0,i.kt)("span",{className:"ph uicontrol"},"Value")," column, click on ",(0,i.kt)("code",{className:"ph codeph"},"...")," to specify the data field in the selected data file."),(0,i.kt)("div",{className:"itemgroup info"},(0,i.kt)("img",{className:"image",width:500,src:(0,n.Z)("/99051bf0-0cef-11ee-bd0e-0242c7a41fd4.png"),alt:"Set test data value"}),(0,i.kt)("p",{className:"p"},"If the variables and selected data files column headers share the same name, you can click ",(0,i.kt)("span",{className:"ph uicontrol"},"Map All")," to quickly map them together."),(0,i.kt)("p",{className:"p"},(0,i.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/run-test-case-external-data/KS-830-Map-all.png"),width:500,alt:"Map all"}),(0,i.kt)("br",null),(0,i.kt)("br",null)))),(0,i.kt)("li",{className:"li step stepexpand"},(0,i.kt)("span",{className:"ph cmd"},"Once you're finished, save and run your test suite to see the following result:"),(0,i.kt)("div",{className:"itemgroup info"},(0,i.kt)("img",{className:"image",width:600,src:(0,n.Z)("/99126260-0cef-11ee-bd0e-0242c7a41fd4.png")})))),(0,i.kt)("h2",{id:"see-also"},(0,i.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"See also"),(0,i.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,i.kt)("li",{className:"li"},(0,i.kt)("a",{className:"xref",href:"/docs/create-tests/data-driven-testing/manage-data-binding"},"Manage data binding in Katalon Studio")),(0,i.kt)("li",{className:"li"},"Katalon Academy course: ",(0,i.kt)("a",{className:"xref j-external-link",href:"https://academy.katalon.com/courses/data-driven-testing/?utm_source=kat_docs&utm_medium=tc_external_data",target:"_blank"},"Katalon Studio: How to Apply Data-Driven Testing"))))}m.isMDXComponent=!0}}]);