const t=(a,e)=>({docs:{...e?{description:{story:e}}:{},source:{code:a,language:"html"}}}),$={title:"Product Patterns/People & Trust",parameters:{docs:{description:{component:[`Arta treats human escalation and honest education as first-class UI. These patterns carry the Arta Card's "honesty as premium" thesis: named experts, anti-sell questions, dated numbers, verified badges.`,"","**States** — mostly static trust surfaces; interactive states live on the embedded buttons/chips (see Components/Buttons). Service rows have a hover raise; contacts have no states by design (verification is not toggleable UI).","","**Responsive** — service grid stacks to 1 column under 640px; takeaway columns stack; the escalation modal is already a mobile-width sheet."].join(`
`)}}}},s={render:()=>`
    <div class="sb-h">Family Office Services — colored icon tiles ("Line of Credit" already ships)</div>
    <div class="arta-service-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;max-width:760px">
      ${[["Personal Investment Advisor","Design a custom investment strategy for you and your family.","var(--arta-ref-color-mint-70)","❁"],["Tax Advisory & Estate Plans","Build an estate plan to protect you and your loved ones.","var(--arta-ref-color-pink-70)","﹪"],["Line of Credit","Use an instant line of credit to coast through large or urgent expenses.","var(--arta-ref-color-violet-60)","❯"],["Custom Structured Offerings","Build a custom structured derivative specific to your views.","var(--arta-ref-color-peach-70)","(x)"]].map(([a,e,T,E])=>`
        <div class="arta-service">
          <div class="arta-service__body"><b>${a}</b><p>${e}</p></div>
          <div class="arta-service__tile" style="background:${T}">${E}</div>
        </div>`).join("")}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:12px">
      The violet tile is the second in-product lending signal: an instant <b>Line of Credit</b>
      already lives in this catalog. The Arta Card slots beside it as the everyday instrument.</p>`,parameters:t(`<div class="arta-service">
  <div class="arta-service__body">
    <b>Line of Credit</b>
    <p>Use an instant line of credit to coast through large or urgent expenses.</p>
  </div>
  <div class="arta-service__tile" style="background:var(--arta-ref-color-violet-60)">❯</div>
</div>`)},r={render:()=>`
    <div class="sb-h">Icon-fact rows (strategy detail pages) — dim circle icon + one fact each</div>
    <div class="arta-facts">
      <div class="arta-fact"><div class="arta-fact__icon">◈</div><div class="arta-fact__text">Broad market, diversified portfolio</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">☼</div><div class="arta-fact__text">Classic rebalancing of low-cost ETFs</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">﹪</div><div class="arta-fact__text">0.1% advisory fee</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">S$</div><div class="arta-fact__text">S$5K minimum investment</div></div>
    </div>`,parameters:t(`<div class="arta-facts">
  <div class="arta-fact">
    <div class="arta-fact__icon">﹪</div>
    <div class="arta-fact__text">0.1% advisory fee</div>
  </div>
</div>`)},i={render:()=>`
    <div class="sb-h">People &amp; Groups — verified Arta expert contacts (shield badge)</div>
    <div style="max-width:420px">
      ${["Alternative Investments","Insurance","Investment Advisor","Member Success","Tax & Estate"].map(a=>`
        <div class="arta-contact">
          <div class="arta-contact__avatar">a</div>
          <span class="arta-contact__name">${a}</span>
          <span class="arta-contact__badge">🛡 Verified</span>
        </div>`).join("")}
    </div>`,parameters:t(`<div class="arta-contact">
  <div class="arta-contact__avatar">a</div>
  <span class="arta-contact__name">Tax &amp; Estate</span>
  <span class="arta-contact__badge">🛡 Verified</span>
</div>`,`Human escalation as a navigation object. The Arta Card's "Talk to a human" states route into this existing surface, not a new one.`)},n={render:()=>`
    <div class="sb-h">"The Arta Takeaway" — three-column summary · stacks on mobile</div>
    <div class="arta-takeaway" style="max-width:760px">
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">🏆</div><p>Backed by your portfolio — the limit follows your eligible assets, computed in the open.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>A charge card: paid in full monthly, no revolving balances, no interest by design.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>If markets fall, your limit adjusts with 7 days' notice — and your assets are never sold.</p></div>
    </div>`,parameters:t(`<div class="arta-takeaway">
  <div class="arta-takeaway__col">
    <div class="arta-takeaway__icon">✓</div>
    <p>A charge card: paid in full monthly, no revolving balances, no interest by design.</p>
  </div>
</div>`,"The closing module of every education page — here carrying the Arta Card story.")},o={render:()=>`
    <div class="sb-h">Named-expert escalation (Family Office Service modal)</div>
    <div class="arta-keyterms" style="max-width:420px;text-align:center">
      <div style="font-size:28px">✻</div>
      <div class="arta-keyterms__title" style="text-align:center">Arta Family Office Service</div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.55">Arta's credit specialist is available to guide you. Other members asked:</p>
      <div style="text-align:left;display:flex;flex-direction:column;gap:10px">
        ${["How is my limit computed from my portfolio?","What happens to my limit if markets fall?","This sounds great — why might this not be right for me?"].map(a=>`<div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--arta-sys-color-status-positive)">✓</span><span style="color:var(--arta-sys-color-text-legal);font-size:13px;line-height:1.5">${a}</span></div>`).join("")}
      </div>
      <button class="arta-btn arta-btn--inverse" style="width:100%">Schedule consultation</button>
      <button class="arta-btn arta-btn--secondary" style="width:100%">Send a message on Arta</button>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:11.5px">Usually responds within 24 hours</p>
    </div>`,parameters:t(`<div class="arta-keyterms" style="text-align:center">
  <div class="arta-keyterms__title">Arta Family Office Service</div>
  <p>Arta's credit specialist is available to guide you. Other members asked:</p>
  <button class="arta-btn arta-btn--inverse" style="width:100%">Schedule consultation</button>
  <button class="arta-btn arta-btn--secondary" style="width:100%">Send a message on Arta</button>
