import{a2 as _,y as c,u as p,C as f,E as k,o as x,c as B,b as s,a as e,w as l,B as b,F as t,f as h,L as v,t as y}from"./index.de027a5d.js";import{_ as C}from"./BankTable.1d912f36.js";import"./edit.0cb17a6d.js";import"./delete.d6462d7c.js";const w={class:"container py-10"},L={class:"flex justify-between items-center mb-8"},N={class:"flex"},V=s("p",null,"\u2002/\u2002\u5E33\u6236\u5217\u8868",-1),T={__name:"BankListAdminView",setup(A){const a=_(),{addBankHandler:d}=a,{banksAdmin:n}=c(a),{userAdmin:o}=c(p()),u=f(()=>{const r=o.value.list.findIndex(i=>i._id===n.value.user.userId);return o.value.list[r].name});return(r,i)=>{const m=k("RouterLink");return x(),B("div",w,[s("div",L,[e(b,null,{default:l(()=>[s("div",N,[e(m,{to:"/member/shipadmin",class:"text-primary font-bold hover:scale-105"},{default:l(()=>[v("\u6703\u54E1")]),_:1}),V,s("p",null,"\u2002-\u2002"+y(t(u)),1)])]),_:1}),e(h,{text:"\u65B0\u589E\u5E33\u6236",onClick:t(d)},null,8,["onClick"])]),e(C,{data:t(n).user.list},null,8,["data"])])}}};export{T as default};