const I={title:"05 White-Label System/Governance & configuration"},$=[{name:"brandTheme",who:"Partner-controlled",tone:"var(--arta-sys-color-status-positive)",desc:"Free brand expression, validated for contrast.",tree:["logo","colours","typography","radius","illustration","cardArtwork","productName","assistantIdentity","surfaceStyle"]},{name:"productConfig",who:"Partner-set, within Arta rules",tone:"var(--arta-sys-color-status-warning)",desc:"Product settings governed by contract.",tree:["productName","benefits","entryPoint","settlementOptions","supportRoute","notifications","nonCriticalCopy","approvedMarketing"]},{name:"platformPolicy",who:"Arta — not modifiable",tone:"var(--arta-sys-color-status-danger)",desc:"The regulated core. Same object for every partner.",tree:["decisioning","eligibilityLogic","requiredFields","disclosures","consent","authentication","securityControls","aiBoundaries","escalation","auditTrail"]}],o={render:()=>`
    <div style="max-width:980px">
      <p style="max-width:74ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        White-label configuration is <b>three kinds of data, not one theme file</b> — brand, product, and
        platform governance are separated so each has its own owner and change process. There is no
        <code>ArtaOfferCard</code> and <code>NorthstarOfferCard</code> — only <code>OfferCard</code>, rendered
        under a provider: same data, same hierarchy, same decision logic, same disclosures; only the brand
        layer changes.</p>
      <pre style="background:var(--arta-sys-color-surface-sunken);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:14px 16px;font-size:12px;line-height:1.7;color:var(--arta-sys-color-text-secondary);overflow-x:auto;margin:14px 0">&lt;CardSystemProvider theme={artaTheme}&gt;      &lt;OfferCard offer={offer} /&gt;
&lt;CardSystemProvider theme={northstarTheme}&gt; &lt;OfferCard offer={offer} /&gt;</pre>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:8px">
        ${$.map(e=>`
          <div style="flex:1;min-width:250px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-top:3px solid ${e.tone};border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div class="sb-h" style="margin-top:0"><code>${e.name}</code></div>
            <div style="font-size:12px;color:${e.tone};margin-bottom:4px">${e.who}</div>
            <div style="font-size:12px;color:var(--arta-sys-color-text-tertiary);margin-bottom:10px">${e.desc}</div>
            <pre style="font-size:12px;line-height:1.8;color:var(--arta-sys-color-text-secondary);margin:0">${e.name}
${e.tree.map((t,r)=>(r===e.tree.length-1?"└── ":"├── ")+t).join(`
`)}</pre>
          </div>`).join("")}
      </div>
      <p style="max-width:74ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:14px">
        In this system today: <b>brandTheme</b> → the partner sys-override token files (Meridian, Northstar),
        contrast- and hue-validated at build · <b>productConfig</b> → per-program data consumed by screens
        (limits, benefits, support routes — never themable) · <b>platformPolicy</b> → the flagged
        core-semantic groups + protected components; the build rejects any partner override (see Governance-in-CI).</p>
    </div>`},s={render:()=>`
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
    </div>`},A=[["Application Stepper","Long flows, save & resume","in prototype","Extend — promote to system, add resume state"],["Verified Data Row","Displays KYC-verified data (confirm, don’t collect)","built","Keep"],["Sensitive Field","Income, identity, tax data — reassurance attached","built","Keep"],["Evidence Upload","Proof documents + processing state","proposed","Extend — build with processing states"],["Money Input","Income, limits, payment amounts","built","Keep"],["Credit Limit Selector","Requested limit + constraint explanation","in prototype","Merge — unify prototype + RecommendedLimit story"],["Key Terms Card","Headline rates & fees, never collapsed","built","Keep — protected component"],["Disclosure Viewer","Long legal documents (bottom sheet + scroll-to-read)","built","Keep — protected component"],["Decision Status","Approved / pending / declined patterns","built","Keep — states story added"],["Repayment Scenario Card","Payment options & their cost, shown as math","in prototype","Merge — one AI insight anatomy (04 AI Patterns)"],["AI Answer with Sources","Source, timestamp, limitations on every AI answer","proposed","Extend — anatomy defined in 04 AI Patterns"],["Human Handoff","AI → specialist escalation, context carried over","proposed","Extend — pattern defined in 04 AI Patterns"],["Offer Card (Arta / Northstar duplicates)","Personalised offer surface","two versions","Retire duplicates — one OfferCard under theme provider"]],z=[["Brand primary","Arta palette","Partner palette","WCAG contrast, validated at build"],["Typography","Rotunda system","Supported partner font","Semantic hierarchy fixed"],["Radius","Arta radius scale","Supported range","Must not break component states"],["Card art","Arta gradients","Partner artwork","Issuer / network requirements"],["AI identity","Arta AI","Partner assistant name","AI & data use must stay disclosed"],["Disclosure","Arta component","Theme only","Content & prominence non-removable"],["Decision state","Arta pattern","Theme only","Status & next step fixed"]],n={render:()=>`
    <div style="max-width:760px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        How partner configuration scales safely — every configurable surface ships with its constraint.
        The constraint column is what makes this a platform rather than a theme.</p>
      <table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-top:12px;background:var(--arta-sys-color-surface-raised);border-radius:var(--arta-sys-radius-surface);overflow:hidden">
        <tr>${["Token / component","Arta default","Partner option","Constraint"].map(e=>`<th style="text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--arta-sys-color-text-tertiary);padding:10px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-strong)">${e}</th>`).join("")}</tr>
        ${z.map(([e,t,r,a])=>`
          <tr>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-primary);font-weight:600">${e}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">${t}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-text-secondary)">${r}</td>
            <td style="padding:9px 14px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);color:var(--arta-sys-color-status-warning)">${a}</td>
          </tr>`).join("")}
      </table>
    </div>`},T=["Hide or de-emphasise fees, or reduce the prominence of critical warnings with brand styling","Remove the portfolio / market-movement risk explanation","Alter a decisioning outcome — or present pending as approved","Remove the next step from a decline or adjusted offer","Pre-check any consent","Let the AI move money or sell assets without explicit confirmation","Hide which data the AI used"],i={render:()=>`
    <div style="max-width:620px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:64ch">
        The most important part of white-label is the <b>non-configurable boundary</b>. Brand flexibility never
        gets to compromise transparency or financial safety:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);padding:6px 18px;margin-top:12px">
        ${T.map(e=>`
          <div style="display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--arta-sys-color-stroke-subtle);font-size:13px;color:var(--arta-sys-color-text-secondary)">
            <span style="color:var(--arta-sys-color-status-danger);font-weight:600">✕</span><span>${e}</span>
          </div>`).join("")}
      </div>
      <p style="color:var(--arta-sys-color-text-tertiary);font-size:12.5px;line-height:1.6;margin-top:12px">
        In implementation these rules are expressed through theme tokens, content schemas, protected components
        and partner-level configuration permissions — the build already rejects governance violations.</p>
    </div>`},d={render:()=>`
    <div style="max-width:1020px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        Arta's current visual system is strong for premium product discovery, but it needs new patterns for
        <b>form density, lending status, disclosures and governed white-label configuration</b>. The lending
        component inventory and where each stands:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden;margin-top:12px">
        ${A.map(([e,t,r,a])=>`
          <div style="display:flex;gap:14px;align-items:baseline;padding:11px 16px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
            <b style="flex:0 0 175px;font-size:13px">${e}</b>
            <span style="flex:1;font-size:12px;color:var(--arta-sys-color-text-secondary)">${t}</span>
            <span style="flex:0 0 90px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:${r==="built"?"var(--arta-sys-color-status-positive)":r==="in prototype"?"var(--arta-sys-color-status-info)":"var(--arta-sys-color-text-tertiary)"}">${r}</span>
            <span style="flex:0 0 240px;font-size:11.5px;color:${a.startsWith("Keep")?"var(--arta-sys-color-status-positive)":a.startsWith("Retire")?"var(--arta-sys-color-status-danger)":"var(--arta-sys-color-status-warning)"}">${a}</span>
          </div>`).join("")}
      </div>
    </div>`};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:980px">
      <p style="max-width:74ch;color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6">
        White-label configuration is <b>three kinds of data, not one theme file</b> — brand, product, and
        platform governance are separated so each has its own owner and change process. There is no
        <code>ArtaOfferCard</code> and <code>NorthstarOfferCard</code> — only <code>OfferCard</code>, rendered
        under a provider: same data, same hierarchy, same decision logic, same disclosures; only the brand
        layer changes.</p>
      <pre style="background:var(--arta-sys-color-surface-sunken);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-control);padding:14px 16px;font-size:12px;line-height:1.7;color:var(--arta-sys-color-text-secondary);overflow-x:auto;margin:14px 0">&lt;CardSystemProvider theme={artaTheme}&gt;      &lt;OfferCard offer={offer} /&gt;
