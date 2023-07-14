"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[49320],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?i.createElement(f,r(r({ref:t},c),{},{components:a})):i.createElement(f,r({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(87462),n=(a(67294),a(3905)),o=a(44996);const r={id:"442f4300-faeb-11ed-878a-0242c7a41fd4",title:"Find the locator of a mobile application element",slug:"create-tests/test-objects/mobile-test-objects/find-the-locator-of-a-mobile-application-element",hide_title:!0},s='<a id="task-4157" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Find the locator of a mobile application element',l={unversionedId:"442f4300-faeb-11ed-878a-0242c7a41fd4",id:"442f4300-faeb-11ed-878a-0242c7a41fd4",title:"Find the locator of a mobile application element",description:"We can identify a mobile app element's locator using Appium Inspector.",source:"@site/docs/442f4300-faeb-11ed-878a-0242c7a41fd4.md",sourceDirName:".",slug:"/create-tests/test-objects/mobile-test-objects/find-the-locator-of-a-mobile-application-element",permalink:"/docs/create-tests/test-objects/mobile-test-objects/find-the-locator-of-a-mobile-application-element",draft:!1,tags:[],version:"current",frontMatter:{id:"442f4300-faeb-11ed-878a-0242c7a41fd4",title:"Find the locator of a mobile application element",slug:"create-tests/test-objects/mobile-test-objects/find-the-locator-of-a-mobile-application-element",hide_title:!0},sidebar:"aSidebar",previous:{title:"Parameterize Mobile Test Object Properties in Katalon Studio",permalink:"/docs/create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio"},next:{title:"Selection methods for Web objects in Katalon Studio",permalink:"/docs/create-tests/test-objects/web-test-objects/selection-methods-for-web-objects-in-katalon-studio"}},p={},c=[],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"find-the-locator-of-a-mobile-application-element"},(0,n.kt)("a",{id:"task-4157",class:"anchor_top_offset"}),(0,n.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Find the locator of a mobile application element"),(0,n.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"We can identify a mobile app element's locator using Appium Inspector."),(0,n.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Make sure Appium was installed  by running the commands:"),(0,n.kt)("div",{className:"itemgroup info"},(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"appium --version","\n","npm install appium-doctor -g","\n","appium-doctor -h")))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Download and install Appium Inspector: ",(0,n.kt)("a",{className:"xref j-external-link",href:"https://github.com/appium/appium-inspector/releases",target:"_blank"},"Appium Inspector"),"."),(0,n.kt)("div",{className:"itemgroup info"},"Start Appium server by running: ",(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"appium --base-path /wd/hub")))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Start Appium Inspector: "),(0,n.kt)("div",{className:"itemgroup info"},(0,n.kt)("div",{className:"p"},(0,n.kt)("ul",{className:"ul"},(0,n.kt)("li",{className:"li"},(0,n.kt)("div",{className:"p"},"Run this command before starting Appium Inspector: ",(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,'xattr -cr "/Applications/Appium Inspector.app"')))),(0,n.kt)("li",{className:"li"},(0,n.kt)("div",{className:"p"},"Run Appium Inspector: ",(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"/Applications/Appium Inspector.app")))))))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"Start an Appium session: "),(0,n.kt)("div",{className:"itemgroup info"},(0,n.kt)("img",{className:"image",src:(0,o.Z)("/43d34050-faeb-11ed-878a-0242c7a41fd4.jpeg"),alt:"start Appium session"}),(0,n.kt)("ul",{className:"ul"},(0,n.kt)("li",{className:"li"},(0,n.kt)("p",{className:"p"},"Step 1: Fill in ",(0,n.kt)("span",{className:"ph uicontrol"},"Remote Host"),", ",(0,n.kt)("span",{className:"ph uicontrol"},"Remote Port")," and ",(0,n.kt)("span",{className:"ph uicontrol"},"Remote Path")," for the Appium server. ")),(0,n.kt)("li",{className:"li"},(0,n.kt)("div",{className:"p"},"Step 2: Input device information to ",(0,n.kt)("span",{className:"ph uicontrol"},"JSON representation"),". Here is the sample: ",(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"{","\n",'"appium:deviceName": "emulator-5554",',"\n",'"platformName": "Android",',"\n",'"appium:app": "/path/to/apkFiles/ApiDemos-debug.apk"',"\n","}")))),(0,n.kt)("li",{className:"li"},(0,n.kt)("p",{className:"p"},"Step 3: Select ",(0,n.kt)("span",{className:"ph uicontrol"},"Start Session"),"."))))),(0,n.kt)("li",{className:"li step stepexpand"},(0,n.kt)("span",{className:"ph cmd"},"After the app launched  successfully, click the element and retrieve the locator value at ",(0,n.kt)("span",{className:"ph uicontrol"},"Selected Element"),"."),(0,n.kt)("div",{className:"itemgroup info"},(0,n.kt)("img",{className:"image",src:(0,o.Z)("/44ab29c0-faeb-11ed-878a-0242c7a41fd4.jpeg"),alt:"copy locator value on Appium"}),"Here is a sample of custom keyword: ",(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"package mypackage","\n","\n","import org.openqa.selenium.remote.DesiredCapabilities","\n","import com.fasterxml.jackson.databind.ObjectMapper","\n","import com.kms.katalon.core.annotation.Keyword","\n","import io.appium.java_client.MobileElement","\n","import io.appium.java_client.android.AndroidDriver","\n","\n","class MobileSupport ","{","\n","    ","@Keyword","\n","    ","static def getSession(String appiumEnpoint, String desizedCapabilitiesJson) ","{","\n","        ","Map<String,Object> desizedCapabilities = new ObjectMapper().readValue(desizedCapabilitiesJson, HashMap.class)","\n","        ","DesiredCapabilities caps = new DesiredCapabilities(desizedCapabilities)","\n","        ","AndroidDriver<MobileElement> driver = new AndroidDriver<MobileElement>(new URL(appiumEnpoint), caps)","\n","        ","return driver","\n","    ","}","\n","}","\n")),"And here is an sample test case for your reference: ",(0,n.kt)("pre",{className:"pre codeblock"},(0,n.kt)("code",null,"import org.openqa.selenium.By","\n","import org.testng.Assert","\n","import io.appium.java_client.MobileElement","\n","import io.appium.java_client.android.AndroidDriver","\n","import mypackage.MobileSupport","\n","\n",'String desCaps = """',"\n","    ","{","\n","      ",'"appium:deviceName": "emulator-5554",',"\n","      ",'"platformName": "Android",',"\n","      ",'"appium:app": "/Users/thanhnhanmai/Documents/apkFiles/ApiDemos-debug.apk"',"\n","    ","}","    ","\n",'"""',"\n","\n",'"Open API Demos application"',"\n",'AndroidDriver<MobileElement> driver = MobileSupport.getSession("http://127.0.0.1:4723/wd/hub"", desCaps)',"\n","\n",'"Verify that the tool bar title is API Demos"',"\n",'By toolBarTitle = By.xpath("/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView")',"\n",'Assert.assertEquals(driver.findElement(toolBarTitle).getText(), "API Demos")',"\n","\n",'"Click App"',"\n",'driver.findElementByAccessibilityId("App").click()',"\n","\n",'"Click Search"',"\n","driver.findElementByXPath(\"//android.widget.TextView[@content-desc='Search']\").click()","\n","\n",'"Click Invoke Search"',"\n",'driver.findElementByAccessibilityId("Invoke Search").click()',"\n","\n","\"Fill 'Prefill query'\"","\n",'String seachText = "ABC"',"\n",'driver.findElement(By.id("io.appium.android.apis:id/txt_query_prefill")).sendKeys(seachText)',"\n","\n","\"Click 'onSearchRequest' button\"","\n",'driver.findElementByAccessibilityId("onSearchRequested()").click()',"\n","\n",'"Verify content of the address bar"',"\n",'Assert.assertEquals(driver.findElement(By.id("android:id/search_src_text")).getText(), seachText)'))))),(0,n.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"You have retrieved the app element's locator information. "))}d.isMDXComponent=!0}}]);