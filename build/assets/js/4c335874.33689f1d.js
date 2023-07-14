"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[47310],{3905:(t,e,s)=>{s.d(e,{Zo:()=>p,kt:()=>w});var a=s(67294);function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e){if(null==t)return{};var s,a,o=function(t,e){if(null==t)return{};var s,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)s=i[a],e.indexOf(s)>=0||(o[s]=t[s]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)s=i[a],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}var r=a.createContext({}),c=function(t){var e=a.useContext(r),s=e;return t&&(s="function"==typeof t?t(e):n(n({},e),t)),s},p=function(t){var e=c(t.components);return a.createElement(r.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var s=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(s),w=o,m=h["".concat(r,".").concat(w)]||h[w]||d[w]||i;return s?a.createElement(m,n(n({ref:e},p),{},{components:s})):a.createElement(m,n({ref:e},p))}));function w(t,e){var s=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=s.length,n=new Array(i);n[0]=h;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:o,n[1]=l;for(var c=2;c<i;c++)n[c]=s[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,s)}h.displayName="MDXCreateElement"},68426:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var a=s(87462),o=(s(67294),s(3905)),i=s(44996);const n={id:"9806d0e0-22b2-11ed-9930-0242fe3e4a3f",title:"Windows Spy Utility in Katalon Studio",slug:"create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio",hide_title:!0},l='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Windows Spy Utility in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',r={unversionedId:"9806d0e0-22b2-11ed-9930-0242fe3e4a3f",id:"9806d0e0-22b2-11ed-9930-0242fe3e4a3f",title:"Windows Spy Utility in Katalon Studio",description:"The Windows spy utility helps capture test objects quickly and   allows you to specify several object properties and locator   strategies.",source:"@site/docs/9806d0e0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio",permalink:"/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"9806d0e0-22b2-11ed-9930-0242fe3e4a3f",title:"Windows Spy Utility in Katalon Studio",slug:"create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Capture elements in hybrid Android apps in Katalon Studio",permalink:"/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/capture-elements-in-hybrid-android-apps-in-katalon-studio"},next:{title:"Windows Record Utility in Katalon Studio",permalink:"/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:'<a id="id_1" class="anchor_top_offset"/>The Windows spy utility',id:"the-windows-spy-utility",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Configurations',id:"configurations",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>All objects',id:"all-objects",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Screen view',id:"screen-view",level:2},{value:'<a id="id_5" class="anchor_top_offset"/>Captured objects',id:"captured-objects",level:3},{value:'<a id="id_6" class="anchor_top_offset"/>Object properties',id:"object-properties",level:3},{value:'<a id="id_7" class="anchor_top_offset"/>View and edit the captured objects',id:"view-and-edit-the-captured-objects",level:2}],d={toc:p};function h(t){let{components:e,...s}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows-spy-utility-in-katalon-studio"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Windows Spy Utility in ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The Windows spy utility helps capture test objects quickly and   allows you to specify several object properties and locator   strategies."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This article introduces you to the components of the Windows spy   utility in Katalon Studio."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Katalon Studio version 7.0 onwards."),(0,o.kt)("li",{className:"li"},"WinAppDriver is running on the test machine. To learn how to     set up and run WinAppDriver, see: ",(0,o.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/set-up-winappdriver-in-katalon-studio"},"Set       up WinAppDriver"),".")),(0,o.kt)("h2",{id:"the-windows-spy-utility"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"The Windows spy utility"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To open the utility, from the main toolbar, click on the ",(0,o.kt)("strong",{className:"ph b"},"Spy Windows Object")," button."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-spy-utility/KS-Windows-Spy-Objects-button.png"),alt:"Spy Windows Objects icon"}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,o.kt)("strong",{className:"ph b"},"Spy Windows Objects")," dialog is displayed as below:"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-spy-utility/KS-Windows-Object-Spy-dialog.png"),alt:"Spy Windows Objects dialog"}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("h3",{id:"configurations"},(0,o.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Configurations"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In the ",(0,o.kt)("strong",{className:"ph b"},"Configurations")," section, you can   specify:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("strong",{className:"ph b"},"Configuration"),": the WinAppDriver URL and desired       capabilities."),"   "),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("strong",{className:"ph b"},"Application File"),": the absolute path to the       Windows executable file (*.exe) of the testing machine. For Windows       users, click on the ",(0,o.kt)("strong",{className:"ph b"},"Browse...")," button to locate the       application file."),"   ")," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When the application under test (AUT) is started, the utility   captures all available Windows objects on the current window of the   AUT and displays them in the ",(0,o.kt)("strong",{className:"ph b"},"All Objects"),"   section."),(0,o.kt)("h3",{id:"all-objects"},(0,o.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"All objects"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,o.kt)("strong",{className:"ph b"},"All Objects")," section shows a tree of all the objects of the AUT, including the associated Windows element names (highlighted in blue) and tag names."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-spy-utility/KS-All-Objects-section.png"),alt:"All objects section"}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To add a Windows object, check the checkbox on the left of the desired Windows object. The added object is then displayed in the ",(0,o.kt)("strong",{className:"ph b"},"Captured Objects")," section."),(0,o.kt)("h2",{id:"screen-view"},(0,o.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Screen view"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When an object is selected in the ",(0,o.kt)("strong",{className:"ph b"},"All Objects")," section, the position of the associated element is highlighted in the ",(0,o.kt)("strong",{className:"ph b"},"Screen View"),". This helps verify the selected Windows element."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-spy-utility/KS-Screen-View-section.png"),alt:"Captured objects section"}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("h3",{id:"captured-objects"},(0,o.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Captured objects"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,o.kt)("strong",{className:"ph b"},"Captured Objects")," section shows all the captured Windows elements you want to add to the ",(0,o.kt)("strong",{className:"ph b"},"Object Repository"),"."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To view details about a captured object, click on it. The detailed information is displayed in the ",(0,o.kt)("strong",{className:"ph b"},"Object Properties")," section."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-spy-utility/KS-Captured-Objects-section.png"),alt:"Captured objects section"}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can view and edit the object name, locator and properties before adding it to the ",(0,o.kt)("strong",{className:"ph b"},"Object Repository"),"."),(0,o.kt)("h3",{id:"object-properties"},(0,o.kt)("a",{id:"id_6",class:"anchor_top_offset"}),"Object properties"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The ",(0,o.kt)("strong",{className:"ph b"},"Object Properties")," section allows you to   configure the following information:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("strong",{className:"ph b"},"Object Name"),": the Windows object name."),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("strong",{className:"ph b"},"Locator Strategy"),": the type of object locator     to identify the Windows element. To generate the object locator of     the desired locator type, click on the ",(0,o.kt)("strong",{className:"ph b"},"Generate"),"     button."),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("strong",{className:"ph b"},"Locator"),": the generated object locator that can     be customized."),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("strong",{className:"ph b"},"Properties")," table: all properties of the     captured objects.")," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To add the captured objects to the ",(0,o.kt)("strong",{className:"ph b"},"Object     Repository"),", click ",(0,o.kt)("strong",{className:"ph b"},"OK")," and select the   target folder where you want to save the objects."),(0,o.kt)("h2",{id:"view-and-edit-the-captured-objects"},(0,o.kt)("a",{id:"id_7",class:"anchor_top_offset"}),"View and edit the captured objects"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can view and edit the locator and properties of a captured object in the ",(0,o.kt)("strong",{className:"ph b"},"Object")," view."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Go to ",(0,o.kt)("strong",{className:"ph b"},"Tests Explorer"),"> ",(0,o.kt)("strong",{className:"ph b"},"Object Repository"),", and select the desired Windows object. Details about a captured object are displayed in the ",(0,o.kt)("strong",{className:"ph b"},"Object")," view as follows:"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/windows-spy-utility/KS-Object-view.png"),alt:"Object view"}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In the ",(0,o.kt)("strong",{className:"ph b"},"Object")," view, you can view and edit:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"}," ",(0,o.kt)("strong",{className:"ph b"},"Locator"),": the locator type and locator of the object."),(0,o.kt)("li",{className:"li"}," ",(0,o.kt)("strong",{className:"ph b"},"Object Properties"),": the properties of the object.")))}h.isMDXComponent=!0}}]);