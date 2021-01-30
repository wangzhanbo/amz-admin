import{_ as e}from"./index.b9a839fb.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,g as s,h as n,o as a,i as l,j as r,w as c,m as d}from"./index.8d47259d.js";import{d as m}from"./table.1f2e3a9d.js";import{u as p}from"./useTable.da6ebc10.js";import"./index.b469a9ef.js";import"./SearchOutlined.d8605098.js";import"./CheckOutlined.6d03f126.js";import"./DownOutlined.9a820ce4.js";import"./index.504f71eb.js";import"./index.a58d597a.js";import"./index.536a9ea9.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.33bd45d6.js";import"./isEqual.ffb3460c.js";import"./_baseProperty.74f89655.js";import"./toInteger.27c519d9.js";import"./index.7f13caf3.js";import"./index.3961b9e0.js";import"./EyeOutlined.9a4d07ec.js";import"./index.c9ca5f2c.js";import"./colors.dd4ad3f2.js";import"./index.ec9c374a.js";import"./UpOutlined.95ad411b.js";import"./index.f5c06edb.js";import"./RightOutlined.23eff149.js";import"./RedoOutlined.b6b87535.js";import"./index.2acdbd5b.js";import"./EllipsisOutlined.ac143bad.js";import"./types.0ac09200.js";import"./Tree.b4631d72.js";import"./util.1b616812.js";import"./useAttrs.34eee9f3.js";/* empty css              */import"./uuid.0a03c18e.js";import"./index.e5edd96c.js";import"./DeleteOutlined.a59dead9.js";import"./index.01cab755.js";import"./index.8ced19a3.js";import"./useTimeout.b2057379.js";import"./useWindowSizeFn.3ba76d97.js";import"./index.f0041cf8.js";import"./index.be6382ea.js";import"./domUtils.958d292f.js";import"./_stringToArray.60f5614b.js";import"./useScrollTo.c394ad0f.js";import"./animation.8dadcc24.js";import"./FullscreenOutlined.937dc91b.js";import"./index.481b27de.js";import"./index.e522e81d.js";import"./index.cf2978a3.js";import"./LeftOutlined.4109bee3.js";import"./download.a4b42605.js";import"./index.61a494b6.js";import"./DoubleLeftOutlined.46581461.js";import"./DoubleRightOutlined.b467a1b1.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.aa4c77a9.js";import"./CaretDownFilled.11b38519.js";import"./clickOutside.b82a3ad8.js";import"./useSortable.e8cd0a53.js";import"./SettingOutlined.4d5b6906.js";import"./useExpose.baa75a2d.js";import"./useForm.ae3bffc7.js";var u=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:l,getDataSource:r,reload:c,getPaginationRef:d,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),c({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),c()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=d(" 还原 "),g=d(" 开启loading "),C=d(" 更改Columns "),x=d(" 获取Columns "),k=d(" 获取表格数据 "),S=d(" 跳转到第2页 "),w={class:"mb-4"},T=d(" 获取选中行 "),R=d(" 获取选中行Key "),O=d(" 设置选中行 "),_=d(" 清空选中行 "),y=d(" 获取分页信息 ");u.render=function(e,t,i,o,s,d){const m=n("a-button"),p=n("BasicTable");return a(),l("div",f,[r("div",j,[r(m,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[b])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[C])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[x])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[k])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),r("div",w,[r(m,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[T])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[R])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[O])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[_])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[y])),_:1},8,["onClick"])]),r(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;
