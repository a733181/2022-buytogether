import{_ as O}from"./chat.e108b74e.js";import{_ as W,a as X,T as Z}from"./TheMoreProduct.22874101.js";import{o as r,c as n,b as e,_ as ee,p as te,q as se,s as ae,x as oe,y as H,u as le,z as re,A as ne,e as ce,r as x,C as L,D as ie,E as de,a as u,w,B as ue,t as i,F as s,m as f,f as me,G as j,H as pe,I as P,J as N,K as _e,P as ge,L as ve,M as he,N as fe}from"./index.42bb3edd.js";import{_ as U}from"./SendProductMessage.a10bf302.js";import{u as be,_ as ye}from"./TheModel.90c91b81.js";import"./index.e80e8c40.js";import"./TheTextarea.07a59f9b.js";const xe=""+new URL("exclamation-solid.0ec4ead1.svg",import.meta.url).href,we=""+new URL("store-solid.29345756.svg",import.meta.url).href,ke={class:"relative overflow-hidden pb-[56.25%]"},Ie={__name:"YouToLink",props:{data:String},setup(_){const k=`https://www.youtube.com/embed/${_.data}`;return(I,C)=>(r(),n("div",ke,[e("iframe",{class:"absolute top-0 left-0 w-full h-full",width:"560",height:"315",src:k,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})]))}};const d=_=>(he("data-v-6e7192cb"),_=_(),fe(),_),Ce={class:"container pt-44 lg:pt-32 pb-10"},$e={class:"flex items-center"},Se=d(()=>e("p",null,"\u2002/\u2002",-1)),He={class:"flex flex-col lg:flex-row gap-8 items-stretch mb-20"},Le={class:"lg:w-2/5 flex flex-col"},Me={class:"font-bold text-2xl mb-3"},Re={class:"text-primary text-xl mb-5"},Be={class:"mb-1"},Ve={class:"mb-6"},Te={class:"mb-6 whitespace-pre-line"},je={key:0,class:"flex items-center gap-8 my-5"},Pe=["src","alt"],Ne={class:"mb-2 text-lg"},Ue={class:"flex gap-3 relative px-2"},Ae=d(()=>e("p",{class:"toggle-text text-gray-500 text-sm absolute top-5 -left-[2px]"}," \u79C1\u8A0A ",-1)),Fe=d(()=>e("p",{class:"toggle-text text-gray-500 text-sm absolute top-5 left-7"}," \u6AA2\u8209 ",-1)),qe=d(()=>e("img",{src:we,alt:"more",class:"w-4 h-4"},null,-1)),ze=d(()=>e("p",{class:"toggle-text text-gray-500 text-sm absolute top-5 left-14"}," \u5546\u54C1 ",-1)),De={class:"flex mt-auto item-center justify-center gap-5"},Ee={class:"flex items-center border-2 border-primary rounded-lg w-1/3 justify-center"},Ye={class:"flex-1 -order-1 lg:order-1"},Ge={class:"relative h-[490px] mb-5"},Je={key:0},Ke=["src","alt"],Qe=["src","alt"],Oe=["src","onClick"],We={class:"mb-20"},Xe=d(()=>e("p",{class:"mb-6 text-2xl pb-2 border-b-2 border-primary"},"\u554F\u8207\u7B54",-1)),Ze={key:0,class:"mb-6"},et={class:"w-4/5 whitespace-pre"},tt=d(()=>e("p",null,"\u554F\uFF1A",-1)),st={class:"ml-2 whitespace-pre-line"},at={key:0,class:"ml-auto w-4/5 bg-gray-200 rounded-lg p-2 flex justify-end"},ot=d(()=>e("p",null,"\u5718\u4E3B\u7B54\uFF1A",-1)),lt={class:"ml-2 whitespace-pre-line"},rt={class:"bg-gray-100 rounded-lg p-6"},nt=d(()=>e("p",{class:"text-xl mb-4"},"\u63D0\u51FA\u554F\u984C",-1)),ct=d(()=>e("p",{class:"mb-4"},"\u70BA\u4FDD\u969C\u6703\u54E1\u4EA4\u6613\u5B89\u5168\uFF0C\u7559\u8A00\u8ACB\u52FF\u586B\u5BEB\u500B\u4EBA\u8CC7\u6599\u3002",-1)),it={class:"bg-white rounded-lg"},dt={__name:"ProductView",setup(_){const m=te(),{clickAddCartHandler:k}=se(),I=ae(),C=oe(),{getSellProdctHander:M}=I,{sellProduct:t}=H(I),{sumbitMessageHandler:A,getProductMessageHandler:$}=C,{messageProduct:R,messagePage:g}=H(C),{toggleShow:b}=H(be()),{isLoginHandler:F}=le(),{createReporteHandler:q}=re(),{addChatUserHandler:z}=ne();M(m.params.id),$(m.params.id),ce(()=>m.params.id,o=>{o&&m.path.includes("/products")&&(M(o),$(o))});const S=x(!1),y=x(!1),p=x(1),v=L(()=>t!=null&&t.value.images?t==null?void 0:t.value.images.length:0),c=x(t.value.youtubeId?v.value+1:0),D=L(()=>c.value===0?t.value.image:t.value.images[c.value-1]),E=L(()=>{if(t!=null&&t.value.images)return`grid-template-columns: repeat(${v.value+1}, minmax(0, 1fr));`}),B=o=>{const h=!!t.value.youtubeId?v.value+1:v.value;o===1?c.value>=h?c.value=0:c.value++:c.value<=0?c.value=h:c.value--},V=o=>{if(p.value+o<=0){p.value=1;return}if(p.value+o>t.value.remaining){p.value=t.value.remaining;return}p.value+=o},Y=async o=>{S.value=!0;const a={message:o.message,prodcutId:m.params.id};await A(a),S.value=!1},G=()=>{!F()||(b.value=!b.value)},J=async o=>{b.value=!b.value;const a={message:o.message,productId:m.params.id};q(a)},K=o=>{g.value.current=o,$(m.params.id)},Q=async o=>{y.value=!0,await k(o),y.value=!1};return ie(()=>{g.value.current=1}),(o,a)=>{const h=de("RouterLink");return r(),n("div",Ce,[u(ue,{class:"mb-10"},{default:w(()=>[e("div",$e,[u(h,{to:"/",class:"text-primary font-bold break-normal hover:opacity-60"},{default:w(()=>[ve("\u7CBE\u9078\u5718\u8CFC")]),_:1}),Se,e("p",null,i(s(t).name),1)])]),_:1}),e("div",He,[e("div",Le,[e("h1",Me,i(s(t).name),1),e("p",Re,"$"+i(s(t).price),1),e("p",Be," \u92B7\u552E\u6578\u91CF\uFF1A"+i(s(t).maxNumber-s(t).remaining),1),e("p",Ve,"\u5269\u9918\u6578\u91CF\uFF1A"+i(s(t).remaining),1),e("p",Te,i(s(t).description),1),s(t).userId?(r(),n("div",je,[e("img",{src:s(t).userId.image,alt:s(t).userId.name,class:"w-16 h-16 rounded-full object-cover"},null,8,Pe),e("div",null,[e("p",Ne,i(s(t).userId.name),1),e("div",Ue,[e("img",{src:O,alt:"chat",class:"toggle w-4 hover:opacity-60 cursor-pointer",onClick:a[0]||(a[0]=l=>s(z)({toUserId:s(t).userId._id,name:s(t).userId.name,image:s(t).userId.image}))}),Ae,e("img",{src:xe,alt:"\u6AA2\u8209",class:"toggle w-4 h-4 hover:opacity-60 cursor-pointer",onClick:G}),Fe,u(h,{to:`/memberhome/${s(t).userId._id}`,class:"toggle hover:opacity-60"},{default:w(()=>[qe]),_:1},8,["to"]),ze])])])):f("",!0),e("div",De,[e("div",Ee,[e("img",{src:W,class:"w-5 hover:opacity-60 block mr-auto ml-2",onClick:a[1]||(a[1]=l=>V(-1)),alt:"\u6E1B\u5C11\u6578\u91CF",title:"\u6E1B\u5C11\u6578\u91CF"}),e("p",null,i(p.value),1),e("img",{src:X,class:"w-5 hover:opacity-60 block ml-auto mr-2",onClick:a[2]||(a[2]=l=>V(1)),alt:"\u589E\u52A0\u6578\u91CF",title:"\u589E\u52A0\u6578\u91CF"})]),u(me,{text:"\u52A0\u5165\u8CFC\u7269\u8ECA",class:"w-1/3",disabled:y.value,loading:y.value,onClick:a[3]||(a[3]=l=>Q({id:s(t)._id,quantity:p.value}))},null,8,["disabled","loading"])])]),e("div",Ye,[e("div",Ge,[c.value===s(v)+1?(r(),n("div",Je,[u(Ie,{data:s(t).youtubeId,class:"w-[90%] mx-auto"},null,8,["data"])])):(r(),n("img",{key:1,class:"rounded-xl object-contain w-full h-full mb-5",src:s(D),alt:s(t).name},null,8,Ke)),e("img",{src:j,alt:"arrow",class:"w-6 absolute top-1/2 left-0 -translate-y-1/2 hover:opacity-60",onClick:a[4]||(a[4]=l=>B(-1))}),e("img",{src:j,alt:"arrow",class:"w-6 absolute rotate-180 top-1/2 right-0 -translate-y-1/2 hover:opacity-60",onClick:a[5]||(a[5]=l=>B(1))})]),e("div",{class:"grid gap-2",style:pe(s(E))},[e("div",null,[e("img",{class:"w-full h-full object-cover",src:s(t).image,alt:s(t).name,onClick:a[6]||(a[6]=l=>c.value=0)},null,8,Qe)]),s(t).images?(r(!0),n(P,{key:0},N(s(t).images,(l,T)=>(r(),n("div",null,[(r(),n("img",{src:l,key:T,class:"w-full h-full object-cover",onClick:ut=>c.value=T+1},null,8,Oe))]))),256)):f("",!0)],4)])]),e("div",We,[Xe,s(R).length?(r(),n("ul",Ze,[(r(!0),n(P,null,N(s(R),l=>(r(),n("li",{key:l._id,class:"border-2 rounded-lg mb-2 px-4 py-2"},[e("div",et,[tt,e("p",st,i(l.message),1)]),l.reply?(r(),n("div",at,[ot,e("p",lt,i(l.reply||""),1)])):f("",!0)]))),128))])):f("",!0),s(g).total>1?(r(),_e(ge,{key:1,class:"ml-auto",total:s(g).total,current:s(g).current,onCurrent:K},null,8,["total","current"])):f("",!0),e("div",rt,[nt,ct,e("div",it,[u(U,{class:"lg:w-1/2 mx-auto pt-2 pb-12 px-8",classText:"h-52",onMessage:Y,isLoading:S.value},null,8,["isLoading"])])])]),u(ye,{classModel:"w-2/3 lg:w-1/2"},{default:w(()=>[u(U,{onMessage:J,class:"lg:w-2/3 mx-auto",classText:"h-40"})]),_:1}),u(Z,{category:s(t).category},null,8,["category"])])}}},bt=ee(dt,[["__scopeId","data-v-6e7192cb"]]);export{bt as default};
