"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[53658],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,s=function(e,t){if(null==e)return{};var o,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),u=s,w=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return o?a.createElement(w,r(r({ref:t},c),{},{components:o})):a.createElement(w,r({ref:t},c))}));function u(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,r=new Array(n);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<n;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},50473:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(87462),s=(o(67294),o(3905)),n=o(44996);const r={id:"97533850-22b2-11ed-9930-0242fe3e4a3f",title:"Testing Web App on Mobile Browsers in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio",hide_title:!0},i='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Testing Web App on Mobile Browsers in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',l={unversionedId:"97533850-22b2-11ed-9930-0242fe3e4a3f",id:"97533850-22b2-11ed-9930-0242fe3e4a3f",title:"Testing Web App on Mobile Browsers in Katalon Studio",description:"Katalon Studio supports executing the same test cases on both desktop browsers and mobile browsers. A test case created via recording, either in manual mode or script mode, on a desktop browser with Katalon Studio can be executed on a mobile browser as well. This tutorial guides you step by step how to do that.",source:"@site/docs/97533850-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"97533850-22b2-11ed-9930-0242fe3e4a3f",title:"Testing Web App on Mobile Browsers in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Testing Mobile Apps using Custom Cloud Devices in Katalon Studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-custom-cloud-devices-in-katalon-studio"},next:{title:"Reduce Execution Time in Mobile Testing in Katalon Studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Understand your web application under test (AUT)',id:"understand-your-web-application-under-test-aut",level:2},{value:'<a id="id_3" class="anchor_top_offset"/>Create a test case with Katalon Studio',id:"create-a-test-case-with-katalon-studio",level:2},{value:'<a id="id_4" class="anchor_top_offset"/>Scenario: Login',id:"scenario-login",level:3},{value:'<a id="id_5" class="anchor_top_offset"/>Manual Mode',id:"manual-mode",level:3},{value:'<a id="id_6" class="anchor_top_offset"/>Script Mode',id:"script-mode",level:3},{value:'<a id="id_7" class="anchor_top_offset"/>Execute the test case with a mobile browser',id:"execute-the-test-case-with-a-mobile-browser",level:2},{value:'<a id="id_8" class="anchor_top_offset"/>Troubleshoot common errors',id:"troubleshoot-common-errors",level:2}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing-web-app-on-mobile-browsers-in-katalon-studio"},(0,s.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Testing Web App on Mobile Browsers in ",(0,s.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Studio supports executing the same test cases on both desktop browsers and mobile browsers. A test case created via recording, either in manual mode or script mode, on a desktop browser with Katalon Studio can be executed on a mobile browser as well. This tutorial guides you step by step how to do that."),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"Understand your web application under test (AUT)"),(0,s.kt)("li",{className:"li"},"Create a test case with Katalon Studio"),(0,s.kt)("li",{className:"li"},"Execute the test case with mobile browsers")),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"Katalon Studio: running on both Windows and macOS with a beta Linux support. Visit the ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://www.katalon.com/download",target:"_blank"},"Katalon Studio website")," to get the latest version.")),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"Verify if your computer meets the ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://docs.katalon.com/docs/general-information/supported-environments/supported-environments-for-katalon-studio-and-katalon-runtime-engine",target:"_blank"},"System Requirements")," of Katalon Studio.")),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"A Katalon account to activate this automation tool. If you don't have one, provide your desired username and password to sign up after launching the app.")),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"Check out ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://docs.katalon.com/docs/get-started/onboarding-katalon-platform/quick-guide-for-testers",target:"_blank"},"Quick Start")," to familiarize yourself with Katalon Studio."))),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Web application testing can be directly executed on a mobile device. To do so, you need to connect your testing devices/emulators to a machine and run test scripts. Make sure Chrome and Safari applications are installed so that test steps can execute properly."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"It requires some knowledge of working with OS, Appium, and devices in use. Please refer to our Mobile Setup guide for ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-android-setup-in-katalon-studio"},"Android")," and ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-set-up-real-ios-devices-in-katalon-studio"},"iOS")," for detailed instructions."),(0,s.kt)("h2",{id:"understand-your-web-application-under-test-aut"},(0,s.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Understand your web application under test (AUT)"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When a smartphone is a must-have for everyone, it is required for a web application to accommodate both desktop browsers and mobile browsers."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"\u200b \u200bOften, a desktop UI and a mobile web UI will vary for the same web application since the screen of a desktop is different from that of a phone (in resolution, size, and ratio, for example). Thus, a web application with responsive implementation can adapt to various devices, which might cause a problem during the quality assurance period. The same element on desktop implementation may have different locators on mobile, preventing test cases from executing correctly on mobile browsers.\u200b \u200b"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Do not stress out when your test cases cannot run properly on mobile browsers like desktop browsers. Automation testing is about understanding the AUT (Application Under Test) clearly to find a suitable approach. This practice should be a top priority before we want to continue testing our web application."),(0,s.kt)("h2",{id:"create-a-test-case-with-katalon-studio"},(0,s.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Create a test case with Katalon Studio"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"After understanding your AUT, and you have decided to perform   automation testing, let's create a test case with Katalon Studio.   Below is the test scenario and how to create the test case in   manual mode."),(0,s.kt)("h3",{id:"scenario-login"},(0,s.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Scenario: Login"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 1: Launch Chrome browser on mobile."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 2: Enter valid username and password."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 3: Click on the login button."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 4: Verify login is successful."),(0,s.kt)("h3",{id:"manual-mode"},(0,s.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Manual Mode"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 1: Click on Add from Toolbar and select Web UI Keyword."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/running_application_mobile_browsers/web-ui-keyword.png"),width:250,alt:"web UI keyword"}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 2: Select ",(0,s.kt)("em",{className:"ph i"},"Open Browser")," and pass the URL in the   input field. Call ",(0,s.kt)("em",{className:"ph i"},"Wait for Page to Load")," and provide a   timeout value in the input field."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 3: Add ",(0,s.kt)("em",{className:"ph i"},"Wait for Element Visible"),' keyword for button   object "Make Appointment."'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 4: Before performing the click action, Verify whether the   element is clickable using ",(0,s.kt)("em",{className:"ph i"},"Verify Element Clickable"),'   keyword, pass the object button "Make Appointment."'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 5: Call ",(0,s.kt)("em",{className:"ph i"},"Click"),' action to be performed on the "Make   Appointment" button.'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 6: ",(0,s.kt)("em",{className:"ph i"},"Wait for Element Visible"),' "Login."'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 7: Add ",(0,s.kt)("em",{className:"ph i"},"Verify Element Clickable"),' and pass the   object as the "Login" button.'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 8: ",(0,s.kt)("em",{className:"ph i"},"Set Text"),' for the username as "John Doe".'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 9:  ",(0,s.kt)("em",{className:"ph i"},"Set Text"),' in the password as   "ThisIsNotAPassword".'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 10: Add ",(0,s.kt)("em",{className:"ph i"},"Click")," action to be performed on the Login   button."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 11: ",(0,s.kt)("em",{className:"ph i"},"Wait for Element"),' present of text "Make   Appointment".'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step12: Add ",(0,s.kt)("em",{className:"ph i"},"Get Text"),' keyword to capture the Header   "Make Appointment" and store it in a variable called   "actual_Header".'),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 13: Use the ",(0,s.kt)("em",{className:"ph i"},"Verify Match")," Keyword to verify the   actual and expected texts."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Step 14: Close the browser."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/running_application_mobile_browsers/830-test-steps.png"),width:850,alt:"test steps"}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can also achieve the desired test case by using   ",(0,s.kt)("strong",{className:"ph b"},"Script Mode"),"."),(0,s.kt)("h3",{id:"script-mode"},(0,s.kt)("a",{id:"id_6",class:"anchor_top_offset"}),"Script Mode"),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject","\n","import com.kms.katalon.core.model.FailureHandling as FailureHandling","\n","import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI","\n","\n","'Launch Browser'","\n","WebUI.openBrowser('http://demoaut.katalon.com/')","\n","\n","'Wait for Page Load'","\n","WebUI.waitForPageLoad(30)","\n","\n","'Wait for Element Visible of Button Make Appointment'","\n","WebUI.waitForElementVisible(findTestObject('Browser Application/button_Make Appointment'), 30)","\n","\n","'Verify Button Make Appointment is clickable or not'","\n","WebUI.verifyElementClickable(findTestObject('Browser Application/button_Make Appointment'), FailureHandling.STOP_ON_FAILURE)","\n","\n","'Click on Button Make Appointment'","\n","WebUI.click(findTestObject('Browser Application/button_Make Appointment'))","\n","\n","'Wait for text login Header '","\n","WebUI.waitForElementVisible(findTestObject('Browser Application/text_Login Header'), 30)","\n","\n","'Verify text login Header is in visible '","\n","WebUI.verifyElementVisible(findTestObject('Browser Application/text_Login Header'))","\n","\n","'Enter username as \"John Doe\"'","\n","WebUI.setText(findTestObject('Browser Application/txt_UserName'), 'John Doe')","\n","\n","'Enter password as \"ThisIsNotAPassword\"'","\n","WebUI.setText(findTestObject('Browser Application/txt_Password'), 'ThisIsNotAPassword')","\n","\n","'Click on Login Button'","\n","WebUI.click(findTestObject('Browser Application/button_Login'))","\n","\n","'Wait for Element Present of \"Header Make Appointment\"'","\n","WebUI.waitForElementPresent(findTestObject('Browser Application/text_Header Make Appointment'), 30)","\n","\n","'Get the Header text of Make Appointment and store in \"actual_Header\" variable'","\n","actual_Header = WebUI.getText(findTestObject('Browser Application/text_Header Make Appointment'))","\n","\n","'Verify the actual and Expected text'","\n","WebUI.verifyMatch(actual_Header, 'Make Appointment', false)","\n","\n","'Close the Browser'","\n","WebUI.closeBrowser()","\n","\n")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Do not forget to execute the test case in Katalon Studio again   to ensure that it works properly."),(0,s.kt)("h2",{id:"execute-the-test-case-with-a-mobile-browser"},(0,s.kt)("a",{id:"id_7",class:"anchor_top_offset"}),"Execute the test case with a mobile browser"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Double-check to ensure that the real device is connected, the   virtual device loaded, or cloud device connected successfully. From   Katalon Studio, select the test case and choose to execute with   Android/iOS as follows:"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/running_application_mobile_browsers/830-execution.png"),width:850,alt:"execution"}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"It may take a while before the browser can be loaded into the   device."),(0,s.kt)("h2",{id:"troubleshoot-common-errors"},(0,s.kt)("a",{id:"id_8",class:"anchor_top_offset"}),"Troubleshoot common errors"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"1. ChromeDriver related error"),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"error: No Chromedriver found that can automate Chrome '<chrome_version>'","\n")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To fix this, you have to download ChromeDriver for Appium manually. You can download the ChromeDriver for Appium from this Github repository: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://github.com/appium/appium-chromedriver",target:"_blank"},"ChromeDriver"),". By default, the npm package ",(0,s.kt)("code",{className:"ph codeph"},"appium-chromdriver")," comes bundled with the latest version of ChromeDriver.  Replace the existing ChromeDriver in Appium Directory with the newly downloaded one."),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"macOS: go to ",(0,s.kt)("code",{className:"ph codeph"},"/usr/local/lib/node_modules/appium/node_modules/appium-chromedriver")),(0,s.kt)("li",{className:"li"},"Windows: go to ",(0,s.kt)("code",{className:"ph codeph"},"C:\\Users\\<user_name>\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver"))),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"2. W3C mode related error"),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"Caused by: org.openqa.selenium.UnsupportedCommandException: unknown command: Cannot call non W3C standard command while in W3C mode","\n")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This error is fixed in Katalon Studio version 7.1.0+. Please upgrade for the improvement. Alternatively, you can see a workaround in Katalon forum, click ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://forum.katalon.com/t/unable-to-update-chromedriver-on-mac-in-katalon-studio/33958",target:"_blank"},"here"),". "))}d.isMDXComponent=!0}}]);