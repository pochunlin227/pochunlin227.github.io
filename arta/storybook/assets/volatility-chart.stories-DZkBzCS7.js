import{s,d as l}from"./helpers-BwuIyHmI.js";const c={title:"02 Components/Data display/Line chart & legend",parameters:l(["Historical-volatility line chart. Portfolio is always the **violet** series (`chartline.accent`); benchmark is grey. The legend row is its own component (`.arta-legend`), reused by the sector donuts.","","Inline SVG, no chart library — every color is a token. **Mobile** the SVG is fluid (viewBox)."].join(`
`))},a={render:()=>`
    <div class="sb-h">portfolio (violet) vs benchmark (grey)</div>
    <div style="max-width:640px">
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <div class="arta-legend arta-legend--inline">
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>Portfolio</span>
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-secondary)"></span>NASDAQ</span>
        </div>
      </div>
      <svg viewBox="0 0 560 200" style="width:100%;height:auto">
        ${[40,100,160].map(e=>`<line x1="0" y1="${e}" x2="560" y2="${e}" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>`).join("")}
        <path d="M10,180 L30,60 60,50 90,150 130,140 170,155 210,120 250,70 290,60 330,90 380,140 430,150 480,145 530,140" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,185 L30,80 60,75 90,160 130,150 170,170 210,140 250,95 290,85 330,120 380,165 430,170 480,172 530,160" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="545" y="44" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">45%</text>
        <text x="545" y="164" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">15%</text>
      </svg>
    </div>`,parameters:s(`<div class="arta-legend arta-legend--inline">
  <span class="arta-legend__item">
    <span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>
    Portfolio
  </span>
</div>
<svg viewBox="0 0 560 200">
  <line x1="0" y1="100" x2="560" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
</svg>`)};var t,n,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">portfolio (violet) vs benchmark (grey)</div>
    <div style="max-width:640px">
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <div class="arta-legend arta-legend--inline">
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>Portfolio</span>
          <span class="arta-legend__item"><span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-secondary)"></span>NASDAQ</span>
        </div>
      </div>
      <svg viewBox="0 0 560 200" style="width:100%;height:auto">
        \${[40, 100, 160].map(y => \`<line x1="0" y1="\${y}" x2="560" y2="\${y}" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>\`).join('')}
        <path d="M10,180 L30,60 60,50 90,150 130,140 170,155 210,120 250,70 290,60 330,90 380,140 430,150 480,145 530,140" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,185 L30,80 60,75 90,160 130,150 170,170 210,140 250,95 290,85 330,120 380,165 430,170 480,172 530,160" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="545" y="44" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">45%</text>
        <text x="545" y="164" fill="var(--arta-cmp-chartline-label-color)" font-size="10" text-anchor="end">15%</text>
      </svg>
    </div>\`,
  parameters: src(\`<div class="arta-legend arta-legend--inline">
  <span class="arta-legend__item">
    <span class="arta-legend__swatch arta-legend__swatch--line" style="background:var(--arta-cmp-chartline-accent)"></span>
    Portfolio
  </span>
</div>
<svg viewBox="0 0 560 200">
  <line x1="0" y1="100" x2="560" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
</svg>\`)
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const o=["WithLegend"];export{a as WithLegend,o as __namedExportsOrder,c as default};
