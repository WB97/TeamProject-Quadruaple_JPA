import{u as m,j as e,l,B as c}from"./index-LV_9s5-1.js";import{j as d}from"./jwt-Cwbp2SV6.js";import{T as x}from"./TitleHeader-6cQeiO5x.js";import{F as s}from"./index-lMOVuc5h.js";import"./index-CoXfSCcE.js";import"./index-Ds3yrZWO.js";import"./index-CF7lad59.js";import"./motion-D8x5Mwwf.js";import"./responsiveObserver-9NKrBLMQ.js";import"./zoom-Bx4l_5D1.js";import"./Portal-CiuFLH_K.js";import"./index-DUIhxVpy.js";import"./index-DN57V0sg.js";import"./index-Btv3waz5.js";import"./useId-LGEjO-HJ.js";import"./roundedArrow-D1YheW33.js";import"./useLocale-opc6SEmi.js";const k=()=>{const r=m(),[o]=s.useForm(),i=t=>{console.log(t),p(t)},p=async t=>{const n={pw:t.pw,newPw:t.newPw};try{const a=await d.patch("/api/user/password",n);console.log("비밀번호 변경",a.data),a.data.code==="200 성공"&&r("/signin")}catch(a){console.log("비밀번호 변경",a)}};return e.jsxs("div",{children:[e.jsx(x,{title:"비밀번호 변경",onClick:()=>{r(-1)},icon:"back"}),e.jsxs("div",{className:"mt-[100px] flex flex-col justify-center items-start w-full px-8 gap-[20px]",children:[e.jsx("h2",{className:"text-[30px] text-slate-700 font-bold",children:"비밀번호 변경"}),e.jsx("div",{className:"w-full",children:e.jsxs(s,{form:o,requiredMark:!1,onFinish:i,className:"w-full flex flex-col gap-[20px]",children:[e.jsx(s.Item,{name:"pw",label:"비밀번호",labelCol:{span:24},rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:e.jsx(l.Password,{placeholder:"현재 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),e.jsx(s.Item,{name:"newPw",label:"새 비밀번호",labelCol:{span:24},rules:[{required:!0,message:"새로운 비밀번호를 입력해주세요."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:e.jsx(l.Password,{placeholder:"새로운 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),e.jsx(s.Item,{children:e.jsx(c,{type:"primary",htmlType:"submit",className:"h-[60px] w-full text-[20px] font-semibold",children:"비밀번호 변경"})})]})})]})]})};export{k as default};
