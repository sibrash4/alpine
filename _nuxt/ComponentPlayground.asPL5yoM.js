import{u as m}from"./asyncData.b4nmD6PI.js";import{L as c,H as p,d as i,ac as u,r as l,M as e,k as d}from"./entry.hNjXAiug.js";import f from"./Ellipsis.KahAvAIa.js";import y from"./ComponentPlaygroundData.3fRgg4RG.js";import"./TabsHeader.NSYPey2N.js";import"./ComponentPlaygroundProps.YQuqoeTx.js";import"./ProseH4.gG-JarpM.js";import"./ProseCodeInline.CF9W5IlT.js";import"./Badge.qWM38P7I.js";import"./MDCSlot.KTkelqOp.js";import"./slot.1FzG1a8v.js";import"./ProseP.Z7OBc4md.js";import"./index.q7XBYoDR.js";import"./ComponentPlaygroundSlots.vue.DkFRe4Ay.js";import"./ComponentPlaygroundTokens.vue.9sXT7X6A.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=d(h,[["__scopeId","data-v-8134fc35"]]);export{E as default};
