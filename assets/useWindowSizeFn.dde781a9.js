import{bv as e,bY as n,bZ as t}from"./index.7f9d11df.js";function i(i,s=150,r){let o=()=>{i()};const[d,a]=e(o,s,r);o=d;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},f=()=>{window.removeEventListener("resize",o),a()};return n((()=>{m()})),t((()=>{f()})),[m,f]}export{i as u};