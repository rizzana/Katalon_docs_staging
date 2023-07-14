"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[76177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},l=Object.keys(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=s.createContext({}),c=function(e){var t=s.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return s.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,h=d["".concat(r,".").concat(u)]||d[u]||m[u]||l;return a?s.createElement(h,i(i({ref:t},p),{},{components:a})):s.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=d;var n={};for(var r in t)hasOwnProperty.call(t,r)&&(n[r]=t[r]);n.originalType=e,n.mdxType="string"==typeof e?e:o,i[1]=n;for(var c=2;c<l;c++)i[c]=a[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var s=a(87462),o=(a(67294),a(3905)),l=a(44996);const i={id:"8f26c840-22b2-11ed-9930-0242fe3e4a3f",title:"[Mobile] Set up real iOS devices in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-set-up-real-ios-devices-in-katalon-studio",hide_title:!0},n='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>[Mobile] Set up real iOS devices in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',r={unversionedId:"8f26c840-22b2-11ed-9930-0242fe3e4a3f",id:"8f26c840-22b2-11ed-9930-0242fe3e4a3f",title:"[Mobile] Set up real iOS devices in Katalon Studio",description:"This article shows you how to set up a real iOS device on a macOS machine. After setting up the device, you can test iOS applications with Katalon Studio.",source:"@site/docs/8f26c840-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-set-up-real-ios-devices-in-katalon-studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-set-up-real-ios-devices-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"8f26c840-22b2-11ed-9930-0242fe3e4a3f",title:"[Mobile] Set up real iOS devices in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-set-up-real-ios-devices-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"[Mobile] iOS Setup (Simulators) in Katalon Studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-ios-setup-simulators-in-katalon-studio"},next:{title:"[Mobile] Install WebDriverAgent for real iOS devices in Katalon Studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio"}},c={},p=[{value:'<a id="id_1" class="anchor_top_offset"/>1. Install Xcode',id:"1-install-xcode",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>2. Install Appium, Xcode command-line tools, and other iOS dependencies',id:"2-install-appium-xcode-command-line-tools-and-other-ios-dependencies",level:2},{value:'<a id="task-7459" class="anchor_top_offset"/>Install with built-in tools',id:"install-with-built-in-tools",level:3},{value:'<a id="task-2441" class="anchor_top_offset"/>Install manually',id:"install-manually",level:3},{value:'<a id="task-8602" class="anchor_top_offset"/>3. Set up the real iOS device',id:"3-set-up-the-real-ios-device",level:2},{value:'<a id="id_4" class="anchor_top_offset"/>4. Install the WebDriverAgent',id:"4-install-the-webdriveragent",level:2},{value:'<a id="concept-9888" class="anchor_top_offset"/>5. Distribute your app to registered devices',id:"5-distribute-your-app-to-registered-devices",level:2},{value:'<a id="task-8419" class="anchor_top_offset"/>Prepare your app for distribution',id:"prepare-your-app-for-distribution",level:3},{value:'<a id="task-7276" class="anchor_top_offset"/>Create an archive of your app',id:"create-an-archive-of-your-app",level:3},{value:'<a id="task-67" class="anchor_top_offset"/>Export your app using an ad hoc or development provisioning profile',id:"export-your-app-using-an-ad-hoc-or-development-provisioning-profile",level:3},{value:'<a id="task-1360" class="anchor_top_offset"/>Install the app on user devices',id:"install-the-app-on-user-devices",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobile-set-up-real-ios-devices-in-katalon-studio"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"[Mobile]"," Set up real iOS devices in ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This article shows you how to set up a real iOS device on a macOS machine. After setting up the device, you can test iOS applications with ",(0,o.kt)("span",{className:"ph"},"Katalon Studio"),"."),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"You can not execute iOS mobile testing in Windows or Linux."))),(0,o.kt)("nav",{xmlns:"http://www.w3.org/1999/xhtml",role:"navigation",className:"related-links"},(0,o.kt)("div",{className:"linklist relinfo"},(0,o.kt)("strong",null,"Related information"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ul",{className:"linklist"},(0,o.kt)("li",{className:"linklist"},(0,o.kt)("a",{className:"link",href:"/docs/get-started/sample-projects/mobile/mobile-create-and-run-ios-test-case-in-katalon-studio"},"[Mobile] Create and Run iOS Test Case in Katalon Studio")),(0,o.kt)("li",{className:"linklist"},(0,o.kt)("a",{className:"link",href:"/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview"},"Troubleshooting automated mobile testing"))))),(0,o.kt)("h2",{id:"1-install-xcode"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"1. Install Xcode"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Install Xcode version 10.2 or newer. You can download Xcode from the Apple Developer website: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://developer.apple.com/xcode/",target:"_blank"},"Download Xcode"),"."),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("span",{className:"ph"},"Katalon Studio")," does not officially support Xcode 14 at the moment."),(0,o.kt)("li",{className:"li"},"Xcode must support the current version of your iOS device. To learn more about the supported iOS environments in ",(0,o.kt)("span",{className:"ph"},"Katalon Studio"),", see: ",(0,o.kt)("a",{className:"xref",href:"/docs/supported-execution-environments/supported-environments-for-katalon-studio-and-katalon-runtime-engine-kre"},"Supported environments"),".")))),(0,o.kt)("h2",{id:"2-install-appium-xcode-command-line-tools-and-other-ios-dependencies"},(0,o.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"2. Install Appium, Xcode command-line tools, and other iOS dependencies"),(0,o.kt)("h3",{id:"install-with-built-in-tools"},(0,o.kt)("a",{id:"task-7459",class:"anchor_top_offset"}),"Install with built-in tools"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"From Katalon Studio version 8.3.0 onwards, you can install Appium, Xcode command-line tools (Xcode CLT), Homebrew, NodeJS, and other iOS dependencies with Katalon Studio built-in tools."),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Go to ",(0,o.kt)("span",{className:"ph uicontrol"},"Tools")," > ",(0,o.kt)("span",{className:"ph uicontrol"},"iOS")," and select ",(0,o.kt)("span",{className:"ph uicontrol"},"Install Dependencies"),"."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",width:500,src:(0,l.Z)("/8f2c4680-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Install dependencies via Katalon built-in tools"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Katalon Studio will automatically install the latest version of Xcode CLT, Appium, Homebrew, NodeJS, and other iOS dependencies."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",width:500,src:(0,l.Z)("/8f2b8330-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"KS installs dependencies"})))),(0,o.kt)("h3",{id:"install-manually"},(0,o.kt)("a",{id:"task-2441",class:"anchor_top_offset"}),"Install manually"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Install Xcode command-line tools. You can download the command-line tools compatible with your Xcode version from the Apple Developer website here: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://developer.apple.com/download/all/",target:"_blank"},"Download"),"."),(0,o.kt)("div",{className:"itemgroup info"},"Alternatively, you can run the following commands in this order in the Terminal:",(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"xcode-select --install")),(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"sudo xcode-select -s /Applications/Xcode.app/Contents/Developer"))," ")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Download and install Node.js from the Node.js website: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://nodejs.org/en/download/",target:"_blank"},"Node.js Downloads"),"."),(0,o.kt)("div",{className:"itemgroup info"},"Make sure you install Node.js into a location where you have full Read/Write permissions.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Install Appium version 1.12.1 or newer with npm. Run the following command in the Terminal:"),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"npm install -g appium@version")),(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"We recommend installing the latest Appium version. "),(0,o.kt)("li",{className:"li"},(0,o.kt)("span",{className:"ph"},"Katalon Studio")," does not officially support Appium 2.x yet."),(0,o.kt)("li",{className:"li"},"If you are using emulators other than Xcode simulators, some emulators come with Appium installed. If you want to run an application on an emulator, check your emulator settings before installing Appium."))),"To learn more about Appium, you can refer to the Appium document here: ",(0,o.kt)("a",{className:"xref j-external-link",href:"http://appium.io/docs/en/about-appium/getting-started/#installing-appium",target:"_blank"},"Getting started"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Install Homebrew. Homebrew is a package manager that makes it easy to install extra dependencies. To install Homebrew, follow the instructions on the Homebrew website: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://brew.sh/",target:"_blank"},"Homebrew"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"After installing Homebrew, you can now install the following dependencies in the Terminal:"),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"For Appium versions older than 1.20.0, you need to install Carthage. You can learn more about Carthage in this Github project: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://github.com/Carthage/Carthage",target:"_blank"},"Carthage"),". To install Carthage via Homebrew, copy and paste the following command:"),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"brew install carthage"))),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"ios-deploy version 1.9.4 or newer. You can learn more about ios-deploy in this Github project: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://github.com/ios-control/ios-deploy",target:"_blank"},"ios-deploy"),". To install ios-deploy, run the following command:"),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"brew install ios-deploy"))),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"libimobiledevice version 1.2.0 or newer. You can learn more about libimobiledevice on the libimobiledevice website: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://libimobiledevice.org/",target:"_blank"},"libimobiledevice"),". To install libimobiledevice, copy and paste the following commands in the given order:"),(0,o.kt)("div",{className:"p"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"brew tap kozyrap/libimobiledevice; (brew install --HEAD kozyrap/libimobiledevice/libimobiledevice || arch -arm64 brew install kozyrap/libimobiledevice/libimobiledevice) && brew unlink libimobiledevice && brew link libimobiledevice")))),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"For Appium versions older than 1.15.0, you also need to install ios-webkit-debug-proxy. You can learn more about ios-webkit-debug-proxy in this Github project: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://github.com/google/ios-webkit-debug-proxy",target:"_blank"},"ios-webkit-debug-proxy"),". To install ios-webkit-debug-proxy, run the following command:"),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"brew install ios-webkit-debug-proxy"))))))),(0,o.kt)("h2",{id:"3-set-up-the-real-ios-device"},(0,o.kt)("a",{id:"task-8602",class:"anchor_top_offset"}),"3. Set up the real iOS device"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},(0,o.kt)("div",{className:"note important note_important"},(0,o.kt)("span",{className:"note__title"},"Important:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"You have enrolled in the Apple Developer Program. To learn more about the Apple Developer Program enrollment, refer to this Apple document: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://developer.apple.com/support/enrollment/",target:"_blank"},"Enrollment"),".")))),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Register your device for development with Xcode in Apple Developer. To learn about registering your device in Apple Developer, refer to this Apple document: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://developer.apple.com/help/account/register-devices/register-a-single-device/",target:"_blank"},"Register a single device in Apple Developer"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In ",(0,o.kt)("strong",{className:"ph b"},"Xcode > Preferences > Account"),", click ",(0,o.kt)("em",{className:"ph i"},"Add")," (+) to enter your Apple Developer Account ID and password.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Connect your iOS devices to your computer via a USB cable. Confirm to accept or trust the phone.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"To enable ",(0,o.kt)("strong",{className:"ph b"},"UI Automation")," on the iOS device, navigate to ",(0,o.kt)("strong",{className:"ph b"},"Settings > Developer"),". In the ",(0,o.kt)("strong",{className:"ph b"},"UI Automation")," section, turn on ",(0,o.kt)("strong",{className:"ph b"},"Enable UI Automation"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"If you want to execute mobile browser tests (Safari on iOS), you will need to enable the following settings in ",(0,o.kt)("strong",{className:"ph b"},"Settings > Safari > Advanced"),":"),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"JavaScript"),(0,o.kt)("li",{className:"li"},"Web Inspector"),(0,o.kt)("li",{className:"li"},"Remote Automation")),(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",width:200,src:(0,l.Z)("/8f1b7da0-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Enable debug mode in iOS devices"}))))),(0,o.kt)("h2",{id:"4-install-the-webdriveragent"},(0,o.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"4. Install the WebDriverAgent"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The WebDriverAgent is a WebDriver server used to control iOS devices remotely. For detailed instruction on WebDriverAgent installation, refer to ",(0,o.kt)("a",{className:"xref",href:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio"},"Install WebDriverAgent for iOS devices"),"."),(0,o.kt)("h2",{id:"5-distribute-your-app-to-registered-devices"},(0,o.kt)("a",{id:"concept-9888",class:"anchor_top_offset"}),"5. Distribute your app to registered devices"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To distribute your app for testing to registered devices, you need to archive and export an ",(0,o.kt)("code",{className:"ph codeph"},".ipa")," file. Do as follows:"),(0,o.kt)("h3",{id:"prepare-your-app-for-distribution"},(0,o.kt)("a",{id:"task-8419",class:"anchor_top_offset"}),"Prepare your app for distribution"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Open the project file with Xcode. For example, to open ",(0,o.kt)("code",{className:"ph codeph"},"Coffee Timer.xcodeproj"),", go to your project folder > ",(0,o.kt)("strong",{className:"ph b"},"App")," > ",(0,o.kt)("strong",{className:"ph b"},"Your-First-iOS-App")," > ",(0,o.kt)("strong",{className:"ph b"},"Coffee Timer"),". Double-click the ",(0,o.kt)("code",{className:"ph codeph"},"Coffee Timer.xcodeproj")," file."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,l.Z)("/8f1933b0-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Open Xcode project"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"After opening the project in Xcode, select a registered iOS device to launch the apps."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",width:300,src:(0,l.Z)("/8f12f220-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Select device"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In the ",(0,o.kt)("strong",{className:"ph b"},"General")," tab, set deployment iOS version and select device type in the ",(0,o.kt)("strong",{className:"ph b"},"Deployment Info")," section."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",width:500,src:(0,l.Z)("/8f178600-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Choose deployment info"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Switch to the ",(0,o.kt)("strong",{className:"ph b"},"Signing & Capabilities")," tab, check the ",(0,o.kt)("strong",{className:"ph b"},"Automatically manage signing")," box, then choose the team that has your device registered in the Apple Developer Portal."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("p",{className:"p"},"By choosing the ",(0,o.kt)("strong",{className:"ph b"},"Automatically manage signing")," box, Xcode manages code signing assets for you. To learn more about automatic signing, you can refer to this Apple document: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://help.apple.com/xcode/mac/current/#/dev80cc24546",target:"_blank"},"Automatic signing"),"."),(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",width:500,src:(0,l.Z)("/8f1451b0-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Auto manage signing"})))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"To build the ",(0,o.kt)("code",{className:"ph codeph"},".ipa")," file, click ",(0,o.kt)("strong",{className:"ph b"},"Product > Build"),"."))),(0,o.kt)("h3",{id:"create-an-archive-of-your-app"},(0,o.kt)("a",{id:"task-7276",class:"anchor_top_offset"}),"Create an archive of your app"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"li step p"},(0,o.kt)("span",{className:"ph cmd"},"To archive the ",(0,o.kt)("code",{className:"ph codeph"},".ipa")," file, click ",(0,o.kt)("strong",{className:"ph b"},"Product > Archive"),". If the archive builds successfully, it appears in the Archives organizer."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"You can't create an archive if you set the run destination to a simulator."))))),(0,o.kt)("h3",{id:"export-your-app-using-an-ad-hoc-or-development-provisioning-profile"},(0,o.kt)("a",{id:"task-67",class:"anchor_top_offset"}),"Export your app using an ad hoc or development provisioning profile"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"When you export the app, Xcode re-signs the app using the code signing assets that you choose. To learn more about the distribution method, you can refer to this Apple document:",(0,o.kt)("a",{className:"xref j-external-link",href:"https://help.apple.com/xcode/mac/current/#/dev31de635e5",target:"_blank"}," Distribution method.")),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"To open the Archives organizer, choose ",(0,o.kt)("strong",{className:"ph b"},"Window")," > ",(0,o.kt)("strong",{className:"ph b"},"Organizer")," and click ",(0,o.kt)("strong",{className:"ph b"},"Archives"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Select the archive you want to export, then click ",(0,o.kt)("strong",{className:"ph b"},"Distribute App")," and follow the instructions to get the ",(0,o.kt)("code",{className:"ph codeph"},".ipa")," file. Here, we choose a development provisioning profile to export the ",(0,o.kt)("code",{className:"ph codeph"},"Coffee Timer.ipa")," file."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,l.Z)("/8f169ba0-22b2-11ed-9930-0242fe3e4a3f.gif"),alt:"Distribute .ipa app"})))),(0,o.kt)("h3",{id:"install-the-app-on-user-devices"},(0,o.kt)("a",{id:"task-1360",class:"anchor_top_offset"}),"Install the app on user devices"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Open Xcode, then navigate to ",(0,o.kt)("strong",{className:"ph b"},"Window > Devices and Simulators"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Choose your device from the ",(0,o.kt)("strong",{className:"ph b"},"Devices")," list.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Click ",(0,o.kt)("em",{className:"ph i"},"Add")," (+) to browse the ",(0,o.kt)("code",{className:"ph codeph"},".ipa")," file."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,l.Z)("/8f1aba50-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"Add an app to a real device"}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Once installed successfully, the application appears in the ",(0,o.kt)("strong",{className:"ph b"},"Installed Apps")," section."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",src:(0,l.Z)("/8f19f700-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"App installed successfully"})))),(0,o.kt)("nav",{xmlns:"http://www.w3.org/1999/xhtml",role:"navigation",className:"related-links"},(0,o.kt)("div",{className:"linklist"},(0,o.kt)("strong",null,"See also"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ul",{className:"linklist"},(0,o.kt)("li",{className:"linklist"},(0,o.kt)("a",{className:"link",href:"/docs/get-started/sample-projects/mobile/mobile-create-and-run-ios-test-case-in-katalon-studio"},"[Mobile] Create and Run iOS Test Case in Katalon Studio")),(0,o.kt)("li",{className:"linklist"},(0,o.kt)("a",{className:"link j-external-link",href:"https://academy.katalon.com/courses/codeless-solution-mobile-testing/?utm_source=kat_docs&utm_medium=ios_setup",target:"_blank"},"Learn more with our Katalon Academy course: Solve Mobile Testing Challenges with Codeless Solution"))))))}d.isMDXComponent=!0}}]);