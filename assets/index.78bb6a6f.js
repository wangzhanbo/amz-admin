import{f as e}from"./BasicForm.1796ed98.js";import{u as o}from"./useForm.069cadb3.js";import{d as t,g as i,h as r,o as s,i as n,bx as p,j as a}from"./index.7f9d11df.js";import{_ as l}from"./index.ef974eb9.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eed3e6c4.js";import"./isEqual.cf616f95.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.be1c27c7.js";import"./index.5d173e58.js";import"./SearchOutlined.eb5ee535.js";import"./EyeOutlined.00406e72.js";import"./index.25d875eb.js";import"./CheckOutlined.1f0166be.js";import"./DownOutlined.8186e43a.js";import"./index.1b83d9eb.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./RightOutlined.738ce43d.js";import"./RedoOutlined.202801c7.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./Tree.f65cc9de.js";import"./util.62a283cc.js";/* empty css              */import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./DeleteOutlined.512a40ae.js";import"./index.87a8ba38.js";import"./useModal.221a6e76.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./index.18cb88c8.js";import"./Dropdown.ed1fed22.js";import"./index.84854765.js";import"./LeftOutlined.d674a5c8.js";import"./download.cd37389c.js";import"./index.fd14664a.js";import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var c=t({components:{BasicForm:e,PageWrapper:l},setup(){const{createMessage:e}=i(),[t,{validate:r,setProps:s}]=o({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await r(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}}});return{register:t}}});const m=p("data-v-5cbaa0f1"),u=m(((e,o,t,i,p,l)=>{const d=r("BasicForm"),c=r("PageWrapper");return s(),n(c,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:m((()=>[a(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));c.render=u,c.__scopeId="data-v-5cbaa0f1";export default c;