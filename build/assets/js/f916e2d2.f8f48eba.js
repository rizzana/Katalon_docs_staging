"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[52478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var o=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||n;return a?o.createElement(h,l(l({ref:t},m),{},{components:a})):o.createElement(h,l({ref:t},m))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},48958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var o=a(87462),s=(a(67294),a(3905)),n=a(44996);const l={id:"8ef18770-22b2-11ed-9930-0242fe3e4a3f",title:"[Mobile] Configure Android Studio (Emulator) in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-configure-android-studio-emulator-in-katalon-studio",hide_title:!0},r='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>[Mobile] Configure Android Studio (Emulator) in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',i={unversionedId:"8ef18770-22b2-11ed-9930-0242fe3e4a3f",id:"8ef18770-22b2-11ed-9930-0242fe3e4a3f",title:"[Mobile] Configure Android Studio (Emulator) in Katalon Studio",description:"The Android Emulator simulates Android devices on your computer   so that you can test your application on a variety of devices and   Android API levels without needing to have each physical device. To   learn more about the Android emulator capabilities and system   requirements, you can refer to this Android developer document: Run apps     on the Android Emulator.",source:"@site/docs/8ef18770-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-configure-android-studio-emulator-in-katalon-studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-configure-android-studio-emulator-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"8ef18770-22b2-11ed-9930-0242fe3e4a3f",title:"[Mobile] Configure Android Studio (Emulator) in Katalon Studio",slug:"create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-configure-android-studio-emulator-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"[Mobile] Android Setup in Katalon Studio",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-android-setup-in-katalon-studio"},next:{title:"Configure fingerprint setting in an Android emulator",permalink:"/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/configure-fingerprint-setting-in-an-android-emulator"}},c={},m=[{value:'<a id="concept-7064" class="anchor_top_offset"/>Install Appium via NPM',id:"install-appium-via-npm",level:2},{value:'<a id="id_1" class="anchor_top_offset"/>Configure Android Studio',id:"configure-android-studio",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Installation',id:"installation",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Create an Android project',id:"create-an-android-project",level:3},{value:'<a id="concept-8297" class="anchor_top_offset"/>Create an emulator',id:"create-an-emulator",level:3},{value:'<a id="concept-5792" class="anchor_top_offset"/>Launch an emulator',id:"launch-an-emulator",level:3},{value:'<a id="id_6" class="anchor_top_offset"/>Verify successful Android devices connection',id:"verify-successful-android-devices-connection",level:2}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"mobile-configure-android-studio-emulator-in-katalon-studio"},(0,s.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"[Mobile]"," Configure Android Studio (Emulator) in ",(0,s.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The Android Emulator simulates Android devices on your computer   so that you can test your application on a variety of devices and   Android API levels without needing to have each physical device. To   learn more about the Android emulator capabilities and system   requirements, you can refer to this Android developer document: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://developer.android.com/studio/run/emulator",target:"_blank"},"Run apps     on the Android Emulator"),"."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In this article, we guide you step by step on how to configure   Android Studio (Emulator) for mobile testing in Katalon."),(0,s.kt)("nav",{xmlns:"http://www.w3.org/1999/xhtml",role:"navigation",className:"related-links"},(0,s.kt)("div",{className:"linklist relinfo"},(0,s.kt)("strong",null,"Related information"),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("ul",{className:"linklist"},(0,s.kt)("li",{className:"linklist"},(0,s.kt)("a",{className:"link",href:"/docs/get-started/sample-projects/mobile/mobile-create-and-run-android-test-case"},"[Mobile] Create and Run Android Test Case")),(0,s.kt)("li",{className:"linklist"},(0,s.kt)("a",{className:"link",href:"/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview"},"Troubleshooting automated mobile testing"))))),(0,s.kt)("h2",{id:"install-appium-via-npm"},(0,s.kt)("a",{id:"concept-7064",class:"anchor_top_offset"}),"Install Appium via NPM"),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},(0,s.kt)("div",{className:"p"},"Download and install the suitable version of Node.js for your system from the Node.js website: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://nodejs.org/en/download/",target:"_blank"},"Downloads"),".",(0,s.kt)("div",{className:"note note note_note"},(0,s.kt)("span",{className:"note__title"},"Note:")," ",(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"Make sure you install Node.js into a location with full Read/Write permissions.")))))),(0,s.kt)("li",{className:"li"},(0,s.kt)("div",{className:"p"},"Install Appium version 1.12.1 or newer via NPM. To install the latest Appium version, copy and paste the command-line argument as follows: ",(0,s.kt)("code",{className:"ph codeph"},"npm install -g appium"),(0,s.kt)("div",{className:"note note note_note"},(0,s.kt)("span",{className:"note__title"},"Note:")," ",(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"We recommend installing the latest Appium version.")),(0,s.kt)("li",{className:"li"},"Some emulators support Appium directly when installed. If you want to run an application on an emulator, check your emulator settings before installing Appium."))),"To learn more about Appium, you can refer to the Appium document here: ",(0,s.kt)("a",{className:"xref j-external-link",href:"http://appium.io/docs/en/about-appium/getting-started/#installing-appium",target:"_blank"},"Getting started"),"."))),(0,s.kt)("h2",{id:"configure-android-studio"},(0,s.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Configure Android Studio"),(0,s.kt)("h3",{id:"installation"},(0,s.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Installation"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Download and install Android Studio. You can download Android   Studio from the Android developer website here: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://developer.android.com/studio",target:"_blank"},"Android Studio"),".   Android Studio will guide you through each step during the   installation and automatically download the necessary components to   create emulators."),(0,s.kt)("h3",{id:"create-an-android-project"},(0,s.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Create an Android project"),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"After installing successfully, in the ",(0,s.kt)("strong",{className:"ph b"},"Welcome Page")," window, click ",(0,s.kt)("strong",{className:"ph b"},"Create new project"),". Android Studio provides a variety of sample projects for you to choose from. Here, we choose ",(0,s.kt)("strong",{className:"ph b"},"Empty Activity")," as an example, then click ",(0,s.kt)("strong",{className:"ph b"},"Next"),"."),"     ",(0,s.kt)("p",{className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-Choose-project-template.png"),alt:"Choose project template"}),(0,s.kt)("br",null),(0,s.kt)("br",null),"     "),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"In the next interface, you can configure your project as follows:"),"     ",(0,s.kt)("table",{className:"table anchor_top_offset",id:"id_3__3a895061-9e7e-433c-88a9-0f1e5a8111c8"},(0,s.kt)("caption",null),(0,s.kt)("tbody",{className:"tbody"},(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry"}," ",(0,s.kt)("strong",{className:"ph b"},"Name"),"           "),(0,s.kt)("td",{className:"entry"},"The name of your project.")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry"}," ",(0,s.kt)("strong",{className:"ph b"},"Package Name"),"           "),(0,s.kt)("td",{className:"entry"},"By default, this is generated as ",(0,s.kt)("code",{className:"ph codeph"},"com.example.<projectname>"),".")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry"}," ",(0,s.kt)("strong",{className:"ph b"},"Save location"),"           "),(0,s.kt)("td",{className:"entry"},"The save location of your project. In case you want to change the default location, click ",(0,s.kt)("em",{className:"ph i"},"Browse")," (folder icon).")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry"}," ",(0,s.kt)("strong",{className:"ph b"},"Language"),"           "),(0,s.kt)("td",{className:"entry"},"The language to build your Android app. You can select either ",(0,s.kt)("strong",{className:"ph b"},"Java")," or ",(0,s.kt)("strong",{className:"ph b"},"Kotlin")," from the dropdown menu.")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry"}," ",(0,s.kt)("strong",{className:"ph b"},"Minimum SDK"),"           "),(0,s.kt)("td",{className:"entry"}," The lowest version of Android supported by your app")),(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry"}," ",(0,s.kt)("strong",{className:"ph b"},"Use legacy android.support libraries."),"           "),(0,s.kt)("td",{className:"entry"}," If your app requires legacy library support, check this box. To learn more about Android support libraries, you can refer to the Android developer document here: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://developer.android.com/topic/libraries/support-library",target:"_blank"},"Support libraries"),"           ")))),"     ",(0,s.kt)("p",{className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-Configure-project-settings.png"),alt:"Configure your project"}),(0,s.kt)("br",null),(0,s.kt)("br",null),"     "),"   "),(0,s.kt)("li",{className:"li"},"     ",(0,s.kt)("p",{className:"p"},"Click ",(0,s.kt)("strong",{className:"ph b"},"Finish"),". A new project window opens containing sample files to build an Android app. If you want to learn more about building an Android app, you can refer to this Android developer document: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://developer.android.com/training/basics/firstapp/building-ui",target:"_blank"},"Build a simple user interface"),"."),"   ")),(0,s.kt)("h3",{id:"create-an-emulator"},(0,s.kt)("a",{id:"concept-8297",class:"anchor_top_offset"}),"Create an emulator"),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("ol",{className:"ol"},(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"To create an emulator. In the main toolbar of the new project window, select ",(0,s.kt)("strong",{className:"ph b"},"Device")," ",(0,s.kt)("strong",{className:"ph b"},"manager"),". An ",(0,s.kt)("strong",{className:"ph b"},"Android Virtual Device Manager")," opens."),(0,s.kt)("p",{className:"p"},(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-Choose-AVD-Manager.png"),alt:"Choose AVD Manager"}),(0,s.kt)("br",null),(0,s.kt)("br",null))),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"Click ",(0,s.kt)("strong",{className:"ph b"},"Create Device"),". The ",(0,s.kt)("strong",{className:"ph b"},"Select Hardware")," page opens, allowing you to choose your emulator's screen size, resolution, and pixel density. To get an overview about screen variations, you can refer to this Android developer document: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://developer.android.com/guide/practices/screens_support",target:"_blank"},"Screen compatibility overview"),". After selecting the hardware, click ",(0,s.kt)("strong",{className:"ph b"},"Next"),"."),(0,s.kt)("p",{className:"p"},(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-Select-hardware.png"),alt:"Select the hardware"}),(0,s.kt)("br",null),(0,s.kt)("br",null))),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"The ",(0,s.kt)("strong",{className:"ph b"},"Select system image")," page opens, asking you to select the system image for a particular API level or an Android version. To learn more about Android versions and the corresponding API levels, you can refer to the Android developer document here: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://docs.microsoft.com/en-us/xamarin/android/app-fundamentals/android-api-levels?tabs=macos",target:"_blank"},"Understanding Android API levels"),"."),(0,s.kt)("p",{className:"p"},"Select the system image you want to test. If you see ",(0,s.kt)("strong",{className:"ph b"},"Download")," next to the system image you select, you need to click it to download its necessary components."),(0,s.kt)("p",{className:"p"},"For example: We choose the ",(0,s.kt)("strong",{className:"ph b"},"Pie")," Android version with an x86 system image. ",(0,s.kt)("strong",{className:"ph b"},"Pie")," is the code name for Android version 9.0 and API level 28. After clicking ",(0,s.kt)("strong",{className:"ph b"},"Download"),", you need to accept Android Software Development Kit License Agreement, then click ",(0,s.kt)("strong",{className:"ph b"},"Next")," to start downloading."),(0,s.kt)("p",{className:"p"},(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-Select-system-image.png"),alt:"Select system image"}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("div",{className:"note note note_note"},(0,s.kt)("span",{className:"note__title"},"Note:")," ",(0,s.kt)("div",{className:"p"},(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"Katalon Studio can only support Android version 6.0 or above. To learn more about the supported environment in Katalon Studio, you can refer to this document: ",(0,s.kt)("a",{className:"xref",href:"/docs/supported-execution-environments/supported-environments-for-katalon-studio-and-katalon-runtime-engine-kre"},"Supported environment"),".")))))),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"After choosing the system image, click ",(0,s.kt)("strong",{className:"ph b"},"Next"),". The ",(0,s.kt)("strong",{className:"ph b"},"Verify Configuration")," page appears.")),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"Change the default name of your emulator if necessary, then click ",(0,s.kt)("strong",{className:"ph b"},"Finish"),". A new emulator appears in the ",(0,s.kt)("strong",{className:"ph b"},"Device")," ",(0,s.kt)("strong",{className:"ph b"}," Manager"),"."),(0,s.kt)("p",{className:"p"},(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/65a953207f0945eac8a4367e7e8a0a64f292a671/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-An-emulator-is-created-2.png"),alt:"Launch the emulator"}),(0,s.kt)("br",null),(0,s.kt)("br",null))))),(0,s.kt)("h3",{id:"launch-an-emulator"},(0,s.kt)("a",{id:"concept-5792",class:"anchor_top_offset"}),"Launch an emulator"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To launch an emulator, open the ",(0,s.kt)("strong",{className:"ph b"},"Device Manager"),", select the emulator you want to launch, then click ",(0,s.kt)("strong",{className:"ph b"},"Run"),"."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-Launch-the-emulator.png"),alt:"Launch the emulator"}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"If you want to run the emulator via the command-line option, you can refer to the Android developer document here: ",(0,s.kt)("a",{className:"xref j-external-link",href:"https://developer.android.com/studio/run/emulator-commandline",target:"_blank"},"Start the emulator from the command line"),"."),(0,s.kt)("h2",{id:"verify-successful-android-devices-connection"},(0,s.kt)("a",{id:"id_6",class:"anchor_top_offset"}),"Verify successful Android devices connection"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"After launching the emulator, Katalon automatically recognizes the emulator as an Android device. To check whether Katalon successfully recognizes your Android emulator, you can open a Mobile Testing Sample Project in ",(0,s.kt)("strong",{className:"ph b"},"File > New sample projects > Sample Android Mobile Tests Project"),". Katalon Studio will detect and ask you to install ",(0,s.kt)("strong",{className:"ph b"},"Android SDK")," automatically if your current machine does not have it."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-on-macos/KS-Android-Open--Sample-project.png"),alt:"Open Android sample project"}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"On the main toolbar, select the ",(0,s.kt)("strong",{className:"ph b"},"Android")," device in the dropdown list next to ",(0,s.kt)("strong",{className:"ph b"},"Run"),"."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-TOOLBAR-Android.png"),alt:"Recognize Android devices"}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You should see the name of your emulator appear as an Android device."),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,s.kt)("span",{className:"note__title"},"Note:")," ",(0,s.kt)("div",{className:"p"},(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"You must first manually launch the emulator with Android Studio or via the command-line option for Katalon to recognize the device."))))),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/execute-mobile-testing-with-emulator/KS-EMULATOR-Choose-emulator-in-Katalon.png"),alt:"Choose emulator in Katalon"}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can now execute mobile testing with the emulator."))}p.isMDXComponent=!0}}]);