const A={title:"Product Patterns/Catalog & Education"},r={render:()=>`
    <div style="max-width:360px">
      <div class="arta-stat">
        <div class="arta-stat__value">5.29%</div>
        <div class="arta-stat__caption">30-day SEC yield as of 07/08/2024 ⓘ</div>
      </div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:12px">
        From the product walkthrough: one number, one dated caption. The stat IS the page hero.</p>
    </div>`},i={render:()=>`
    <div class="sb-h">Catalog cards — click one: selection dims the siblings (observed pattern)</div>
    <div class="arta-catalog-grid" id="catGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;max-width:900px">
      ${[["Harvest<small>Treasuries</small>","A safer place to park your cash","var(--arta-sys-gradient-card-art-3)","POPULAR"],["Harvest<small>Bonds</small>","The pursuit of higher yields","var(--arta-sys-gradient-card-art-3)",""],["Defensive<small>Growth</small>","Risk-aware investing","var(--arta-sys-gradient-card-art-2)",""],["S&amp;P 499<small>by Arta</small>","Customized direct indexing","var(--arta-sys-gradient-card-art-1)",""]].map(([s,t,a,e])=>`
        <div class="arta-catalog" style="background:${a}" onclick="
          const g=document.getElementById('catGrid');
          if(this.classList.contains('selected')){this.classList.remove('selected');g.classList.remove('has-selection');}
          else{g.querySelectorAll('.arta-catalog').forEach(c=>c.classList.remove('selected'));this.classList.add('selected');g.classList.add('has-selection');}">
          <div>
            <div class="arta-catalog__title">${s}</div>
            <div class="arta-catalog__tagline">${t}</div>
          </div>
          ${e?`<span class="arta-catalog__badge">${e}</span>`:'<span style="opacity:.8">⚑</span>'}
        </div>`).join("")}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:14px">
      Arta expresses selection by <b>muting everything else</b> — the chosen card keeps its gradient, siblings drop
      to flat grey. Encoded as <code>.arta-catalog-grid.has-selection</code>.</p>`},o={render:()=>`
    <div class="sb-h">Icon-fact row (strategy detail pages)</div>
    <div class="arta-facts">
      <div class="arta-fact"><div class="arta-fact__icon">◈</div><div class="arta-fact__text">Broad market, diversified portfolio</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">☼</div><div class="arta-fact__text">Classic rebalancing of low-cost ETFs</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">﹪</div><div class="arta-fact__text">0.1% advisory fee</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">S$</div><div class="arta-fact__text">S$5K minimum investment</div></div>
    </div>`},c={render:()=>`
    <div class="sb-h">Allocation-preset rows (AMP personalization) — violet selected card</div>
    <div class="sb-col" style="max-width:520px">
      ${[["Robo – Aggressive","A 90/10 split between stocks and bonds, for those willing to take on more market risk.",""],["Robo – Balanced","A balanced stock-to-bond allocation, for investors who want growth and income in one.","selected"],["Robo – Conservative","Prioritizes capital preservation with a more conservative stock-to-bond split.",""]].map(([s,t,a])=>`
        <div class="arta-radiorow ${a}" onclick="this.parentNode.querySelectorAll('.arta-radiorow').forEach(r=>r.classList.remove('selected'));this.classList.add('selected');this.querySelector('.arta-radiorow__dot').textContent='✓';">
          <div class="arta-radiorow__dot">${a?"✓":""}</div>
          <div><b>${s}</b><p>${t}</p></div>
        </div>`).join("")}
    </div>`},d={render:()=>`
    <div class="sb-h">Ticker rows + change pills (Micro Index builder: "build your own ETF")</div>
    <div style="max-width:480px">
      ${[["AAPL","Apple Inc.","S$229.00","-0.00%","neg"],["NVDA","NVIDIA Corporation","S$119.37","+0.01%","pos"],["GOOG","Alphabet Inc. Class C","S$165.11","+0.01%","pos"]].map(([s,t,a,e,$])=>`
        <div class="arta-ticker-row">
          <span class="arta-ticker-chip">${s}</span>
          <span class="arta-ticker-row__name">${t}</span>
          <span class="arta-ticker-row__price">${a}</span>
          <span class="arta-change arta-change--${$}">${e}</span>
        </div>`).join("")}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:56ch;margin-top:12px">
      Change pills are solid status-color fills with dark text — the same green/red semantics the
      lending tokens lock for partners.</p>`};var n,l,v;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:360px">
      <div class="arta-stat">
        <div class="arta-stat__value">5.29%</div>
        <div class="arta-stat__caption">30-day SEC yield as of 07/08/2024 ⓘ</div>
      </div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:12px">
        From the product walkthrough: one number, one dated caption. The stat IS the page hero.</p>
    </div>\`
}`,...(v=(l=r.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var p,g,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Catalog cards — click one: selection dims the siblings (observed pattern)</div>
    <div class="arta-catalog-grid" id="catGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;max-width:900px">
      \${[['Harvest<small>Treasuries</small>', 'A safer place to park your cash', 'var(--arta-sys-gradient-card-art-3)', 'POPULAR'], ['Harvest<small>Bonds</small>', 'The pursuit of higher yields', 'var(--arta-sys-gradient-card-art-3)', ''], ['Defensive<small>Growth</small>', 'Risk-aware investing', 'var(--arta-sys-gradient-card-art-2)', ''], ['S&amp;P 499<small>by Arta</small>', 'Customized direct indexing', 'var(--arta-sys-gradient-card-art-1)', '']].map(([t, tag, bg, badge]) => \`
        <div class="arta-catalog" style="background:\${bg}" onclick="
          const g=document.getElementById('catGrid');
          if(this.classList.contains('selected')){this.classList.remove('selected');g.classList.remove('has-selection');}
          else{g.querySelectorAll('.arta-catalog').forEach(c=>c.classList.remove('selected'));this.classList.add('selected');g.classList.add('has-selection');}">
          <div>
            <div class="arta-catalog__title">\${t}</div>
            <div class="arta-catalog__tagline">\${tag}</div>
          </div>
          \${badge ? \`<span class="arta-catalog__badge">\${badge}</span>\` : '<span style="opacity:.8">⚑</span>'}
        </div>\`).join('')}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:14px">
      Arta expresses selection by <b>muting everything else</b> — the chosen card keeps its gradient, siblings drop
      to flat grey. Encoded as <code>.arta-catalog-grid.has-selection</code>.</p>\`
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,u,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Icon-fact row (strategy detail pages)</div>
    <div class="arta-facts">
      <div class="arta-fact"><div class="arta-fact__icon">◈</div><div class="arta-fact__text">Broad market, diversified portfolio</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">☼</div><div class="arta-fact__text">Classic rebalancing of low-cost ETFs</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">﹪</div><div class="arta-fact__text">0.1% advisory fee</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">S$</div><div class="arta-fact__text">S$5K minimum investment</div></div>
    </div>\`
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,_,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Allocation-preset rows (AMP personalization) — violet selected card</div>
    <div class="sb-col" style="max-width:520px">
      \${[['Robo – Aggressive', 'A 90/10 split between stocks and bonds, for those willing to take on more market risk.', ''], ['Robo – Balanced', 'A balanced stock-to-bond allocation, for investors who want growth and income in one.', 'selected'], ['Robo – Conservative', 'Prioritizes capital preservation with a more conservative stock-to-bond split.', '']].map(([t, d, sel]) => \`
        <div class="arta-radiorow \${sel}" onclick="this.parentNode.querySelectorAll('.arta-radiorow').forEach(r=>r.classList.remove('selected'));this.classList.add('selected');this.querySelector('.arta-radiorow__dot').textContent='✓';">
          <div class="arta-radiorow__dot">\${sel ? '✓' : ''}</div>
          <div><b>\${t}</b><p>\${d}</p></div>
        </div>\`).join('')}
    </div>\`
}`,...(x=(_=c.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var b,w,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Ticker rows + change pills (Micro Index builder: "build your own ETF")</div>
    <div style="max-width:480px">
      \${[['AAPL', 'Apple Inc.', 'S$229.00', '-0.00%', 'neg'], ['NVDA', 'NVIDIA Corporation', 'S$119.37', '+0.01%', 'pos'], ['GOOG', 'Alphabet Inc. Class C', 'S$165.11', '+0.01%', 'pos']].map(([tk, nm, px, ch, dir]) => \`
        <div class="arta-ticker-row">
          <span class="arta-ticker-chip">\${tk}</span>
          <span class="arta-ticker-row__name">\${nm}</span>
          <span class="arta-ticker-row__price">\${px}</span>
          <span class="arta-change arta-change--\${dir}">\${ch}</span>
        </div>\`).join('')}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:56ch;margin-top:12px">
      Change pills are solid status-color fills with dark text — the same green/red semantics the
      lending tokens lock for partners.</p>\`
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const S=["StatHero","StrategyCards","IconFacts","RadioSelectRows","TickerSearch"];export{o as IconFacts,c as RadioSelectRows,r as StatHero,i as StrategyCards,d as TickerSearch,S as __namedExportsOrder,A as default};
