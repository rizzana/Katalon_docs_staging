"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[23363],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var r=n.createContext({}),p=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(r.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,s=t.originalType,r=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(a),m=o,g=d["".concat(r,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(g,l(l({ref:e},u),{},{components:a})):n.createElement(g,l({ref:e},u))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var r in e)hasOwnProperty.call(e,r)&&(i[r]=e[r]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33023:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const s={id:"90aca4f0-22b2-11ed-9930-0242fe3e4a3f",title:"Using Katalon Store Plugins",slug:"plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins",hide_title:!0},l='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Using <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Store</span>  Plugins',i={unversionedId:"90aca4f0-22b2-11ed-9930-0242fe3e4a3f",id:"90aca4f0-22b2-11ed-9930-0242fe3e4a3f",title:"Using Katalon Store Plugins",description:"Katalon Plugin is to extend Katalon Studio capabilities and   integrate the software with your favorite tools. This section   introduces plugins, different ways of using plugins with the   Katalon Studio Enterprise license and the detailed   configurations.",source:"@site/docs/90aca4f0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins",permalink:"/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins",draft:!1,tags:[],version:"current",frontMatter:{id:"90aca4f0-22b2-11ed-9930-0242fe3e4a3f",title:"Using Katalon Store Plugins",slug:"plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins",hide_title:!0},sidebar:"aSidebar",previous:{title:"Integration Plugins on Katalon Store",permalink:"/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/integration-plugins-on-katalon-store"},next:{title:"Private Plugins in Katalon Studio",permalink:"/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/private-plugins-in-katalon-studio"}},r={},p=[{value:'<a id="id_1" class="anchor_top_offset"/>Introduction to <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Store</span>  Plugins',id:"introduction-to-katalon-store--plugins",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Plugins on <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Store</span>',id:"plugins-on-katalon-store",level:3},{value:'<a id="id_3" class="anchor_top_offset"/><span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Store</span>  Plugins usage modes',id:"katalon-store--plugins-usage-modes",level:3},{value:'<a id="id_4" class="anchor_top_offset"/><span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Store</span>  Plugin Repository',id:"katalon-store--plugin-repository",level:3},{value:'<a id="id_9" class="anchor_top_offset"/>Use Plugins in Console Mode',id:"use-plugins-in-console-mode",level:2}],u={toc:p};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-katalon-store--plugins"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Using ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Store"),"  Plugins"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Plugin is to extend Katalon Studio capabilities and   integrate the software with your favorite tools. This section   introduces plugins, different ways of using plugins with the   Katalon Studio Enterprise license and the detailed   configurations."),(0,o.kt)("h2",{id:"introduction-to-katalon-store--plugins"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Introduction to ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Store"),"  Plugins"),(0,o.kt)("h3",{id:"plugins-on-katalon-store"},(0,o.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Plugins on ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Store")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can find many plugins published on ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://store.katalon.com/",target:"_blank"},(0,o.kt)("span",{className:"ph"},"Katalon Store")),", which are   developed by the Katalon team or the community user."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Some plugins are exclusive for Katalon Studio Enterprise users   only while the other plugins are available for the community, free   of charge."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can trial an Enterprise plugin for 30 days. After the trial   period, if you wish to continue using the plugin for configuration,   you need to subscribe to a Katalon Studio Enterprise license."),(0,o.kt)("h3",{id:"katalon-store--plugins-usage-modes"},(0,o.kt)("a",{id:"id_3",class:"anchor_top_offset"}),(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Store"),"  Plugins usage modes"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"All Katalon users are eligible for using the community plugins   published on Store."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Compared to the community users, in addition to Store's plugins,   Katalon Studio Enterprise users can use their private plugins or   all plugins in an offline environment."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Runtime Engine users can use plugins in console   mode."),(0,o.kt)("h3",{id:"katalon-store--plugin-repository"},(0,o.kt)("a",{id:"id_4",class:"anchor_top_offset"}),(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Store"),"  Plugin Repository"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Studio Enterprise users can decide where Katalon Studio   will download plugins for a project. Go to ",(0,o.kt)("strong",{className:"ph b"},"Project >     Settings > Plugins")," and select one of the following   options:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("strong",{className:"ph b"},(0,o.kt)("span",{className:"ph"},"Katalon Store")," and Local"),": Katalon Studio will     install plugins from the ",(0,o.kt)("span",{className:"ph"},"Katalon Store")," and the Plugins folder of each     project."),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("strong",{className:"ph b"},(0,o.kt)("span",{className:"ph"},"Katalon Store")),": Katalon Studio will install     plugins from ",(0,o.kt)("span",{className:"ph"},"Katalon Store")," only."),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("strong",{className:"ph b"},"Local"),": Katalon Studio will install plugins     from the Plugins folder only.")),(0,o.kt)("h2",{id:"use-plugins-in-console-mode"},(0,o.kt)("a",{id:"id_9",class:"anchor_top_offset"}),"Use Plugins in Console Mode"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note important note_important"},(0,o.kt)("span",{className:"note__title"},"Important:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("span",{className:"ph"},"Katalon Studio")," version 7.0.0 onwards"),(0,o.kt)("li",{className:"li"},"An active Katalon Runtime Engine license. To learn more about activating the Katalon Runtime Engine license, you can refer to this document: Activate Katalon licenses."),(0,o.kt)("li",{className:"li"},"An API key. To learn more about API keys, you can refer to this document: ",(0,o.kt)("a",{className:"xref",href:"/docs/administer/settings/katalon-api-key-in-katalon-testops"},"Katalon API Key"),"."))),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To use plugins from Katalon Store in console mode:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Install the plugin from Katalon Store."),(0,o.kt)("li",{className:"li"},"While generating commands, use the API Key of the users who have the plugin installed. Both API key command-line options work, either ",(0,o.kt)("code",{className:"ph codeph"},"-apiKey=<Your_API_Key>")," or ",(0,o.kt)("code",{className:"ph codeph"},"-apikey=<Your_API_Key>"),".")),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"From version 7.7.0 onwards, if you belong to more than one Organization subscribing to Katalon Runtime Engine licenses, you can choose which Organization validates your license usage with the following command line: ",(0,o.kt)("code",{className:"ph codeph"},"-orgID=<Katalon_OrgID>"),"."))),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"If you use the private plugins, make sure you store all plugins in the ",(0,o.kt)("code",{className:"ph codeph"},"<project_name>/Plugins")," folder. See above: ",(0,o.kt)("a",{className:"xref",href:"/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/private-plugins-in-katalon-studio"},"Private Plugins"),"."))}c.isMDXComponent=!0}}]);