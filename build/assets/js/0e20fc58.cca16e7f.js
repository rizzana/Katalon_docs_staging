"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[36532],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>h});var a=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,a,i=function(e,t){if(null==e)return{};var s,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var r=a.createContext({}),c=function(e){var t=a.useContext(r),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var s=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(s),h=i,d=u["".concat(r,".").concat(h)]||u[h]||m[h]||n;return s?a.createElement(d,o(o({ref:t},p),{},{components:s})):a.createElement(d,o({ref:t},p))}));function h(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=s.length,o=new Array(n);o[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=s[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}u.displayName="MDXCreateElement"},33719:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=s(87462),i=(s(67294),s(3905)),n=s(44996);const o={id:"8e9dc220-22b2-11ed-9930-0242fe3e4a3f",title:"Visual Testing overview",slug:"analyze/analytics/visual-testing/visual-testing-overview",hide_title:!0},l='<a id="id_visual-testing-overview" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Visual Testing overview',r={unversionedId:"8e9dc220-22b2-11ed-9930-0242fe3e4a3f",id:"8e9dc220-22b2-11ed-9930-0242fe3e4a3f",title:"Visual Testing overview",description:"What is Visual Testing?",source:"@site/docs/8e9dc220-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/analyze/analytics/visual-testing/visual-testing-overview",permalink:"/docs/analyze/analytics/visual-testing/visual-testing-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"8e9dc220-22b2-11ed-9930-0242fe3e4a3f",title:"Visual Testing overview",slug:"analyze/analytics/visual-testing/visual-testing-overview",hide_title:!0},sidebar:"aSidebar",previous:{title:"Defects Report",permalink:"/docs/analyze/analytics/defects-report"},next:{title:"Use TestOps Visual Testing",permalink:"/docs/analyze/analytics/visual-testing/use-testops-visual-testing"}},c={},p=[{value:"What is Visual Testing?",id:"what-is-visual-testing",level:2},{value:"Insights",id:"insights",level:2},{value:'<a id="id_3" class="anchor_top_offset"/>TestOps Visual Testing',id:"testops-visual-testing",level:2},{value:'<a id="id_4" class="anchor_top_offset"/>Pixel-based comparison',id:"pixel-based-comparison",level:3},{value:'<a id="id_5" class="anchor_top_offset"/>Layout-based comparison',id:"layout-based-comparison",level:3},{value:'<a id="id_6" class="anchor_top_offset"/>Content-based comparison',id:"content-based-comparison",level:3}],m={toc:p};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"visual-testing-overview"},(0,i.kt)("a",{id:"id_visual-testing-overview",class:"anchor_top_offset"}),(0,i.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Visual Testing overview"),(0,i.kt)("h2",{id:"what-is-visual-testing"},"What is Visual Testing?"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Visual testing is an automated process that enables user   interface (UI) testing of a web/mobile application to ensure that   the software/application is represented to the end-users in the   exact visual way it is intended to."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"With incorporated artificial intelligence (AI), visual testing   also refers to the AI image comparison, in which you could compare   the visible output (of your tests) against the baseline image using   an AI engine."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Since comparing images manually (using human eyes only) could   still result in human errors, visual testing allows automated image   comparison using AI-powered functions such as pixel-by-pixel   detection, text-change detection, and layout-change detection."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Visual testing helps reduce human errors to a minimum because it   captures even minor differences between two images, which human   eyes might accidentally miss."),(0,i.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},(0,i.kt)("div",{className:"note note note_note"},(0,i.kt)("span",{className:"note__title"},"Note:")," ",(0,i.kt)("ul",{className:"ul"},(0,i.kt)("li",{className:"li"},(0,i.kt)("p",{className:"p"},"A baseline image is a reference image initially configured to compare with other image output from visual testing."))))),(0,i.kt)("h2",{id:"insights"},"Insights"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"If the software has visual issues, functional testing cannot   help since it focuses on the software behaviors only."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For example, automated functional tests cannot detect any change   regarding the layout, colors, fonts, or misplacement of elements on   a website. In such a case, one would need to check for any visual   regressions instead, and the apparent solution is to run visual   testing."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Furthermore, there is an increasing demand for opening/using   software on different platforms. Considering the combination of   different operating systems and browsers when developing a website,   it is also wise to be aware that the website might display   adequately on one browser but improperly on another browser. Hence,   testing a website across various platforms is crucial to check for   any visual defects. Manually doing so would cost tremendous time   and effort, not to mention that the human eyes might still miss one   or two minor visual bugs if checking complex layouts."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Running visual tests spots visual bugs faster and more   effectively, and it makes sure those bugs cannot slip into   production. Consequently, visual testing helps boost productivity,   increase product confidence, and optimize user experiences."),(0,i.kt)("h2",{id:"testops-visual-testing"},(0,i.kt)("a",{id:"id_3",class:"anchor_top_offset"}),"TestOps Visual Testing"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Katalon TestOps offers visual testing with three image   comparison methods: pixel-based, layout-based, and content-based   comparison. Since AI powers the layout-based and content-based   methods, TestOps Visual Testing could become an integral part of   your visual testing infrastructure."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"To learn more about TestOps Visual Testing features and plans, you can refer to this document: ",(0,i.kt)("a",{className:"xref",href:"#"},"Content-based comparison"),"."),(0,i.kt)("h3",{id:"pixel-based-comparison"},(0,i.kt)("a",{id:"id_4",class:"anchor_top_offset"}),"Pixel-based comparison"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This method compares the pixel resolution of two images to   figure out the pixel-by-pixel differences between them.",(0,i.kt)("img",{className:"image",src:(0,n.Z)("/8e99ca80-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"visual-testing-pixel-comparison"})),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"The advantage of this method is that it is a popular function   and easy to understand and implement. This method identifies pixel   differences and picks up minor changes that could be trivial or   ignorable to the human eyes."),(0,i.kt)("h3",{id:"layout-based-comparison"},(0,i.kt)("a",{id:"id_5",class:"anchor_top_offset"}),"Layout-based comparison"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This method identifies and maps the similar zones between the   baseline and checkpoint images, highlighting the layout differences   between the two images."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,i.kt)("img",{className:"image",src:(0,n.Z)("/8e98e020-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"visual-testing-layout-based-comparison"})),(0,i.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,i.kt)("span",{className:"note__title"},"Note:"),(0,i.kt)("ul",{className:"ul"},(0,i.kt)("li",{className:"li"},(0,i.kt)("p",{className:"p"},"The AI engine will identify the zones on the images.")))),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In Katalon TestOps, the zones are categorized into 3 types:"),(0,i.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,i.kt)("li",{className:"li"},"Identical (green border): shows UI zones identically rendered     in both images."),(0,i.kt)("li",{className:"li"},"Distinguishable (red border): shows UI zones that look     identical for the most parts but have some recognizable     distinctions."),(0,i.kt)("li",{className:"li"},"Missing/New (pink border): shows UI zones that exist in one     image but not in the other.")),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This method is helpful to review changes identified by the   pixel-based comparison, and it spots the changes in layout, color,   font, and element location."),(0,i.kt)("h3",{id:"content-based-comparison"},(0,i.kt)("a",{id:"id_6",class:"anchor_top_offset"}),"Content-based comparison"),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This method identifies the text content differences between two   images."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,i.kt)("img",{className:"image",src:(0,n.Z)("/8e9a8dd0-22b2-11ed-9930-0242fe3e4a3f.png"),alt:"visual-testing-text-content-comparison"}),"           "),(0,i.kt)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"note note note_note"},(0,i.kt)("span",{className:"note__title"},"Note:"),(0,i.kt)("ul",{className:"ul"},(0,i.kt)("li",{className:"li"},(0,i.kt)("p",{className:"p"},"The AI engine will identify the zones on the images.")))),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"In Katalon TestOps, the zones are categorized into 3 types:"),(0,i.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,i.kt)("li",{className:"li"},"Identical (green border): shows text-look-like zones     identically rendered in both images."),(0,i.kt)("li",{className:"li"},"Shifted (blue border): shows text-look-like zones with     identical but shifted positions."),(0,i.kt)("li",{className:"li"},"Missing/New (pink border): shows text-look-like zones in one     image but not in the other.")),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"This method is useful when there is a lot of text content on the   pages. It helps users review and prioritize which text changes are   critical and need immediate attention."),(0,i.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"For step-by-step instructions to use visual testing in Katalon   TestOps, see ",(0,i.kt)("a",{className:"xref",href:"/docs/analyze/analytics/visual-testing/use-testops-visual-testing#task-1734"},"Use     TestOps Visual Testing"),"."))}u.isMDXComponent=!0}}]);