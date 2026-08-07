import{s as o,d as c}from"./helpers-BwuIyHmI.js";const v={title:"02 Components/Surfaces/Benefit card",parameters:c(['"Why we love it" numbered education card. Same dim-siblings physics as the catalog: focus one, the rest recede.',"","| State | Class |","|---|---|","| Default | `.arta-benefit` (all gradients live) |","| Focused | `.focused` + grid `.has-focus` (siblings drop opacity) |","","**Tokens** `arta.cmp.benefit.*`. **Mobile** stacks to one column; focus still works."].join(`
`))},e={render:()=>`
    <div class="sb-h">Click one — focus dims siblings</div>
    <div class="arta-benefit-grid" id="benGrid" style="max-width:820px">
      ${[["#1","Market upside, no market downside","Combines underlying bonds and options to protect your principal while capturing market upside.","var(--arta-sys-gradient-card-art-2)"],["#2","Global diversification","Benchmarked to three global indexes: the S&P 500, the EURO STOXX 50, and the Tokyo Stock Price Index.","var(--arta-sys-gradient-card-art-3)"],["#3","Optimized performance","Gives a higher weighting to the index that performs best over the period.","var(--arta-sys-gradient-card-art-1)"]].map(([t,r,d,n])=>`
        <div class="arta-benefit" style="background:${n}" onclick="
          const g=document.getElementById('benGrid');
          if(this.classList.contains('focused')){this.classList.remove('focused');g.classList.remove('has-focus');}
          else{g.querySelectorAll('.arta-benefit').forEach(c=>c.classList.remove('focused'));this.classList.add('focused');g.classList.add('has-focus');}">
          <div class="arta-benefit__num">${t}</div>
          <div class="arta-benefit__title">${r}</div>
          <div class="arta-benefit__body">${d}</div>
        </div>`).join("")}
    </div>`,parameters:o(`<div class="arta-benefit-grid has-focus">
  <div class="arta-benefit focused" style="background:var(--arta-sys-gradient-card-art-3)">
    <div class="arta-benefit__num">#2</div>
    <div class="arta-benefit__title">Global diversification</div>
    <div class="arta-benefit__body">Benchmarked to three global indexes…</div>
  </div>
</div>`)};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Click one — focus dims siblings</div>
    <div class="arta-benefit-grid" id="benGrid" style="max-width:820px">
      \${[['#1', 'Market upside, no market downside', 'Combines underlying bonds and options to protect your principal while capturing market upside.', 'var(--arta-sys-gradient-card-art-2)'], ['#2', 'Global diversification', 'Benchmarked to three global indexes: the S&P 500, the EURO STOXX 50, and the Tokyo Stock Price Index.', 'var(--arta-sys-gradient-card-art-3)'], ['#3', 'Optimized performance', 'Gives a higher weighting to the index that performs best over the period.', 'var(--arta-sys-gradient-card-art-1)']].map(([n, t, b, bg]) => \`
        <div class="arta-benefit" style="background:\${bg}" onclick="
          const g=document.getElementById('benGrid');
          if(this.classList.contains('focused')){this.classList.remove('focused');g.classList.remove('has-focus');}
          else{g.querySelectorAll('.arta-benefit').forEach(c=>c.classList.remove('focused'));this.classList.add('focused');g.classList.add('has-focus');}">
          <div class="arta-benefit__num">\${n}</div>
          <div class="arta-benefit__title">\${t}</div>
          <div class="arta-benefit__body">\${b}</div>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-benefit-grid has-focus">
  <div class="arta-benefit focused" style="background:var(--arta-sys-gradient-card-art-3)">
    <div class="arta-benefit__num">#2</div>
    <div class="arta-benefit__title">Global diversification</div>
    <div class="arta-benefit__body">Benchmarked to three global indexes…</div>
  </div>
</div>\`)
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const f=["FocusDims"];export{e as FocusDims,f as __namedExportsOrder,v as default};
