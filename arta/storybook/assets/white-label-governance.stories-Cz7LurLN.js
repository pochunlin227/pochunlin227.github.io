import{t as I}from"./tokens.flat-BbcjGX1a.js";const L={title:"Patterns/White-Label Governance"},S=[{n:"1",name:"Arta core",who:"Locked — not changeable by partners",tone:"var(--arta-sys-color-status-danger)",items:["Eligibility & eligible-asset logic","Portfolio & custodian data integration","Limit decisioning","Required application data","Compliance & disclosure completeness","Consent records & audit trail","Authentication, fraud & security","Decision & error states","AI safety boundaries","Servicing infrastructure"]},{n:"2",name:"Guardrailed configuration",who:"Adjustable, with rules",tone:"var(--arta-sys-color-status-warning)",items:["Brand colour within accessibility limits","Typography within supported scale","Radius & surface treatment","Tone of voice","AI assistant name","Notification style","Benefit descriptions & content density","Order of non-critical modules","Card artwork & product naming","Illustration style"]},{n:"3",name:"Partner-owned shell",who:"The partner’s own app",tone:"var(--arta-sys-color-status-positive)",items:["App navigation & account home","Card discovery entry point","Eligibility campaigns & cross-sell","Customer segmentation","Partner loyalty programme","Existing portfolio experience","General support entry","Marketing communications"]}],s={render:()=>`
    <div style="max-width:960px">
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        White-label is not a re-skin — it is a <b>governed configuration model</b>, and the product sits
        <b>inside the partner's own app shell</b>. The partner owns the surrounding relationship; Arta powers
        and governs the consequential card experience. Three layers, three owners, three change processes —
        the token pipeline enforces the boundary mechanically (see the Governance-in-CI story).</p>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px">
        ${S.map(e=>`
          <div style="flex:1;min-width:260px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-top:3px solid ${e.tone};border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div class="sb-h" style="margin-top:0">Layer ${e.n} — ${e.name}</div>
            <div style="font-size:12px;color:${e.tone};margin-bottom:10px">${e.who}</div>
            ${e.items.map(r=>`<div style="font-size:13px;color:var(--arta-sys-color-text-secondary);padding:4px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">${r}</div>`).join("")}
          </div>`).join("")}
      </div>
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:14px">
        Mapping to tokens: <b>Arta core</b> → the flagged <code>core.semantic.*</code> sys groups
        (status / credit / decision / disclosure / ai) + protected components · <b>Guardrailed configuration</b>
        → the partner's sys-override theme file, validated for contrast &amp; hue-family (Meridian, Northstar) ·
        <b>Partner-owned shell</b> → the partner's own app, outside Arta components entirely.</p>
    </div>`},o={render:()=>`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Lending needs semantics Arta never had. All of these are <b>core governance tier</b> 🔒 — a partner may
        tune lightness for contrast on its surfaces, but the hue family is locked: warning stays amber,
        approved stays green, AI voice stays mint. Screens reference these, never raw status colors.</p>
      ${["credit","decision","disclosure","ai"].map(r=>{const t=I.sys.filter(a=>a.path.startsWith(`arta.sys.color.${r}.`));return`<div class="sb-h">arta · sys · color · ${r} 🔒</div><div class="sb-row">${t.map(a=>`
          <div class="sb-swatch" style="width:210px">
            <div class="sb-swatch__chip" style="background:var(${a.cssVar})"></div>
            <div class="sb-swatch__meta">${a.path.replace(`arta.sys.color.${r}.`,`${r}.`)}<code>aliases ${a.value.replace(/[{}]/g,"")}</code></div>
          </div>`).join("")}</div>`}).join("")}
      <div class="sb-h" style="margin-top:24px">Usage examples</div>
      <div class="sb-col" style="max-width:420px">
        <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Statement balance</span><b style="color:var(--arta-sys-color-credit-balance-current)">$8,420.19</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Available limit</span><b style="color:var(--arta-sys-color-credit-limit-available)">$16,579</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Interest if you pay minimum</span><b style="color:var(--arta-sys-color-credit-interest-warning)">−$154 / cycle</b></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-approved);border:1px solid var(--arta-sys-color-decision-approved);border-radius:999px;padding:5px 12px">Approved</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-pending);border:1px solid var(--arta-sys-color-decision-pending);border-radius:999px;padding:5px 12px">Pending</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-action-required);border:1px solid var(--arta-sys-color-decision-action-required);border-radius:999px;padding:5px 12px">Action required</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-declined);border:1px solid var(--arta-sys-color-decision-declined);border-radius:999px;padding:5px 12px">Declined</span>
        </div>
        <p style="font-size:13px;line-height:1.6;margin:0"><span style="color:var(--arta-sys-color-text-ai)">Paying in full saves you $154 this cycle.</span><br/>
        <span style="color:var(--arta-sys-color-ai-source);font-size:11.5px">Sources: statement 07/30 · Arta Cash rate 4.1% · as of today, 9:41 AM</span></p>
      </div>`},n={render:()=>`
    <div style="max-width:74ch">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        The governance line is enforced by the token build, not by review vigilance. A partner theme that
        re-points a core semantic at its brand palette fails CI with an explanation:</p>
      <pre style="background:var(--arta-sys-color-surface-sunken);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:16px;font-size:12px;line-height:1.7;overflow-x:auto;color:var(--arta-sys-color-text-secondary)">$ node scripts/build-tokens.mjs

Token validation failed:
  ✗ [northstar] GOVERNANCE: arta.sys.color.status.warning is core-semantic —
    overrides must alias arta.ref.color.* (got "{northstar.ref.color.polar.30}")</pre>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Rules the validator holds today: ① core semantics (status / credit / decision / disclosure / ai) must
        alias the platform ref palette and keep their hue family — warning can lighten, it cannot become brand
        pink; ② legal type minimums cannot shrink; ③ sys must alias ref, cmp may never hardcode. "No" to an
        unsafe partner request is structural, not political.</p>
    </div>`},j=[["Application Stepper","Long flows, save & resume","in prototype"],["Verified Data Row","Displays KYC-verified data (confirm, don’t collect)","built"],["Sensitive Field","Income, identity, tax data — reassurance attached","built"],["Evidence Upload","Proof documents + processing state","proposed"],["Money Input","Income, limits, payment amounts","built"],["Credit Limit Selector","Requested limit + constraint explanation","in prototype"],["Key Terms Card","Headline rates & fees, never collapsed","built"],["Disclosure Viewer","Long legal documents (bottom sheet + scroll-to-read)","built"],["Decision Status","Approved / pending / declined patterns","built"],["Repayment Scenario Card","Payment options & their cost, shown as math","in prototype"],["AI Answer with Sources","Source, timestamp, limitations on every AI answer","proposed"],["Human Handoff","AI → specialist escalation, context carried over","proposed"]],N=[["Brand primary","Arta palette","Partner palette","WCAG contrast, validated at build"],["Typography","Rotunda system","Supported partner font","Semantic hierarchy fixed"],["Radius","Arta radius scale","Supported range","Must not break component states"],["Card art","Arta gradients","Partner artwork","Issuer / network requirements"],["AI identity","Arta AI","Partner assistant name","AI & data use must stay disclosed"],["Disclosure","Arta component","Theme only","Content & prominence non-removable"],["Decision state","Arta pattern","Theme only","Status & next step fixed"]],i={render:()=>`
    <div style="max-width:760px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        How partner configuration scales safely — every configurable surface ships with its constraint.
        The constraint column is what makes this a platform rather than a theme.</p>
      <table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-top:12px;background:var(--arta-sys-color-surface-raised);border-radius:var(--arta-sys-radius-surface);overflow:hidden">
        <tr>${["Token / component","Arta default","Partner option","Constraint"].map(e=>`<th style="text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);padding:10px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-strong)">${e}</th>`).join("")}</tr>
        ${N.map(([e,r,t,a])=>`
          <tr>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-primary);font-weight:600">${e}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">${r}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">${t}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-status-warning)">${a}</td>
          </tr>`).join("")}
      </table>
    </div>`},P=["Hide or de-emphasise fees, or reduce the prominence of critical warnings with brand styling","Remove the portfolio / market-movement risk explanation","Alter a decisioning outcome — or present pending as approved","Remove the next step from a decline or adjusted offer","Pre-check any consent","Let the AI move money or sell assets without explicit confirmation","Hide which data the AI used"],l={render:()=>`
    <div style="max-width:620px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:64ch">
        The most important part of white-label is the <b>non-configurable boundary</b>. Brand flexibility never
        gets to compromise transparency or financial safety:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:6px 18px;margin-top:12px">
        ${P.map(e=>`
          <div style="display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);font-size:13px;color:var(--arta-sys-color-text-secondary)">
            <span style="color:var(--arta-sys-color-status-danger);font-weight:600">✕</span><span>${e}</span>
          </div>`).join("")}
      </div>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12.5px;line-height:1.6;margin-top:12px">
        In implementation these rules are expressed through theme tokens, content schemas, protected components
        and partner-level configuration permissions — the build already rejects governance violations.</p>
    </div>`},d={render:()=>`
    <div style="max-width:760px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        Arta's current visual system is strong for premium product discovery, but it needs new patterns for
        <b>form density, lending status, disclosures and governed white-label configuration</b>. The lending
        component inventory and where each stands:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden;margin-top:12px">
        ${j.map(([e,r,t])=>`
          <div style="display:flex;gap:14px;align-items:baseline;padding:11px 16px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
            <b style="flex:0 0 190px;font-size:13.5px">${e}</b>
            <span style="flex:1;font-size:12.5px;color:var(--arta-sys-color-text-secondary)">${r}</span>
            <span style="font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:${t==="built"?"var(--arta-sys-color-status-positive)":t==="in prototype"?"var(--arta-sys-color-status-info)":"var(--arta-sys-color-text-tertiary)"}">${t}</span>
          </div>`).join("")}
      </div>
    </div>`};var c,p,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:960px">
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        White-label is not a re-skin — it is a <b>governed configuration model</b>, and the product sits
        <b>inside the partner's own app shell</b>. The partner owns the surrounding relationship; Arta powers
        and governs the consequential card experience. Three layers, three owners, three change processes —
        the token pipeline enforces the boundary mechanically (see the Governance-in-CI story).</p>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px">
        \${LAYERS.map(l => \`
          <div style="flex:1;min-width:260px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-top:3px solid \${l.tone};border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div class="sb-h" style="margin-top:0">Layer \${l.n} — \${l.name}</div>
            <div style="font-size:12px;color:\${l.tone};margin-bottom:10px">\${l.who}</div>
            \${l.items.map(i => \`<div style="font-size:13px;color:var(--arta-sys-color-text-secondary);padding:4px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">\${i}</div>\`).join('')}
          </div>\`).join('')}
      </div>
      <p style="max-width:72ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:14px">
        Mapping to tokens: <b>Arta core</b> → the flagged <code>core.semantic.*</code> sys groups
        (status / credit / decision / disclosure / ai) + protected components · <b>Guardrailed configuration</b>
        → the partner's sys-override theme file, validated for contrast &amp; hue-family (Meridian, Northstar) ·
        <b>Partner-owned shell</b> → the partner's own app, outside Arta components entirely.</p>
    </div>\`
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var u,v,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const groups = ['credit', 'decision', 'disclosure', 'ai'];
    return \`
      <p style="max-width:70ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Lending needs semantics Arta never had. All of these are <b>core governance tier</b> 🔒 — a partner may
        tune lightness for contrast on its surfaces, but the hue family is locked: warning stays amber,
        approved stays green, AI voice stays mint. Screens reference these, never raw status colors.</p>
      \${groups.map(g => {
      const leaves = tokens.sys.filter(t => t.path.startsWith(\`arta.sys.color.\${g}.\`));
      return \`<div class="sb-h">arta · sys · color · \${g} 🔒</div><div class="sb-row">\${leaves.map(t => \`
          <div class="sb-swatch" style="width:210px">
            <div class="sb-swatch__chip" style="background:var(\${t.cssVar})"></div>
            <div class="sb-swatch__meta">\${t.path.replace(\`arta.sys.color.\${g}.\`, \`\${g}.\`)}<code>aliases \${t.value.replace(/[{}]/g, '')}</code></div>
          </div>\`).join('')}</div>\`;
    }).join('')}
      <div class="sb-h" style="margin-top:24px">Usage examples</div>
      <div class="sb-col" style="max-width:420px">
        <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:16px">
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Statement balance</span><b style="color:var(--arta-sys-color-credit-balance-current)">$8,420.19</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Available limit</span><b style="color:var(--arta-sys-color-credit-limit-available)">$16,579</b></div>
          <div style="display:flex;justify-content:space-between;font-size:14px;padding:6px 0"><span style="color:var(--arta-sys-color-credit-balance-statement)">Interest if you pay minimum</span><b style="color:var(--arta-sys-color-credit-interest-warning)">−$154 / cycle</b></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-approved);border:1px solid var(--arta-sys-color-decision-approved);border-radius:999px;padding:5px 12px">Approved</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-pending);border:1px solid var(--arta-sys-color-decision-pending);border-radius:999px;padding:5px 12px">Pending</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-action-required);border:1px solid var(--arta-sys-color-decision-action-required);border-radius:999px;padding:5px 12px">Action required</span>
          <span style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-decision-declined);border:1px solid var(--arta-sys-color-decision-declined);border-radius:999px;padding:5px 12px">Declined</span>
        </div>
        <p style="font-size:13px;line-height:1.6;margin:0"><span style="color:var(--arta-sys-color-text-ai)">Paying in full saves you $154 this cycle.</span><br/>
        <span style="color:var(--arta-sys-color-ai-source);font-size:11.5px">Sources: statement 07/30 · Arta Cash rate 4.1% · as of today, 9:41 AM</span></p>
      </div>\`;
  }
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var x,h,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:74ch">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        The governance line is enforced by the token build, not by review vigilance. A partner theme that
        re-points a core semantic at its brand palette fails CI with an explanation:</p>
      <pre style="background:var(--arta-sys-color-surface-sunken);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:16px;font-size:12px;line-height:1.7;overflow-x:auto;color:var(--arta-sys-color-text-secondary)">$ node scripts/build-tokens.mjs

Token validation failed:
  ✗ [northstar] GOVERNANCE: arta.sys.color.status.warning is core-semantic —
    overrides must alias arta.ref.color.* (got "{northstar.ref.color.polar.30}")</pre>
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        Rules the validator holds today: ① core semantics (status / credit / decision / disclosure / ai) must
        alias the platform ref palette and keep their hue family — warning can lighten, it cannot become brand
        pink; ② legal type minimums cannot shrink; ③ sys must alias ref, cmp may never hardcode. "No" to an
        unsafe partner request is structural, not political.</p>
    </div>\`
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,f,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:760px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        How partner configuration scales safely — every configurable surface ships with its constraint.
        The constraint column is what makes this a platform rather than a theme.</p>
      <table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-top:12px;background:var(--arta-sys-color-surface-raised);border-radius:var(--arta-sys-radius-surface);overflow:hidden">
        <tr>\${['Token / component', 'Arta default', 'Partner option', 'Constraint'].map(h => \`<th style="text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);padding:10px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-strong)">\${h}</th>\`).join('')}</tr>
        \${CONSTRAINTS.map(([a, b, c, d]) => \`
          <tr>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-primary);font-weight:600">\${a}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">\${b}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">\${c}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-status-warning)">\${d}</td>
          </tr>\`).join('')}
      </table>
    </div>\`
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,$,A;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:620px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:64ch">
        The most important part of white-label is the <b>non-configurable boundary</b>. Brand flexibility never
        gets to compromise transparency or financial safety:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:6px 18px;margin-top:12px">
        \${CANNOT.map(c => \`
          <div style="display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);font-size:13px;color:var(--arta-sys-color-text-secondary)">
            <span style="color:var(--arta-sys-color-status-danger);font-weight:600">✕</span><span>\${c}</span>
          </div>\`).join('')}
      </div>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12.5px;line-height:1.6;margin-top:12px">
        In implementation these rules are expressed through theme tokens, content schemas, protected components
        and partner-level configuration permissions — the build already rejects governance violations.</p>
    </div>\`
}`,...(A=($=l.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var z,T,C;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:760px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        Arta's current visual system is strong for premium product discovery, but it needs new patterns for
        <b>form density, lending status, disclosures and governed white-label configuration</b>. The lending
        component inventory and where each stands:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden;margin-top:12px">
        \${INVENTORY.map(([name, use, status]) => \`
          <div style="display:flex;gap:14px;align-items:baseline;padding:11px 16px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
            <b style="flex:0 0 190px;font-size:13.5px">\${name}</b>
            <span style="flex:1;font-size:12.5px;color:var(--arta-sys-color-text-secondary)">\${use}</span>
            <span style="font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:\${status === 'built' ? 'var(--arta-sys-color-status-positive)' : status === 'in prototype' ? 'var(--arta-sys-color-status-info)' : 'var(--arta-sys-color-text-tertiary)'}">\${status}</span>
          </div>\`).join('')}
      </div>
    </div>\`
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const D=["ThreeLayerModel","LendingSemanticTokens","GovernanceInCI","TokenConstraints","WhatPartnersCannotChange","ComponentInventory"];export{d as ComponentInventory,n as GovernanceInCI,o as LendingSemanticTokens,s as ThreeLayerModel,i as TokenConstraints,l as WhatPartnersCannotChange,D as __namedExportsOrder,L as default};
