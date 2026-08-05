import{j as e}from"./jsx-runtime-DSc7j9TF.js";import{A as s,P as n,S as t,a as c,M as v,L as j,F as u,D as y}from"./Icons-UMEtuEv9.js";import"./iframe-BpbqnrN1.js";import"./preload-helper-Dp1pzeXC.js";const P={title:"Components/Icons",parameters:{layout:"padded",docs:{description:{component:'Icons — glyphs inlined verbatim from the Figma "Coseeing" → Elements exports,\nwith fills converted to `currentColor` so one component serves every theme\n(set the color via a `text-*` class on the icon or its parent).'}}}},w=[{name:"ArrowLeftIcon",el:e.jsx(s,{})},{name:"ArrowRightIcon",el:e.jsx(c,{})},{name:"PlayIcon",el:e.jsx(n,{})},{name:"StopIcon",el:e.jsx(t,{})},{name:"MenuIcon",el:e.jsx(v,{})},{name:"LinkedinIcon",el:e.jsx(j,{})},{name:"FacebookIcon",el:e.jsx(u,{})},{name:"DotDividerIcon",el:e.jsx(y,{})}],r={render:()=>e.jsx("div",{className:"flex flex-wrap gap-16",children:w.map(a=>e.jsxs("div",{className:"flex min-w-[12rem] flex-col items-center justify-center gap-12 rounded-16 border border-bg-warm-gray bg-neutral-white p-20 text-teal-PRIMARY",children:[e.jsx("div",{className:"flex h-40 items-center",children:a.el}),e.jsx("code",{className:"typography-body3 text-neutral-dark-gray",children:a.name})]},a.name))})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-16",children:[e.jsxs("div",{className:"flex items-center gap-24 rounded-16 bg-bg-light-off-white p-20 text-teal-PRIMARY",children:[e.jsx(s,{})," ",e.jsx(n,{})," ",e.jsx(t,{})," ",e.jsx(c,{})]}),e.jsxs("div",{className:"flex items-center gap-24 rounded-16 bg-teal-PRIMARY p-20 text-orange-100",children:[e.jsx(s,{})," ",e.jsx(n,{})," ",e.jsx(t,{})," ",e.jsx(c,{})]})]})};var i,l,d,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-16">
      {ICONS.map(i => <div key={i.name} className="flex min-w-[12rem] flex-col items-center justify-center gap-12 rounded-16 border border-bg-warm-gray bg-neutral-white p-20 text-teal-PRIMARY">
          <div className="flex h-40 items-center">{i.el}</div>
          <code className="typography-body3 text-neutral-dark-gray">{i.name}</code>
        </div>)}
    </div>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Every icon at natural size, in teal-PRIMARY.",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var x,g,I,f,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16">
      <div className="flex items-center gap-24 rounded-16 bg-bg-light-off-white p-20 text-teal-PRIMARY">
        <ArrowLeftIcon /> <PlayIcon /> <StopIcon /> <ArrowRightIcon />
      </div>
      <div className="flex items-center gap-24 rounded-16 bg-teal-PRIMARY p-20 text-orange-100">
        <ArrowLeftIcon /> <PlayIcon /> <StopIcon /> <ArrowRightIcon />
      </div>
    </div>
}`,...(I=(g=o.parameters)==null?void 0:g.docs)==null?void 0:I.source},description:{story:"The same glyphs recolored purely via text color (currentColor).",...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};const M=["Overview","Themed"];export{r as Overview,o as Themed,M as __namedExportsOrder,P as default};
