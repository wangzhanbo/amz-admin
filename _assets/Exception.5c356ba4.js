let e=document.createElement("style");e.innerHTML=".exception{display:flex;align-items:center;flex-direction:column}",document.head.appendChild(e);import{a as t,au as s,r as a,av as n,aw as l,u as i,I as r,f as o,ax as u,ay as c,F as p,az as T}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import{R as x}from"./index.88e9eee1.js";var b=t({name:"ErrorPage",props:{status:{type:Number,default:s.PAGE_NOT_FOUND},title:{type:String},subTitle:{type:String},full:{type:Boolean,default:!1}},setup(e){const t=a(new Map),{query:b}=n(),d=T(),y=l(),{t:E}=i(),_=r((()=>{const{status:t}=b,{status:s}=e;return Number(t)||s})),m=r((()=>o(t).get(o(_)))),f=E("sys.exception.backLogin"),O=E("sys.exception.backHome");return o(t).set(s.PAGE_NOT_ACCESS,{title:"403",status:`${s.PAGE_NOT_ACCESS}`,subTitle:E("sys.exception.subTitle403"),btnText:e.full?f:O,handler:()=>e.full?d(u.BASE_LOGIN):d()}),o(t).set(s.PAGE_NOT_FOUND,{title:"404",status:`${s.PAGE_NOT_FOUND}`,subTitle:E("sys.exception.subTitle404"),btnText:e.full?f:O,handler:()=>e.full?d(u.BASE_LOGIN):d()}),o(t).set(s.ERROR,{title:"500",status:`${s.ERROR}`,subTitle:E("sys.exception.subTitle500"),btnText:O,handler:()=>d()}),o(t).set(s.PAGE_NOT_DATA,{title:E("sys.exception.noDataTitle"),subTitle:"",btnText:E("sys.exception.redo"),handler:()=>y(),icon:"./_assets/no-data.7a45acb3.png"}),o(t).set(s.NET_WORK_ERROR,{title:E("sys.exception.networkErrorTitle"),subTitle:E("sys.exception.networkErrorSubTitle"),btnText:"Refresh",handler:()=>y(),icon:"./_assets/net-work.5d408b05.png"}),()=>{const{title:t,subTitle:s,btnText:a,icon:n,handler:l,status:i}=o(m)||{};return c(x,{class:"exception ",status:i,title:e.title||t,"sub-title":e.subTitle||s},{extra:()=>a&&c(p,{type:"primary",onClick:l},(()=>a)),icon:()=>n?c("img",{src:n}):null})}}});export default b;