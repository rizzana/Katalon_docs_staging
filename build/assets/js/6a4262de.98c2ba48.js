"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[83353],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,l=function(e,t){if(null==e)return{};var o,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var n=a.createContext({}),c=function(e){var t=a.useContext(n),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(n.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,l=e.mdxType,s=e.originalType,n=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=l,g=p["".concat(n,".").concat(m)]||p[m]||u[m]||s;return o?a.createElement(g,r(r({ref:t},d),{},{components:o})):a.createElement(g,r({ref:t},d))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=o.length,r=new Array(s);r[0]=p;var i={};for(var n in t)hasOwnProperty.call(t,n)&&(i[n]=t[n]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<s;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5853:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var a=o(87462),l=(o(67294),o(3905)),s=o(44996);const r={id:"8b591e70-22b2-11ed-9930-0242fe3e4a3f",title:"Google Cloud Build",slug:"execute/cicd-integrations/google-cloud-build",hide_title:!0},i='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Google Cloud Build',n={unversionedId:"8b591e70-22b2-11ed-9930-0242fe3e4a3f",id:"8b591e70-22b2-11ed-9930-0242fe3e4a3f",title:"Google Cloud Build",description:"Cloud Build is a service that executes your builds on the Google Cloud Platform (GCP). Cloud Build can import source code from Google Cloud Storage, Cloud Source Repositories, GitHub, or Bitbucket, to continuously build, test, and deploy projects. For more information on Cloud Build, see the Cloud Build documentation: Cloud Build.",source:"@site/docs/8b591e70-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/execute/cicd-integrations/google-cloud-build",permalink:"/docs/execute/cicd-integrations/google-cloud-build",draft:!1,tags:[],version:"current",frontMatter:{id:"8b591e70-22b2-11ed-9930-0242fe3e4a3f",title:"Google Cloud Build",slug:"execute/cicd-integrations/google-cloud-build",hide_title:!0},sidebar:"aSidebar",previous:{title:"GitLab Integration",permalink:"/docs/execute/cicd-integrations/gitlab-integration"},next:{title:"Harness Integration",permalink:"/docs/execute/cicd-integrations/harness-integration"}},c={},d=[{value:'<a id="id_1" class="anchor_top_offset"/>Configure the GCP project',id:"configure-the-gcp-project",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Configure the <code xmlns="http://www.w3.org/1999/xhtml" className="ph codeph">cloudbuild.yml</code>  file',id:"configure-the-cloudbuildyml--file",level:3},{value:'<a id="id_3" class="anchor_top_offset"/>Create a GCP secret for Katalon API key',id:"create-a-gcp-secret-for-katalon-api-key",level:3},{value:'<a id="id_4" class="anchor_top_offset"/>Create and test your build trigger',id:"create-and-test-your-build-trigger",level:2},{value:'<a id="id_5" class="anchor_top_offset"/>Create a trigger',id:"create-a-trigger",level:3},{value:'<a id="id_6" class="anchor_top_offset"/>Test the trigger',id:"test-the-trigger",level:3},{value:'<a id="id_7" class="anchor_top_offset"/>View build results',id:"view-build-results",level:3}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"google-cloud-build"},(0,l.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,l.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Google Cloud Build"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Cloud Build is a service that executes your builds on the Google Cloud Platform (GCP). Cloud Build can import source code from Google Cloud Storage, Cloud Source Repositories, GitHub, or Bitbucket, to continuously build, test, and deploy projects. For more information on Cloud Build, see the Cloud Build documentation: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://cloud.google.com/build/docs",target:"_blank"},"Cloud Build"),"."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This tutorial shows you how to integrate your Katalon project with Cloud Build."),(0,l.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,l.kt)("span",{className:"note__title"},"Note:"),(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},"You can find the sample project in our GitHub repository: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio-samples/ci-samples",target:"_blank"},"katalon-studio-samples/ci-samples"),"."))),(0,l.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note important note_important"},(0,l.kt)("span",{className:"note__title"},"Important:"),(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},"A valid Katalon API key. See: ",(0,l.kt)("a",{className:"xref",href:"/docs/administer/settings/katalon-api-key-in-katalon-testops#id_1"},"Generate API keys"),"."),(0,l.kt)("li",{className:"li"},"A GCP project. See Google Workspace developer documentation: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://developers.google.com/workspace/guides/create-project",target:"_blank"},"Create a Google Cloud project"),"."),(0,l.kt)("li",{className:"li"},"Google Cloud Build API enabled for your Google Cloud project. See Google Cloud documentation: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://cloud.google.com/endpoints/docs/openapi/enable-api",target:"_blank"},"Enabling an API in your Google Cloud project"),"."),(0,l.kt)("li",{className:"li"},"Secret Manager API enabled for your GCP project. See Google Cloud documentation: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://cloud.google.com/build/docs/securing-builds/use-secrets",target:"_blank"},"Using secrets from Secret Manager"),"."))),(0,l.kt)("h2",{id:"configure-the-gcp-project"},(0,l.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"Configure the GCP project"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"After setting up the GCP project, you need to configure the   following components:"),(0,l.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},"   ",(0,l.kt)("li",{className:"li"},"A ",(0,l.kt)("code",{className:"ph codeph"},"cloudbuild.yml")," file at the root directory of     your repository that contains the build configuration for Cloud     Build."),"   ",(0,l.kt)("li",{className:"li"},"A GCP secret to store your Katalon API key.")," "),(0,l.kt)("h3",{id:"configure-the-cloudbuildyml--file"},(0,l.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Configure the ",(0,l.kt)("code",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph codeph"},"cloudbuild.yml"),"  file"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Here in the sample GitHub repository, we have the following   ",(0,l.kt)("code",{className:"ph codeph"},"cloudbuild.yml")," file:"),(0,l.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,l.kt)("code",null,"steps:","\n","- name: 'docker'","\n","  ","args: ['pull', 'katalonstudio/katalon']","\n","- name: 'docker'","\n","  ","entrypoint: 'sh'","\n","  ","args: ['-c', 'docker run -t --rm -v /workspace:/tmp/project katalonstudio/katalon katalonc.sh -projectPath=/tmp/project -browserType=\"Chrome\" -retry=0 -retryStrategy=immediately -testSuiteCollectionPath=\"Test Suites/Simple Test Suite Collection\" --config -webui.autoUpdateDrivers=true -apiKey=$$KATALON_API_KEY']","\n","  ","secretEnv: ['KATALON_API_KEY']","\n","availableSecrets:","\n","  ","secretManager:","\n","  ","- versionName: projects/$PROJECT_ID/secrets/KATALON_API_KEY/versions/1","\n","    ","env: 'KATALON_API_KEY'","\n")),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In the build configuration file, there are two build steps:"),(0,l.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol"},(0,l.kt)("li",{className:"li"},"     ",(0,l.kt)("p",{className:"p"},"Use a ",(0,l.kt)("code",{className:"ph codeph"},"docker")," cloud builder to pull the       ",(0,l.kt)("code",{className:"ph codeph"},"katalonstudio/katalon")," Docker image from Docker       Hub."),"     ",(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},"In the ",(0,l.kt)("strong",{className:"ph b"},"args")," field, you can specify an image         version with the syntax         ",(0,l.kt)("code",{className:"ph codeph"},"katalonstudio/katalon:<version_tag>"),", for example         ",(0,l.kt)("code",{className:"ph codeph"},"katalonstudio/katalon:8.1.2"),".")),"   "),(0,l.kt)("li",{className:"li"},"     ",(0,l.kt)("p",{className:"p"},"Use a ",(0,l.kt)("code",{className:"ph codeph"},"docker")," cloud builder to run the       ",(0,l.kt)("code",{className:"ph codeph"},"katalonstudio/katalon")," image as a container and execute       the tests stored in the GitHub repository."),"     ",(0,l.kt)("ul",{className:"ul"},(0,l.kt)("li",{className:"li"},"         ",(0,l.kt)("p",{className:"p"},"In the ",(0,l.kt)("strong",{className:"ph b"},"args")," field, you can input your desired           ",(0,l.kt)("code",{className:"ph codeph"},"katalonc")," commands. All of ",(0,l.kt)("code",{className:"ph codeph"},"katalonc"),"           supported arguments can be found in this document: ",(0,l.kt)("a",{className:"xref",href:"/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine"},"Command             Syntax"),"."),"       "),(0,l.kt)("li",{className:"li"},"         ",(0,l.kt)("p",{className:"p"},"In the ",(0,l.kt)("strong",{className:"ph b"},"secretEnv")," field, you can input the           environment variables for the build. Here we have the           ",(0,l.kt)("code",{className:"ph codeph"},"KATALON_API_KEY")," variable to specify the use of a           secret named ",(0,l.kt)("code",{className:"ph codeph"},"KATALON_API_KEY"),"."),"       ")),"   ")),(0,l.kt)("h3",{id:"create-a-gcp-secret-for-katalon-api-key"},(0,l.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Create a GCP secret for Katalon API key"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"As specified in the build configuration file, the ",(0,l.kt)("code",{className:"ph codeph"},"KATALON_API_KEY")," secret represents your Katalon API key. We need to define the secret in our project."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For detailed instructions on creating a GCP secret, refer to this Google Cloud guide: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets",target:"_blank"},"Creating and accessing secrets"),"."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,l.kt)("img",{className:"image",src:(0,s.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Secret-key.png"),alt:"Google Cloud Platform secret manager"}),(0,l.kt)("br",null),(0,l.kt)("br",null)," "),(0,l.kt)("h2",{id:"create-and-test-your-build-trigger"},(0,l.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Create and test your build trigger"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"A Cloud Build trigger automatically starts a build whenever you   make changes to your source code. You need to connect Cloud Build   to the sample GitHub repository and then create a trigger that   automatically monitors changes and builds code."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For detailed instructions on connecting to repositories and   building triggers, refer to this guide: ",(0,l.kt)("a",{className:"xref j-external-link",href:"https://cloud.google.com/build/docs/automating-builds/create-manage-triggers",target:"_blank"},"Creating     and managing build triggers"),"."),(0,l.kt)("h3",{id:"create-a-trigger"},(0,l.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Create a trigger"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In our example, a trigger is created to build the code automatically whenever a ",(0,l.kt)("strong",{className:"ph b"},"Push to branch")," event occurs."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,l.kt)("img",{className:"image",src:(0,s.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Created-trigger.png"),alt:"Google Cloud Platform trigger created"}),(0,l.kt)("br",null),(0,l.kt)("br",null)," "),(0,l.kt)("h3",{id:"test-the-trigger"},(0,l.kt)("a",{id:"id_6",class:"anchor_top_offset"}),"Test the trigger"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To test the trigger, you can start the build manually by clicking ",(0,l.kt)("strong",{className:"ph b"},"Run")," on the trigger."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"}," ",(0,l.kt)("img",{className:"image",src:(0,s.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Run-trigger.png"),alt:"Google Cloud Platform run trigger"}),(0,l.kt)("br",null),(0,l.kt)("br",null)," "),(0,l.kt)("h3",{id:"view-build-results"},(0,l.kt)("a",{id:"id_7",class:"anchor_top_offset"}),"View build results"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To view the build results, go to the ",(0,l.kt)("strong",{className:"ph b"},"History")," tab and select the latest build."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,l.kt)("img",{className:"image",src:(0,s.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-History-tab.png"),alt:"Google Cloud Platform history tab"}),(0,l.kt)("br",null),(0,l.kt)("br",null)),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The build details are shown as follows:"),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,l.kt)("img",{className:"image",src:(0,s.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/google-cloud-build-integration/GCP-Build-details.png"),alt:"Google Cloud Platform build details"}),(0,l.kt)("br",null),(0,l.kt)("br",null)),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"We can see that the code build includes two steps: pulling the Docker image and executing the tests in a container."),(0,l.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To view test reports in TestOps, you can enable Katalon TestOps integration in your project. See: ",(0,l.kt)("a",{className:"xref",href:"/docs/get-started/set-up-your-workspace/integrate-katalon-testops-and-katalon-testcloud-with-katalon-studio"},"TestOps Integration"),"."))}p.isMDXComponent=!0}}]);