import{f as y,m as S,a as N,r as a,g as E,Q as _,M as k,Y as C,u as L,J as n,j as e,L as l,ab as A,n as R,ac as T,ad as D}from"./index-BimvysYt.js";import{F as B}from"./index-BPQRvUZ9.js";import{u as I}from"./userAtom-DU7sATRD.js";import{L as F}from"./index-CKWfeYRa.js";import{s as i}from"./searchAtom-D6yePTRh.js";import{e as M}from"./eventsource-Cd5SwtWz.js";const P=y({key:"resetSearchData",get:({get:r})=>r(i),set:({set:r})=>{r(i,{searchWord:"",searchData:[],start_idx:0,category:0,amenityId:[],orderType:0,more:!0,count:0})}}),Q=S.memo(()=>{const x=N().pathname;a.useState(!1);const c=E("accessToken");_(I),k(i);const h=C(P),u=L(),t=a.useRef(null),f=M.EventSourcePolyfill||NativeEventSource,[d,p]=a.useState(!1),g=()=>{const s="/api/chat-notice";t.current=new f(s,{headers:{Authorization:`Bearer ${c}`,Connetction:"keep-alive",Accept:"text/event-stream","Cache-Control":"no-cache"},withCredentials:!0}),t.current.onmessage=o=>{console.log("새로운 알림:",o.data)},t.current.addEventListener("exist unread notice",o=>{console.log("안 읽은 알림 존재:",o.data),p(!0)}),t.current.onerror=async()=>{var o;(o=t.current)==null||o.close(),setTimeout(fetchSSE,3e3)},t.current.onopen=()=>{}};a.useEffect(()=>{if(c)return t.current&&(console.log("기존 SSE 연결 닫기"),eventSourceRef.current.close()),g(),()=>{var s;(s=t.current)==null||s.close()}},[t]);const[v,z]=n.useMessage(),[b,j]=a.useState(!1);a.useEffect(()=>{const s=()=>{j(window.scrollY>100)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const m=()=>{console.log("info 작동"),v.open({type:"info",content:"로그인이 필요한 서비스입니다.",style:{marginTop:"20vh"}})},w=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx("div",{children:e.jsxs("div",{className:"flex max-w-[768px] w-full h-auto fixed bottom-0 left-1/2 -translate-x-1/2 bg-white z-50 shadow-[0px_-4px_8px_0px_rgba(99,99,99,0.05)]",children:[e.jsxs(l,{to:"/search/before",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(B,{className:"text-2xl"}),"검색"]}),e.jsxs("button",{type:"button",onClick:()=>{c?u("/search/location"):(m(),n.error("로그인 후 이용 가능한 서비스 입니다"))},className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5 text-sm",children:[e.jsx(F,{className:"text-2xl"}),"일정"]}),e.jsxs(l,{to:"/",className:"bg-primary text-white w-20 h-20 rounded-full flex flex-col justify-center items-center gap-1.5 relative bottom-5 text-sm",onClick:()=>{h()},children:[e.jsx(A,{className:"text-2xl"}),"홈"]}),e.jsxs(l,{to:"/scheduleboard",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5 text-sm",children:[e.jsx(R,{className:"text-2xl"}),"여행기"]}),e.jsxs("button",{type:"button",className:"relative text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5 text-sm",onClick:()=>{c?u("/chat"):(m(),n.error("로그인 후 이용 가능한 서비스 입니다"))},children:[e.jsx(T,{className:"text-2xl"}),"채팅",d&&e.jsx("div",{className:"absolute top-3 right-1/3 w-2 h-2 bg-primary rounded-full"})]}),x==="/search/strf"&&e.jsx("div",{className:`absolute bottom-[120px] right-0 -translate-x-1/2 transition-all duration-300 ${b?"opacity-100 visible":"opacity-0 invisible"}`,children:e.jsx("button",{type:"button",className:"bg-primary text-white rounded-full p-[10px] text-[24px] shadow-lg hover:bg-primary/90 transition-colors",onClick:w,children:e.jsx(D,{})})})]})})});export{Q as D};
