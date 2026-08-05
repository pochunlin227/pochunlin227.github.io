import{j as e}from"./jsx-runtime-DSc7j9TF.js";import{c as q}from"./cn-CnaM3o_f.js";import{M as C}from"./Icons-UMEtuEv9.js";import"./iframe-BpbqnrN1.js";import"./preload-helper-Dp1pzeXC.js";const I=[{label:"品牌緣起",href:"#"},{label:"專案介紹",href:"#"},{label:"團隊成員",href:"#"}];function x({links:w=I,contactLabel:k="聯絡我們",contactHref:N="#",ctaLabel:j="成為志工",ctaHref:R="#",onMenuClick:T,className:M}){return e.jsxs("nav",{className:q("flex items-center justify-between bg-teal-PRIMARY px-20 py-12 tablet:px-40 tablet:py-24 desktop:px-80",M),children:[e.jsxs("div",{className:"flex items-center gap-24",children:[e.jsxs("a",{href:"/","aria-label":"Coseeing 首頁",className:"shrink-0",children:[e.jsx("img",{src:"brand/coseeing-logo-stacked.svg",alt:"Coseeing",className:"h-[3.4rem] w-[6rem] tablet:hidden"}),e.jsx("img",{src:"brand/coseeing-logo.svg",alt:"Coseeing",className:"hidden h-[3.13rem] w-[23.15rem] tablet:block"})]}),e.jsx("ul",{className:"m-0 hidden list-none gap-16 p-0 desktop:flex",children:w.map(o=>e.jsx("li",{children:e.jsx("a",{href:o.href,className:"typography-emphasised1 flex items-center justify-center rounded-8 px-12 py-8 text-neutral-white no-underline transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY",children:o.label})},o.label))})]}),e.jsxs("div",{className:"flex items-center gap-12 tablet:gap-20 desktop:gap-16",children:[e.jsx("a",{href:N,className:"typography-strong1 hidden items-center justify-center rounded-8 px-16 py-8 text-bg-light-off-white no-underline transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY desktop:flex",children:k}),e.jsx("a",{href:R,className:"typography-strong1 flex items-center justify-center rounded-[0.6rem] border border-bg-warm-gray px-12 py-6 text-bg-light-off-white no-underline transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY tablet:rounded-8 tablet:px-16 tablet:py-8",children:j}),e.jsx("button",{type:"button","aria-label":"開啟選單",onClick:T,className:"flex size-24 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-neutral-white transition-colors hover:text-bg-warm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY desktop:hidden",children:e.jsx(C,{})})]})]})}x.__docgenInfo={description:"",methods:[],displayName:"Nav",props:{links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"NavLink[]"},description:"Desktop tab links (Figma: 品牌緣起 / 專案介紹 / 團隊成員).",defaultValue:{value:`[
  { label: "品牌緣起", href: "#" },
  { label: "專案介紹", href: "#" },
  { label: "團隊成員", href: "#" },
]`,computed:!1}},contactLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"聯絡我們"',computed:!1}},contactHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},ctaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"成為志工"',computed:!1}},ctaHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Components/Nav",component:x,parameters:{layout:"fullscreen",viewport:{options:{mobile:{name:"Mobile (375)",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet (768)",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop (1440)",styles:{width:"1440px",height:"900px"}}}},docs:{description:{component:`Nav — from Figma "Coseeing" → Elements → Nav. Three Figma variants (Nav- /
Nav-Tablet / Nav-Mobile) implemented as one responsive component:
- **Desktop (≥1280)** — full logo, tab links, 聯絡我們, outlined 成為志工
- **Tablet (≥768)** — full logo, outlined 成為志工, hamburger
- **Mobile** — stacked logo, compact 成為志工, hamburger

Use the viewport toolbar (or the per-breakpoint stories) to preview each
layout. The hamburger only fires \`onMenuClick\` — the menu itself is owned by
the page.`}}},argTypes:{onMenuClick:{action:"menu"}}},t={},s={globals:{viewport:{value:"desktop",isRotated:!1}}},a={globals:{viewport:{value:"tablet",isRotated:!1}}},r={globals:{viewport:{value:"mobile",isRotated:!1}}};var n,i,l,c,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:"Responsive — resize the preview or use the viewport toolbar.",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var d,u,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "tablet",
      isRotated: false
    }
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,v,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const Y=["Playground","Desktop","Tablet","Mobile"];export{s as Desktop,r as Mobile,t as Playground,a as Tablet,Y as __namedExportsOrder,V as default};
