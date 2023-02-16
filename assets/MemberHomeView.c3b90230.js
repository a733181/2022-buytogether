import{p as A,s as ee,u as te,$ as ae,y as J,A as se,r as h,C as i,D as re,E as ne,o as u,c as _,a as d,w as j,B as le,b as r,F as e,t as B,K as b,f as S,m as f,a0 as oe,g as ue,Z as ce,a1 as E,I as F,J as K,P as ie,L as de,U as me}from"./index.96a46153.js";import{_ as ve}from"./chat.e108b74e.js";const pe={class:"container pt-44 lg:pt-32 pb-10"},_e={class:"flex"},be={key:0},fe={class:"flex flex-row items-center gap-4 mb-10"},ge=["src","alt"],ke={class:"text-xl"},xe={key:0,class:"ml-auto"},ye={class:"flex mb-6 gap-7 items-center justify-between"},he={class:"-mt-12 relative ml-auto"},Ce=["onSubmit"],we={class:"flex"},Be={class:"flex gap-5 flex-col mr-10 lg:w-32"},Se={class:"flex-1"},Ve={class:"grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10"},Ie={class:"w-min mx-auto"},Ue={__name:"MemberHomeView",setup(He){const g=A(),V=ee(),I=te(),{productCategory:O,sortProduct:n}=ae(),{getMemberSellProductHandler:k}=V,{memberHomeProduct:s,productPage:m}=J(V),{clickListHandler:H}=I,{users:C,isMember:x}=J(I),{addChatUserHandler:Z}=se();k({userId:g.params.id});const v=h("\u5168\u90E8"),l=h(n[0]),w=h(""),p=h(""),q=i(()=>{if(l.value===n[0])return s.value.data;const o=JSON.parse(JSON.stringify(s.value.data));if(l.value===n[1]||l.value===n[2])return o.sort((t,c)=>{if(l.value===n[1])return t.price<c.price?1:-1;if(l.value===n[2])return t.price<c.price?-1:1});if(l.value===n[3]||l.value===n[4])return o.sort((t,c)=>{if(l.value===n[3])return t.remaining<c.remaining?1:-1;if(l.value===n[4])return t.remaining<c.remaining?-1:1})}),z=i(()=>C.value.track.findIndex(o=>o===s.value.member._id)),G=i(()=>C.value.black.findIndex(o=>o===s.value.member._id)),N=i(()=>x.value?z.value===-1?"\u52A0\u5165\u8FFD\u8E64":"\u53D6\u6D88\u8FFD\u8E64":"\u52A0\u5165\u8FFD\u8E64"),P=i(()=>x.value?G.value===-1?"\u52A0\u5165\u9ED1\u540D\u55AE":"\u53D6\u6D88\u9ED1\u540D\u55AE":"\u52A0\u5165\u9ED1\u540D\u55AE"),Q=i(()=>x.value?P.value!=="\u53D6\u6D88\u9ED1\u540D\u55AE":!0),W=i(()=>x.value?N.value!=="\u53D6\u6D88\u8FFD\u8E64":!0),T=o=>{v.value=o,k({userId:g.params.id,category:v.value})},X=o=>{m.value.current=o,k({userId:g.params.id,category:v.value})},Y=()=>{k({userId:g.params.id,key:p.value}),w.value=p.value,p.value=""};return re(()=>{m.value.current=1}),(o,t)=>{var U,$,L,M,R,D;const c=ne("RouterLink");return u(),_("div",pe,[d(le,{class:"mb-10"},{default:j(()=>{var a,y;return[r("div",_e,[d(c,{to:"/",class:"text-primary font-bold hover:opacity-60"},{default:j(()=>[de("\u7CBE\u9078\u5546\u54C1")]),_:1}),r("span",null,"\u2002/\u2002"+B(((y=(a=e(s))==null?void 0:a.member)==null?void 0:y.name)||""),1),w.value?(u(),_("span",be,"\u2002/\u2002"+B(w.value),1)):f("",!0)])]}),_:1}),r("div",fe,[r("img",{src:((U=e(s))==null?void 0:U.member.image)||"",alt:(($=e(s))==null?void 0:$.member.name)||"",class:"w-16 h-16 rounded-full object-cover"},null,8,ge),r("p",ke,B(((M=(L=e(s))==null?void 0:L.member)==null?void 0:M.name)||""),1),r("img",{src:ve,alt:"chat",class:"w-6 hover:opacity-60",onClick:t[0]||(t[0]=a=>e(Z)({toUserId:e(s).member._id,name:e(s).member.name,image:e(s).member.image}))}),((D=(R=e(s))==null?void 0:R.member)==null?void 0:D._id)!==e(C)._id?(u(),_("div",xe,[e(W)?(u(),b(S,{key:0,text:e(P),className:"btn-outline",class:"mr-4",onClick:t[1]||(t[1]=a=>e(H)({id:e(s).member._id,type:"black"}))},null,8,["text"])):f("",!0),e(Q)?(u(),b(S,{key:1,text:e(N),onClick:t[2]||(t[2]=a=>e(H)({id:e(s).member._id}))},null,8,["text"])):f("",!0)])):f("",!0)]),r("div",ye,[d(oe,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=a=>l.value=a),select:e(n),class:"w-32 h-[44px]"},null,8,["modelValue","select"]),r("div",he,[r("form",{onSubmit:ue(Y,["prevent"]),class:"flex gap-5 items-center"},[d(ce,{modelValue:p.value,"onUpdate:modelValue":t[4]||(t[4]=a=>p.value=a),class:"-mt-10"},null,8,["modelValue"]),d(S,{type:"submit",className:"btn-gray",text:"\u641C\u5C0B"})],40,Ce)])]),r("div",we,[r("div",Be,[d(E,{tab:"\u5168\u90E8",active:v.value,onClick:t[5]||(t[5]=a=>T("\u5168\u90E8"))},null,8,["active"]),(u(!0),_(F,null,K(e(O),(a,y)=>(u(),b(E,{tab:a,key:y,active:v.value,onClick:Ne=>T(a)},null,8,["tab","active","onClick"]))),128))]),r("div",Se,[r("div",Ve,[(u(!0),_(F,null,K(e(q),a=>(u(),b(me,{key:a._id,data:a},null,8,["data"]))),128))]),r("div",Ie,[e(m).total>1?(u(),b(ie,{key:0,total:e(m).total,current:e(m).current,onCurrent:X},null,8,["total","current"])):f("",!0)])])])])}}};export{Ue as default};
