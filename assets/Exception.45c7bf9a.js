import{d as t,ay as e,r as s,az as a,aA as l,u as n,K as i,e as r,aB as u,j as o,a4 as T,aC as b}from"./index.8d47259d.js";import{R as p}from"./index.70149466.js";import"./vendor.3b1829c7.js";var c=t({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t){const c=s(new Map),{query:d}=a(),x=b(),E=l(),{t:y}=n(),_=i((()=>{const{status:e}=d,{status:s}=t;return Number(e)||s})),O=i((()=>r(c).get(r(_)))),f=y("sys.exception.backLogin"),N=y("sys.exception.backHome");return r(c).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:y("sys.exception.subTitle403"),btnText:t.full?f:N,handler:()=>t.full?x(u.BASE_LOGIN):x()}),r(c).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:y("sys.exception.subTitle404"),btnText:t.full?f:N,handler:()=>t.full?x(u.BASE_LOGIN):x()}),r(c).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:y("sys.exception.subTitle500"),btnText:N,handler:()=>x()}),r(c).set(e.PAGE_NOT_DATA,{title:y("sys.exception.noDataTitle"),subTitle:"",btnText:y("common.redo"),handler:()=>E(),icon:"/assets/no-data.7a45acb3.png"}),r(c).set(e.NET_WORK_ERROR,{title:y("sys.exception.networkErrorTitle"),subTitle:y("sys.exception.networkErrorSubTitle"),btnText:"Refresh",handler:()=>E(),icon:"/assets/net-work.5d408b05.png"}),()=>{const{title:e,subTitle:s,btnText:a,icon:l,handler:n,status:i}=r(O)||{};return o(p,{class:"exception ",status:i,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&o(T,{type:"primary",onClick:n},{default:()=>a}),icon:()=>l?o("img",{src:l},null):null})}}});export default c;
