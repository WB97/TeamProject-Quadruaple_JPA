import{F as Q,u as K,g,ak as d,a1 as w,t as M,J as V,r,j as e,a7 as W,aa as X,a9 as Z,b as ee,a3 as se,a4 as te,ab as ae,a8 as A,aE as ne,m as I,ac as oe,s as O,R as S}from"./index-CclgMCKg.js";import{a as ie}from"./index-DLFP4kOL.js";import{R as le}from"./index-DN2QkB1Y.js";import{b as re,d as ce,m as j,a as ue}from"./match-BrbVKEl2.js";import"./index-317k7Gzh.js";import"./index-efnQCHqG.js";import"./index-DK5P-bAW.js";import"./index-Dyi5F84X.js";const xe=Q({key:"salesAtom",default:{data:[]}}),ye=()=>{var k,C;const n=K(),T=s=>{n(`/chatroom?roomId=${s}`)},D=()=>{n("/business/register")},l=g("user"),y=g("accessToken"),o=(k=l==null?void 0:l.strfDtos[0])==null?void 0:k.strfId,i=re((C=l==null?void 0:l.strfDtos[0])==null?void 0:C.category)||d.STAY,R=w(M),E=w(xe),h=V(M),B=()=>{n("/business")},[c,P]=r.useState(0),[u,U]=r.useState(0),[x,v]=r.useState(!1),[m,N]=r.useState(!1),[f,_]=r.useState(null),[p,$]=r.useState(!1),F=async()=>{const s="/api/user/userInfo";$(!0);try{const a=(await I.get(s,{headers:{Authorization:`Bearer ${y}`}})).data;a&&_(a.data)}catch(t){console.log("유저 정보 조회",t)}finally{$(!1)}},L=async()=>{const s="/api/chat-room/admin";try{const t=await I.post(s,null,{headers:{Authorization:`Bearer ${y}`}});console.log("관리자 채팅방 생성",t.data);const a=t.data;return a.code==="200 성공"&&T(a.data),a}catch(t){return console.log("관리자 채팅방 생성",t),null}},Y=[{icon:ce(i),name:"가게 관리",path:"/business/store",subMenu:[{name:"기본 정보",path:`/business/store?strfId=${o}&category=${i}&tab=0`},{name:"운영정보",path:`/business/store?strfId=${o}&category=${i}&tab=1`}]},{icon:ue(i),name:`${j(i)} 관리`,path:"/business/menu",subMenu:[{name:`${j(i)} 목록`,path:`/business/menu?strfId=${o}&category=${i}`},{name:`${j(i)} 등록`,path:`/business/menu/create?strfId=${o}&category=${i}`}]},{icon:e.jsx(W,{}),name:"리뷰 관리",path:`/business/review?strfId=${o}`},{icon:e.jsx(X,{}),name:"포인트 관리",path:"/business/point",subMenu:[{name:"포인트 입금 내역",path:`/business/point?strfId=${o}`},{name:"포인트 QR 생성",path:`/business/point/qr?strfId=${o}`}]}],G=[{icon:e.jsx(Z,{}),name:"쿠폰 관리",path:"/business/coupon",subMenu:[{name:"쿠폰 목록",path:`/business/coupon?strfId=${o}`},{name:"쿠폰 발급",path:`/business/coupon/create?strfId=${o}`}],category:[d.STAY]},{icon:e.jsx(ie,{}),name:"예약 관리",path:`/business/booking?strfId=${o}`,category:[d.STAY]}],q=[{name:"공지사항",onClick:()=>n("/announcement?type=business")},{name:"자주 묻는 질문",onClick:()=>n("/qna")},{name:"관리자에게 문의하기",onClick:()=>L()}],z=s=>{c===s?(m&&N(!1),v(!x)):P(s)},H=s=>{u===s?(x&&v(!1),N(!m)):U(s)},J=()=>{R(),E(),oe("accessToken");const s=g("user");s.isSaveEmail===!1?O("user",{...s,email:"",role:[S.GUEST],strfDtos:[]}):O("user",{...s,role:[S.GUEST],strfDtos:[]}),n("/signin")};return r.useEffect(()=>{F()},[]),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(ee,{icon:"close",title:"",onClick:B,rightContent:e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("button",{type:"button",children:e.jsx(se,{})}),e.jsx("button",{type:"button",onClick:()=>n("/business/mypage/edit"),children:e.jsx(te,{})})]})}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex flex-col items-center gap-5 px-5 pt-5 pb-4 ",children:[p&&e.jsx("div",{className:"mx-auto w-32 h-32 rounded-full overflow-hidden bg-slate-100"}),!p&&e.jsx("div",{className:"mx-auto w-32 h-32 rounded-full overflow-hidden bg-slate-100",children:e.jsx("img",{src:`${ae}/${l==null?void 0:l.userId}/${f==null?void 0:f.profilePic}`,alt:"User-Profile",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"text-2xl text-slate-700 flex items-end gap-2",children:[p&&e.jsx("span",{className:"text-transparent",children:"닉네임"}),!p&&e.jsx("span",{className:"text-3xl font-semibold line-clamp-1",children:h==null?void 0:h.name})]})]}),e.jsx("div",{className:"w-full h-[2.67vw] max-h-[10px] bg-slate-100"}),e.jsx("ul",{className:"flex flex-col gap-5 px-6",children:o?e.jsxs(e.Fragment,{children:[Y.map((s,t)=>e.jsxs("li",{className:"py-4",children:[e.jsxs("button",{type:"button",onClick:()=>{s.subMenu?z(t):n(s.path)},className:"w-full flex items-center justify-between gap-4 text-2xl font-medium text-slate-700 ",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("i",{className:"text-2xl text-slate-400",children:s.icon}),s.name]}),s.subMenu&&e.jsx("i",{className:`text-2xl text-slate-300 ${c===t&&x===!0?"rotate-90":"rotate-0"} transition-transform duration-300`,children:e.jsx(A,{})})]}),s.subMenu&&e.jsx("ul",{className:`flex flex-col py-4 ${c===t&&x===!0?"visible h-auto opacity-100 relative":"invisible max-h-0 opacity-0 absolute"} overflow-hidden transition-[max-height] duration-300 ease-in-out opacity-transition`,style:{transitionProperty:"opacity, max-height, visibility",transitionDuration:c===t?"400ms":"300ms"},children:s.subMenu.map((a,b)=>e.jsx("li",{className:`px-10 py-2 text-xl text-slate-500 cursor-pointer\r
                      hover:bg-slate-100 transition-all duration-300 flex items-center justify-between`,onClick:()=>n(a.path),children:a.name},b))})]},t)),G.map((s,t)=>e.jsxs("li",{className:"py-4",children:[e.jsxs("button",{type:"button",onClick:()=>{s.subMenu?H(t):n(s.path)},className:`w-full flex items-center justify-between gap-4 text-2xl font-medium text-slate-700
                      ${i===d.STAY?"":"hidden"}`,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("i",{className:"text-2xl text-slate-400",children:s.icon}),s.name]}),s.subMenu&&e.jsx("i",{className:`text-2xl text-slate-300 ${u===t&&m===!0?"rotate-90":"rotate-0"} transition-transform duration-300`,children:e.jsx(A,{})})]}),s.subMenu&&e.jsx("ul",{className:`flex flex-col gap-2 py-4 ${u===t&&m===!0?"visible h-auto opacity-100 relative":"invisible max-h-0 opacity-0 absolute"} overflow-hidden transition-[max-height] duration-300 ease-in-out opacity-transition`,style:{transitionProperty:"opacity, max-height, visibility",transitionDuration:u===t?"400ms":"300ms"},children:s.subMenu.map((a,b)=>e.jsx("li",{className:"px-10 text-xl text-slate-500 py-1 cursor-pointer ",onClick:()=>n(a.path),children:a.name},b))})]},t))]}):e.jsxs("li",{className:"py-4 flex items-center gap-4 text-2xl font-medium text-slate-700 select-none cursor-pointer",onClick:()=>{D()},children:[e.jsx("i",{className:"text-2xl text-slate-400",children:e.jsx(ne,{})}),"업체 등록"]})}),e.jsx("div",{className:"w-full h-[2.67vw] max-h-[10px] bg-slate-100"}),e.jsxs("ul",{className:"py-5 px-6",children:[q.map((s,t)=>e.jsx("li",{className:"cursor-pointer text-slate-500 py-3 text-lg select-none",onClick:s.onClick,children:s.name},t)),e.jsxs("li",{className:"cursor-pointer text-slate-500 py-3 text-lg flex items-center gap-2",onClick:J,children:[e.jsx(le,{className:"text-slate-300"}),"로그아웃"]})]})]})]})};export{ye as default};
