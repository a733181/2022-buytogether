import{r as x,u as w,A as h,e as d,G as y,a as V,c as g,b as a,w as i,B as k,d as s,i as B,a0 as E,h as c,N}from"./index.31fd0c53.js";import{v as f}from"./index.08bf97f8.js";const T={class:"container py-10"},C={class:"flex"},H=s("p",null,"\u2002/\u2002Email\u7DE8\u8F2F",-1),L={class:"lg:w-1/2 mx-auto border-2 px-5 py-10 rounded-lg"},R=["onSubmit"],S={class:"flex mt-8 justify-center gap-5"},j={__name:"EmailInfoView",setup(U){const r=x(!1),n=w(),{editUserHander:p}=n,{users:v}=h(n),t=d({email:v.value.email||""}),e=d({error:!1,value:""}),_=()=>f.isEmpty(t.email)?(e.value="\u70BA\u5FC5\u586B",e.error=!0,!0):(f.isEmail(t.email)||(e.value="\u683C\u5F0F\u932F\u8AA4",e.error=!0),!1),b=async()=>{if(_())return;r.value=!0;const l=new FormData;l.append("email",t.email),await p(l),r.value=!1};return(l,o)=>{const u=y("RouterLink");return V(),g("div",T,[a(k,{class:"mb-10"},{default:i(()=>[s("div",C,[a(u,{to:"/member/ship",class:"text-primary font-bold hover:scale-105"},{default:i(()=>[N("\u5E33\u6236")]),_:1}),H])]),_:1}),s("div",L,[s("form",{onSubmit:B(b,["prevent"])},[a(E,{title:"Email",type:"email",class:"mb-8 w-4/5 mx-auto",modelValue:t.email,"onUpdate:modelValue":o[0]||(o[0]=m=>t.email=m),error:e.error,errorText:e.value,onClick:o[1]||(o[1]=m=>e.error=!1)},null,8,["modelValue","error","errorText"]),s("div",S,[a(u,{to:"/member/ship",class:"w-1/4 block"},{default:i(()=>[a(c,{text:"\u53D6\u6D88",className:"btn-outline",class:"w-full"})]),_:1}),a(c,{type:"sumbit",text:"\u78BA\u5B9A",class:"w-1/4",disabled:r.value,loading:r.value},null,8,["disabled","loading"])])],40,R)])])}}};export{j as default};