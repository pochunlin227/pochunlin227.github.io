import{j as e}from"./jsx-runtime-ClBOXb86.js";import{C as d}from"./Checkbox-DYARD43U.js";import"./iframe-DZt_JkcD.js";import"./preload-helper-Dp1pzeXC.js";import"./cn-CnaM3o_f.js";const f={title:"Components/Checkbox",component:d,parameters:{layout:"centered",docs:{description:{component:'Checkbox — NOT in the Figma "Brand" file; SSO gap-fill on brand tokens.\nRenders bare when `label` is omitted, or wrapped in a `<label>` when given.\n\nSee **Common/Form** for composed examples.'}}},args:{id:"playground",label:"Remember this device",disabled:!1,defaultChecked:!1},argTypes:{label:{control:"text"},disabled:{control:"boolean"},defaultChecked:{control:"boolean"}}},a={},s={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"grid gap-12",children:[e.jsx(d,{id:"st-unchecked",label:"Unchecked"}),e.jsx(d,{id:"st-checked",label:"Checked",defaultChecked:!0}),e.jsx(d,{id:"st-focus",label:"Focused",className:"pseudo-focus-visible"}),e.jsx(d,{id:"st-disabled",label:"Disabled",disabled:!0}),e.jsx(d,{id:"st-disabled-checked",label:"Disabled · Checked",disabled:!0,defaultChecked:!0})]})};var o,r,c,l,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source},description:{story:"Interactive — drive label / checked / disabled from the Controls panel.",...(t=(l=a.parameters)==null?void 0:l.docs)==null?void 0:t.description}}};var i,n,b,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div className="grid gap-12">
      <Checkbox id="st-unchecked" label="Unchecked" />
      <Checkbox id="st-checked" label="Checked" defaultChecked />
      <Checkbox id="st-focus" label="Focused" className="pseudo-focus-visible" />
      <Checkbox id="st-disabled" label="Disabled" disabled />
      <Checkbox id="st-disabled-checked" label="Disabled · Checked" disabled defaultChecked />
    </div>
}`,...(b=(n=s.parameters)==null?void 0:n.docs)==null?void 0:b.source},description:{story:"Unchecked / Checked / Focused / Disabled at a glance.",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};const g=["Playground","States"];export{a as Playground,s as States,g as __namedExportsOrder,f as default};
