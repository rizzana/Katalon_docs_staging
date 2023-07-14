"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[32103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85767:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"898aa000-22b2-11ed-9930-0242fe3e4a3f",title:"Other Utilities in Katalium Framework",slug:"plugins-and-add-ons/katalium-framework/other-utilities-in-katalium-framework",hide_title:!0},i='<a id="id_katalium-framework-others" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Other Utilities in Katalium Framework',l={unversionedId:"898aa000-22b2-11ed-9930-0242fe3e4a3f",id:"898aa000-22b2-11ed-9930-0242fe3e4a3f",title:"Other Utilities in Katalium Framework",description:"Parameterization",source:"@site/docs/898aa000-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/plugins-and-add-ons/katalium-framework/other-utilities-in-katalium-framework",permalink:"/docs/plugins-and-add-ons/katalium-framework/other-utilities-in-katalium-framework",draft:!1,tags:[],version:"current",frontMatter:{id:"898aa000-22b2-11ed-9930-0242fe3e4a3f",title:"Other Utilities in Katalium Framework",slug:"plugins-and-add-ons/katalium-framework/other-utilities-in-katalium-framework",hide_title:!0},sidebar:"aSidebar",previous:{title:"Configure Browsers in Katalium Framework",permalink:"/docs/plugins-and-add-ons/katalium-framework/configure-browsers-in-katalium-framework"},next:{title:"Real-time Monitoring and Reporting in Katalium Framework",permalink:"/docs/plugins-and-add-ons/katalium-framework/real-time-monitoring-and-reporting-in-katalium-framework"}},s={},c=[{value:'<a id="id_1" class="anchor_top_offset"/>Parameterization',id:"parameterization",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Logging',id:"logging",level:2},{value:'<a id="id_3" class="anchor_top_offset"/>Capture WebDriver actions',id:"capture-webdriver-actions",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"other-utilities-in-katalium-framework"},(0,n.kt)("a",{id:"id_katalium-framework-others",class:"anchor_top_offset"}),(0,n.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Other Utilities in Katalium Framework"),(0,n.kt)("h2",{id:"parameterization"},(0,n.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Parameterization"),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"TestNG provides a comprehensive mechanism for customizing   parameters, which can be referred ",(0,n.kt)("a",{className:"xref j-external-link",href:"https://testng.org/doc/documentation-main.html#parameters",target:"_blank"},"here"),"."),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In Katalium Framework, you can set default values for parameters   in the file ",(0,n.kt)("code",{className:"ph codeph"},"kata-default.properties")," (",(0,n.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio/katalium-sample/blob/master/src/test/resources/kata-default.properties",target:"_blank"},"example"),"),   or using at runtime using Java's system properties, e.g. ",(0,n.kt)("code",{className:"ph codeph"},"mvn     clean test -DkataBrowser=firefox"),". This is very handy when   you do not want reconfigure unchanged parameters."),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Default values of parameters can be accessed using the helper   ",(0,n.kt)("code",{className:"ph codeph"},"com.katalon.kata.helper.ParameterHelper"),"."),(0,n.kt)("h2",{id:"logging"},(0,n.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Logging"),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalium Framework provides the class   ",(0,n.kt)("code",{className:"ph codeph"},"com.katalon.kata.helper.LogHelper")," to help retrieve   ",(0,n.kt)("code",{className:"ph codeph"},"org.slf4j.Logger")," instances with correct class   names."),(0,n.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,n.kt)("code",null,"private static final Logger log = LogHelper.getLogger();","\n")),(0,n.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,n.kt)("code",null,'log.info("Open CURA home page.");',"\n")),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Sample output:"),(0,n.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,n.kt)("code",null,"09:26:29.475 [main] INFO","  ","com.katalon.kata.testng.TestTemplate - Make appointment with parameters","\n","09:26:29.475 [main] INFO","  ","com.katalon.kata.testng.TestTemplate - Facility Hongkong CURA Healthcare Center","\n","09:26:29.476 [main] INFO","  ","com.katalon.kata.testng.TestTemplate - VisitDate 27/12/2016","\n","09:26:29.476 [main] INFO","  ","com.katalon.kata.testng.TestTemplate - Comment Please make appointment as soon as possible.","\n","09:26:29.476 [main] INFO","  ","c.katalon.kata.selenium.PageTemplate - Open CURA home page.","\n","09:26:38.528 [main] INFO","  ","c.katalon.kata.selenium.PageTemplate - Make appointment.","\n")),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Logs will be printed out on the console and in TestNG XML   reports."),(0,n.kt)("h2",{id:"capture-webdriver-actions"},(0,n.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Capture WebDriver actions"),(0,n.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can attach a custom ",(0,n.kt)("code",{className:"ph codeph"},"org.openqa.selenium.support.events.AbstractWebDriverEventListener")," to capture WebDriver events (",(0,n.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio/katalium-sample/blob/master/src/test/java/com/katalon/kata/sample/listener/EventListener.java",target:"_blank"},"source code"),"):"),(0,n.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,n.kt)("code",null,"package com.katalon.kata.sample.listener;","\n","\n","import com.katalon.kata.webdriver.WebDriverPool;","\n","import org.testng.IExecutionListener;","\n","\n","public class EventListener implements IExecutionListener ","{","\n","  ","@Override","\n","  ","public void onExecutionStart() ","{","\n","    ","WebDriverPool webDriverPool = WebDriverPool.get();","\n","    ","webDriverPool.setAfterCreateDriverListener(driver -> ","{","\n","      ","driver.register(new WebDriverEventListener());","\n","    ","}",");","\n","  ","}","\n","\n","  ","@Override","\n","  ","public void onExecutionFinish() ","{","\n","\n","  ","}","\n","}","\n")))}p.isMDXComponent=!0}}]);