&lt;CardSystemProvider theme={northstarTheme}&gt; &lt;OfferCard offer={offer} /&gt;</pre>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:8px">
        \${CONFIG_SETS.map(s => \`
          <div style="flex:1;min-width:250px;background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-top:3px solid \${s.tone};border-radius:var(--arta-sys-radius-surface);padding:18px">
            <div class="sb-h" style="margin-top:0"><code>\${s.name}</code></div>
            <div style="font-size:12px;color:\${s.tone};margin-bottom:4px">\${s.who}</div>
            <div style="font-size:12px;color:var(--arta-sys-color-text-tertiary);margin-bottom:10px">\${s.desc}</div>
            <pre style="font-size:12px;line-height:1.8;color:var(--arta-sys-color-text-secondary);margin:0">\${s.name}\\n\${s.tree.map((t, i) => (i === s.tree.length - 1 ? '└── ' : '├── ') + t).join('\\n')}</pre>
          </div>\`).join('')}
      </div>
      <p style="max-width:74ch;color:var(--arta-sys-color-text-secondary);font-size:13px;margin-top:14px">
        In this system today: <b>brandTheme</b> → the partner sys-override token files (Meridian, Northstar),
        contrast- and hue-validated at build · <b>productConfig</b> → per-program data consumed by screens
        (limits, benefits, support routes — never themable) · <b>platformPolicy</b> → the flagged
        core-semantic groups + protected components; the build rejects any partner override (see Governance-in-CI).</p>
    </div>\`
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var y,u,m;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,x,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,g,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,k,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => \`
    <div style="max-width:1020px">
      <p style="color:var(--arta-sys-color-text-secondary);font-size:13.5px;line-height:1.6;max-width:70ch">
        Arta's current visual system is strong for premium product discovery, but it needs new patterns for
        <b>form density, lending status, disclosures and governed white-label configuration</b>. The lending
        component inventory and where each stands:</p>
      <div style="background:var(--arta-sys-color-surface-raised);border:1px solid var(--arta-sys-color-stroke-subtle);border-radius:var(--arta-sys-radius-surface);overflow:hidden;margin-top:12px">
        \${INVENTORY.map(([name, use, status, action]) => \`
          <div style="display:flex;gap:14px;align-items:baseline;padding:11px 16px;border-bottom:1px solid var(--arta-sys-color-stroke-subtle)">
            <b style="flex:0 0 175px;font-size:13px">\${name}</b>
            <span style="flex:1;font-size:12px;color:var(--arta-sys-color-text-secondary)">\${use}</span>
            <span style="flex:0 0 90px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:\${status === 'built' ? 'var(--arta-sys-color-status-positive)' : status === 'in prototype' ? 'var(--arta-sys-color-status-info)' : 'var(--arta-sys-color-text-tertiary)'}">\${status}</span>
            <span style="flex:0 0 240px;font-size:11.5px;color:\${action.startsWith('Keep') ? 'var(--arta-sys-color-status-positive)' : action.startsWith('Retire') ? 'var(--arta-sys-color-status-danger)' : 'var(--arta-sys-color-status-warning)'}">\${action}</span>
          </div>\`).join('')}
      </div>
    </div>\`
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const S=["ConfigurationModel","GovernanceInCI","TokenConstraints","WhatPartnersCannotChange","ComponentInventory"];export{d as ComponentInventory,o as ConfigurationModel,s as GovernanceInCI,n as TokenConstraints,i as WhatPartnersCannotChange,S as __namedExportsOrder,I as default};
