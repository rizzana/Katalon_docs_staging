"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[47222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||s;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={id:"9031f6b0-22b2-11ed-9930-0242fe3e4a3f",title:"Use different browser versions",slug:"create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/use-different-browser-versions",hide_title:!0},i='<a id="troubleshooting-2011" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Use different browser versions',a={unversionedId:"9031f6b0-22b2-11ed-9930-0242fe3e4a3f",id:"9031f6b0-22b2-11ed-9930-0242fe3e4a3f",title:"Use different browser versions",description:"In case you want Katalon Studio to use different versions besides the currently installed version, there are two ways to do it.",source:"@site/docs/9031f6b0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/use-different-browser-versions",permalink:"/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/use-different-browser-versions",draft:!1,tags:[],version:"current",frontMatter:{id:"9031f6b0-22b2-11ed-9930-0242fe3e4a3f",title:"Use different browser versions",slug:"create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/use-different-browser-versions",hide_title:!0},sidebar:"aSidebar",previous:{title:"Unable to record on Internet Explorer",permalink:"/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-record-on-internet-explorer"},next:{title:"WebDriver exception: Element is not clickable at point (x, y)",permalink:"/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/webdriver-exception-element-is-not-clickable-at-point-x-y"}},c={},l=[],d={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-different-browser-versions"},(0,n.kt)("a",{id:"troubleshooting-2011",class:"anchor_top_offset"}),(0,n.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Use different browser versions"),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"shortdesc"},"In case you want Katalon Studio to use different versions besides the currently installed version, there are two ways to do it."),(0,n.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"bodydiv troubleSolution"},(0,n.kt)("section",{className:"section remedy"},(0,n.kt)("ol",{className:"ol steps"},(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"You can use custom keywords."),(0,n.kt)("div",{className:"itemgroup info"},"To use this method, the browser instances you wish to use should be installed on your machine first.")),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Create a custom keyword to open the browser. Press ",(0,n.kt)("strong",{className:"ph b"},"Ctrl + Shift + O")," to automatically import necessary packages. To learn more about creating a custom keyword, you can refer to this document here: Introduction to Custom Keyword."),(0,n.kt)("div",{className:"itemgroup stepxmp"},(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"\n","import com.kms.katalon.core.webui.driver.DriverFactory ","\n","public class WebUICustomKeywords ","{","  ","\n","\t","@Keyword","  ","\n","\t","def openFirefoxBrowser(String firefoxPath, String firefoxDriver) ","{"," ","\n","\n","\t","\t","//Set path to Firefox version ","\n","\t","\t",'System.setProperty("webdriver.firefox.bin", firefoxPath) ',"\n","\n","\t","\t",'//Set path to Firefox driver: \\configuration\\resources\\drivers\\firefox_win64\\geckodriver.exe System.setProperty("webdriver.gecko.driver", firefoxDriver)',"\n","\t","\t","WebDriver driver = new FirefoxDriver() ","\n","\t","\t","DriverFactory.changeWebDriver(driver)","  ","\n","\t","}","  ","\n","\n","\t","@Keyword","  ","\n","\t","def openChromeBrowser(String chromeDriverPath, String chromePath)","  ","{"," ","\n","\n","\t","\t",'//Set path to chromedriver driver: \\configuration\\resources\\drivers\\chrome_win32\\chromedriver.exe System.setProperty("webdriver.chrome.driver", chromeDriverPath) ',"\n","\t","\t","ChromeOptions options = new ChromeOptions() ","\n","\n","\t","\t","//Set path to Chrome binary options.setBinary(chromePath) ","\n","\t","\t","WebDriver driver = new ChromeDriver(options) DriverFactory.changeWebDriver(driver)","  ","\n","\t","}"," ","\t","\n","}","\t","\n")))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"In a test case, use the newly created keyword."),(0,n.kt)("div",{className:"itemgroup stepxmp"},(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"\n","CustomKeywords.'com.example.WebUICustomKeywords.openFirefoxBrowser'('C:\\\\Program Files\\\\Mozilla Firefox 52\\\\firefox.exe',","  ","'C:\\\\5.4\\\\Katalon Studio Windows 64\\\\configuration\\\\resources\\\\drivers\\\\firefox_win64\\\\geckodriver.exe')","\n","\n","WebUI.navigateToUrl(GlobalVariable.G_SiteURL) ","\n","WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))","\n"))))))),(0,n.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"bodydiv troubleSolution"},(0,n.kt)("section",{className:"section remedy"},(0,n.kt)("div",{className:"li step p"},(0,n.kt)("span",{className:"ph cmd"},"You can also downgrade browser version."),(0,n.kt)("div",{className:"itemgroup info"},"If you want to use a very old version of your current browser, you may need to downgrade or upgrade browser drivers as well as Selenium WebDriver, you can refer to this document here: ",(0,n.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio"},"Update or Downgrade WebDrivers"))))))}u.isMDXComponent=!0}}]);