const s=(a,e)=>({docs:{...e?{description:{story:e}}:{},source:{code:a,language:"html"}}}),M={title:"Product Patterns/Forms & Selection",parameters:{docs:{description:{component:["Selection and input patterns from the AMP personalization flow, Micro Index builder, private-markets questionnaire and dashboard.","","**State conventions (shared across the family)**","| State | How it is expressed |","|---|---|","| Default | Neutral surface, secondary text |","| Hover | Stroke strengthens (`stroke.strong`) |","| Selected | Violet fill (radio rows), inverse pill (segments), check dot (wizard), focus-ring stroke (answer cards) |","| Done / Active | Inverse (white) fill with dark glyph |","| Disabled | `opacity.disabled`, pointer-events none |","","**Responsive** — rows are full-width flex and wrap under 640px; segmented pills wrap to a second line; wizard collapses naturally (it is a vertical stack). Touch targets never drop below `sys.size.control-compact`.","","**Tokens** — `arta.cmp.radiorow.*`, `arta.cmp.toggle.*`, `arta.cmp.sector.*`, `arta.cmp.wizard.*`, `arta.cmp.answer.*`; controls use `sys.color.action.*` + `sys.motion.control`."].join(`
`)}}}},r={render:()=>`
    <div class="sb-h">Allocation-preset rows — default / selected (violet) · click to move selection</div>
    <div class="sb-col" style="max-width:520px">
      ${[["Robo – Aggressive","A 90/10 split between stocks and bonds, for those willing to take on more market risk.",""],["Robo – Balanced","A balanced stock-to-bond allocation, for investors who want growth and income in one.","selected"],["Robo – Conservative","Prioritizes capital preservation with a more conservative stock-to-bond split.",""]].map(([a,e,t])=>`
        <div class="arta-radiorow ${t}" onclick="this.parentNode.querySelectorAll('.arta-radiorow').forEach(r=>{r.classList.remove('selected');r.querySelector('.arta-radiorow__dot').textContent='';});this.classList.add('selected');this.querySelector('.arta-radiorow__dot').textContent='✓';">
          <div class="arta-radiorow__dot">${t?"✓":""}</div>
          <div><b>${a}</b><p>${e}</p></div>
        </div>`).join("")}
    </div>`,parameters:s(`<div class="arta-radiorow selected">
  <div class="arta-radiorow__dot">✓</div>
  <div><b>Robo – Balanced</b><p>A balanced stock-to-bond allocation…</p></div>
</div>`,"Selected row floods **violet** with a filled check dot — the loudest selection state in the product, reserved for one-of-N decisions that change money outcomes.")},i={render:()=>`
    <div class="sb-h">Segmented pills — selected = inverse pill · wraps on mobile</div>
    <div class="sb-col">
      <div class="arta-seg">
        ${["Moderate","Baseline","Elevated"].map((a,e)=>`<button class="${e===1?"selected":""}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">${a}</button>`).join("")}
      </div>
      <div class="arta-seg">
        ${["S$25K","S$50K","S$100K","S$250K","S$1M"].map((a,e)=>`<button class="${e===2?"selected":""}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">${a}</button>`).join("")}
      </div>
    </div>`,parameters:s(`<div class="arta-seg">
  <button>Moderate</button>
  <button class="selected">Baseline</button>
  <button>Elevated</button>
</div>`)},o={render:()=>`
    <div class="sb-h">Sector tilt rows — Increased / Neutral / Decreased pill states</div>
    <div class="sb-col" style="max-width:560px">
      ${[["▣","Technology","Develops software, hardware, and tech services like Google, Meta, Apple, Microsoft and Nvidia.","Increased ▾"],["✚","Healthcare","Offers medical services, drugs, and health equipment like Pfizer, J&amp;J and United Health Group.","Neutral ▾"],["🛒","Consumer Discretionary","Sells non-essential, often luxury, goods and services like McDonald’s and Nike.","Decreased ▾"]].map(([a,e,t,v])=>`
        <div class="arta-sector">
          <div class="arta-sector__icon">${a}</div>
          <div class="arta-sector__body"><b>${e}</b><p>${t}</p></div>
          <button class="arta-sector__ctl">${v}</button>
        </div>`).join("")}
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12px">"Not recommended for beginners." — the honesty line ships with the feature.</p>
    </div>`,parameters:s(`<div class="arta-sector">
  <div class="arta-sector__icon">▣</div>
  <div class="arta-sector__body"><b>Technology</b><p>Develops software, hardware, and tech services…</p></div>
  <button class="arta-sector__ctl">Increased ▾</button>
</div>`,"Three tilt states live in the pill label (Increased / Neutral / Decreased); the row itself never changes color — tilt is data, not celebration.")},n={render:()=>`
    <div class="sb-h">Questionnaire wizard rail — done (✓ inverse) / current (bright) / todo (dim)</div>
    <div class="arta-wizard" style="max-width:260px">
      <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
      <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">4</div><div class="arta-wizard__label">Risk</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">5</div><div class="arta-wizard__label">Tech Exposure</div></div>
    </div>`,parameters:s(`<div class="arta-wizard">
  <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
  <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
  <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
</div>`,"From the private-markets suitability questionnaire. Done steps flip to the inverse (white) dot with a check; the current step brightens its label; future steps stay tertiary. On mobile this rail moves above the question as a horizontal row of dots.")},l={render:()=>`
    <div class="sb-h">Question answer cards — default / hover (stroke) / selected (focus ring) · click to select</div>
    <div class="sb-col" style="max-width:560px">
      ${[["Yes","I can invest S$100K per year over the next 4 years.","selected"],["No","I have a maximum of S$100K to invest in total.",""]].map(([a,e,t])=>`
        <div class="arta-answer ${t}" onclick="this.parentNode.querySelectorAll('.arta-answer').forEach(a=>a.classList.remove('selected'));this.classList.add('selected')">
          <b>${a}</b><p>${e}</p>
        </div>`).join("")}
    </div>`,parameters:s(`<div class="arta-answer selected">
  <b>Yes</b>
  <p>I can invest S$100K per year over the next 4 years.</p>
</div>`,"Each answer restates its consequence in a full sentence — the member confirms meaning, not just a label. Selection = focus-ring stroke; the card never changes fill.")},d={render:()=>`
    <div class="sb-h">Micro Index builder row controls — lock (active) / edit / remove / disabled</div>
    <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">15.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl active" title="Locked">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" title="Remove">✕</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">21.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl" title="Lock">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" disabled title="Remove (disabled)">✕</button>
        </div>
      </div>
    </div>`,parameters:s(`<div style="display:flex;gap:8px">
  <button class="arta-ctl active" title="Locked">🔒</button>
  <button class="arta-ctl" title="Edit">✎</button>
  <button class="arta-ctl" disabled title="Remove">✕</button>
</div>`,"Round outline icon buttons under each weight. **Active** (locked) flips to inverse fill; **disabled** drops to `opacity.disabled` — e.g. the last remaining holding can’t be removed.")},c={render:()=>`
    <div class="sb-h">Search stocks &amp; ETFs — result rows with hover highlight + change pills</div>
    <div style="max-width:520px">
      ${[["A","Agilent Technologies Inc.","S$142.92","+0.00%","pos",""],["AA","ALCOA CORP","S$32.10","-0.01%","neg",""],["AAON","AAON Inc.","S$95.51","+0.01%","pos","background:var(--arta-sys-color-surface-raised)"],["AAXJ","iShares MSCI All Country Asia ex Japan Index Fund","S$73.01","+0.00%","pos",""]].map(([a,e,t,v,B,K])=>`
        <div class="arta-ticker-row" style="${K}">
          <span class="arta-ticker-chip">${a}</span>
          <span class="arta-ticker-row__name">${e}</span>
          <span class="arta-ticker-row__price">${t}</span>
          <span class="arta-change arta-change--${B}">${v}</span>
        </div>`).join("")}
    </div>`,parameters:s(`<div class="arta-ticker-row">
  <span class="arta-ticker-chip">AAON</span>
  <span class="arta-ticker-row__name">AAON Inc.</span>
  <span class="arta-ticker-row__price">S$95.51</span>
  <span class="arta-change arta-change--pos">+0.01%</span>
</div>`,"The third row shows the **hover/highlight** state (`surface.raised`). Long fund names wrap to two lines on mobile; price + pill stay pinned right.")},p={render:()=>`
    <div class="sb-h">AI prompt-suggestion chips — default / evidence-highlight</div>
    <div class="sb-col">
      <div class="arta-prompt"><span class="arta-prompt__icon">▤</span>I want market gains without S&amp;P 500 risk</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">♕</span>What is PPLI?</div>
      <div class="arta-prompt" style="border-color:var(--arta-sys-color-text-ai)"><span class="arta-prompt__icon">❯_</span>I want to put a downpayment on a house, but don't want to sell my equities right now.</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">···</span>See other ideas</div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:12px">
      The highlighted prompt ships in Arta's dashboard today — members literally asking to
      <b>borrow instead of sell</b>. With the "Line of Credit" tile, it's the in-product demand
      signal the charge card answers.</p>`,parameters:s(`<div class="arta-prompt">
  <span class="arta-prompt__icon">▤</span>
  I want market gains without S&amp;P 500 risk
</div>`)};var u,h,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Allocation-preset rows — default / selected (violet) · click to move selection</div>
    <div class="sb-col" style="max-width:520px">
      \${[['Robo – Aggressive', 'A 90/10 split between stocks and bonds, for those willing to take on more market risk.', ''], ['Robo – Balanced', 'A balanced stock-to-bond allocation, for investors who want growth and income in one.', 'selected'], ['Robo – Conservative', 'Prioritizes capital preservation with a more conservative stock-to-bond split.', '']].map(([t, d, sel]) => \`
        <div class="arta-radiorow \${sel}" onclick="this.parentNode.querySelectorAll('.arta-radiorow').forEach(r=>{r.classList.remove('selected');r.querySelector('.arta-radiorow__dot').textContent='';});this.classList.add('selected');this.querySelector('.arta-radiorow__dot').textContent='✓';">
          <div class="arta-radiorow__dot">\${sel ? '✓' : ''}</div>
          <div><b>\${t}</b><p>\${d}</p></div>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-radiorow selected">
  <div class="arta-radiorow__dot">✓</div>
  <div><b>Robo – Balanced</b><p>A balanced stock-to-bond allocation…</p></div>
</div>\`, 'Selected row floods **violet** with a filled check dot — the loudest selection state in the product, reserved for one-of-N decisions that change money outcomes.')
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var b,w,_;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Segmented pills — selected = inverse pill · wraps on mobile</div>
    <div class="sb-col">
      <div class="arta-seg">
        \${['Moderate', 'Baseline', 'Elevated'].map((l, i) => \`<button class="\${i === 1 ? 'selected' : ''}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">\${l}</button>\`).join('')}
      </div>
      <div class="arta-seg">
        \${['S$25K', 'S$50K', 'S$100K', 'S$250K', 'S$1M'].map((l, i) => \`<button class="\${i === 2 ? 'selected' : ''}" onclick="this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));this.classList.add('selected')">\${l}</button>\`).join('')}
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-seg">
  <button>Moderate</button>
  <button class="selected">Baseline</button>
  <button>Elevated</button>
</div>\`)
}`,...(_=(w=i.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Sector tilt rows — Increased / Neutral / Decreased pill states</div>
    <div class="sb-col" style="max-width:560px">
      \${[['▣', 'Technology', 'Develops software, hardware, and tech services like Google, Meta, Apple, Microsoft and Nvidia.', 'Increased ▾'], ['✚', 'Healthcare', 'Offers medical services, drugs, and health equipment like Pfizer, J&amp;J and United Health Group.', 'Neutral ▾'], ['🛒', 'Consumer Discretionary', 'Sells non-essential, often luxury, goods and services like McDonald’s and Nike.', 'Decreased ▾']].map(([ic, t, d, ctl]) => \`
        <div class="arta-sector">
          <div class="arta-sector__icon">\${ic}</div>
          <div class="arta-sector__body"><b>\${t}</b><p>\${d}</p></div>
          <button class="arta-sector__ctl">\${ctl}</button>
        </div>\`).join('')}
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12px">"Not recommended for beginners." — the honesty line ships with the feature.</p>
    </div>\`,
  parameters: src(\`<div class="arta-sector">
  <div class="arta-sector__icon">▣</div>
  <div class="arta-sector__body"><b>Technology</b><p>Develops software, hardware, and tech services…</p></div>
  <button class="arta-sector__ctl">Increased ▾</button>
</div>\`, 'Three tilt states live in the pill label (Increased / Neutral / Decreased); the row itself never changes color — tilt is data, not celebration.')
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,k,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Questionnaire wizard rail — done (✓ inverse) / current (bright) / todo (dim)</div>
    <div class="arta-wizard" style="max-width:260px">
      <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
      <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">4</div><div class="arta-wizard__label">Risk</div></div>
      <div class="arta-wizard__step"><div class="arta-wizard__dot">5</div><div class="arta-wizard__label">Tech Exposure</div></div>
    </div>\`,
  parameters: src(\`<div class="arta-wizard">
  <div class="arta-wizard__step done"><div class="arta-wizard__dot">✓</div><div class="arta-wizard__label">S$100K<small>Investment</small></div></div>
  <div class="arta-wizard__step current"><div class="arta-wizard__dot">2</div><div class="arta-wizard__label">Recurring</div></div>
  <div class="arta-wizard__step"><div class="arta-wizard__dot">3</div><div class="arta-wizard__label">Liquidity</div></div>
</div>\`, 'From the private-markets suitability questionnaire. Done steps flip to the inverse (white) dot with a check; the current step brightens its label; future steps stay tertiary. On mobile this rail moves above the question as a horizontal row of dots.')
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var $,z,A;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Question answer cards — default / hover (stroke) / selected (focus ring) · click to select</div>
    <div class="sb-col" style="max-width:560px">
      \${[['Yes', 'I can invest S$100K per year over the next 4 years.', 'selected'], ['No', 'I have a maximum of S$100K to invest in total.', '']].map(([l, d, sel]) => \`
        <div class="arta-answer \${sel}" onclick="this.parentNode.querySelectorAll('.arta-answer').forEach(a=>a.classList.remove('selected'));this.classList.add('selected')">
          <b>\${l}</b><p>\${d}</p>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-answer selected">
  <b>Yes</b>
  <p>I can invest S$100K per year over the next 4 years.</p>
</div>\`, 'Each answer restates its consequence in a full sentence — the member confirms meaning, not just a label. Selection = focus-ring stroke; the card never changes fill.')
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,D,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Micro Index builder row controls — lock (active) / edit / remove / disabled</div>
    <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">15.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl active" title="Locked">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" title="Remove">✕</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <span style="color:var(--arta-sys-color-text-primary);font-size:20px;font-weight:300">21.0%</span>
        <div style="display:flex;gap:8px">
          <button class="arta-ctl" title="Lock">🔒</button>
          <button class="arta-ctl" title="Edit">✎</button>
          <button class="arta-ctl" disabled title="Remove (disabled)">✕</button>
        </div>
      </div>
    </div>\`,
  parameters: src(\`<div style="display:flex;gap:8px">
  <button class="arta-ctl active" title="Locked">🔒</button>
  <button class="arta-ctl" title="Edit">✎</button>
  <button class="arta-ctl" disabled title="Remove">✕</button>
</div>\`, 'Round outline icon buttons under each weight. **Active** (locked) flips to inverse fill; **disabled** drops to \`opacity.disabled\` — e.g. the last remaining holding can’t be removed.')
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,N,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Search stocks &amp; ETFs — result rows with hover highlight + change pills</div>
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
</div>\`, 'The third row shows the **hover/highlight** state (\`surface.raised\`). Long fund names wrap to two lines on mobile; price + pill stay pinned right.')
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,C,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">AI prompt-suggestion chips — default / evidence-highlight</div>
    <div class="sb-col">
      <div class="arta-prompt"><span class="arta-prompt__icon">▤</span>I want market gains without S&amp;P 500 risk</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">♕</span>What is PPLI?</div>
      <div class="arta-prompt" style="border-color:var(--arta-sys-color-text-ai)"><span class="arta-prompt__icon">❯_</span>I want to put a downpayment on a house, but don't want to sell my equities right now.</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">···</span>See other ideas</div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:12px">
      The highlighted prompt ships in Arta's dashboard today — members literally asking to
      <b>borrow instead of sell</b>. With the "Line of Credit" tile, it's the in-product demand
      signal the charge card answers.</p>\`,
  parameters: src(\`<div class="arta-prompt">
  <span class="arta-prompt__icon">▤</span>
  I want market gains without S&amp;P 500 risk
</div>\`)
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const T=["RadioSelectRows","SegmentedPills","SectorInfluenceStates","WizardSteps","AnswerCards","BuilderControls","SearchResultRows","PromptChips"];export{l as AnswerCards,d as BuilderControls,p as PromptChips,r as RadioSelectRows,c as SearchResultRows,o as SectorInfluenceStates,i as SegmentedPills,n as WizardSteps,T as __namedExportsOrder,M as default};
