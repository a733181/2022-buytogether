import{x as f,y as u,r as g,o as r,c as l,a,w as _,B as v,b as s,H as x,I as y,E as w,t as p,f as B}from"./index.47490af8.js";import{u as k,_ as I}from"./TheModel.2f9ecda2.js";import{_ as M}from"./SendProductMessage.5f68dfb8.js";import"./index.d2850135.js";import"./TheTextarea.08e56fbe.js";const S={class:"container py-10"},A=s("p",{class:"text-primary font-bold"},"\u554F\u8207\u7B54",-1),C={class:"overflow-auto"},H={class:"w-full table-auto"},$=s("thead",null,[s("tr",null,[s("th",{class:"border-2 p-2"},"\u5546\u54C1\u5716\u7247"),s("th",{class:"border-2 p-2"},"\u5546\u54C1\u540D\u7A31"),s("th",{class:"border-2 p-2"},"\u5546\u54C1\u554F\u984C"),s("th",{class:"border-2 p-2"},"\u56DE\u8986")])],-1),E={class:"border-2 p-2"},N=["src","alt"],R={class:"border-2 p-2 text-center"},V={class:"border-2 p-2 text-center"},j={class:"border-2 p-2 text-center"},z={__name:"QAandA",setup(D){const c=f(),{replayMessageHandler:i}=c,{messageAllProduct:m}=u(c),{toggleShow:t}=u(k()),n=g(""),h=o=>{n.value=o,t.value=!t.value},b=o=>{t.value=!t.value;const d={reply:o.message,id:n.value};i(d)};return(o,d)=>(r(),l("div",S,[a(v,{class:"mb-10"},{default:_(()=>[A]),_:1}),s("div",C,[s("table",H,[$,s("tbody",null,[(r(!0),l(x,null,y(w(m),e=>(r(),l("tr",{key:e._id},[s("td",E,[s("img",{src:e.prodcutId.image,alt:e.prodcutId.name,class:"w-32 h-24 rounded-lg mx-auto object-cover"},null,8,N)]),s("td",R,[s("p",null,p(e.prodcutId.name),1)]),s("td",V,[s("p",null,p(e.message),1)]),s("td",j,[a(B,{text:"\u56DE\u8986",onClick:F=>h(e._id)},null,8,["onClick"])])]))),128))])])]),a(I,null,{default:_(()=>[a(M,{onMessage:b})]),_:1})]))}};export{z as default};
