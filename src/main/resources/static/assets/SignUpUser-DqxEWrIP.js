import{A as z,j as e,r,u as M,d as C,I as m,B as O}from"./index-BldMvkj-.js";import{C as a}from"./Checkbox-ICrtv2jw.js";import{U as k}from"./api-B-eoqegl.js";import{T as v}from"./TitleHeader-h4a5ZHCC.js";import"./dayjs.min-Euf2t-ZC.js";import{F as l}from"./index-Dqm2EJ75.js";import{S as R}from"./index-BL1VZDQG.js";import{S as y}from"./index-BQT9wLxE.js";import"./index-Bo3kiOEp.js";import"./index-CF8iy-oi.js";import"./index-ChVfxpTv.js";import"./Portal-w-6SWf8e.js";import"./collapse-BbEVqHco.js";import"./zoom-CY_GuPzI.js";import"./Keyframes-4MZitI5l.js";import"./index-CTXNrfD5.js";import"./index-BWTVzI-L.js";import"./index-B5HDwGmv.js";import"./useId-DZuEBq-G.js";import"./useZIndex-BlWCPQk6.js";import"./useLocale-pc8lhoMq.js";import"./ExclamationCircleFilled-BgEVQkYu.js";import"./KeyCode-DNlgD2sM.js";import"./Overflow-C9jBxujf.js";import"./PurePanel-DrBmxA6O.js";import"./useIcons-DWBTnG39.js";import"./CheckOutlined-B8loTIFt.js";import"./CloseOutlined-CG4VXA4p.js";const V=z.memo(({policyType:i,setShowPolicy:d})=>e.jsxs("div",{className:"pt-[60px] max-w-3xl w-[768px] mx-auto h-screen fixed z-50 top-0 right-[50%] translate-x-[50%] bg-white",children:[e.jsx(v,{icon:"close",title:"약관",onClick:()=>{d(!1)}}),e.jsxs("h1",{className:"text-[24px] font-bold text-center",children:["약관 ",i]})]})),G={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:24}}},Y={wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}};a.Group;const ve=()=>{const[i]=l.useForm(),[d,Z]=r.useState("vertical"),[H,S]=r.useState({}),[u,g]=r.useState([]),[N,f]=r.useState(!1),[p,c]=r.useState(null),[q,$]=r.useState("required"),[I,j]=r.useState(!1),[b,J]=r.useState(!1),F=M(),A=()=>{F("/signin")},P=r.useCallback(t=>{g(t),f(t.length>4)},[]),E=r.useCallback(t=>{const s=t.target.checked;g(s?["required-1","required-2","required-3","required-4","option-1"]:[]),f(s)},[]),D=r.useCallback(async t=>{console.log("아이디 중복 체크 시도"),c("validating");try{const s=await C.get(`${k.checkDuplicatedEmail}${t.target.value}`);s.data.data===!0?c("success"):c("error"),console.log("아이디 중복 체크",s.data)}catch(s){console.log(s),c("error")}},[]);r.useCallback(async t=>{console.log("이메일 발송 데이터:",t);try{const s=await C.get(`${k.sendMail}${t.email}`,t);console.log("이메일 발송 결과:",s.data)}catch(s){console.log(s)}},[]);const L=t=>{u.filter(x=>x==="option"),u.filter(x=>x.includes("required"));const{confirm:s,...n}=t;t.email;const o=t.birthday,U=`${o.year}-${o.month>9?o.month:`0${o.month}`}-${o.day>9?o.day:`0${o.day}`}`,w={...n,birthday:U};console.log("폼 제출 데이터:",w),S(w)},h=r.useCallback(t=>{$(t.target.value),j(!0)},[]),T=Array.from({length:100},(t,s)=>({value:new Date().getFullYear()-s,label:`${new Date().getFullYear()-s}년`})),_=Array.from({length:12},(t,s)=>({value:s+1,label:`${s+1}월`})),B=Array.from({length:31},(t,s)=>({value:s+1,label:`${s+1}일`}));return r.useEffect(()=>{i.setFieldsValue({birthday:{year:1999,month:1,day:1}})},[i]),e.jsxs(e.Fragment,{children:[e.jsx(v,{icon:"back",title:"회원가입",onClick:A}),e.jsx("div",{className:"w-full px-28 mt-[60px]",children:e.jsxs(l,{...G,form:i,name:"register",onFinish:t=>L(t),className:"w-full",layout:d,scrollToFirstError:!0,children:[e.jsx(l.Item,{name:"name",label:"이름",rules:[{required:!0,message:"이름은 필수 입력 항목입니다.",whitespace:!0}],children:e.jsx(m,{placeholder:"이름을 입력하세요",style:{height:"60px"}})}),e.jsx(l.Item,{name:"email",label:"이메일",rules:[{type:"email",message:"이메일 형식에 맞지 않는 메일 주소입니다. 다시 입력해주세요."},{required:!0,message:"이메일은 필수 입력 항목입니다."}],hasFeedback:!0,validateStatus:p,help:p==="error"?"이미 사용 중인 이메일입니다.":p==="success"?"사용 가능한 이메일입니다.":null,children:e.jsx(m,{onBlur:t=>{t.target.value&&D(t)},placeholder:"이메일을 입력하세요",style:{height:"60px"}})}),e.jsx(l.Item,{name:"pw",label:"비밀번호",rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],children:e.jsx(m.Password,{placeholder:"비밀번호를 입력하세요",style:{height:"60px"}})}),e.jsx(l.Item,{name:"confirm",label:"비밀번호 확인",dependencies:["password"],rules:[{required:!0,message:"비밀번호 확인은 필수 입력 항목입니다."},({getFieldValue:t})=>({validator(s,n){return!n||t("pw")===n?Promise.resolve():Promise.reject(new Error("비밀번호가 일치하지 않습니다. 다시 입력해주세요."))}})],children:e.jsx(m.Password,{placeholder:"비밀번호를 다시 한번 입력하세요",style:{height:"60px"}})}),e.jsx(l.Item,{name:"birthday",label:"생일",help:"* 쿠폰 발급과 같은 서비스를 위한 항목입니다.",style:{paddingBottom:"20px"},children:e.jsxs(R.Compact,{block:!0,children:[e.jsx(l.Item,{name:["birthday","year"],noStyle:!0,children:e.jsx(y,{placeholder:"년도",style:{width:"33%",height:"60px"},options:T})}),e.jsx(l.Item,{name:["birthday","month"],noStyle:!0,children:e.jsx(y,{placeholder:"월",style:{width:"33%",height:"60px"},options:_})}),e.jsx(l.Item,{name:["birthday","day"],noStyle:!0,children:e.jsx(y,{placeholder:"일",style:{width:"34%",height:"60px"},options:B})})]})}),e.jsx(a,{onChange:E,checked:N,className:"bg-slate-100 w-full font-semibold text-lg mb-[15px] py-[10px] px-[15px] rounded-lg",children:"전체 동의합니다."}),e.jsxs(a.Group,{value:u,onChange:P,className:"flex flex-col gap-[10px] mb-[20px] w-full",children:[e.jsx(a,{value:"required-1",children:"[필수] 만 14세 이상입니다."}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(a,{value:"required-2",className:"underline",children:"[필수] 서비스 이용약관"}),e.jsx("button",{type:"button",className:"text-[16px] text-slate-300",value:"required-2",onClick:h,children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(a,{value:"required-3",className:"underline",children:"[필수] 개인정보 수집 및 이용 동의"}),e.jsx("button",{type:"button",className:"text-[16px] text-slate-300",value:"required-3",onClick:h,children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(a,{value:"required-4",className:"underline",children:"[필수] 위치서비스 이용 동의"}),e.jsx("button",{type:"button",className:"text-[16px] text-slate-300",value:"required-4",onClick:h,children:"보기"})]}),e.jsx(a,{value:"option-1",children:"[선택] 이벤트 및 할인 혜택 안내 동의"})]}),b?e.jsx("p",{className:`${b?"text-secondary3":"text-white"} text-[14px] font-medium`,children:"* 필수 약관을 모두 동의해야 제출 가능합니다."}):null,I?e.jsx(V,{policyType:q,setShowPolicy:j}):null,e.jsx(l.Item,{...Y,children:e.jsx(O,{type:"primary",htmlType:"submit",block:!0,className:"h-[60px]",children:"다음"})})]})})]})};export{ve as default};
