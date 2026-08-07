import{s as p,d as c}from"./helpers-BwuIyHmI.js";const d={title:"Product Patterns/Data & Charts/Allocation Treemap",parameters:c(["Micro Index review treemap. Tile weight is expressed through the grid template; **hover raises the tile and reveals the white % chip**.","","**Tokens** `arta.cmp.treemap.*`. **Mobile** re-grids to 2 columns."].join(`
`))},a={render:()=>`
    <div class="sb-h">hover a tile — % chip appears</div>
    <div class="arta-treemap" style="max-width:640px;grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
      ${[["AAPL","15.00%"],["GOOG","15.00%"],["NVDA","21.00%"],["AMZN","15.00%"],["META","15.00%"],["MSFT","19.00%"]].map(([t,i])=>`
        <div class="arta-treemap__tile">${t}<span class="arta-treemap__chip">${i}</span></div>`).join("")}
    </div>`,parameters:p(`<div class="arta-treemap" style="grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
  <div class="arta-treemap__tile">AAPL<span class="arta-treemap__chip">15.00%</span></div>
  <div class="arta-treemap__tile">NVDA<span class="arta-treemap__chip">21.00%</span></div>
</div>`)};var e,r,s;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">hover a tile — % chip appears</div>
    <div class="arta-treemap" style="max-width:640px;grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
      \${[['AAPL', '15.00%'], ['GOOG', '15.00%'], ['NVDA', '21.00%'], ['AMZN', '15.00%'], ['META', '15.00%'], ['MSFT', '19.00%']].map(([tk, pct]) => \`
        <div class="arta-treemap__tile">\${tk}<span class="arta-treemap__chip">\${pct}</span></div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-treemap" style="grid-template-columns:1.2fr 1.2fr 1.6fr;grid-auto-rows:96px">
  <div class="arta-treemap__tile">AAPL<span class="arta-treemap__chip">15.00%</span></div>
  <div class="arta-treemap__tile">NVDA<span class="arta-treemap__chip">21.00%</span></div>
</div>\`)
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const o=["HoverChip"];export{a as HoverChip,o as __namedExportsOrder,d as default};
