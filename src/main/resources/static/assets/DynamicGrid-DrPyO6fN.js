import{H as n,j as $}from"./index-BimvysYt.js";/* empty css                    */import{I as g}from"./index-VWNJaY2H.js";const c=({reviewPics:m,type:r="review"})=>{const t=r==="myReview"?m==null?void 0:m.myReviewPic:m==null?void 0:m.reviewPic,o=t==null?void 0:t.length,e=o>5?t.slice(0,5):t,d=o>5?o-5:0,u=t==null?void 0:t.map(a=>r==="myReview"?`${n}/${m.reviewId}/${a.pic}`:`${n}/${m.strfId}/${a.pic}`);return $.jsx("div",{className:`custom-image grid-${Math.min(o,5)} w-full aspect-[3/2] rounded-lg overflow-hidden`,children:$.jsx(g.PreviewGroup,{items:u,children:e==null?void 0:e.map((a,l)=>{const s=r==="myReview"?`${n}/${m.reviewId}/${a.pic}`:`${n}/${m.strfId}/${a.pic}`;return $.jsx(g,{src:s,alt:`review-image-${l}`,className:"!w-full !h-full !object-cover",...l===4&&d>0?{"data-remaining":d}:{}},l)})})})};export{c as D};
