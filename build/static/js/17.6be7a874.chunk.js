(this["webpackJsonptech-time"]=this["webpackJsonptech-time"]||[]).push([[17],{242:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(60),c=a(62),m=a(23),s=a(16),o=a(24);t.default=()=>{const[e,t]=Object(n.useState)({amount:0,method:"gift card",is_verified:!1,voucher_code:"",voucher_type:""}),[a,i]=Object(n.useState)([]),[u,d]=Object(n.useState)(!1),p=a=>{"method"!=a.target.name?t({...e,[a.target.name]:a.target.value}):t({amount:0,is_verified:!1,voucher_code:"",voucher_type:"",[a.target.name]:a.target.value})};return r.a.createElement("div",null,r.a.createElement(l.a,null,"Add Funds"),r.a.createElement(c.a,null,"Gift Card payments"),r.a.createElement("div",{className:"px-4 py-3 mb-8 bg-white rounded-lg mx-auto shadow-md max-w-3xl dark:bg-gray-800"},"Please specify the amount to be deposited and provide proof of payment if available"," ",e.method?r.a.createElement(r.a.Fragment,null,"gift card"==e.method?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:" text-sm mt-4 text-center"},"Please select your gift card type by clicking one of the cards below"),r.a.createElement("div",{className:"grid grid-cols-3 gap-4 mt-4 "},r.a.createElement("div",{className:"flex justify-center max-h-20 p-4 cursor-pointer \n                        ".concat("play store"==e.voucher_type?"bg-red":""),style:{cursor:"pointer"},onClick:()=>t({...e,voucher_type:"play store"})},r.a.createElement("img",{src:"/img/play-store.jpg",className:"h-full rounded-sm"})),r.a.createElement("div",{className:"flex justify-center max-h-20 p-4 cursor-pointer \n                    ".concat("steam"==e.voucher_type?"bg-red":""),onClick:()=>t({...e,voucher_type:"steam"})},r.a.createElement("img",{src:"/img/steam.png",className:"h-full rounded-sm"})),r.a.createElement("div",{className:"flex justify-center max-h-20 p-4 cursor-pointer \n                    ".concat("american express"==e.voucher_type?"bg-red":""),onClick:()=>t({...e,voucher_type:"american express"})},r.a.createElement("img",{src:"/img/express.png",className:"h-full rounded-sm"})))):null,"gift card"==e.method&&e.voucher_type?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Label,{className:"mt-4"},r.a.createElement("span",null,"Amount"),r.a.createElement(m.Input,{className:"mt-1",type:"number",onChange:p,name:"amount",placeholder:"$100"})),r.a.createElement(m.Label,{className:"mt-4"},r.a.createElement("span",null,"Voucher code"),r.a.createElement(m.Input,{className:"mt-1",type:"text",onChange:p,name:"voucher_code",placeholder:"hajhd-3dqdh-nuj3-ssqu3"})),r.a.createElement("p",{className:" my-4 font-semibold"},"Upload payment proof if available"),r.a.createElement(m.Button,{layout:"outline"},r.a.createElement("input",{type:"file",name:"receipt",className:"",onChange:e=>{i(e.target.files)},multiple:!0}))):null):null,r.a.createElement("div",{className:"block mt-5"},r.a.createElement(m.Button,{disabled:u||!e.voucher_type||!e.voucher_code||!e.amount,onClick:async()=>{d(!0);const t=new FormData;t.append("data",JSON.stringify({...e})),a.length&&Array.from(a).forEach(e=>{t.append("files.receipt",e,e.name)}),await s.a.post("/donations",t).then(e=>(Object(o.b)("Desposit made"),e.data)).catch(e=>console.log(e)).finally(()=>d(!1))}},u?"Loading":"Confirm payment"))))}},60:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){let{children:t}=e;return r.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},62:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){let{children:t}=e;return r.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},t)}}}]);
//# sourceMappingURL=17.6be7a874.chunk.js.map