import{d as h,ab as m,H as A,M as o,am as _}from"./entry.hNjXAiug.js";const w=["p","h1","h2","h3","h4","h5","h6","li"];function f(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function a(r){return f(r,"text")||f(r,Symbol.for("v-txt"))}function p(r){var t;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((t=r.children)==null?void 0:t.default)=="function"?r.children.default():[]}function l(r){if(!r)return"";if(Array.isArray(r))return r.map(l).join("");if(a(r))return r.children||r.value||"";const t=p(r);return Array.isArray(t)?t.map(l).filter(Boolean).join(""):""}function y(r,t=[]){if(Array.isArray(r))return r.flatMap(n=>y(n,t));let e=r;return t.some(n=>n==="*"||f(r,n))&&(e=p(r)||r,!Array.isArray(e)&&w.some(n=>f(r,n))&&(e=[e])),e}function c(r,t=[]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(e=>c(y(e,[t[0]]),t.slice(1))).filter(e=>!(a(e)&&l(e).trim()==="")):r}function S(r,t=[]){return typeof t=="string"&&(t=t.split(",").map(e=>e.trim()).filter(Boolean)),t.length?c(r,t).reduce((e,n)=>(a(n)?typeof e[e.length-1]=="string"?e[e.length-1]+=n.children:e.push(n.children):e.push(n),e),[]):r}const g=h({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(r){const{parent:t}=_(),{default:e}=m(),n=A(()=>typeof r.unwrap=="string"?r.unwrap.split(" "):["*"]);return{fallbackSlot:e,tags:n,parent:t}},render({use:r,unwrap:t,fallbackSlot:e,tags:n,parent:i}){var s;try{let u=r;return typeof r=="string"&&(u=(i==null?void 0:i.slots[r])||((s=i==null?void 0:i.parent)==null?void 0:s.slots[r]),console.warn(`Please set :use="$slots.${r}" in <MDCSlot> component to enable reactivity`)),u?t?S(u(),n):[u()]:e?e():o("div")}catch{return o("div")}}}),C=g;export{C as _,S as f,y as u};