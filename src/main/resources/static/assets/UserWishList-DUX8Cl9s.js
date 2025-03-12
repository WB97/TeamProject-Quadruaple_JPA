import{j as e,T as f,r as l,u as j,a9 as k,a2 as C,a3 as T,a4 as A,B as I}from"./index-LV_9s5-1.js";import{d as S}from"./dayjs.min-DjCP-Jtp.js";import{j as h}from"./jwt-Cwbp2SV6.js";import{R as L}from"./index-BsJ66pFJ.js";/* empty css                    */import{T as $}from"./index-BU7qHnut.js";import"./index-DN57V0sg.js";import"./index-Btv3waz5.js";import"./Portal-CiuFLH_K.js";import"./useId-LGEjO-HJ.js";import"./motion-D8x5Mwwf.js";import"./roundedArrow-D1YheW33.js";import"./zoom-Bx4l_5D1.js";import"./EllipsisOutlined-DpMXc0VL.js";import"./Overflow-DLIyATPg.js";const D=({setShowFilter:t,setOrderType:a})=>e.jsxs("div",{className:"max-w-[768px] w-full h-screen fixed top-0 left-1/2 -translate-x-1/2 bg-white z-10",children:[e.jsx(f,{icon:"",title:"필터",onClick:()=>t(!1)}),e.jsxs("dl",{className:"text-slate-700 py-6 px-4",children:[e.jsx("dt",{className:"text-base font-semibold py-2",children:"정렬"}),e.jsx("dd",{className:"text-sm py-3 border-b-[1px] border-slate-100 cursor-pointer",onClick:()=>{a("ratingAvg"),t(!1)},children:"평점순"}),e.jsx("dd",{className:"text-sm py-3 border-b-[1px] border-slate-100 cursor-pointer",onClick:()=>{a("ratingCnt"),t(!1)},children:"리뷰순"}),e.jsx("dd",{className:"text-sm py-3 cursor-pointer",onClick:()=>{a("likeCnt"),t(!1)},children:"좋아요순"})]})]}),o=({category:t})=>{const[a,c]=l.useState(0),[d,p]=l.useState([]);l.useState(!0);const[u,m]=l.useState(!1),[n,g]=l.useState("ratingAvg"),b=j(),y=async s=>{const r={strfId:s.strfId};try{const i=await h.post("/api/wish-list",{...r});c(0),await x(0)}catch(i){console.log("error",i)}},x=async(s=a)=>{try{const r=await h.get(`/api/wish-list?start_idx=${s}&orderType=${n}&category=${t}`);p(i=>s===0?r.data.data:[...i,...r.data.data]),r.data.data&&c(s+10)}catch(r){console.log("찜목록 불러오기 실패",r)}};l.useEffect(()=>{c(0),x()},[t,n]);const N=()=>{x(a),console.log("Current startIndex:",a)},v={TOUR:"관광지",FEST:"축제",STAY:"숙소",RESTAUR:"맛집"},w={ratingAvg:"평점순",ratingCnt:"리뷰순",likeCnt:"좋아요순"};return e.jsxs("div",{children:[u&&e.jsx(D,{setShowFilter:m,setOrderType:g}),e.jsxs("div",{className:"flex justify-between py-[14px] px-4 border-b-[1px] border-slate-100 ",children:[e.jsxs("p",{className:"text-sm font-semibold text-slate-700",children:["총 ",d.length,"개"]}),e.jsxs("button",{className:"flex items-center gap-1 text-slate-500",onClick:()=>m(!0),children:[w[n]," ",e.jsx(k,{})]})]}),e.jsxs("div",{className:"px-4 py-6",children:[e.jsx("ul",{className:"w-full flex flex-col gap-3 mb-[30px]",children:d.map((s,r)=>e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",onClick:()=>b(`/contents/index?strfId=${s.strfId}`),children:[e.jsxs("div",{className:"w-32 min-w-32 aspect-square bg-slate-200 rounded-lg overflow-hidden relative",children:[e.jsx("img",{src:`${C}/${s.strfId}/${s.strfPic}`,alt:s.title,className:"w-full h-full object-cover"}),e.jsx(T,{className:"text-secondary3 text-xl absolute top-2 right-2",onClick:i=>{i.stopPropagation(),y(s),c(0),p([])}})]}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-lg font-medium text-slate-700",children:s.strfTitle})}),e.jsx("div",{children:e.jsxs("p",{className:"text-sm text-slate-500",children:[v[s.category]||s.category," ·"," ",s.locationName]})}),e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(L,{disabled:!0,allowHalf:!0,value:s.ratingAvg,className:"flex items-center custom-star-wish custom-star"}),e.jsxs("p",{className:"text-sm text-slate-500",children:["(",s.ratingCnt.toLocaleString(),")"]})]}),e.jsxs("div",{className:"flex gap-1 items-center text-sm",children:[e.jsx(A,{className:"text-slate-400 text-lg"}),e.jsx("p",{className:"text-slate-500",children:s.wishCnt.toLocaleString()})]})]})]},r))}),e.jsx("div",{className:"px-[32px] pb-[40px] flex items-center justify-center",children:e.jsx(I,{variant:"outlined",onClick:N,className:"text-slate-500 text-base !h-auto py-2 px-5 border-1 border-slate-200 rounded-full",children:"더보기"})})]})]})},R=S().format("YYYY-MM-DD"),J=()=>{const t=j();l.useState(R);const a=c=>{console.log(c)};return e.jsxs("div",{children:[e.jsx(f,{icon:"back",onClick:()=>{t(-1)},title:"찜 목록"}),e.jsx("div",{className:"",children:e.jsx("div",{children:e.jsx($,{defaultActiveKey:"1",items:[{key:"1",label:"전체",children:e.jsx(o,{category:"전체"})},{key:"2",label:"관광지",children:e.jsx(o,{category:"관광지"})},{key:"3",label:"숙소",children:e.jsx(o,{category:"숙소"})},{key:"4",label:"맛집",children:e.jsx(o,{category:"맛집"})},{key:"5",label:"축제",children:e.jsx(o,{category:"축제"})}],onChange:a,className:"custom-tab border-t-[10px] border-slate-100"})})})]})};export{J as default};
