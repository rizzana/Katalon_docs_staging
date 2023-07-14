"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[90456],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=s.createContext({}),c=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return a?s.createElement(h,r(r({ref:t},p),{},{components:a})):s.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=a(87462),n=(a(67294),a(3905)),o=a(44996);const r={id:"96bfaae0-22b2-11ed-9930-0242fe3e4a3f",title:"Handle Response Messages in Katalon Studio",slug:"create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio",hide_title:!0},l='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Handle Response Messages in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',i={unversionedId:"96bfaae0-22b2-11ed-9930-0242fe3e4a3f",id:"96bfaae0-22b2-11ed-9930-0242fe3e4a3f",title:"Handle Response Messages in Katalon Studio",description:"Most of the keywords for handling web service result will ask   for a ResponseObject (return from the   keyword WSBuiltInKeywords.sendRequest) or an   element locator.",source:"@site/docs/96bfaae0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio",permalink:"/docs/create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"96bfaae0-22b2-11ed-9930-0242fe3e4a3f",title:"Handle Response Messages in Katalon Studio",slug:"create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Draft Request in Katalon Studio",permalink:"/docs/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio"},next:{title:"Windows Test Objects in Katalon Studio",permalink:"/docs/create-tests/test-objects/windows-test-objects/windows-test-objects-in-katalon-studio"}},c={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"handle-response-messages-in-katalon-studio"},(0,n.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,n.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Handle Response Messages in ",(0,n.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Most of the keywords for handling web service result will ask   for a ",(0,n.kt)("strong",{className:"ph b"},"ResponseObject")," (return from the   keyword ",(0,n.kt)("em",{className:"ph i"},"WSBuiltInKeywords.sendRequest"),") or an   ",(0,n.kt)("strong",{className:"ph b"},"element locator"),"."),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,n.kt)("strong",{className:"ph b"},"ResponseObject")," (return from   ",(0,n.kt)("em",{className:"ph i"},"WSBuiltInKeywords.sendRequest"),") is a convenient class to   wrap the HTTP content returned from a Web Service call, here are   some helpful functions to handle the result:"),(0,n.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,n.kt)("li",{className:"li"},"getContentType: the response data type from web service, some     typical data types are: application/json, text/xml,     application/xml, application/soap+xml\u2026"),(0,n.kt)("li",{className:"li"},"getResponseText(): the whole text content returned from web     service")),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,n.kt)("strong",{className:"ph b"},"Element locator")," is the concept utilized by   Katalon Studio to explore into hierarchical data structure such as   JSON or XML to look for the expected data. Following are some   examples about its usage on JSON/XML data."),(0,n.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,n.kt)("li",{className:"li"},"     ",(0,n.kt)("p",{className:"p"},"JSON data usually have a root node (a parent element to wrap all       content) consists of many child nodes. ",(0,n.kt)("strong",{className:"ph b"},"Element         locator")," syntax will begin with element name, child       element and its index (if it has children nodes, index is       zero-based numbering), name of the property we want to get its       value. Those parts of element locator are separated by       ",(0,n.kt)("strong",{className:"ph b"},"dot")," character. The example below shows how to       get employee email and the first phone number:"),"     ",(0,n.kt)("p",{className:"p"},"       ",(0,n.kt)("img",{className:"image",src:(0,o.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/handle-response-messages/1.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),"     "),"   "),(0,n.kt)("li",{className:"li"},"     ",(0,n.kt)("p",{className:"p"},"XML data are similar both in the structure and the way we define       ",(0,n.kt)("strong",{className:"ph b"},"element locator"),', our expected info may come from:       the attribute of XML tag (in example below, "',(0,n.kt)("em",{className:"ph i"},'no"'),' is       an attribute of "',(0,n.kt)("em",{className:"ph i"},'contacts"')," tag) or from inner child       tag, you can use keywords for handling text (e.g.       verifyElementText) or property (e.g. verifyElementPropertyValue)       respectively."),"     ",(0,n.kt)("p",{className:"p"},"       ",(0,n.kt)("img",{className:"image",src:(0,o.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/handle-response-messages/2.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),"     "),"   "),(0,n.kt)("li",{className:"li"},"     ",(0,n.kt)("p",{className:"p"},"In case of the returned data don't have a root node, prefix the       ",(0,n.kt)("strong",{className:"ph b"},"element locator"),' by "[index number]", where index       is zero-based numbering. See example below:'),"     ",(0,n.kt)("p",{className:"p"},"       ",(0,n.kt)("img",{className:"image",src:(0,o.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/handle-response-messages/3.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),"     "),"   ")))}d.isMDXComponent=!0}}]);