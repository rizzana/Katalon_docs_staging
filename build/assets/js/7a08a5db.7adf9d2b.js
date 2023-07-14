"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[60039],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var s=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),n=function(e){var a=s.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=n(e.components);return s.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},m=s.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=n(t),u=r,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?s.createElement(h,l(l({ref:a},d),{},{components:t})):s.createElement(h,l({ref:a},d))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var n=2;n<o;n++)l[n]=t[n];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87082:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=t(87462),r=(t(67294),t(3905)),o=t(44996);const l={id:"97426f70-22b2-11ed-9930-0242fe3e4a3f",title:"Upgrade or Downgrade WebDrivers in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio",hide_title:!0},i='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Upgrade or Downgrade WebDrivers in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',c={unversionedId:"97426f70-22b2-11ed-9930-0242fe3e4a3f",id:"97426f70-22b2-11ed-9930-0242fe3e4a3f",title:"Upgrade or Downgrade WebDrivers in Katalon Studio",description:"To have a better control of the browser versions while testing, Katalon Studio allows you to update or downgrade WebDrivers manually or via Katalon Studio built-in tools. This article will show you how to do so.",source:"@site/docs/97426f70-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"97426f70-22b2-11ed-9930-0242fe3e4a3f",title:"Upgrade or Downgrade WebDrivers in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Terminate WebDrivers in Katalon Studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/terminate-webdrivers-in-katalon-studio"},next:{title:"Handle WebDrivers with EventFiringWebDriver in Katalon Studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver-in-katalon-studio"}},n={},d=[{value:'<a id="id_1" class="anchor_top_offset"/>Update a WebDriver',id:"update-a-webdriver",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Replace a Webdriver',id:"replace-a-webdriver",level:2},{value:'<a id="concept-4485" class="anchor_top_offset"/>Use DriverFactory library',id:"use-driverfactory-library",level:2},{value:'<a id="id_4" class="anchor_top_offset"/>See also',id:"see-also",level:2}],p={toc:d};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-or-downgrade-webdrivers-in-katalon-studio"},(0,r.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,r.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Upgrade or Downgrade WebDrivers in ",(0,r.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To have a better control of the browser versions while testing, Katalon Studio allows you to update or downgrade WebDrivers manually or via Katalon Studio built-in tools. This article will show you how to do so."),(0,r.kt)("h2",{id:"update-a-webdriver"},(0,r.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Update a WebDriver"),(0,r.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,r.kt)("div",{className:"note note note_note"},(0,r.kt)("span",{className:"note__title"},"Note:"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},"From Katalon Studio version 7.0.0 onwards, you can update Chrome, Firefox and Internet Explorer WebDrivers directly from the application."),(0,r.kt)("li",{className:"li"},"From Katalon Studio version 7.6.0 onwards, you can also update Edge Chromium WebDrivers from Katalon Studio."))),"To update a WebDriver directly from Katalon Studio, from the main toolbar, select ",(0,r.kt)("strong",{className:"ph b"},"Tools > Update WebDrivers"),". Select a browser in the dropdown list."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"    ",(0,r.kt)("img",{className:"image",width:300,src:(0,o.Z)("/e60f6e20-2f30-11ed-9930-0242fe3e4a3f.png")})),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"From Katalon Studio version 7.6.0 onwards, Katalon Studio can detect and allows you to auto-update a compatible Chrome or Edge Chromium driver version when start using Spy/Recorder Web Utility."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,o.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/handle-webdrivers/KS-Auto-update-WebDriver.png"),width:500,alt:"update-webdriver-automatically"}),(0,r.kt)("br",null),(0,r.kt)("br",null)," "),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For console mode execution, you can use this command argument ",(0,r.kt)("code",{className:"ph codeph"},"--config -webui.autoUpdateDrivers=true")," to allow automatic WebDriver updates. You can learn more about using the console mode here: ",(0,r.kt)("a",{className:"xref",href:"/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine"},"Console Mode Execution"),"."),(0,r.kt)("h2",{id:"replace-a-webdriver"},(0,r.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Replace a Webdriver"),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To upgrade or downgrade WebDrivers, you can replace WebDrivers manually. You can choose to do so at the application or project level."),(0,r.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,r.kt)("span",{className:"note__title"},"Note:"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},"By default, Katalon Studio runs WebDrivers at the application level. Adding a Webdriver at the project level overrides the application level to open your web browsers. ")))),(0,r.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Do as follows:",(0,r.kt)("ol",{className:"ol"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},"Find the WebDriver version you want to run your test with. You can find them here:"),(0,r.kt)("div",{className:"p"},"Versions of browser drivers:",(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("a",{className:"xref j-external-link",href:"https://chromedriver.chromium.org/downloads",target:"_blank"},"Chrome Drivers"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("a",{className:"xref j-external-link",href:"https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html",target:"_blank"},"Gecko Drivers"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("a",{className:"xref j-external-link",href:"http://selenium-release.storage.googleapis.com/index.html",target:"_blank"},"Internet Explorer"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("a",{className:"xref j-external-link",href:"https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/",target:"_blank"},"Microsoft Edge")))))),(0,r.kt)("li",{className:"li"},(0,r.kt)("div",{className:"p"},"Find the location of the WebDrivers you want to replace.",(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},"At the application level, WebDriver binaries are stored here:",(0,r.kt)("div",{className:"note note note_note"},(0,r.kt)("span",{className:"note__title"},"Note:"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},"If you have multiple Katalon Studio versions installed on your development machine, make sure to navigate to the correct path of the Katalon Studio version you wish to use.")))),(0,r.kt)("p",{className:"p"},(0,r.kt)("em",{className:"ph i"},"For Window users")),(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Chrome")),(0,r.kt)("div",{className:"p"},"You can use 32-bit Windows Chromedriver for both 32-bit and 64-bit Windows.",(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\chromedriver_win32")),(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\chromedriver_win64")))),(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Firefox")),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\firefox_win32")),(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\firefox_win64"))),(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Internet Explorer")),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\iedriver_win32")),(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\iedriver_win64"))),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Edge"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\edgedriver")))),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Edge (Chromium)"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\edgechromium_win32")),(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"<Katalon Studio folder>\\configuration\\resources\\drivers\\edgechromium_win64")))),(0,r.kt)("p",{className:"p"},(0,r.kt)("em",{className:"ph i"},"For macOS users")),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Chrome"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"/Applications/Katalon Studio.app/Contents/Eclipse/configuration/resources/drivers/chromedriver_mac")))),(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Firefox")),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"/Applications/Katalon Studio.app/Contents/Eclipse/configuration/resources/drivers/firefox_mac"))),(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Edge (Chromium)")),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"/Applications/Katalon Studio.app/Contents/Eclipse/configuration\\resources\\drivers\\edgechromium_mac"))))),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},"At the project level, go to ",(0,r.kt)("strong",{className:"ph b"},"\\Project Folder\\Include")," on your computer and follow the below paths:",(0,r.kt)("div",{className:"note note note_note"},(0,r.kt)("span",{className:"note__title"},"Note:"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},"By default, there is no Webdriver at project level. After replacing WebDrivers at project level, restart Katalon Studio to run new WebDrivers.")))),(0,r.kt)("p",{className:"p"},(0,r.kt)("em",{className:"ph i"},"For Window users")),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Chrome"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/chromedriver_win32/chromedriver.exe"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/chromedriver_win64/chromedriver.exe"))))),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Firefox"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/geckodriver_win32/geckodriver.exe")),(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/geckodriver_win64/geckodriver.exe")))),(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Internet Explorer")),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/iedriver_win32/IEDriverServer.exe")),(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/iedriver_win64/IEDriverServer.exe"))),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Edge (Chromium)"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/edgedriver_win32/MicrosoftWebDriver.exe"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/edgedriver_win64/MicrosoftWebDriver.exe"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/edgechromiumdriver_win64/msedgedriver.exe"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/edgechromiumdriver_win32/msedgedriver.exe"))))),(0,r.kt)("p",{className:"p"},(0,r.kt)("em",{className:"ph i"},"For macOS users")),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Chrome"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/chromedriver_mac64/chromedriver"))))),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Firefox"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/geckodriver_mac64/geckodriver"))))),(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Edge (Chromium)")),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/edgechromiumdriver_mac/msedgedriver"))),(0,r.kt)("p",{className:"p"},(0,r.kt)("em",{className:"ph i"},"For Linux users")),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Chrome"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/chromedriver_linux32/chromedriver"))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/chromedriver_linux64/chromedriver "))))),(0,r.kt)("div",{className:"p"}," ",(0,r.kt)("strong",{className:"ph b"},"Firefox"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/geckodriver_linux32/geckodriver")),(0,r.kt)("li",{className:"li"}," ",(0,r.kt)("code",{className:"ph codeph"},"Include/drivers/geckodriver_linux64/geckodriver")))))))),(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},"After finding the correct location, replace the ",(0,r.kt)("code",{className:"ph codeph"},"driver.exe")," file with the one you have downloaded."),(0,r.kt)("div",{className:"note note note_note"},(0,r.kt)("span",{className:"note__title"},"Note:"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},(0,r.kt)("p",{className:"p"},"After updating or downgrading WebDrivers, to make sure the current version of the browser driver is running smoothly, it is advisable to try ",(0,r.kt)("strong",{className:"ph b"},"re-running the test")," to resolve and check any pop-up issues."))))))),(0,r.kt)("h2",{id:"use-driverfactory-library"},(0,r.kt)("a",{id:"concept-4485",class:"anchor_top_offset"}),"Use DriverFactory library"),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Studio also offers DriverFactory library to manipulate WebDriver instances by using Katalon keywords."),(0,r.kt)("h2",{id:"see-also"},(0,r.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"See also"),(0,r.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/terminate-webdrivers-in-katalon-studio"},"Terminate       Webdrivers"),"   "),"   ",(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver-in-katalon-studio"},"Handle       WebDrivers with EventFiringWebDrivers"),"   ")," "))}m.isMDXComponent=!0}}]);