import{j as o,k as l,e as i,l as e}from"./index.3e04d613.js";const H=o("contacts",()=>{const{swalSuccess:r,swalError:n}=l(),a=i({list:[]});return{contact:a,sumbitContactHandler:async t=>{try{await e.post("/contacts",t),r("\u8A0A\u606F\u50B3\u9001\u6210\u529F")}catch(c){n(c)}},getMemberContactHandler:async()=>{try{const{data:t}=await e.get("/contacts");a.list=t.result}catch(t){n(t)}},getAdminContactHandler:async()=>{try{const{data:t}=await e.get("/contacts/admin");a.list=t.result}catch(t){n(t)}},replayContactHandler:async t=>{try{await e.patch("/contacts",t);const c=a.list.findIndex(s=>s._id===t.id);a.list[c].reply=t.reply,r("\u56DE\u8986\u6210\u529F")}catch(c){n(c)}}}});export{H as u};
