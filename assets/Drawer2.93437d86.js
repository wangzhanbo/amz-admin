import{d as r,h as e,o as t,i as s,w as a,j as i,a0 as o,m as n}from"./index.3f3e66ec.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import"./index.46e40f07.js";import{_ as c,a as m}from"./index.eec492c4.js";import"./RightOutlined.d1844cec.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import"./useAttrs.ad5834a5.js";var d=r({components:{BasicDrawer:c},setup(){const[r,{closeDrawer:e}]=m();return{register:r,closeDrawer:e}}});const p=n(" Drawer Info. "),l=n("内部关闭drawer");d.render=function(r,n,c,m,d,u){const f=e("a-button"),j=e("BasicDrawer");return t(),s(j,o(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[p,i(f,{type:"primary",onClick:r.closeDrawer},{default:a((()=>[l])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default d;