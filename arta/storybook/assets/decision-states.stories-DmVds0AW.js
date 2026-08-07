const m={title:"04 Patterns/Decision & outcomes"},e=(s,l,c,y,u="")=>`
  <div style="flex:1;min-width:250px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
    <span style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--arta-sys-color-decision-${s});border:1px solid var(--arta-sys-color-decision-${s});border-radius:999px;padding:4px 10px">${l}</span>
    <b style="display:block;font-size:14.5px;margin:12px 0 6px">${c}</b>
    <p style="font-size:12px;line-height:1.6;color:var(--arta-sys-color-text-secondary);margin:0">${y}</p>
    ${u}
  </div>`,t={render:()=>`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      Every outcome is designed, not just approval — and every outcome ships a <b>next step</b>. The status
      colour, its prominence, and the presence of a next step are platform policy; partners theme the surface,
      never the state. Presenting pending as approved is structurally impossible.</p>
    <div style="display:flex;gap:14px;flex-wrap:wrap;max-width:1060px">
      ${e("approved","Approved","Welcome to the card","Limit restated in writing; virtual card usable immediately; physical card timeline.")}
      ${e("pending","Pending","A specialist is reviewing","Named stages, honest expectation (1–2 business days), notification promise — nothing for the member to do.")}
      ${e("action-required","Action required","Two documents needed","Entity verification for company-held pledged assets. Application saved either way; human help one tap away.")}
      ${e("declined","Declined","Not this time — with dignity","Collateral-eligibility reason as specific as legally possible; written statement within 7 days; membership unchanged; zero cross-sell.")}
    </div>`},a={render:()=>`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      <b>Pattern — Adjusted offer:</b> explain the difference between requested and approved, then provide
      clear next steps. For portfolio-secured limits this becomes a <b>phased limit</b>: private positions
      count at their next official NAV, so the limit starts lower and rises automatically. The member keeps a
      real choice — accept now, adjust the pledge, or wait — with no urgency pattern.</p>
    <div style="max-width:400px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
      <span style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--arta-sys-color-decision-action-required);border:1px solid var(--arta-sys-color-decision-action-required);border-radius:999px;padding:4px 10px">Approved — with a change</span>
      <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0;margin-top:12px"><span style="color:var(--arta-sys-color-text-secondary)">You asked for</span><s style="color:var(--arta-sys-color-text-tertiary)">S$61,000</s></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0"><span style="color:var(--arta-sys-color-text-secondary)">Starting limit</span><b style="color:var(--arta-sys-color-credit-limit-recommended)">S$40,000</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0"><span style="color:var(--arta-sys-color-text-secondary)">After Sep 30 NAV</span><b style="color:var(--arta-sys-color-credit-limit-available)">rises automatically</b></div>
      <p style="font-size:11.5px;line-height:1.6;color:var(--arta-sys-color-disclosure-required);margin:8px 0 0">Nothing was declined — private positions pledge at their next official pricing. This offer stays open 30 days.</p>
      <button class="arta-btn" style="width:100%;margin-top:12px">Accept S$40,000 — start today</button>
      <button class="arta-btn arta-btn--secondary" style="width:100%;margin-top:8px">Adjust my pledge</button>
    </div>`};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => \`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      Every outcome is designed, not just approval — and every outcome ships a <b>next step</b>. The status
      colour, its prominence, and the presence of a next step are platform policy; partners theme the surface,
      never the state. Presenting pending as approved is structurally impossible.</p>
    <div style="display:flex;gap:14px;flex-wrap:wrap;max-width:1060px">
      \${state('approved', 'Approved', 'Welcome to the card', 'Limit restated in writing; virtual card usable immediately; physical card timeline.')}
      \${state('pending', 'Pending', 'A specialist is reviewing', 'Named stages, honest expectation (1–2 business days), notification promise — nothing for the member to do.')}
      \${state('action-required', 'Action required', 'Two documents needed', 'Entity verification for company-held pledged assets. Application saved either way; human help one tap away.')}
      \${state('declined', 'Declined', 'Not this time — with dignity', 'Collateral-eligibility reason as specific as legally possible; written statement within 7 days; membership unchanged; zero cross-sell.')}
    </div>\`
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,d,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => \`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      <b>Pattern — Adjusted offer:</b> explain the difference between requested and approved, then provide
      clear next steps. For portfolio-secured limits this becomes a <b>phased limit</b>: private positions
      count at their next official NAV, so the limit starts lower and rises automatically. The member keeps a
      real choice — accept now, adjust the pledge, or wait — with no urgency pattern.</p>
    <div style="max-width:400px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
      <span style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--arta-sys-color-decision-action-required);border:1px solid var(--arta-sys-color-decision-action-required);border-radius:999px;padding:4px 10px">Approved — with a change</span>
      <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0;margin-top:12px"><span style="color:var(--arta-sys-color-text-secondary)">You asked for</span><s style="color:var(--arta-sys-color-text-tertiary)">S$61,000</s></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0"><span style="color:var(--arta-sys-color-text-secondary)">Starting limit</span><b style="color:var(--arta-sys-color-credit-limit-recommended)">S$40,000</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0"><span style="color:var(--arta-sys-color-text-secondary)">After Sep 30 NAV</span><b style="color:var(--arta-sys-color-credit-limit-available)">rises automatically</b></div>
      <p style="font-size:11.5px;line-height:1.6;color:var(--arta-sys-color-disclosure-required);margin:8px 0 0">Nothing was declined — private positions pledge at their next official pricing. This offer stays open 30 days.</p>
      <button class="arta-btn" style="width:100%;margin-top:12px">Accept S$40,000 — start today</button>
      <button class="arta-btn arta-btn--secondary" style="width:100%;margin-top:8px">Adjust my pledge</button>
    </div>\`
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["AllOutcomes","AdjustedOfferPattern"];export{a as AdjustedOfferPattern,t as AllOutcomes,x as __namedExportsOrder,m as default};
