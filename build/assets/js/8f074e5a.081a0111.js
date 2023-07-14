"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[49853],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var a=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,a,s=function(e,t){if(null==e)return{};var i,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),m=c(i),u=s,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return i?a.createElement(f,o(o({ref:t},p),{},{components:i})):a.createElement(f,o({ref:t},p))}));function u(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=i.length,o=new Array(r);o[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:s,o[1]=n;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},50061:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=i(87462),s=(i(67294),i(3905)),r=i(44996);const o={id:"8eaaba70-22b2-11ed-9930-0242fe3e4a3f",title:"Pass desired capabilities at runtime in Katalon Studio",slug:"create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio",hide_title:!0},n='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Pass desired capabilities at runtime in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',l={unversionedId:"8eaaba70-22b2-11ed-9930-0242fe3e4a3f",id:"8eaaba70-22b2-11ed-9930-0242fe3e4a3f",title:"Pass desired capabilities at runtime in Katalon Studio",description:"Desired capabilities configured in project settings are applied   at the project level. You can also use desired capabilities at the   test case level by passing desired capabilities to the test   script.",source:"@site/docs/8eaaba70-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio",permalink:"/docs/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"8eaaba70-22b2-11ed-9930-0242fe3e4a3f",title:"Pass desired capabilities at runtime in Katalon Studio",slug:"create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Set Custom Desired Capabilities in Katalon Studio",permalink:"/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-custom-desired-capabilities-in-katalon-studio"},next:{title:"Manage Desired Capabilities in Katalon Studio",permalink:"/docs/create-tests/manage-projects/project-settings/desired-capabilities/manage-desired-capabilities-in-katalon-studio"}},c={},p=[{value:'<a id="id_1" class="anchor_top_offset"/>Pass desired capabilities at runtime for WebUI Testing',id:"pass-desired-capabilities-at-runtime-for-webui-testing",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Open Firefox browser in private mode',id:"open-firefox-browser-in-private-mode",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Override desired capabilities in project settings',id:"override-desired-capabilities-in-project-settings",level:3},{value:'<a id="concept-4049" class="anchor_top_offset"/>Pass desired capabilities at runtime for remote execution',id:"pass-desired-capabilities-at-runtime-for-remote-execution",level:3}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pass-desired-capabilities-at-runtime-in-katalon-studio"},(0,s.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Pass desired capabilities at runtime in ",(0,s.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Desired capabilities configured in project settings are applied   at the project level. You can also use desired capabilities at the   test case level by passing desired capabilities to the test   script."),(0,s.kt)("h2",{id:"pass-desired-capabilities-at-runtime-for-webui-testing"},(0,s.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Pass desired capabilities at runtime for WebUI Testing"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To apply desired capabilities at runtime, place the following   sample code before the test script. This also overrides the desired   capabilities predefined in project settings."),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"import com.kms.katalon.core.configuration.RunConfiguration","\n","RunConfiguration.setWebDriverPreferencesProperty(<key>, <value>)","\n")),(0,s.kt)("h3",{id:"open-firefox-browser-in-private-mode"},(0,s.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Open Firefox browser in private mode"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The following example demonstrates how to configure the desired capabilities at runtime to open a test case in private mode in Firefox."),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Open the test case in script mode."),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Pass the ",(0,s.kt)("code",{className:"ph codeph"},"-private")," argument to the sample code as follows. Then place the code before the test script."),"     ",(0,s.kt)("pre",{className:"pre codeblock"},(0,s.kt)("code",null,"import com.kms.katalon.core.configuration.RunConfiguration","\n",'Map firefoxOptions =[args:"-private"]',"\n","RunConfiguration.setWebDriverPreferencesProperty('moz:firefoxOptions', firefoxOptions)","\n")),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Continue writing the script or use Web Spy/Record Utility to complete your test case."),"     ",(0,s.kt)("p",{className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-firefox-private-mode-runtime.png"),alt:"DC at test script"}),(0,s.kt)("br",null),(0,s.kt)("br",null),"     "),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Run the test with Firefox."),"     ",(0,s.kt)("p",{className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-run-with-firefox.png"),alt:"Run Firefox"}),(0,s.kt)("br",null),(0,s.kt)("br",null),"     "),"     ",(0,s.kt)("div",{className:"note note note_note"},(0,s.kt)("span",{className:"note__title"},"Note:"),"        ",(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},"           ",(0,s.kt)("p",{className:"p"},"Make sure to update the browser by clicking ",(0,s.kt)("strong",{className:"ph b"},"Tools")," > ",(0,s.kt)("strong",{className:"ph b"},"Update WebDrivers > Choose browser"),"."),"         ")),"     "),"     ",(0,s.kt)("p",{className:"p"},"The test successfully opens a Firefox browser in private mode."),"     ",(0,s.kt)("p",{className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-Open-firefox-private.png"),alt:"Open Firefox in private mode"}),(0,s.kt)("br",null),(0,s.kt)("br",null),"     "),"   ")),(0,s.kt)("h3",{id:"override-desired-capabilities-in-project-settings"},(0,s.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Override desired capabilities in project settings"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Suppose you want to override desired capabilities pre-configured in project settings; you can use the above sample code in the test script."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In the following example, we defined the desired capabilities for Chrome window-sized 1200x600 in project settings. We want to override this setting to run a test with a Chrome window in private mode sized 100x100. Do as follows:"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/project-settings-new-ui/KS-DC-runtime-windows-sized-1200x600.png"),alt:"Set DC in project settings"}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"To override the desired capabilities at runtime, open the test case in script mode. Pass the desired capabilities to the same key with the capabilities defined in project settings. Then place the code before the test script."),"     ",(0,s.kt)("p",{className:"p"},"Here, we want to override the ",(0,s.kt)("code",{className:"ph codeph"},"--window-size=1200,600")," capabilities. We pass the ",(0,s.kt)("code",{className:"ph codeph"},"--window-size=100,100")," and ",(0,s.kt)("code",{className:"ph codeph"},"--incognito")," capabilities to the ",(0,s.kt)("code",{className:"ph codeph"},"args")," key in the sample code as follows. Then place the code before the test script."),"     ",(0,s.kt)("div",{className:"p"},"       ",(0,s.kt)("pre",{className:"pre codeblock"},(0,s.kt)("code",null,"import com.kms.katalon.core.configuration.RunConfiguration","\n",'RunConfiguration.setWebDriverPreferencesProperty("args", ["--window-size=100,100","--incognito"])')),"     "),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Continue writing the script or use Web Spy/Record Utility to complete your test case."),"     ",(0,s.kt)("p",{className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/Yen8298/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-window-sized-100x100-incognito-runtime.png"),alt:"DC at test script"}),(0,s.kt)("br",null),(0,s.kt)("br",null),"     "),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Run the test with Chrome."),"     ",(0,s.kt)("p",{className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/Yen8298/docs-images/raw/master/katalon-studio/docs/desired-capabilities-override-in-run-time/KS-DC-Chrome-windows-100x100-incognito-run.png"),alt:"Set DC in project settings"}),(0,s.kt)("br",null),(0,s.kt)("br",null),"     "),"     ",(0,s.kt)("p",{className:"p"},"The test successfully opens a Chrome window-size 100x100 in private mode (overriding Chrome window-size 1200x600)."),"   ")),(0,s.kt)("h3",{id:"pass-desired-capabilities-at-runtime-for-remote-execution"},(0,s.kt)("a",{id:"concept-4049",class:"anchor_top_offset"}),"Pass desired capabilities at runtime for remote execution"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To apply desired capabilities at runtime, place the following   sample code before the test script. This also overrides the desired   capabilities predefined in project settings."),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"import com.kms.katalon.core.configuration.RunConfiguration","\n","RunConfiguration.setDriverPreferencesProperty('Remote',","  ","capsName , capsValue)")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For example, we want to set remote execution environment as   Windows 10, enter the following sample code before the test   script:"),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI","\n","import com.kms.katalon.core.configuration.RunConfiguration","\n","\n","RunConfiguration.setDriverPreferencesProperty('Remote', 'os', 'Windows')","  ","\n","RunConfiguration.setDriverPreferencesProperty('Remote', 'os_version', '10')","  ","\n","\n","WebUI.openBrowser('google.com')")),(0,s.kt)("nav",{xmlns:"http://www.w3.org/1999/xhtml",role:"navigation",className:"related-links"},(0,s.kt)("div",{className:"linklist relinfo"},(0,s.kt)("strong",null,"Related information"),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("ul",{className:"linklist"},(0,s.kt)("li",{className:"linklist"},(0,s.kt)("a",{className:"link j-external-link",href:"https://docs.katalon.com/javadoc/com/kms/katalon/core/configuration/RunConfiguration.html",target:"_blank"},"RunConfiguration"))))))}m.isMDXComponent=!0}}]);