import{d as e,g as t,h as n,o as i,i as o,w as l,j as s,m as a}from"./index.3f3e66ec.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import{a as r}from"./index.46e40f07.js";import"./RightOutlined.d1844cec.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import{_ as p}from"./index.21babb04.js";import"./usePageContext.81126167.js";import{u as c}from"./useContextMenu.e5d86201.js";var u=e({components:{CollapseContainer:r,PageWrapper:p},setup(){const[e]=c(),{createMessage:n}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const d=a("Right Click on me"),m=a("Right Click on me");u.render=function(e,t,a,r,p,c){const u=n("a-button"),b=n("CollapseContainer"),f=n("PageWrapper");return i(),o(f,{title:"右键菜单示例"},{default:l((()=>[s(b,{title:"Simple"},{default:l((()=>[s(u,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[d])),_:1},8,["onContextmenu"])])),_:1}),s(b,{title:"Multiple",class:"mt-4"},{default:l((()=>[s(u,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default u;