"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[78968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=s.createContext({}),i=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=i(a),k=o,h=d["".concat(c,".").concat(k)]||d[k]||m[k]||n;return a?s.createElement(h,l(l({ref:t},p),{},{components:a})):s.createElement(h,l({ref:t},p))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var i=2;i<n;i++)l[i]=a[i];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=a(87462),o=(a(67294),a(3905)),n=a(44996);const l={id:"da44a6a0-c3e6-11ed-a4d3-0242cfbc79b5",title:"Katalon On-Premises deployment guide",slug:"administer/katalon-platform-packages/katalon-platform-on-premises/katalon-on-premises-deployment-guide",hide_title:!0},r='<a id="concept-790" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Katalon On-Premises deployment guide',c={unversionedId:"da44a6a0-c3e6-11ed-a4d3-0242cfbc79b5",id:"da44a6a0-c3e6-11ed-a4d3-0242cfbc79b5",title:"Katalon On-Premises deployment guide",description:"This document serves as a guide for those who want to install and activate their Katalon On-Premises License Server plan.",source:"@site/docs/da44a6a0-c3e6-11ed-a4d3-0242cfbc79b5.md",sourceDirName:".",slug:"/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-on-premises-deployment-guide",permalink:"/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-on-premises-deployment-guide",draft:!1,tags:[],version:"current",frontMatter:{id:"da44a6a0-c3e6-11ed-a4d3-0242cfbc79b5",title:"Katalon On-Premises deployment guide",slug:"administer/katalon-platform-packages/katalon-platform-on-premises/katalon-on-premises-deployment-guide",hide_title:!0},sidebar:"aSidebar",previous:{title:"Katalon Platform On-Premises use cases",permalink:"/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-platform-on-premises-use-cases"},next:{title:"Upgrade your On-Premises License Server to v2.1.0",permalink:"/docs/administer/katalon-platform-packages/katalon-platform-on-premises/upgrade-your-on-premises-license-server-to-v2.1.0"}},i={},p=[{value:'<a id="concept-2284" class="anchor_top_offset"/>About the On-Premises License Server',id:"about-the-on-premises-license-server",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install the Katalon Platform On-Premises License Server",id:"install-the-katalon-platform-on-premises-license-server",level:3},{value:'<a id="task-9196" class="anchor_top_offset"/>Download the Katalon On-Premises package and configure',id:"download-the-katalon-on-premises-package-and-configure",level:2},{value:'<a id="task-822" class="anchor_top_offset"/>Activate the On-Premises license',id:"activate-the-on-premises-license",level:2},{value:'<a id="task-9125" class="anchor_top_offset"/>Access the Katalon Platform',id:"access-the-katalon-platform",level:2},{value:'<a id="task-2363" class="anchor_top_offset"/>Stop Katalon On-Premises',id:"stop-katalon-on-premises",level:2},{value:'<a id="troubleshooting-4199" class="anchor_top_offset"/>Troubleshooting and support for Katalon On-Premises',id:"troubleshooting-and-support-for-katalon-on-premises",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"katalon-on-premises-deployment-guide"},(0,o.kt)("a",{id:"concept-790",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Katalon On-Premises deployment guide"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"shortdesc"},"This document serves as a guide for those who want to install and activate their Katalon On-Premises License Server plan."),(0,o.kt)("h2",{id:"about-the-on-premises-license-server"},(0,o.kt)("a",{id:"concept-2284",class:"anchor_top_offset"}),"About the On-Premises License Server"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"}," Only applicable to users with any On-Premises plan.")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"This service only supports Linux (Debian or CentOS based).")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Existing On-Premises package users can contact our Sales team at business@katalon.com for data migration.")))),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The Katalon Studio On-Premises License Server allows the installation and activation of Katalon Studio at the client's network location. It is best for users who must work within a restricted network environment."),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"There are two package plans available:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"License Server only.")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"License Server with Katalon Platform."),(0,o.kt)("p",{className:"p"}))),"Begin the installation process by checking if your system can run it.",(0,o.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,o.kt)("table",{xmlns:"http://www.w3.org/1999/xhtml",className:"table anchor_top_offset",id:"concept-2284__d27e8cb6-27a1-43a8-9fdf-793065e20e84"},(0,o.kt)("caption",null),(0,o.kt)("colgroup",null,(0,o.kt)("col",{style:{width:"50%"}}),(0,o.kt)("col",{style:{width:"50%"}})),(0,o.kt)("tbody",{className:"tbody"},(0,o.kt)("tr",{className:!0},(0,o.kt)("td",{className:"entry"},(0,o.kt)("strong",{className:"ph b"},"Requirements")),(0,o.kt)("td",{className:"entry"})),(0,o.kt)("tr",{className:!0},(0,o.kt)("td",{className:"entry"},"Operating System"),(0,o.kt)("td",{className:"entry"},"64-bit Linux (Debian or CentOS based)")),(0,o.kt)("tr",{className:!0},(0,o.kt)("td",{className:"entry"},"CPU"),(0,o.kt)("td",{className:"entry"},"Minimum 4 cores")),(0,o.kt)("tr",{className:!0},(0,o.kt)("td",{className:"entry"},"Memory"),(0,o.kt)("td",{className:"entry"},"Minimum 16GiB")),(0,o.kt)("tr",{className:!0},(0,o.kt)("td",{className:"entry"},"Hard Drive"),(0,o.kt)("td",{className:"entry"},"Minimum 100GiB available hard disk space")))),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Before deploying Katalon Platform On-Premises, the following prerequisites need to be met:"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"A physical or virtual server that meets the System Requirements. ")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Docker and Docker Compose installed on the target server. If Docker and Docker Compose are not available via your Linux server's package manager, please review the instructions for manual install. "),(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"To install Docker for Linux, view Docker's guide here: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://docs.docker.com/desktop/install/linux-install/",target:"_blank"},"Install Docker Desktop on Linux")," or ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://docs.docker.com/engine/install/",target:"_blank"},"Install Docker Engine"),". ")),(0,o.kt)("li",{className:"li"},"To install Docker Compose for Linux, see Docker's guide here: ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://docs.docker.com/compose/install/",target:"_blank"},"Install Docker Compose"),". "))),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"A Postgres 14.3.x Database Server with ",(0,o.kt)("a",{className:"xref j-external-link",href:"https://www.postgresql.org/docs/current/pgstatstatements.html",target:"_blank"},"EXTENSION"),": pg_stat_statements")))),(0,o.kt)("h3",{id:"install-the-katalon-platform-on-premises-license-server"},"Install the Katalon Platform On-Premises License Server"),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:"),"  ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"Ensure that your environment meets all of the System Requirements and Prerequisites outlined above.")))),"There are two package plans for the On-Premises License Server:",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"License Server only;")),(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"License Server with Katalon Platform. "),(0,o.kt)("p",{className:"p"}))),"Identify which package plan you are on and ensure that you only use the one applicable to you. "),(0,o.kt)("h2",{id:"download-the-katalon-on-premises-package-and-configure"},(0,o.kt)("a",{id:"task-9196",class:"anchor_top_offset"}),"Download the Katalon On-Premises package and configure"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"shortdesc"},"Here's how you can obtain the Katalon On-Premises package and configure it according to your needs. "),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"Start the process by contacting the Katalon Sales team at business@katalon.com and asking for the On-Premises package. "),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Receive the On-Premises package from the Katalon sales team.")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Extract or unzip the .zip package file. ")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Open a terminal emulator (command line). Input this code: "),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"mkdir -p /katalon/","\n","cp katalon-op.zip /katalon/","\n","cd /katalon/","\n","unzip katalon-op.zip")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Go back to the unzipped folder (named katalon-op). It should contain these files:"),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"cd /katalon/katalon-op/","\n","ls -la","\n","-rw-r--r--","  ",".env","\n","-rw-r--r--","  ","docker-compose.yml","\n","-rw-r--r--","  ","images_2.1.0.tar.gz","\n","-rw-r--r--","  ","katalon-op.crt","\n","-rw-r--r--","  ","katalon-op.key")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Run the command below to load the Docker image. "),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"docker load < images_2.1.0.tar.gz","\n","docker images")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Open and reconfigure the .env file. It should contain the following: "),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"### Katalon-OP env","\n","\n","DB_HOST=<database_hostname>","\n","DB_PORT=5432","\n","DB_USERNAME=postgres","\n","DB_PASSWORD=<database_password>","\n","\n","# License Server configs","\n","ADMIN_EMAIL=<email>","\n","ADMIN_PASSWORD=<password>","\n","LICENSE_SERVER_URL=https://admin.kata-op.com","\n","\n","# TestOps configs (ignored without testops profile)","\n","TESTOPS_FILE_STORAGE_PATH=/opt/testops-data","\n","TESTOPS_SERVER_URL=https://testops.kata-op.com","\n","\n","# HTTPS config","\n","HTTPS_PORT=443","\n","CERT_PATH=./katalon-op.crt","\n","KEY_PATH=./katalon-op.key","\n","KEY_PASSPHRASE=")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Make sure you create a folder for ",(0,o.kt)("span",{className:"ph uicontrol"},"TESTOPS_FILE_STORAGE_PATH"),". For example, if your preferred configuration is ",(0,o.kt)("span",{className:"ph uicontrol"},"TESTOPS_FILE_STORAGE_PATH=/opt/testops_data"),', then create folder "/opt/testops_data". Run the code below to do so.'),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"mkdir /opt/testops_data","\n","chmode 755 /opt/testops_data")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Make sure you have two PostgreSQL databases with name: k1, kit")),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Copy your SSL cert and key to the Katalon On-Premises folder. "),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," ",(0,o.kt)("ul",{className:"ul"},(0,o.kt)("li",{className:"li"},(0,o.kt)("p",{className:"p"},"If you are running the License Server with Katalon Platform, then you need to run with two sub-domains (ex: ",(0,o.kt)("span",{className:"ph uicontrol"},"admin.my-domain.com"),", ",(0,o.kt)("span",{className:"ph uicontrol"},"testops.my-domain.com"),") and Wildcard SSL."))))),(0,o.kt)("div",{className:"itemgroup info"},"Run the code below to copy your SSL cert:"),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"cp my-domain.crt /katalon/katalon-op/my-domain.crt","\n","cp my-domain.key /katalon/katalon-op/my-domain.key")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Update the .env file with your information. "),(0,o.kt)("ol",{type:"a",className:"ol substeps"},(0,o.kt)("li",{className:"li substep substepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Replace ",(0,o.kt)("span",{className:"ph uicontrol"},"admin.kata-op.com")," and ",(0,o.kt)("span",{className:"ph uicontrol"},"testops.kata-op.com")," with your domain. "),(0,o.kt)("div",{className:"itemgroup info"},"For example: ",(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"DB_HOST=10.10.20.5")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"DB_PASSWORD=adminpasswdsql@!!!")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"LICENSE_SERVER_URL=https://admin.my-domain.com")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"TESTOPS_SERVER_URL=https://testops.my-domain.com")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"TESTOPS_FILE_STORAGE_PATH=/opt/testops_data")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"ADMIN_EMAIL=admin@katalon-op.local")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"ADMIN_PASSWORD=adminpasswd@!!!")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"CERT_PATH=./my-domain.crt")),(0,o.kt)("p",{className:"p"},(0,o.kt)("code",{className:"ph codeph"},"KEY_PATH=./my-domain.key")))))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"Run the corresponding command below to start the application. Ensure to use the one that aligns with your plan. "),(0,o.kt)("ol",{type:"a",className:"ol substeps"},(0,o.kt)("li",{className:"li substep substepexpand"},(0,o.kt)("span",{className:"ph cmd"},(0,o.kt)("strong",{className:"ph b"},"Start Katalon On-Premises, License Server only: ")),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"cd /katalon/katalon-op/","\n","docker-compose up -d")))),(0,o.kt)("li",{className:"li substep substepexpand"},(0,o.kt)("span",{className:"ph cmd"},(0,o.kt)("strong",{className:"ph b"},"Start Katalon On-Premises, License Server with Katalon Platform: ")),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"cd /katalon/katalon-op/","\n","docker-compose --profile testops up -d"))))))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"After these steps, activate your license. "),(0,o.kt)("h2",{id:"activate-the-on-premises-license"},(0,o.kt)("a",{id:"task-822",class:"anchor_top_offset"}),"Activate the On-Premises license"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"In order to begin using your Katalon On-Premises license, you must activate it by following the steps below. "),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step"},(0,o.kt)("span",{className:"ph cmd"},"Access the admin homepage on the browser. For example, if your LICENSE_SERVER_URL is ",(0,o.kt)("span",{className:"ph uicontrol"},"https://admin.my-domain.com"),", then enter the URL: ",(0,o.kt)("span",{className:"ph uicontrol"},"https://admin.my-domain.com/")),(0,o.kt)("ol",{type:"a",className:"ol substeps"},(0,o.kt)("li",{className:"li substep"},(0,o.kt)("span",{className:"ph cmd"},"Wait for Init DB to complete. It takes around 3 to 5 minutes. ")),(0,o.kt)("li",{className:"li substep"},(0,o.kt)("span",{className:"ph cmd"},"The screen automatically redirects to ",(0,o.kt)("span",{className:"ph uicontrol"},"https://admin.my-domain.com/katone/activate-license"))))),(0,o.kt)("li",{className:"li step"},(0,o.kt)("span",{className:"ph cmd"},"Copy your ",(0,o.kt)("span",{className:"ph uicontrol"},"Machine ID")," to generate your License Key. ")),(0,o.kt)("li",{className:"li step"},(0,o.kt)("span",{className:"ph cmd"},"Click ",(0,o.kt)("span",{className:"ph uicontrol"},"Choose File"),". ")),(0,o.kt)("li",{className:"li step"},(0,o.kt)("span",{className:"ph cmd"},"Open your License Key file, and click ",(0,o.kt)("span",{className:"ph uicontrol"},"Activate"),".",(0,o.kt)("img",{className:"image",src:(0,n.Z)("/da17ca40-c3e6-11ed-a4d3-0242cfbc79b5.png"),alt:"The On-Premises license activation screen"}))),(0,o.kt)("li",{className:"li step"},(0,o.kt)("span",{className:"ph cmd"},"Log in with your username and password. Make sure to use the same credentials in the .env file configured previously. ",(0,o.kt)("img",{className:"image",src:(0,n.Z)("/da5dace0-c3e6-11ed-a4d3-0242cfbc79b5.png"),alt:"Katalon On-Premises' sign-in screen"})))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"Signing in will bring you to the homepage. This confirms that you have activated your license successfully.",(0,o.kt)("img",{className:"image",src:(0,n.Z)("/da3b57d0-c3e6-11ed-a4d3-0242cfbc79b5.png")})),(0,o.kt)("h2",{id:"access-the-katalon-platform"},(0,o.kt)("a",{id:"task-9125",class:"anchor_top_offset"}),"Access the Katalon Platform"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},"To access the Katalon Platform on a browser, you need to manually enter a URL."),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"li step p"},(0,o.kt)("span",{className:"ph cmd"},"Type the name of your TESTOPS_SERVER_URL in your browser. "),(0,o.kt)("ol",{type:"a",className:"ol substeps"},(0,o.kt)("li",{className:"li substep"},(0,o.kt)("span",{className:"ph cmd"},"For example, if your TESTOPS_SERVER_URL is ",(0,o.kt)("span",{className:"ph uicontrol"},"https://testops.my-domain.com"),", then enter the URL: ",(0,o.kt)("span",{className:"ph uicontrol"},"https://testops.my-domain.com"),".")))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"This will bring you to the homepage of the On-Premises Katalon Platform. "),(0,o.kt)("h2",{id:"stop-katalon-on-premises"},(0,o.kt)("a",{id:"task-2363",class:"anchor_top_offset"}),"Stop Katalon On-Premises"),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section context"},(0,o.kt)("div",{className:"note note note_note"},(0,o.kt)("span",{className:"note__title"},"Note:")," Running these commands will ",(0,o.kt)("strong",{className:"ph b"},"stop and remove "),"all Docker containers in your server. It ",(0,o.kt)("strong",{className:"ph b"},"will not "),"remove any data in the folder ",(0,o.kt)("span",{className:"ph uicontrol"},"TESTOPS_FILE_STORAGE_PATH")," and your database. "),"Ensure to use the command appropriate for your package plan. "),(0,o.kt)("ol",{xmlns:"http://www.w3.org/1999/xhtml",className:"ol steps"},(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"To stop Katalon On-Premises License Server only, run the following command:"),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"cd /katalon/katalon-op/","\n","docker-compose down")))),(0,o.kt)("li",{className:"li step stepexpand"},(0,o.kt)("span",{className:"ph cmd"},"To stop Katalon On-Premises License Server with Katalon Platform, run the following command: "),(0,o.kt)("div",{className:"itemgroup info"},(0,o.kt)("pre",{className:"pre codeblock"},(0,o.kt)("code",null,"cd /katalon/katalon-op/","\n","docker-compose --profile testops down"))))),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section result"},"Running either command successfully will stop Katalon's On-Premises from running. "),(0,o.kt)("h2",{id:"troubleshooting-and-support-for-katalon-on-premises"},(0,o.kt)("a",{id:"troubleshooting-4199",class:"anchor_top_offset"}),"Troubleshooting and support for Katalon On-Premises"),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"shortdesc"}," "),(0,o.kt)("section",{xmlns:"http://www.w3.org/1999/xhtml",className:"section condition"},(0,o.kt)("p",{className:"p"},"If you are having trouble with the On-Premises plan, contact Katalon.")),(0,o.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"bodydiv troubleSolution"},(0,o.kt)("section",{className:"section cause"},(0,o.kt)("p",{className:"p"},"You can contact Katalon directly through your Katalon Partner or at business@katalon.com for any installation or configuration issues you encounter. Our team will work with you directly to resolve any issues.")),(0,o.kt)("section",{className:"section remedy"},(0,o.kt)("div",{className:"li step p"},(0,o.kt)("span",{className:"ph cmd"},"In order to provide the highest level of customer support, the support team may request certain commands to be executed in order to generate telemetry, utilization, and log data. This will be worked on with you directly. ")))))}d.isMDXComponent=!0}}]);