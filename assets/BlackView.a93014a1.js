import{u as m,y as h,E as k,o as t,c as a,a as o,w as i,B as f,F as _,I as x,J as y,b as e,L as b,t as B,f as g}from"./index.4b815274.js";const v={class:"container py-10"},L={class:"flex"},w=e("p",null,"\u2002/\u2002\u9ED1\u540D\u55AE",-1),C={key:0,class:"text-2xl flex gap-8 justify-center"},N=e("h1",null,"\u6C92\u6709\u9ED1\u540D\u55AE",-1),V=[N],R={class:"flex items-center gap-4"},j=["src","alt"],T={__name:"BlackView",setup(E){const n=m(),{getBlackListHanlder:c,clickListHandler:u}=n,{blackList:l}=h(n);c();const d=async r=>{await u({id:r,type:"black"}),await c()};return(r,F)=>{const p=k("RouterLink");return t(),a("div",v,[o(f,{class:"mb-10"},{default:i(()=>[e("div",L,[o(p,{to:"/member/ship",class:"text-primary font-bold hover:scale-105"},{default:i(()=>[b("\u5E33\u6236")]),_:1}),w])]),_:1}),_(l).length?(t(!0),a(x,{key:1},y(_(l),s=>(t(),a("ul",{key:s._id},[e("li",R,[e("img",{src:s.image,alt:s.name,class:"w-16 h-16 rounded-full object-cover"},null,8,j),e("p",null,B(s.name),1),o(g,{text:"\u53D6\u6D88\u9ED1\u540D\u55AE",onClick:H=>d(s._id),class:"ml-auto",className:"btn-outline"},null,8,["onClick"])])]))),128)):(t(),a("div",C,V))])}}};export{T as default};