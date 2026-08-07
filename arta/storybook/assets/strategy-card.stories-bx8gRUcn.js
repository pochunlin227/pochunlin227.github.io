import{s as o,d as m}from"./helpers-BwuIyHmI.js";const u={title:"02 Components/Surfaces/Strategy card",parameters:m(["Collectible catalog card for strategies and structured offerings. Gradient art carries identity; selection is expressed by **muting everything else**.","","| State | Class | Behavior |","|---|---|---|","| Default | `.arta-catalog` | Gradient art, white title, tagline, optional badge |","| Selected | `.selected` + grid `.has-selection` | Chosen card keeps its gradient; siblings dim to flat grey |","| Muted / closed | grey `surface.raised` fill | Closed structured-offering vintages |","","**Tokens** `arta.cmp.catalog.*` + `arta.sys.gradient.card-art-*` · **Mobile** grid collapses to 2 columns under 640px."].join(`
`))},n=`<div class="arta-catalog-grid has-selection">
  <div class="arta-catalog selected" style="background:var(--arta-sys-gradient-card-art-3)">
    <div>
      <div class="arta-catalog__title">Harvest<small>Treasuries</small></div>
      <div class="arta-catalog__tagline">A safer place to park your cash</div>
    </div>
    <span class="arta-catalog__badge">POPULAR</span>
  </div>
  <!-- siblings without .selected are dimmed by .has-selection -->
</div>`,a={render:()=>`
    <div class="sb-h">default · selected (siblings dim) · muted/closed</div>
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
    </div>`,parameters:o(n,"Muted grey marks **closed vintages** — only current offerings keep the gradient.")},s={render:()=>`
    <div class="sb-h">Click a card — selection dims the siblings</div>
    <div class="arta-catalog-grid" id="catGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;max-width:860px">
      ${[["Harvest<small>Treasuries</small>","A safer place to park your cash","var(--arta-sys-gradient-card-art-3)","POPULAR"],["Harvest<small>Bonds</small>","The pursuit of higher yields","var(--arta-sys-gradient-card-art-3)",""],["Defensive<small>Growth</small>","Risk-aware investing","var(--arta-sys-gradient-card-art-2)",""],["S&amp;P 499<small>by Arta</small>","Customized direct indexing","var(--arta-sys-gradient-card-art-1)",""]].map(([g,v,p,t])=>`
        <div class="arta-catalog" style="background:${p}" onclick="
          const g=document.getElementById('catGrid');
          if(this.classList.contains('selected')){this.classList.remove('selected');g.classList.remove('has-selection');}
          else{g.querySelectorAll('.arta-catalog').forEach(c=>c.classList.remove('selected'));this.classList.add('selected');g.classList.add('has-selection');}">
          <div><div class="arta-catalog__title">${g}</div><div class="arta-catalog__tagline">${v}</div></div>
          ${t?`<span class="arta-catalog__badge">${t}</span>`:'<span style="opacity:.8">⚑</span>'}
        </div>`).join("")}
    </div>`,parameters:o(n)};var e,r,l;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">default · selected (siblings dim) · muted/closed</div>
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
  parameters: src(SNIPPET, 'Muted grey marks **closed vintages** — only current offerings keep the gradient.')
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Click a card — selection dims the siblings</div>
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
  parameters: src(SNIPPET)
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const h=["States","Interactive"];export{s as Interactive,a as States,h as __namedExportsOrder,u as default};
