import{j as e}from"./jsx-runtime-ClBOXb86.js";import{c as I}from"./cn-CnaM3o_f.js";import{M as A}from"./Icons-BhXLSfjM.js";import"./iframe-DZt_JkcD.js";import"./preload-helper-Dp1pzeXC.js";const P=[{label:"品牌緣起",href:"#"},{label:"專案介紹",href:"#"},{label:"團隊成員",href:"#"}];function w({links:k=P,contactLabel:N="聯絡我們",contactHref:j="#",ctaLabel:R="成為志工",ctaHref:T="#",menuExpanded:n=!1,menuId:M,onMenuClick:q,className:C}){return e.jsxs("nav",{className:I("flex items-center justify-between bg-teal-PRIMARY px-20 py-12 tablet:px-40 tablet:py-24 desktop:px-80",C),children:[e.jsxs("div",{className:"flex items-center gap-24",children:[e.jsxs("a",{href:"/","aria-label":"Coseeing 首頁",className:"shrink-0",children:[e.jsx("img",{src:"brand/coseeing-logo-stacked.svg",alt:"Coseeing",className:"h-[3.4rem] w-[6rem] tablet:hidden"}),e.jsx("img",{src:"brand/coseeing-logo.svg",alt:"Coseeing",className:"hidden h-[3.13rem] w-[23.15rem] tablet:block"})]}),e.jsx("ul",{className:"m-0 hidden list-none gap-16 p-0 desktop:flex",children:k.map(o=>e.jsx("li",{children:e.jsx("a",{href:o.href,className:"typography-emphasised1 flex items-center justify-center rounded-8 px-12 py-8 text-neutral-white no-underline transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY",children:o.label})},o.label))})]}),e.jsxs("div",{className:"flex items-center gap-12 tablet:gap-20 desktop:gap-16",children:[e.jsx("a",{href:j,className:"typography-strong1 hidden items-center justify-center rounded-8 px-16 py-8 text-bg-light-off-white no-underline transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY desktop:flex",children:N}),e.jsx("a",{href:T,className:"typography-strong1 flex items-center justify-center rounded-[0.6rem] border border-bg-warm-gray px-12 py-6 text-bg-light-off-white no-underline transition-colors hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY tablet:rounded-8 tablet:px-16 tablet:py-8",children:R}),e.jsx("button",{type:"button","aria-label":n?"關閉選單":"開啟選單","aria-expanded":n,"aria-controls":M,onClick:q,className:"flex size-24 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-neutral-white transition-colors hover:text-bg-warm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-PRIMARY desktop:hidden",children:e.jsx(A,{})})]})]})}w.__docgenInfo={description:"",methods:[],displayName:"Nav",props:{links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"NavLink[]"},description:"Desktop tab links (Figma: 品牌緣起 / 專案介紹 / 團隊成員).",defaultValue:{value:`[
  { label: "品牌緣起", href: "#" },
  { label: "專案介紹", href: "#" },
  { label: "團隊成員", href: "#" },
]`,computed:!1}},contactLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"聯絡我們"',computed:!1}},contactHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},ctaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"成為志工"',computed:!1}},ctaHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},menuExpanded:{required:!1,tsType:{name:"boolean"},description:"Whether the page-owned menu the hamburger toggles is currently open.",defaultValue:{value:"false",computed:!1}},menuId:{required:!1,tsType:{name:"string"},description:"id of the page-owned menu element — wired to aria-controls."},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"Components/Nav",component:w,parameters:{layout:"fullscreen",viewport:{options:{mobile:{name:"Mobile (375)",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet (768)",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop (1440)",styles:{width:"1440px",height:"900px"}}}},docs:{description:{component:`Nav — from Figma "Coseeing" → Elements → Nav. Three Figma variants (Nav- /
Nav-Tablet / Nav-Mobile) implemented as one responsive component:
- **Desktop (≥1280)** — full logo, tab links, 聯絡我們, outlined 成為志工
- **Tablet (≥768)** — full logo, outlined 成為志工, hamburger
- **Mobile** — stacked logo, compact 成為志工, hamburger

Use the viewport toolbar (or the per-breakpoint stories) to preview each
layout. The hamburger only fires \`onMenuClick\` — the menu itself is owned by
the page.`}}},argTypes:{onMenuClick:{action:"menu"},menuExpanded:{control:"boolean"}}},t={},a={globals:{viewport:{value:"desktop",isRotated:!1}}},s={globals:{viewport:{value:"tablet",isRotated:!1}}},r={globals:{viewport:{value:"mobile",isRotated:!1}}};var i,l,p,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Responsive — resize the preview or use the viewport toolbar.",...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,f,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "tablet",
      isRotated: false
    }
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,y,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const _=["Playground","Desktop","Tablet","Mobile"];export{a as Desktop,r as Mobile,t as Playground,s as Tablet,_ as __namedExportsOrder,Y as default};
