const w={title:"Product Patterns/Community & AI"},a={render:()=>`
    <div class="sb-h">Allocation donut + center readout + legend chips (dashboard widget)</div>
    <div class="arta-donut-wrap">
      <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-ref-color-violet-40) 3.7% 7.4%, var(--arta-ref-color-mint-50) 7.4% 9%, var(--arta-sys-color-surface-form) 9% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:300px">
        <button class="arta-chip">Stocks/ETFs 94%</button>
        <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
        <button class="arta-chip">Bonds 0.8%</button>
        <button class="arta-chip">Other 1.5%</button>
      </div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:56ch;margin-top:14px">
      In the walkthrough, hovering a legend chip highlights its segment and swaps the center readout.
      Built with a conic-gradient — no chart library.</p>`},t={render:()=>`
    <div class="sb-h">AI prompt-suggestion chips (dashboard) — member language, verbatim from the product</div>
    <div class="sb-col">
      <div class="arta-prompt"><span class="arta-prompt__icon">▤</span>I want market gains without S&amp;P 500 risk</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">♕</span>What is PPLI?</div>
      <div class="arta-prompt" style="border-color:var(--arta-sys-color-text-ai)"><span class="arta-prompt__icon">❯_</span>I want to put a downpayment on a house, but don't want to sell my equities right now.</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">···</span>See other ideas</div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:12px">
      The highlighted prompt ships in Arta's own dashboard today — members literally asking to
      <b>borrow instead of sell</b>. Together with the "Line of Credit" service tile, it's the
      in-product demand signal the charge card answers.</p>`},s={render:()=>`
    <div class="sb-h">People &amp; Groups — verified Arta expert contacts (shield badge)</div>
    <div style="max-width:420px">
      ${["Alternative Investments","Insurance","Investment Advisor","Member Success","Tax & Estate"].map(i=>`
        <div class="arta-contact">
          <div class="arta-contact__avatar">a</div>
          <span class="arta-contact__name">${i}</span>
          <span class="arta-contact__badge">🛡 Verified</span>
        </div>`).join("")}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:56ch;margin-top:12px">
      Human escalation is a first-class navigation object — the Arta Card's "Talk to a human" states
      route into this existing surface, not a new one.</p>`},e={render:()=>`
    <div class="sb-h">"The Arta Takeaway" — three-column summary closing every education page</div>
    <div class="arta-takeaway" style="max-width:760px">
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">🏆</div><p>Backed by your portfolio — the limit follows your eligible assets, computed in the open.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>A charge card: paid in full monthly, no revolving balances, no interest by design.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>If markets fall, your limit adjusts with 7 days' notice — and your assets are never sold.</p></div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:14px">
      Pattern from fund education pages, here carrying the Arta Card story — reuse it as the closing
      module of the card's education page.</p>`},r={render:()=>`
    <div class="sb-h">Named-expert escalation (Family Office Service modal)</div>
    <div class="arta-keyterms" style="max-width:420px;text-align:center">
      <div style="font-size:28px">✻</div>
      <div class="arta-keyterms__title" style="text-align:center">Arta Family Office Service</div>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.55">Arta's credit specialist is available to guide you. Other members asked:</p>
      <div style="text-align:left;display:flex;flex-direction:column;gap:10px">
        ${["How is my limit computed from my portfolio?","What happens to my limit if markets fall?","This sounds great — why might this not be right for me?"].map(i=>`<div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--arta-sys-color-status-positive)">✓</span><span style="color:var(--arta-sys-color-text-legal);font-size:13px;line-height:1.5">${i}</span></div>`).join("")}
      </div>
      <button class="arta-btn arta-btn--inverse" style="width:100%">Schedule consultation</button>
      <button class="arta-btn arta-btn--secondary" style="width:100%">Send a message on Arta</button>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:11.5px">Usually responds within 24 hours</p>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:14px">
      Two details worth copying: the expert is <b>named</b>, and the question list includes the anti-sell
      question ("why might this NOT be right for me?") — honesty as premium, verbatim from Arta's product.</p>`};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">Allocation donut + center readout + legend chips (dashboard widget)</div>
    <div class="arta-donut-wrap">
      <div class="arta-donut" style="background:conic-gradient(var(--arta-sys-color-action-primary) 0 3.7%, var(--arta-ref-color-violet-40) 3.7% 7.4%, var(--arta-ref-color-mint-50) 7.4% 9%, var(--arta-sys-color-surface-form) 9% 100%)">
        <div class="arta-donut__center"><div class="arta-donut__pct">3.7%</div><div class="arta-donut__lbl">Cash · S$120,200</div></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:300px">
        <button class="arta-chip">Stocks/ETFs 94%</button>
        <button class="arta-chip arta-chip--selected">Cash 3.7%</button>
        <button class="arta-chip">Bonds 0.8%</button>
        <button class="arta-chip">Other 1.5%</button>
      </div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:56ch;margin-top:14px">
      In the walkthrough, hovering a legend chip highlights its segment and swaps the center readout.
      Built with a conic-gradient — no chart library.</p>\`
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">AI prompt-suggestion chips (dashboard) — member language, verbatim from the product</div>
    <div class="sb-col">
      <div class="arta-prompt"><span class="arta-prompt__icon">▤</span>I want market gains without S&amp;P 500 risk</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">♕</span>What is PPLI?</div>
      <div class="arta-prompt" style="border-color:var(--arta-sys-color-text-ai)"><span class="arta-prompt__icon">❯_</span>I want to put a downpayment on a house, but don't want to sell my equities right now.</div>
      <div class="arta-prompt"><span class="arta-prompt__icon">···</span>See other ideas</div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:12px">
      The highlighted prompt ships in Arta's own dashboard today — members literally asking to
      <b>borrow instead of sell</b>. Together with the "Line of Credit" service tile, it's the
      in-product demand signal the charge card answers.</p>\`
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,m,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">People &amp; Groups — verified Arta expert contacts (shield badge)</div>
    <div style="max-width:420px">
      \${['Alternative Investments', 'Insurance', 'Investment Advisor', 'Member Success', 'Tax & Estate'].map(n => \`
        <div class="arta-contact">
          <div class="arta-contact__avatar">a</div>
          <span class="arta-contact__name">\${n}</span>
          <span class="arta-contact__badge">🛡 Verified</span>
        </div>\`).join('')}
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:56ch;margin-top:12px">
      Human escalation is a first-class navigation object — the Arta Card's "Talk to a human" states
      route into this existing surface, not a new one.</p>\`
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,y,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => \`
    <div class="sb-h">"The Arta Takeaway" — three-column summary closing every education page</div>
    <div class="arta-takeaway" style="max-width:760px">
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">🏆</div><p>Backed by your portfolio — the limit follows your eligible assets, computed in the open.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>A charge card: paid in full monthly, no revolving balances, no interest by design.</p></div>
      <div class="arta-takeaway__col"><div class="arta-takeaway__icon">✓</div><p>If markets fall, your limit adjusts with 7 days' notice — and your assets are never sold.</p></div>
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:14px">
      Pattern from fund education pages, here carrying the Arta Card story — reuse it as the closing
      module of the card's education page.</p>\`
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,b,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    </div>
    <p style="color:var(--arta-sys-color-text-secondary);font-size:13px;max-width:60ch;margin-top:14px">
      Two details worth copying: the expert is <b>named</b>, and the question list includes the anti-sell
      question ("why might this NOT be right for me?") — honesty as premium, verbatim from Arta's product.</p>\`
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const _=["AllocationDonut","PromptChips","VerifiedContacts","ArtaTakeaway","ExpertEscalation"];export{a as AllocationDonut,e as ArtaTakeaway,r as ExpertEscalation,t as PromptChips,s as VerifiedContacts,_ as __namedExportsOrder,w as default};
