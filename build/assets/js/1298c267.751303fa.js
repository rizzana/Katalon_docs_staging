"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[68514],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>p});var s=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,s,n=function(t,e){if(null==t)return{};var a,s,n={},i=Object.keys(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=s.createContext({}),l=function(t){var e=s.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=l(t.components);return s.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=l(a),p=n,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return a?s.createElement(f,r(r({ref:e},d),{},{components:a})):s.createElement(f,r({ref:e},d))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:n,r[1]=o;for(var l=2;l<i;l++)r[l]=a[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32146:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=a(87462),n=(a(67294),a(3905)),i=a(44996);const r={id:"99055520-22b2-11ed-9930-0242fe3e4a3f",title:"Perform data-driven testing in a dynamic test suite",slug:"create-tests/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite",hide_title:!0},o='<a id="id_11" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Perform data-driven testing in a dynamic test suite',c={unversionedId:"99055520-22b2-11ed-9930-0242fe3e4a3f",id:"99055520-22b2-11ed-9930-0242fe3e4a3f",title:"Perform data-driven testing in a dynamic test suite",description:"You can perform data-driven testing by running a dynamic test suite with multiple data points.",source:"@site/docs/99055520-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite",permalink:"/docs/create-tests/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite",draft:!1,tags:[],version:"current",frontMatter:{id:"99055520-22b2-11ed-9930-0242fe3e4a3f",title:"Perform data-driven testing in a dynamic test suite",slug:"create-tests/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite",hide_title:!0},sidebar:"aSidebar",previous:{title:"Data-driven testing at test case level",permalink:"/docs/create-tests/data-driven-testing/data-driven-testing-at-test-case-level"},next:{title:"Manage checkpoints",permalink:"/docs/create-tests/data-driven-testing/manage-checkpoints"}},l={},d=[],m={toc:d};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,s.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"perform-data-driven-testing-in-a-dynamic-test-suite"},(0,n.kt)("a",{id:"id_11",class:"anchor_top_offset"}),(0,n.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Perform data-driven testing in a dynamic test suite"),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can perform data-driven testing by running a dynamic test suite with multiple data points."),(0,n.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note important note_important"},(0,n.kt)("span",{className:"note__title"},"Important:")," ",(0,n.kt)("ul",{className:"ul"},(0,n.kt)("li",{className:"li"},"Katalon Studio Enterprise version 8.3.0 onwards."))),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Follow these steps:"),(0,n.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,n.kt)("li",{className:"li"},(0,n.kt)("p",{className:"p"},"Configure data binding for the test cases. See: ",(0,n.kt)("a",{className:"xref",href:"/docs/create-tests/data-driven-testing/data-driven-testing-at-test-case-level"},"Data-driven testing at the test case level"),".")),(0,n.kt)("li",{className:"li"},(0,n.kt)("p",{className:"p"},"Add the associated test cases to a dynamic test suite via a search query. See above: ",(0,n.kt)("a",{className:"xref",href:"/docs/organize/manage-tests/dynamic-test-suite/manage-dynamic-test-suites-in-katalon-studio#task-1084"},"Add test cases to a dynamic test suite"),"."),(0,n.kt)("p",{className:"p"}," ",(0,n.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/ddt-test-case-level/KS-DDT-Dynamic-Test-suite.png"),width:700,alt:"Test cases added by query"}),(0,n.kt)("br",null),(0,n.kt)("br",null))),(0,n.kt)("li",{className:"li"},(0,n.kt)("p",{className:"p"},"Hit ",(0,n.kt)("strong",{className:"ph b"},"Run")," to execute the dynamic test suite. Test cases in the dynamic test suite are then executed with the configured test data.")),(0,n.kt)("li",{className:"li"},(0,n.kt)("p",{className:"p"},"Verify the data binding and test execution results in ",(0,n.kt)("strong",{className:"ph b"},"Log Viewer"),"."),(0,n.kt)("p",{className:"p"},(0,n.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/dynamic-test-suite-ks/KS-DYNAMIC-DDT-Log-Viewer.png"),alt:"Test cases added by query"}),(0,n.kt)("br",null),(0,n.kt)("br",null)))),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,n.kt)("strong",{className:"ph b"},"See also")),(0,n.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,n.kt)("li",{className:"li"},(0,n.kt)("a",{className:"xref",href:"/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio#id_1"},"View and Customize Execution Log")),(0,n.kt)("li",{className:"li"},(0,n.kt)("a",{className:"xref",href:"/docs/organize/integration-for-organizing-tests/query-test-cases-linked-to-testrail-in-a-dynamic-test-suite"},"Query Test Cases linked to TestRail in Dynamic Test Suite"))))}u.isMDXComponent=!0}}]);