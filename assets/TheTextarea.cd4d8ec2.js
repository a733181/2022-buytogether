import{_,r as u,f as l,a as o,c,n as m,v,d as n,p as i,t as r,q as f}from"./index.3e04d613.js";const y={class:"lable-text"},T={key:0,class:"text-red-400"},V={__name:"TheTextarea",props:{title:{type:String},modelValue:{type:String},error:{type:Boolean,default:!1},errorText:{type:String,default:""},textName:{type:String},classText:{type:String}},setup(p,{emit:x}){const e=p,t=u(e.modelValue);return l(t,a=>{x("update:modelValue",a)}),l(e,a=>{a.modelValue!==t&&(t.value=a.modelValue)}),(a,s)=>(o(),c("div",y,[m(n("textarea",{"onUpdate:modelValue":s[0]||(s[0]=d=>t.value=d),class:i(["textarea-text",[e.textName,e.classText]])},null,2),[[v,t.value,void 0,{trim:!0}]]),n("label",{class:i(["textarea-text-title",{"textarea-text-title-active":t.value}])},r(e.title),3),e.error?(o(),c("p",T,r(e.title)+r(e.errorText),1)):f("",!0)]))}},S=_(V,[["__scopeId","data-v-ca62e2f0"]]);export{S as T};
