import{Z as R,y as V,a2 as Y,s as j,r as J,d as N,A as c,D as K,o as b,c as f,a as u,w as T,B as M,b as s,Y as p,E as g,J as w,f as k,m as C,H as Z,I as q,g as z,K as G,t as O}from"./index.47490af8.js";import{v as n}from"./index.d2850135.js";import{i as I}from"./index.56345fb3.js";import{U as L}from"./UploadImage.aeaab3ab.js";import{T as Q}from"./TheTextarea.08e56fbe.js";const W={class:"container py-10"},X={class:"flex"},_=["onSubmit"],h=s("p",null,"\uFF0A\u9EDE\u9078\u5546\u54C1\u5206\u985E\uFF0C\u9078\u64C7\u5546\u54C1\u5206\u985E",-1),ee=s("p",{class:"mt-8"},"\uFF0A\u6700\u591A\u53EF\u4E0A\u50B3 9\u5F35\u5716\u7247",-1),re={class:"mt-2 flex"},te={class:"flex flex-wrap mt-10"},ae={class:"flex justify-between mt-8"},me={__name:"ProductAdminView",setup(oe){const S=R(),{productCategory:y}=S,{banksAdmin:$}=V(Y()),x=j(),{sumbitProductHandler:U,cancelProductHandler:B}=x,{editProduct:o}=V(x),v=J(!1),t=N({image:{error:!1,value:""},name:{error:!1,value:""},price:{error:!1,value:""},maxNumber:{error:!1,value:""},description:{error:!1,value:""},bank:{error:!1,value:""},category:{error:!1,value:""},youtubeVideoLink:{error:!1,value:""}}),m=c(()=>$.value.list.filter(l=>l.userId===o.value.userId._id)),E=c(()=>m.value.map(l=>`${l.bankName} - ${l.bankNumber}`)),H=c(()=>{const l=m.value.findIndex(e=>e._id===o.value.bankId);return l===-1?"":`${m.value[l].bankName} - ${m.value[l].bankNumber}`}),P=c(()=>o.value.images?o.value.images.map(l=>({image:l})):[]),r=N({_id:o.value._id||"",userId:o.value.userId._id||null,name:o.value.name||"",price:o.value.price.toString()||"",maxNumber:o.value.maxNumber.toString()||"",description:o.value.description||"",image:o.value.image||"",images:[...P.value],bank:H.value,isSell:o.value.isSell||!1,category:o.value.category||"",youtubeVideoLink:o.value.youtubeId?`https://www.youtube.com/watch?v=${o.value.youtubeId}`:""}),A=()=>r.image===null||r.image===""?(t.image.value="\u70BA\u5FC5\u586B",t.image.error=!0,!0):n.isEmpty(r.name)?(t.name.value="\u70BA\u5FC5\u586B",t.name.error=!0,!0):n.isEmpty(r.price)?(t.price.value="\u70BA\u5FC5\u586B",t.price.error=!0,!0):n.isEmpty(r.maxNumber)?(t.maxNumber.value="\u70BA\u5FC5\u586B",t.maxNumber.error=!0,!0):n.isEmpty(r.description)?(t.description.value="\u70BA\u5FC5\u586B",t.description.error=!0,!0):n.isEmpty(r.bank)?(t.bank.value="\u70BA\u5FC5\u586B",t.bank.error=!0,!0):n.isEmpty(r.category)?(t.category.value="\u70BA\u5FC5\u586B",t.category.error=!0,!0):n.isNumeric(r.price)?n.isNumeric(r.maxNumber)?m.value.some(i=>{const a=r.bank.split("-");return i.bankName===a[0].trim()&&i.bankNumber.toString()===a[1].trim()})?y.some(i=>i===r.category)?r.youtubeVideoLink!==""&&!I.isVideo(r.youtubeVideoLink)?(t.youtubeVideoLink.value="\u7DB2\u5740\u932F\u8AA4",t.youtubeVideoLink.error=!0,!0):!1:(t.category.value="\u683C\u5F0F\u932F\u8AA4",t.category.error=!0,!0):(t.bank.value="\u683C\u5F0F\u932F\u8AA4",t.bank.error=!0,!0):(t.maxNumber.value="\u4E0D\u662F\u6578\u5B57",t.maxNumber.error=!0,!0):(t.price.value="\u4E0D\u662F\u6578\u5B57",t.price.error=!0,!0),D=async()=>{if(A())return;v.value=!0;const l=m.value.findIndex(a=>{const d=r.bank.split("-");return a.bankName===d[0].trim()&&a.bankNumber.toString()===d[1].trim()}),e=new FormData;e.append("_id",r._id),e.append("name",r.name),e.append("price",r.price),e.append("maxNumber",r.maxNumber),e.append("description",r.description),e.append("image",r.image),e.append("bankId",m.value[l]._id),e.append("isSell",r.isSell),e.append("category",r.category),e.append("userId",r.userId);const i=I.getVideoId(r.youtubeVideoLink);i&&e.append("youtubeId",i),r.images.length>=1&&r.images.forEach(a=>{e.append("images",a.image)}),await U(e),v.value=!1};return(l,e)=>{const i=K("RouterLink");return b(),f("div",W,[u(M,{class:"mb-10"},{default:T(()=>[s("div",X,[u(i,{to:"/member/productalllist",class:"text-primary font-bold hover:scale-105"},{default:T(()=>[G("\u5546\u54C1\u7BA1\u7406")]),_:1}),s("p",null,O(g(o)._id?"\u2002/\u2002\u4FEE\u6539\u5546\u54C1":"\u2002/\u2002\u65B0\u589E\u5546\u54C1"),1)])]),_:1}),s("form",{class:"lg:w-1/2 mx-auto",onSubmit:z(D,["prevent"])},[u(L,{modelValue:r.image,"onUpdate:modelValue":e[0]||(e[0]=a=>r.image=a),title:"\u5546\u54C1\u4E3B\u5716",error:t.image.error,errorText:t.image.value,onClick:e[1]||(e[1]=a=>t.image.error=!1),id:"main-image"},null,8,["modelValue","error","errorText"]),u(p,{modelValue:r.name,"onUpdate:modelValue":e[2]||(e[2]=a=>r.name=a),title:"\u5546\u54C1\u540D\u7A31",error:t.name.error,errorText:t.name.value,onClick:e[3]||(e[3]=a=>t.name.error=!1)},null,8,["modelValue","error","errorText"]),u(p,{modelValue:r.price,"onUpdate:modelValue":e[4]||(e[4]=a=>r.price=a),title:"\u50F9\u683C",error:t.price.error,errorText:t.price.value,onClick:e[5]||(e[5]=a=>t.price.error=!1)},null,8,["modelValue","error","errorText"]),u(p,{modelValue:r.maxNumber,"onUpdate:modelValue":e[6]||(e[6]=a=>r.maxNumber=a),title:"\u5168\u90E8\u6578\u91CF",error:t.maxNumber.error,errorText:t.maxNumber.value,onClick:e[7]||(e[7]=a=>t.maxNumber.error=!1)},null,8,["modelValue","error","errorText"]),u(Q,{modelValue:r.description,"onUpdate:modelValue":e[8]||(e[8]=a=>r.description=a),title:"\u5546\u54C1\u63CF\u8FF0",error:t.description.error,errorText:t.description.value,onClick:e[9]||(e[9]=a=>t.description.error=!1)},null,8,["modelValue","error","errorText"]),u(p,{modelValue:r.bank,"onUpdate:modelValue":e[10]||(e[10]=a=>r.bank=a),title:"\u6536\u6B3E\u5E33\u6236",error:t.bank.error,errorText:t.bank.value,select:g(E),onClick:e[11]||(e[11]=a=>t.bank.error=!1)},null,8,["modelValue","error","errorText","select"]),u(p,{modelValue:r.category,"onUpdate:modelValue":e[12]||(e[12]=a=>r.category=a),title:"\u5546\u54C1\u5206\u985E",select:g(y),error:t.category.error,errorText:t.category.value,onClick:e[13]||(e[13]=a=>t.category.error=!1)},null,8,["modelValue","select","error","errorText"]),h,u(p,{modelValue:r.youtubeVideoLink,"onUpdate:modelValue":e[14]||(e[14]=a=>r.youtubeVideoLink=a),title:"Youtube\u5F71\u7247\u9023\u7D50",error:t.youtubeVideoLink.error,errorText:t.youtubeVideoLink.value,onClick:e[15]||(e[15]=a=>t.youtubeVideoLink.error=!1)},null,8,["modelValue","error","errorText"]),ee,s("div",re,[!r.images.length||r.images.length<9?(b(),w(k,{key:0,text:"\u65B0\u589E\u5716\u7247",class:"w-1/4",onClick:e[16]||(e[16]=a=>r.images.push({image:""}))})):C("",!0),r.images.length>=1?(b(),w(k,{key:1,text:"\u522A\u9664\u4E00\u7B46",className:"btn-outline",class:"w-1/4 ml-auto",onClick:e[17]||(e[17]=a=>r.images.pop())})):C("",!0)]),s("div",te,[(b(!0),f(Z,null,q(r.images,(a,d)=>(b(),f("div",{key:d,class:"w-[30%] mt-4 ml-4"},[u(L,{modelValue:r.images[d].image,"onUpdate:modelValue":F=>r.images[d].image=F,id:`content-${d}`},null,8,["modelValue","onUpdate:modelValue","id"])]))),128))]),u(p,{title:"\u4E0A\u67B6",type:"checkbox",modelValue:r.isSell,"onUpdate:modelValue":e[18]||(e[18]=a=>r.isSell=a),id:"isSell"},null,8,["modelValue"]),s("div",ae,[u(k,{text:"\u53D6\u6D88",className:"btn-outline",class:"w-1/3",onClick:g(B)},null,8,["onClick"]),u(k,{type:"sumbit",text:"\u78BA\u5B9A",class:"w-1/3",disabled:v.value,loading:v.value},null,8,["disabled","loading"])])],40,_)])}}};export{me as default};
