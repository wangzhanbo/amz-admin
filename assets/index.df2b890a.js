import{d as e,dx as t,dy as s,cp as a,cq as o,h as n,o as r,i,bw as d,j as c,m}from"./index.e5cea104.js";import{A as p}from"./index.aae62fa3.js";import u from"./CurrentPermissionMode.1af7f2ee.js";import{_ as l}from"./index.d3ad540a.js";import"./vendor.3b1829c7.js";import"./index.9dcfd344.js";import"./index.b849a135.js";import"./index.99a56753.js";import"./RightOutlined.63cc3316.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./isEqual.ada18de9.js";import"./toInteger.dac4ce3f.js";import"./DownOutlined.835763f0.js";import"./index.95c10fda.js";import"./index.cf091346.js";import"./usePageContext.32d49c7d.js";import"./transButton.3169e759.js";import"./ArrowLeftOutlined.36c69fe8.js";var f=e({components:{Alert:p,CurrentPermissionMode:u,PageWrapper:l},setup(){const{changeMenu:e}=s();return{RoleEnum:t,changeMenu:e}}});const j=d("data-v-bcdaa5b4");a("data-v-bcdaa5b4");const b={class:"mt-4"},g=m(" 权限切换(请先切换权限模式为后台权限模式): "),x=m(" 获取用户id为1的菜单 "),h=m(" 获取用户id为2的菜单 ");o();const C=j(((e,t,s,a,o,d)=>{const m=n("CurrentPermissionMode"),p=n("Alert"),u=n("a-button"),l=n("a-button-group"),f=n("PageWrapper");return r(),i(f,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:j((()=>[c(m),c(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),c("div",b,[g,c(l,null,{default:j((()=>[c(u,{onClick:t[1]||(t[1]=t=>e.changeMenu("1"))},{default:j((()=>[x])),_:1}),c(u,{onClick:t[2]||(t[2]=t=>e.changeMenu("2"))},{default:j((()=>[h])),_:1})])),_:1})])])),_:1})}));f.render=C,f.__scopeId="data-v-bcdaa5b4";export default f;