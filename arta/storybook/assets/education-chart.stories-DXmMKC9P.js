import{s as n,d as i}from"./helpers-BwuIyHmI.js";const l={title:"02 Components/Charts/Education chart",parameters:i(["Education modal chart — mono-caps title + two comparison lines. Chart primitives are tokens (`chartline.accent/secondary/grid/label-color`)."].join(`
`))},e={render:()=>`
    <div class="sb-h">open-end vs closed-end vehicle</div>
    <div class="arta-keyterms" style="max-width:520px">
      <div class="arta-keyterms__title">Open-ended vehicle would outperform a closed-ended fund when gross returns are equal</div>
      <svg viewBox="0 0 440 200" style="width:100%;height:auto">
        <line x1="0" y1="160" x2="440" y2="160" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="40" x2="440" y2="40" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <path d="M10,185 C120,180 240,150 320,100 S420,30 430,20" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,186 C130,183 260,168 340,140 S420,90 430,80" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="14" y="30" fill="var(--arta-cmp-chartline-accent)" font-size="11">Open-end vehicle · cumulative value</text>
        <text x="14" y="110" fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
      </svg>
    </div>`,parameters:n(`<svg viewBox="0 0 440 200">
  <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
  <text fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
</svg>`)};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">open-end vs closed-end vehicle</div>
    <div class="arta-keyterms" style="max-width:520px">
      <div class="arta-keyterms__title">Open-ended vehicle would outperform a closed-ended fund when gross returns are equal</div>
      <svg viewBox="0 0 440 200" style="width:100%;height:auto">
        <line x1="0" y1="160" x2="440" y2="160" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <line x1="0" y1="40" x2="440" y2="40" stroke="var(--arta-cmp-chartline-grid)" stroke-width="1"/>
        <path d="M10,185 C120,180 240,150 320,100 S420,30 430,20" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
        <path d="M10,186 C130,183 260,168 340,140 S420,90 430,80" fill="none" stroke="var(--arta-cmp-chartline-secondary)" stroke-width="2"/>
        <text x="14" y="30" fill="var(--arta-cmp-chartline-accent)" font-size="11">Open-end vehicle · cumulative value</text>
        <text x="14" y="110" fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
      </svg>
    </div>\`,
  parameters: src(\`<svg viewBox="0 0 440 200">
  <line x1="0" y1="100" x2="440" y2="100" stroke="var(--arta-cmp-chartline-grid)"/>
  <path d="…" fill="none" stroke="var(--arta-cmp-chartline-accent)" stroke-width="2.5"/>
  <text fill="var(--arta-cmp-chartline-label-color)" font-size="11">Closed-end vehicle</text>
</svg>\`)
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const o=["Comparison"];export{e as Comparison,o as __namedExportsOrder,l as default};
