import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.zVQ17hq6.js";import{u as d}from"./asyncData.UuFV19vj.js";import f from"./Ellipsis.8dEjwTbP.js";import y from"./ComponentPlaygroundData.YC0RnuVW.js";import"./TabsHeader.ZJOFnt0Z.js";import"./ComponentPlaygroundProps.jvV9Qq-h.js";import"./ProseH4.LgZWryPk.js";import"./ProseCodeInline.UDApILJv.js";import"./Badge.h3PZPUaa.js";import"./MDCSlot.myljjjoI.js";import"./slot.7EovEi3-.js";import"./ProseP.5M8GKRtz.js";import"./index.rIZPbEgM.js";import"./ComponentPlaygroundSlots.vue.ylqCrY6E.js";import"./ComponentPlaygroundTokens.vue.KuCDtvEM.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-8134fc35"]]);export{E as default};
