"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[32066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,h=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return a?r.createElement(h,n(n({ref:t},d),{},{components:a})):r.createElement(h,n({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,n=new Array(o);n[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},34609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(87462),s=(a(67294),a(3905)),o=a(44996);const n={id:"89c0a420-22b2-11ed-9930-0242fe3e4a3f",title:"Get Started with Katalium Server",slug:"plugins-and-add-ons/katalium-server/get-started-with-katalium-server",hide_title:!0},l='<a id="id_katalium-user-guide" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Get Started with Katalium Server',i={unversionedId:"89c0a420-22b2-11ed-9930-0242fe3e4a3f",id:"89c0a420-22b2-11ed-9930-0242fe3e4a3f",title:"Get Started with Katalium Server",description:"Set up Katalium Server",source:"@site/docs/89c0a420-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/plugins-and-add-ons/katalium-server/get-started-with-katalium-server",permalink:"/docs/plugins-and-add-ons/katalium-server/get-started-with-katalium-server",draft:!1,tags:[],version:"current",frontMatter:{id:"89c0a420-22b2-11ed-9930-0242fe3e4a3f",title:"Get Started with Katalium Server",slug:"plugins-and-add-ons/katalium-server/get-started-with-katalium-server",hide_title:!0},sidebar:"aSidebar",previous:{title:"Katalium Server Overview",permalink:"/docs/plugins-and-add-ons/katalium-server/katalium-server-overview"},next:{title:"Katalium Server - Execute Katalon Studio's scripts on Remote Machines",permalink:"/docs/plugins-and-add-ons/katalium-server/katalium-server---execute-katalon-studios-scripts-on-remote-machines"}},c={},d=[{value:'<a id="id_1" class="anchor_top_offset"/>Set up Katalium Server',id:"set-up-katalium-server",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Standalone mode',id:"standalone-mode",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Grid Mode',id:"grid-mode",level:3}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"get-started-with-katalium-server"},(0,s.kt)("a",{id:"id_katalium-user-guide",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Get Started with Katalium Server"),(0,s.kt)("h2",{id:"set-up-katalium-server"},(0,s.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Set up Katalium Server"),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},"   ",(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Install Java. The recommended version is Java 8."),"   "),"   ",(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Download and extract the latest release of the Katalium Server       from ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio/katalium-server/releases",target:"_blank"},"here"),".       The ",(0,s.kt)("code",{className:"ph codeph"},"kata-server.jar")," can be executed in Standalone,       Grid Hub, or Grid Node modes."),"   "),"   ",(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Set up Katalium Server by using Command Line."),"   ")," "),(0,s.kt)("h3",{id:"standalone-mode"},(0,s.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Standalone mode"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To start the server in the standalone mode, execute   ",(0,s.kt)("code",{className:"ph codeph"},"standalone.sh")," file (in macOS and Linux) or   ",(0,s.kt)("code",{className:"ph codeph"},"standalone.bat")," file (in Windows) with these   commands:"),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"cd katalium-server","\n","standalone.bat","\n")),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"cd katalium-server","\n","chmod u+x ./standalone.sh","\n","./standalone.sh","\n")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Successfully activated Katalium Server will be displayed as   belows:"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("img",{className:"image",src:(0,o.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalium-server/docs/katalium-user-guide/1-standalone-mode.png")}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When you activate the server for the first time, you have to   enter the email and password of your Katalon Account. It is   recommended to use Katalon API Keys instead of your account's   password. Refer to ",(0,s.kt)("a",{className:"xref",href:"/docs/administer/settings/katalon-api-keys-in-katalon-studio"},"Katalon     API Keys")," for further details."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("strong",{className:"ph b"},"KATALON_EMAIL"),": Enter your Katalon account. If   you don't have an account, sign up here: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://www.katalon.com/sign-up/",target:"_blank"},"Sign up"),"."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("strong",{className:"ph b"},"KATALON_API_KEY"),": Enter the API Key."),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,s.kt)("span",{className:"note__title"},"Note:"),(0,s.kt)("p",{className:"p"},"If you want to re-activate Katalium Server, you have to remove",(0,s.kt)("code",{className:"ph codeph"},"framework.properties")," file in ",(0,s.kt)("code",{className:"ph codeph"},".katalon"),"folder.")),(0,s.kt)("h3",{id:"grid-mode"},(0,s.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Grid Mode"),(0,s.kt)("h4",{xmlns:"http://www.w3.org/1999/xhtml",className:"title topictitle4 anchor_top_offset",id:"id_4"},"Grid Hub"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To start Katalium Server as a Grid Hub, execute   ",(0,s.kt)("code",{className:"ph codeph"},"hub.sh")," file (in macOS and Linux) or   ",(0,s.kt)("code",{className:"ph codeph"},"hub.bat")," file (in Windows) with these commands:"),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"cd katalium-server","\n","hub.bat","\n")),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"cd katalium-server","\n","chmod u+x ./hub.sh","\n","./hub.sh","\n")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"See ",(0,s.kt)("strong",{className:"ph b"},"Standalone mode")," for activation steps."),(0,s.kt)("h4",{xmlns:"http://www.w3.org/1999/xhtml",className:"title topictitle4 anchor_top_offset",id:"id_5"},"Grid Node"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Before executing the scripts, please set the Hub URL in   ",(0,s.kt)("code",{className:"ph codeph"},"nodeConfigForWindow.json")," (for Windows) or   ",(0,s.kt)("code",{className:"ph codeph"},"nodeConfig.json")," (for macOS and Linux) so that Grid   Nodes can register themselves with the above Grid Hub, e.g.   ",(0,s.kt)("code",{className:"ph codeph"},"http://hub_ip:4444"),"."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To start Katalium Server as a Grid Node, execute   ",(0,s.kt)("code",{className:"ph codeph"},"node.sh")," file (in macOS and Linux) or   ",(0,s.kt)("code",{className:"ph codeph"},"node.bat")," file (in Windows)."),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"cd katalium-server","\n","node.bat","\n")),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"cd katalium-server","\n","chmod u+x ./node.sh","\n","./node.sh","\n")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"See ",(0,s.kt)("strong",{className:"ph b"},"Standalone mode")," for activation steps."))}p.isMDXComponent=!0}}]);