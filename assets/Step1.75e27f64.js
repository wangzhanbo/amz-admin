import{d as e,cp as t,cq as i,h as s,o,i as a,j as r,bw as d,m as n}from"./index.8d47259d.js";import{a as p}from"./index.b469a9ef.js";import{I as m}from"./index.3961b9e0.js";import{D as c}from"./index.481b27de.js";import{_ as l}from"./index.504f71eb.js";import{step1Schemas as u}from"./data.2505cb7f.js";import{u as j}from"./useForm.ae3bffc7.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.d8605098.js";import"./CheckOutlined.6d03f126.js";import"./DownOutlined.9a820ce4.js";import"./EyeOutlined.9a4d07ec.js";import"./index.a58d597a.js";import"./index.536a9ea9.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.33bd45d6.js";import"./isEqual.ffb3460c.js";import"./_baseProperty.74f89655.js";import"./toInteger.27c519d9.js";import"./index.7f13caf3.js";import"./index.c9ca5f2c.js";import"./colors.dd4ad3f2.js";import"./index.ec9c374a.js";import"./UpOutlined.95ad411b.js";import"./index.f5c06edb.js";import"./RightOutlined.23eff149.js";import"./RedoOutlined.b6b87535.js";import"./index.2acdbd5b.js";import"./EllipsisOutlined.ac143bad.js";import"./types.0ac09200.js";import"./Tree.b4631d72.js";import"./util.1b616812.js";import"./useAttrs.34eee9f3.js";/* empty css              */import"./uuid.0a03c18e.js";import"./index.e5edd96c.js";import"./DeleteOutlined.a59dead9.js";import"./index.01cab755.js";import"./index.8ced19a3.js";import"./useTimeout.b2057379.js";import"./useWindowSizeFn.3ba76d97.js";import"./index.f0041cf8.js";import"./index.be6382ea.js";import"./domUtils.958d292f.js";import"./_stringToArray.60f5614b.js";import"./useScrollTo.c394ad0f.js";import"./animation.8dadcc24.js";import"./FullscreenOutlined.937dc91b.js";import"./index.e522e81d.js";import"./index.cf2978a3.js";import"./LeftOutlined.4109bee3.js";import"./download.a4b42605.js";var f=e({components:{BasicForm:l,[p.name]:p,ASelectOption:p.Option,[m.name]:m,[m.Group.name]:m.Group,[c.name]:c},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=j({labelWidth:100,schemas:u,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=d("data-v-c22ef27a");t("data-v-c22ef27a");const x={class:"step1"},v={class:"step1-form"},O=n(" 支付宝 "),h=n(" 银联 "),y=r("h3",null,"说明",-1),_=r("h4",null,"转账到支付宝账户",-1),g=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=r("h4",null,"转账到银行卡",-1),F=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const U=b(((e,t,i,d,n,p)=>{const m=s("a-select-option"),c=s("a-select"),l=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return o(),a("div",x,[r("div",v,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(c,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(m,{value:"zfb"},{default:b((()=>[O])),_:1}),r(m,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(l,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),y,_,g,w,F])}));f.render=U,f.__scopeId="data-v-c22ef27a";export default f;
