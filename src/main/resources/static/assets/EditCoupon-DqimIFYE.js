import{a as f,c as l,r as p,j as o}from"./index-CclgMCKg.js";import{C as x}from"./CouponForm-CM1uCnmS.js";import{S as g}from"./StrfInfo-C5iIDPjw.js";import"./index-Y7Vl51Ml.js";import"./motion-BtiDeT7c.js";import"./collapse-BbEVqHco.js";import"./zoom-BWmeO6-E.js";import"./Portal-cEDniDzA.js";import"./useBreakpoint-C1fBIcAO.js";import"./index-BbTjQyva.js";import"./index-CSlYUxik.js";import"./index-Dx4kxOlF.js";import"./useId-C98JHZMn.js";import"./isMobile-DjGTsQxe.js";import"./roundedArrow-S-OOpRVx.js";import"./useLocale-drylJvgs.js";import"./index-DzJzb7gE.js";import"./index-C8fV_4ml.js";import"./customParseFormat--lJaNAof.js";import"./PurePanel-C1JE1xpr.js";import"./Overflow-b40CqTdl.js";import"./useIcons-Bg9STVks.js";import"./CheckOutlined-C_iRVmUt.js";import"./DownOutlined-eQ1uAPVl.js";import"./index-1EcgOAam.js";const M=()=>{const n=f(),[t]=l(),a=Number(t.get("strfId")),c=Number(t.get("couponId")),r=t.get("title"),e=Number(t.get("discountPer")),i=t.get("expiredAt"),s=t.get("distributeAt"),[u,d]=p.useState(null),m=n.pathname.includes("edit")?"edit":"create";return console.log(m),p.useEffect(()=>{r&&e&&i&&s&&d({title:r,discountPer:Number(e),expiredAt:i,distributeAt:s})},[]),o.jsxs("div",{children:[o.jsx(g,{}),o.jsx(x,{formType:m,strfId:a,couponId:c,couponData:u})]})};export{M as default};
