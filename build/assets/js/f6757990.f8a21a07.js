"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[4765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=s.createContext({}),r=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=r(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=r(a),h=o,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||n;return a?s.createElement(g,i(i({ref:t},m),{},{components:a})):s.createElement(g,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var r=2;r<n;r++)i[r]=a[r];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var s=a(87462),o=(a(67294),a(3905)),n=a(44996);const i={id:"97e84c60-22b2-11ed-9930-0242fe3e4a3f",title:"Web Image-based Testing in Katalon Studio",slug:"create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio",hide_title:!0},l='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Web Image-based Testing in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',c={unversionedId:"97e84c60-22b2-11ed-9930-0242fe3e4a3f",id:"97e84c60-22b2-11ed-9930-0242fe3e4a3f",title:"Web Image-based Testing in Katalon Studio",description:"Katalon Studio provides an image locator method to associate   Test Objects with images. With this method, you can perform   image-based testing when elements of the web application under   tests (AUT) retain their appearance even though the underlying   structures have changed.",source:"@site/docs/97e84c60-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio",permalink:"/docs/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"97e84c60-22b2-11ed-9930-0242fe3e4a3f",title:"Web Image-based Testing in Katalon Studio",slug:"create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Automation testing of shadow DOM elements with Katalon Studio",permalink:"/docs/create-tests/test-objects/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio"},next:{title:"Optimizing Object Identification and Tools in Katalon Studio",permalink:"/docs/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio"}},r={},m=[{value:"Requirements",id:"requirements",level:2},{value:'<a id="id_1" class="anchor_top_offset"/>Enable Image-based object recognition',id:"enable-image-based-object-recognition",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Capture screenshots for object recognition',id:"capture-screenshots-for-object-recognition",level:2},{value:'<a id="id_3" class="anchor_top_offset"/>Using built-in tools',id:"using-built-in-tools",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Add image locator to objects',id:"add-image-locator-to-objects",level:2},{value:'<a id="id_5" class="anchor_top_offset"/>Reduce image-based testing failures',id:"reduce-image-based-testing-failures",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-image-based-testing-in-katalon-studio"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Web Image-based Testing in ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon Studio provides an image locator method to associate   Test Objects with images. With this method, you can perform   image-based testing when elements of the web application under   tests (AUT) retain their appearance even though the underlying   structures have changed."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This guide shows you how to configure image-based object   recognition, capture screenshots, and reduce the chance of failures   in image-based testing."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Katalon Studio version 7.2.2 onwards."),(0,o.kt)("li",{className:"li"},"An active Katalon Studio Enterprise license.")),(0,o.kt)("h2",{id:"enable-image-based-object-recognition"},(0,o.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Enable Image-based object recognition"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("strong",{className:"ph b"},"From 7.6 onwards")," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Image-based object recognition is enabled by default for web   test execution in ",(0,o.kt)("strong",{className:"ph b"},"Project > Settings > Self-Healing     > Web UI > Test Execution")," (",(0,o.kt)("a",{className:"xref",href:"/docs/maintain/self-healing-tests-in-katalon-studio"},"See     Self-healing Tests"),")."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/image-enabled.png"),width:650}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("strong",{className:"ph b"},"Before 7.6")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"By default, image-based object recognition is disabled in   Project Settings. Go to ",(0,o.kt)("strong",{className:"ph b"},"Project > Settings >     Execution")," and check ",(0,o.kt)("strong",{className:"ph b"},"Enable Image     Recognition")," to turn on this fallback strategy."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/enable.png"),width:650}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("h2",{id:"capture-screenshots-for-object-recognition"},(0,o.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Capture screenshots for object recognition"),(0,o.kt)("h3",{id:"using-built-in-tools"},(0,o.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Using built-in tools"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To produce images associated with captured Test objects, Katalon   Studio includes the ",(0,o.kt)("strong",{className:"ph b"},"Add Screenshot")," button in both   Web Recorder and Spy utility."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Here we use the ",(0,o.kt)("strong",{className:"ph b"},"Spy Web Utility")," to capture   screenshots. Follow these steps:"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"To open the Spy Web Utility, from the main toolbar, select       ",(0,o.kt)("strong",{className:"ph b"},"Spy Web"),"."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Spy-Web-Utility.png"),width:650,alt:"Toolbar"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the displayed ",(0,o.kt)("strong",{className:"ph b"},"Object Spy")," dialog, specify the       URL of your AUT and the web browser. Click on the       ",(0,o.kt)("strong",{className:"ph b"},"Start")," button to start capturing."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-dialog.png"),width:500,alt:"Object Spy dialog"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"To capture an object, hover your mouse cursor over the web       element and press the combination of ",(0,o.kt)("strong",{className:"ph b"},"\\         keys. You         can also right-click on the web element and select"),"       Capture."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-capture-object.png"),width:700,alt:"Capture object"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the ",(0,o.kt)("strong",{className:"ph b"},"Captured Objects")," view, select the       captured object and click the ",(0,o.kt)("strong",{className:"ph b"},"Add Screenshot"),"       button on the bottom right corner."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-add-screenshot.png"),width:500,alt:"Add screenshot"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"After the Spy utility verifies the image with the message       ",(0,o.kt)("strong",{className:"ph b"},'"Screenshot taken!"'),", click on the       ",(0,o.kt)("strong",{className:"ph b"},"Save")," button to save the captured object and its       screenshot."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-Spy-screenshot-taken.png"),width:500,alt:"Screenshot taken message"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   ")),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},"The image comparison algorithm in Katalon Studio compares a screenshot of an object with the displayed image of the corresponding web element on the active browser, pixel by pixel. Therefore, if you capture object images using other tools, you have to resize the images to the displayed sizes of the web elements on the active browser."))),(0,o.kt)("h2",{id:"add-image-locator-to-objects"},(0,o.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Add image locator to objects"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("strong",{className:"ph b"},"From 7.6 onwards")," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"After you capture a screenshot using the Web Recorder/Spy   utility, Katalon Studio automatically adds an image locator to the   associated object."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To use the image locator of an object:"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Select the object in the ",(0,o.kt)("strong",{className:"ph b"},"Object Repository"),"."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-repository-select-object.png"),width:700,alt:"Select the object"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the ",(0,o.kt)("strong",{className:"ph b"},"Object")," view, navigate to       ",(0,o.kt)("strong",{className:"ph b"},"Selection Method")," and select the       ",(0,o.kt)("strong",{className:"ph b"},"Image")," option."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-view-select-image.png"),width:500,alt:"Select the image locator"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   ")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("strong",{className:"ph b"},"Before 7.6")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"After you capture a screenshot using Web Recorder/Spy utility,   Katalon Studio adds a property called ",(0,o.kt)("strong",{className:"ph b"},"screenshot"),"   to the associated Test object. This property contains the absolute   path to the captured screenshot."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   To enable the image locator of an object:"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Select the object in the ",(0,o.kt)("strong",{className:"ph b"},"Object Repository"),"."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-view-image-path.png"),width:600,alt:"Object view"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"Select ",(0,o.kt)("strong",{className:"ph b"},"Attributes")," as the ",(0,o.kt)("strong",{className:"ph b"},"Selection         Method"),"."),"   "),(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"In the ",(0,o.kt)("strong",{className:"ph b"},"Object's Properties")," table, tick the       ",(0,o.kt)("strong",{className:"ph b"},"screenshot")," property."),"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/property.png"),width:700,alt:"Object's Properties table"}),(0,o.kt)("br",null),(0,o.kt)("br",null),"     "),"   ")),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),(0,o.kt)("p",{className:"p"},"To add screenshots captured using other tools, provide the absolute path to the screenshot in the ",(0,o.kt)("strong",{className:"ph b"},"Path"),"property when enabling the image locator."),(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",src:(0,n.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/image-based-web-elements-recognition/KS-Object-screenshot-path.png"),width:500,alt:"object screenshot absolute path"}),(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"reduce-image-based-testing-failures"},(0,o.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Reduce image-based testing failures"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Since reliable image-based testing depends on image comparison,   you can reduce the chance of failures in two ways:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("strong",{className:"ph b"},"Screen Resolution"),": The screen resolutions of       screenshot capturing devices and test executing devices can affect       the accuracy of image comparison. We recommend capturing       screenshots and executing tests on the same device for the best       results."),"   "),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("p",{className:"p"},"       ",(0,o.kt)("strong",{className:"ph b"},"Capture tool"),": We recommend using built-in       capture tools in Web Recorder and Spy utility since they       automatically resize the captured images."),"   ")," "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,o.kt)("strong",{className:"ph b"},"See also"),":"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio-samples/image-recognition-web",target:"_blank"},"Sample       Project"),"   "),"   ",(0,o.kt)("li",{className:"li"},"     ",(0,o.kt)("a",{className:"xref",href:"/docs/maintain/self-healing-tests-in-katalon-studio"},"Self-Healing       Tests"),"   ")," "))}d.isMDXComponent=!0}}]);