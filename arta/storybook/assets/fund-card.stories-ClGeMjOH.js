import{s as c,d as v}from"./helpers-BwuIyHmI.js";const u={title:"Product Patterns/Cards & Catalog/Fund Card",parameters:v(["Private-markets fund card. Names stay **masked** (`K***`) until the member is accredited/logged in — compliance gating rendered honestly.","","**States** default · with badge (POPULAR / NICHE) · badge-less (icon placeholder). **Tokens** `arta.cmp.fund.*`. **Mobile** 2-column grid."].join(`
`))},a={render:()=>`
    <div class="sb-h">masked names · POPULAR / NICHE badges · S$ minimums</div>
    <div class="arta-fund-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;max-width:680px">
      ${[["K***","Private Equity","S$10K","POPULAR","var(--arta-sys-gradient-card-art-3)"],["W********","Private Equity","S$25K","","var(--arta-sys-gradient-card-art-3)"],["F*******","Venture Capital","S$250K","NICHE","var(--arta-sys-gradient-card-art-2)"]].map(([i,n,e,s,l])=>`
        <div class="arta-fund" style="background:${l}">
          <div><div class="arta-fund__name">${i}</div><div class="arta-fund__cat">${n}</div></div>
          <div class="arta-fund__foot">
            ${s?`<span class="arta-fund__badge">${s}</span>`:'<span style="opacity:.8">⧈</span>'}
            <div class="arta-fund__min">${e}<small>Min</small></div>
          </div>
        </div>`).join("")}
    </div>`,parameters:c(`<div class="arta-fund" style="background:var(--arta-sys-gradient-card-art-3)">
  <div><div class="arta-fund__name">K***</div><div class="arta-fund__cat">Private Equity</div></div>
  <div class="arta-fund__foot">
    <span class="arta-fund__badge">POPULAR</span>
    <div class="arta-fund__min">S$10K<small>Min</small></div>
  </div>
</div>`)};var d,r,t;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">masked names · POPULAR / NICHE badges · S$ minimums</div>
    <div class="arta-fund-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;max-width:680px">
      \${[['K***', 'Private Equity', 'S$10K', 'POPULAR', 'var(--arta-sys-gradient-card-art-3)'], ['W********', 'Private Equity', 'S$25K', '', 'var(--arta-sys-gradient-card-art-3)'], ['F*******', 'Venture Capital', 'S$250K', 'NICHE', 'var(--arta-sys-gradient-card-art-2)']].map(([nm, cat, min, badge, bg]) => \`
        <div class="arta-fund" style="background:\${bg}">
          <div><div class="arta-fund__name">\${nm}</div><div class="arta-fund__cat">\${cat}</div></div>
          <div class="arta-fund__foot">
            \${badge ? \`<span class="arta-fund__badge">\${badge}</span>\` : '<span style="opacity:.8">⧈</span>'}
            <div class="arta-fund__min">\${min}<small>Min</small></div>
          </div>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-fund" style="background:var(--arta-sys-gradient-card-art-3)">
  <div><div class="arta-fund__name">K***</div><div class="arta-fund__cat">Private Equity</div></div>
  <div class="arta-fund__foot">
    <span class="arta-fund__badge">POPULAR</span>
    <div class="arta-fund__min">S$10K<small>Min</small></div>
  </div>
</div>\`)
}`,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const o=["Variants"];export{a as Variants,o as __namedExportsOrder,u as default};
