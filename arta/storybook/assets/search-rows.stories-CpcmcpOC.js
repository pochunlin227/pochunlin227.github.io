import{s as l,d as h}from"./helpers-BwuIyHmI.js";const A={title:"02 Components/Rows/Search result rows",parameters:h(['"Search stocks & ETFs" result rows — ticker chip, name, price, solid green/red change pill.',"","**States** default · hover/highlight (`surface.raised`). **Mobile** long fund names wrap to two lines; price + pill stay pinned right."].join(`
`))},a={render:()=>`
    <div class="sb-h">third row shows the hover/highlight state</div>
    <div style="max-width:520px">
      ${[["A","Agilent Technologies Inc.","S$142.92","+0.00%","pos",""],["AA","ALCOA CORP","S$32.10","-0.01%","neg",""],["AAON","AAON Inc.","S$95.51","+0.01%","pos","background:var(--arta-sys-color-surface-raised)"],["AAXJ","iShares MSCI All Country Asia ex Japan Index Fund","S$73.01","+0.00%","pos",""]].map(([n,t,c,i,p,o])=>`
        <div class="arta-ticker-row" style="${o}">
          <span class="arta-ticker-chip">${n}</span>
          <span class="arta-ticker-row__name">${t}</span>
          <span class="arta-ticker-row__price">${c}</span>
          <span class="arta-change arta-change--${p}">${i}</span>
        </div>`).join("")}
    </div>`,parameters:l(`<div class="arta-ticker-row">
  <span class="arta-ticker-chip">AAON</span>
  <span class="arta-ticker-row__name">AAON Inc.</span>
  <span class="arta-ticker-row__price">S$95.51</span>
  <span class="arta-change arta-change--pos">+0.01%</span>
</div>`)};var s,r,e;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">third row shows the hover/highlight state</div>
    <div style="max-width:520px">
      \${[['A', 'Agilent Technologies Inc.', 'S$142.92', '+0.00%', 'pos', ''], ['AA', 'ALCOA CORP', 'S$32.10', '-0.01%', 'neg', ''], ['AAON', 'AAON Inc.', 'S$95.51', '+0.01%', 'pos', 'background:var(--arta-sys-color-surface-raised)'], ['AAXJ', 'iShares MSCI All Country Asia ex Japan Index Fund', 'S$73.01', '+0.00%', 'pos', '']].map(([tk, nm, px, ch, dir, hl]) => \`
        <div class="arta-ticker-row" style="\${hl}">
          <span class="arta-ticker-chip">\${tk}</span>
          <span class="arta-ticker-row__name">\${nm}</span>
          <span class="arta-ticker-row__price">\${px}</span>
          <span class="arta-change arta-change--\${dir}">\${ch}</span>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-ticker-row">
  <span class="arta-ticker-chip">AAON</span>
  <span class="arta-ticker-row__name">AAON Inc.</span>
  <span class="arta-ticker-row__price">S$95.51</span>
  <span class="arta-change arta-change--pos">+0.01%</span>
</div>\`)
}`,...(e=(r=a.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const g=["Rows"];export{a as Rows,g as __namedExportsOrder,A as default};