</div>`,'Two details worth copying: the expert is **named**, and the question list includes the anti-sell question ("why might this NOT be right for me?").')},c={render:()=>`
    <div class="sb-h">Arta Pulse benchmark card — community comparison</div>
    <div class="arta-keyterms" style="max-width:460px">
      <div class="arta-keyterms__title">Benchmarks</div>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12px;letter-spacing:.06em">3 BENCHMARKS · 1,046 ANSWERS</p>
      <p style="color:var(--arta-sys-color-text-primary);font-size:17px;line-height:1.45">Compare your portfolio to other Arta members</p>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px">~55% of members are invested in alternative assets.</p>
      <div class="arta-donut-wrap">
        <div class="arta-donut" style="--arta-cmp-donut-size:120px;--arta-cmp-donut-hole:84px;background:conic-gradient(var(--arta-sys-color-text-primary) 0 22%, var(--arta-sys-color-surface-form) 22% 100%)">
          <div class="arta-donut__center"><div class="arta-donut__lbl">Cash</div></div>
        </div>
        <button class="arta-btn arta-btn--secondary">See insights →</button>
      </div>
    </div>`,parameters:t(`<div class="arta-keyterms">
  <div class="arta-keyterms__title">Benchmarks</div>
  <p>Compare your portfolio to other Arta members</p>
  <button class="arta-btn arta-btn--secondary">See insights →</button>
