import h from"./Input.A-bjZ-wX.js";import y from"./Button.Kifo6Qz8.js";import{d as b,v as x,l as v,r as S,a1 as w,b as l,c,e as d,F as B,Y as C,L as s,g as F,w as R,t as T,C as V,W as k,k as E}from"./entry.zVQ17hq6.js";const j=["action"],N={class:"inputs"},O=b({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(m){const i=x().alpine,{FORMSPREE_URL:n}=v().public;n||console.warn("No FORMSPREE_URL provided");const t=S(),p=w(m.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const u=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:u,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=i.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,u)=>{const r=h,a=y;return l(),c("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[d("div",N,[(l(!0),c(B,null,C(s(p),(o,_)=>(l(),k(r,{key:_,modelValue:o.data,"onUpdate:modelValue":g=>o.data=g,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[F(a,{type:"submit",disabled:!s(n)},{default:R(()=>[V(T(s(t)?s(t):m.submitButtonText),1)]),_:1},8,["disabled"])])],40,j)}}}),Y=E(O,[["__scopeId","data-v-08957e45"]]);export{Y as default};
