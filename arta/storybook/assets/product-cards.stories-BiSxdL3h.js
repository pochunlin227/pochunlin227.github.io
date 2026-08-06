const i=(s,a)=>({docs:{...a?{description:{story:a}}:{},source:{code:s,language:"html"}}}),L={title:"Product Patterns/Cards & Catalog",parameters:{docs:{description:{component:['Collectible-card family observed in the Arta product (strategy catalog, fund catalog, Micro Index themes, "Why we love it" education cards, structured offerings).',"","**States**","| State | Class | Behavior |","|---|---|---|","| Default | `.arta-catalog` | Gradient art, white title, tagline |","| Selected | `.selected` on card + `.has-selection` on grid | Chosen card keeps its gradient; **siblings dim** to flat grey |","| Muted / upcoming | `.arta-catalog--muted` | Grey fill, secondary text (structured offerings that are closed) |","| Focused (benefit) | `.focused` on card + `.has-focus` on grid | Same dim-siblings physics for education cards |","","**Responsive** — grids use `auto-fill, minmax()`; under 640px catalog/fund grids collapse to 2 columns, benefit cards stack to 1 column. No horizontal scroll.","","**Tokens** — `arta.cmp.catalog.*`, `arta.cmp.fund.*`, `arta.cmp.benefit.*`, `arta.cmp.theme-card.*`; gradients from `arta.sys.gradient.card-art-*`. No hardcodes."].join(`
`)}}}},w=`<div class="arta-catalog-grid">
  <div class="arta-catalog selected" style="background:var(--arta-sys-gradient-card-art-3)">
    <div>
      <div class="arta-catalog__title">Harvest<small>Treasuries</small></div>
      <div class="arta-catalog__tagline">A safer place to park your cash</div>
    </div>
    <span class="arta-catalog__badge">POPULAR</span>
  </div>
  <!-- add .has-selection to the grid when any card is .selected -->
</div>`,r={render:()=>`
    <div class="sb-h">Static states — default · selected (siblings dim) · muted/closed</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;max-width:640px">
      <div class="arta-catalog" style="background:var(--arta-sys-gradient-card-art-3)">
        <div><div class="arta-catalog__title">Harvest<small>Treasuries</small></div>
        <div class="arta-catalog__tagline">A safer place to park your cash</div></div>
        <span class="arta-catalog__badge">POPULAR</span>
      </div>
      <div class="arta-catalog-grid has-selection" style="display:contents">
        <div class="arta-catalog selected" style="background:var(--arta-sys-gradient-card-art-2)">
          <div><div class="arta-catalog__title">Defensive<small>Growth</small></div>
          <div class="arta-catalog__tagline">Risk-aware investing</div></div>
          <span style="opacity:.8">⚑</span>
        </div>
      </div>
      <div class="arta-catalog" style="background:var(--arta-sys-color-surface-raised)">
        <div><div class="arta-catalog__title" style="color:var(--arta-sys-color-text-tertiary)">Balance<small style="color:var(--arta-sys-color-text-tertiary)">June '24</small></div>
        <div class="arta-catalog__tagline" style="color:var(--arta-sys-color-text-tertiary)">Structured offering · closed</div></div>
        <span style="opacity:.4">⚑</span>
      </div>
    </div>`,parameters:i(w,"Muted grey fill is how structured offerings mark **closed vintages** — only current offerings keep the gradient. Selection is expressed by muting everything *else*.")},d={render:()=>`
    <div class="sb-h">Interactive — click a card: selection dims the siblings</div>
    <div class="arta-catalog-grid" id="catGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;max-width:860px">
      ${[["Harvest<small>Treasuries</small>","A safer place to park your cash","var(--arta-sys-gradient-card-art-3)","POPULAR"],["Harvest<small>Bonds</small>","The pursuit of higher yields","var(--arta-sys-gradient-card-art-3)",""],["Defensive<small>Growth</small>","Risk-aware investing","var(--arta-sys-gradient-card-art-2)",""],["S&amp;P 499<small>by Arta</small>","Customized direct indexing","var(--arta-sys-gradient-card-art-1)",""]].map(([s,a,t,e])=>`
        <div class="arta-catalog" style="background:${t}" onclick="
          const g=document.getElementById('catGrid');
          if(this.classList.contains('selected')){this.classList.remove('selected');g.classList.remove('has-selection');}
          else{g.querySelectorAll('.arta-catalog').forEach(c=>c.classList.remove('selected'));this.classList.add('selected');g.classList.add('has-selection');}">
          <div><div class="arta-catalog__title">${s}</div><div class="arta-catalog__tagline">${a}</div></div>
          ${e?`<span class="arta-catalog__badge">${e}</span>`:'<span style="opacity:.8">⚑</span>'}
        </div>`).join("")}
    </div>`,parameters:i(w)},n={render:()=>`
    <div class="sb-h">Fund cards — masked pre-login · POPULAR / NICHE badges · min investment</div>
    <div class="arta-fund-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;max-width:680px">
      ${[["K***","Private Equity","S$10K","POPULAR","var(--arta-sys-gradient-card-art-3)"],["W********","Private Equity","S$25K","","var(--arta-sys-gradient-card-art-3)"],["F*******","Venture Capital","S$250K","NICHE","var(--arta-sys-gradient-card-art-2)"]].map(([s,a,t,e,P])=>`
        <div class="arta-fund" style="background:${P}">
          <div><div class="arta-fund__name">${s}</div><div class="arta-fund__cat">${a}</div></div>
          <div class="arta-fund__foot">
            ${e?`<span class="arta-fund__badge">${e}</span>`:'<span style="opacity:.8">⧈</span>'}
            <div class="arta-fund__min">${t}<small>Min</small></div>
          </div>
        </div>`).join("")}
    </div>`,parameters:i(`<div class="arta-fund" style="background:var(--arta-sys-gradient-card-art-3)">
  <div><div class="arta-fund__name">K***</div><div class="arta-fund__cat">Private Equity</div></div>
  <div class="arta-fund__foot">
    <span class="arta-fund__badge">POPULAR</span>
    <div class="arta-fund__min">S$10K<small>Min</small></div>
  </div>
</div>`,"Names stay masked (`K***`) until the member is accredited/logged in — compliance gating rendered honestly. Badge is optional; omit the element for badge-less cards.")},c={render:()=>`
    <div class="sb-h">Micro Index theme cards — tinted glass, colored icon, 2-line clamp description</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;max-width:760px">
      ${[["Dividend Stocks","🌱","var(--arta-ref-color-mint-60)","Companies known for their high dividend yields, which can provide a steady income stream."],["Magnificent 7","▣","var(--arta-ref-color-violet-50)","Mega-cap stocks that have driven the bulk of the market’s recent gains."],["Recession Resilient","🛡","var(--arta-ref-color-mint-50)","Companies and ETFs chosen for their historical resilience in downturns."]].map(([s,a,t,e])=>`
        <div class="arta-theme">
          <div class="arta-theme__head"><b>${s}</b><span class="arta-theme__icon" style="color:${t}">${a}</span></div>
          <p>${e}</p>
        </div>`).join("")}
    </div>`,parameters:i(`<div class="arta-theme">
  <div class="arta-theme__head">
    <b>Dividend Stocks</b>
    <span class="arta-theme__icon" style="color:var(--arta-ref-color-mint-60)">🌱</span>
  </div>
  <p>Companies known for their high dividend yields…</p>
</div>`,"The icon carries the theme’s accent color; the card itself stays neutral glass (`alpha.white-8`) so a 9-card grid doesn’t turn into a rainbow.")},l={render:()=>`
    <div class="sb-h">"Why we love it" cards — click one: focus dims siblings (same physics as catalog)</div>
    <div class="arta-benefit-grid" id="benGrid" style="max-width:820px">
      ${[["#1","Market upside, no market downside","Combines underlying bonds and options to protect your principal while capturing market upside.","var(--arta-sys-gradient-card-art-2)"],["#2","Global diversification","Benchmarked to three global indexes: the S&P 500, the EURO STOXX 50, and the Tokyo Stock Price Index.","var(--arta-sys-gradient-card-art-3)"],["#3","Optimized performance","Gives a higher weighting to the index that performs best over the period.","var(--arta-sys-gradient-card-art-1)"]].map(([s,a,t,e])=>`
        <div class="arta-benefit" style="background:${e}" onclick="
          const g=document.getElementById('benGrid');
          if(this.classList.contains('focused')){this.classList.remove('focused');g.classList.remove('has-focus');}
          else{g.querySelectorAll('.arta-benefit').forEach(c=>c.classList.remove('focused'));this.classList.add('focused');g.classList.add('has-focus');}">
          <div class="arta-benefit__num">${s}</div>
          <div class="arta-benefit__title">${a}</div>
          <div class="arta-benefit__body">${t}</div>
        </div>`).join("")}
    </div>`,parameters:i(`<div class="arta-benefit-grid has-focus">
  <div class="arta-benefit focused" style="background:var(--arta-sys-gradient-card-art-3)">
    <div class="arta-benefit__num">#2</div>
    <div class="arta-benefit__title">Global diversification</div>
    <div class="arta-benefit__body">Benchmarked to three global indexes…</div>
  </div>
  <!-- sibling cards without .focused are dimmed by .has-focus -->
</div>`,"States: **default** (all gradients live) → **focused** (`.focused` + grid `.has-focus`; siblings drop opacity). On mobile the grid stacks to one column and focus still works.")};var o,v,g;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Static states — default · selected (siblings dim) · muted/closed</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;max-width:640px">
      <div class="arta-catalog" style="background:var(--arta-sys-gradient-card-art-3)">
        <div><div class="arta-catalog__title">Harvest<small>Treasuries</small></div>
        <div class="arta-catalog__tagline">A safer place to park your cash</div></div>
        <span class="arta-catalog__badge">POPULAR</span>
      </div>
      <div class="arta-catalog-grid has-selection" style="display:contents">
        <div class="arta-catalog selected" style="background:var(--arta-sys-gradient-card-art-2)">
          <div><div class="arta-catalog__title">Defensive<small>Growth</small></div>
          <div class="arta-catalog__tagline">Risk-aware investing</div></div>
          <span style="opacity:.8">⚑</span>
        </div>
      </div>
      <div class="arta-catalog" style="background:var(--arta-sys-color-surface-raised)">
        <div><div class="arta-catalog__title" style="color:var(--arta-sys-color-text-tertiary)">Balance<small style="color:var(--arta-sys-color-text-tertiary)">June '24</small></div>
        <div class="arta-catalog__tagline" style="color:var(--arta-sys-color-text-tertiary)">Structured offering · closed</div></div>
        <span style="opacity:.4">⚑</span>
      </div>
    </div>\`,
  parameters: src(CATALOG_SNIPPET, 'Muted grey fill is how structured offerings mark **closed vintages** — only current offerings keep the gradient. Selection is expressed by muting everything *else*.')
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var m,p,u;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Interactive — click a card: selection dims the siblings</div>
    <div class="arta-catalog-grid" id="catGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;max-width:860px">
      \${[['Harvest<small>Treasuries</small>', 'A safer place to park your cash', 'var(--arta-sys-gradient-card-art-3)', 'POPULAR'], ['Harvest<small>Bonds</small>', 'The pursuit of higher yields', 'var(--arta-sys-gradient-card-art-3)', ''], ['Defensive<small>Growth</small>', 'Risk-aware investing', 'var(--arta-sys-gradient-card-art-2)', ''], ['S&amp;P 499<small>by Arta</small>', 'Customized direct indexing', 'var(--arta-sys-gradient-card-art-1)', '']].map(([t, tag, bg, badge]) => \`
        <div class="arta-catalog" style="background:\${bg}" onclick="
          const g=document.getElementById('catGrid');
          if(this.classList.contains('selected')){this.classList.remove('selected');g.classList.remove('has-selection');}
          else{g.querySelectorAll('.arta-catalog').forEach(c=>c.classList.remove('selected'));this.classList.add('selected');g.classList.add('has-selection');}">
          <div><div class="arta-catalog__title">\${t}</div><div class="arta-catalog__tagline">\${tag}</div></div>
          \${badge ? \`<span class="arta-catalog__badge">\${badge}</span>\` : '<span style="opacity:.8">⚑</span>'}
        </div>\`).join('')}
    </div>\`,
  parameters: src(CATALOG_SNIPPET)
}`,...(u=(p=d.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Fund cards — masked pre-login · POPULAR / NICHE badges · min investment</div>
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
</div>\`, 'Names stay masked (\`K***\`) until the member is accredited/logged in — compliance gating rendered honestly. Badge is optional; omit the element for badge-less cards.')
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,_,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Micro Index theme cards — tinted glass, colored icon, 2-line clamp description</div>
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
</div>\`, 'The icon carries the theme’s accent color; the card itself stays neutral glass (\`alpha.white-8\`) so a 9-card grid doesn’t turn into a rainbow.')
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var x,$,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">"Why we love it" cards — click one: focus dims siblings (same physics as catalog)</div>
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
  <!-- sibling cards without .focused are dimmed by .has-focus -->
</div>\`, 'States: **default** (all gradients live) → **focused** (\`.focused\` + grid \`.has-focus\`; siblings drop opacity). On mobile the grid stacks to one column and focus still works.')
}`,...(S=($=l.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};const C=["StrategyCardStates","StrategyGridInteractive","FundCards","ThemeCards","BenefitCardStates"];export{l as BenefitCardStates,n as FundCards,r as StrategyCardStates,d as StrategyGridInteractive,c as ThemeCards,C as __namedExportsOrder,L as default};
