import{_ as i}from"./edit.0cb17a6d.js";import{_ as p}from"./delete.d6462d7c.js";import{a2 as u,o as s,c as o,b as t,H as h,I as b,t as a,E as r}from"./index.47490af8.js";const k={class:"overflow-auto"},m={class:"w-full lg:w-1/2 lg:mx-auto"},f=t("thead",null,[t("tr",null,[t("th",{class:"border-2 p-2"},"\u4EE3\u865F"),t("th",{class:"border-2 p-2"},"\u5E33\u6236"),t("th",{class:"border-2 p-2"},"\u8A2D\u5B9A")])],-1),g={class:"border-2 p-2 text-center"},x={class:"border-2 p-2 text-center"},v={class:"border-2 p-2"},y={class:"flex gap-4 items-center justify-center flex-col lg:flex-row"},B=["onClick"],w=["onClick"],S={__name:"BankTable",props:{data:{type:Object}},setup(n){const c=u(),{editBankHandler:l,deleteBankHandler:_}=c;return(C,H)=>(s(),o("div",k,[t("table",m,[f,t("tbody",null,[(s(!0),o(h,null,b(n.data,e=>(s(),o("tr",{key:e._id},[t("td",g,a(e.bankName),1),t("td",x,a(e.bankNumber),1),t("td",v,[t("div",y,[t("img",{src:i,class:"w-6 hover:opacity-60",onClick:d=>r(l)(e._id)},null,8,B),t("img",{src:p,class:"w-6 hover:opacity-60",onClick:d=>r(_)(e._id)},null,8,w)])])]))),128))])])]))}};export{S as _};
