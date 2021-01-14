import{r as e,e as t,be as r,bd as a,d as n,h as o,o as s,i as l,w as i,j as d,m}from"./index.3f3e66ec.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import{a as c}from"./index.46e40f07.js";import"./RightOutlined.d1844cec.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import{_ as p}from"./index.21babb04.js";import"./usePageContext.81126167.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:c,PageWrapper:p},setup(){const n=e(null),{setWatermark:o,clear:s}=function(n=e(document.body)){let o=()=>{};const s=u.toString(),l=()=>{const e=document.getElementById(s);if(e){const r=t(n);r&&r.removeChild(e)}window.removeEventListener("resize",o)},i=e=>{l();const r=document.createElement("canvas");r.width=300,r.height=240;const a=r.getContext("2d");a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(e,r.width/20,r.height));const o=document.createElement("div");o.id=s,o.style.pointerEvents="none",o.style.top="3px",o.style.left="0px",o.style.position="absolute",o.style.zIndex="100000",o.style.width=document.documentElement.clientWidth+"px",o.style.height=document.documentElement.clientHeight+"px",o.style.background="url("+r.toDataURL("image/png")+") left top repeat";const i=t(n);return i&&i.appendChild(o),s};return{setWatermark:function(e){i(e),o=()=>{i(e)},window.addEventListener("resize",o),a()&&r((()=>{l()}))},clear:l}}();return{setWatermark:o,clear:s,areaRef:n}}});const g=m(" Create "),h=m("Clear"),x=m(" Reset ");f.render=function(e,t,r,a,n,m){const c=o("a-button"),p=o("CollapseContainer"),u=o("PageWrapper");return s(),l(u,{title:"水印示例"},{default:i((()=>[d(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:i((()=>[d(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:i((()=>[g])),_:1}),d(c,{color:"error",class:"mr-2",onClick:e.clear},{default:i((()=>[h])),_:1},8,["onClick"]),d(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:i((()=>[x])),_:1})])),_:1})])),_:1})};export default f;