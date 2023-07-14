"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[36359],{3905:(t,e,s)=>{s.d(e,{Zo:()=>d,kt:()=>h});var o=s(67294);function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function r(t,e){if(null==t)return{};var s,o,a=function(t,e){if(null==t)return{};var s,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)s=i[o],e.indexOf(s)>=0||(a[s]=t[s]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)s=i[o],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(a[s]=t[s])}return a}var l=o.createContext({}),c=function(t){var e=o.useContext(l),s=e;return t&&(s="function"==typeof t?t(e):n(n({},e),t)),s},d=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},w=o.forwardRef((function(t,e){var s=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),w=c(s),h=a,u=w["".concat(l,".").concat(h)]||w[h]||p[h]||i;return s?o.createElement(u,n(n({ref:e},d),{},{components:s})):o.createElement(u,n({ref:e},d))}));function h(t,e){var s=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=s.length,n=new Array(i);n[0]=w;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:a,n[1]=r;for(var c=2;c<i;c++)n[c]=s[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,s)}w.displayName="MDXCreateElement"},70477:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>w,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=s(87462),a=(s(67294),s(3905)),i=s(44996);const n={id:"98010480-22b2-11ed-9930-0242fe3e4a3f",title:"Windows Record Utility in Katalon Studio",slug:"create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio",hide_title:!0},r='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Windows Record Utility in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',l={unversionedId:"98010480-22b2-11ed-9930-0242fe3e4a3f",id:"98010480-22b2-11ed-9930-0242fe3e4a3f",title:"Windows Record Utility in Katalon Studio",description:"Katalon Studio provides the Windows record utility that allows   you to record and playback actions performed in a Windows desktop   application. With this utility, you can quickly create a test case,   and later manually enhance the test.",source:"@site/docs/98010480-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio",permalink:"/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"98010480-22b2-11ed-9930-0242fe3e4a3f",title:"Windows Record Utility in Katalon Studio",slug:"create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Windows Spy Utility in Katalon Studio",permalink:"/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio"},next:{title:"Capture Windows Objects using the Windows Spy Utility in Katalon Studio",permalink:"/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/capture-windows-objects-using-the-windows-spy-utility-in-katalon-studio"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:'<a id="id_1" class="anchor_top_offset"/>The Windows record utility',id:"the-windows-record-utility",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Configurations',id:"configurations",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Recorded actions',id:"recorded-actions",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Captured objects',id:"captured-objects",level:3},{value:'<a id="id_5" class="anchor_top_offset"/>Screen View',id:"screen-view",level:3},{value:'<a id="id_6" class="anchor_top_offset"/>Screen Objects',id:"screen-objects",level:3},{value:'<a id="id_7" class="anchor_top_offset"/>Possible Actions',id:"possible-actions",level:3},{value:'<a id="id_8" class="anchor_top_offset"/>Export Option',id:"export-option",level:2}],p={toc:d};function w(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows-record-utility-in-katalon-studio"},(0,a.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,a.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Windows Record Utility in ",(0,a.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Studio provides the Windows record utility that allows   you to record and playback actions performed in a Windows desktop   application. With this utility, you can quickly create a test case,   and later manually enhance the test."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This article introduces you to the components of the Windows   record utility in Katalon Studio."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,a.kt)("li",{className:"li"},"Katalon Studio version 7.0 onwards."),(0,a.kt)("li",{className:"li"},"WinAppDriver is running on the test machine. To learn how to     set up and run WinAppDriver, see: ",(0,a.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/set-up-winappdriver-in-katalon-studio"},"Set       up WinAppDriver"),".")),(0,a.kt)("nav",{xmlns:"http://www.w3.org/1999/xhtml",role:"navigation",className:"related-links"},(0,a.kt)("div",{className:"linklist relinfo relconcepts"},(0,a.kt)("strong",null,"Related concepts"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",{className:"linklist"},(0,a.kt)("li",{className:"linklist"},(0,a.kt)("a",{className:"link",href:"/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/set-up-winappdriver-in-katalon-studio#concept-5429"},"Set up WinAppDriver"))))),(0,a.kt)("h2",{id:"the-windows-record-utility"},(0,a.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"The Windows record utility"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To open the utility, from the main toolbar, click on ",(0,a.kt)("strong",{className:"ph b"},"Record Windows Action"),"."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Record-Windows-Action-button.png"),alt:"Spy Windows Objects icon"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,a.kt)("strong",{className:"ph b"},"Windows Action Recorder")," dialog is displayed as below:"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Windows-Action-Recorder-dialog.png"),alt:"Windows Action Recorder dialog"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "),(0,a.kt)("h3",{id:"configurations"},(0,a.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Configurations"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In the ",(0,a.kt)("strong",{className:"ph b"},"CONFIGURATIONS")," section, you can   specify:"),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,a.kt)("li",{className:"li"},"     ",(0,a.kt)("p",{className:"p"},"       ",(0,a.kt)("strong",{className:"ph b"},"Configuration"),": the WinAppDriver URL and desired       capabilities."),"   "),"   ",(0,a.kt)("li",{className:"li"},"     ",(0,a.kt)("p",{className:"p"},"       ",(0,a.kt)("strong",{className:"ph b"},"Application File"),": the absolute path to the       Windows executable file (*.exe) of the testing machine. For Windows       users, click on the ",(0,a.kt)("strong",{className:"ph b"},"Browse...")," button to locate the       application file."),"   ")," "),(0,a.kt)("h3",{id:"recorded-actions"},(0,a.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Recorded actions"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"After you interact with the application under test (AUT) using the built-in actions, the recorded actions are displayed in the ",(0,a.kt)("strong",{className:"ph b"},"Recorded Actions")," tab."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Recorded-Actions-tab.png"),alt:"Recorded Actions tab"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "),(0,a.kt)("h3",{id:"captured-objects"},(0,a.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Captured objects"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"During a recording session, the captured Windows objects are displayed in the ",(0,a.kt)("strong",{className:"ph b"},"Captured Objects")," tab. You can view and edit the object name, locator and properties."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Captured-Objects-tab.png"),alt:"Captured Objects tab"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can modify the locator of an object in ",(0,a.kt)("strong",{className:"ph b"},"Object Properties")," and click ",(0,a.kt)("strong",{className:"ph b"},"Highlight")," to verify if the new locator correctly identifies the associated object."),(0,a.kt)("h3",{id:"screen-view"},(0,a.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Screen View"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,a.kt)("strong",{className:"ph b"},"Screen View")," shows the application screenshots taken when you press the ",(0,a.kt)("strong",{className:"ph b"},"Start")," button to record or the ",(0,a.kt)("strong",{className:"ph b"},"Refresh Screen")," button to recapture the application images. The size of a captured screenshot is the same as the displayed application window on the testing machine."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Screen-View-section.png"),alt:"Screen view"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "),(0,a.kt)("h3",{id:"screen-objects"},(0,a.kt)("a",{id:"id_6",class:"anchor_top_offset"}),"Screen Objects"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,a.kt)("strong",{className:"ph b"},"Screen Objects")," section shows a tree of all Windows objects you can interact with. To update this tree view, you can press the ",(0,a.kt)("strong",{className:"ph b"},"Refresh Screen")," button."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The selected object is highlighted with a green border on the ",(0,a.kt)("strong",{className:"ph b"},"Screen View"),"."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Screen-view.png"),alt:"Object highlighted in the Screen View"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "),(0,a.kt)("h3",{id:"possible-actions"},(0,a.kt)("a",{id:"id_7",class:"anchor_top_offset"}),"Possible Actions"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,a.kt)("strong",{className:"ph b"},"Possible Actions")," provides the built-in Windows actions that you can use to interact with the AUT."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Possible-Actions-section.png"),alt:"Possible actions"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"There are two types of Windows actions:"),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,a.kt)("li",{className:"li"},"     ",(0,a.kt)("p",{className:"p"},"Object action: an action that you can perform on a specific Windows object. This type of action requires you to first select the target object on the ",(0,a.kt)("strong",{className:"ph b"},"Screen Objects"),", e.g., performing the ",(0,a.kt)("em",{className:"ph i"},"Click")," action on a menu item."),"   "),(0,a.kt)("li",{className:"li"},"     ",(0,a.kt)("p",{className:"p"},"Application action: an action for interacting with the application, e.g., the ",(0,a.kt)("em",{className:"ph i"},"Close Application")," action."),"   ")),(0,a.kt)("h2",{id:"export-option"},(0,a.kt)("a",{id:"id_8",class:"anchor_top_offset"}),"Export Option"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When you finish the recording session, there are three options to export the recorded actions to a test case:"),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,a.kt)("li",{className:"li"},"Export to new test case (selected by default)."),(0,a.kt)("li",{className:"li"},"Append to test case."),(0,a.kt)("li",{className:"li"},"Overwrite test case.")),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-record-utility/KS-Export-Windows-script.png"),alt:"Export actions dialog"}),(0,a.kt)("br",null),(0,a.kt)("br",null)," "))}w.isMDXComponent=!0}}]);