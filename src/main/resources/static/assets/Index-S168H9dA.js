import{r as o,j as e,g as p,aq as g,c as d}from"./index-BimvysYt.js";import{d as h}from"./index-CBTeAnO8.js";import{d as j}from"./dayjs.min-B9EaxONI.js";import{a as f}from"./index-Dq1YK8SL.js";import{B as u}from"./BottomSheet-CO8WOyno.js";import{a as N}from"./index-RocX-qI1.js";import{N as b}from"./NoData-DUSqYxq7.js";import{P as y}from"./index-DqcdTcgm.js";import{S as v}from"./index-D-WNZDT8.js";import"./proxy-LBo0XEy0.js";import"./index-DLTftulB.js";import"./motion-DYW1fBvL.js";import"./index-CqxRxLoj.js";import"./index-DYQH-41S.js";import"./Portal-Bk9kCZLz.js";import"./useId-BXEVvoiT.js";import"./isMobile-B4CO7CVJ.js";import"./roundedArrow-IL0Hi0Qw.js";import"./zoom-C5LY8eIZ.js";const S=({item:t})=>{const[s,r]=o.useState(!1),l=[{label:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-[14px] text-lg text-slate-500",children:[e.jsx(N,{}),"환불하기"]}),onClick:()=>{console.log("환불하기")}}];return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"flex flex-col gap-2 py-5 border-b border-slate-100",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center",children:[e.jsx("h5",{className:"col-span-1 text-slate-700 font-semibold text-lg",children:"거래 일시"}),e.jsx("p",{className:"col-span-2 text-slate-600 text-lg",children:j(t.usedAt).format("YYYY-MM-DD HH:mm:ss")}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"button",className:"text-slate-500 text-xl",onClick:()=>r(!0),children:e.jsx(f,{})})})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center",children:[e.jsx("h5",{className:"col-span-1 text-slate-700 font-semibold text-lg",children:"거래 구분"}),e.jsx("p",{className:`col-span-3 text-base px-2 rounded-sm w-fit flex items-center justify-center
            ${t.refund?"bg-[rgba(253,180,161,0.3)] text-secondary3":"bg-[rgba(165,238,254,0.3)] text-primary"}`,children:t.refund?"환불":"결제"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center",children:[e.jsx("h5",{className:"col-span-1 text-slate-700 font-semibold text-lg",children:"내역"}),e.jsx("p",{className:"col-span-3 text-slate-600 text-lg",children:t.title})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center",children:[e.jsx("h5",{className:"col-span-1 text-slate-700 font-semibold text-lg",children:"결제 금액"}),e.jsxs("p",{className:"col-span-3 text-slate-600 text-lg",children:[t.amount.toLocaleString(),"원"]})]})]}),e.jsx(u,{open:s,onClose:()=>r(!1),actions:l})]})},F=()=>{const t=p("accessToken"),[s,r]=o.useState({totalAmount:0,pointDetails:[]}),[l,x]=o.useState(!1),m=async()=>{var a;const i="/api/business/my-page/used-point";x(!0);try{const c=(await d.get(i,{headers:{Authorization:`Bearer ${t}`}})).data;return console.log("포인트 조회",c),r(c.data),c}catch(n){return d.isAxiosError(n)&&console.log("포인트 조회 오류",(a=n.response)==null?void 0:a.data),null}finally{x(!1)}};return o.useEffect(()=>{m()},[]),e.jsxs("div",{children:[e.jsxs("section",{className:"flex flex-col gap-2 px-4 py-5 border-b border-slate-200",children:[e.jsxs("div",{className:"flex items-center gap-2 ",children:[e.jsx("h3",{className:"text-2xl font-semibold text-slate-700",children:"사용된 포인트"}),e.jsx(y,{placement:"left",content:"결제된 포인트의 합계입니다. (환불된 포인트는 집계되지 않습니다)",trigger:"hover",children:e.jsx("span",{children:e.jsx(g,{className:"text-lg text-slate-300 cursor-help"})})})]}),e.jsx("div",{children:e.jsxs("p",{className:"text-4xl text-primary",children:[(s==null?void 0:s.totalAmount.toLocaleString())??"0","원"]})}),e.jsx("div",{children:e.jsxs("p",{className:"bg-slate-100 rounded-lg p-5 text-sm text-slate-500",children:["포인트 결제가 잘 못 되었을 경우,",e.jsx("br",{})," 포인트 결제일부터"," ",e.jsx("span",{className:"text-primary",children:"1일 이내"})," 환불, 변경 가능합니다."]})})]}),e.jsx("section",{className:"px-4",children:e.jsx(v,{spinning:l,children:e.jsxs("ul",{className:"py-5",children:[!l&&(s==null?void 0:s.pointDetails.length)>0&&(s==null?void 0:s.pointDetails.map((i,a)=>e.jsx(S,{item:i},a))),!l&&((s==null?void 0:s.pointDetails.length)===0||!(s!=null&&s.pointDetails))&&e.jsx(b,{icon:e.jsx(h,{}),content:"포인트 결제 내역이 없습니다"})]})})})]})};export{F as default};
