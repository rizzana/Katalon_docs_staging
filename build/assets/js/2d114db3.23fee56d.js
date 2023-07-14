"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[90071],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=s.createContext({}),c=function(e){var t=s.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return s.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,k=m["".concat(r,".").concat(u)]||m[u]||d[u]||n;return a?s.createElement(k,i(i({ref:t},p),{},{components:a})):s.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var s=a(87462),o=(a(67294),a(3905)),n=a(44996);const i={id:"914ed860-22b2-11ed-9930-0242fe3e4a3f",title:"AWS CodeBuild Integration",slug:"execute/cicd-integrations/aws-codebuild-integration",hide_title:!0},l='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>AWS CodeBuild Integration',r={unversionedId:"914ed860-22b2-11ed-9930-0242fe3e4a3f",id:"914ed860-22b2-11ed-9930-0242fe3e4a3f",title:"AWS CodeBuild Integration",description:"AWS CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.",source:"@site/docs/914ed860-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/execute/cicd-integrations/aws-codebuild-integration",permalink:"/docs/execute/cicd-integrations/aws-codebuild-integration",draft:!1,tags:[],version:"current",frontMatter:{id:"914ed860-22b2-11ed-9930-0242fe3e4a3f",title:"AWS CodeBuild Integration",slug:"execute/cicd-integrations/aws-codebuild-integration",hide_title:!0},sidebar:"aSidebar",previous:{title:"CI/CD Integration Overview",permalink:"/docs/execute/cicd-integrations/cicd-integration-overview"},next:{title:"Azure DevOps Integration",permalink:"/docs/execute/cicd-integrations/azure-devops-integration"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:'<a id="task-7175" class="anchor_top_offset"/>Configure the buildspec file',id:"configure-the-buildspec-file",level:2},{value:'<a id="task-4069" class="anchor_top_offset"/>Create an AWS build project',id:"create-an-aws-build-project",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-codebuild-integration"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"AWS CodeBuild Integration"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"AWS CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This document shows you how to run your Katalon project on AWS CodeBuild."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"An active Katalon Runtime Engine license.")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"A Katalon project stored on AWS CodeCommit, GitHub, or Bitbucket.")))),(0,o.kt)("h2",{id:"configure-the-buildspec-file"},(0,o.kt)("a",{id:"task-7175",class:"anchor_top_offset"}),"Configure the buildspec file"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"A buildspec (build specification) file is a collection of build commands and related settings, in YAML format, that CodeBuild uses to run a build. This section shows you some configurations you need to add to your buildspec file.",(0,o.kt)("div",{className:"p"},"To learn more about  buildspec, refer to  AWS documentation: ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},(0,o.kt)("a",{className:"xref j-external-link",href:"https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-syntax",target:"_blank"},"Build specification reference for CodeBuild"))),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},(0,o.kt)("a",{className:"xref j-external-link",href:"https://docs.aws.amazon.com/codebuild/latest/userguide/getting-started-create-build-spec-console.html",target:"_blank"},"Create the buildspec file")))))),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In the repository containing your Katalon project, create the buildspec.yml file in the root (top-level) directory. "),(0,o.kt)("div",{className:"itemgroup stepxmp"},"Below is our  sample buildspec. You can get this sample buildspec file from our       GitHub repository: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://github.com/katalon-studio-samples/ci-samples/blob/master/buildspec.yml",target:"_blank"},"buildspec.yml"),"."),(0,o.kt)("div",{className:"itemgroup stepxmp"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"version: 0.2","\n","env:","\n","  ","parameter-store:","\n","   ","KATALON_API_KEY: /CodeBuild/KATALON_API_KEY","\n","phases:","\n","  ","pre_build:","\n","    ","commands:","\n","      ","- docker pull katalonstudio/katalon","\n","  ","build:","\n","    ","commands:","\n","      ",'- docker run -t --rm -v "$(pwd)":/katalon/katalon/source katalonstudio/katalon katalon-execute.sh -apiKey=$KATALON_API_KEY -browserType="Chrome" -retry=0 -statusDelay=15 -testSuitePath="Test Suites/TS_RegressionTest"',"\n","artifacts:","\n","  ","files:","\n","    ","- report/*","\n","reports: #New","\n","  ",'KatalonTestReports: # CodeBuild will create a report group called "KatalonTestReports".',"\n","    ","files: #Store all of the files","\n","      ","- 'report/JUnit_Report.xml'","\n","\n")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"You need a valid Katalon API key to run Katalon tests. Refer to ",(0,o.kt)("a",{className:"xref",href:"/docs/administer/settings/katalon-api-key-in-katalon-testops#id_1"},"Generate a Katalon API Key")," for more information about Katalon API key generation. "),(0,o.kt)("div",{className:"itemgroup info"},"To protect your Katalon API key, you can store your Katalon API key in Parameter Store or in Secrets Manager."),(0,o.kt)("div",{className:"itemgroup stepxmp"},"For example:",(0,o.kt)("div",{className:"p"},(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("div",{className:"p"},"In Parameter Store:",(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"env:","\n","  ","parameter-store:","\n","   ","KATALON_API_KEY: /CodeBuild/KATALON_API_KEY")))),(0,o.kt)("li",{className:"li"},(0,o.kt)("div",{className:"p"},"In Secrets Manager:",(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"env:","\n","  ","secrets-manager:","\n","   ","KATALON_API_KEY: CodeBuildDemo:KATALON_API_KEY")),"To learn more about environment variables, refer to the               following AWS documentation: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://docs.aws.amazon.com/codebuild/latest/APIReference/API_EnvironmentVariable.html",target:"_blank"},"Environment                 Variable"),".")))))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In the ",(0,o.kt)("code",{className:"ph codeph"},"pre-build")," phase, you can specify the version of Katalon Studio to run your test  with the syntax ",(0,o.kt)("code",{className:"ph codeph"},"katalonstudio/katalon:<version_tag>"),", for example ",(0,o.kt)("code",{className:"ph codeph"},"katalonstudio/katalon:8.1.2"),". If you leave as ",(0,o.kt)("code",{className:"ph codeph"}," katalonstudio/katalon"),", this build uses the latest version of Katalon Studio.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In the ",(0,o.kt)("code",{className:"ph codeph"},"build")," phase, you can input your desired katalonc commands. All of katalonc supported arguments can be found in this document: ",(0,o.kt)("a",{className:"xref",href:"/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine"},"Command-line syntax in Katalon Runtime Engine"),"."))),(0,o.kt)("h2",{id:"create-an-aws-build-project"},(0,o.kt)("a",{id:"task-4069",class:"anchor_top_offset"}),"Create an AWS build project"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"To create an AWS build project, do as follows:"),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Sign in to ",(0,o.kt)("a",{className:"xref j-external-link",href:"http://console.aws.amazon.com",target:"_blank"},"Amazon Web Services")," and go to the CodeBuild service.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In ",(0,o.kt)("span",{className:"ph uicontrol"},"CodeBuild")," > ",(0,o.kt)("span",{className:"ph uicontrol"},"Build projects"),", click ",(0,o.kt)("span",{className:"ph uicontrol"},"Create build project"),"."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",width:850,src:(0,n.Z)("/ba02c6d0-619c-11ed-a602-0242cfbc79b5.png")}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Give your project a name.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In ",(0,o.kt)("span",{className:"ph uicontrol"},"Source"),", select a source provider and specify the repository that contains your Katalon project."),(0,o.kt)("div",{className:"itemgroup stepxmp"},"For example, we connect with a repository on ",(0,o.kt)("span",{className:"ph uicontrol"},"GitHub")," using a personal access token.",(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",width:500,src:(0,n.Z)("/ba18bfd0-619c-11ed-a602-0242cfbc79b5.png")})))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Specify the environment. Make sure that you select the ",(0,o.kt)("span",{className:"ph uicontrol"},"Privileged")," checkbox if you wish to build Docker images or provide your builds with elevated privileges."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",width:600,src:(0,n.Z)("/ba236e30-619c-11ed-a602-0242cfbc79b5.png")}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In the Additional configuration of ",(0,o.kt)("span",{className:"ph uicontrol"},"Environment"),", the ",(0,o.kt)("span",{className:"ph uicontrol"},"Timeout")," and ",(0,o.kt)("span",{className:"ph uicontrol"},"Queued timeout")," fields are pre-populated and you can change them according to what your needs are."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",width:500,src:(0,n.Z)("/ba0d0000-619c-11ed-a602-0242cfbc79b5.png")}))),(0,o.kt)("div",{className:"itemgroup info"},"In ",(0,o.kt)("span",{className:"ph uicontrol"},"Environment variables"),", you can add your Katalon API key as a parameter here.",(0,o.kt)("img",{className:"image",width:500,src:(0,n.Z)("/ba2039e0-619c-11ed-a602-0242cfbc79b5.png")}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In ",(0,o.kt)("span",{className:"ph uicontrol"},"Buildspec"),", choose ",(0,o.kt)("span",{className:"ph uicontrol"},"Use a buildspec file"),"."),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("img",{className:"image",width:600,src:(0,n.Z)("/ba097d90-619c-11ed-a602-0242cfbc79b5.png")}))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"When you are done, scroll to the bottom of the page and select ",(0,o.kt)("span",{className:"ph uicontrol"},"Create build project"),".")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"In the newly created build project, select ",(0,o.kt)("span",{className:"ph uicontrol"},"Start build"),"."))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"The build starts immediately. You can click on ",(0,o.kt)("span",{className:"ph uicontrol"},"Build logs")," to monitor the build progress.",(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",width:850,src:(0,n.Z)("/ba14c830-619c-11ed-a602-0242cfbc79b5.png")}),"If your project is integrated with Katalon TestOps, you can go to ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://testops.katalon.io/",target:"_blank"},"Katalon TestOps")," to view your reports."),(0,o.kt)("p",{className:"p"},(0,o.kt)("img",{className:"image",width:850,src:(0,n.Z)("/ba1cde80-619c-11ed-a602-0242cfbc79b5.png")}),(0,o.kt)("img",{className:"image",width:850,src:(0,n.Z)("/ba10a980-619c-11ed-a602-0242cfbc79b5.png")}))))}m.isMDXComponent=!0}}]);