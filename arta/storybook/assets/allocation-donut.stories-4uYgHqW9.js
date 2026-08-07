import{s as c,d as o}from"./helpers-BwuIyHmI.js";const d={title:"02 Components/Data display/Allocation donut",parameters:o(["Dashboard allocation donut — conic-gradient, no chart library. Selecting a legend chip swaps the center readout; the selected chip state (`--selected`) is the source of truth.","","**Tokens** `arta.cmp.donut.*` + `arta.cmp.chip.*`. **Mobile** donut + chips stack vertically."].join(`
`))},a={render:()=>`
    <div class="sb-h">center readout + legend chips</div>
    <div class="arta-donut-wrap">
      <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-ref-color-violet-40) 3.7% 7.4%, var(--arta-ref-color-mint-50) 7.4% 9%, var(--arta-sys-color-surface-form) 9% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:300px">
        <button class="arta-chip">Stocks/ETFs 94%</button>
        <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
        <button class="arta-chip">Bonds 0.8%</button>
        <button class="arta-chip">Other 1.5%</button>
      </div>
    </div>`,parameters:c(`<div class="arta-donut-wrap">
  <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-sys-color-surface-form) 3.7% 100%)">
    <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
  </div>
  <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
</div>`)};var t,r,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">center readout + legend chips</div>
    <div class="arta-donut-wrap">
      <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-ref-color-violet-40) 3.7% 7.4%, var(--arta-ref-color-mint-50) 7.4% 9%, var(--arta-sys-color-surface-form) 9% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:300px">
        <button class="arta-chip">Stocks/ETFs 94%</button>
        <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
        <button class="arta-chip">Bonds 0.8%</button>
        <button class="arta-chip">Other 1.5%</button>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-donut-wrap">
  <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-sys-color-surface-form) 3.7% 100%)">
    <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
  </div>
  <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
</div>\`)
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const i=["WithLegendChips"];export{a as WithLegendChips,i as __namedExportsOrder,d as default};
