"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[96386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),r=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=r(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=r(n),m=s,p=h["".concat(c,".").concat(m)]||h[m]||d[m]||a;return n?o.createElement(p,l(l({ref:t},u),{},{components:n})):o.createElement(p,l({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var r=2;r<a;r++)l[r]=n[r];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=n(87462),s=(n(67294),n(3905)),a=n(44996);const l={id:"8c14cd50-22b2-11ed-9930-0242fe3e4a3f",title:"TestCloud Tunnel",slug:"execute/test-execution-with-testcloud/testcloud-tunnel",hide_title:!0},i='<a id="id_testcloud-tunnel" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>TestCloud Tunnel',c={unversionedId:"8c14cd50-22b2-11ed-9930-0242fe3e4a3f",id:"8c14cd50-22b2-11ed-9930-0242fe3e4a3f",title:"TestCloud Tunnel",description:"TestCloud Tunnel",source:"@site/docs/8c14cd50-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/execute/test-execution-with-testcloud/testcloud-tunnel",permalink:"/docs/execute/test-execution-with-testcloud/testcloud-tunnel",draft:!1,tags:[],version:"current",frontMatter:{id:"8c14cd50-22b2-11ed-9930-0242fe3e4a3f",title:"TestCloud Tunnel",slug:"execute/test-execution-with-testcloud/testcloud-tunnel",hide_title:!0},sidebar:"aSidebar",previous:{title:"Use TestCloud in Katalon Runtime Engine",permalink:"/docs/execute/test-execution-with-testcloud/use-testcloud-in-katalon-runtime-engine"},next:{title:"Run tests in private domains with TestCloud",permalink:"/docs/execute/test-execution-with-testcloud/run-tests-in-private-domains-with-testcloud"}},r={},u=[{value:'<a id="id_1" class="anchor_top_offset"/>TestCloud Tunnel',id:"testcloud-tunnel-1",level:2},{value:'<a id="id_3" class="anchor_top_offset"/>Key information',id:"key-information",level:2},{value:'<a id="id_2" class="anchor_top_offset"/>Configure TestCloud Tunnel',id:"configure-testcloud-tunnel",level:2},{value:'<a id="id_4" class="anchor_top_offset"/>TestCloud Tunnel usage recommendations',id:"testcloud-tunnel-usage-recommendations",level:2},{value:'<a id="id_5" class="anchor_top_offset"/>Reuse your TestCloud Tunnel configuration in a new machine',id:"reuse-your-testcloud-tunnel-configuration-in-a-new-machine",level:2},{value:'<a id="concept-1434" class="anchor_top_offset"/>Network configurations for TestCloud Tunnel',id:"network-configurations-for-testcloud-tunnel",level:2},{value:"Configure proxy settings",id:"configure-proxy-settings",level:3},{value:'<a id="concept-1434__section-whitelist-testcloud-domains" class="anchor_top_offset"/>Whitelist TestCloud domains',id:"whitelist-testcloud-domains",level:3}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testcloud-tunnel"},(0,s.kt)("a",{id:"id_testcloud-tunnel",class:"anchor_top_offset"}),(0,s.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"TestCloud Tunnel"),(0,s.kt)("h2",{id:"testcloud-tunnel-1"},(0,s.kt)("a",{id:"id_1",class:"anchor_top_offset"}),"TestCloud Tunnel"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"A tunnel is used to secure the movement of data from one network to another."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,s.kt)("span",{className:"ph uicontrol"},"TestCloud Tunnel")," enables a secure connection to local resources so that users can test their software/application in a restricted environment, avoiding unwanted external access from the global network."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"TestCloud Tunnel services can:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"Scale up with team size and work requirements."),(0,s.kt)("li",{className:"li"},"Reduce latency to a minimum by deploying the QUIC technology."),(0,s.kt)("li",{className:"li"},"Prevent overload and crashes when running many tunnel clients."),(0,s.kt)("li",{className:"li"},"Provide security by limiting access to authorized users with API keys."),(0,s.kt)("li",{className:"li"},"Save time by running multiple concurrent tests using multiple Edge servers.")),(0,s.kt)("h2",{id:"key-information"},(0,s.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"Key information"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The following diagram shows the overview of TestCloud tunnel solution: "),(0,s.kt)("img",{xmlns:"http://www.w3.org/1999/xhtml",className:"image",src:(0,a.Z)("/3c183940-0c0e-11ee-bd0e-0242c7a41fd4.jpg"),alt:"TestCloud Tunnel solution diagram"}),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The tunnel client program needs to be installed on the user's machine that has access to their private network. After starting, the tunnel client does two things:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"},"Spin up a fresh virtual machine (VM) that is used only for testing."),(0,s.kt)("li",{className:"li"},"Connect you to the TestCloud Tunnel server.")),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"By default, the tunnel is closed after 30 minutes if there is no request or traffic (i.e. the tunnel is idle for 30 minutes). Consequently, the VM is shut down."),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The tunnel solution uses HTTPS and QUIC protocols. See: ",(0,s.kt)("a",{className:"xref",href:"/docs/execute/test-execution-with-testcloud/testcloud-tunnel#concept-1434__section-whitelist-testcloud-domains"},"Network configurations"),"."),(0,s.kt)("h2",{id:"configure-testcloud-tunnel"},(0,s.kt)("a",{id:"id_2",class:"anchor_top_offset"}),"Configure TestCloud Tunnel"),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"TestCloud Tunnel can be configured to be used with Katalon TestOps or Katalon Studio. See: ",(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("a",{className:"xref",href:"/docs/execute/test-execution-with-testcloud/run-tests-in-private-domains-with-testcloud"},"Run tests in private domains with TestCloud")),(0,s.kt)("li",{className:"li"},(0,s.kt)("a",{className:"xref",href:"/docs/execute/test-execution-with-testcloud/use-testcloud-in-katalon-studio"},"Use TestCloud in Katalon Studio")))," "),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The tunnel-sharing feature is only available in TestOps. The tunnel created in Studio is separate from the one created in TestOps. You cannot use tunnels from TestOps and Studio interchangeably."),(0,s.kt)("h2",{id:"testcloud-tunnel-usage-recommendations"},(0,s.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"TestCloud Tunnel usage recommendations"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"We recommend the following practices to optimize your tunnel usage:"),(0,s.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,s.kt)("li",{className:"li"}," Use a single tunnel or tunnel pool for each test suite or build, then tear it down at the end of your test."),(0,s.kt)("li",{className:"li"},"Launch the tunnel client before the test suite is triggered, then shut the tunnel client down once the test suite is finished. "),(0,s.kt)("li",{className:"li"}," Use a machine with stable internet connection and large bandwidth to connect the tunnel client. This is to prevent test failure. "),(0,s.kt)("li",{className:"li"}," Use a machine with high specs (e.g., RAM, CPU) when you run many concurrent tests. "),(0,s.kt)("li",{className:"li"}," Run one tunnel client on one machine to avoid timeout and bandwidth issues that could cause test failure. "),(0,s.kt)("li",{className:"li"}," To save your machine's bandwidth and resources, you can quickly close the tunnel using the shortcut Ctrl+C in the command-line interface (CLI) after you finish running tests. ")),(0,s.kt)("h2",{id:"reuse-your-testcloud-tunnel-configuration-in-a-new-machine"},(0,s.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Reuse your TestCloud Tunnel configuration in a new machine"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In the case that you encounter a test failure and decide to   change your machine, first copy the current tunnel configuration to   a new machine. Then delete the ",(0,s.kt)("code",{className:"ph codeph"},"client_id")," in the   command-line interface. You can then run the tests on the new   machine."),(0,s.kt)("h2",{id:"network-configurations-for-testcloud-tunnel"},(0,s.kt)("a",{id:"concept-1434",class:"anchor_top_offset"}),"Network configurations for TestCloud Tunnel"),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"If you have any trouble with the tunnel client connectivity, you can start the client in debug mode with verbose flag:",(0,s.kt)("pre",{className:"pre codeblock"},(0,s.kt)("code",null,"./kt start -vvv"))),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"With this flag, the client displays logs for troubleshooting."),(0,s.kt)("h3",{id:"configure-proxy-settings"},"Configure proxy settings"),(0,s.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"When you configure TestCloud Tunnel with the ",(0,s.kt)("code",{className:"ph codeph"},"/kt config")," command, the client produces the ",(0,s.kt)("span",{className:"ph"},"tunnelconfig")," file that stores settings information."),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"If you are running the tunnel client behinds an HTTP/HTTPS proxy, make sure you add the proxy settings to the ",(0,s.kt)("span",{className:"ph"},"tunnelconfig")," file. The required proxy variables are:",(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("code",{className:"ph codeph"},"proxy_host"),", ",(0,s.kt)("code",{className:"ph codeph"},"proxy_port"),": Proxy address and port, e.g. localhost:9070."),(0,s.kt)("li",{className:"li"},(0,s.kt)("code",{className:"ph codeph"},"proxy_username"),", ",(0,s.kt)("code",{className:"ph codeph"},"proxy_password"),": Username and password."))),(0,s.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,s.kt)("code",null,"allow_hosts = []","\n",'api_key = "54316023-e777-436a-xxxx-xxxxxxxxxxxx"',"\n",'group = "0027a725-xxx-4d92-xxx-1e6534d7acd9"',"\n","inactive_tunnel_timeout = 0","\n","organization_id = 704xxx","\n","private_tunnel = false","\n",'proxy_host = ""',"\n",'proxy_password = ""',"\n",'proxy_port = ""',"\n",'proxy_username = ""',"\n","retry = 3","\n",'server = "https://tunnel-manager.katalon.com"',"\n","team_id = 644xxx","\n",'tenant = "TestOps"',"\n",'username = "john.doe@katalon.com"')),(0,s.kt)("h3",{id:"whitelist-testcloud-domains"},(0,s.kt)("a",{id:"concept-1434__section-whitelist-testcloud-domains",class:"anchor_top_offset"}),"Whitelist TestCloud domains"),(0,s.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In case you cannot connect to TestCloud Tunnel when execute tests in private site, you might need to ask your network administrator to whitelist TestCloud domains. ",(0,s.kt)("table",{className:"table anchor_top_offset",id:"concept-1434__6ed3ce4a-3d6f-4385-a9d2-d354b5c95604"},(0,s.kt)("caption",null),(0,s.kt)("colgroup",null,(0,s.kt)("col",{style:{width:"50%"}}),(0,s.kt)("col",{style:{width:"50%"}})),(0,s.kt)("thead",{className:"thead"},(0,s.kt)("tr",{className:!0},(0,s.kt)("th",{className:"entry anchor_top_offset",id:"concept-1434__6ed3ce4a-3d6f-4385-a9d2-d354b5c95604__entry__1"},"Domain"),(0,s.kt)("th",{className:"entry anchor_top_offset",id:"concept-1434__6ed3ce4a-3d6f-4385-a9d2-d354b5c95604__entry__2"},"Description"))),(0,s.kt)("tbody",{className:"tbody"},(0,s.kt)("tr",{className:!0},(0,s.kt)("td",{className:"entry",headers:"concept-1434__6ed3ce4a-3d6f-4385-a9d2-d354b5c95604__entry__1 concept-1434__6ed3ce4a-3d6f-4385-a9d2-d354b5c95604__entry__2 "},(0,s.kt)("ul",{className:"ul"},(0,s.kt)("li",{className:"li"},(0,s.kt)("code",{className:"ph codeph"},"tunnel-manager.katalon.com:443"),"(HTTPS)"),(0,s.kt)("li",{className:"li"},(0,s.kt)("code",{className:"ph codeph"},"tunnel-proxy-1.katalon.com:2345")," (QUIC)"),(0,s.kt)("li",{className:"li"},(0,s.kt)("code",{className:"ph codeph"},"tunnel-proxy-2.katalon.com:2345")," (QUIC)"))),(0,s.kt)("td",{className:"entry",headers:"concept-1434__6ed3ce4a-3d6f-4385-a9d2-d354b5c95604__entry__1 concept-1434__6ed3ce4a-3d6f-4385-a9d2-d354b5c95604__entry__2 "},"You need to whitelist these domains to use TestCloud Tunnel.")))),"See also: ",(0,s.kt)("a",{className:"xref",href:"/docs/administer/troubleshooting/troubleshooting-activation-problem/network-security-errors"},"Network security errors"),"."))}h.isMDXComponent=!0}}]);