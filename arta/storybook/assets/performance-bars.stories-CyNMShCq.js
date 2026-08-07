import{s as i,d}from"./helpers-BwuIyHmI.js";const n={title:"02 Components/Charts/Performance bars",parameters:d(["Post-tax performance bars — white base + violet delta per year. Pure CSS, fluid width.","","**Tokens** `arta.cmp.bars.*`."].join(`
`))},s={render:()=>`
    <div class="sb-h">base (white) + delta (violet)</div>
    <div style="max-width:560px">
      <div class="arta-bars">
        ${[100,108,116,124,134,145,158,172,190,210,232].map(a=>`
          <div class="arta-bars__bar" style="height:100%">
            <div class="arta-bars__delta" style="height:${Math.round(a*.06)}px"></div>
            <div class="arta-bars__base" style="height:${Math.round(a*.55)}px"></div>
          </div>`).join("")}
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        ${["0Y","1Y","2Y","3Y","4Y","5Y","6Y","7Y","8Y","9Y","10Y"].map(a=>`<span class="arta-bars__lbl" style="flex:1;text-align:center">${a}</span>`).join("")}
      </div>
    </div>`,parameters:i(`<div class="arta-bars">
  <div class="arta-bars__bar">
    <div class="arta-bars__delta" style="height:12px"></div>
    <div class="arta-bars__base" style="height:80px"></div>
  </div>
</div>`)};var e,r,t;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">base (white) + delta (violet)</div>
    <div style="max-width:560px">
      <div class="arta-bars">
        \${[100, 108, 116, 124, 134, 145, 158, 172, 190, 210, 232].map(v => \`
          <div class="arta-bars__bar" style="height:100%">
            <div class="arta-bars__delta" style="height:\${Math.round(v * 0.06)}px"></div>
            <div class="arta-bars__base" style="height:\${Math.round(v * 0.55)}px"></div>
          </div>\`).join('')}
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        \${['0Y', '1Y', '2Y', '3Y', '4Y', '5Y', '6Y', '7Y', '8Y', '9Y', '10Y'].map(l => \`<span class="arta-bars__lbl" style="flex:1;text-align:center">\${l}</span>\`).join('')}
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-bars">
  <div class="arta-bars__bar">
    <div class="arta-bars__delta" style="height:12px"></div>
    <div class="arta-bars__base" style="height:80px"></div>
  </div>
</div>\`)
}`,...(t=(r=s.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const v=["TenYears"];export{s as TenYears,v as __namedExportsOrder,n as default};
