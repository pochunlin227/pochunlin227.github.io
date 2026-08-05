import{j as e}from"./jsx-runtime-CcxgAVZW.js";import{S as r}from"./Select-VAY5B_Pc.js";import"./iframe-CfJxx9h4.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-CnaM3o_f.js";const y={title:"Components/Select",component:r,parameters:{layout:"centered",docs:{description:{component:`Select — NOT in the Figma "Brand" file; SSO gap-fill on brand tokens.
Matches the Input shell (rounded-8, warm-gray border, orange focus ring).

See **Common/Form** for composed Field + Select examples.`}}},args:{invalid:!1,disabled:!1},argTypes:{invalid:{control:"boolean"},disabled:{control:"boolean"}},decorators:[a=>e.jsx("div",{className:"w-[32rem]",children:e.jsx(a,{})})],render:a=>e.jsxs(r,{defaultValue:"zh-Hant",...a,children:[e.jsx("option",{value:"zh-Hant",children:"繁體中文"}),e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"ja",children:"日本語"})]})},s={},l={parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"grid max-w-[40rem] gap-16",children:[{label:"Default"},{label:"Hover",className:"pseudo-hover"},{label:"Focused",className:"pseudo-focus-visible"},{label:"Invalid",props:{invalid:!0}},{label:"Disabled",props:{disabled:!0}}].map(a=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx("span",{className:"typography-body2 text-neutral-dark-gray",children:a.label}),e.jsxs(r,{defaultValue:"zh-Hant",className:a.className,...a.props,children:[e.jsx("option",{value:"zh-Hant",children:"繁體中文"}),e.jsx("option",{value:"en",children:"English"})]})]},a.label))})};var n,o,t,d,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source},description:{story:"Interactive — drive invalid / disabled from the Controls panel.",...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.description}}};var p,c,m,u,v;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="grid max-w-[40rem] gap-16">
      {[{
      label: "Default"
    }, {
      label: "Hover",
      className: "pseudo-hover"
    }, {
      label: "Focused",
      className: "pseudo-focus-visible"
    }, {
      label: "Invalid",
      props: {
        invalid: true
      }
    }, {
      label: "Disabled",
      props: {
        disabled: true
      }
    }].map(s => <div key={s.label} className="grid gap-4">
          <span className="typography-body2 text-neutral-dark-gray">{s.label}</span>
          <Select defaultValue="zh-Hant" className={s.className} {...s.props}>
            <option value="zh-Hant">繁體中文</option>
            <option value="en">English</option>
          </Select>
        </div>)}
    </div>
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Default / Hover / Focused / Invalid / Disabled at a glance.",...(v=(u=l.parameters)==null?void 0:u.docs)==null?void 0:v.description}}};const N=["Playground","States"];export{s as Playground,l as States,N as __namedExportsOrder,y as default};
