(self.webpackChunk_kne_components_search_input=self.webpackChunk_kne_components_search_input||[]).push([[414],{5764:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5764,e.exports=t},9666:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(3348),a=n(5199);n(2241);const o={name:"search-input",summary:'<h1>search-input</h1>\n<h3>\u63cf\u8ff0</h3>\n<p>\u8f93\u5165\u5173\u952e\u5b57\u540e\u6267\u884c\u641c\u7d22</p>\n<h3>\u5b89\u88c5</h3>\n<pre><code class="language-shell">npm i --save @kne/search-input\n</code></pre>',description:"\u8f93\u5165\u5173\u952e\u5b57\u540e\u6267\u884c\u641c\u7d22",packageName:"@kne/search-input",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"search_input_afa8b",style:".search_input_afa8b .ant-card {\n  border-color: black;\n  text-align: center;\n  width: 200px;\n}",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: SearchInput } = _SearchInput;\nconst { Flex } = antd;\n\nconst BaseExample = () => {\n  return <Flex vertical gap={8}>\n    <SearchInput />\n    <SearchInput simple />\n    <SearchInput showSearchButton />\n  </Flex>;\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_SearchInput",packageName:"@kne/current-lib_search-input",importStatement:'import * as _SearchInput from "@kne/search-input"',component:r},{name:"antd",packageName:"antd",component:a}]}]}}},1448:(e,t,n)=>{"use strict";var r=n(4922),a=n.n(r),o=n(7558),s=n(5199),c=n(9946),p=n.n(c),l=n(3050),d=n(1488),i=n.n(d),m=n(9261);window.PUBLIC_URL="/search-input";const u={remote:"components-core",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.10"};(0,l.preset)({remotes:{default:u,"components-core":u,"components-iconfont":{remote:"components-iconfont",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.3"}}});const h=(()=>{const e=p().create({validateStatus:function(){return!0}});return t=>t.hasOwnProperty("loader")&&"function"===typeof t.loader?Promise.resolve(t.loader(i()(t,["loader"]))).then((e=>({data:{code:0,data:e}}))).catch((e=>(s.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:e.message}}))):e(t)})();(0,o.preset)({ajax:h,loading:(0,m.jsx)(s.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,m.jsx)(s.Empty,{}),transformResponse:e=>{const{data:t}=e;return e.data={code:0===t.code?200:t.code,msg:t.msg,results:t.data},e}});var f=n(5457),k=n(4679),g=n(4152),x=n.n(g),_=(n(1296),n(6446));const y=x().ExampleRoutes,b=e=>{let{preset:t,themeToken:n,...r}=e;return(0,m.jsx)(k.HashRouter,{children:(0,m.jsx)(y,{...r,paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:t,themeToken:n,readme:_.default,pageProps:{menu:null}})})};f.createRoot(document.getElementById("root")).render((0,m.jsx)(a().StrictMode,{children:(0,m.jsx)(b,{preset:{ajax:h},themeToken:{colorPrimary:"#4F185A"}})}))},2241:()=>{}}]);
//# sourceMappingURL=414.413b92fe.chunk.js.map