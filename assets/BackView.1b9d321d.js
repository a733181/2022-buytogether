import{p as V,u as B,y as x,x as $,A as R,E as v,o,c as a,b as e,F as s,t as g,a as l,w as r,L as n,n as u,m as i,_ as k,a6 as N,K as S,a7 as L}from"./index.96a46153.js";const T={class:"bg-primary py-3 text-white w-[250px]"},j={class:"container"},H={class:"flex gap-8 items-center flex-wrap justify-center flex-col"},q=e("li",{class:"border-b-2 w-full pb-4"},[e("div",{class:"text-center text-xl font-bold"},[e("p",null,"\u5718\u8CFC\u8DA3"),e("p",null,"\u5F8C\u81FA\u7BA1\u7406\u7CFB\u7D71")])],-1),D={class:"flex items-center gap-2"},E=["src","alt"],F={key:0},U={key:1},z={key:2},I={key:3},K={key:4},M={key:5,class:"relative"},P={key:0,class:"absolute top-2 -right-8 bg-white rounded-full px-2 text-primary font-bold"},Y={key:6},G={key:7},J={__name:"TheHeader",setup(h){const m=V(),t=B(),{logoutHandler:_}=t,{messageAllProduct:p}=x($()),{showList:y,showChat:w}=x(R()),d=f=>m.path===f?"text-gray-500 bg-white":null,C=()=>{y.value=!y.value,w.value=!1};return(f,b)=>{const c=v("RouterLink");return o(),a("header",T,[e("nav",j,[e("ul",H,[q,e("li",D,[e("img",{src:s(t).users.image,alt:s(t).users.name,class:"rounded-full w-14 h-14 object-cover"},null,8,E),e("p",null,g(s(t).users.name),1)]),e("li",null,[l(c,{to:"/",class:"px-3 py-2 rounded-lg hover:opacity-60"},{default:r(()=>[n("\u56DE\u9996\u9801")]),_:1})]),s(t).isAdmin?i("",!0):(o(),a("li",F,[l(c,{to:"/member/orderlist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/orderlist")])},{default:r(()=>[n("\u8A02\u55AE\u7BA1\u7406")]),_:1},8,["class"])])),s(t).isAdmin?(o(),a("li",U,[l(c,{to:"/member/orderalllist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/orderalllist")])},{default:r(()=>[n("\u8A02\u55AE\u7BA1\u7406")]),_:1},8,["class"])])):i("",!0),s(t).isAdmin?i("",!0):(o(),a("li",z,[l(c,{to:"/member/productlist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/productlist")])},{default:r(()=>[n("\u5546\u54C1\u7BA1\u7406")]),_:1},8,["class"])])),s(t).isAdmin?(o(),a("li",I,[l(c,{to:"/member/productalllist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/productalllist")])},{default:r(()=>[n("\u5546\u54C1\u7BA1\u7406")]),_:1},8,["class"])])):i("",!0),s(t).isAdmin?(o(),a("li",K,[l(c,{to:"/member/aboutmessage",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/aboutmessage")])},{default:r(()=>[n("\u7559\u8A00")]),_:1},8,["class"])])):i("",!0),s(t).isAdmin?i("",!0):(o(),a("li",M,[l(c,{to:"/member/qanda",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/qanda")])},{default:r(()=>[n("\u7559\u8A00\u7BA1\u7406 ")]),_:1},8,["class"]),s(p).length?(o(),a("p",P,g(s(p).length),1)):i("",!0)])),e("li",null,[e("p",{class:"px-3 py-2 rounded-lg cursor-pointer hover:text-gray-500 hover:bg-white",onClick:C}," \u79C1\u8A0A\u7BA1\u7406 ")]),s(t).isAdmin?i("",!0):(o(),a("li",Y,[l(c,{to:"/member/ship",class:u(["rounded-lg hover:opacity-60 block py-3 px-2 -mt-3",d("/member/ship")])},{default:r(()=>[n("\u6703\u54E1\u8CC7\u6599")]),_:1},8,["class"])])),s(t).isAdmin?(o(),a("li",G,[l(c,{to:"/member/shipadmin",class:u(["rounded-lg hover:opacity-60 block py-3 px-2 -mt-3",d("/member/shipadmin")])},{default:r(()=>[n("\u6703\u54E1")]),_:1},8,["class"])])):i("",!0),e("li",null,[e("p",{class:"py-3 px-2 -mt-3 rounded-lg hover:text-gray-500 hover:bg-white cursor-pointer",onClick:b[0]||(b[0]=(...A)=>s(_)&&s(_)(...A))}," \u767B\u51FA ")])])])])}}},O={},Q={class:"text-gray-700"},W=e("div",{class:"container py-4 flex gap-6 justify-center"},[e("p",null,"2023 \u6CF0\u5C71\u8077\u8A13\u5C40\u524D\u7AEF\u73ED\u4F5C\u54C1"),e("p",null,"\u672C\u7DB2\u7AD9\u6240\u4F7F\u7528\u4E4B\u5716\u7247\u53CA\u8CC7\u6599\u70BA\u539F\u7DB2\u7AD9\u7248\u6B0A\u6240\u6709"),e("a",{class:"hover:opacity-60",href:"https://discordapp.com/users/868355995334737961"},"Coded by SYUAN")],-1),X=[W];function Z(h,m){return o(),a("footer",Q,X)}const ee=k(O,[["render",Z]]);const se={class:"min-h-[100vh] flex items-stretch"},te={class:"flex-1 overflow-auto flex flex-col"},oe={__name:"BackView",setup(h){return(m,t)=>{const _=v("RouterView");return o(),a("div",se,[l(J),e("div",te,[l(_,null,{default:r(({Component:p})=>[l(N,{name:"router",mode:"out-in"},{default:r(()=>[(o(),S(L(p)))]),_:2},1024)]),_:1}),l(ee,{class:"mt-auto"})])])}}},ae=k(oe,[["__scopeId","data-v-8ae06d6d"]]);export{ae as default};
