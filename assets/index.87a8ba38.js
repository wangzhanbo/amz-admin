import{a9 as e,V as n,d as t,P as o,C as a,G as c,r,z as s,j as l,F as i,bP as u,I as f,J as p,R as d,a3 as b,b8 as v,T as g,W as h,de as O,Y as y,X as j,df as w,bU as m,dg as C,dh as P}from"./index.7f9d11df.js";function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!i(e)}function N(){}function B(e,n,t){var o,a;return null!==(a=null===(o=e[t])||void 0===o?void 0:o.call(e))&&void 0!==a?a:n[t]}var E={success:h,info:O,error:y,warning:j},I={success:w,info:m,error:C,warning:P},S=n("success","info","warning","error"),T=e(t({name:"AAlert",inheritAttrs:!1,props:{type:o.oneOf(S),closable:o.looseBool,closeText:o.VNodeChild,message:o.VNodeChild,description:o.VNodeChild,afterClose:o.func.def(N),showIcon:o.looseBool,prefixCls:o.string,banner:o.looseBool,icon:o.VNodeChild,onClose:o.VNodeChild},emits:["close"],setup:function(e,n){var t=n.slots,o=n.emit,i=n.attrs,h=n.expose,O=a("configProvider",c),y=r(!1),j=r(!1),w=r(),m=function(e){e.preventDefault();var n=w.value;n.style.height="".concat(n.offsetHeight,"px"),n.style.height="".concat(n.offsetHeight,"px"),y.value=!0,o("close",e)},C=function(){var n;y.value=!1,j.value=!0,null===(n=e.afterClose)||void 0===n||n.call(e)};return h({animationEnd:C}),function(){var n,o,a=e.prefixCls,c=e.banner,r=(0,O.getPrefixCls)("alert",a),h=e.closable,P=e.type,x=e.showIcon,N=B(t,e,"closeText"),S=B(t,e,"description"),T=B(t,e,"message"),k=B(t,e,"icon");x=!(!c||void 0!==x)||x;var H=(S?I:E)[P=c&&void 0===P?"warning":P||"info"]||null;N&&(h=!0);var z=s(r,(A(o={},"".concat(r,"-").concat(P),!0),A(o,"".concat(r,"-closing"),y.value),A(o,"".concat(r,"-with-description"),!!S),A(o,"".concat(r,"-no-icon"),!x),A(o,"".concat(r,"-banner"),!!c),A(o,"".concat(r,"-closable"),h),o)),F=h?l("button",{type:"button",onClick:m,class:"".concat(r,"-close-icon"),tabindex:0},[N?l("span",{class:"".concat(r,"-close-text")},D(N)?N:{default:function(){return[N]}}):l(u,null,null)]):null,G=k&&(f(k)?p(k,{class:"".concat(r,"-icon")}):l("span",{class:"".concat(r,"-icon")},D(k)?k:{default:function(){return[k]}}))||l(H,{class:"".concat(r,"-icon")},null),J=d("".concat(r,"-slide-up"),{appear:!1,onAfterLeave:C});return j.value?null:l(g,J,D(n=b(l("div",V(V({},i),{},{class:[i.class,z],"data-show":!y.value,ref:w}),[x?G:null,l("span",{class:"".concat(r,"-message")},D(T)?T:{default:function(){return[T]}}),l("span",{class:"".concat(r,"-description")},D(S)?S:{default:function(){return[S]}}),F]),[[v,!y.value]]))?n:{default:function(){return[n]}})}}}));export{T as A};