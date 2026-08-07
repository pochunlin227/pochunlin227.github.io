const x={title:"02 Components/Form controls/Button",argTypes:{label:{control:"text"},variant:{control:"radio",options:["primary","secondary"]},disabled:{control:"boolean"}},args:{label:"Submit application",variant:"primary",disabled:!1},render:({label:y,variant:S,disabled:g})=>`<button class="arta-btn${S==="secondary"?" arta-btn--secondary":""}"${g?" disabled":""}>${y}</button>`},a={},t={args:{variant:"secondary",label:"Save & exit"}},s={args:{disabled:!0}},r={render:()=>`
    <div class="sb-col">
      <div class="sb-h">Primary — rest / hover / press via interaction; focus ring below</div>
      <div class="sb-row">
        <button class="arta-btn">Submit application</button>
        <button class="arta-btn" style="outline: var(--arta-cmp-btn-focus-width) solid var(--arta-cmp-btn-focus-ring); outline-offset: 2px">Focused</button>
        <button class="arta-btn" disabled>Disabled</button>
      </div>
      <div class="sb-h">Secondary</div>
      <div class="sb-row">
        <button class="arta-btn arta-btn--secondary">Save &amp; exit</button>
        <button class="arta-btn arta-btn--secondary" disabled>Disabled</button>
      </div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:52ch">
        Labels are letterspaced caps per Arta's brand voice. The submit CTA never overpromises —
        "Submit application", not "Get my card" (decisioning isn't guaranteed).</p>
    </div>`};var e,n,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Save & exit'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,b,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,m,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-col">
      <div class="sb-h">Primary — rest / hover / press via interaction; focus ring below</div>
      <div class="sb-row">
        <button class="arta-btn">Submit application</button>
        <button class="arta-btn" style="outline: var(--arta-cmp-btn-focus-width) solid var(--arta-cmp-btn-focus-ring); outline-offset: 2px">Focused</button>
        <button class="arta-btn" disabled>Disabled</button>
      </div>
      <div class="sb-h">Secondary</div>
      <div class="sb-row">
        <button class="arta-btn arta-btn--secondary">Save &amp; exit</button>
        <button class="arta-btn arta-btn--secondary" disabled>Disabled</button>
      </div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:52ch">
        Labels are letterspaced caps per Arta's brand voice. The submit CTA never overpromises —
        "Submit application", not "Get my card" (decisioning isn't guaranteed).</p>
    </div>\`
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const f=["Primary","Secondary","Disabled","AllStates"];export{r as AllStates,s as Disabled,a as Primary,t as Secondary,f as __namedExportsOrder,x as default};
