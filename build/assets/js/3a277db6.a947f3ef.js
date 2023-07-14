"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[30089],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>h});var o=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function n(e,t){if(null==e)return{};var s,o,a=function(e,t){if(null==e)return{};var s,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)s=r[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=c(s),h=a,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return s?o.createElement(u,i(i({ref:t},p),{},{components:s})):o.createElement(u,i({ref:t},p))}));function h(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=d;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:a,i[1]=n;for(var c=2;c<r;c++)i[c]=s[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,s)}d.displayName="MDXCreateElement"},19750:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=s(87462),a=(s(67294),s(3905)),r=s(44996);const i={id:"96caf580-22b2-11ed-9930-0242fe3e4a3f",title:"Import SOAP requests from WSDLs to Katalon Studio",slug:"create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio",hide_title:!0},n='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Import SOAP requests from WSDLs to <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',l={unversionedId:"96caf580-22b2-11ed-9930-0242fe3e4a3f",id:"96caf580-22b2-11ed-9930-0242fe3e4a3f",title:"Import SOAP requests from WSDLs to Katalon Studio",description:"WSDL is used for specifying a SOAP web service's functionality. It is critical to SOAP web service testing when you can create web service requests based on a WSDL file. This section shows you how to import a WSDL file into a Katalon project and explore it as well.",source:"@site/docs/96caf580-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio",permalink:"/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"96caf580-22b2-11ed-9930-0242fe3e4a3f",title:"Import SOAP requests from WSDLs to Katalon Studio",slug:"create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Import RESTful requests from WADLs to Katalon Studio",permalink:"/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-requests-from-wadls-to-katalon-studio"},next:{title:"REST Request in Katalon Studio",permalink:"/docs/create-tests/test-objects/api-test-objects/rest-request/rest-request-in-katalon-studio"}},c={},p=[{value:'<a id="id_1" class="anchor_top_offset"/>Import WSDLs into Katalon Studio',id:"import-wsdls-into-katalon-studio",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Work with imported WSDLs',id:"work-with-imported-wsdls",level:2},{value:'<a id="id_3" class="anchor_top_offset"/>Troubleshooting',id:"troubleshooting",level:2}],m={toc:p};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"import-soap-requests-from-wsdls-to-katalon-studio"},(0,a.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,a.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Import SOAP requests from WSDLs to ",(0,a.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,a.kt)("a",{className:"xref j-external-link",href:"https://www.w3.org/TR/wsdl/",target:"_blank"},"WSDL")," is used for specifying a SOAP web service's functionality. It is critical to SOAP web service testing when you can create web service requests based on a WSDL file. This section shows you how to import a WSDL file into a Katalon project and explore it as well."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"From version 7.5.0, Katalon Studio has improved the WSDL import feature with a more intuitive UI and added utility, for support. You can, in particular, add the desired endpoint to your SOAP request, which takes precedence over the imported endpoint."),(0,a.kt)("h2",{id:"import-wsdls-into-katalon-studio"},(0,a.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Import WSDLs into Katalon Studio"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To import a WSDL file to your project, perform the following steps:"),(0,a.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},"Open an API/Web Service project.")),(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},"In the ",(0,a.kt)("strong",{className:"ph b"},"Tests Explorer")," panel, right-click on ",(0,a.kt)("strong",{className:"ph b"},"Object Repository")," > ",(0,a.kt)("strong",{className:"ph b"},"Import")," > ",(0,a.kt)("strong",{className:"ph b"},"From WSDL"),"."),(0,a.kt)("p",{className:"p"},(0,a.kt)("img",{className:"image",width:500,src:(0,r.Z)("/618b06a0-34cb-11ed-9930-0242fe3e4a3f.png")}))),(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},"In the ",(0,a.kt)("strong",{className:"ph b"},"URL")," field of the ",(0,a.kt)("strong",{className:"ph b"},"Import WSDL")," dialog, specify either a remote WSDL url or the path of a local WSDL file (E.g. ",(0,a.kt)("code",{className:"ph codeph"},"http://www.dneonline.com/calculator.asmx?WSDL"),").")),(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},"Click ",(0,a.kt)("strong",{className:"ph b"},"OK"),". Katalon Studio loads the file and generates SOAP request objects."),(0,a.kt)("div",{className:"note note note_note"},(0,a.kt)("span",{className:"note__title"},"Note:")," ",(0,a.kt)("ul",{className:"ul"},(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},"If you have created an ",(0,a.kt)("strong",{className:"ph b"},"API/Web Service")," project, click the ",(0,a.kt)("strong",{className:"ph b"},"Import WSDL")," icon on the main toolbar to display the ",(0,a.kt)("strong",{className:"ph b"},"Import WSDL")," dialog in step 3."),(0,a.kt)("p",{className:"p"},(0,a.kt)("img",{className:"image",width:500,src:(0,r.Z)("/6fa630d0-538d-11ed-a602-0242cfbc79b5.png")}))))))),(0,a.kt)("h2",{id:"work-with-imported-wsdls"},(0,a.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Work with imported WSDLs"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"A WSDL may contain multiple services. For each service, Katalon Studio:"),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},"Creates a SOAP request with a specific service function.")),(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},"Parses its content from the specified WSDL, into their corresponding fields in the request object, such as Service Endpoint, SOAPAction, and Request message."))),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For example, Katalon Studio creates multiple request objects with ",(0,a.kt)("code",{className:"ph codeph"},"http://www.dneonline.com/calculator.asmx?WSDL"),"."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-soap-requests-from-wsdl/parsed-objects.png"),alt:"parsed objects"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"From version 7.5.0, you can manually change the content of these fields. When you override any fields of the imported request object with new values, you need to ",(0,a.kt)("em",{className:"ph i"},"save")," your modification(s) for it to take effect."),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},(0,a.kt)("strong",{className:"ph b"},"Service Endpoint"),": This tab stores the service endpoint parsed from the WSDL file. You can specify another endpoint for the interface if you prefer. The request object receives any value given in this field.")),(0,a.kt)("li",{className:"li"},(0,a.kt)("p",{className:"p"},(0,a.kt)("strong",{className:"ph b"},"SOAPAction"),": The SOAPAction is parsed in the HTTP Header of the request if the request method is SOAP."))),(0,a.kt)("h2",{id:"troubleshooting"},(0,a.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Troubleshooting"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"After sending the SOAP request, you might encounter a ",(0,a.kt)("em",{className:"ph i"},"System.Web.Services.Protocols.SoapException: Server did not recognize the value of HTTP Header SOAPAction..")," exception (1), in the response."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This can happen if you check the ",(0,a.kt)("strong",{className:"ph b"},"Use the endpoint and SOAPAction header parsed from WSDL")," (2) check box, and at the same time, specify the SOAPAction in the request header (3)."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("em",{className:"ph i"},"(1),(2),(3): see the image below for more information.")," "),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,a.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-soap-requests-from-wsdl/exception.png"),alt:"exception message"}),(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,a.kt)("strong",{className:"ph b"},"Proposed solution")," "),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Remove ",(0,a.kt)("em",{className:"ph i"},"SOAPAction")," from the ",(0,a.kt)("em",{className:"ph i"},"HTTP Header"),", if you decide to use the endpoint and SOAPAction header parsed from WSDL."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"See also:"),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,a.kt)("li",{className:"li"}," ",(0,a.kt)("a",{className:"xref",href:"/docs/create-tests/test-objects/api-test-objects/soap-request-in-katalon-studio"},"SOAP Request"),"   ")))}d.isMDXComponent=!0}}]);