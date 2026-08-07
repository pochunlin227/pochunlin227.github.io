import{s as n,d as c}from"./helpers-BwuIyHmI.js";const i={title:"02 Components/Charts/Sector composition",parameters:c(["Twin donuts (portfolio vs benchmark) sharing one color legend. Comparison is **layout, not a new component** — same donut primitive, two instances.","","**Tokens** donut + `.arta-legend`. **Mobile** donuts stack, legend below."].join(`
`))},a={render:()=>`
    <div class="sb-h">portfolio vs NASDAQ + shared legend</div>
    <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:center">
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-ref-color-mint-50) 78% 92%, var(--arta-sys-color-surface-form) 92% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
      </div>
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 55%, var(--arta-ref-color-mint-50) 55% 68%, var(--arta-ref-color-sky-50) 68% 76%, var(--arta-ref-color-violet-50) 76% 84%, var(--arta-sys-color-surface-form) 84% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">NASDAQ</div></div>
      </div>
      <div class="arta-legend">
        ${[["var(--arta-ref-color-pink-60)","Technology"],["var(--arta-ref-color-mint-50)","Consumer Discretionary"],["var(--arta-ref-color-sky-50)","Consumer Staples"],["var(--arta-ref-color-violet-50)","Communication Services"]].map(([s,e])=>`<span class="arta-legend__item"><span class="arta-legend__swatch" style="background:${s}"></span>${e}</span>`).join("")}
      </div>
    </div>`,parameters:n(`<div class="arta-donut" style="background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-sys-color-surface-form) 78% 100%)">
  <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
</div>
<span class="arta-legend__item">
  <span class="arta-legend__swatch" style="background:var(--arta-ref-color-pink-60)"></span>Technology
</span>`)};var r,o,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">portfolio vs NASDAQ + shared legend</div>
    <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:center">
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-ref-color-mint-50) 78% 92%, var(--arta-sys-color-surface-form) 92% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
      </div>
      <div class="arta-donut" style="--arta-cmp-donut-size:130px;--arta-cmp-donut-hole:92px;background:conic-gradient(var(--arta-ref-color-pink-60) 0 55%, var(--arta-ref-color-mint-50) 55% 68%, var(--arta-ref-color-sky-50) 68% 76%, var(--arta-ref-color-violet-50) 76% 84%, var(--arta-sys-color-surface-form) 84% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__lbl">NASDAQ</div></div>
      </div>
      <div class="arta-legend">
        \${[['var(--arta-ref-color-pink-60)', 'Technology'], ['var(--arta-ref-color-mint-50)', 'Consumer Discretionary'], ['var(--arta-ref-color-sky-50)', 'Consumer Staples'], ['var(--arta-ref-color-violet-50)', 'Communication Services']].map(([c, l]) => \`<span class="arta-legend__item"><span class="arta-legend__swatch" style="background:\${c}"></span>\${l}</span>\`).join('')}
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-donut" style="background:conic-gradient(var(--arta-ref-color-pink-60) 0 78%, var(--arta-sys-color-surface-form) 78% 100%)">
  <div class="arta-donut__center"><div class="arta-donut__lbl">Portfolio</div></div>
</div>
<span class="arta-legend__item">
  <span class="arta-legend__swatch" style="background:var(--arta-ref-color-pink-60)"></span>Technology
</span>\`)
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const d=["TwinDonuts"];export{a as TwinDonuts,d as __namedExportsOrder,i as default};
