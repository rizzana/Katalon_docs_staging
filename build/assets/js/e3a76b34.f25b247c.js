"use strict";(self.webpackChunkKatalon_Docs=self.webpackChunkKatalon_Docs||[]).push([[88096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(44996);const s={id:"9053fda0-22b2-11ed-9930-0242fe3e4a3f",title:"Handling Databases in Katalon Studio",slug:"create-tests/keywords/custom-keywords/handling-databases-in-katalon-studio",hide_title:!0},i='<a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Handling Databases in <span xmlns="http://www.w3.org/1999/xhtml" className="ph">Katalon Studio</span>',c={unversionedId:"9053fda0-22b2-11ed-9930-0242fe3e4a3f",id:"9053fda0-22b2-11ed-9930-0242fe3e4a3f",title:"Handling Databases in Katalon Studio",description:"With custom keywords, you can connect to a database as well as   perform other data queries.",source:"@site/docs/9053fda0-22b2-11ed-9930-0242fe3e4a3f.md",sourceDirName:".",slug:"/create-tests/keywords/custom-keywords/handling-databases-in-katalon-studio",permalink:"/docs/create-tests/keywords/custom-keywords/handling-databases-in-katalon-studio",draft:!1,tags:[],version:"current",frontMatter:{id:"9053fda0-22b2-11ed-9930-0242fe3e4a3f",title:"Handling Databases in Katalon Studio",slug:"create-tests/keywords/custom-keywords/handling-databases-in-katalon-studio",hide_title:!0},sidebar:"aSidebar",previous:{title:"Mark test's status for a Custom Keyword in Katalon Studio",permalink:"/docs/create-tests/keywords/custom-keywords/mark-tests-status-for-a-custom-keyword-in-katalon-studio"},next:{title:"Build custom keywords with Settings in Katalon Studio",permalink:"/docs/create-tests/keywords/custom-keywords/build-custom-keywords-with-settings-in-katalon-studio"}},l={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handling-databases-in-katalon-studio"},(0,o.kt)("a",{id:"id",class:"anchor_top_offset"}),(0,o.kt)("a",{id:"ariaid-title1",class:"anchor_top_offset"}),"Handling Databases in ",(0,o.kt)("span",{xmlns:"http://www.w3.org/1999/xhtml",className:"ph"},"Katalon Studio")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"With custom keywords, you can connect to a database as well as   perform other data queries. "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"Below is a sample demonstrating how to create custom keywords   for:"),(0,o.kt)("ul",{xmlns:"http://www.w3.org/1999/xhtml",className:"ul"},(0,o.kt)("li",{className:"li"},"Establishing database connection"),(0,o.kt)("li",{className:"li"},"Executing data query"),(0,o.kt)("li",{className:"li"},"Closing the connection")),(0,o.kt)("pre",{xmlns:"http://www.w3.org/1999/xhtml",className:"pre codeblock"},(0,o.kt)("code",null,"private static Connection connection = null;","\n","\n","    ","/**","\n","     ","* Open and return a connection to database","\n","     ","* @param dataFile absolute file path","  ","\n","     ","* @return an instance of java.sql.Connection","\n","     ","*/","\n","    ","@Keyword","\n","    ","def connectDB(String dataFile)","{","\n","        ","//Load driver class for your specific database type","\n","        ",'Class.forName("org.sqlite.JDBC")',"\n","        ",'String connectionString = "jdbc:sqlite:" + dataFile',"\n","        ","if(connection != null && !connection.isClosed())","{","\n","            ","connection.close()","\n","        ","}","\n","        ","connection = DriverManager.getConnection(connectionString)","\n","        ","return connection","\n","    ","}","\n","\n","    ","/**","\n","     ","* execute a SQL query on database","\n","     ","* @param queryString SQL query string","\n","     ","* @return a reference to returned data collection, an instance of java.sql.ResultSet","\n","     ","*/","\n","    ","@Keyword","\n","    ","def executeQuery(String queryString) ","{","\n","        ","Statement stm = connection.createStatement()","\n","        ","ResultSet rs = stm.executeQuery(queryString)","                ","\n","        ","return rs","\n","    ","}","\n","\n","    ","@Keyword","\n","    ","def closeDatabaseConnection() ","{","\n","        ","if(connection != null && !connection.isClosed())","{","\n","            ","connection.close()","\n","        ","}","\n","        ","connection = null","\n","    ","}","\n","\n","    ","/**","\n","     ","* Execute non-query (usually INSERT/UPDATE/DELETE/COUNT/SUM...) on database","    ","\n","     ","* @param queryString a SQL statement","\n","     ","* @return single value result of SQL statement","\n","     ","*/","\n","    ","@Keyword","\n","    ","def execute(String queryString) ","{","\n","        ","Statement stm = connection.createStatement()","\n","        ","boolean result = stm.execute(queryString)","\n","        ","return result","\n","    ","}","\n")),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"You can add the sample code above to your keyword file and   modify the details as appropriated. "),(0,o.kt)("p",{xmlns:"http://www.w3.org/1999/xhtml",className:"p"},"   ",(0,o.kt)("img",{className:"image",src:(0,r.Z)("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/handling-databases/image2017-2-24-113A383A14.png"),width:600}),(0,o.kt)("br",null),(0,o.kt)("br",null)," "))}m.isMDXComponent=!0}}]);