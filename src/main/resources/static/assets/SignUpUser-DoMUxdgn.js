import{Z as W,j as e,i as X,r,u as ee,m as g,l as c,B as te,a7 as se}from"./index-B0MRRT76.js";import{C as o}from"./Checkbox-3WGeYbAX.js";import{U as q}from"./api-RMrr9BxD.js";import{T as F}from"./TitleHeader-D2T7x1p9.js";import{d as I}from"./dayjs.min-Dt1KUzc3.js";import{c as re}from"./customParseFormat-CC1nJETG.js";import{F as a}from"./index-BACgOSd_.js";import{S as le}from"./index-Cv6KKT5a.js";import{S as ae}from"./index-Cxgays7N.js";import{S as y}from"./index-V1QhMbQR.js";import"./index-CLLbI4EO.js";import"./index-BufLJYNn.js";import"./index-B3-sjDcr.js";import"./motion-C3ndXrQk.js";import"./responsiveObserver-BKroisDd.js";import"./zoom-CJdJ6oGz.js";import"./Portal-Bx82L6C2.js";import"./index-C7M7czQ4.js";import"./index-DEcg2jMK.js";import"./index-CqV8RSPu.js";import"./useId-1HpSO0-f.js";import"./roundedArrow-xQaRV5wd.js";import"./useLocale-plFEjJLX.js";import"./gapSize-U1swVQyS.js";import"./Overflow-EFvXwzU5.js";import"./PurePanel-DFtPxHQZ.js";import"./useIcons-rsFAlgHm.js";import"./CheckOutlined-BRiLEcJ9.js";const oe=W.memo(({policyType:i,setShowPolicy:p})=>e.jsxs("div",{className:"pt-[60px] max-w-3xl w-[768px] mx-auto h-screen fixed z-50 top-0 right-[50%] translate-x-[50%] bg-white",children:[e.jsx(F,{icon:"close",title:"약관",onClick:()=>{p(!1)}}),e.jsxs("h1",{className:"text-[24px] font-bold text-center",children:["약관 ",i]})]}));I.extend(re);const ne={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:24}}},ie={wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}};o.Group;const Ye=()=>{const[i]=a.useForm(),p=X(),{email:d}=p.state||{},[P,ce]=r.useState("vertical"),[me,D]=r.useState({}),[j,ue]=r.useState(""),[b,w]=r.useState([]),[L,C]=r.useState(!1),[A,m]=r.useState(null),[E,B]=r.useState("required"),[T,v]=r.useState(!1),[N,_]=r.useState(!1),[M,h]=r.useState(!1),S=ee(),U=()=>{S("/signin")},Y=r.useCallback(s=>{w(s),C(s.length>4)},[]),O=r.useCallback(s=>{const t=s.target.checked;w(t?["required-1","required-2","required-3","required-4","option-1"]:[]),C(t)},[]),R=r.useCallback(async s=>{console.log("아이디 중복 체크 시도"),m("validating");try{const t=await g.get(`${q.checkDuplicatedEmail}${s.target.value}`);t.data.data===!0?m("success"):m("error"),console.log("아이디 중복 체크",t.data)}catch(t){console.log(t),m("error")}},[]);r.useCallback(async s=>{console.log("이메일 발송 데이터:",s);try{const t=await g.get(`${q.sendMail}${s.email}`,s);console.log("이메일 발송 결과:",t.data)}catch(t){console.log(t)}},[]);const V=async s=>{h(!0);const t=new FormData;t.append("p",new Blob([JSON.stringify(s)],{type:"application/json"})),j&&t.append("profilePic",j),console.log("JSON 데이터:",s),t.forEach((n,f)=>{console.log(`${f}:`,n)});const l="/api/user/sign-up";try{const n=await g.post(l,t,{headers:{"Content-Type":"multipart/form-data"}});console.log("회원가입 성공:",n.data),h(!1),S("/signup/complete",{state:{name:s.name}}),console.log(" data.name ",s.name)}catch(n){console.error("회원가입 실패:",n),h(!1),se.error("회원가입에 실패하였습니다.")}},z=s=>{const{year:t,month:l,day:n}=s.birth,f=`${t}-${l}-${n}`,H=I(f).format("YYYY-MM-DD"),{confirm:pe,...u}=s,K=b.filter(Q=>Q.includes("required"));u.tell&&(u.tell=k(u.tell));const $={...u,birth:H};K.length===4&&A==="success"?V($):_(!0),D($)},x=r.useCallback(s=>{B(s.target.value),v(!0)},[]),Z=Array.from({length:100},(s,t)=>({value:new Date().getFullYear()-t,label:`${new Date().getFullYear()-t}년`})),G=Array.from({length:12},(s,t)=>({value:t+1,label:`${t+1}월`})),J=Array.from({length:31},(s,t)=>({value:t+1,label:`${t+1}일`}));r.useEffect(()=>{i.setFieldsValue({email:d,birthday:{year:1999,month:1,day:1}})},[i,d]);const k=s=>{if(!s)return s;const t=s.replace(/[^\d]/g,""),l=t.length;return l<=3?t:l<=7?`${t.slice(0,3)}-${t.slice(3)}`:`${t.slice(0,3)}-${t.slice(3,7)}-${t.slice(7,11)}`};return e.jsxs(e.Fragment,{children:[e.jsx(F,{icon:"back",title:"회원가입",onClick:U}),e.jsx("div",{className:"w-full",children:e.jsx(le,{spinning:M,children:e.jsxs(a,{...ne,form:i,name:"register",onFinish:z,className:"w-full px-4",layout:P,scrollToFirstError:!0,initialValues:{email:d},children:[e.jsx(a.Item,{name:"name",label:"이름",className:"custom-form-item",rules:[{required:!0,message:"이름은 필수 입력 항목입니다.",whitespace:!0}],children:e.jsx(c,{placeholder:"이름을 입력하세요",style:{height:"60px"}})}),e.jsx(a.Item,{name:"email",label:"이메일",className:"custom-form-item",rules:[{type:"email",message:"이메일 형식에 맞지 않는 메일 주소입니다. 다시 입력해주세요."},{required:!0,message:"이메일은 필수 입력 항목입니다."}],children:e.jsx(c,{onBlur:s=>{s.target.value&&R(s)},placeholder:"이메일을 입력하세요",disabled:!0,style:{height:"60px"}})}),e.jsx(a.Item,{name:"pw",label:"비밀번호",className:"custom-form-item",rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],children:e.jsx(c.Password,{placeholder:"비밀번호를 입력하세요",style:{height:"60px"}})}),e.jsx(a.Item,{name:"confirm",label:"비밀번호 확인",className:"custom-form-item",dependencies:["pw"],rules:[{required:!0,message:"비밀번호 확인은 필수 입력 항목입니다."},({getFieldValue:s})=>({validator(t,l){return!l||s("pw")===l?Promise.resolve():Promise.reject(new Error("비밀번호가 일치하지 않습니다. 다시 입력해주세요."))}})],children:e.jsx(c.Password,{placeholder:"비밀번호를 다시 한번 입력하세요",style:{height:"60px"}})}),e.jsx(a.Item,{name:"tell",label:"휴대폰 번호",rules:[{required:!1,validator:async(s,t)=>t?/^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/.test(t)?Promise.resolve():Promise.reject("올바른 휴대폰 번호 형식이 아닙니다. (예: 010-1234-5678)"):Promise.resolve()}],help:"* 휴대폰 번호는 광고 또는 서비스 이용을 위한 항목입니다.",children:e.jsx(c,{placeholder:"010-0000-0000",style:{height:"60px"},maxLength:13,onChange:s=>{const t=s.target.value.replace(/[^\d]/g,""),l=k(t);i.setFieldsValue({tell:l})}})}),e.jsx(a.Item,{name:"birth",label:"생일",className:"custom-form-item",help:"* 쿠폰 발급과 같은 서비스를 위한 항목입니다.",style:{paddingBottom:"20px"},children:e.jsxs(ae.Compact,{block:!0,children:[e.jsx(a.Item,{name:["birth","year"],noStyle:!0,children:e.jsx(y,{placeholder:"년도",style:{width:"33%",height:"60px"},options:Z})}),e.jsx(a.Item,{name:["birth","month"],noStyle:!0,children:e.jsx(y,{placeholder:"월",style:{width:"33%",height:"60px"},options:G})}),e.jsx(a.Item,{name:["birth","day"],noStyle:!0,children:e.jsx(y,{placeholder:"일",style:{width:"34%",height:"60px"},options:J})})]})}),e.jsx(o,{onChange:O,checked:L,className:"bg-slate-100 w-full font-medium text-lg  py-5 px-3 rounded-lg my-4 text-slate-700",children:"전체 동의합니다."}),e.jsxs(o.Group,{value:b,onChange:Y,className:"flex flex-col gap-2 w-full px-3",children:[e.jsx(o,{value:"required-1",children:"[필수] 만 14세 이상입니다."}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(o,{value:"required-2",className:"underline",children:"[필수] 서비스 이용약관"}),e.jsx("button",{type:"button",className:"text-xs text-slate-300",value:"required-2",onClick:x,children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(o,{value:"required-3",className:"underline",children:"[필수] 개인정보 수집 및 이용 동의"}),e.jsx("button",{type:"button",className:"text-xs text-slate-300",value:"required-3",onClick:x,children:"보기"})]}),e.jsxs("div",{className:"w-full flex justify-between",children:[e.jsx(o,{value:"required-4",className:"underline",children:"[필수] 위치서비스 이용 동의"}),e.jsx("button",{type:"button",className:"text-xs text-slate-300",value:"required-4",onClick:x,children:"보기"})]}),e.jsx(o,{value:"option-1",children:"[선택] 이벤트 및 할인 혜택 안내 동의"})]}),N?e.jsx("p",{className:`${N?"text-secondary3":"text-white"} text-[14px] font-medium`,children:"* 필수 약관을 모두 동의해야 제출 가능합니다."}):null,T?e.jsx(oe,{policyType:E,setShowPolicy:v}):null,e.jsx(a.Item,{...ie,children:e.jsx(te,{type:"primary",htmlType:"submit",block:!0,className:"text-base py-3 !h-auto mt-4 mb-12",children:"다음"})})]})})})]})};export{Ye as default};
