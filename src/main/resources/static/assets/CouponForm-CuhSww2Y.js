import{r as h,u as T,g as q,j as e,l as w,B as f,m as j,w as g}from"./index-LV_9s5-1.js";import{d as o}from"./dayjs.min-DjCP-Jtp.js";import{F as r}from"./index-lMOVuc5h.js";import{S as A}from"./index-Bm7FllQO.js";import{T as F}from"./index-CAnD9nYA.js";import{D as k}from"./index-Dmup9m1R.js";const{RangePicker:D}=k,$=({formType:d,couponId:N,strfId:m,couponData:a})=>{const b=d==="edit"?"쿠폰 수정":"쿠폰 등록",[c]=r.useForm(),[y,i]=h.useState(!1),v=T(),x=()=>{v(`/business/coupon?strfId=${m}`)},u=q("accessToken"),Y=async t=>{i(!0);const l="/api/coupon/business/issuance";try{const s=await j.post(l,t,{headers:{Authorization:`Bearer ${u}`}});console.log("쿠폰 등록",s.data),s.data&&(i(!1),g.success("쿠폰 등록 성공"),x())}catch(s){console.log(s),i(!1)}},z=async t=>{i(!0);const l="/api/coupon/business/issuance";console.log("제출 데이터",t);try{const s=await j.patch(l,t,{headers:{Authorization:`Bearer ${u}`}});console.log("쿠폰 수정",s.data),s.data&&(i(!1),g.success("쿠폰 수정 성공"),x())}catch(s){console.log(s),i(!1)}},C=t=>t&&t<o().startOf("day"),I=t=>{const{title:l,date:s,discountPer:P}=t,p={title:l,distributeAt:o(s[0]).format("YYYY-MM-DDTHH:mm:ss"),expiredAt:o(s[1]).format("YYYY-MM-DDTHH:mm:ss"),discountPer:Number(P)};if(d==="edit"){const n={...p,couponId:N};z(n)}else{const n={...p,strfId:m};Y(n)}};return h.useEffect(()=>{a&&c.setFieldsValue({title:a.title,date:[o(a.distributeAt),o(a.expiredAt)],discountPer:a.discountPer})},[a,c]),e.jsxs("div",{className:"flex flex-col gap-2 pt-2 pb-5",children:[e.jsx("div",{className:"px-4",children:e.jsx("h2",{className:"text-2xl font-semibold text-slate-600",children:b})}),e.jsx(A,{spinning:y,children:e.jsx("div",{className:"flex flex-col gap-5 pb-8",children:e.jsxs(r,{form:c,onFinish:I,className:"w-full",children:[e.jsxs("div",{className:"px-4 py-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-700",children:"쿠폰 관리명"}),e.jsx("p",{className:"text-base font-medium text-slate-500",children:"고객에게 노출되는 쿠폰 이름입니다."}),e.jsx(r.Item,{name:"title",required:!0,rules:[{required:!0,message:"쿠폰 이름을 입력해주세요."}],children:e.jsx(w,{placeholder:"쿠폰 이름을 입력해주세요.",size:"large"})})]}),e.jsxs("div",{className:"px-4 py-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-700",children:"쿠폰 유효기간"}),e.jsx("p",{className:"text-base font-medium text-slate-500",children:"쿠폰 유효기간을 입력해주세요."}),e.jsx(r.Item,{name:"date",required:!0,rules:[{required:!0,message:"쿠폰 유효기간을 입력해주세요."}],children:e.jsx(D,{disabledDate:C,size:"large",style:{width:"100%"},placeholder:["시작일","종료일"]})})]}),e.jsxs("div",{className:"px-4 py-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-700",children:"쿠폰 할인율"}),e.jsx("p",{className:"text-base font-medium text-slate-500",children:"쿠폰 할인율을 입력해주세요."}),e.jsx(r.Item,{name:"discountPer",required:!0,rules:[{required:!0,message:"쿠폰 할인율을 입력해주세요."}],children:e.jsx(F,{placeholder:"쿠폰 할인율을 입력해주세요.",size:"large",min:0,max:100,className:"w-72",suffix:"%"})})]}),e.jsx(r.Item,{className:"px-4 py-3 flex justify-end",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(f,{type:"default",size:"large",children:"취소"}),e.jsx(f,{type:"primary",htmlType:"submit",size:"large",children:"등록"})]})})]})})})]})};export{$ as C};
