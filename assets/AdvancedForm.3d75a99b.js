import{d as e,h as o,o as l,i as n,w as t,j as p}from"./index.3f3e66ec.js";import{_ as s}from"./index.6f2b31a6.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import"./index.2f984403.js";import"./index.355d90f3.js";import{a}from"./index.46e40f07.js";import"./index.09adbb3f.js";import"./FullscreenOutlined.687112ae.js";import"./RightOutlined.d1844cec.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import"./useAttrs.ad5834a5.js";import"./useWindowSizeFn.0885153d.js";import"./index.b3d6e480.js";import"./uuid.a6cec785.js";import"./download.a7f4c239.js";import{u as i}from"./useForm.d4f2eea7.js";import{_ as r}from"./index.21babb04.js";import"./usePageContext.81126167.js";var c=e({components:{BasicForm:s,CollapseContainer:a,PageWrapper:r},setup(){const[e]=i({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=i({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});c.render=function(e,s,a,i,r,c){const d=o("BasicForm"),m=o("CollapseContainer"),f=o("PageWrapper");return l(),n(f,{title:"可折叠表单示例"},{default:t((()=>[p(m,{title:"基础收缩示例"},{default:t((()=>[p(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(m,{title:"超过3行自动收起",class:"mt-4"},{default:t((()=>[p(d,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default c;