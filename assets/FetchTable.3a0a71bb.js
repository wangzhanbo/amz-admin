import{d as e,h as t,o as i,i as o,j as r,w as s,m as a}from"./index.3f3e66ec.js";import"./index.6f2b31a6.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import"./index.2f984403.js";import"./index.355d90f3.js";import"./index.46e40f07.js";import"./CheckOutlined.533c07d2.js";import"./index.09adbb3f.js";import{_ as d}from"./index.fda86a89.js";import"./FullscreenOutlined.687112ae.js";import"./RightOutlined.d1844cec.js";import"./SettingOutlined.0d60f9f3.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import"./useAttrs.ad5834a5.js";import"./useWindowSizeFn.0885153d.js";import"./index.b3d6e480.js";import"./uuid.a6cec785.js";import"./download.a7f4c239.js";import"./useForm.d4f2eea7.js";import"./useSortable.cf79efb4.js";import"./useExpose.d7ba0a6b.js";import{u as n}from"./useTable.5d9d533a.js";import{getBasicColumns as m}from"./tableData.7aa0192c.js";import{d as p}from"./table.d871fe33.js";var l=e({components:{BasicTable:d},setup(){const[e,{reload:t}]=n({title:"远程加载示例",api:p,columns:m()});return{registerTable:e,handleReloadCurrent:function(){t()},handleReload:function(){t({page:1})}}}});const u={class:"p-4"},j=a(" 刷新当前页 "),c=a(" 刷新并返回第一页 ");l.render=function(e,a,d,n,m,p){const l=t("a-button"),f=t("BasicTable");return i(),o("div",u,[r(f,{onRegister:e.registerTable},{toolbar:s((()=>[r(l,{type:"primary",onClick:e.handleReloadCurrent},{default:s((()=>[j])),_:1},8,["onClick"]),r(l,{type:"primary",onClick:e.handleReload},{default:s((()=>[c])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;