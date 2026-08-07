import{s as d,d as c}from"./helpers-BwuIyHmI.js";const h={title:"02 Components/Catalog cards/Theme card",parameters:c(["Micro Index theme card. The **icon carries the accent color**; the card stays neutral glass (`alpha.white-8`) so a 9-card grid never turns into a rainbow.","","**States** static (navigation card — press feedback only). **Tokens** `arta.cmp.theme-card.*`. **Mobile** single column."].join(`
`))},e={render:()=>`
    <div class="sb-h">Tinted glass, colored icon, short description</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;max-width:760px">
      ${[["Dividend Stocks","🌱","var(--arta-ref-color-mint-60)","Companies known for their high dividend yields, which can provide a steady income stream."],["Magnificent 7","▣","var(--arta-ref-color-violet-50)","Mega-cap stocks that have driven the bulk of the market’s recent gains."],["Recession Resilient","🛡","var(--arta-ref-color-mint-50)","Companies and ETFs chosen for their historical resilience in downturns."]].map(([s,t,n,o])=>`
        <div class="arta-theme">
          <div class="arta-theme__head"><b>${s}</b><span class="arta-theme__icon" style="color:${n}">${t}</span></div>
          <p>${o}</p>
        </div>`).join("")}
    </div>`,parameters:d(`<div class="arta-theme">
  <div class="arta-theme__head">
    <b>Dividend Stocks</b>
    <span class="arta-theme__icon" style="color:var(--arta-ref-color-mint-60)">🌱</span>
  </div>
  <p>Companies known for their high dividend yields…</p>
</div>`)};var a,i,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Tinted glass, colored icon, short description</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;max-width:760px">
      \${[['Dividend Stocks', '🌱', 'var(--arta-ref-color-mint-60)', 'Companies known for their high dividend yields, which can provide a steady income stream.'], ['Magnificent 7', '▣', 'var(--arta-ref-color-violet-50)', 'Mega-cap stocks that have driven the bulk of the market’s recent gains.'], ['Recession Resilient', '🛡', 'var(--arta-ref-color-mint-50)', 'Companies and ETFs chosen for their historical resilience in downturns.']].map(([t, ic, c, d]) => \`
        <div class="arta-theme">
          <div class="arta-theme__head"><b>\${t}</b><span class="arta-theme__icon" style="color:\${c}">\${ic}</span></div>
          <p>\${d}</p>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-theme">
  <div class="arta-theme__head">
    <b>Dividend Stocks</b>
    <span class="arta-theme__icon" style="color:var(--arta-ref-color-mint-60)">🌱</span>
  </div>
  <p>Companies known for their high dividend yields…</p>
</div>\`)
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const m=["Grid"];export{e as Grid,m as __namedExportsOrder,h as default};
