import{H as e,a as t,r as s,I as l,f as a,az as n,dl as i,d5 as o,_ as r}from"./index.82957b1b.js";import{a as d}from"./index.fe9d95e6.js";import{D as p}from"./index.d658589e.js";import{g as c}from"./tsxHelper.265b5a74.js";var u={useCollapse:e.bool.def(!0),title:e.string.def(""),size:e.oneOf(["small","default","middle",void 0]).def("small"),bordered:e.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:e.object};var m=t({name:"Description",props:u,emits:["register"],setup(e,{attrs:t,slots:u,emit:m}){const f=s(null),b=l((()=>({...e,...a(f)}))),x=l((()=>({...a(b),title:void 0}))),h=l((()=>!!a(b).title)),v=l((()=>({canExpand:!1,...a(x).collapseOptions}))),y=l((()=>({...t,...a(x)})));function g({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const l={...s,minWidth:`${t}px `};return n("div",{style:l},e)}const j=()=>n(p,{class:"description",...a(y)},(()=>function(){const{schema:e}=a(x);return a(e).map((e=>{const{render:t,field:s,span:l,show:i,contentMinWidth:o}=e,{data:d}=a(x);if(i&&r(i)&&!i(d))return null;const c=()=>r(t)?t(null==d?void 0:d[s],d):a(d)&&a(d)[s],u=o;return n(p.Item,{label:g(e),key:s,span:l},(()=>o?n("div",{style:{minWidth:`${u}px`}},c()):c()))}))}()));return m("register",{setDescProps:function(e){const t=i(a(f)||{},e);f.value=o(t)}}),()=>a(h)?(()=>{const t=e.useCollapse?j():n("div",null,j());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:l}=a(v),{title:i}=a(b);return n(d,{title:i,canExpan:s,helpMessage:l},{default:()=>t,action:()=>c(u,"action")})})():j()}});export{m as D};