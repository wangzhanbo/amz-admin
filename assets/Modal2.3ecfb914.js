import{d as e,h as s,o as t,i as o,w as i,j as a,a0 as r,m as l}from"./index.3f3e66ec.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import"./index.46e40f07.js";import{_ as d,a as n}from"./index.09adbb3f.js";import"./FullscreenOutlined.687112ae.js";import"./RightOutlined.d1844cec.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import"./useAttrs.ad5834a5.js";import"./useWindowSizeFn.0885153d.js";var p=e({components:{BasicModal:d},setup(){const[e,{closeModal:s,setModalProps:t}]=n();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const m=l("从内部关闭弹窗"),c=l("从内部修改title");p.render=function(e,l,d,n,p,u){const j=s("a-button"),f=s("BasicModal");return t(),o(f,r(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[a(j,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[m])),_:1},8,["onClick"]),a(j,{type:"primary",onClick:e.setModalProps},{default:i((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;