let t=document.createElement("style");t.innerHTML=".account-setting{margin:12px;background:#fff}.account-setting .base-title{padding-left:0}.account-setting .ant-tabs-tab-active{background-color:#e6f7ff}",document.head.appendChild(t);import{a as e,i,o as s,j as o,w as r,k as a,aM as n,b9 as d,cM as m}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./index.e7bb1c19.js";import"./Trigger.919a25bc.js";import"./omit.dfa8bda2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import"./CheckOutlined.f7557516.js";import"./index.aeff4252.js";import"./colors.1664fe18.js";import"./RightOutlined.76c81f82.js";import"./types.9988e678.js";import"./index.25634dc1.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./_baseFor.f4e5f03f.js";import"./index.98d0a77d.js";import"./index.a172b251.js";import"./index.4185348b.js";import"./index.5ba92d97.js";import{T as p}from"./index.d0076f6e.js";import"./UpOutlined.4db44387.js";import"./LeftOutlined.bc728dc1.js";import"./index.e21bca80.js";import"./index.6c0d5231.js";import"./index.83bd1b65.js";import"./index.00ee5d21.js";import"./zh_CN.0242bd16.js";import"./index.6a5d589f.js";import"./index.62730274.js";import"./index.72c834d6.js";import"./index.4a8e715a.js";import"./FileOutlined.15507a5a.js";import{s as c}from"./index.1f4cd203.js";import"./CloseOutlined.d97483db.js";import"./FullscreenOutlined.d60c703c.js";import"./LoadingOutlined.c197daea.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import"./header.0299ae16.js";import"./useAttrs.42151342.js";import"./index.5d2c4097.js";import"./index.a6a5b0ce.js";import"./useWindowSizeFn.3173c9f0.js";import"./useForm.2f01440e.js";import{s as j}from"./data.8adaf682.js";import f from"./AccountBind.78c412a2.js";import l from"./BaseSetting.f2b0d509.js";import b from"./SecureSetting.c618cacd.js";import u from"./MsgNotify.c9929a70.js";var x=e({components:{ScrollContainer:c,Tabs:p,TabPane:p.TabPane,BaseSetting:l,SecureSetting:b,AccountBind:f,MsgNotify:u},setup:()=>({prefixCls:"account-setting",settingList:j,tabBarStyle:{width:"220px"}})});x.render=function(t,e,p,c,j,f){const l=i("TabPane"),b=i("Tabs"),u=i("ScrollContainer");return s(),o(u,null,{default:r((()=>[a("div",{ref:"wrapperRef",class:t.prefixCls},[a(b,{"tab-position":"left",tabBarStyle:t.tabBarStyle},{default:r((()=>[(s(!0),o(n,null,d(t.settingList,(t=>(s(),o(l,{key:t.key,tab:t.name},{default:r((()=>[(s(),o(m(t.component)))])),_:2},1032,["tab"])))),128))])),_:1},8,["tabBarStyle"])],2)])),_:1})};export default x;