import{h as u,g,r as a,j as e,m as h}from"./index-LV_9s5-1.js";import{R as j}from"./ReviewItem-DCB02svx.js";import{S}from"./StrfInfo-BVxyddvS.js";import{L as I}from"./index-CdvDs16G.js";import{S as v}from"./index-Bm7FllQO.js";import"./index-Ds3yrZWO.js";import"./BottomSheet-CXhYr7pz.js";import"./ReviewImage-MuHt47Cr.js";import"./swiper-react-Ck51p-jd.js";import"./index-CoXfSCcE.js";import"./index-BsJ66pFJ.js";import"./index-DN57V0sg.js";import"./index-Btv3waz5.js";import"./Portal-CiuFLH_K.js";import"./useId-LGEjO-HJ.js";import"./motion-D8x5Mwwf.js";import"./roundedArrow-D1YheW33.js";import"./zoom-Bx4l_5D1.js";const F=()=>{const[c]=u(),m=Number(c.get("strfId")),l=g("accessToken"),[s,p]=a.useState([]),[n,x]=a.useState(1),[f,o]=a.useState(!1),d=async()=>{const i="/api/business/review/all";o(!0);try{const r=(await h.get(`${i}?start_idx=${n}&page_size=10`,{headers:{Authorization:`Bearer ${l}`}})).data;return console.log("리뷰 목록 조회",r),r&&(p(r),x(n+10)),o(!1),r}catch(t){return console.log("리뷰 목록 조회",t),o(!1),null}};return a.useEffect(()=>{d()},[]),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(S,{}),e.jsx(v,{spinning:f,children:e.jsx("section",{className:"flex flex-col gap-10 pb-10",children:s.length>0?s==null?void 0:s.map((i,t)=>e.jsx(j,{item:i,strfId:m},t)):e.jsxs("div",{className:"flex flex-col gap-5 items-center justify-center text-slate-300 py-12",children:[e.jsx(I,{className:"text-7xl"}),e.jsx("p",{className:"text-2xl",children:"리뷰가 없습니다"})]})})})]})};export{F as default};
