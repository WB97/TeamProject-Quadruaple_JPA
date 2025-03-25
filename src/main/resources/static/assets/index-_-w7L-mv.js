import{v as F,w as G,aH as U,bl as X,r as s,D as Y,ar as x,bm as Z,z as q,bn as J,bo as Q}from"./index-CclgMCKg.js";import{g as ee}from"./motion-BtiDeT7c.js";import{g as te,a as oe,P as ne,T as re}from"./index-CSlYUxik.js";import"./useId-C98JHZMn.js";import{i as ae}from"./zoom-BWmeO6-E.js";import{g as se}from"./roundedArrow-S-OOpRVx.js";const h=e=>e?typeof e=="function"?e():e:null,le=e=>{const{componentCls:o,popoverColor:n,titleMinWidth:t,fontWeightStrong:r,innerPadding:a,boxShadowSecondary:d,colorTextHeading:p,borderRadiusLG:m,zIndexPopup:g,titleMarginBottom:l,colorBgElevated:u,popoverBg:v,titleBorderBottom:f,innerContentPadding:b,titlePadding:i}=e;return[{[o]:Object.assign(Object.assign({},U(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:g,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":u,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:v,backgroundClip:"padding-box",borderRadius:m,boxShadow:d,padding:a},[`${o}-title`]:{minWidth:t,marginBottom:l,color:p,fontWeight:r,borderBottom:f,padding:i},[`${o}-inner-content`]:{color:n,padding:b}})},te(e,"var(--antd-arrow-background-color)"),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},ie=e=>{const{componentCls:o}=e;return{[o]:X.map(n=>{const t=e[`${n}6`];return{[`&${o}-${n}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},ce=e=>{const{lineWidth:o,controlHeight:n,fontHeight:t,padding:r,wireframe:a,zIndexPopupBase:d,borderRadiusLG:p,marginXS:m,lineType:g,colorSplit:l,paddingSM:u}=e,v=n-t,f=v/2,b=v/2-o,i=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:d+30},se(e)),oe({contentRadius:p,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:m,titlePadding:a?`${f}px ${i}px ${b}px`:0,titleBorderBottom:a?`${o}px ${g} ${l}`:"none",innerContentPadding:a?`${u}px ${i}px`:0})},k=F("Popover",e=>{const{colorBgElevated:o,colorText:n}=e,t=G(e,{popoverBg:o,popoverColor:n});return[le(t),ie(t),ae(t,"zoom-big")]},ce,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var de=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const T=e=>{let{title:o,content:n,prefixCls:t}=e;return!o&&!n?null:s.createElement(s.Fragment,null,o&&s.createElement("div",{className:`${t}-title`},o),n&&s.createElement("div",{className:`${t}-inner-content`},n))},pe=e=>{const{hashId:o,prefixCls:n,className:t,style:r,placement:a="top",title:d,content:p,children:m}=e,g=h(d),l=h(p),u=x(o,n,`${n}-pure`,`${n}-placement-${a}`,t);return s.createElement("div",{className:u,style:r},s.createElement("div",{className:`${n}-arrow`}),s.createElement(ne,Object.assign({},e,{className:o,prefixCls:n}),m||s.createElement(T,{prefixCls:n,title:g,content:l})))},me=e=>{const{prefixCls:o,className:n}=e,t=de(e,["prefixCls","className"]),{getPrefixCls:r}=s.useContext(Y),a=r("popover",o),[d,p,m]=k(a);return d(s.createElement(pe,Object.assign({},t,{prefixCls:a,hashId:p,className:x(n,m)})))};var ge=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const ue=s.forwardRef((e,o)=>{var n,t;const{prefixCls:r,title:a,content:d,overlayClassName:p,placement:m="top",trigger:g="hover",children:l,mouseEnterDelay:u=.1,mouseLeaveDelay:v=.1,onOpenChange:f,overlayStyle:b={},styles:i,classNames:y}=e,w=ge(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls:N,className:_,style:I,classNames:S,styles:$}=Z("popover"),O=N("popover",r),[W,z,D]=k(O),M=N(),R=x(p,z,D,_,S.root,y==null?void 0:y.root),H=x(S.body,y==null?void 0:y.body),[V,A]=q(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),j=(c,C)=>{A(c,!0),f==null||f(c,C)},L=c=>{c.keyCode===Q.ESC&&j(!1,c)},K=c=>{j(c)},E=h(a),B=h(d);return W(s.createElement(re,Object.assign({placement:m,trigger:g,mouseEnterDelay:u,mouseLeaveDelay:v},w,{prefixCls:O,classNames:{root:R,body:H},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},$.root),I),b),i==null?void 0:i.root),body:Object.assign(Object.assign({},$.body),i==null?void 0:i.body)},ref:o,open:V,onOpenChange:K,overlay:E||B?s.createElement(T,{prefixCls:O,title:E,content:B}):null,transitionName:ee(M,"zoom-big",w.transitionName),"data-popover-inject":!0}),J(l,{onKeyDown:c=>{var C,P;s.isValidElement(l)&&((P=l==null?void 0:(C=l.props).onKeyDown)===null||P===void 0||P.call(C,c)),L(c)}})))}),fe=ue;fe._InternalPanelDoNotUseOrYouWillBeFired=me;export{fe as P};
