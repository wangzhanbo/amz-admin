let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-4daccdc8]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{a as o,r as t,f as e,d9 as r,da as a,i as l,o as c,j as i,k as d,aM as n,aW as p,n as m,bo as u,p as f}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./index.81a614c0.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./usePageContext.5c284b04.js";import"./types.231a34f8.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./transButton.1b860824.js";import{a as j,s as x}from"./index.fe9d95e6.js";import"./RightOutlined.e5ee841f.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import{s as b}from"./index.812d3d59.js";var g=o({components:{CollapseContainer:j,ScrollContainer:x,PageWrapper:b},setup(){const s=t(null),o=()=>{const o=e(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const C=u("data-v-4daccdc8");r("data-v-4daccdc8");const T={class:"my-4"},_=f("滚动到100px位置"),h=f("滚动到800px位置"),k=f("滚动到顶部"),v=f("滚动到底部"),w={class:"scroll-wrap"},y={class:"p-3"};a();const B=C(((s,o,t,e,r,a)=>{const u=l("a-button"),f=l("ScrollContainer"),j=l("PageWrapper");return c(),i(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:C((()=>[d("div",T,[d(u,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:C((()=>[_])),_:1}),d(u,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:C((()=>[h])),_:1}),d(u,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:C((()=>[k])),_:1}),d(u,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:C((()=>[v])),_:1})]),d("div",w,[d(f,{class:"mt-4",ref:"scrollRef"},{default:C((()=>[d("ul",y,[(c(),i(n,null,p(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])),_:1})}));g.render=B,g.__scopeId="data-v-4daccdc8";export default g;