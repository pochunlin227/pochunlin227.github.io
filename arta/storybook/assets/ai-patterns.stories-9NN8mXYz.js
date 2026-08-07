const u={title:"04 AI Patterns/Explain · Recommend · Confirm · Act"},e={render:()=>`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      The AI may <b>observe, explain and recommend</b> freely. Anything consequential — moving money, selling
      assets, changing the repayment source, modifying card settings — requires explicit
      <b>confirmation first</b>. Every insight card shares one anatomy:</p>
    <div style="max-width:400px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden">
      <div style="display:flex;align-items:center;gap:8px;padding:11px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
        <div style="width:18px;height:18px;border-radius:50%;background:var(--arta-sys-gradient-brand)"></div>
        <span style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--arta-sys-color-text-secondary)">Arta AI · Card</span>
        <span style="margin-left:auto;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-status-danger);border:1px solid var(--arta-sys-color-status-danger);border-radius:999px;padding:2px 8px">rules: platform</span>
      </div>
      <div style="padding:14px">
        <div class="sb-h" style="margin-top:0">1 · Explain</div>
        <p style="font-size:13.5px;line-height:1.55;margin:0 0 10px">Friday's card payment (S$8,400) exceeds the cash in your settlement account by <b>S$7,400</b>.</p>
        <div class="sb-h">2 · Recommend</div>
        <p style="font-size:12.5px;line-height:1.55;color:var(--arta-sys-color-text-secondary);margin:0 0 10px">Two T-bill rungs mature within 9 days — covering this at <b>zero cost</b>, without selling positions in a down week.</p>
        <div class="sb-h">3 · Confirm</div>
        <button class="arta-btn" style="width:100%">Confirm — sequence the payment</button>
        <div class="sb-h" style="margin-top:12px">4 · Act — then log</div>
        <p style="font-size:11px;line-height:1.6;color:var(--arta-sys-color-ai-source);margin:0">Uses: statement · settlement balance · portfolio positions. Explained, confirmed, executed, audited. Change your mind until Thu 11:59 PM.</p>
      </div>
    </div>`},t={render:()=>`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      The boundary, stated as a rule table — this is <code>platformPolicy.aiBoundaries</code>, identical for
      every brand. Renaming the assistant never changes it.</p>
    <table style="width:100%;max-width:640px;border-collapse:collapse;font-size:12.5px;background:var(--arta-sys-color-surface-raised);border-radius:var(--arta-sys-radius-surface);overflow:hidden">
      <tr><th style="text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);padding:10px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-strong)">The AI may…</th><th style="text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);padding:10px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-strong)">Requirement</th></tr>
      ${[["Observe & explain","Always — with data sources shown"],["Recommend","Always — with the math shown"],["Move money","<b>Explicit confirmation</b>"],["Sell assets","<b>Never automatic</b> — confirmation + cooling window"],["Change repayment source","<b>Explicit confirmation</b>"],["Modify card settings","<b>Explicit confirmation</b>"]].map(([r,x])=>`<tr><td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">${r}</td><td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">${x}</td></tr>`).join("")}
    </table>`},a={render:()=>`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      <b>Pattern — Human escalation.</b> The AI hands off to a named specialist — with context carried over,
      never a restart — whenever the situation exceeds its boundary:</p>
    <div style="max-width:560px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:6px 18px">
      ${["A disputed transaction","An unclear or contested decision outcome","Material portfolio risk (buffer exhausted, concentrated collateral)","A regulatory limitation on what the AI may advise","The member challenges an AI recommendation"].map(r=>`<div style="display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);font-size:13px;color:var(--arta-sys-color-text-secondary)"><span style="color:var(--arta-sys-color-status-warning)">↗</span><span>${r}</span></div>`).join("")}
    </div>
    <div style="max-width:400px;margin-top:14px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:14px">
      <p style="font-size:13px;line-height:1.55;margin:0 0 10px">This one deserves a person. <b>Mei-Ling from the credit team</b> can see everything we just discussed — you won't repeat yourself.</p>
      <button class="arta-btn" style="width:100%">Talk to Mei-Ling</button>
      <p style="font-size:11px;color:var(--arta-sys-color-ai-source);margin:8px 0 0">The full context and audit trail transfer with you.</p>
    </div>`};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => \`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      The AI may <b>observe, explain and recommend</b> freely. Anything consequential — moving money, selling
      assets, changing the repayment source, modifying card settings — requires explicit
      <b>confirmation first</b>. Every insight card shares one anatomy:</p>
    <div style="max-width:400px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden">
      <div style="display:flex;align-items:center;gap:8px;padding:11px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
        <div style="width:18px;height:18px;border-radius:50%;background:var(--arta-sys-gradient-brand)"></div>
        <span style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--arta-sys-color-text-secondary)">Arta AI · Card</span>
        <span style="margin-left:auto;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-status-danger);border:1px solid var(--arta-sys-color-status-danger);border-radius:999px;padding:2px 8px">rules: platform</span>
      </div>
      <div style="padding:14px">
        <div class="sb-h" style="margin-top:0">1 · Explain</div>
        <p style="font-size:13.5px;line-height:1.55;margin:0 0 10px">Friday's card payment (S$8,400) exceeds the cash in your settlement account by <b>S$7,400</b>.</p>
        <div class="sb-h">2 · Recommend</div>
        <p style="font-size:12.5px;line-height:1.55;color:var(--arta-sys-color-text-secondary);margin:0 0 10px">Two T-bill rungs mature within 9 days — covering this at <b>zero cost</b>, without selling positions in a down week.</p>
        <div class="sb-h">3 · Confirm</div>
        <button class="arta-btn" style="width:100%">Confirm — sequence the payment</button>
        <div class="sb-h" style="margin-top:12px">4 · Act — then log</div>
        <p style="font-size:11px;line-height:1.6;color:var(--arta-sys-color-ai-source);margin:0">Uses: statement · settlement balance · portfolio positions. Explained, confirmed, executed, audited. Change your mind until Thu 11:59 PM.</p>
      </div>
    </div>\`
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,d,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => \`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      The boundary, stated as a rule table — this is <code>platformPolicy.aiBoundaries</code>, identical for
      every brand. Renaming the assistant never changes it.</p>
    <table style="width:100%;max-width:640px;border-collapse:collapse;font-size:12.5px;background:var(--arta-sys-color-surface-raised);border-radius:var(--arta-sys-radius-surface);overflow:hidden">
      <tr><th style="text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);padding:10px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-strong)">The AI may…</th><th style="text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);padding:10px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-strong)">Requirement</th></tr>
      \${[['Observe & explain', 'Always — with data sources shown'], ['Recommend', 'Always — with the math shown'], ['Move money', '<b>Explicit confirmation</b>'], ['Sell assets', '<b>Never automatic</b> — confirmation + cooling window'], ['Change repayment source', '<b>Explicit confirmation</b>'], ['Modify card settings', '<b>Explicit confirmation</b>']].map(([a, r]) => \`<tr><td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">\${a}</td><td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">\${r}</td></tr>\`).join('')}
    </table>\`
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
    <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
      <b>Pattern — Human escalation.</b> The AI hands off to a named specialist — with context carried over,
      never a restart — whenever the situation exceeds its boundary:</p>
    <div style="max-width:560px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:6px 18px">
      \${['A disputed transaction', 'An unclear or contested decision outcome', 'Material portfolio risk (buffer exhausted, concentrated collateral)', 'A regulatory limitation on what the AI may advise', 'The member challenges an AI recommendation'].map(c => \`<div style="display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);font-size:13px;color:var(--arta-sys-color-text-secondary)"><span style="color:var(--arta-sys-color-status-warning)">↗</span><span>\${c}</span></div>\`).join('')}
    </div>
    <div style="max-width:400px;margin-top:14px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:14px">
      <p style="font-size:13px;line-height:1.55;margin:0 0 10px">This one deserves a person. <b>Mei-Ling from the credit team</b> can see everything we just discussed — you won't repeat yourself.</p>
      <button class="arta-btn" style="width:100%">Talk to Mei-Ling</button>
      <p style="font-size:11px;color:var(--arta-sys-color-ai-source);margin:8px 0 0">The full context and audit trail transfer with you.</p>
    </div>\`
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const m=["InsightAnatomy","ConfirmBeforeAction","HumanEscalation"];export{t as ConfirmBeforeAction,a as HumanEscalation,e as InsightAnatomy,m as __namedExportsOrder,u as default};
