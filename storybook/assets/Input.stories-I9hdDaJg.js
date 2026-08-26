import{j as a}from"./jsx-runtime-ClBOXb86.js";import{I as y}from"./Input-B8x3f0t0.js";import"./iframe-DZt_JkcD.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-CnaM3o_f.js";const N={title:"Components/Input",component:y,parameters:{layout:"centered",docs:{description:{component:`Input — NOT in the Figma "Brand" file; SSO gap-fill on brand tokens. Visually
matched to the \`.ory-elements\` input rules in globals.css (rounded-8,
warm-gray border, white field, teal text, orange focus ring).

See **Common/Form** for composed Field + Input examples.`}}},args:{type:"text",placeholder:"you@example.com",invalid:!1,disabled:!1},argTypes:{type:{control:"select",options:["text","email","password","tel","number","search","url"]},invalid:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}},decorators:[e=>a.jsx("div",{className:"w-[32rem]",children:a.jsx(e,{})})]},s={},g=[{label:"Default"},{label:"Hover",className:"pseudo-hover"},{label:"Focused",className:"pseudo-focus-visible"},{label:"Invalid",props:{invalid:!0,defaultValue:"not-an-email"}},{label:"Disabled",props:{disabled:!0,defaultValue:"locked@example.com"}}],r={parameters:{layout:"padded"},render:()=>a.jsx("div",{className:"grid max-w-[40rem] gap-16",children:g.map(e=>a.jsxs("div",{className:"grid gap-4",children:[a.jsx("span",{className:"typography-body2 text-neutral-dark-gray",children:e.label}),a.jsx(y,{placeholder:"you@example.com",className:e.className,...e.props})]},e.label))})};var o,l,t,d,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(t=(l=s.parameters)==null?void 0:l.docs)==null?void 0:t.source},description:{story:"Interactive — drive type / invalid / disabled from the Controls panel.",...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.description}}};var p,c,i,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="grid max-w-[40rem] gap-16">
      {STATES.map(s => <div key={s.label} className="grid gap-4">
          <span className="typography-body2 text-neutral-dark-gray">{s.label}</span>
          <Input placeholder="you@example.com" className={s.className} {...s.props} />
        </div>)}
    </div>
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"Default / Hover / Focused / Invalid / Disabled at a glance.",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};const S=["Playground","States"];export{s as Playground,r as States,S as __namedExportsOrder,N as default};
