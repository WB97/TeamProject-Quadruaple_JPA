import{r as a,j as e,aG as g,am as b,B as p,g as w,h as j,m as v,n as y,a2 as I,a3 as $,a4 as h,Z as S,aa as C}from"./index-LV_9s5-1.js";import{j as o}from"./jwt-Cwbp2SV6.js";import{h as P,d as R,F as A}from"./match-5XfzEgGS.js";import{p as f}from"./index-CoXfSCcE.js";import{a as k}from"./index-DdrXLXVe.js";import{L as m}from"./index-CdvDs16G.js";import{R as E}from"./ReviewImage-MuHt47Cr.js";import"./TitleHeader-6cQeiO5x.js";import{R as T}from"./index-BsJ66pFJ.js";import{a as F}from"./index-Bwnc9PCC.js";/* empty css                    */import{T as L}from"./index-BU7qHnut.js";import"./index-D6sixpAC.js";import"./index-ChJ6LYmi.js";import"./index-DXJ_gz2Q.js";import"./index-C_ByFtLp.js";import"./swiper-react-Ck51p-jd.js";import"./index-Ds3yrZWO.js";import"./index-CF7lad59.js";import"./index-DN57V0sg.js";import"./index-Btv3waz5.js";import"./Portal-CiuFLH_K.js";import"./useId-LGEjO-HJ.js";import"./motion-D8x5Mwwf.js";import"./roundedArrow-D1YheW33.js";import"./zoom-Bx4l_5D1.js";import"./EllipsisOutlined-DpMXc0VL.js";import"./Overflow-DLIyATPg.js";const _=({strfId:i})=>{const[s,t]=a.useState(),x=async()=>{try{const l=await o.get(`/api/detail/amenity?strf_id=${i}&category=숙소`);t(l.data.data),console.log("편의시설 조회",l.data.data)}catch(l){console.log("편의시설 조회",l)}};return a.useEffect(()=>{x()},[]),e.jsxs("div",{className:"px-4 my-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl",children:"편의시설 및 서비스"}),e.jsxs("button",{className:"flex items-center gap-[6px] text-sm text-slate-400",children:["더보기 ",e.jsx(g,{className:"text-xl"})]})]}),e.jsx("ul",{className:"grid grid-flow-col gap-4 overflow-hidden w-full h-[90px] mt-3",children:s==null?void 0:s.map(l=>e.jsxs("li",{className:"min-w-[57px] flex flex-col items-center justify-center gap-[6px] text-slate-700",children:[e.jsx("i",{className:"text-2xl ",children:P(l.amenityId??0)}),e.jsx("p",{children:l.amenityTitle})]},l.amenityId))})]})},M=({strfId:i})=>{const[s,t]=a.useState(),x=async()=>{try{const l=await o.get(`/api/detail/menu?strf_id=${i}`);t(l.data.data),console.log("상품조회-메뉴",l.data.data)}catch(l){console.log("상품조회-메뉴",l)}};return a.useEffect(()=>{x()},[]),e.jsxs("div",{className:"mt-3 ",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("button",{className:"w-full border border-slate-300 rounded-lg py-3 text-base text-slate-700 mb-3",children:"01.22(수)~01.23(목)"}),e.jsx("button",{className:"w-full border border-slate-300 rounded-lg py-3 text-base text-slate-700 mb-3",children:"성인 2"})]}),e.jsx("ul",{children:s==null?void 0:s.map(l=>e.jsxs("li",{className:"py-5 px-4 border-b-[10px] border-slate-100 last:border-b-0",children:[e.jsx("i",{children:e.jsx("img",{src:`${b}/${i}/menu/${l==null?void 0:l.menuPic}`,alt:l==null?void 0:l.menuTitle,className:"w-full aspect-[2/1] object-cover rounded-lg"})}),e.jsxs("div",{className:"my-3",children:[e.jsx("h2",{className:"text-2xl text-slate-700 font-semibold",children:l.menuTitle}),e.jsxs("p",{className:"flex items-center gap-[6px] text-slate-500 text-sm my-1",children:[e.jsx(f,{className:"text-base"}),"입실 ",l.openCheckIn.replace(/:\d{2}$/,"")," - 퇴실",l.closeCheckIn.replace(/:\d{2}$/,"")]}),e.jsxs("p",{className:"flex items-center gap-[6px] text-slate-500 text-sm ",children:[e.jsx(k,{className:"text-base"}),"기준 ",l.recomCapacity,"인 / 최대 ",l.maxCapacity,"인"]}),e.jsxs("div",{className:"w-full border-t border-slate-100 mt-3 pt-3 flex justify-between items-center",children:[e.jsxs("span",{className:"text-xl text-slate-700 font-semibold",children:[l.menuPrice.toLocaleString(),"원"]}),e.jsx(p,{type:"primary",className:"text-base py-2 px-4 h-auto rounded-lg",children:"예약하기"})]})]})]},l.menuId))})]})},B=()=>{w("accessToken");const[i,s]=a.useState(null),[t,x]=a.useState([]),[l,c]=a.useState(0),[u]=j(),n=u.get("strfId");a.useEffect(()=>{console.log("리뷰 목록:",t)},[t]),a.useEffect(()=>{console.log("reviewIndex:",l)},[l]);const N=a.useCallback(async()=>{console.log("지금 보내는 start_idx",l);try{const r=await v.get(`/api/review?strf_id=${n}&start_idx=${l}`);console.log("리뷰 불러오기:",r.data),x([...t,...r.data])}catch(r){console.log("리뷰 불러오기:",r)}},[l,t,n]);return a.useEffect(()=>{N()},[l]),e.jsxs("div",{children:[e.jsx("p",{}),t?e.jsx("ul",{children:t==null?void 0:t.map((r,d)=>e.jsxs("li",{className:"flex flex-col gap-[20px] py-[30px] border-b border-slate-200",children:[e.jsxs("div",{className:"flex flex-col gap-[10px]",children:[e.jsxs("div",{className:"flex gap-[15px] items-center justify-between",children:[e.jsxs("div",{className:"flex gap-[10px] items-center",children:[e.jsx("div",{className:"w-[50px] h-[50px] rounded-full overflow-hidden",children:e.jsx("img",{src:`${y}/${r.writerUserId}/${r.writerUserPic}`,alt:"pofilePic",className:"w-full h-full object-cover"})}),e.jsx("p",{className:"font-semibold text-slate-700 text-[18px]",children:r.writerUserName})]}),e.jsxs("div",{className:"flex gap-[10px] items-center",children:[e.jsx(m,{className:"text-slate-300"}),e.jsx("p",{className:"font-bold text-[14px] text-slate-500",children:r.userWriteReviewCnt})]})]}),e.jsxs("div",{className:"flex gap-[15px] items-center justify-between",children:[e.jsxs("div",{className:"flex gap-[5px]",children:[e.jsx(T,{disabled:!0,count:5,value:r.rating}),e.jsx("p",{className:"font-semibold text-[14px] text-slate-700",children:r.rating})]}),e.jsx("div",{children:e.jsx("p",{className:"text-[14px] text-slate-500",children:r.reviewWriteDate})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:d===i?"":"line-clamp-3",children:r.content}),e.jsx("button",{type:"button",className:"text-primary p-0 text-[16px] font-semibold",onClick:()=>{s(d)},children:"더보기"})]}),e.jsx(E,{imgArr:r.reviewPic,reviewId:r.reviewId})]},d))}):e.jsx("ul",{children:e.jsx("li",{className:"flex flex-col gap-[20px] py-[30px] border-b border-slate-200"})}),t.length>0?e.jsx("button",{type:"button",className:"w-full py-[20px] rounded-lg border border-slate-300",onClick:()=>c(r=>r+10),children:"리뷰 더보기"}):e.jsxs("div",{className:"flex flex-col gap-[20px] justify-center items-center",children:[e.jsx("i",{className:"text-slate-300 text-[100px]",children:e.jsx(m,{})}),e.jsx("p",{className:"text-slate-400 text-[20px]",children:"리뷰가 없습니다."})]})]})},U=a.memo(B),H=()=>e.jsxs("div",{children:[e.jsxs("section",{className:"my-6",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl",children:"소개"}),e.jsx("div",{children:"홀리데이 인 광주호텔은 광주공항, 광주송정 KTX역, 고속버스터미널, 지하철역 등의 주요 교통 요지에 매우 밀접하게 자리해 지역 관광 명소뿐만 아니라 근교 관광 도시 방문에 매우 편리합니다. 또한 광주 MICE의 중심지 김대중컨벤션센터 바로 건너편에 위치해 있어 비즈니스와 여가 모두에 적합한 광주 유일의 인터내셔널 브랜드 호텔입니다.호텔 외관을 아름답게 수놓고 있는 조명의 거장 Alian Guilhot의 조명 작품과 로비 가득 전시된 세계적"}),e.jsx(p,{children:"펼치기"})]}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("section",{className:"my-6",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl",children:"위치"}),e.jsx("div",{children:e.jsxs("dl",{children:[e.jsx("dt",{children:"주소"}),e.jsx("dd",{children:"(61955) 광주광역시 서구 상무누리로 55 "}),e.jsx("dt",{children:"전화"}),e.jsx("dd",{children:"062-610-7000"}),e.jsx("dt",{children:"사업자번호"}),e.jsx("dd",{children:"410-86-60209"})]})})]})]}),K=({strfId:i,contentData:s})=>e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("img",{src:`${I}/${i}/${s==null?void 0:s.strfPics[0].strfPic}`,alt:(s==null?void 0:s.strfTitle)||""})}),e.jsxs("div",{className:"px-4 py-3 flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-slate-500 -mb-[6px]",children:R(s==null?void 0:s.category)}),e.jsx("h2",{className:"text-2xl text-slate-700 font-semibold",children:s==null?void 0:s.strfTitle}),e.jsxs("p",{className:"text-sm text-slate-500 flex items-center gap-[6px]",children:[e.jsx(A,{className:" text-slate-300"}),s==null?void 0:s.address]}),e.jsxs("ul",{className:"flex items-center gap-[6px]",children:[e.jsx("li",{children:e.jsx(F,{className:"text-primary text-base"})}),e.jsx("li",{className:"text-sm text-slate-700 font-semibold",children:s==null?void 0:s.ratingAvg}),e.jsxs("li",{className:"text-sm text-primary underline",children:["리뷰 ",s==null?void 0:s.reviewCnt.toLocaleString(),"개"]}),e.jsx("li",{className:"text-slate-300 text-base mx-1",children:"|"}),e.jsx("li",{className:"text-lg text-slate-400",children:s!=null&&s.wishIn?e.jsx($,{className:"text-secondary3"}):e.jsx(h,{})}),e.jsx("li",{className:"text-slate-500 text-sm",children:s==null?void 0:s.wishCnt})]}),e.jsx("div",{children:e.jsxs("p",{className:"flex items-center gap-[6px] text-slate-500",children:[e.jsx(f,{className:"text-base"}),"매일 00:00 ~ 24:00"]})})]})]}),G=({scrollEvent:i=!0})=>{const[s,t]=a.useState(!1);return a.useEffect(()=>{if(!i){t(!1);return}const x=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}},[i]),e.jsx("div",{className:`max-w-[768px] w-full px-4  fixed top-0 left-1/2 -translate-x-1/2 z-10
        transition-colors duration-300 ${i?s?"bg-white text-slate-700":"bg-transparent text-white":"bg-transparent"}`,children:e.jsxs("div",{className:"flex justify-between items-center h-[60px]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(S,{className:"text-3xl "}),e.jsx("h2",{className:"font-semibold text-xl",children:"홀리데이 인 광주 호텔"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(h,{className:" text-2xl"}),e.jsx(C,{className:" text-2xl"})]})]})})},ue=()=>{const[i,s]=a.useState(null),[t]=j(),x=parseInt(t.get("strfId")||"0"),l=async()=>{try{const c=await o.get(`/api/detail/member?&strf_id=${x}`);c.data.data,console.log("상품조회-회원",c.data.data),s(c.data.data)}catch(c){console.log("상품조회-회원",c)}};return a.useEffect(()=>{l()},[]),e.jsxs("div",{children:[e.jsx(G,{}),e.jsx("section",{children:i&&e.jsx(K,{strfId:x,contentData:i})}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsx("section",{children:e.jsx(M,{strfId:x})}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsx("section",{children:e.jsx(_,{strfId:x})}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsx("section",{children:e.jsx(L,{defaultActiveKey:"1",centered:!0,className:"custom-strf-tabs",items:[{label:"상세정보",key:"1",children:e.jsx(e.Fragment,{children:e.jsx(H,{})})},{label:"리뷰",key:"2",children:e.jsx(U,{})}]})})]})};export{ue as default};
