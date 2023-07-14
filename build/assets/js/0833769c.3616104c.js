"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[72184],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},c=Object.keys(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),i=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),m=i(a),h=r,_=m["".concat(l,".").concat(h)]||m[h]||p[h]||c;return a?s.createElement(_,o(o({ref:t},d),{},{components:a})):s.createElement(_,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:r,o[1]=n;for(var i=2;i<c;i++)o[i]=a[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=a(87462),r=(a(67294),a(3905)),c=a(44996);const o={id:"8a37f700-22b2-11ed-9930-0242fe3e4a3f",title:"How to extract and verify textual patterns in a test case with Katalon Recorder",slug:"plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder",hide_title:!0},n='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>How to extract and verify textual patterns in a test case with <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Recorder</span>',l={unversionedId:"8a37f700-22b2-11ed-9930-0242fe3e4a3f",id:"8a37f700-22b2-11ed-9930-0242fe3e4a3f",title:"How to extract and verify textual patterns in a test case with Katalon Recorder",description:"In a test project, you might want to verify that the application   under test (AUT) displays information in the correct pattern. For   example:",source:"@site/docs/8a37f700-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder",permalink:"/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder",draft:!1,tags:[],version:"current",frontMatter:{id:"8a37f700-22b2-11ed-9930-0242fe3e4a3f",title:"How to extract and verify textual patterns in a test case with Katalon Recorder",slug:"plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder",hide_title:!0},sidebar:"aSidebar",previous:{title:"How to Use Control Flow commands in a Test Case in Katalon Recorder",permalink:"/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case-in-katalon-recorder"},next:{title:"How to extract and write data in a test case with Katalon Recorder",permalink:"/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case-with-katalon-recorder"}},i={},d=[{value:'<a id="id_1" class="anchor_top_offset"/>Test case scenario',id:"test-case-scenario",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Record the test case',id:"record-the-test-case",level:2},{value:'<a id="id_3" class="anchor_top_offset"/>Extract and verify textual patterns',id:"extract-and-verify-textual-patterns",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder"},(0,r.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,r.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"How to extract and verify textual patterns in a test case with ",(0,r.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Recorder")),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In a test project, you might want to verify that the application   under test (AUT) displays information in the correct pattern. For   example:"),(0,r.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,r.kt)("li",{className:"li"},"Price tag pattern of a shopping item."),(0,r.kt)("li",{className:"li"},"Email address pattern."),(0,r.kt)("li",{className:"li"},"Phone number pattern.")),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Recorder supports this pattern matching process with   several commands. Specifically, commands in Katalon Recorder can   take patterns as input to verify several data types on an AUT."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This tutorial shows you how to extract and verify displayed text   on an AUT. The pattern used in our case is a ",(0,r.kt)("em",{className:"ph i"},"regular     expression")," (regex): a sequence of characters that specifies a   search pattern."),(0,r.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,r.kt)("span",{className:"note__title"},"Note:"),(0,r.kt)("ul",{className:"ul"},(0,r.kt)("li",{className:"li"},"To use the sample project of this tutorial, navigate to",(0,r.kt)("strong",{className:"ph b"},"Actions")," > ",(0,r.kt)("strong",{className:"ph b"},"Sample Projects"),", then add the ",(0,r.kt)("strong",{className:"ph b"},"Extract data and verify textual patterns")," project."))),(0,r.kt)("h2",{id:"test-case-scenario"},(0,r.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Test case scenario"),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},'In our example, we have a scenario "extract and verify item price," which consists of these steps:'),(0,r.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,r.kt)("li",{className:"li"},"Navigate to the AUT - Katalon Zack Market: ",(0,r.kt)("code",{className:"ph codeph"},"https://demo-store.katalon.com"),"."),(0,r.kt)("li",{className:"li"},"On the homepage, select an item."),(0,r.kt)("li",{className:"li"},"On the item details page, extract the item price."),(0,r.kt)("li",{className:"li"},"Verify that the item price is in the correct pattern: a currency symbol (",(0,r.kt)("code",{className:"ph codeph"},"$"),") followed by a numeric value.")),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Our AUT displays the price text of an item as follows:"),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-AUT-selected-shopping-item.png"),alt:"Katalon Recorder AUT overview"}),(0,r.kt)("br",null),(0,r.kt)("br",null)," "),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"We can see that the price text consists of the item price (",(0,r.kt)("code",{className:"ph codeph"},"$25.99"),") and the currency code (",(0,r.kt)("code",{className:"ph codeph"},"CAD"),")."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To automate the scenario with Katalon Recorder, we propose the following process:"),(0,r.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,r.kt)("li",{className:"li"},"Record the test case: we record the test case to open the AUT and select an item."),(0,r.kt)("li",{className:"li"},"Extract and verify textual patterns: we manually modify the recorded test case to select and verify the price text.")),(0,r.kt)("h2",{id:"record-the-test-case"},(0,r.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Record the test case"),(0,r.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"In Katalon Recorder, create a test suite and a test case, then click ",(0,r.kt)("strong",{className:"ph b"},"Record")," to start recording."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-New-test-case.png"),alt:"Katalon Recorder new test case"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"   "),(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"In an active browser tab, navigate to the AUT - Katalon Zack Market: ",(0,r.kt)("code",{className:"ph codeph"},"https://demo-store.katalon.com"),"."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-AUT.png"),alt:"AUT"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"   "),(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"On the displayed homepage, select an item."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-AUT-select-an-item.png"),alt:"AUT - Select an item"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"   "),(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"In Katalon Recorder, click ",(0,r.kt)("strong",{className:"ph b"},"Stop")," to stop the test recording."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-Click-Stop.png"),alt:"Recorded test case"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"   ")),(0,r.kt)("h2",{id:"extract-and-verify-textual-patterns"},(0,r.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Extract and verify textual patterns"),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To complete the scenario, we manually modify the test case to extract only the price from the displayed price text. Then, we verify that the price is in the correct pattern using a regex."),(0,r.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Open the recorded test case and follow these steps:"),(0,r.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"Store the displayed price text. We want to store the price text into a variable."),"     ",(0,r.kt)("p",{className:"p"},"To do so, we use the ",(0,r.kt)("code",{className:"ph codeph"},"storeText")," command."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-storeText-command.png"),alt:"Katalon Recorder storeText command"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"     ",(0,r.kt)("p",{className:"p"},"We need to capture the ",(0,r.kt)("strong",{className:"ph b"},"Target")," (the price text locator) for the command. Click on the ",(0,r.kt)("strong",{className:"ph b"},"Selector")," tool, then hover the cursor over and select the price text on the page."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-Selector-tool.png"),alt:"Katalon Recorder capture target"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"     ",(0,r.kt)("p",{className:"p"},"In our case, the captured locator is the XPath: ",(0,r.kt)("code",{className:"ph codeph"},"xpath=//div[@id='root']/div/div/div/div[2]/div/div[2]/div/div[3]"),". We then store the text into the ",(0,r.kt)("code",{className:"ph codeph"},"displayedPrice")," variable."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-storeText-command-with-target-and-value.png"),alt:"Katalon Recorder complete storeText command"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"     ",(0,r.kt)("table",{className:"table anchor_top_offset",id:"id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d"},(0,r.kt)("caption",null),(0,r.kt)("thead",{className:"thead"},(0,r.kt)("tr",{className:!0},(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__1"},"Command"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__2"},"Target"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__3"},"Value"))),(0,r.kt)("tbody",{className:"tbody"},(0,r.kt)("tr",{className:!0},(0,r.kt)("td",{className:"entry",headers:"id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__1 id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__2 id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},"storeText"),"           "),(0,r.kt)("td",{className:"entry",headers:"id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__1 id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__2 id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},"xpath=//div[@id='root']/div/div/div/div[2]/div/div[2]/div/div[3]"),"           "),(0,r.kt)("td",{className:"entry",headers:"id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__1 id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__2 id_3__6fae3e2b-2802-4cad-875d-6cab179bf03d__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},"displayedPrice"),"           ")))),"   "),(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"Extract the item price."),"     ",(0,r.kt)("p",{className:"p"},"We use the ",(0,r.kt)("code",{className:"ph codeph"},"storeEval")," command to extract the item price ",(0,r.kt)("code",{className:"ph codeph"},"$25.99")," (the first six characters) from the text."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-storeEval-command.png"),alt:"Katalon Recorder storeEval command with a Javascript expression"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"     ",(0,r.kt)("table",{className:"table anchor_top_offset",id:"id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9"},(0,r.kt)("caption",null),(0,r.kt)("thead",{className:"thead"},(0,r.kt)("tr",{className:!0},(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__1"},"Command"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__2"},"Target"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__3"},"Value"))),(0,r.kt)("tbody",{className:"tbody"},(0,r.kt)("tr",{className:!0},(0,r.kt)("td",{className:"entry",headers:"id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__1 id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__2 id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},"storeEval"),"           "),(0,r.kt)("td",{className:"entry",headers:"id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__1 id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__2 id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},'"$',"{","displayedPrice","}",'".substring(0, 6)'),"           "),(0,r.kt)("td",{className:"entry",headers:"id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__1 id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__2 id_3__50158866-3f8b-4a96-b4d6-be698c1b22e9__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},"itemPrice"),"           ")))),"     ",(0,r.kt)("p",{className:"p"},"The ",(0,r.kt)("code",{className:"ph codeph"},"storeEval")," command evaluates a Javascript expression, then stores the result into a variable. In our example, the target Javascript expression is ",(0,r.kt)("code",{className:"ph codeph"},'"$',"{","displayedPrice","}",'".substring(0, 6)'),". Here, ",(0,r.kt)("code",{className:"ph codeph"},"substring()")," is a method that extracts characters from a string, given two indices."),"     ",(0,r.kt)("p",{className:"p"},"The expression evaluates the ",(0,r.kt)("code",{className:"ph codeph"},"displayedPrice")," variable into its value. Then it extracts and stores the first six characters into the ",(0,r.kt)("code",{className:"ph codeph"},"itemPrice"),"."),"   "),(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"Verify the item price with regex."),"     ",(0,r.kt)("p",{className:"p"},"We use the ",(0,r.kt)("code",{className:"ph codeph"},"verifyEval")," command with a regex in the ",(0,r.kt)("strong",{className:"ph b"},"Value")," field. This command verifies that the item price is displayed in the correct price pattern."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-verifyEval-command.png"),alt:"Katalon Recorder verifyEval command with a Javascript expression and regular expression"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"     ",(0,r.kt)("table",{className:"table anchor_top_offset",id:"id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5"},(0,r.kt)("caption",null),(0,r.kt)("thead",{className:"thead"},(0,r.kt)("tr",{className:!0},(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__1"},"Command"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__2"},"Target"),(0,r.kt)("th",{className:"entry anchor_top_offset",id:"id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__3"},"Value"))),(0,r.kt)("tbody",{className:"tbody"},(0,r.kt)("tr",{className:!0},(0,r.kt)("td",{className:"entry",headers:"id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__1 id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__2 id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},"verifyEval"),"           "),(0,r.kt)("td",{className:"entry",headers:"id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__1 id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__2 id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},'"$',"{","itemPrice","}",'"'),"           "),(0,r.kt)("td",{className:"entry",headers:"id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__1 id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__2 id_3__396a75ce-20aa-4c4c-9103-2b2f33db6fa5__entry__3 "}," ",(0,r.kt)("code",{className:"ph codeph"},"regexp:^[$](\\d+\\.\\d+)"),"           ")))),"     ",(0,r.kt)("p",{className:"p"},"To input a regex as a value, we prefix the expression with ",(0,r.kt)("code",{className:"ph codeph"},"regexp:"),". For our purpose, we use the regex ",(0,r.kt)("code",{className:"ph codeph"},"^[$](\\d+\\.\\d+)")," that checks if the item price starts with a dollar sign and ends with a numeric value."),"   "),(0,r.kt)("li",{className:"li"},"     ",(0,r.kt)("p",{className:"p"},"Play the test case and verify the ",(0,r.kt)("strong",{className:"ph b"},"Log")," view results."),"     ",(0,r.kt)("p",{className:"p"}," ",(0,r.kt)("img",{className:"image",src:(0,c.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-recorder/docs/extract-and-verify-textual-patterns/KR-5.8.0-Log-view-results.png"),alt:"Katalon Recorder Log view results"}),(0,r.kt)("br",null),(0,r.kt)("br",null),"     "),"   ")))}m.isMDXComponent=!0}}]);