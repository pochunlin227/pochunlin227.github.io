import{j as a}from"./jsx-runtime-47EJ0cPw.js";import"./iframe-DsdvttKI.js";import"./preload-helper-Dp1pzeXC.js";const x={title:"Foundations/Spacing & Radii",parameters:{layout:"fullscreen",docs:{description:{component:'Spacing & radii — from Figma "Brand" → Padding (multiples of 4) and the radius\ntokens in `center/app/globals.css`. Values are `rem` at the 62.5% root, so the\nnumeric token name equals the pixel value (spacing-16 = 1.6rem = 16px).'}}}},c=[8,16,24,32,40,48,60,64,80,88,120],m=[["rounded-8","0.8rem"],["rounded-16","1.6rem"],["rounded-18","1.8rem"],["rounded-24","2.4rem"],["rounded-32","3.2rem"]],r={render:()=>a.jsx("div",{className:"grid gap-12 p-32",children:c.map(e=>a.jsxs("div",{className:"flex items-center gap-16",children:[a.jsxs("div",{className:"typography-body2 w-80 text-neutral-dark-gray",children:["spacing-",e]}),a.jsx("div",{className:"h-16 rounded-[0.4rem] bg-teal-PRIMARY",style:{width:`${e/10}rem`}}),a.jsxs("div",{className:"typography-body2 text-neutral-dark-gray",children:[e,"px"]})]},e))})},s={render:()=>a.jsx("div",{className:"flex flex-wrap gap-24 p-32",children:m.map(([e,p])=>a.jsxs("div",{className:"grid gap-8",children:[a.jsx("div",{className:`h-96 w-96 border border-bg-warm-gray bg-neutral-white ${e}`}),a.jsx("div",{className:"typography-body2 text-teal-700",children:e}),a.jsx("div",{className:"typography-body2 text-neutral-dark-gray",children:p})]},e))})};var d,i,t;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid gap-12 p-32">
      {spacing.map(s => <div key={s} className="flex items-center gap-16">
          <div className="typography-body2 w-80 text-neutral-dark-gray">
            spacing-{s}
          </div>
          <div className="h-16 rounded-[0.4rem] bg-teal-PRIMARY" style={{
        width: \`\${s / 10}rem\`
      }} />
          <div className="typography-body2 text-neutral-dark-gray">{s}px</div>
        </div>)}
    </div>
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var n,o,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-24 p-32">
      {radii.map(([cls, val]) => <div key={cls} className="grid gap-8">
          <div className={\`h-96 w-96 border border-bg-warm-gray bg-neutral-white \${cls}\`} />
          <div className="typography-body2 text-teal-700">{cls}</div>
          <div className="typography-body2 text-neutral-dark-gray">{val}</div>
        </div>)}
    </div>
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const v=["Spacing","Radii"];export{s as Radii,r as Spacing,v as __namedExportsOrder,x as default};
