"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[45484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=s.createContext({}),l=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=l(e.components);return s.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(a),k=o,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||r;return a?s.createElement(u,n(n({ref:t},p),{},{components:a})):s.createElement(u,n({ref:t},p))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,n[1]=c;for(var l=2;l<r;l++)n[l]=a[l];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var s=a(87462),o=(a(67294),a(3905)),r=a(44996);const n={id:"913499a0-22b2-11ed-9930-0242fe3e4a3f",title:"[WebUI] Create and Run Web UI Test Case using Record and Playback in Katalon Studio",slug:"get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio",hide_title:!0},c='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>[WebUI] Create and Run Web UI Test Case using Record and Playback in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',i={unversionedId:"913499a0-22b2-11ed-9930-0242fe3e4a3f",id:"913499a0-22b2-11ed-9930-0242fe3e4a3f",title:"[WebUI] Create and Run Web UI Test Case using Record and Playback in Katalon Studio",description:"This tutorial demonstrates how to create a Web UI test case with   Katalon Studio using Record and   Playback.",source:"@site/docs/913499a0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio",permalink:"/docs/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"913499a0-22b2-11ed-9930-0242fe3e4a3f",title:"[WebUI] Create and Run Web UI Test Case using Record and Playback in Katalon Studio",slug:"get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Sample projects overview",permalink:"/docs/get-started/sample-projects/sample-projects-overview"},next:{title:"Sample WebUI tests project (Healthcare sample) in Katalon Studio",permalink:"/docs/get-started/sample-projects/webui/sample-webui-tests-project-healthcare-sample-in-katalon-studio"}},l={},p=[{value:'<a id="id_1" class="anchor_top_offset"/>Create and Run your first Web UI test case',id:"create-and-run-your-first-web-ui-test-case",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Create New Project',id:"create-new-project",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Record',id:"record",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Playback a test case',id:"playback-a-test-case",level:3},{value:'<a id="id_5" class="anchor_top_offset"/>View the test case in script mode',id:"view-the-test-case-in-script-mode",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"[WebUI]"," Create and Run Web UI Test Case using Record and Playback in ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This tutorial demonstrates how to create a Web UI test case with   ",(0,o.kt)("span",{className:"ph"},"Katalon Studio")," using ",(0,o.kt)("strong",{className:"ph b"},"Record")," and   ",(0,o.kt)("strong",{className:"ph b"},"Playback"),"."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},'Go through the scenario "Sign in the shopping page to purchase a   tank top" to get familiar with these features. The basic steps   are:'),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"Create a new project to store recorded actions."),(0,o.kt)("li",{className:"li"},"Interact with the web page.      ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"Sign in."),(0,o.kt)("li",{className:"li"},"Purchase a tank top.")),"   "),(0,o.kt)("li",{className:"li"},"Stop recording and Save scripts.")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,o.kt)("strong",{className:"ph b"},"Shopping Cart")," sample project is available ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio-samples/shopping-cart-tests",target:"_blank"},"here"),"."),(0,o.kt)("h2",{id:"create-and-run-your-first-web-ui-test-case"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Create and Run your first Web UI test case"),(0,o.kt)("h3",{id:"create-new-project"},(0,o.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Create New Project"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the ",(0,o.kt)("strong",{className:"ph b"},"Test Explorer")," on the sidebar > click       ",(0,o.kt)("strong",{className:"ph b"},"New Project"),"."),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the displayed ",(0,o.kt)("strong",{className:"ph b"},"New Project")," dialog:"),"     ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"Enter project ",(0,o.kt)("strong",{className:"ph b"},"Name"),"."),(0,o.kt)("li",{className:"li"},"In project ",(0,o.kt)("strong",{className:"ph b"},"Type"),", select         ",(0,o.kt)("strong",{className:"ph b"},"Web"),"."),(0,o.kt)("li",{className:"li"},"In ",(0,o.kt)("strong",{className:"ph b"},"Project"),", select ",(0,o.kt)("strong",{className:"ph b"},"Sample Web           UI...(Shopping Cart)"),", the ",(0,o.kt)("strong",{className:"ph b"},"Repository URL"),"         is filled automatically."),(0,o.kt)("li",{className:"li"},"         ",(0,o.kt)("p",{className:"p"},"Browse a ",(0,o.kt)("strong",{className:"ph b"},"Location")," to store your project >           click ",(0,o.kt)("strong",{className:"ph b"},"OK"),"."),"         ",(0,o.kt)("p",{className:"p"},"           ",(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/new-project.png"),width:750}),(0,o.kt)("br",null),(0,o.kt)("br",null),"         "),"       ")),"   ")),(0,o.kt)("h3",{id:"record"},(0,o.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Record"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"From the main toolbar, click on ",(0,o.kt)("strong",{className:"ph b"},"Web Recorder Utility")," icon to open the Web Recorder."),"     ",(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/web-record-icon.png"),width:200}),(0,o.kt)("br",null),(0,o.kt)("br",null)),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the displayed ",(0,o.kt)("strong",{className:"ph b"},"Web Recorder"),":"),"     ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"Enter URL: ",(0,o.kt)("code",{className:"ph codeph"},"https://demo-store.katalon.com"),"."),(0,o.kt)("li",{className:"li"},"         ",(0,o.kt)("p",{className:"p"},"Select a browser to start recording (Chrome is recommended)."),"         ",(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/selectb-browser.png"),width:750}),(0,o.kt)("br",null),(0,o.kt)("br",null)),"       ")),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Wait until the browser is launched and ready to interact."),"     ",(0,o.kt)("p",{className:"p"},"When you hover an element, the browser highlights and displays that element's correspondent XPath on the top of the page."),"     ",(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/xpath.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null)),"     ",(0,o.kt)("div",{className:"note tip note_tip"},(0,o.kt)("span",{className:"note__title"},"Tip:"),"        ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"           ",(0,o.kt)("p",{className:"p"},"You can use hotkey to capture objects (pressing the combination of <Command + back quote>). The captured object will be highlighted with a green border."),"         ")),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Interact with the web page. In this scenario, we will sign in and purchase a tank top."),"     ",(0,o.kt)("p",{className:"p"},"During your recording, ",(0,o.kt)("strong",{className:"ph b"},"Katalon Web Recorder")," captures all the objects that you have interacted with. When you enter the ",(0,o.kt)("strong",{className:"ph b"},"Password")," field, ",(0,o.kt)("strong",{className:"ph b"},"Katalon Web Recorder")," uses the '",(0,o.kt)("a",{className:"xref",href:"/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-encrypted-text"},"Set Encrypted Text"),"' keyword automatically. This input value will be encrypted to ensure security."),"     ",(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/recorded-actions.png"),width:750}),(0,o.kt)("br",null),(0,o.kt)("br",null)),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Once you finish purchasing > click ",(0,o.kt)("strong",{className:"ph b"},"Save script")," to stop recording and save the captured objects. ",(0,o.kt)("strong",{className:"ph b"},"Katalon Web Recorder")," exports a list of objects used in the test case."),"     ",(0,o.kt)("p",{className:"p"},"Create a new folder or select an existing one in ",(0,o.kt)("strong",{className:"ph b"},"Object Repository")," > click ",(0,o.kt)("strong",{className:"ph b"},"OK"),"."),"     ",(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/select-repo.png"),width:750}),(0,o.kt)("br",null),(0,o.kt)("br",null)),"     ",(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),"        ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("span",{className:"ph"},"Katalon Studio")," allows you to continue recording using the existing test case to reduce your effort on modifying existing ones. ",(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/recording-webui-test/test-case-modifying.png"),width:750}),(0,o.kt)("br",null),(0,o.kt)("br",null),"         ")),"     "),"   ")),(0,o.kt)("h3",{id:"playback-a-test-case"},(0,o.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Playback a test case"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To playback the recorded scenario:"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"Select the test case where you saved the recorded actions."),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"From the main toolbar, select any browser on the drop-down list       next to ",(0,o.kt)("strong",{className:"ph b"},"Run"),"."),"     ",(0,o.kt)("p",{className:"p"},"Katalon Studio will execute the chosen test case with the       recorded steps accordingly."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/healthcare-samples/KS-TOOLBAR-Chrome.png"),width:250,alt:"Playback"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   ")),(0,o.kt)("h2",{id:"view-the-test-case-in-script-mode"},(0,o.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"View the test case in script mode"),(0,o.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,o.kt)("code",null,"import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint","\n","import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase","\n","import static com.kms.katalon.core.testdata.TestDataFactory.findTestData","\n","import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject","\n","import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject","\n","import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint","\n","import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW","\n","import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile","\n","import com.kms.katalon.core.model.FailureHandling as FailureHandling","\n","import com.kms.katalon.core.testcase.TestCase as TestCase","\n","import com.kms.katalon.core.testdata.TestData as TestData","\n","import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW","\n","import com.kms.katalon.core.testobject.TestObject as TestObject","\n","import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS","\n","import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI","\n","import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows","\n","import internal.GlobalVariable as GlobalVariable","\n","import org.openqa.selenium.Keys as Keys","\n","\n","WebUI.openBrowser('')","\n","\n","WebUI.navigateToUrl('https://demo-store.katalon.com/')","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/svg_Zack Market_svg-inline--fa fa-user fa-w-14'))","\n","\n","WebUI.setText(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_Email_email'), 'thuy.ngo@katalon.com')","\n","\n","WebUI.setEncryptedText(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_Password_password'), 'GklqZBguAPQ=')","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_Password_button_btn__2lzmo'))","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/div_All Products_search_auto__TZ-uB'))","\n","\n","WebUI.setText(findTestObject('Object Repository/shoppingCart/Page_Zack Market/input_All Products_auto_input__2ud9e'), 'tank top')","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/span_Tank Top'))","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/img_Clear All_card-img-top'))","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/img'))","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/span_Buy Now'))","\n","\n","WebUI.click(findTestObject('Object Repository/shoppingCart/Page_Zack Market/span_Confirm checkout'))","\n","\n","WebUI.closeBrowser()","\n")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Next: ",(0,o.kt)("a",{className:"xref",href:"/docs/execute/test-execution-with-katalon-studio/execute-a-test-case"},"Execute     and Debug a Test Case"),"."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"See also:  ",(0,o.kt)("a",{className:"xref",href:"/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview"},"Troubleshoot     automated web testing"),"."))}m.isMDXComponent=!0}}]);