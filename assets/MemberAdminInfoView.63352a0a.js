import{a5 as h,u as y,y as w,r as U,d as u,E as k,o as T,c as B,a as l,w as p,B as C,b as s,g as S,Z as m,f,L as E}from"./index.4b815274.js";import{v}from"./index.ff4e70e5.js";import{U as L}from"./UploadImage.f211b7a2.js";const N={class:"container py-10"},H={class:"flex"},R=s("p",null,"\u2002/\u2002\u7DE8\u8F2F",-1),A={class:"lg:w-1/2 mx-auto border-2 px-5 py-4"},I=s("h2",{class:"mb-8 text-2xl"},"\u4FEE\u6539\u8CC7\u8A0A",-1),$=["onSubmit"],F={class:"flex justify-between mt-8"},Z={__name:"MemberAdminInfoView",setup(M){const c=h(),d=y(),{editAdminUserHander:g}=d,{userAdmin:n}=w(d),i=U(!1),r=u({name:{type:String,error:!1},email:{type:String,error:!1},phone:{type:String,error:!1}}),e=u({_id:n.value.edit._id||"",name:n.value.edit.name||"",image:n.value.edit.image||"",email:n.value.edit.email||"",phone:n.value.edit.phone||""}),x=()=>v.isEmpty(e.name)?(r.name.value="\u70BA\u5FC5\u586B",r.name.error=!0,!0):v.isByteLength(e.name,{max:12})?!1:(r.name.value="\u9577\u5EA6\u5C0F\u65BC 12",r.name.error=!0,!0),b=async()=>{if(x())return;i.value=!0;const t=new FormData;e.image&&e.image!==n.value.edit.image&&e.image.type.startsWith("image/")?(t.append("id",e._id),t.append("name",e.name),t.append("image",e.image),t.append("phone",e.phone),t.append("email",e.email)):(t.append("id",e._id),t.append("name",e.name),t.append("phone",e.phone),t.append("email",e.email)),await g(t),i.value=!1},V=()=>{n.value.edit={},c.push("/member/shipadmin")};return(t,a)=>{const _=k("RouterLink");return T(),B("div",N,[l(C,{class:"mb-10"},{default:p(()=>[s("div",H,[l(_,{to:"/member/shipadmin",class:"text-primary font-bold hover:scale-105"},{default:p(()=>[E("\u6703\u54E1")]),_:1}),R])]),_:1}),s("div",A,[I,s("form",{onSubmit:S(b,["prevent"])},[l(L,{modelValue:e.image,"onUpdate:modelValue":a[0]||(a[0]=o=>e.image=o),className:"avatar",id:"avatar",class:"mx-auto w-fit"},null,8,["modelValue"]),l(m,{title:"\u540D\u7A31",class:"mb-8",modelValue:e.name,"onUpdate:modelValue":a[1]||(a[1]=o=>e.name=o),error:r.name.error,errorText:r.name.value,onClick:a[2]||(a[2]=o=>r.name.error=!1)},null,8,["modelValue","error","errorText"]),l(m,{title:"Email",type:"email",class:"mb-8",modelValue:e.email,"onUpdate:modelValue":a[3]||(a[3]=o=>e.email=o),error:r.email.error,errorText:r.email.value,onClick:a[4]||(a[4]=o=>r.email.error=!1)},null,8,["modelValue","error","errorText"]),l(m,{title:"\u96FB\u8A71",class:"mb-8",modelValue:e.phone,"onUpdate:modelValue":a[5]||(a[5]=o=>e.phone=o),error:r.phone.error,errorText:r.phone.value,onClick:a[6]||(a[6]=o=>r.phone.error=!1)},null,8,["modelValue","error","errorText"]),s("div",F,[l(f,{text:"\u53D6\u6D88",className:"btn-outline",class:"w-1/3",onClick:V}),l(f,{type:"sumbit",text:"\u78BA\u5B9A",class:"w-1/3",disabled:i.value,loading:i.value},null,8,["disabled","loading"])])],40,$)])])}}};export{Z as default};