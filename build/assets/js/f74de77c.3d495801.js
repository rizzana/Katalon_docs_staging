"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[8703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,w=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(w,i(i({ref:t},m),{},{components:n})):a.createElement(w,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"99af77d0-22b2-11ed-9930-0242fe3e4a3f",title:"Execute Windows commands in Katalon Studio",slug:"create-tests/keywords/using-keywords-in-katalon-studio/windows-testing/execute-windows-commands-in-katalon-studio",hide_title:!0},i='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Execute Windows commands in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',s={unversionedId:"99af77d0-22b2-11ed-9930-0242fe3e4a3f",id:"99af77d0-22b2-11ed-9930-0242fe3e4a3f",title:"Execute Windows commands in Katalon Studio",description:"To execute Windows command line, simply use this script in your   test case:",source:"@site/docs/99af77d0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/keywords/using-keywords-in-katalon-studio/windows-testing/execute-windows-commands-in-katalon-studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/windows-testing/execute-windows-commands-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"99af77d0-22b2-11ed-9930-0242fe3e4a3f",title:"Execute Windows commands in Katalon Studio",slug:"create-tests/keywords/using-keywords-in-katalon-studio/windows-testing/execute-windows-commands-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Handling Horizontal Swipe in Mobile Automation in Katalon Studio",permalink:"/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-horizontal-swipe-in-mobile-automation-in-katalon-studio"},next:{title:"[WebUI] Accept Alert",permalink:"/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-accept-alert"}},l={},c=[{value:'<a id="id_1" class="anchor_top_offset"/>References',id:"references",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"execute-windows-commands-in-katalon-studio"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Execute Windows commands in ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To execute Windows command line, simply use this script in your   test case:"),(0,o.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,o.kt)("code",null,'String cmd = "Your command"',"\n","Runtime.getRuntime().exec(cmd)","\n")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,o.kt)("strong",{className:"ph b"},"Example:")," "),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Call taskkill command")),(0,o.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,o.kt)("code",null,'String cmd = "taskkill /F firefox.exe"',"\n","Runtime.getRuntime().exec(cmd)","\n")),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Launch external program:")),(0,o.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,o.kt)("code",null,'Runtime.runtime.exec("path/to/vlc.exe")',"\n")),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Execute a batch file")),(0,o.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,o.kt)("code",null,"import com.kms.katalon.core.configuration.RunConfiguration","\n","  ","/**","\n","   ","* Execute a batch file situated in the KS project directory.","\n","   ",'* @param batchFile (String) e.g. "myfile.bat"',"\n","   ","*/","\n","  ","static void runBatchFile(String batchFile) ","{","\n","    ","String bf = RunConfiguration.getProjectDir() + '/' + batchFile","\n","    ",'comment("Running batch file: " + bf)',"\n","    ","Runtime.runtime.exec(bf)","\n","  ","}","\n")),(0,o.kt)("h2",{id:"references"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"References"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://api-docs.katalon.com/com/kms/katalon/core/configuration/RunConfiguration.html",target:"_blank"},"RunConfiguration"),"     "),"   "),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/Runtime.html",target:"_blank"},"Runtime"),"     "),"   "),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://www.lifewire.com/list-of-command-prompt-commands-4092302",target:"_blank"},"Windows       command line"),"   ")," "))}d.isMDXComponent=!0}}]);