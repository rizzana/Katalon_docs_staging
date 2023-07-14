"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[61499],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=c(t),p=a,g=k["".concat(l,".").concat(p)]||k[p]||d[p]||o;return t?i.createElement(g,r(r({ref:n},u),{},{components:t})):i.createElement(g,r({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=k;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},90376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const o={id:"8b242bc0-22b2-11ed-9930-0242fe3e4a3f",title:"Jenkins Integration Overview",slug:"execute/cicd-integrations/jenkins-integration/jenkins-integration-overview",hide_title:!0},r='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Jenkins Integration Overview',s={unversionedId:"8b242bc0-22b2-11ed-9930-0242fe3e4a3f",id:"8b242bc0-22b2-11ed-9930-0242fe3e4a3f",title:"Jenkins Integration Overview",description:"Jenkins is an open-source automation server. Jenkins provides hundreds of plugins to support building, deploying, and automating any project.",source:"@site/docs/8b242bc0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/execute/cicd-integrations/jenkins-integration/jenkins-integration-overview",permalink:"/docs/execute/cicd-integrations/jenkins-integration/jenkins-integration-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"8b242bc0-22b2-11ed-9930-0242fe3e4a3f",title:"Jenkins Integration Overview",slug:"execute/cicd-integrations/jenkins-integration/jenkins-integration-overview",hide_title:!0},sidebar:"aSidebar",previous:{title:"Harness Integration",permalink:"/docs/execute/cicd-integrations/harness-integration"},next:{title:"Use Katalon plugins for Jenkins integration on Windows/macOS",permalink:"/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos"}},l={},c=[{value:'<a id="id_1" class="anchor_top_offset"/>Jenkins Integration',id:"jenkins-integration",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Execute Katalon Studio tests in Jenkins',id:"execute-katalon-studio-tests-in-jenkins",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jenkins-integration-overview"},(0,a.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,a.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Jenkins Integration Overview"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Jenkins is an open-source automation server. Jenkins provides hundreds of plugins to support building, deploying, and automating any project."),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can integrate Jenkins with Katalon Studio and execute Katalon tests with Jenkins."),(0,a.kt)("h2",{id:"jenkins-integration"},(0,a.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Jenkins Integration"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"There are two possible ways to integrate Katalon with   Jenkins:"),(0,a.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,a.kt)("li",{className:"li"},"     ",(0,a.kt)("p",{className:"p"},"Use Katalon Plugin for Jenkins."),"     ",(0,a.kt)("p",{className:"p"},"Katalon Plugin for Jenkins helps execute Katalon Studio in       Jenkins. Katalon Studio will be automatically downloaded and       deployed. To integrate Jenkins with Katalon Studio via Katalon       Plugin, you can refer to the following documents:"),"     ",(0,a.kt)("ul",{className:"ul"},(0,a.kt)("li",{className:"li"},"         ",(0,a.kt)("a",{className:"xref",href:"/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos"},"On           Windows/ macOS"),"       "),(0,a.kt)("li",{className:"li"},"         ",(0,a.kt)("a",{className:"xref",href:"/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu"},"On           Ubuntu"),"       ")),"   "),(0,a.kt)("li",{className:"li"},"     ",(0,a.kt)("p",{className:"p"},"Use Katalon Studio Docker Image."),"     ",(0,a.kt)("p",{className:"p"},"This image contains up-to-date browsers, including Google       Chrome, Mozilla Firefox, and Katalon Studio. Hence, when running       your Katalon Project with Katalon Studio Docker Image, the       pre-installed Katalon Studio and Katalon Runtime Engine in your       local machine are not required. Docker Image for Katalon Studio is       available at the Docker Hub: ",(0,a.kt)("a",{className:"xref j-external-link",href:"https://hub.docker.com/r/katalonstudio/katalon/",target:"_blank"},"katalonstudio/katalon"),"."),"     ",(0,a.kt)("p",{className:"p"},"To integrate Jenkins with Katalon Studio via Katalon Docker       Image, you can refer to the following documents:"),"     ",(0,a.kt)("ul",{className:"ul"},(0,a.kt)("li",{className:"li"},"         ",(0,a.kt)("a",{className:"xref",href:"/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-pipeline-jenkinsfile-with-katalon-studio-docker-image"},"Integrate           Jenkins Pipeline (Jenkinsfile) with Katalon Studio Docker           Image"),"       "),(0,a.kt)("li",{className:"li"},"         ",(0,a.kt)("a",{className:"xref",href:"/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-on-docker-hosted-in-ubuntu#id_1"},"Integrate           Jenkins on Docker hosted in Ubuntu"),"       ")),"   ")),(0,a.kt)("h2",{id:"execute-katalon-studio-tests-in-jenkins"},(0,a.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Execute Katalon Studio tests in Jenkins"),(0,a.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The following documents are tutorials and tips that can help you execute Katalon Studio tests after Jenkins integration."),(0,a.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,a.kt)("li",{className:"li"},(0,a.kt)("a",{className:"xref",href:"/docs/execute/cicd-integrations/jenkins-integration/passing-scenario-tags-at-runtime-when-building-with-jenkins#task-8549"},"Passing feature file and scenario tags at runtime when building with Jenkins")),(0,a.kt)("li",{className:"li"},(0,a.kt)("a",{className:"xref",href:"/docs/execute/cicd-integrations/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile"},"Execute Katalon Studio tests with Jenkins Pipeline Script (Jenkinsfile)"))))}d.isMDXComponent=!0}}]);