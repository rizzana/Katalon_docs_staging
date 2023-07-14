"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[10931],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var o=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,s=function(t,e){if(null==t)return{};var a,o,s={},l=Object.keys(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var c=o.createContext({}),r=function(t){var e=o.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},p=function(t){var e=r(t.components);return o.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var a=t.components,s=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=r(a),h=s,b=d["".concat(c,".").concat(h)]||d[h]||m[h]||l;return a?o.createElement(b,n(n({ref:e},p),{},{components:a})):o.createElement(b,n({ref:e},p))}));function h(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var l=a.length,n=new Array(l);n[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:s,n[1]=i;for(var r=2;r<l;r++)n[r]=a[r];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32545:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var o=a(87462),s=(a(67294),a(3905)),l=a(44996);const n={id:"9675d0a0-22b2-11ed-9930-0242fe3e4a3f",title:"Manage Mobile Test Objects in Katalon Studio",slug:"create-tests/test-objects/mobile-test-objects/manage-mobile-test-objects-in-katalon-studio",hide_title:!0},i='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Manage Mobile Test Objects in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',c={unversionedId:"9675d0a0-22b2-11ed-9930-0242fe3e4a3f",id:"9675d0a0-22b2-11ed-9930-0242fe3e4a3f",title:"Manage Mobile Test Objects in Katalon Studio",description:"In version 7.6, Katalon Studio fully support selector     strategies supported by Appium except for Android Data     Matcher.",source:"@site/docs/9675d0a0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/test-objects/mobile-test-objects/manage-mobile-test-objects-in-katalon-studio",permalink:"/docs/create-tests/test-objects/mobile-test-objects/manage-mobile-test-objects-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"9675d0a0-22b2-11ed-9930-0242fe3e4a3f",title:"Manage Mobile Test Objects in Katalon Studio",slug:"create-tests/test-objects/mobile-test-objects/manage-mobile-test-objects-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Working with BDD feature files in Katalon Studio",permalink:"/docs/create-tests/manage-test-artifacts/working-with-bdd-feature-files-in-katalon-studio"},next:{title:"Locators and Object Identification in Katalon Studio",permalink:"/docs/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio"}},r={},p=[{value:'<a id="id_1" class="anchor_top_offset"/>In Manual View',id:"in-manual-view",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Create a Mobile Object',id:"create-a-mobile-object",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Validate Test Object on AUT',id:"validate-test-object-on-aut",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Add an object property',id:"add-an-object-property",level:3},{value:'<a id="id_5" class="anchor_top_offset"/>In Script View',id:"in-script-view",level:2},{value:'<a id="concept-339" class="anchor_top_offset"/>For version before 7.6',id:"for-version-before-76",level:2},{value:'<a id="concept-279" class="anchor_top_offset"/>In Manual view',id:"in-manual-view-1",level:3},{value:'<a id="concept-3341" class="anchor_top_offset"/>In Script View',id:"in-script-view-1",level:3}],m={toc:p};function d(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,o.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manage-mobile-test-objects-in-katalon-studio"},(0,s.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Manage Mobile Test Objects in ",(0,s.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In version 7.6, Katalon Studio fully support ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio"},"selector     strategies supported by Appium except for Android Data     Matcher"),"."),(0,s.kt)("h2",{id:"in-manual-view"},(0,s.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"In Manual View"),(0,s.kt)("h3",{id:"create-a-mobile-object"},(0,s.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Create a Mobile Object"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"We recommend creating a Mobile object by using Katalon Mobile Spy since the object locators are captured automatically for detecting objects during test execution."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can also create an object in Object Repository by right-click on ",(0,s.kt)("span",{className:"ph uicontrol"},"Object Repository")," and selecting ",(0,s.kt)("span",{className:"ph uicontrol"},"New")," > ",(0,s.kt)("span",{className:"ph uicontrol"},"Mobile Object"),"."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",src:(0,l.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/mobile-selector-strategies/create-new-mobile-object.png")}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The most important property of an object is its locator strategy and value. The locator should be unique in detecting that object. Select a locator strategy among the provided option and enter a locator."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Studio 7.6+ fully supports ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio"},"selector strategies supported by Appium except for Android Data Matcher"),"."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",src:(0,l.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-mobile-test-object./object.png"),width:500}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("h3",{id:"validate-test-object-on-aut"},(0,s.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Validate Test Object on AUT"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can add test objects to ",(0,s.kt)("span",{className:"ph uicontrol"},"Mobile Object Spy")," to verify if the object can be detected successfully in the application under test. Refer to Spy Mobile Utility for more details regarding how to validate captured objects against the application under test."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To add an object to ",(0,s.kt)("span",{className:"ph uicontrol"},"Mobile Object Spy"),", right-click on the item to open its context menu and select the option."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",height:614,src:(0,l.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-mobile-test-object./add-mobile.png"),width:350}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("h3",{id:"add-an-object-property"},(0,s.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Add an object property"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can add multiple object properties to the ",(0,s.kt)("span",{className:"ph uicontrol"},"Object's Properties")," table. Please note that object properties cannot share the same name in an object."),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},"In the ",(0,s.kt)("span",{className:"ph uicontrol"},"Object's Properties")," panel, click ",(0,s.kt)("span",{className:"ph uicontrol"},"Add"),"."),(0,s.kt)("li",{className:"li"},"In the displayed ",(0,s.kt)("span",{className:"ph uicontrol"},"Add property")," dialog, specify the required information:")),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"}," ",(0,s.kt)("strong",{className:"ph b"},"Name"),": The object property's name. You can select one of the provided options (class, css, id, name, title, xpath) or enter a name manually."),(0,s.kt)("li",{className:"li"}," ",(0,s.kt)("strong",{className:"ph b"},"Match condition"),": The condition is used for detecting the target object during execution."),(0,s.kt)("li",{className:"li"}," ",(0,s.kt)("strong",{className:"ph b"},"Value"),": The value that completes a match condition.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The new property is added to the properties list as configured above. You can also change the properties' values here."),(0,s.kt)("h2",{id:"in-script-view"},(0,s.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"In Script View"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Script View")," allows defining and handling ",(0,s.kt)("strong",{className:"ph b"},"Test Objects")," programmatically. The following is a usage example demonstrating how to do that:"),(0,s.kt)("img",{xmlns:"http://www.w3.org/1999/xhtml",className:"image",src:(0,l.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-mobile-test-object./script-ex.png")}),(0,s.kt)("br",{xmlns:"http://www.w3.org/1999/xhtml"}),(0,s.kt)("br",{xmlns:"http://www.w3.org/1999/xhtml"}),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject","\n","import com.kms.katalon.core.testobject.MobileTestObject","\n","import com.kms.katalon.core.testobject.MobileTestObject.MobileLocatorStrategy","\n","\n","// Find an object which was defined already in Object Repository","\n","myPredefinedObject = findTestObject('android.widget.TextView - App')","\n","\n","// Create a new mobile object programmatically","\n",'MobileTestObject mobileTestObject = new MobileTestObject("TestObjectID")',"\n","mobileTestObject.setMobileLocatorStrategy(MobileLocatorStrategy.XPATH)","\n","mobileTestObject.setMobileLocator(\"//android.widget.TextView[(text() = 'App' or . = 'App')]\")","\n")),(0,s.kt)("h2",{id:"for-version-before-76"},(0,s.kt)("a",{id:"concept-339",class:"anchor_top_offset"}),"For version before 7.6"),(0,s.kt)("h3",{id:"in-manual-view-1"},(0,s.kt)("a",{id:"concept-279",class:"anchor_top_offset"}),"In Manual view"),(0,s.kt)("h4",{xmlns:"http://www.w3.org/1999/xhtml",className:"title topictitle4 anchor_top_offset",id:"concept-360"},"Create a Mobile Test Object and its locator"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"shortdesc"}," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To create a new Mobile test object, do as follows:"),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},"Select ",(0,s.kt)("span",{className:"ph uicontrol"},"File")," > ",(0,s.kt)("span",{className:"ph uicontrol"},"New")," > ",(0,s.kt)("span",{className:"ph uicontrol"},"Test Object")," from the main menu."),(0,s.kt)("li",{className:"li"},"In the displayed ",(0,s.kt)("span",{className:"ph uicontrol"},"New Test Object")," dialog, provide a name for the new test object, then click ",(0,s.kt)("span",{className:"ph uicontrol"},"OK")," button.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"A new test object is created under the ",(0,s.kt)("strong",{className:"ph b"},"Object Repository")," of Katalon Studio."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Studio selects ",(0,s.kt)("span",{className:"ph uicontrol"},"Attributes")," by default to locate mobile test objects. A test object is typically built up by a number of properties. Check on one or multiple ",(0,s.kt)("span",{className:"ph uicontrol"},"Detect object by")," in the ",(0,s.kt)("span",{className:"ph uicontrol"},"Object's Properties")," table to compose a ",(0,s.kt)("span",{className:"ph uicontrol"},"Selected Locator")," for the object. During test execution, Katalon Studio bases on such information to detect an object."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In the following example, Katalon Studio tries to find any object on AUT with ",(0,s.kt)("strong",{className:"ph b"},"text")," to satisfy the defined criteria during execution."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,s.kt)("img",{className:"image",src:(0,l.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-mobile-test-object./detect.png")}),(0,s.kt)("br",null),(0,s.kt)("br",null)," "),(0,s.kt)("h4",{xmlns:"http://www.w3.org/1999/xhtml",className:"title topictitle4 anchor_top_offset",id:"concept-4916"},"Add an object property (before v7.6)"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"shortdesc"}," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can add multiple object properties to the ",(0,s.kt)("span",{className:"ph uicontrol"},"Object's Properties")," table. Please note that object properties cannot share the same name in an object."),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},"In the ",(0,s.kt)("span",{className:"ph uicontrol"},"Object's Properties")," panel, click ",(0,s.kt)("span",{className:"ph uicontrol"},"Add"),"."),(0,s.kt)("li",{className:"li"},(0,s.kt)("p",{className:"p"},"In the displayed ",(0,s.kt)("span",{className:"ph uicontrol"},"Add property")," dialog, specify the required information:"),(0,s.kt)("p",{className:"p"},(0,s.kt)("img",{className:"image",height:275,src:(0,l.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-mobile-test-object./object-properties.png"),width:757}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("p",{className:"p"},"where:"))),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"}," ",(0,s.kt)("strong",{className:"ph b"},"Name"),": The object property's name. You can select one of the provided options (class, css, id, name, title, xpath) or enter a name manually."),(0,s.kt)("li",{className:"li"}," ",(0,s.kt)("strong",{className:"ph b"},"Match condition"),": The condition is used for detecting the target object during execution."),(0,s.kt)("li",{className:"li"}," ",(0,s.kt)("strong",{className:"ph b"},"Value"),": The value that completes a match condition.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The new property is added to the properties list as configured above. You can also change the properties' values here."),(0,s.kt)("h4",{xmlns:"http://www.w3.org/1999/xhtml",className:"title topictitle4 anchor_top_offset",id:"concept-7387"},"Validate Test Object on AUT (before v7.6)"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can add test objects to ",(0,s.kt)("span",{className:"ph uicontrol"},"Mobile Object Spy")," to verify if the object can be detected successfully in the application under test. Refer to ",(0,s.kt)("a",{className:"xref",href:"/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-mobile-utility-in-katalon-studio"},"Spy Mobile Utility")," for more details regarding how to validate captured objects against the application under test."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To add an object to ",(0,s.kt)("span",{className:"ph uicontrol"},"Mobile Object Spy"),", right-click on the item to open its context menu and select the option."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",height:614,src:(0,l.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/manage-mobile-test-object./add-mobile.png"),width:350}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("h3",{id:"in-script-view-1"},(0,s.kt)("a",{id:"concept-3341",class:"anchor_top_offset"}),"In Script View"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("strong",{className:"ph b"},"Script View")," allows defining and handling ",(0,s.kt)("strong",{className:"ph b"},"Test Objects")," programmatically. The following is a usage example demonstrating how to do that:"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("img",{className:"image",src:(0,l.Z)("https://raw.githubusercontent.com/katalon-studio/docs-images/master/katalon-studio/docs/manage-mobile-test-object./script-ex.png")}),(0,s.kt)("br",null),(0,s.kt)("br",null)),(0,s.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,s.kt)("li",{className:"li"},"Refer to existing objects using the ",(0,s.kt)("code",{className:"ph codeph"},"findTestObject()")," method:",(0,s.kt)("pre",{className:"pre codeblock"},(0,s.kt)("code",null,"// Find an object which was defined already in Object Repository","\n","myPredefinedObject = findTestObject(\u2018android.widget.TextView - App\u2019)","\n"))),(0,s.kt)("li",{className:"li"},"Create a new object programmatically using the ",(0,s.kt)("code",{className:"ph codeph"},"TestObject")," class:",(0,s.kt)("pre",{className:"pre codeblock"},(0,s.kt)("code",null,"// Create a new object programmatically","\n","myNewObject = new TestObject(\u201cTestObjectID\u201d)","\n"))),(0,s.kt)("li",{className:"li"},"Add a property to an object using the ",(0,s.kt)("code",{className:"ph codeph"},"addProperty()")," method:",(0,s.kt)("pre",{className:"pre codeblock"},(0,s.kt)("code",null,"// Add property to Test Object, a property is defined by:","\n","// property name,","\n","// condition type,","\n","// property value,","\n","// a boolean value to indicate if the property will be used to identify the object during execution","\n","myNewObject.addProperty(\u201cclass\u201d, ConditionType.EQUALS, \u201candroid.widget.TextView\u201d, true)","\n")))))}d.isMDXComponent=!0}}]);