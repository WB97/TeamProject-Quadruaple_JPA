import{r as j,g as V,b as P,u as ne,Q as K,j as s,U as ce,I as O,a7 as ie,N as m,c as y,s as de,a6 as T,aq as ue}from"./index-CXgPt5JN.js";import{s as U}from"./strfAtom-C6D7cmuP.js";import{d as A}from"./dayjs.min-CM77hzp1.js";import{f as me}from"./index-CDNxKOHP.js";import{f as fe,g as _,h as L,e as he,c as pe,i as ge,t as xe}from"./match-YbLQ2-HI.js";import{k as $e,T as q}from"./koreaAreaCode-Dby-dbCv.js";import{S as v}from"./index-CLs1nMTP.js";import{S as Y}from"./index-DfBx3HSs.js";import{P as ye}from"./index-CuHp7-Vg.js";import{c as je}from"./customParseFormat-BPyA_Wd-.js";import{S as be}from"./StrfInfo-DuVrGspu.js";import"./index-BHcAlC-o.js";import"./index-kMgS0FzX.js";import"./index-D0c2BEnw.js";import"./index-BQ3DKWO0.js";import"./index-DhnFfT0_.js";import"./PurePanel-MbSoJSma.js";import"./index-Bh-qSWfm.js";import"./index-DVNH3El3.js";import"./Portal-DyoJ0XAQ.js";import"./useId-CFvmNKkm.js";import"./isMobile-B4CO7CVJ.js";import"./Overflow-BKt1X9tG.js";import"./useIcons-CHwkI6VR.js";import"./CheckOutlined-Bh0Z4Jmq.js";import"./DownOutlined-BvJPoEyK.js";import"./roundedArrow-BJ1xfU1K.js";import"./useLocale-XAzq5U5g.js";import"./motion-COLDN99j.js";import"./index-g46somhf.js";import"./zoom-DXKB7aGh.js";const Ce=({title:$,type:a})=>{const f=V("accessToken"),x=V("user"),d=x.strfDtos[0].busiNum,[S]=P(),u=Number(S.get("strfId")),N=S.get("category"),H=ne(),w=()=>{H(`/business/store/edit?strfId=${u}&category=${N}&edit=${a}`)},[e,g]=K(U),[h,z]=j.useState(!1),[B,c]=j.useState(!1),[r,i]=j.useState(null),[k,D]=j.useState("weekly");j.useEffect(()=>{console.log("value",r)},[r]);const[I,E]=j.useState(""),Q=t=>{var l;((l=e.amenity)==null?void 0:l.includes(t))===!0?g(o=>({...o,amenity:o.amenity.filter(n=>n!==t)})):g(o=>({...o,amenity:[...e.amenity,t]}))},C=async()=>{const t="/api/detail/member";c(!0);try{const o=(await y.get(`${t}?strf_id=${u}`,{headers:{Authorization:`Bearer ${f}`}})).data;if(o){const n=o.data.tell.split("-");g(p=>({...p,...o.data,areaCode:n[0],tell:`${n[1]}-${n[2]}`})),de("user",{...x,strfDtos:[{...x.strfDtos[0],title:o.data.strfTitle}]}),c(!1)}return o}catch(l){return c(!1),console.log("상품조회",l),null}},M=async()=>{const t="/api/detail/title",l={strfId:u,busiNum:d,title:r};console.log("payload",l),c(!0);try{const n=(await y.patch(`${t}?strfId=${u}&title=${r}&busiNum=${d}`,l,{headers:{Authorization:`Bearer ${f}`}})).data;return console.log(n),n&&(C(),c(!1),g({...e,strfTitle:r}),m.success("업체명 변경이 변경되었습니다")),n}catch(o){return console.log("이름 변경",o),c(!1),m.error("업체명 변경에 실패했습니다."),null}},G=async()=>{const t="/api/detail/state",l={strfId:u,busiNum:d,state:r};console.log("payload",l),c(!0);try{const n=(await y.patch(`${t}?strfId=${u}&state=${r}&busiNum=${d}`,l,{headers:{Authorization:`Bearer ${f}`}})).data;return console.log("영업 상태 변경",n),n.code==="200 성공"&&(c(!1),C(),g(p=>({...p,state:r})),m.success("영업 상태 변경에 성공했습니다.")),n}catch(o){return console.log("영업 상태 변경",o),m.error("영업 상태 변경에 실패했습니다."),c(!1),null}},J=async()=>{const t="/api/detail/tell";c(!0);const l={strfId:u,tell:`${I}-${r}`,busiNum:d};try{const n=(await y.patch(`${t}?strfId=${u}&tell=${I}-${r}&busiNum=${d}`,l,{headers:{Authorization:`Bearer ${f}`}})).data;return n.code&&(c(!1),C(),g({...e,areaCode:I,tell:r.split("-",1)}),m.success("전화번호 변경이 완료되었습니다")),console.log("전화번호 변경",n),n}catch(o){return c(!1),m.error("전화번호 변경에 실패하였습니다"),console.log("전화번호 변경",o),null}},W=async()=>{const t="/api/detail/detail";c(!0);const l={strfId:u,detail:r,busiNum:d};try{const n=(await y.patch(`${t}?strfId=${u}&detail=${r}&busiNum=${d}`,l,{headers:{Authorization:`Bearer ${f}`}})).data;return n.code&&(c(!1),C(),g(p=>({...p,detail:r})),m.success("업체 소개 변경이 완료되었습니다")),console.log("업체소개 변경",n),n}catch(o){return c(!1),m.error("업체소개 변경에 실패하였습니다"),console.log("업체소개 변경",o),null}},X=async()=>{const t="/api/detail/amenity";c(!0);const l={strfId:u,busiNum:d,category:pe(N),ameniPoints:e.amenity},o=e.amenity.map(n=>`ameniPoints=${n}`);console.log("보낼 파라메터",o.join("&"));try{const p=(await y.patch(`${t}?strfId=${u}&busiNum=${d}&category=${N}&${o.join("&")}`,l,{headers:{Authorization:`Bearer ${f}`}})).data;return p.code&&(c(!1),C(),m.success("편의시설 변경이 완료되었습니다")),console.log("편의시설 변경",p),p}catch(n){return c(!1),m.error("편의시설 변경에 실패하였습니다"),console.log("편의시설 변경",n),null}},Z=async()=>{const t="/api/detail/time",l={strfId:u,busiNum:d,openCheckIn:r[0],closeCheckOut:r[1]};console.log("payload",l),c(!0);try{const n=(await y.patch(`${t}?strfId=${u}&busiNum=${d}&openCheckIn=${r[0]}&closeCheckOut=${r[1]}`,l,{headers:{Authorization:`Bearer ${f}`}})).data;return console.log("체크시간 변경",n),n&&(C(),c(!1),g({...e,strfTitle:r[0],closeCheck:r[1]}),m.success("체크시간 변경이 변경되었습니다")),n}catch(o){return console.log("체크시간 변경",o),c(!1),m.error("체크시간 변경에 실패했습니다."),null}},ee=async()=>{const t="/api/detail/fest/time",l={strfId:u,busiNum:d,startAt:e.startAt,endAt:e.endAt};console.log("payload",l),c(!0);try{const n=(await y.put(`${t}?strfId=${u}&busiNum=${d}&startAt=${e.startAt}&endAt=${e.endAt}`,l,{headers:{Authorization:`Bearer ${f}`}})).data;return console.log("기간 변경",n),n&&(C(),c(!1),g({...e,strfTitle:r}),m.success("기간이 변경되었습니다")),n}catch(o){return console.log("기간 변경",o),c(!1),m.error("기간 변경에 실패했습니다."),null}},te=async()=>{const t="/api/detail/rest",l=r.map(p=>ge(p)),o={strfId:u,busiNum:d,restDates:l};console.log("payload",o),c(!0);const n=l.map(p=>`restDates=${p}`).join("&");console.log("restDatesPara",n);try{const R=(await y.patch(`${t}?strfId=${u}&busiNum=${d}&${n}`,o,{headers:{Authorization:`Bearer ${f}`}})).data;return console.log("휴무일 변경",R),R&&(C(),c(!1),g(oe=>({...oe,restDate:xe(r)})),m.success("휴무일이 변경되었습니다")),R}catch(p){return console.log("휴무일 변경",p),c(!1),m.error("휴무일 변경에 실패했습니다."),null}},se=()=>{if(a==="strfPic"){w();return}if(a==="address"){w();return}z(!h),h===!1&&(a==="title"&&i(e.strfTitle),a==="tell"&&i(e.tell),a==="tell"&&E(e.areaCode??""),a==="detail"&&i(e.detail),a==="amenity"&&i(e.amenity),a==="state"&&i(e.state),a==="duration"&&i(`${e.startAt}~${e.endAt}`),a==="checkTime"&&i([e.openCheck,e.closeCheck]),a==="restDate"&&i(e.restDate.map(t=>L(t)))),h===!0&&(a==="title"&&(r===e.strfTitle?m.warning("동일한 이름으로 수정을 취소합니다"):(r==null?void 0:r.trim())!==""&&M()),a==="state"&&G(),a==="tell"&&I!==""&&r!==""&&J(),a==="detail"&&W(),a==="amenity"&&X(),a==="duration"&&ee(),a==="checkTime"&&Z(),a==="restDate"&&te())},ae=[{value:0,label:"영업중"},{value:1,label:"휴업"},{value:2,label:"폐업"}],re=s.jsx(v,{defaultValue:e.areaCode,onChange:t=>{E(t)},children:$e.map(t=>s.jsx(v.Option,{value:t.code,children:t.code},t.code))}),le=t=>{const o=t.replace(/[^\d]/g,"").slice(0,7);return o.length>3?`${o.slice(0,3)}-${o.slice(3)}`:o},F={frequency:[{label:"없음",value:"none"},{label:"매주",value:"weekly"}],day:[{label:"월",value:"월"},{label:"화",value:"화"},{label:"수",value:"수"},{label:"목",value:"목"},{label:"금",value:"금"},{label:"토",value:"토"},{label:"일",value:"일"}]};return j.useEffect(()=>{if(a==="tell"&&typeof e.tell=="string"){const t=e.tell?e.tell.split("-"):["000","0000","0000"];E(t[0]),i(`${t[1]}-${t[2]}`)}a==="detail"&&typeof e.detail=="string"&&i(e.detail)},[e,a]),s.jsxs("section",{className:"px-7 pt-4 pb-5 flex flex-col gap-2 border-b-2 border-slate-100",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{className:"text-xl font-semibold text-slate-700",children:$}),s.jsxs("button",{type:"button",className:"flex items-center gap-1 text-primary font-semibold hover:text-primary2 transition-all duration-300",onClick:se,children:[!h&&s.jsxs(s.Fragment,{children:[s.jsx(me,{}),"변경"]}),h&&s.jsx(s.Fragment,{children:"완료"})]})]}),s.jsxs(Y,{spinning:B,children:[!h&&s.jsxs("div",{className:"text-lg font-medium text-slate-500 px-2 py-1",children:[a==="title"&&e.strfTitle,a==="state"&&fe(e.state),a==="tell"&&(e.areaCode?`${e.areaCode}-${e.tell}`:`${e.tell}`),a==="detail"&&e.detail,a==="amenity"&&s.jsx("ul",{className:"flex flex-wrap items-center gap-3 ",children:e.amenity.map((t,l)=>l<e.amenity.length-1?s.jsxs("li",{children:[_(t),","]},l):s.jsx("li",{children:_(t)},l))}),a==="duration"&&`${e.startAt}~${e.endAt}`,a==="checkTime"&&e.openCheck&&e.closeCheck&&`${A(e.openCheck,"HH:mm:ss").format("HH:mm")}~${A(e.closeCheck,"HH:mm:ss").format("HH:mm")}`,a==="restDate"&&e.restDate.map((t,l)=>l===e.restDate.length-1?s.jsx("span",{children:L(t)},l):s.jsxs("span",{children:[L(t),", "]},l)),a==="strfPic"&&s.jsx("ul",{className:"flex flex-wrap gap-2",children:e.strfPics.map((t,l)=>s.jsx("li",{className:"bg-slate-100 rounded-lg overflow-hidden",children:s.jsx("img",{src:`${ce}/${u}/${t.strfPic}`,alt:t.strfPic,className:"w-full h-full object-cover"})},l))}),a==="address"&&e.address]}),h&&a==="title"&&s.jsx(O,{size:"large",defaultValue:e.strfTitle,placeholder:"업체 이름을 입력해주세요(공백 입력시 이전 이름이 유지됩니다)",onChange:t=>{i(t.target.value)},status:(r==null?void 0:r.trim())===""?"error":void 0}),h&&a==="state"&&s.jsx(v,{defaultValue:e.state,options:ae,size:"large",className:"w-1/3 ",onChange:t=>i(t)}),h&&a==="tell"&&s.jsx(O,{addonBefore:re,size:"large",defaultValue:e.tell,placeholder:"전화번호를 입력해주세요.",onChange:t=>i(t.target.value),value:le(r??"0"),maxLength:8,status:!I||!r?"error":void 0}),h&&a==="detail"&&s.jsx(ie,{placeholder:"업체 소개를 작성해주세요",maxLength:300,onChange:t=>{i(t.target.value)},style:{resize:"none",height:"27.73vw",padding:"20px"},value:r,status:(r==null?void 0:r.trim())===""?"error":void 0}),h&&a==="amenity"&&s.jsx("div",{className:"flex flex-wrap gap-2",children:he.map((t,l)=>s.jsxs("button",{type:"button",className:`flex text-base items-center gap-2
                          border rounded-2xl w-fit px-2 py-1
                          ${e.amenity.includes(t.amenity_id)?"border-primary text-primary":"border-slate-300 text-slate-500"}`,onClick:()=>Q(t.amenity_id),children:[t.icon,t.key]},l))}),h&&a==="busiHour"&&s.jsx("div",{children:s.jsx(q.RangePicker,{defaultValue:[A(e.startAt),A(e.endAt)],format:"HH:mm"})}),h&&a==="checkTime"&&s.jsx("div",{children:s.jsx(q.RangePicker,{defaultValue:[A(e!=null&&e.openCheck&&e.openCheck!==""?e.openCheck:"00:00","HH:mm"),A(e!=null&&e.closeCheck&&e.closeCheck!==""?e.closeCheck:"00:00","HH:mm")],minuteStep:10,format:"HH:mm",onChange:t=>{t&&i([t[0]?t[0].format("HH:mm"):"",t[1]?t[1].format("HH:mm"):""])}})}),h&&a==="restDate"&&s.jsxs("div",{className:"flex gap-3",children:[s.jsx(v,{options:F.frequency,placeholder:"휴무 주기",defaultValue:"weekly",size:"large",onChange:t=>{t==="none"&&g({...e,restDate:[]}),D(t)}}),s.jsx(v,{options:F.day,placeholder:"요일 선택",size:"large",mode:"multiple",allowClear:!0,className:"w-full",value:r,onChange:t=>{i(t)},disabled:k==="none"})]})]})]})},b=j.memo(Ce),ke=()=>{const[$]=P(),a=$.get("category");return s.jsxs(s.Fragment,{children:[s.jsx(b,{title:"업체 이름",type:"title"}),s.jsx(b,{title:"업체 전화번호",type:"tell"}),s.jsx(b,{title:"업체 소개",type:"detail"}),a===T.STAY&&s.jsx(b,{title:s.jsxs("span",{className:"flex items-center gap-2",children:["업체 편의 정보"," ",s.jsx(ye,{trigger:"hover",placement:"right",content:"* 검색 시 사용되는 정보입니다.",children:s.jsx("button",{type:"button",children:s.jsx(ue,{className:"text-lg text-slate-300 cursor-help"})})})]}),type:"amenity"}),s.jsx(b,{title:"업체 주소",type:"address"}),s.jsx(b,{title:"업체 사진",type:"strfPic"})]})};A.extend(je);const Ae=({})=>{const[$]=P(),a=$.get("category"),f=x=>{if(x===T.STAY)return"입실/퇴실 시간";if(x===T.RESTAURANT)return"영업 시간";if(x===T.TOUR||T.FEST)return"개장 시간"};return s.jsxs(s.Fragment,{children:[a===T.FEST&&s.jsx(b,{title:"축제 기간",type:"duration"}),s.jsx(b,{title:"업체 상태",type:"state"}),s.jsx(b,{title:f(a),type:"checkTime"}),s.jsx(b,{title:"휴무일",type:"restDate"})]})},Te=({list:$,current:a,changeCateIndex:f})=>s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsx("section",{children:s.jsx("ul",{className:"flex items-center w-full",children:$.map((x,d)=>s.jsxs("li",{className:`w-full flex items-center justify-center gap-2 text-lg font-semibold py-2 cursor-pointer
          ${a===d?"text-primary border-b-4 border-primary":"text-slate-400 border-b-2 border-slate-200"}
          transition-all duration-300`,onClick:()=>{f(d)},children:[x.icon,x.label]},d))})}),s.jsx("section",{children:$[a].children})]}),at=()=>{const $=V("accessToken"),[a]=P(),f=a.get("strfId"),x=a.get("category"),d=Number(a.get("tab")),[S,u]=K(U);console.log("strfData",S);const[N,H]=j.useState(d),[w,e]=j.useState(!1),g=async()=>{const c="/api/detail/member";e(!0);try{const i=(await y.get(`${c}?strf_id=${f}`,{headers:{Authorization:`Bearer ${$}`}})).data;if(i){const k=i.data.tell.split("-");u(D=>({...D,...i.data,areaCode:k[0],tell:`${k[1]}-${k[2]}`})),e(!1)}return i}catch(r){return e(!1),console.log("상품조회",r),null}},h=async()=>{const c="/api/detail/amenity";try{const i=(await y.get(`${c}?strf_id=${f}&category=숙소`,{headers:{Authorization:`Bearer ${$}`}})).data;return u(k=>({...k,amenity:i.data.map(D=>D.amenityId)})),i}catch{return null}},z=[{label:s.jsx("p",{children:"기본 정보"}),children:s.jsx(ke,{})},{label:s.jsx("p",{children:"운영 정보"}),children:s.jsx(Ae,{})}],B=c=>{H(c)};return j.useEffect(()=>{g(),x===T.STAY&&h()},[]),s.jsxs("div",{children:[s.jsx(be,{}),s.jsx(Y,{spinning:w,children:s.jsx(Te,{list:z,changeCateIndex:B,current:N})})]})};export{at as default};
