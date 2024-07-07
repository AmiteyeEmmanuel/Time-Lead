/*! For license information please see 6.c59e009f.chunk.js.LICENSE.txt */
(this["webpackJsonptech-time"]=this["webpackJsonptech-time"]||[]).push([[6],{246:function(a,e,t){"use strict";t.r(e);var n=t(0),s=t.n(n),r=(t(61),t(68)),l=(t(82),t(97),t(92),t(60)),o=t(63),i=t(69),c=t(94),m=t(23),u=(t(93),t(16)),d=t(24),b=["","residential","industrial","commercial"];var p=a=>{let{cb:e}=a;const[t,r]=Object(n.useState)(!1),[l,o]=Object(n.useState)(!1),[i,c]=Object(n.useState)(0),[p,g]=Object(n.useState)(0),[f,h]=Object(n.useState)("");function v(){r(!1)}Object(n.useEffect)(()=>{(async()=>{o(!0),await u.a.get("/donations?pagination[pageSize]=1000&fields[0]=amount&fields[1]=is_verified").then(a=>{const e=a.data.data.filter(a=>a.attributes.is_verified),t=(a.data.data.filter(a=>!a.attributes.is_verified),e.reduce((function(a,e){return a+Number(e.attributes.amount)}),0));g(t)}).catch(a=>console.log(a)).finally(()=>o(!1))})()},[t]);const w=async()=>{o(!0),await u.a.post("/investments",{data:{type:f,amount:i}}).then(a=>(d.b.success("Investment made successfully"),e(),setTimeout(v,1e3),a.data)).catch(a=>console.log(a)).finally(()=>o(!1))};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(m.Button,{onClick:function(){r(!0)}},"Invest")),s.a.createElement(m.Modal,{isOpen:t,onClose:v},s.a.createElement(m.ModalHeader,null,"Make an investment"),s.a.createElement(m.ModalBody,null,"Please specify the amount to be invested and the type of investment",s.a.createElement(m.Label,{className:"mt-4"},s.a.createElement("span",null,"Amount"),s.a.createElement(m.Input,{className:"mt-1",type:"number",onChange:a=>c(a.target.value),name:"amount",placeholder:"$100"})),s.a.createElement(m.Label,{className:"mt-4"},s.a.createElement("span",null,"Type"),s.a.createElement(m.Select,{value:f,onChange:a=>h(a.target.value),name:"country",className:"mt-1 p-2 border rounded-sm"},b.map(a=>s.a.createElement("option",{value:a},a)))),i&&f?s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{className:" text-sm mt-4 "},"Earn up to"),s.a.createElement("p",{className:" text-lg mt-2 font-bold"}," $","residential"==f?(.07*i).toFixed(2):"commercial"==f?(.09*i).toFixed(2):(.05*i).toFixed(2)," "),s.a.createElement("p",{className:" text-sm mt-1 "},"Interest weekly")):null,f?s.a.createElement("p",{className:"font-semibold mt-4"},"Get up to ","residential"==f?"7%":"commercial"==f?"9%":"5%"," with ",f," investments"):null),s.a.createElement(m.ModalFooter,null,s.a.createElement("div",null,s.a.createElement("div",{className:"flex justify-end  gap-4 w-full"},s.a.createElement("div",{className:"hidden sm:block"},s.a.createElement(m.Button,{layout:"outline",onClick:v},"Cancel")),s.a.createElement("div",{className:"hidden sm:block"},s.a.createElement(m.Button,{disabled:!i||i>p||!f||l,onClick:w},l?"Loading":"Confirm payment"))),i>p?s.a.createElement("p",{className:"text-sm text-red-600 text-center "},"Amount to be invested is greater than your current balance, please top up or reduce amount to be invested"):null),s.a.createElement("div",{className:"block w-full sm:hidden"},s.a.createElement(m.Button,{block:!0,size:"large",layout:"outline",onClick:v},"Cancel")),s.a.createElement("div",{className:"block w-full sm:hidden"},s.a.createElement(m.Button,{disabled:!i||i>p||!f||l,onClick:w,block:!0,size:"large"},l?"Loading":"Confirm Investment"),i>p?s.a.createElement("p",{className:"text-sm text-center text-red-600"},"Amount to be invested is greater than your current balance, please top up or reduce amount to be invested"):null))))};var g=()=>s.a.createElement("span",{className:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-white bg-custom-red-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"},s.a.createElement("div",{className:"flex items-center"},s.a.createElement("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})),s.a.createElement("span",null,"Please note that your purchase will be deducted from your main balance"))),f=["","residential","industrial","commercial"];var h=a=>{let{cb:e,totalWithdraw:t}=a;const[r,l]=Object(n.useState)(!1),[o,i]=Object(n.useState)(!1),[c,b]=Object(n.useState)(0),[p,g]=Object(n.useState)("");function h(){l(!1)}const v=async()=>{i(!0),await u.a.post("/collection/investments",{data:{type:p}}).then(a=>(e(),d.b.success("Withdrawal processed successfully"),setTimeout(h,1e3),a.data)).catch(a=>console.log(a)).finally(()=>i(!1))};return s.a.createElement("div",null," ",s.a.createElement("div",null,s.a.createElement(m.Button,{disabled:!t,onClick:function(){l(!0)}},"Withdraw Investments")),s.a.createElement(m.Modal,{isOpen:r,onClose:h},s.a.createElement(m.ModalHeader,null,"Withdraw"),s.a.createElement(m.ModalBody,null,s.a.createElement(m.Label,{className:"mt-4"},s.a.createElement("span",null,"Choose investment type"),s.a.createElement(m.Select,{placeholder:"Select mode of payment",onChange:a=>g(a.target.value),className:"mt-1 border rounded-sm"},f.map(a=>s.a.createElement("option",{value:a},a)))),s.a.createElement("span",{className:"text-sm text-center text-red-600 mt-4"},"Withdrawal amount is limited to your balance amount")),s.a.createElement(m.ModalFooter,null,s.a.createElement("div",{className:"hidden sm:block"},s.a.createElement(m.Button,{layout:"outline",onClick:h},"Cancel")),s.a.createElement("div",{className:"hidden sm:block"},s.a.createElement(m.Button,{disabled:!p||o,onClick:v},o?"Loading":"Confirm Withdrawal")),s.a.createElement("div",{className:"block w-full sm:hidden"},s.a.createElement(m.Button,{block:!0,size:"large",layout:"outline",onClick:h},"Cancel")),s.a.createElement("div",{className:"block w-full sm:hidden"},s.a.createElement(m.Button,{disabled:!p||o,onClick:v,block:!0,size:"large"},o?"Loading":"Confirm Withdrawal")))))};e.default=function(){const[a,e]=Object(n.useState)(1),[t,b]=Object(n.useState)([]),[f,v]=Object(n.useState)(0),[w,y]=Object(n.useState)([]),[j,E]=Object(n.useState)(0),[T,S]=Object(n.useState)(0),[C,M]=Object(n.useState)(0),[B,x]=Object(n.useState)(0),[k,N]=Object(n.useState)(0),[G,z]=Object(n.useState)({profit:0});c.a.length;const F=async()=>{y(!0),await u.a.get("/investments").then(a=>{b(a.data.data),E(a.data.meta.pagination.total)}).catch(a=>console.log(a)).finally(()=>y(!1))};Object(n.useEffect)(()=>{F()},[]);const O=async()=>{await u.a.get("/users/me").then(a=>(z(a.data),x(a.data.residential_investment),M(a.data.commercial_investment),N(a.data.industriaI_investment),a)).catch(a=>{console.log(a)})};return Object(n.useEffect)(()=>{O()},[]),Object(n.useEffect)(()=>{j&&O()},[j]),s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,null,"INVESTMENT"),s.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},s.a.createElement(r.a,{title:"Total Investment profit",value:(null===G||void 0===G?void 0:G.profit)?"$".concat(G.profit):"$".concat(0)},s.a.createElement(i.a,{icon:o.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})),s.a.createElement(r.a,{title:"Residential investments",value:"$"+B},s.a.createElement(i.a,{icon:o.MoneyIcon,iconColorClass:"text-green-500 dark:text-green-100",bgColorClass:"bg-green-100 dark:bg-green-500",className:"mr-4"})),s.a.createElement(r.a,{title:"Commercial investments",value:"$"+C},s.a.createElement(i.a,{icon:o.CartIcon,iconColorClass:"text-blue-500 dark:text-blue-100",bgColorClass:"bg-blue-100 dark:bg-blue-500",className:"mr-4"})),s.a.createElement(r.a,{title:"Industrial investments",value:"$"+k},s.a.createElement(i.a,{icon:o.ChatIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4"}))),s.a.createElement(g,null),s.a.createElement("div",{className:"flex gap-3 justify-between"},s.a.createElement(p,{cb:()=>F()}),s.a.createElement("div",null,s.a.createElement("div",{className:"flex gap-3"},s.a.createElement(m.Button,{disabled:!G.profit,onClick:async()=>{await u.a.post("/collection").then(a=>(console.log(a),d.b.success("Withdrawal processed successfully"),a)).catch(a=>{console.log(a)})}},"Withdraw profit"),s.a.createElement(h,{totalWithdraw:Number(B)+Number(C)+Number(k),cb:O})))),s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Amount"),s.a.createElement(m.TableCell,null,"Type"),s.a.createElement(m.TableCell,null,"Date"))),s.a.createElement(m.TableBody,null,t.map((a,e)=>s.a.createElement(m.TableRow,{key:e},s.a.createElement(m.TableCell,null,s.a.createElement("span",{className:"text-sm"},"$ ",a.attributes.amount)),s.a.createElement(m.TableCell,null,s.a.createElement("span",{className:"text-sm"}," ",a.attributes.type)),s.a.createElement(m.TableCell,null,s.a.createElement("span",{className:"text-sm"},new Date(a.attributes.publishedAt).toLocaleDateString()))))))))}},60:function(a,e,t){"use strict";var n=t(0),s=t.n(n);e.a=function(a){let{children:e}=a;return s.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},e)}},61:function(a,e,t){"use strict";var n=t(0),s=t.n(n);e.a=function(){return s.a.createElement("span",{className:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-white bg-custom-red-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"},s.a.createElement("div",{className:"flex items-center"},s.a.createElement("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})),s.a.createElement("span",null,"Welcome to your TechTime dashboard")))}},68:function(a,e,t){"use strict";var n=t(0),s=t.n(n),r=t(23);e.a=function(a){let{title:e,value:t,children:n}=a;return s.a.createElement(r.Card,null,s.a.createElement(r.CardBody,{className:"flex items-center"},n,s.a.createElement("div",null,s.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},e),s.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))))}},69:function(a,e,t){"use strict";var n=t(0),s=t.n(n),r=t(70),l=t.n(r);e.a=function(a){let{icon:e,iconColorClass:t="text-purple-600 dark:text-purple-100",bgColorClass:n="bg-custom-red-100 dark:bg-custom-red-600",className:r}=a;const o=l()("p-3 rounded-full",t,n,r);return s.a.createElement("div",{className:o},s.a.createElement(e,{className:"w-5 h-5"}))}},70:function(a,e,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var a=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)a.push(n);else if(Array.isArray(n)&&n.length){var l=s.apply(null,n);l&&a.push(l)}else if("object"===r)for(var o in n)t.call(n,o)&&n[o]&&a.push(o)}}return a.join(" ")}a.exports?(s.default=s,a.exports=s):void 0===(n=function(){return s}.apply(e,[]))||(a.exports=n)}()},82:function(a,e,t){"use strict";var n=t(0),s=t.n(n);e.a=function(a){let{children:e,title:t}=a;return s.a.createElement("div",{className:"min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"},s.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},t),e)}},92:function(a,e,t){"use strict";var n=t(0),s=t.n(n);e.a=function(a){let{legends:e}=a;return s.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},e.map(a=>s.a.createElement("div",{className:"flex items-center",key:a.title},s.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(a.color," rounded-full")}),s.a.createElement("span",null,a.title))))}},93:function(a,e,t){"use strict";t.d(e,"c",(function(){return n})),t.d(e,"e",(function(){return s})),t.d(e,"a",(function(){return r})),t.d(e,"d",(function(){return l})),t.d(e,"f",(function(){return o})),t.d(e,"b",(function(){return i}));const n=[{title:"Shirts",color:"bg-blue-500"},{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-custom-red-600"}],s=[{title:"Organic",color:"bg-teal-600"},{title:"Paid",color:"bg-custom-red-600"}],r=[{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-custom-red-600"}],l={data:{datasets:[{data:[33,33,33],backgroundColor:["#0694a2","#1c64f2","#7e3af2"],label:"Dataset 1"}],labels:["Shoes","Shirts","Bags"]},options:{responsive:!0,cutoutPercentage:80},legend:{display:!1}},o={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Organic",backgroundColor:"#0694a2",borderColor:"#0694a2",data:[43,48,40,54,67,73,70],fill:!1},{label:"Paid",fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:[24,50,64,74,52,51,65]}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!1}},i={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Shoes",backgroundColor:"#0694a2",borderWidth:1,data:[-3,14,52,74,33,90,70]},{label:"Bags",backgroundColor:"#7e3af2",borderWidth:1,data:[66,33,43,12,54,62,84]}]},options:{responsive:!0},legend:{display:!1}}},94:function(a,e,t){"use strict";e.a=[{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg",name:"Chandler Jacobi",job:"Direct Security Executive",amount:989.4,status:"primary",date:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg",name:"Monserrat Marquardt",job:"Forward Accountability Producer",amount:471.44,status:"danger",date:"Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg",name:"Lonie Wyman",job:"Legacy Program Director",amount:934.24,status:"success",date:"Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",name:"Corine Abernathy",job:"Chief Factors Planner",amount:351.28,status:"warning",date:"Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/operatino/128.jpg",name:"Lorenz Botsford",job:"Central Accountability Developer",amount:355.3,status:"neutral",date:"Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/akmur/128.jpg",name:"Everette Botsford",job:"Product Group Architect",amount:525.42,status:"success",date:"Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg",name:"Marilou Beahan",job:"Future Security Planner",amount:414.99,status:"success",date:"Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg",name:"Ceasar Sauer",job:"Direct Brand Specialist",amount:488,status:"primary",date:"Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg",name:"Rae McDermott",job:"Lead Branding Engineer",amount:502.69,status:"danger",date:"Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg",name:"Mable Steuber",job:"National Group Executive",amount:911.09,status:"danger",date:"Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg",name:"Julian Glover",job:"Global Branding Assistant",amount:656.94,status:"danger",date:"Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",name:"Duncan Toy",job:"Central Intranet Manager",amount:120.78,status:"danger",date:"Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",name:"Blanche Friesen",job:"Forward Identity Executive",amount:676.95,status:"danger",date:"Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg",name:"Orion Koepp",job:"Global Accountability Strategist",amount:447.56,status:"danger",date:"Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",name:"Dakota Vandervort",job:"Future Assurance Coordinator",amount:765.22,status:"danger",date:"Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/zaki3d/128.jpg",name:"Lily Collier",job:"Forward Configuration Orchestrator",amount:449.11,status:"danger",date:"Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/evanshajed/128.jpg",name:"Kayleigh Schumm",job:"Central Division Agent",amount:65.54,status:"danger",date:"Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",name:"General McGlynn",job:"Central Web Analyst",amount:30.51,status:"danger",date:"Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg",name:"Shayna Schumm",job:"Future Directives Engineer",amount:313.73,status:"danger",date:"Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",name:"Giovanna Sanford",job:"Dynamic Interactions Executive",amount:398.3,status:"danger",date:"Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",name:"Emie Mante",job:"Direct Factors Supervisor",amount:142.51,status:"danger",date:"Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",name:"Chance Muller",job:"Lead Usability Planner",amount:963.26,status:"danger",date:"Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",name:"Armani Torphy",job:"Forward Functionality Analyst",amount:445.23,status:"danger",date:"Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",name:"Braeden Ward",job:"Central Integration Director",amount:588.53,status:"danger",date:"Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg",name:"Malcolm Price",job:"District Program Planner",amount:181.93,status:"danger",date:"Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",name:"Susan Jast",job:"Future Paradigm Associate",amount:928.41,status:"danger",date:"Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",name:"Torrey Reynolds",job:"Lead Security Agent",amount:447.37,status:"danger",date:"Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",name:"Travon Harber",job:"Legacy Marketing Facilitator",amount:422.48,status:"danger",date:"Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",name:"Hattie Gutkowski",job:"Chief Configuration Supervisor",amount:714.34,status:"danger",date:"Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg",name:"Demarco Lang",job:"Investor Program Designer",amount:536.92,status:"danger",date:"Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg",name:"Glennie Ziemann",job:"Dynamic Interactions Analyst",amount:597.25,status:"danger",date:"Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg",name:"Alta Howe",job:"District Intranet Executive",amount:42.28,status:"danger",date:"Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/victordeanda/128.jpg",name:"Sydnee Gottlieb",job:"Global Response Specialist",amount:868.92,status:"danger",date:"Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/baumannzone/128.jpg",name:"Arlene Schmitt",job:"Lead Metrics Consultant",amount:364.68,status:"danger",date:"Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",name:"Hilda Schoen",job:"National Solutions Facilitator",amount:260.91,status:"danger",date:"Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",name:"Chase Bahringer",job:"Dynamic Communications Designer",amount:454.61,status:"danger",date:"Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",name:"Lucile Hansen",job:"Customer Usability Facilitator",amount:982.22,status:"danger",date:"Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",name:"Mollie Heaney",job:"Forward Communications Director",amount:390.33,status:"danger",date:"Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",name:"Bennie Kuvalis",job:"Future Factors Agent",amount:456.64,status:"danger",date:"Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",name:"Jodie Luettgen",job:"Customer Implementation Associate",amount:398.37,status:"danger",date:"Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",name:"Bethel Quitzon",job:"Dynamic Web Strategist",amount:183.58,status:"danger",date:"Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",name:"Jon Dietrich",job:"Legacy Creative Planner",amount:439.01,status:"danger",date:"Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg",name:"Nakia Kihn",job:"Central Interactions Coordinator",amount:824.12,status:"danger",date:"Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",name:"Assunta Grady",job:"Investor Operations Specialist",amount:172.97,status:"danger",date:"Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",name:"Lukas Klocko",job:"Human Usability Associate",amount:515.74,status:"danger",date:"Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"}]}}]);
//# sourceMappingURL=6.c59e009f.chunk.js.map