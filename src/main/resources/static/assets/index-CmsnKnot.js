import{r as i,v as Z,w as ee,au as _,l as z,av as W,D as A,ay as oe,aw as te,ae as F,ax as re,ag as L,aA as ne,az as ie,z as le,b1 as ae,b2 as de}from"./index-BimvysYt.js";import{u as se,C as ce}from"./useBubbleLock-Cs7R_PEy.js";import{u as ue}from"./useId-BXEVvoiT.js";const X=i.createContext(null),be=X.Provider,J=i.createContext(null),ge=J.Provider,pe=t=>{const{componentCls:r,antCls:n}=t,o=`${r}-group`;return{[o]:Object.assign(Object.assign({},_(t)),{display:"inline-block",fontSize:0,[`&${o}-rtl`]:{direction:"rtl"},[`&${o}-block`]:{display:"flex"},[`${n}-badge ${n}-badge-count`]:{zIndex:1},[`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]:{borderInlineStart:"none"}})}},Ce=t=>{const{componentCls:r,wrapperMarginInlineEnd:n,colorPrimary:o,radioSize:e,motionDurationSlow:c,motionDurationMid:g,motionEaseInOutCirc:S,colorBgContainer:a,colorBorder:x,lineWidth:h,colorBgContainerDisabled:y,colorTextDisabled:I,paddingXS:$,dotColorDisabled:w,lineType:v,radioColor:u,radioBgColor:k,calc:b}=t,m=`${r}-inner`,O=b(e).sub(b(4).mul(2)),d=b(1).mul(e).equal({unit:!0});return{[`${r}-wrapper`]:Object.assign(Object.assign({},_(t)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:n,cursor:"pointer","&:last-child":{marginInlineEnd:0},[`&${r}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:t.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},"&-block":{flex:1,justifyContent:"center"},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${z(h)} ${v} ${o}`,borderRadius:"50%",visibility:"hidden",opacity:0,content:'""'},[r]:Object.assign(Object.assign({},_(t)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${r}-wrapper:hover &,
        &:hover ${m}`]:{borderColor:o},[`${r}-input:focus-visible + ${m}`]:Object.assign({},W(t)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:d,height:d,marginBlockStart:b(1).mul(e).div(-2).equal({unit:!0}),marginInlineStart:b(1).mul(e).div(-2).equal({unit:!0}),backgroundColor:u,borderBlockStart:0,borderInlineStart:0,borderRadius:d,transform:"scale(0)",opacity:0,transition:`all ${c} ${S}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:d,height:d,backgroundColor:a,borderColor:x,borderStyle:"solid",borderWidth:h,borderRadius:"50%",transition:`all ${g}`},[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[m]:{borderColor:o,backgroundColor:k,"&::after":{transform:`scale(${t.calc(t.dotSize).div(e).equal()})`,opacity:1,transition:`all ${c} ${S}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[m]:{backgroundColor:y,borderColor:x,cursor:"not-allowed","&::after":{backgroundColor:w}},[`${r}-input`]:{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:I,cursor:"not-allowed"},[`&${r}-checked`]:{[m]:{"&::after":{transform:`scale(${b(O).div(e).equal()})`}}}},[`span${r} + *`]:{paddingInlineStart:$,paddingInlineEnd:$}})}},fe=t=>{const{buttonColor:r,controlHeight:n,componentCls:o,lineWidth:e,lineType:c,colorBorder:g,motionDurationSlow:S,motionDurationMid:a,buttonPaddingInline:x,fontSize:h,buttonBg:y,fontSizeLG:I,controlHeightLG:$,controlHeightSM:w,paddingXS:v,borderRadius:u,borderRadiusSM:k,borderRadiusLG:b,buttonCheckedBg:m,buttonSolidCheckedColor:p,colorTextDisabled:O,colorBgContainerDisabled:d,buttonCheckedBgDisabled:j,buttonCheckedColorDisabled:T,colorPrimary:C,colorPrimaryHover:E,colorPrimaryActive:l,buttonSolidCheckedBg:R,buttonSolidCheckedHoverBg:B,buttonSolidCheckedActiveBg:P,calc:f}=t;return{[`${o}-button-wrapper`]:{position:"relative",display:"inline-block",height:n,margin:0,paddingInline:x,paddingBlock:0,color:r,fontSize:h,lineHeight:z(f(n).sub(f(e).mul(2)).equal()),background:y,border:`${z(e)} ${c} ${g}`,borderBlockStartWidth:f(e).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:e,cursor:"pointer",transition:[`color ${a}`,`background ${a}`,`box-shadow ${a}`].join(","),a:{color:r},[`> ${o}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:f(e).mul(-1).equal(),insetInlineStart:f(e).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:e,paddingInline:0,backgroundColor:g,transition:`background-color ${S}`,content:'""'}},"&:first-child":{borderInlineStart:`${z(e)} ${c} ${g}`,borderStartStartRadius:u,borderEndStartRadius:u},"&:last-child":{borderStartEndRadius:u,borderEndEndRadius:u},"&:first-child:last-child":{borderRadius:u},[`${o}-group-large &`]:{height:$,fontSize:I,lineHeight:z(f($).sub(f(e).mul(2)).equal()),"&:first-child":{borderStartStartRadius:b,borderEndStartRadius:b},"&:last-child":{borderStartEndRadius:b,borderEndEndRadius:b}},[`${o}-group-small &`]:{height:w,paddingInline:f(v).sub(e).equal(),paddingBlock:0,lineHeight:z(f(w).sub(f(e).mul(2)).equal()),"&:first-child":{borderStartStartRadius:k,borderEndStartRadius:k},"&:last-child":{borderStartEndRadius:k,borderEndEndRadius:k}},"&:hover":{position:"relative",color:C},"&:has(:focus-visible)":Object.assign({},W(t)),[`${o}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${o}-button-wrapper-disabled)`]:{zIndex:1,color:C,background:m,borderColor:C,"&::before":{backgroundColor:C},"&:first-child":{borderColor:C},"&:hover":{color:E,borderColor:E,"&::before":{backgroundColor:E}},"&:active":{color:l,borderColor:l,"&::before":{backgroundColor:l}}},[`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]:{color:p,background:R,borderColor:R,"&:hover":{color:p,background:B,borderColor:B},"&:active":{color:p,background:P,borderColor:P}},"&-disabled":{color:O,backgroundColor:d,borderColor:g,cursor:"not-allowed","&:first-child, &:hover":{color:O,backgroundColor:d,borderColor:g}},[`&-disabled${o}-button-wrapper-checked`]:{color:T,backgroundColor:j,borderColor:g,boxShadow:"none"},"&-block":{flex:1,textAlign:"center"}}}},he=t=>{const{wireframe:r,padding:n,marginXS:o,lineWidth:e,fontSizeLG:c,colorText:g,colorBgContainer:S,colorTextDisabled:a,controlItemBgActiveDisabled:x,colorTextLightSolid:h,colorPrimary:y,colorPrimaryHover:I,colorPrimaryActive:$,colorWhite:w}=t,v=4,u=c,k=r?u-v*2:u-(v+e)*2;return{radioSize:u,dotSize:k,dotColorDisabled:a,buttonSolidCheckedColor:h,buttonSolidCheckedBg:y,buttonSolidCheckedHoverBg:I,buttonSolidCheckedActiveBg:$,buttonBg:S,buttonCheckedBg:S,buttonColor:g,buttonCheckedBgDisabled:x,buttonCheckedColorDisabled:a,buttonPaddingInline:n-e,wrapperMarginInlineEnd:o,radioColor:r?y:w,radioBgColor:r?S:y}},K=Z("Radio",t=>{const{controlOutline:r,controlOutlineWidth:n}=t,o=`0 0 0 ${z(n)} ${r}`,c=ee(t,{radioFocusShadow:o,radioButtonFocusShadow:o});return[pe(c),Ce(c),fe(c)]},he,{unitless:{radioSize:!0,dotSize:!0}});var me=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,o=Object.getOwnPropertySymbols(t);e<o.length;e++)r.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(n[o[e]]=t[o[e]]);return n};const Se=(t,r)=>{var n,o;const e=i.useContext(X),c=i.useContext(J),{getPrefixCls:g,direction:S,radio:a}=i.useContext(A),x=i.useRef(null),h=oe(r,x),{isFormItemInput:y}=i.useContext(te),I=q=>{var M,D;(M=t.onChange)===null||M===void 0||M.call(t,q),(D=e==null?void 0:e.onChange)===null||D===void 0||D.call(e,q)},{prefixCls:$,className:w,rootClassName:v,children:u,style:k,title:b}=t,m=me(t,["prefixCls","className","rootClassName","children","style","title"]),p=g("radio",$),O=((e==null?void 0:e.optionType)||c)==="button",d=O?`${p}-button`:p,j=F(p),[T,C,E]=K(p,j),l=Object.assign({},m),R=i.useContext(re);e&&(l.name=e.name,l.onChange=I,l.checked=t.value===e.value,l.disabled=(n=l.disabled)!==null&&n!==void 0?n:e.disabled),l.disabled=(o=l.disabled)!==null&&o!==void 0?o:R;const B=L(`${d}-wrapper`,{[`${d}-wrapper-checked`]:l.checked,[`${d}-wrapper-disabled`]:l.disabled,[`${d}-wrapper-rtl`]:S==="rtl",[`${d}-wrapper-in-form-item`]:y,[`${d}-wrapper-block`]:!!(e!=null&&e.block)},a==null?void 0:a.className,w,v,C,E,j),[P,f]=se(l.onClick);return T(i.createElement(ne,{component:"Radio",disabled:l.disabled},i.createElement("label",{className:B,style:Object.assign(Object.assign({},a==null?void 0:a.style),k),onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,title:b,onClick:P},i.createElement(ce,Object.assign({},l,{className:L(l.className,{[ie]:!O}),type:"radio",prefixCls:d,ref:h,onClick:f})),u!==void 0?i.createElement("span",null,u):null)))},N=i.forwardRef(Se),ke=i.forwardRef((t,r)=>{const{getPrefixCls:n,direction:o}=i.useContext(A),e=ue(),{prefixCls:c,className:g,rootClassName:S,options:a,buttonStyle:x="outline",disabled:h,children:y,size:I,style:$,id:w,optionType:v,name:u=e,defaultValue:k,value:b,block:m=!1,onChange:p,onMouseEnter:O,onMouseLeave:d,onFocus:j,onBlur:T}=t,[C,E]=le(k,{value:b}),l=i.useCallback(s=>{const Y=C,V=s.target.value;"value"in t||E(V),V!==Y&&(p==null||p(s))},[C,E,p]),R=n("radio",c),B=`${R}-group`,P=F(R),[f,q,M]=K(R,P);let D=y;a&&a.length>0&&(D=a.map(s=>typeof s=="string"||typeof s=="number"?i.createElement(N,{key:s.toString(),prefixCls:R,disabled:h,value:s,checked:C===s},s):i.createElement(N,{key:`radio-group-value-options-${s.value}`,prefixCls:R,disabled:s.disabled||h,value:s.value,checked:C===s.value,title:s.title,style:s.style,id:s.id,required:s.required},s.label)));const H=ae(I),Q=L(B,`${B}-${x}`,{[`${B}-${H}`]:H,[`${B}-rtl`]:o==="rtl",[`${B}-block`]:m},g,S,q,M,P),U=i.useMemo(()=>({onChange:l,value:C,disabled:h,name:u,optionType:v,block:m}),[l,C,h,u,v,m]);return f(i.createElement("div",Object.assign({},de(t,{aria:!0,data:!0}),{className:Q,style:$,onMouseEnter:O,onMouseLeave:d,onFocus:j,onBlur:T,id:w,ref:r}),i.createElement(be,{value:U},D)))}),ye=i.memo(ke);var $e=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,o=Object.getOwnPropertySymbols(t);e<o.length;e++)r.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(n[o[e]]=t[o[e]]);return n};const ve=(t,r)=>{const{getPrefixCls:n}=i.useContext(A),{prefixCls:o}=t,e=$e(t,["prefixCls"]),c=n("radio",o);return i.createElement(ge,{value:"button"},i.createElement(N,Object.assign({prefixCls:c},e,{type:"radio",ref:r})))},xe=i.forwardRef(ve),G=N;G.Button=xe;G.Group=ye;G.__ANT_RADIO=!0;export{G as R};
