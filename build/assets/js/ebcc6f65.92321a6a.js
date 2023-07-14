"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[92694],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=s.createContext({}),n=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=n(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=n(a),h=o,b=d["".concat(c,".").concat(h)]||d[h]||m[h]||i;return a?s.createElement(b,r(r({ref:t},p),{},{components:a})):s.createElement(b,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var n=2;n<i;n++)r[n]=a[n];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=a(87462),o=(a(67294),a(3905)),i=a(44996);const r={id:"967fe2c0-22b2-11ed-9930-0242fe3e4a3f",title:"Parameterize Mobile Test Object Properties in Katalon Studio",slug:"create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio",hide_title:!0},l='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Parameterize Mobile Test Object Properties in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',c={unversionedId:"967fe2c0-22b2-11ed-9930-0242fe3e4a3f",id:"967fe2c0-22b2-11ed-9930-0242fe3e4a3f",title:"Parameterize Mobile Test Object Properties in Katalon Studio",description:"Note:",source:"@site/docs/967fe2c0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio",permalink:"/docs/create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"967fe2c0-22b2-11ed-9930-0242fe3e4a3f",title:"Parameterize Mobile Test Object Properties in Katalon Studio",slug:"create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Locators and Object Identification in Katalon Studio",permalink:"/docs/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio"},next:{title:"Find the locator of a mobile application element",permalink:"/docs/create-tests/test-objects/mobile-test-objects/find-the-locator-of-a-mobile-application-element"}},n={},p=[{value:'<a id="id_1" class="anchor_top_offset"/>Usage Example',id:"usage-example",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Step 1: Parameterize the test object&#39;s dynamic property',id:"step-1-parameterize-the-test-objects-dynamic-property",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Step 2: Use the parameterized test object in a test case',id:"step-2-use-the-parameterized-test-object-in-a-test-case",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Step 3: Call the findTestObject method within a keyword',id:"step-3-call-the-findtestobject-method-within-a-keyword",level:3},{value:'<a id="id_5" class="anchor_top_offset"/>Escaping special characters',id:"escaping-special-characters",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parameterize-mobile-test-object-properties-in-katalon-studio"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Parameterize Mobile Test Object Properties in ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Parameterizing Mobile Test Object Properties is only available with the ",(0,o.kt)("span",{className:"ph uicontrol"},"Attributes")," Selection Method.")))),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The benefits of parameterizing mobile test objects are similar to those of parameterizing web test objects. Refer to ",(0,o.kt)("a",{className:"xref",href:"/docs/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio"},"this document")," for further details."),(0,o.kt)("h2",{id:"usage-example"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Usage Example"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Below is an example of how to parameterize test objects in   Mobile testing. Open a sample project of Mobile testing on Android   devices by accessing ",(0,o.kt)("strong",{className:"ph b"},"File> New Sample Project> Sample     Android Mobile Tests Project"),"."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Navigate to ",(0,o.kt)("strong",{className:"ph b"},"Object     Repository/Application/android.widget.TextView - App")," in   Tests Explorer, open the test object view of   ",(0,o.kt)("code",{className:"ph codeph"},"android.widget.TextView - App")," whose property will be   parameterized."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In this example, we want to find a test object that has   ",(0,o.kt)("code",{className:"ph codeph"},"//*[(text() = 'demokatalon' or . = 'demokatalon')]")," as   its selector. Here are the steps to apply this feature:"),(0,o.kt)("h3",{id:"step-1-parameterize-the-test-objects-dynamic-property"},(0,o.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Step 1: Parameterize the test object's dynamic property"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Create a property with its value as a variable having this syntax: ",(0,o.kt)("code",{className:"ph codeph"},"$","{","Variable_name","}"),". For this example, in the ",(0,o.kt)("span",{className:"ph uicontrol"},"Object's Properties")," panel, add an object's property with:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Name: ",(0,o.kt)("code",{className:"ph codeph"},"text"),"   "),(0,o.kt)("li",{className:"li"},"Value: ",(0,o.kt)("code",{className:"ph codeph"},"$","{","text","}"),"   ")),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Its selected locator is generated as ",(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"//*[(text() =","\n","            ","'$","{","text","}","' or . = '$","{","text","}","')]"))," and identified at runtime with passing data."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-mobile-object/selector.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("h3",{id:"step-2-use-the-parameterized-test-object-in-a-test-case"},(0,o.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Step 2: Use the parameterized test object in a test case"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("strong",{className:"ph b"},"In Manual View"),"     "),"     ",(0,o.kt)("p",{className:"p"},"In the ",(0,o.kt)("code",{className:"ph codeph"},"Verify Correct Alarm Message")," test case, double-click the test object that contains the parameterized property, which is ",(0,o.kt)("code",{className:"ph codeph"},"android.widget.TextView - App"),". The ",(0,o.kt)("span",{className:"ph uicontrol"},"Test Object Input")," dialog is displayed."),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-mobile-object/test-case.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"     ",(0,o.kt)("p",{className:"p"},"In the ",(0,o.kt)("span",{className:"ph uicontrol"},"Variables")," panel, add a new variable with the following properties:"),"     ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"Param Type: the variable type (The default type is String)."),(0,o.kt)("li",{className:"li"},"Param: the variable name of the property created in step 1."),(0,o.kt)("li",{className:"li"},"Value Type: the type of the variable's value."),(0,o.kt)("li",{className:"li"},"Value: a specific value of that variable.")),"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("img",{className:"image",src:(0,i.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/param-mobile-object/test-object-input.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"}," ",(0,o.kt)("strong",{className:"ph b"},"In Script View"),"     "),"     ",(0,o.kt)("p",{className:"p"},"You can also switch to the ",(0,o.kt)("strong",{className:"ph b"},"Scripting Mode")," of the current Test Case to adjust the property's value at any time. The predefined variable is automatically mapped when you select a mobile object from manual mode, so you don't need to define them again manually."),"   ")),(0,o.kt)("h3",{id:"step-3-call-the-findtestobject-method-within-a-keyword"},(0,o.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Step 3: Call the findTestObject method within a keyword"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In this example, the ",(0,o.kt)("code",{className:"ph codeph"},"tap")," keyword is performed on   the object with the text value that we have just specified."),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"groovy","\n","            ","Mobile.tap(findTestObject('Application/android.widget.TextView -","\n","            ","App', [('text') : 'demokatalon']), 10)"))),(0,o.kt)("h2",{id:"escaping-special-characters"},(0,o.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Escaping special characters"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To use a special character like ",(0,o.kt)("code",{className:"ph codeph"},"$")," or ",(0,o.kt)("code",{className:"ph codeph"},"\\"),"   as a regular one in any place that uses parameterized test objects,   prepend it with a backslash: ",(0,o.kt)("code",{className:"ph codeph"},"\\")," (the so-called escape   character)."),(0,o.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,o.kt)("code",null,"{","\n","    ",'"productName": $',"{","GlobalVariable.productName","}",",","\n","    ",'"unit": "\\\\bottle\\",',"\n","    ",'"quantity": 50,',"\n","    ",'"discount": $',"{",' if (productName == "wine") ',"{"," return 30 ","}"," else ","{"," return 0","}","}","\n","    ",'"note": "Currency unit of $',"{","GlobalVariable.productName","}",' is \\$."',"\n","\n","}","\n")),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,o.kt)("li",{className:"li"},"Without ",(0,o.kt)("code",{className:"ph codeph"},"\\"),": ",(0,o.kt)("em",{className:"ph i"},"note: Currency unit of       $","{","GlobalVariable.productName","}"," is $"),"."),"   ",(0,o.kt)("li",{className:"li"},"With ",(0,o.kt)("code",{className:"ph codeph"},"\\"),": ",(0,o.kt)("em",{className:"ph i"},"note: Currency unit of wine is       $"),".")," "))}d.isMDXComponent=!0}}]);