</div>`)};var d,l,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Family Office Services — colored icon tiles ("Line of Credit" already ships)</div>
    <div class="arta-service-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;max-width:760px">
      \${[['Personal Investment Advisor', 'Design a custom investment strategy for you and your family.', 'var(--arta-ref-color-mint-70)', '❁'], ['Tax Advisory & Estate Plans', 'Build an estate plan to protect you and your loved ones.', 'var(--arta-ref-color-pink-70)', '﹪'], ['Line of Credit', 'Use an instant line of credit to coast through large or urgent expenses.', 'var(--arta-ref-color-violet-60)', '❯'], ['Custom Structured Offerings', 'Build a custom structured derivative specific to your views.', 'var(--arta-ref-color-peach-70)', '(x)']].map(([t, d, c, ic]) => \`
        <div class="arta-service">
          <div class="arta-service__body"><b>\${t}</b><p>\${d}</p></div>
          <div class="arta-service__tile" style="background:\${c}">\${ic}</div>
        </div>\`).join('')}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:12px">
      The violet tile is the second in-product lending signal: an instant <b>Line of Credit</b>
      already lives in this catalog. The Arta Card slots beside it as the everyday instrument.</p>\`,
  parameters: src(\`<div class="arta-service">
  <div class="arta-service__body">
    <b>Line of Credit</b>
    <p>Use an instant line of credit to coast through large or urgent expenses.</p>
  </div>
  <div class="arta-service__tile" style="background:var(--arta-ref-color-violet-60)">❯</div>
</div>\`)
}`,...(v=(l=s.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Icon-fact rows (strategy detail pages) — dim circle icon + one fact each</div>
    <div class="arta-facts">
      <div class="arta-fact"><div class="arta-fact__icon">◈</div><div class="arta-fact__text">Broad market, diversified portfolio</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">☼</div><div class="arta-fact__text">Classic rebalancing of low-cost ETFs</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">﹪</div><div class="arta-fact__text">0.1% advisory fee</div></div>
      <div class="arta-fact"><div class="arta-fact__icon">S$</div><div class="arta-fact__text">S$5K minimum investment</div></div>
    </div>\`,
  parameters: src(\`<div class="arta-facts">
  <div class="arta-fact">
    <div class="arta-fact__icon">﹪</div>
    <div class="arta-fact__text">0.1% advisory fee</div>
  </div>
</div>\`)
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,h,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">People &amp; Groups — verified Arta expert contacts (shield badge)</div>
    <div style="max-width:420px">
      \${['Alternative Investments', 'Insurance', 'Investment Advisor', 'Member Success', 'Tax & Estate'].map(n => \`
        <div class="arta-contact">
          <div class="arta-contact__avatar">a</div>
          <span class="arta-contact__name">\${n}</span>
          <span class="arta-contact__badge">🛡 Verified</span>
        </div>\`).join('')}
    </div>\`,
  parameters: src(\`<div class="arta-contact">
  <div class="arta-contact__avatar">a</div>
  <span class="arta-contact__name">Tax &amp; Estate</span>
  <span class="arta-contact__badge">🛡 Verified</span>
</div>\`, 'Human escalation as a navigation object. The Arta Card\\'s "Talk to a human" states route into this existing surface, not a new one.')
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,g,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">"The Arta Takeaway" — three-column summary · stacks on mobile</div>
    <div class="arta-takeaway" style="max-width:760px">
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">🏆</div><p>Backed by your portfolio — the limit follows your eligible assets, computed in the open.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>A charge card: paid in full monthly, no revolving balances, no interest by design.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>If markets fall, your limit adjusts with 7 days' notice — and your assets are never sold.</p></div>
    </div>\`,
  parameters: src(\`<div class="arta-takeaway">
  <div class="arta-takeaway__col">
    <div class="arta-takeaway__icon">✓</div>
    <p>A charge card: paid in full monthly, no revolving balances, no interest by design.</p>
  </div>
</div>\`, 'The closing module of every education page — here carrying the Arta Card story.')
}`,...(_=(g=n.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var x,k,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Named-expert escalation (Family Office Service modal)</div>
    <div class="arta-keyterms" style="max-width:420px;text-align:center">
      <div style="font-size:28px">✻</div>
      <div class="arta-keyterms__title" style="text-align:center">Arta Family Office Service</div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.55">Arta's credit specialist is available to guide you. Other members asked:</p>
      <div style="text-align:left;display:flex;flex-direction:column;gap:10px">
        \${['How is my limit computed from my portfolio?', 'What happens to my limit if markets fall?', 'This sounds great — why might this not be right for me?'].map(q => \`<div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--arta-sys-color-status-positive)">✓</span><span style="color:var(--arta-sys-color-text-legal);font-size:13px;line-height:1.5">\${q}</span></div>\`).join('')}
      </div>
      <button class="arta-btn arta-btn--inverse" style="width:100%">Schedule consultation</button>
      <button class="arta-btn arta-btn--secondary" style="width:100%">Send a message on Arta</button>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:11.5px">Usually responds within 24 hours</p>
    </div>\`,
  parameters: src(\`<div class="arta-keyterms" style="text-align:center">
  <div class="arta-keyterms__title">Arta Family Office Service</div>
  <p>Arta's credit specialist is available to guide you. Other members asked:</p>
  <button class="arta-btn arta-btn--inverse" style="width:100%">Schedule consultation</button>
  <button class="arta-btn arta-btn--secondary" style="width:100%">Send a message on Arta</button>
</div>\`, 'Two details worth copying: the expert is **named**, and the question list includes the anti-sell question ("why might this NOT be right for me?").')
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,S,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Arta Pulse benchmark card — community comparison</div>
    <div class="arta-keyterms" style="max-width:460px">
      <div class="arta-keyterms__title">Benchmarks</div>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12px;letter-spacing:.06em">3 BENCHMARKS · 1,046 ANSWERS</p>
      <p style="color:var(--arta-sys-color-text-primary);font-size:17px;line-height:1.45">Compare your portfolio to other Arta members</p>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px">~55% of members are invested in alternative assets.</p>
      <div class="arta-donut-wrap">
        <div class="arta-donut" style="--arta-cmp-donut-size:120px;--arta-cmp-donut-hole:84px;background:conic-gradient(var(--arta-sys-color-text-primary) 0 22%, var(--arta-sys-color-surface-form) 22% 100%)">
          <div class="arta-donut__center"><div class="arta-donut__lbl">Cash</div></div>
        </div>
        <button class="arta-btn arta-btn--secondary">See insights →</button>
      </div>
    </div>\`,
  parameters: src(\`<div class="arta-keyterms">
  <div class="arta-keyterms__title">Benchmarks</div>
  <p>Compare your portfolio to other Arta members</p>
  <button class="arta-btn arta-btn--secondary">See insights →</button>
</div>\`)
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const B=["ServiceRows","IconFacts","VerifiedContacts","ArtaTakeaway","ExpertEscalation","PulseBenchmark"];export{n as ArtaTakeaway,o as ExpertEscalation,r as IconFacts,c as PulseBenchmark,s as ServiceRows,i as VerifiedContacts,B as __namedExportsOrder,$ as default};
