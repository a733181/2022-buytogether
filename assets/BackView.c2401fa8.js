import{p as C,u as A,y as b,x as V,$ as B,D as x,o as t,c as a,b as r,E as e,a as o,w as l,K as n,n as u,m as i,t as R,_ as N,a6 as T,J as $,a7 as D}from"./index.47490af8.js";const H={class:"bg-primary py-3 text-white"},L={class:"container"},S={class:"flex gap-8 items-center flex-wrap justify-center flex-col"},j=["src","alt"],q={key:0},E={key:1},z={key:2},I={key:3},J={key:4},K={key:5,class:"relative"},M={key:0,class:"absolute -top-4 -right-2 bg-gray-600 rounded-full px-2"},P={key:6},U={key:7},F={__name:"TheHeader",setup(v){const p=C(),s=A(),{logoutHandler:_}=s,{messageAllProduct:m}=b(V()),{showList:h,showChat:f}=b(B()),d=y=>p.path===y?"text-gray-500 bg-white":null,k=()=>{h.value=!h.value,f.value=!1};return(y,g)=>{const c=x("RouterLink");return t(),a("header",H,[r("nav",L,[r("ul",S,[r("li",null,[r("img",{src:e(s).users.image,alt:e(s).users.name,class:"rounded-full w-14 h-14 object-cover"},null,8,j)]),r("li",null,[o(c,{to:"/",class:"px-3 py-2 rounded-lg hover:opacity-60"},{default:l(()=>[n("\u56DE\u9996\u9801")]),_:1})]),e(s).isAdmin?i("",!0):(t(),a("li",q,[o(c,{to:"/member/orderlist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/orderlist")])},{default:l(()=>[n("\u8A02\u55AE\u7BA1\u7406")]),_:1},8,["class"])])),e(s).isAdmin?(t(),a("li",E,[o(c,{to:"/member/orderalllist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/orderalllist")])},{default:l(()=>[n("\u8A02\u55AE\u7BA1\u7406")]),_:1},8,["class"])])):i("",!0),e(s).isAdmin?i("",!0):(t(),a("li",z,[o(c,{to:"/member/productlist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/productlist")])},{default:l(()=>[n("\u5546\u54C1\u7BA1\u7406")]),_:1},8,["class"])])),e(s).isAdmin?(t(),a("li",I,[o(c,{to:"/member/productalllist",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/productalllist")])},{default:l(()=>[n("\u5546\u54C1\u7BA1\u7406")]),_:1},8,["class"])])):i("",!0),e(s).isAdmin?(t(),a("li",J,[o(c,{to:"/member/aboutmessage",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/aboutmessage")])},{default:l(()=>[n("\u7559\u8A00")]),_:1},8,["class"])])):i("",!0),e(s).isAdmin?i("",!0):(t(),a("li",K,[o(c,{to:"/member/qanda",class:u(["px-3 py-2 rounded-lg hover:opacity-60 block",d("/member/qanda")])},{default:l(()=>[n("\u554F\u8207\u7B54")]),_:1},8,["class"]),e(m).length?(t(),a("p",M,R(e(m).length),1)):i("",!0)])),r("li",null,[r("p",{class:"px-3 py-2 rounded-lg cursor-pointer hover:text-gray-500 hover:bg-white",onClick:k}," \u6084\u6084\u8A71 ")]),e(s).isAdmin?i("",!0):(t(),a("li",P,[o(c,{to:"/member/ship",class:u(["rounded-lg hover:opacity-60 block py-3 px-2 -mt-3",d("/member/ship")])},{default:l(()=>[n("\u5E33\u6236")]),_:1},8,["class"])])),e(s).isAdmin?(t(),a("li",U,[o(c,{to:"/member/shipadmin",class:u(["rounded-lg hover:opacity-60 block py-3 px-2 -mt-3",d("/member/shipadmin")])},{default:l(()=>[n("\u6703\u54E1")]),_:1},8,["class"])])):i("",!0),r("li",null,[r("p",{class:"py-3 px-2 -mt-3 rounded-lg hover:text-gray-500 hover:bg-white cursor-pointer",onClick:g[0]||(g[0]=(...w)=>e(_)&&e(_)(...w))}," \u767B\u51FA ")])])])])}}};const G={class:"min-h-[calc(100vh-56px)] flex"},O={class:"flex-1 overflow-auto"},Q={__name:"BackView",setup(v){return(p,s)=>{const _=x("RouterView");return t(),a("div",G,[o(F),r("div",O,[o(_,null,{default:l(({Component:m})=>[o(T,{name:"router",mode:"out-in"},{default:l(()=>[(t(),$(D(m)))]),_:2},1024)]),_:1})])])}}},X=N(Q,[["__scopeId","data-v-8c81de5a"]]);export{X as default};
