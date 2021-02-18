import{_ as e}from"./index.485cc0b1.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,g as s,h as n,o as a,i as c,j as l,w as r,m as d}from"./index.7f9d11df.js";import{d as m}from"./table.1ac48d66.js";import{u as p}from"./useTable.18b63247.js";import"./index.25d875eb.js";import"./SearchOutlined.eb5ee535.js";import"./CheckOutlined.1f0166be.js";import"./DownOutlined.8186e43a.js";import"./BasicForm.1796ed98.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eed3e6c4.js";import"./isEqual.cf616f95.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.be1c27c7.js";import"./index.5d173e58.js";import"./EyeOutlined.00406e72.js";import"./index.1b83d9eb.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./RightOutlined.738ce43d.js";import"./RedoOutlined.202801c7.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./Tree.f65cc9de.js";import"./util.62a283cc.js";/* empty css              */import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./DeleteOutlined.512a40ae.js";import"./index.87a8ba38.js";import"./useModal.221a6e76.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./index.18cb88c8.js";import"./Dropdown.ed1fed22.js";import"./index.84854765.js";import"./LeftOutlined.d674a5c8.js";import"./download.cd37389c.js";import"./index.c36a065d.js";import"./DoubleLeftOutlined.1f9fac32.js";import"./DoubleRightOutlined.0e9a17f4.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b06e8cfe.js";import"./CaretDownFilled.142b7f4e.js";import"./useForm.069cadb3.js";import"./clickOutside.e14cef1b.js";import"./useSortable.345935aa.js";import"./useExpose.f1d5eaba.js";var u=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:c,getDataSource:l,reload:r,getPaginationRef:d,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),r({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),r()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=d(" 还原 "),g=d(" 开启loading "),C=d(" 更改Columns "),k=d(" 获取Columns "),x=d(" 获取表格数据 "),S=d(" 跳转到第2页 "),w={class:"mb-4"},T=d(" 获取选中行 "),R=d(" 获取选中行Key "),O=d(" 设置选中行 "),_=d(" 清空选中行 "),y=d(" 获取分页信息 ");u.render=function(e,t,i,o,s,d){const m=n("a-button"),p=n("BasicTable");return a(),c("div",f,[l("div",j,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:r((()=>[b])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:r((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:r((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:r((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:r((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:r((()=>[S])),_:1},8,["onClick"])]),l("div",w,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:r((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:r((()=>[R])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:r((()=>[O])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:r((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:r((()=>[y])),_:1},8,["onClick"])]),l(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;